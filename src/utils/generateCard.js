const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const image =
      new Image();

    image.onload = () =>
      resolve(image);

    image.onerror = reject;

    image.src = src;
  });

const fitImageContain = ({
  ctx,
  image,
  x,
  y,
  width,
  height,
  scale = 1,
  offsetX = 0,
  offsetY = 0,
}) => {
  const imageRatio =
    image.naturalWidth /
    image.naturalHeight;

  const boxRatio =
    width / height;

  let drawWidth;
  let drawHeight;

  if (imageRatio > boxRatio) {
    drawWidth = width;
    drawHeight =
      width / imageRatio;
  } else {
    drawHeight = height;
    drawWidth =
      height * imageRatio;
  }

  drawWidth *= scale;
  drawHeight *= scale;

  const drawX =
    x +
    (width - drawWidth) / 2 +
    offsetX;

  const drawY =
    y +
    (height - drawHeight) / 2 +
    offsetY;

  ctx.drawImage(
    image,
    drawX,
    drawY,
    drawWidth,
    drawHeight
  );
};

function roundedRect(
  ctx,
  x,
  y,
  width,
  height,
  radius
) {
  ctx.beginPath();

  ctx.moveTo(
    x + radius,
    y
  );

  ctx.lineTo(
    x + width - radius,
    y
  );

  ctx.quadraticCurveTo(
    x + width,
    y,
    x + width,
    y + radius
  );

  ctx.lineTo(
    x + width,
    y + height - radius
  );

  ctx.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius,
    y + height
  );

  ctx.lineTo(
    x + radius,
    y + height
  );

  ctx.quadraticCurveTo(
    x,
    y + height,
    x,
    y + height - radius
  );

  ctx.lineTo(
    x,
    y + radius
  );

  ctx.quadraticCurveTo(
    x,
    y,
    x + radius,
    y
  );

  ctx.closePath();
}

