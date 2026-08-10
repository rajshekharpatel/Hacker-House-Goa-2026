import {
  Code2,
  Sparkles,
} from "lucide-react";

import BuilderForm from "./components/BuilderForm";
import LivePreview from "./components/LivePreview";

import useBuilderCard from "./hooks/useBuilderCard";

function App() {
  const {
    data,
    updateField,
    setPhoto,
    reset,
  } = useBuilderCard();

  return (
    <div className="app">

      <div className="noise" />

      {/* HEADER */}

      <header className="topbar">

        <div className="brand">

          <div className="brand-logo">
            HH
          </div>

          <div className="brand-copy">

            <strong>
              HACKER HOUSE
            </strong>

            <span>
              GOA / 2026
            </span>

          </div>

        </div>

        <div className="top-status">

          <Sparkles size={14} />

          BUILDER CARD STUDIO

        </div>

      </header>

      {/* HERO */}

      <section className="hero">

        <div className="hero-main">

          <div className="hero-location">

            <span />

            28 — 31 OCT 2026 · GOA, INDIA

          </div>

          <h1>
            BUILD YOUR
            <em>IDENTITY.</em>
          </h1>

          <p>
            Create your official Hacker House Goa
            2026 builder card. Add your photo,
            identity and Instagram — then ship it.
          </p>

        </div>

        <div className="hero-terminal">

          <Code2 size={18} />

          <div>

            <strong>
              BUILD · SHIP · REPEAT
            </strong>

            <span>
              Your identity. Your build.
            </span>

          </div>

        </div>

      </section>

      {/* MAIN */}

      <main className="workspace">

        <BuilderForm
          data={data}
          updateField={updateField}
          setPhoto={setPhoto}
          reset={reset}
        />

        <LivePreview
          data={data}
        />

      </main>

      {/* FOOTER */}

      <footer className="site-footer">

        <span>
          HHG / BUILDER CARD / 2026
        </span>

        <span>
          BUILD SOMETHING WORTH REMEMBERING.
        </span>

      </footer>

    </div>
  );
}

export default App;