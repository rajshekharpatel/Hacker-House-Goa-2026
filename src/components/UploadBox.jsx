import { useRef, useState } from "react";

function UploadBox({ onImageSelect }) {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const processFile = (file) => {
    if (!file) return;

    const supportedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/heic",
      "image/heif",
    ];

    const isImage =
      supportedTypes.includes(file.type) ||
      /\.(jpg|jpeg|png|webp|heic|heif)$/i.test(
        file.name
      );

    if (!isImage) {
      alert(
        "Please select a JPG, PNG, WEBP or HEIC image."
      );
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      onImageSelect({
        src: reader.result,
        file,
        name: file.name,
      });
    };

    reader.readAsDataURL(file);
  };

  const handleInput = (event) => {
    processFile(event.target.files?.[0]);

    event.target.value = "";
  };

  const handleDrop = (event) => {
    event.preventDefault();

    setDragging(false);

    processFile(
      event.dataTransfer.files?.[0]
    );
  };

  return (
    <div
      className={`upload-box ${
        dragging ? "upload-dragging" : ""
      }`}
      onDragOver={(event) => {
        event.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => {
        setDragging(false);
      }}
      onDrop={handleDrop}
      onClick={() =>
        inputRef.current?.click()
      }
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
        hidden
        onChange={handleInput}
      />

      <div className="upload-icon">
        ↑
      </div>

      <div className="upload-title">
        DROP YOUR PHOTO HERE
      </div>

      <div className="upload-subtitle">
        OR CLICK TO SELECT
      </div>

      <div className="upload-formats">
        JPG · PNG · WEBP · HEIC
      </div>

      <div className="upload-note">
        Your complete photo is preserved.
        <br />
        No forced cropping.
      </div>
    </div>
  );
}

export default UploadBox;