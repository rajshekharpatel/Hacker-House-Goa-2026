import { forwardRef } from "react";

import template from "../assets/idCardTemplate.png";

import CardHeader from "./CardHeader";
import CardPhoto from "./CardPhoto";
import CardDetails from "./CardDetails";
import CardFooter from "./CardFooter";
import StickerLayer from "./StickerLayer";
import QRCodeGenerator from "./QRCodeGenerator";

import { generateQRValue } from "../utils/generateQR";

const BuilderCard = forwardRef(function BuilderCard(
  { data },
  ref
) {
  const qrValue = generateQRValue(
    data.instagram
  );

  return (
    <div
      ref={ref}
      className="builder-card"
    >

      {/* =================================================
          THE ONE AND ONLY COMPLETE CARD TEMPLATE
          ================================================= */}

      <img
        src={template}
        alt=""
        className="id-card-template"
        draggable="false"
      />

      {/* =================================================
          DECORATIVE STICKERS
          ================================================= */}

      <StickerLayer />

      {/* =================================================
          DYNAMIC PHOTO
          ================================================= */}

      <CardPhoto
        photo={data.photo}
      />

      {/* =================================================
          DYNAMIC INFORMATION
          ================================================= */}

      <CardHeader
        builderId={data.builderId}
      />

      <CardDetails
        name={data.name}
        builderId={data.builderId}
        builderClass={data.builderClass}
        instagram={data.instagram}
      />

      {/* =================================================
          QR
          ================================================= */}

      <QRCodeGenerator
        value={qrValue}
      />

      {/* =================================================
          BUILDER ID / BARCODE
          ================================================= */}

      <CardFooter
        builderId={data.builderId}
      />

    </div>
  );
});

export default BuilderCard;