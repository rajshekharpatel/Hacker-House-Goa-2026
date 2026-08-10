import { useState } from "react";

function ImageCropper({
  image,
  settings,
  setSettings,
  onChangePhoto,
}) {
  const [dragging, setDragging] =
    useState(false);

  const [start, setStart] = useState({
    x: 0,
    y: 0,
  });

  const resetImage = () => {
    setSettings({
      scale: 1,
      positionX: 0,
      positionY: 0,
    });
  };

  const handlePointerDown = (event) => {
    event.currentTarget.setPointerCapture(
      event.pointerId
    );

    setDragging(true);

    setStart({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handlePointerMove = (event) => {
    if (!dragging) return;

    const dx =
      event.clientX - start.x;

    const dy =
      event.clientY - start.y;

    setSettings((previous) => ({
      ...previous,
      positionX:
        previous.positionX + dx,
      positionY:
        previous.positionY + dy,
    }));

    setStart({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const stopDragging = () => {
    setDragging(false);
  };

  return (
    <div className="photo-editor">
      <div className="editor-heading">
        <div>
          <span>PHOTO POSITION</span>
          <strong>YOUR ORIGINAL PHOTO</strong>
        </div>

        <button
          type="button"
          onClick={resetImage}
          className="reset-btn"
        >
          RESET
        </button>
      </div>

      <div
        className={`editor-window ${
          dragging ? "is-dragging" : ""
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
      >
        <img
          src={image}
          alt="Selected"
          draggable="false"
          style={{
            transform: `
              translate(
                ${settings.positionX}px,
                ${settings.positionY}px
              )
              scale(${settings.scale})
            `,
          }}
        />

        <div className="editor-badge">
          FULL PHOTO
        </div>
      </div>

      <div className="editor-controls">
        <span>ZOOM</span>

        <input
          type="range"
          min="0.5"
          max="2"
          step="0.01"
          value={settings.scale}
          onChange={(event) => {
            setSettings((previous) => ({
              ...previous,
              scale: Number(
                event.target.value
              ),
            }));
          }}
        />

        <strong>
          {Math.round(
            settings.scale * 100
          )}
          %
        </strong>
      </div>

      <div className="editor-help">
        Drag to position · Zoom if needed ·
        No cropping required
      </div>

      <button
        type="button"
        className="change-photo-btn"
        onClick={onChangePhoto}
      >
        CHANGE PHOTO
      </button>
    </div>
  );
}

export default ImageCropper;