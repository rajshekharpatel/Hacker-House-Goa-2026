function BuilderCard({
  image,
  imageSettings,
  data,
  cardRef,
}) {
  return (
    <div
      ref={cardRef}
      className="builder-card"
    >
      <div className="card-sun" />

      <div className="card-leaf leaf-one">
        ✦
      </div>

      <div className="card-leaf leaf-two">
        ✦
      </div>

      <header className="card-header">
        <div className="card-brand">
          <div className="hh-mark">
            HH
          </div>

          <div>
            <strong>
              HACKER HOUSE
            </strong>

            <span>
              GOA · 2026
            </span>
          </div>
        </div>

        <div className="card-code">
          <span>BUILDER ID</span>
          <strong>#FRAMEINGOA</strong>
        </div>
      </header>

      <main className="card-main">
        <div className="card-photo">
          {image ? (
            <img
              src={image}
              alt="Builder"
              draggable="false"
              style={{
                transform: `
                  translate(
                    ${imageSettings.positionX}px,
                    ${imageSettings.positionY}px
                  )
                  scale(${imageSettings.scale})
                `,
              }}
            />
          ) : (
            <div className="photo-placeholder">
              <strong>
                YOUR PHOTO
              </strong>

              <span>
                UPLOAD TO BEGIN
              </span>
            </div>
          )}

          <span className="photo-label">
            GOA / 2026
          </span>
        </div>

        <div className="card-information">
          <span className="identity-label">
            BUILDER IDENTITY
          </span>

          <h1>
            {data.name ||
              "YOUR NAME"}
          </h1>

          <div className="role">
            {data.role}
          </div>

          <div className="card-rule" />

          <div className="info-row">
            <div>
              <span>STACK</span>
              <strong>
                {data.stack ||
                  "YOUR STACK"}
              </strong>
            </div>

            <div>
              <span>BUILDER CLASS</span>
              <strong>
                {data.title}
              </strong>
            </div>
          </div>

          <div className="card-message">
            <strong>
              BUILD.
            </strong>

            <strong>
              SHIP.
            </strong>

            <strong>
              REPEAT.
            </strong>

            <small>
              MADE IN THE GOA SUN.
            </small>
          </div>
        </div>
      </main>

      <footer className="card-footer">
        <div>
          <span>
            GOA, INDIA
          </span>

          <strong>
            28 — 31 OCT 2026
          </strong>
        </div>

        <div className="footer-hh">
          HH
        </div>
      </footer>

      <div className="card-color-strip">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default BuilderCard;