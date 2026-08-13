import React from "react";
import HERO_IMAGE from "../assets/images/intro.png";
import LOGO_IMAGE from "../assets/images/giolablogo.png";
import ScrollReveal from "../components/animations/ScrollReveal";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <style>{`
        /* ── Base Section ──────────────────────────────────────── */
        .hero-section {
          background-color: #FFFFFF;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 60px 24px;
          box-sizing: border-box;
        }

        #hero {
          scroll-margin-top: 110px;
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: minmax(320px, 560px) 1fr;
          align-items: center;
          gap: 40px;
          position: relative;
          z-index: 2;
        }

        /* ── Left Card ────────────────────────────────────────── */
        .hero-card {
          background: #FFFFFF;
          border: 1px solid #E8EAF0;
          border-radius: 4px;
          padding: 48px 56px 56px;
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.06);
          box-sizing: border-box;
        }

        .hero-image-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 44px;
        }

        .hero-image {
          max-width: 100%;
          height: auto;
        }

        .hero-heading {
          font-size: clamp(2.4rem, 4.2vw, 3.4rem);
          font-weight: 800;
          color: #1E2340;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0 0 28px;
        }

        .hero-heading em {
          font-style: italic;
          font-weight: 700;
        }

        .hero-text {
          font-size: 0.95rem;
          line-height: 1.75;
          color: #4B5468;
          text-align: justify;
          margin: 0;
        }

        /* ── Right Watermark Logo ────────────────────────────── */
        .hero-watermark {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0.9;
          pointer-events: none;
          user-select: none;
        }

        .hero-watermark-image {
          width: 100%;
          max-width: 480px;
          height: auto;
          object-fit: contain;
        }

        /* ── Responsive Rules ────────────────────────────────── */
        @media (max-width: 1100px) {
          .hero-container {
            grid-template-columns: 1fr;
          }
          .hero-watermark {
            display: none;
          }
          .hero-section {
            min-height: auto;
            padding: 70px 24px;
          }
        }

        @media (max-width: 640px) {
          .hero-card {
            padding: 32px 24px 40px;
          }
          .hero-section {
            padding: 50px 16px;
          }
        }
      `}</style>

      <div className="hero-container">
        {/* ── Left: Card with smooth entrance animation ── */}
        <ScrollReveal direction="up" distance={40} delay={0}>
          <div className="hero-card">
            <div className="hero-image-wrap">
              <img
                src={HERO_IMAGE}
                alt="Digital terrain model"
                className="hero-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/380x300?text=DTM+Preview";
                }}
              />
            </div>

            <h1 className="hero-heading">
              Make your <em>Geoartifact</em>
            </h1>

            <p className="hero-text">
              We provide high-accuracy elevation models tailored to your project needs.
              Leveraging advanced surveying technologies and geospatial analysis, our
              solutions deliver detailed terrain data to support planning, engineering,
              and environmental applications. From digital terrain models to contour
              mapping, we ensure precise, reliable, and actionable insights for every
              project.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Right: Watermark logo smooth fade/slide ── */}
        <ScrollReveal direction="left" distance={50} delay={200}>
          <div className="hero-watermark">
            <img
              src={LOGO_IMAGE}
              alt="GeoAi Lab logo"
              className="hero-watermark-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/320x360?text=Logo";
              }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}