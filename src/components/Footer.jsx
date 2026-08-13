import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <style>{`
        .footer {
          background: #081b33;
          padding: 24px;
          text-align: center;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          border-top:1px solid white;
        }
        .footer p {
          color: rgba(255,255,255,0.5);
          font-size: 0.8rem;
          margin: 0;
        }
      `}</style>
      <p>© {new Date().getFullYear()} GeoAi Lab — National Building Research Institute</p>
    </footer>
  );
}
