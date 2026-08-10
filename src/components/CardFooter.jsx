function CardFooter({ builderId }) {
  const id =
    builderId || "HHG-2026-001";

  const bars = Array.from(
    { length: 42 },
    (_, index) => {
      const character =
        id.charCodeAt(
          index % id.length
        ) || 72;

      return (
        <span
          key={index}
          style={{
            width: `${((character + index * 5) % 3) + 1}px`,
          }}
        />
      );
    }
  );

  return (
    <div className="card-footer-zone">

      <small>
        BUILDER ID
      </small>

      <div className="barcode">
        {bars}
      </div>

      <strong>
        {id}
      </strong>

    </div>
  );
}

export default CardFooter;