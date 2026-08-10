function BuilderForm({
  data,
  setData,
}) {
  const update = (field, value) => {
    setData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  return (
    <div className="builder-form">
      <div className="section-heading">
        <span>01 / IDENTITY</span>

        <h2>
          TELL US WHO'S BUILDING.
        </h2>

        <p>
          Add your builder details.
          Keep it simple.
        </p>
      </div>

      <div className="form-grid">
        <label className="field full">
          <span>YOUR NAME</span>

          <input
            type="text"
            value={data.name}
            placeholder="Raj Shekhar Patel"
            maxLength={30}
            onChange={(event) =>
              update(
                "name",
                event.target.value
              )
            }
          />
        </label>

        <label className="field">
          <span>ROLE</span>

          <select
            value={data.role}
            onChange={(event) =>
              update(
                "role",
                event.target.value
              )
            }
          >
            <option>
              FULL STACK DEVELOPER
            </option>

            <option>
              FRONTEND DEVELOPER
            </option>

            <option>
              BACKEND DEVELOPER
            </option>

            <option>
              SOFTWARE ENGINEER
            </option>

            <option>
              UI / UX DESIGNER
            </option>

            <option>
              PRODUCT BUILDER
            </option>
          </select>
        </label>

        <label className="field">
          <span>STACK</span>

          <input
            type="text"
            value={data.stack}
            placeholder="React · Node · MongoDB"
            maxLength={35}
            onChange={(event) =>
              update(
                "stack",
                event.target.value
              )
            }
          />
        </label>

        <label className="field full">
          <span>BUILDER CLASS</span>

          <select
            value={data.title}
            onChange={(event) =>
              update(
                "title",
                event.target.value
              )
            }
          >
            <option>
              THE PRODUCT BUILDER
            </option>

            <option>
              THE SHIPPER
            </option>

            <option>
              THE SYSTEM THINKER
            </option>

            <option>
              THE CODE CRAFTER
            </option>

            <option>
              THE PIXEL ARCHITECT
            </option>

            <option>
              THE FULL STACK WIZARD
            </option>

            <option>
              THE PROBLEM SOLVER
            </option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default BuilderForm;