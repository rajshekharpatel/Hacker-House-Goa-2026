function CardHeader({ builderId }) {
  return (
    <div className="card-header-overlay">
      <span>
        BUILDER
      </span>

      <strong>
        {builderId || "HHG-2026-001"}
      </strong>
    </div>
  );
}

export default CardHeader;