import React from "react";
import useViewportHeight from "../lib/useViewportHeight";
import homeVideo from "../assets/videos/Home.mp4";

/**
 * Fixed, full-viewport video background that sits behind the entire page.
 * Sections rendered after it (About, Services, etc.) have their own opaque
 * backgrounds, so they naturally cover this video once the user scrolls past Hero.
 */
export default function PageBackground() {
  const vh = useViewportHeight();

  return (
    <div className="page-bg" style={{ height: `${vh}px` }}>
      <style>{`
        .page-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          z-index: -1;
          overflow: hidden;
          background: #0B2545;
        }
        .page-bg__video {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          width: 100%;
          height: 100%;
          min-width: 100%;
          min-height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .page-bg__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg,
            rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.35) 40%, rgba(0, 0, 0, 0.8) 100%);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px)
        }
      `}</style>

      <video className="page-bg__video" autoPlay loop muted playsInline preload="metadata">
      <source src={homeVideo} type="video/mp4" />
      </video>
      <div className="page-bg__overlay" />
    </div>
  );
}