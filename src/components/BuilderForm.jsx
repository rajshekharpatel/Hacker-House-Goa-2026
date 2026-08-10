import {
  Instagram,
  RefreshCcw,
  Upload,
  UserRound,
} from "lucide-react";

function BuilderForm({
  data,
  updateField,
  setPhoto,
  reset,
}) {
  const handlePhotoUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image.");
      return;
    }

    if (file.size > 8 * 1024 * 1024) {
      alert("Please choose an image smaller than 8MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setPhoto(reader.result);
    };

    reader.readAsDataURL(file);

    event.target.value = "";
  };

  return (
    <aside className="builder-form">

      <div className="form-heading">
        <div>
          <span className="section-number">
            01 / IDENTITY
          </span>

          <h2>
            Build your card
          </h2>
        </div>

        <button
          type="button"
          className="reset-button"
          onClick={reset}
          title="Reset"
        >
          <RefreshCcw size={16} />
        </button>
      </div>

      <div className="fields">

        <div className="field">
          <label htmlFor="name">
            Builder name
          </label>

          <div className="input-container">
            <UserRound size={16} />

            <input
              id="name"
              type="text"
              value={data.name}
              maxLength={26}
              placeholder="YOUR NAME"
              onChange={(event) =>
                updateField(
                  "name",
                  event.target.value.toUpperCase()
                )
              }
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="builderId">
            Builder ID
          </label>

          <input
            id="builderId"
            type="text"
            value={data.builderId}
            maxLength={20}
            placeholder="HHG-2026-001"
            onChange={(event) =>
              updateField(
                "builderId",
                event.target.value.toUpperCase()
              )
            }
          />
        </div>

        <div className="field">
          <label htmlFor="builderClass">
            Builder class
          </label>

          <input
            id="builderClass"
            type="text"
            value={data.builderClass}
            maxLength={24}
            placeholder="TERMINAL WIZARD"
            onChange={(event) =>
              updateField(
                "builderClass",
                event.target.value.toUpperCase()
              )
            }
          />
        </div>

        <div className="field">
          <label htmlFor="instagram">
            Instagram
          </label>

          <div className="input-container">
            <Instagram size={16} />

            <input
              id="instagram"
              type="text"
              value={data.instagram}
              maxLength={32}
              placeholder="@username"
              onChange={(event) =>
                updateField(
                  "instagram",
                  event.target.value
                )
              }
            />
          </div>
        </div>

      </div>

      <div className="photo-upload">

        <div className="photo-upload-content">

          <span className="section-number">
            02 / PORTRAIT
          </span>

          <strong>
            Add your photo
          </strong>

          <small>
            PNG / JPG / WEBP · max 8MB
          </small>

        </div>

        <label className="upload-button">

          <Upload size={16} />

          {data.photo
            ? "CHANGE"
            : "UPLOAD"}

          <input
            type="file"
            accept="image/png,image/jpeg,image/webp"
            onChange={handlePhotoUpload}
          />

        </label>

      </div>

      <div className="form-note">
        <Instagram size={15} />

        <span>
          Instagram is used for the card QR code.
          GitHub and portfolio fields are intentionally
          removed.
        </span>
      </div>

    </aside>
  );
}

export default BuilderForm;