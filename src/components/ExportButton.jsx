import {
  ArrowDownToLine,
  Share2,
  X,
} from "lucide-react";

import {
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
      console.error("Download failed:", error);

      alert(
        "Unable to download the ID card. Please try again."
      );
    }
  };

  const handleXShare = async () => {
    if (!cardRef.current) {
      alert("Card preview is not ready.");
      return;
    }

    try {
      /*
       * STEP 1
       * Generate and download the actual ID card.
       */
      await exportCardAsPNG(
        cardRef.current,
        createFileName(data.name)
      );

      /*
       * STEP 2
       * Create X post text.
       */
      const name =
        data.name?.trim() || "Builder";

      const role =
        data.builderClass?.trim() || "BUILDER";

      const text =
        `I just created my Hacker House Goa 2026 Builder Card 🚀\n\n` +
        `${name} · ${role}\n\n` +
        `#HHGoa2026 #HackerHouseGoa #BuildShipRepeat`;

      /*
       * STEP 3
       * Open X compose.
       */
      const xUrl =
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          text
        )}`;

      window.open(
        xUrl,
        "_blank",
        "noopener,noreferrer,width=760,height=620"
      );

    } catch (error) {
      console.error("X sharing failed:", error);

      alert(
        "Unable to prepare the card for X."
      );
    }
  };

  const handleShare = async () => {
    if (!cardRef.current) {
      alert("Card preview is not ready.");
      return;
    }

    try {
      /*
       * Create the PNG.
       */
      const dataUrl =
        await import("../utils/exportCard")
          .then((module) =>
            module.createCardDataUrl(cardRef.current)
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

      /*
       * If browser supports native file sharing,
       * open its share sheet.
       */
      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({
          files: [file],
        })
      ) {
        await navigator.share({
          title:
            "HH Goa 2026 Builder Card",

          text:
            "My Hacker House Goa 2026 Builder Card 🚀",

          files: [file],
        });

        return;
      }

      /*
       * Otherwise download the card.
       */
      await exportCardAsPNG(
        cardRef.current,
        createFileName(data.name)
      );

      alert(
        "Your card has been downloaded. You can now share the PNG."
      );

    } catch (error) {
      if (error?.name === "AbortError") {
        return;
      }

      console.error(
        "Share failed:",
        error
      );

      alert(
        "Sharing isn't supported by this browser. The card will be downloaded instead."
      );

      try {
        await exportCardAsPNG(
          cardRef.current,
          createFileName(data.name)
        );
      } catch (downloadError) {
        console.error(downloadError);
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

        DOWNLOAD & SHARE ON X
      </button>

      <button
        type="button"
        className="native-share-button"
        onClick={handleShare}
      >
        <Share2 size={17} />

        SHARE CARD
      </button>

    </div>
  );
}

export default ExportButton;