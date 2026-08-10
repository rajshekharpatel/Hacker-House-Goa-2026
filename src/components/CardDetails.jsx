function CardDetails({
  name,
  builderId,
  builderClass,
  instagram,
}) {
  const handle =
    instagram?.trim()
      ? instagram.startsWith("@")
        ? instagram
        : `@${instagram}`
      : "@builder";

  return (
    <div className="card-details">

      <div className="card-name">
        {name || "YOUR NAME"}
      </div>

      <div className="card-role">
        <span>
          {builderClass || "BUILDER"}
        </span>

        <b>•</b>

        <span>
          {builderId || "HHG-2026-001"}
        </span>
      </div>

      <div className="card-instagram">
        {handle}
      </div>

    </div>
  );
}

export default CardDetails;