import { QRCodeSVG } from "qrcode.react";

function QRCodeGenerator({ value }) {
  return (
    <div className="qr-code-zone">

      <QRCodeSVG
        value={value}
        size={150}
        level="H"
        includeMargin
        bgColor="#f4ecd8"
        fgColor="#06100a"
      />

      <span>
        SCAN / CONNECT
      </span>

    </div>
  );
}

export default QRCodeGenerator;