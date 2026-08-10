import { useState } from "react";
import generateCard from "../utils/generateCard";
import downloadImage from "../utils/downloadImage";
import shareToX from "../utils/shareToX";

function ActionButtons({
  image,
  imageSettings,
  data,
}) {
  const [loading, setLoading] =
    useState(false);

  const handleDownload = async () => {
    if (!image) {
      alert(
        "Please upload a photo first."
      );
      return;
    }

    try {
      setLoading(true);

      const dataUrl =
        await generateCard({
          image,
          imageSettings,
          data,
        });

      downloadImage(
        dataUrl,
        "hh-goa-builder-id.png"
      );
    } catch (error) {
      console.error(error);

      alert(
        "Could not generate the card. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async () => {
    if (!image) {
      alert(
        "Please upload a photo first."
      );
      return;
    }

    try {
      setLoading(true);

      const dataUrl =
        await generateCard({
          image,
          imageSettings,
          data,
        });

      await shareToX({
        dataUrl,
        name: data.name,
      });
    } catch (error) {
      console.error(error);

      alert(
        "Could not prepare the share."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="action-area">
      <button
        type="button"
        className="download-button"
        onClick={handleDownload}
        disabled={loading}
      >
        {loading
          ? "GENERATING..."
          : "↓ DOWNLOAD ID"}
      </button>

      <button
        type="button"
        className="share-button"
        onClick={handleShare}
        disabled={loading}
      >
        𝕏 SHARE TO X
      </button>
    </div>
  );
}

export default ActionButtons;