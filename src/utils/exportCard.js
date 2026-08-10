import { toPng } from "html-to-image";

const waitForImages = async (element) => {
  const images = Array.from(element.querySelectorAll("img"));

  await Promise.all(
    images.map((img) => {
      if (img.complete && img.naturalWidth > 0) {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    })
  );
};

const prepareElement = async (element) => {
  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  await waitForImages(element);

  await new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve);
    });
  });
};

export async function exportCardAsPNG(
  element,
  fileName = "HHG-2026-Builder-Card.png"
) {
  if (!element) {
    throw new Error("Card element was not found.");
  }

  await prepareElement(element);

  const width = element.offsetWidth;
  const height = element.offsetHeight;

  if (!width || !height) {
    throw new Error("Card has invalid dimensions.");
  }

  const dataUrl = await toPng(element, {
    cacheBust: true,

    pixelRatio: 2,

    width,
    height,

    canvasWidth: width * 2,
    canvasHeight: height * 2,

    backgroundColor: "#06100a",

    style: {
      margin: "0",
      transform: "none",
    },

    filter: (node) => {
      if (node.tagName === "BUTTON") {
        return false;
      }

      return true;
    },
  });

  const link = document.createElement("a");

  link.download = fileName;
  link.href = dataUrl;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  return dataUrl;
}

export async function createCardDataUrl(element) {
  if (!element) {
    throw new Error("Card element was not found.");
  }

  await prepareElement(element);

  const width = element.offsetWidth;
  const height = element.offsetHeight;

  if (!width || !height) {
    throw new Error("Card has invalid dimensions.");
  }

  return toPng(element, {
    cacheBust: true,

    pixelRatio: 2,

    width,
    height,

    canvasWidth: width * 2,
    canvasHeight: height * 2,

    backgroundColor: "#06100a",

    style: {
      margin: "0",
      transform: "none",
    },

    filter: (node) => {
      if (node.tagName === "BUTTON") {
        return false;
      }

      return true;
    },
  });
}

