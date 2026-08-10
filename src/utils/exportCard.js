import { toPng } from "html-to-image";

export async function exportCardAsPNG(
  element,
  fileName = "HHG-2026-Builder-Card.png"
) {
  if (!element) {
    throw new Error("Card element was not found.");
  }

  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  await new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve);
    });
  });

  const width = element.offsetWidth;
  const height = element.offsetHeight;

  const dataUrl = await toPng(element, {
    cacheBust: true,
    pixelRatio: 3,

    width,
    height,

    canvasWidth: width * 3,
    canvasHeight: height * 3,

    backgroundColor: "#06100a",

    style: {
      margin: "0",
      transform: "none",
    },
  });

  const link = document.createElement("a");

  link.download = fileName;
  link.href = dataUrl;

  document.body.appendChild(link);
  link.click();
  link.remove();

  return dataUrl;
}

export async function createCardDataUrl(element) {
  if (!element) {
    throw new Error("Card element was not found.");
  }

  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  return toPng(element, {
    cacheBust: true,
    pixelRatio: 2,
    backgroundColor: "#06100a",
  });
}