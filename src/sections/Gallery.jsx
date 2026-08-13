import React, { useState, useMemo, useEffect } from "react";
import ScrollReveal from "../components/animations/ScrollReveal";

// 1. Automatically load all images from 'src/assets/images/gallery/' (Vite glob)
const imageModules = import.meta.glob(
  "../assets/images/gallery/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  { eager: true }
);

const RAW_GALLERY_ITEMS = Object.values(imageModules).map((module) => ({
  image: module.default,
}));

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Prevent background scrolling when modal or lightbox is open
  useEffect(() => {
    if (isModalOpen || selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, selectedImageIndex]);

  // Keyboard navigation for Lightbox (Left/Right arrow, ESC)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) => (prev + 1) % RAW_GALLERY_ITEMS.length);
      }
      if (e.key === "ArrowLeft") {
        setSelectedImageIndex(
          (prev) => (prev - 1 + RAW_GALLERY_ITEMS.length) % RAW_GALLERY_ITEMS.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  // Initial display: 8 images (4 before text, 4 after text or arranged around text)
  const initialImages = useMemo(() => {
    return RAW_GALLERY_ITEMS.slice(0, 8);
  }, []);

  return (
    <section id="gallery" className="pg-gallery-section">
      <style>{`
        /* ── Base Section ────────────────────────────────────────── */
        .pg-gallery-section {
          background-color: #FFFFFF;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1A202C;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 90px 24px;
          box-sizing: border-box;
        }

        #gallery {
          scroll-margin-top: 50px;
        }

        .pg-container {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
        }

        /* ── Grid Layout ───────────────────────────────────────── */
        .pg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          align-items: stretch;
        }

        /* ── Center Header Card ────────────────────────────────── */
        .pg-header-card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 24px 20px;
        }

        .pg-title {
          font-size: clamp(2rem, 3.2vw, 3rem);
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }

        .pg-description {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #475569;
          margin: 0;
          max-width: 380px;
        }

        /* ── Image Card Component ───────────────────────────────── */
        .pg-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          aspect-ratio: 16 / 10;
          cursor: pointer;
          height: 100%;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pg-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }

        .pg-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pg-card:hover .pg-card__img {
          transform: scale(1.06);
        }

        .pg-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.5) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 20px;
        }

        .pg-card:hover .pg-card__overlay {
          opacity: 1;
        }

        .pg-card__icon {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(8px);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── See More Button Container ─────────────────────────── */
        .pg-actions {
          display: flex;
          justify-content: center;
          margin-top: 50px;
        }

        .pg-btn-see-more {
          background: #0F172A;
          color: #FFFFFF;
          border: none;
          padding: 16px 38px;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.2);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pg-btn-see-more:hover {
          background: #1E293B;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 16px 32px rgba(15, 23, 42, 0.3);
        }

        .pg-btn-see-more:active {
          transform: translateY(0) scale(0.98);
        }

        /* ── Modal & Lightbox Animations ──────────────────────── */
        @keyframes pgFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pgSlideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ── Full Gallery Modal Popup ───────────────────────── */
        .pg-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px 20px;
          animation: pgFadeIn 0.3s ease forwards;
        }

        .pg-modal-content {
          background: #FFFFFF;
          width: 100%;
          max-width: 1320px;
          height: 88vh;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          animation: pgSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .pg-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 36px;
          border-bottom: 1px solid #E2E8F0;
        }

        .pg-modal-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0F172A;
          margin: 0;
        }

        .pg-modal-subtitle {
          font-size: 0.85rem;
          color: #64748B;
          margin-top: 4px;
        }

        .pg-modal-close-btn {
          background: #F1F5F9;
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #0F172A;
          transition: all 0.2s ease;
        }

        .pg-modal-close-btn:hover {
          background: #E2E8F0;
          transform: rotate(90deg);
        }

        .pg-modal-body {
          flex: 1;
          overflow-y: auto;
          padding: 36px;
        }

        .pg-modal-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        /* ── Fullscreen Lightbox Preview ────────────────────── */
        .pg-lightbox {
          position: fixed;
          inset: 0;
          z-index: 1100;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pgFadeIn 0.25s ease forwards;
        }

        .pg-lightbox__img {
          max-width: 90vw;
          max-height: 85vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.8);
          animation: pgSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .pg-lightbox__btn {
          position: absolute;
          background: rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
          border: none;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .pg-lightbox__btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.08);
        }

        .pg-lightbox__close { top: 30px; right: 30px; }
        .pg-lightbox__prev { left: 30px; }
        .pg-lightbox__next { right: 30px; }

        .pg-lightbox__counter {
          position: absolute;
          bottom: 24px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          letter-spacing: 0.1em;
        }

        /* ── Responsive Rules ────────────────────────────────── */
        @media (max-width: 1024px) {
          .pg-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .pg-header-card {
            grid-column: span 2;
            padding: 10px 0 20px;
          }
          .pg-gallery-section {
            min-height: auto;
            padding: 70px 24px;
          }
        }

        @media (max-width: 640px) {
          .pg-grid {
            grid-template-columns: 1fr;
          }
          .pg-header-card {
            grid-column: span 1;
          }
          .pg-gallery-section {
            padding: 60px 16px;
          }
          .pg-modal-content {
            height: 95vh;
            border-radius: 16px;
          }
          .pg-modal-header {
            padding: 18px 20px;
          }
          .pg-modal-body {
            padding: 20px;
          }
        }
      `}</style>

      <div className="pg-container">
        {/* Main Grid with ScrollReveal Staggered Animations */}
        <div className="pg-grid">
          {/* Top Left Image */}
          {initialImages[0] && (
            <ScrollReveal delay={0} direction="up" distance={30}>
              <div className="pg-card" onClick={() => setSelectedImageIndex(0)}>
                <img src={initialImages[0].image} alt="Gallery item" className="pg-card__img" />
                <div className="pg-card__overlay">
                  <span className="pg-card__icon">
                    <ZoomIcon />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Top Center Description Box */}
          <div className="pg-header-card">
            <ScrollReveal delay={0}>
              <h2 className="pg-title">Photo Gallery</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="pg-description">
                At GeoAI Laboratory, we have conducted several training and awareness sessions
                focused on leveraging geospatial technologies and artificial intelligence for
                real-world applications. These sessions aim to empower participants with cutting-edge
                tools.
              </p>
            </ScrollReveal>
          </div>

          {/* Top Right Image */}
          {initialImages[1] && (
            <ScrollReveal delay={200} direction="up" distance={30}>
              <div className="pg-card" onClick={() => setSelectedImageIndex(1)}>
                <img src={initialImages[1].image} alt="Gallery item" className="pg-card__img" />
                <div className="pg-card__overlay">
                  <span className="pg-card__icon">
                    <ZoomIcon />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Remaining Images in Grid */}
          {initialImages.slice(2, 8).map((item, idx) => (
            <ScrollReveal key={idx + 2} delay={(idx % 3) * 120} direction="up" distance={30}>
              <div
                className="pg-card"
                onClick={() => setSelectedImageIndex(idx + 2)}
              >
                <img src={item.image} alt={`Gallery item ${idx + 3}`} className="pg-card__img" />
                <div className="pg-card__overlay">
                  <span className="pg-card__icon">
                    <ZoomIcon />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* See More Button */}
        <div className="pg-actions">
          <ScrollReveal delay={200} direction="up">
            <button className="pg-btn-see-more" onClick={() => setIsModalOpen(true)}>
              See More Photos
            </button>
          </ScrollReveal>
        </div>
      </div>

      {/* ── All Images Modal Popup ─────────────────────────────── */}
      {isModalOpen && (
        <div className="pg-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="pg-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="pg-modal-header">
              <div>
                <h3 className="pg-modal-title">All Gallery Photos</h3>
                <div className="pg-modal-subtitle">
                  Showing {RAW_GALLERY_ITEMS.length} photos from GeoAI Laboratory events
                </div>
              </div>
              <button
                className="pg-modal-close-btn"
                aria-label="Close modal"
                onClick={() => setIsModalOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>

            <div className="pg-modal-body">
              <div className="pg-modal-grid">
                {RAW_GALLERY_ITEMS.map((item, index) => (
                  <div
                    key={index}
                    className="pg-card"
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img
                      src={item.image}
                      alt={`Gallery item ${index + 1}`}
                      className="pg-card__img"
                      loading="lazy"
                    />
                    <div className="pg-card__overlay">
                      <span className="pg-card__icon">
                        <ZoomIcon />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Fullscreen Image Lightbox Preview ──────────────────── */}
      {selectedImageIndex !== null && RAW_GALLERY_ITEMS[selectedImageIndex] && (
        <div className="pg-lightbox" onClick={() => setSelectedImageIndex(null)}>
          <button
            className="pg-lightbox__btn pg-lightbox__close"
            onClick={() => setSelectedImageIndex(null)}
          >
            <CloseIcon />
          </button>

          <button
            className="pg-lightbox__btn pg-lightbox__prev"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(
                (prev) => (prev - 1 + RAW_GALLERY_ITEMS.length) % RAW_GALLERY_ITEMS.length
              );
            }}
          >
            <ChevronLeftIcon />
          </button>

          <img
            src={RAW_GALLERY_ITEMS[selectedImageIndex].image}
            alt="Enlarged view"
            className="pg-lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="pg-lightbox__btn pg-lightbox__next"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((prev) => (prev + 1) % RAW_GALLERY_ITEMS.length);
            }}
          >
            <ChevronRightIcon />
          </button>

          <div className="pg-lightbox__counter">
            {selectedImageIndex + 1} / {RAW_GALLERY_ITEMS.length}
          </div>
        </div>
      )}
    </section>
  );
}

/* ── SVG Icons Components ──────────────────────────────────── */
function ZoomIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}