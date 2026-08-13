import React, { useEffect, useRef, useState } from "react";

// 🔁 Replace these with your actual portfolio image imports, e.g.:
// import project1 from "../assets/images/portfolio/orthomosaics.jpg";
import project1 from "../assets/images/portfolio/1.jpg";
import project2 from "../assets/images/portfolio/2.jpg";
import project3 from "../assets/images/portfolio/3.jpg";
import project4 from "../assets/images/portfolio/4.jpg";

const PORTFOLIO_ITEMS = [
  {
    image: project1,
    caption: "Orthomosaics",
    // taller card
    aspect: "4 / 3.1",
  },
  {
    image: project2,
    caption: "Drone Technology for Construction Site Monitoring",
    aspect: "4 / 2.8",
  },
  {
    image: project3,
    caption: "Advanced Aerial Photogrammetry Workshop",
    aspect: "4 / 4.9",
  },
  {
    image: project4,
    caption: "Thermal Mapping",
    aspect: "4 / 1.9",
  },
];

// Small reusable scroll-reveal hook (fade + slide up on first view)
function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function PortfolioCard({ item, index }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`portfolio-card reveal ${isVisible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: `${(index % 4) * 100}ms`, aspectRatio: item.aspect }}
    >
      <img
        src={item.image}
        alt={item.caption}
        className="portfolio-card__img"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/600x400?text=Project+Image";
        }}
      />
      <div className="portfolio-card__overlay">
        <span className="portfolio-card__caption">{item.caption}</span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="portfolio" className="portfolio-section">
      <style>{`
        /* ── Base Section ──────────────────────────────────────── */
        .portfolio-section {
          background-color: #FFFFFF;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1E293B;
          padding: 100px 24px;
        }

        #portfolio {
          scroll-margin-top: 110px;
        }

        .portfolio-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        /* ── Scroll Reveal Base ──────────────────────────────────── */
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal {
            transition: none;
            opacity: 1;
            transform: none;
          }
        }

        /* ── Header Row (badge + title on left, description on right) ── */
        .portfolio-header {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 40px;
          align-items: end;
          margin-bottom: 56px;
        }

        .portfolio-badge {
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #1D5DA8;
          display: block;
          margin-bottom: 12px;
        }

        .portfolio-title {
          font-size: clamp(2rem, 3.4vw, 2.75rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .portfolio-desc {
          font-size: 1rem;
          line-height: 1.7;
          color: #475569;
          margin: 0;
        }

        /* ── Masonry Grid (Pinterest-style via CSS columns) ────── */
        .portfolio-grid {
          column-count: 2;
          column-gap: 28px;
        }

        .portfolio-card {
          position: relative;
          break-inside: avoid;
          margin-bottom: 28px;
          border-radius: 10px;
          overflow: hidden;
          background: #0F172A;
          cursor: pointer;
        }

        .portfolio-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .portfolio-card:hover .portfolio-card__img {
          transform: scale(1.05);
        }

        .portfolio-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 55%, rgba(15, 23, 42, 0.75) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 20px;
        }

        .portfolio-card:hover .portfolio-card__overlay {
          opacity: 1;
        }

        .portfolio-card__caption {
          color: #FFFFFF;
          font-size: 0.95rem;
          font-weight: 700;
        }

        /* ── Responsive Rules ──────────────────────────────────── */
        @media (max-width: 900px) {
          .portfolio-header {
            grid-template-columns: 1fr;
            align-items: start;
            gap: 16px;
          }
        }

        @media (max-width: 640px) {
          .portfolio-grid {
            column-count: 1;
          }
          .portfolio-section {
            padding: 60px 16px;
          }
        }
      `}</style>

      <div className="portfolio-container">
        {/* ── Header ── */}
        <div
          ref={headerRef}
          className={`portfolio-header reveal ${headerVisible ? "reveal-visible" : ""}`}
        >
          <div>
            <span className="portfolio-badge">Portfolio</span>
            <h2 className="portfolio-title">A Diverse Portfolio of Creative Ventures</h2>
          </div>
          <p className="portfolio-desc">
            Discover a showcase of our finest work. From stunning designs to
            seamless user experiences, explore how we've helped clients like
            you achieve their goals.
          </p>
        </div>

        {/* ── Masonry Image Grid ── */}
        <div className="portfolio-grid">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <PortfolioCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
