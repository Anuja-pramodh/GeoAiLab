import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { scrollToId } from "../lib/tokens";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "gallery", label: "Gallery" },
  { id: "team", label: "Our Staff" },
  { id: "contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const location = useLocation();
  const navigate = useNavigate();

  // දැනට ඉන්නේ Home Page එකේද යන්න පරීක්ෂා කිරීම
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // 1. Home Page එකේ නොවේ නම් (උදා: /staff වලදී) Active state එක ඉවත් කරන්න
    if (!isHomePage) {
      setActive("");
      return;
    }

    // 2. Home Page එකේදී Scroll වන විට අදාළ Section එක Active කරන්න
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = s.id;
        }
      }
      setActive(current || "home");
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  // Navigation Click Handler
  const go = (id) => {
    setOpen(false);

    if (!isHomePage) {
      // Home පිටුවේ නැත්නම්, මුලින් Home (/) පිටුවට ගොස් Scroll කරන්න
      navigate("/");
      setTimeout(() => {
        if (typeof scrollToId === "function") {
          scrollToId(id);
        } else {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    } else {
      // Home පිටුවේම සිටී නම් සෘජුවම Scroll කරන්න
      if (typeof scrollToId === "function") {
        scrollToId(id);
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className={`gnav ${scrolled ? "gnav--scrolled" : ""}`}>
      <style>{`
        .gnav {
          position: fixed;
          top: 0; left: 0; right: 0;
          background: rgba(0, 0, 0, 0.10);
          z-index: 50;
          padding: 20px 0;
          transition: background 0.3s ease, padding 0.3s ease, box-shadow 0.3s ease;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .gnav--scrolled {
          background: rgba(0, 0, 0, 0.50);
          backdrop-filter: blur(10px);
          padding: 20px 0;
          box-shadow: 0 2px 20px rgba(0,0,0,0.2);
        }
        .gnav__inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .gnav__brand {
          font-size: 1.5rem;
          font-weight: 800;
          color: #fff;
          text-decoration: none;
          letter-spacing: 0.01em;
          background: none;
          border: none;
          cursor: pointer;
        }
        .gnav__links { display: flex; gap: 30px; }
        .gnav__link {
          background: none;
          border: none;
          color: #fff;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          padding-bottom: 6px;
          border-bottom: 2px solid transparent;
          opacity: 0.8;
          transition: opacity 0.2s, border-color 0.2s;
        }
        .gnav__link:hover { opacity: 1;  }
        .gnav__link--active { opacity: 1; border-bottom-color: #1D5DA8; }
        .gnav__toggle { display: none; background: none; border: none; color: #fff; cursor: pointer; }
        .gnav__mobile { display: none; }

        @media (max-width: 960px) {
          .gnav__links { display: none; }
          .gnav__toggle { display: block; }
          .gnav__mobile {
            display: flex;
            flex-direction: column;
            max-height: 0;
            overflow: hidden;
            background: rgb(0, 0, 0);
            transition: max-height 0.3s ease;
          }
          .gnav__mobile.is-open { max-height: 420px; padding: 8px 0 16px; }
          .gnav__mobile button {
            background: none; border: none; text-align: left;
            color: #fff; padding: 12px 32px; font-size: 0.9rem;
            font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
            cursor: pointer;
          }
        }
      `}</style>

      <div className="gnav__inner">
        <button className="gnav__brand" onClick={() => go("home")}>
          GeoAi Lab
        </button>

        <nav className="gnav__links" aria-label="Primary">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              className={`gnav__link ${active === s.id ? "gnav__link--active" : ""}`}
              onClick={() => go(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <button
          className="gnav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`gnav__mobile ${open ? "is-open" : ""}`}>
        {SECTIONS.map((s) => (
          <button key={s.id} onClick={() => go(s.id)}>
            {s.label}
          </button>
        ))}
      </div>
    </header>
  );
}