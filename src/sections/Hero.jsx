import React from "react";
import { ChevronDown } from "lucide-react";
import { scrollToId } from "../lib/tokens";
import useViewportHeight from "../lib/useViewportHeight";

export default function Hero() {
  const vh = useViewportHeight();

  return (
    <section id="home" className="hero" style={{ height: `${vh}px` }}>
      <style>
        {`
        /* ── Keyframe Animations ───────────────────────────────── */
        @keyframes heroFadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes heroBounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(8px);
          }
        }

        /* ── Section Base ──────────────────────────────────────── */
        .hero {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: transparent;
          color: #fff;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow: hidden;
          min-height: 60vh; 
        }

        .hero__content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          text-align: center;
          padding: 0 24px;
        }

        /* ── Title Animation ───────────────────────────────────── */
        .hero__title {
          font-size: 6rem;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          letter-spacing: 0.01em;
          background: none;
          border: none;
          animation: heroFadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
        }

        /* ── Subtitle Animation ────────────────────────────────── */
        .hero__subtitle {
          font-size: clamp(0.9rem, 1.4vw, 1.05rem);
          line-height: 1.7;
          opacity: 0;
          margin: 0 auto 32px;
          max-width: 780px;
          animation: heroFadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
        }

        /* ── Actions Row ───────────────────────────────────────── */
        .hero__actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ── Buttons with Hover Micro-interactions ──────────────── */
        .hero__btn {
          padding: 13px 28px;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          border: none;
          cursor: pointer;
          opacity: 0;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      background 0.25s ease;
        }

        .hero__btn--primary {
          background: #1D5DA8;
          color: #fff;
          animation: heroFadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s forwards;
        }

        .hero__btn--primary:hover {
          transform: translateY(-4px) scale(1.02);
          background: #2269be;
          box-shadow: 0 10px 25px rgba(29, 93, 168, 0.45);
        }

        .hero__btn--primary:active {
          transform: translateY(-1px) scale(0.99);
        }

        .hero__btn--secondary {
          background: rgba(255, 255, 255, 0.95);
          color: #0B2545;
          backdrop-filter: blur(4px);
          animation: heroFadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.58s forwards;
        }

        .hero__btn--secondary:hover {
          background: #ffffff;
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
        }

        .hero__btn--secondary:active {
          transform: translateY(-1px) scale(0.99);
        }

        /* ── Scroll Down Indicator ──────────────────────────────── */
        .hero__scroll {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          cursor: pointer;
          backdrop-filter: blur(8px);
          opacity: 0;
          animation: heroFadeIn 0.6s ease 0.75s forwards,
                     heroBounce 2.2s ease-in-out 1.35s infinite;
          transition: background 0.25s ease, border-color 0.25s ease;
        }

        .hero__scroll:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.5);
        }

        /* ── Mobile Responsive ─────────────────────────────────── */
        @media (max-width: 600px) {
          .hero__btn { width: 100%; text-align: center; }
          .hero__actions { width: 100%; padding: 0 12px; }
        }

        /* ── Reduced Motion Respect ───────────────────────────── */
        @media (prefers-reduced-motion: reduce) {
          .hero__title,
          .hero__subtitle,
          .hero__btn,
          .hero__scroll {
            opacity: 1 !important;
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="hero__content">
        <h1 className="hero__title">Make Your Geo&nbsp;-&nbsp;Artifact</h1>
        <p className="hero__subtitle">
          Geoinformatics &amp; Intelligence Laboratory (GeoAi Lab) at the National
          Building Research Institute consists of Geospatial and Remote Sensing
          Analysts, Cartographers and Visualization Experts, IT &amp; Database
          Administrators and Software Developers/Programmers trained in geomatics,
          geography, statistics, and urban informatics.
        </p>
        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary" onClick={() => scrollToId("contact")}>
            Contact Us
          </button>
          <button className="hero__btn hero__btn--secondary" onClick={() => scrollToId("services")}>
            Get a Quotation
          </button>
        </div>
      </div>

      <button className="hero__scroll" aria-label="Scroll down" onClick={() => scrollToId("about")}>
        <ChevronDown size={24} />
      </button>
    </section>
  );
}