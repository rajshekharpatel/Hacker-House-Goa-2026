function CardPhoto({ photo }) {
  return (
    <div className="card-photo-zone">

      <div className="card-photo-inner">

        {photo ? (
          <img
            src={photo}
            alt="Builder"
            className="builder-photo"
            draggable="false"
          />
        ) : (
          <div className="photo-empty">
            <span className="photo-plus">
              +
            </span>

            <span>
              YOUR PHOTO
            </span>
          </div>
        )}

      </div>

    </div>
  );
}

export default CardPhoto;