import { useRef } from "react";

import BuilderCard from "./BuilderCard";
import ExportButton from "./ExportButton";

function LivePreview({ data }) {
  const cardRef = useRef(null);

  return (
    <section className="preview">

      <div className="preview-heading">

        <span>
          LIVE PREVIEW
        </span>

        <div className="preview-ready">
          <i />
          READY
        </div>

      </div>

      <div className="preview-canvas">

        <BuilderCard
          ref={cardRef}
          data={data}
        />

      </div>

      <ExportButton
        cardRef={cardRef}
        data={data}
      />

    </section>
  );
}

export default LivePreview;