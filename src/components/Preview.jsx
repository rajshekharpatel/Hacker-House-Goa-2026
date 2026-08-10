import BuilderCard from "./BuilderCard";

function Preview({
  image,
  imageSettings,
  data,
}) {
  return (
    <section className="preview-section">
      <div className="preview-heading">
        <div>
          <span>02 / PREVIEW</span>

          <h2>
            YOUR BUILDER ID
          </h2>
        </div>

        <div className="live-status">
          <i />
          LIVE
        </div>
      </div>

      <div className="preview-stage">
        <BuilderCard
          image={image}
          imageSettings={
            imageSettings
          }
          data={data}
        />
      </div>
    </section>
  );
}

export default Preview;