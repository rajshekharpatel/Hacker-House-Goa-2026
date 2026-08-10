async function shareToX({
  dataUrl,
  name,
}) {
  /*
   * Mobile browsers can sometimes use the
   * native Web Share API and attach the
   * generated image.
   */

  try {
    const response =
      await fetch(dataUrl);

    const blob =
      await response.blob();

    const file =
      new File(
        [blob],
        "hh-goa-builder-id.png",
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
          "HH Goa 2026 Builder ID",

        text:
          `I just created my HH Goa 2026 Builder ID. #FrameInGoa`,

        files: [file],
      });

      return;
    }
  } catch (error) {
    console.log(
      "Native sharing unavailable:",
      error
    );
  }

  /*
   * Desktop fallback.
   *
   * X's web intent can pre-fill text,
   * but a normal browser cannot silently
   * attach a locally generated PNG to it.
   */

  const text =
    `I'm building for HH Goa 2026 🌴 #FrameInGoa`;

  const url =
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}`;

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}

export default shareToX;