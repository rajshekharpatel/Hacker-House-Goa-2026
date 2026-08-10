import { stickers } from "../data/stickers";

function StickerLayer() {
  return (
    <div
      className="sticker-layer"
      aria-hidden="true"
    >
      {stickers.map((sticker) => (
        <img
          key={sticker.id}
          src={sticker.src}
          alt=""
          className={`card-sticker ${sticker.className}`}
          draggable="false"
        />
      ))}
    </div>
  );
}

export default StickerLayer;