async function generateCard({
  image,
  imageSettings,
  data,
}) {
  const WIDTH = 1600;
  const HEIGHT = 1010;

  const canvas =
    document.createElement(
      "canvas"
    );

  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  const ctx =
    canvas.getContext("2d");

  const photo =
    await loadImage(image);

  const GREEN = "#075B3A";
  const DARK = "#033D28";
  const CREAM = "#F6F0D8";
  const YELLOW = "#F4D63E";
  const PINK = "#EA4D72";
  const TEXT = "#52675B";

  /* Background */

  ctx.fillStyle = CREAM;

  ctx.fillRect(
    0,
    0,
    WIDTH,
    HEIGHT
  );

  /* Border */

  ctx.strokeStyle = DARK;
  ctx.lineWidth = 10;

  ctx.strokeRect(
    8,
    8,
    WIDTH - 16,
    HEIGHT - 16
  );

  /* Top stripe */

  ctx.fillStyle = GREEN;

  ctx.fillRect(
    0,
    0,
    WIDTH,
    18
  );

  /* Sun */

  ctx.fillStyle = YELLOW;

  ctx.beginPath();

  ctx.arc(
    1460,
    90,
    100,
    0,
    Math.PI * 2
  );

  ctx.fill();

  /* Brand */

  ctx.fillStyle = PINK;

  ctx.font =
    "900 52px Arial";

  ctx.fillText(
    "HH",
    60,
    85
  );

  ctx.fillStyle = DARK;

  ctx.font =
    "900 23px Arial";

  ctx.fillText(
    "HACKER HOUSE",
    130,
    65
  );

  ctx.fillStyle = GREEN;

  ctx.font =
    "700 15px Arial";

  ctx.fillText(
    "GOA · 2026",
    130,
    88
  );

  /* Right heading */

  ctx.fillStyle = TEXT;

  ctx.font =
    "700 12px Arial";

  ctx.fillText(
    "BUILDER ID",
    1300,
    57
  );

  ctx.fillStyle = PINK;

  ctx.font =
    "900 16px Arial";

  ctx.fillText(
    "#FRAMEINGOA",
    1300,
    80
  );

  /* Photo */

  const photoX = 60;
  const photoY = 150;
  const photoWidth = 660;
  const photoHeight = 620;

  ctx.fillStyle = GREEN;

  roundedRect(
    ctx,
    photoX,
    photoY,
    photoWidth,
    photoHeight,
    10
  );

  ctx.fill();

  ctx.save();

  roundedRect(
    ctx,
    photoX,
    photoY,
    photoWidth,
    photoHeight,
    10
  );

  ctx.clip();

  fitImageContain({
    ctx,
    image: photo,
    x: photoX,
    y: photoY,
    width: photoWidth,
    height: photoHeight,
    scale:
      imageSettings.scale,
    offsetX:
      imageSettings.positionX,
    offsetY:
      imageSettings.positionY,
  });

  ctx.restore();

  ctx.strokeStyle = DARK;
  ctx.lineWidth = 6;

  roundedRect(
    ctx,
    photoX,
    photoY,
    photoWidth,
    photoHeight,
    10
  );

  ctx.stroke();

  /* Photo label */

  ctx.fillStyle = PINK;

  ctx.fillRect(
    photoX,
    photoY +
      photoHeight -
      48,
    145,
    48
  );

  ctx.fillStyle = "#FFFFFF";

  ctx.font =
    "800 13px Arial";

  ctx.fillText(
    "GOA / 2026",
    photoX + 16,
    photoY +
      photoHeight -
      18
  );

  /* Identity */

  const infoX = 810;

  ctx.fillStyle = GREEN;

  ctx.font =
    "800 13px Arial";

  ctx.fillText(
    "BUILDER IDENTITY",
    infoX,
    200
  );

  const name =
    data.name?.trim() ||
    "YOUR NAME";

  ctx.fillStyle = DARK;

  ctx.font =
    "900 64px Arial";

  ctx.fillText(
    name
      .toUpperCase()
      .slice(0, 18),
    infoX,
    275
  );

  ctx.fillStyle = PINK;

  ctx.font =
    "800 19px Arial";

  ctx.fillText(
    data.role ||
      "FULL STACK DEVELOPER",
    infoX,
    315
  );

  /* Divider */

  ctx.fillStyle = GREEN;

  ctx.fillRect(
    infoX,
    350,
    650,
    5
  );

  /* Stack */

  ctx.fillStyle = TEXT;

  ctx.font =
    "700 12px Arial";

  ctx.fillText(
    "STACK",
    infoX,
    395
  );

  ctx.fillStyle = DARK;

  ctx.font =
    "800 22px Arial";

  ctx.fillText(
    (
      data.stack ||
      "React · Node · MongoDB"
    ).slice(0, 40),
    infoX,
    425
  );

  /* Builder class */

  ctx.fillStyle = TEXT;

  ctx.font =
    "700 12px Arial";

  ctx.fillText(
    "BUILDER CLASS",
    infoX,
    475
  );

  ctx.fillStyle = DARK;

  ctx.font =
    "900 22px Arial";

  ctx.fillText(
    (
      data.title ||
      "THE PRODUCT BUILDER"
    ).slice(0, 40),
    infoX,
    505
  );

  /* Yellow message */

  ctx.fillStyle = YELLOW;

  roundedRect(
    ctx,
    infoX,
    555,
    650,
    120,
    8
  );

  ctx.fill();

  ctx.fillStyle = DARK;

  ctx.font =
    "900 28px Arial";

  ctx.fillText(
    "BUILD.",
    infoX + 25,
    600
  );

  ctx.fillStyle = PINK;

  ctx.fillText(
    "SHIP.",
    infoX + 140,
    600
  );

  ctx.fillStyle = GREEN;

  ctx.fillText(
    "REPEAT.",
    infoX + 245,
    600
  );

  ctx.fillStyle = TEXT;

  ctx.font =
    "700 12px Arial";

  ctx.fillText(
    "MADE IN THE GOA SUN.",
    infoX + 25,
    635
  );

  /* Footer */

  ctx.fillStyle = GREEN;

  ctx.font =
    "800 13px Arial";

  ctx.fillText(
    "GOA, INDIA",
    60,
    875
  );

  ctx.fillStyle = PINK;

  ctx.fillText(
    "28 — 31 OCT 2026",
    60,
    900
  );

  ctx.fillStyle = TEXT;

  ctx.font =
    "700 11px Arial";

  ctx.fillText(
    "HACKER HOUSE GOA / 2026",
    1250,
    890
  );

  ctx.fillStyle = PINK;

  ctx.font =
    "900 45px Arial";

  ctx.fillText(
    "HH",
    1460,
    905
  );

  /* Bottom stripe */

  ctx.fillStyle = GREEN;

  ctx.fillRect(
    0,
    HEIGHT - 12,
    WIDTH,
    12
  );

  ctx.fillStyle = YELLOW;

  ctx.fillRect(
    1000,
    HEIGHT - 12,
    250,
    12
  );

  ctx.fillStyle = PINK;

  ctx.fillRect(
    1250,
    HEIGHT - 12,
    350,
    12
  );

  return canvas.toDataURL(
    "image/png",
    1
  );
}

export default generateCard;