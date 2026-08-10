import {
  ArrowDownToLine,
  Share2,
  X,
} from "lucide-react";

import {
  createCardDataUrl,
  exportCardAsPNG,
} from "../utils/exportCard";

function createFileName(name) {
  const cleanName =
    String(name || "builder")
      .trim()
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .toLowerCase();

  return `HHG-2026-${cleanName || "builder"}-card.png`;
}

function ExportButton({ cardRef, data }) {
  const handleDownload = async () => {
    if (!cardRef.current) {
      alert("Card preview is not ready.");
      return;
    }

    try {
      await exportCardAsPNG(
        cardRef.current,
        createFileName(data.name)
      );
    } catch (error) {
      console.error(error);

      alert(
        "Unable to export the card. Please try again."
      );
    }
  };

  const handleXShare = () => {
    const name =
      data.name?.trim() || "a builder";

    const role =
      data.builderClass?.trim() ||
      "BUILDER";

    const text =
      `I just created my Hacker House Goa 2026 Builder Card 🚀\n\n` +
      `${name} · ${role}\n\n` +
      `#HHGoa2026 #HackerHouseGoa #BuildShipRepeat`;

    const url =
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer,width=760,height=620"
    );
  };

  const handleNativeShare = async () => {
    if (!cardRef.current) {
      return;
    }

    try {
      const dataUrl =
        await createCardDataUrl(
          cardRef.current
        );

      const response =
        await fetch(dataUrl);

      const blob =
        await response.blob();

      const file = new File(
        [blob],
        createFileName(data.name),
        {
          type: "image/png",
        }
      );

      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({
          files: [file],
        })
      ) {
        await navigator.share({
          title:
            "Hacker House Goa 2026 Builder Card",

          text:
            "My Hacker House Goa 2026 Builder Card 🚀",

          files: [file],
        });

        return;
      }

      handleXShare();

    } catch (error) {
      if (error?.name !== "AbortError") {
        console.error(error);
        handleXShare();
      }
    }
  };

  return (
    <div className="export-actions">

      <button
        type="button"
        className="download-button"
        onClick={handleDownload}
      >
        <ArrowDownToLine size={18} />
        DOWNLOAD ID CARD
      </button>

      <button
        type="button"
        className="x-button"
        onClick={handleXShare}
      >
        <X size={18} />
        SHARE ON X / TWITTER
      </button>

      <button
        type="button"
        className="native-share-button"
        onClick={handleNativeShare}
      >
        <Share2 size={17} />
        SHARE CARD
      </button>

    </div>
  );
}

export default ExportButton;