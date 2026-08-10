import { useRef, useState } from "react";

import Navbar from "../components/Navbar";
import UploadBox from "../components/UploadBox";
import ImageCropper from "../components/ImageCropper";
import BuilderForm from "../components/BuilderForm";
import Preview from "../components/Preview";
import ActionButtons from "../components/ActionButtons";

function Home() {
  const [image, setImage] =
    useState(null);

  const [imageSettings, setImageSettings] =
    useState({
      scale: 1,
      positionX: 0,
      positionY: 0,
    });

  const [data, setData] =
    useState({
      name: "",
      role:
        "FULL STACK DEVELOPER",
      stack:
        "React · Node.js · MongoDB",
      title:
        "THE PRODUCT BUILDER",
    });

  const fileInputRef = useRef(null);

  const handleImageSelect = (
    selected
  ) => {
    setImage(selected.src);

    setImageSettings({
      scale: 1,
      positionX: 0,
      positionY: 0,
    });
  };

  const removeImage = () => {
    setImage(null);

    setImageSettings({
      scale: 1,
      positionX: 0,
      positionY: 0,
    });
  };

  return (
    <div className="app">
      <Navbar />

      <main className="page">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">
              HH GOA · BUILDER ID · 2026
            </span>

            <h1>
              FRAME
              <br />
              <em>YOUR</em>
              <br />
              GOA.
            </h1>

            <p>
              Turn your photo into your
              own HH Goa 2026 Builder ID.
              Add your stack, claim your
              builder class and share it
              with the world.
            </p>

            <div className="hero-tags">
              <span>
                #FRAMEINGOA
              </span>

              <span>
                NO MANUAL CROP
              </span>

              <span>
                READY TO SHARE
              </span>
            </div>
          </div>

          <div className="hero-art">
            <div className="palm">
              🌴
            </div>

            <div className="sun">
              ☀
            </div>

            <div className="wave">
              ~ ~ ~
            </div>

            <div className="art-label">
              GOA / INDIA
            </div>
          </div>
        </section>

        <section className="workspace">
          <div className="builder-panel">
            {!image ? (
              <UploadBox
                onImageSelect={
                  handleImageSelect
                }
              />
            ) : (
              <ImageCropper
                image={image}
                settings={
                  imageSettings
                }
                setSettings={
                  setImageSettings
                }
                onChangePhoto={
                  removeImage
                }
              />
            )}

            <BuilderForm
              data={data}
              setData={setData}
            />

            <ActionButtons
              image={image}
              imageSettings={
                imageSettings
              }
              data={data}
            />
          </div>

          <Preview
            image={image}
            imageSettings={
              imageSettings
            }
            data={data}
          />
        </section>

        <section className="how-section">
          <div>
            <span>
              HOW IT WORKS
            </span>

            <h2>
              THREE STEPS.
              <br />
              ONE BUILDER ID.
            </h2>
          </div>

          <div className="steps">
            <article>
              <b>01</b>
              <strong>
                UPLOAD
              </strong>
              <p>
                Pick any photo.
                No pre-cropping
                required.
              </p>
            </article>

            <article>
              <b>02</b>
              <strong>
                PERSONALIZE
              </strong>
              <p>
                Add your name,
                stack and builder
                class.
              </p>
            </article>

            <article>
              <b>03</b>
              <strong>
                SHARE
              </strong>
              <p>
                Download your
                Builder ID and
                share it with
                #FrameInGoa.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>
          HH GOA · 28 — 31 OCT 2026
        </span>

        <span>
          #FRAMEINGOA
        </span>

        <a
          href="https://hhgoa.com/"
          target="_blank"
          rel="noreferrer"
        >
          hhgoa.com ↗
        </a>
      </footer>
    </div>
  );
}

export default Home;