import React from "react";
import { Map, Crosshair, Layers, Box } from "lucide-react";
import ScrollReveal from "../components/animations/ScrollReveal";

// 🔁 Import client logos directly so Vite bundles them properly without breaking image paths
import client1 from "../assets/images/clients/1.png";
import client2 from "../assets/images/clients/2.jpeg";
import client3 from "../assets/images/clients/3.jpg";
import client4 from "../assets/images/clients/4.png";
import client5 from "../assets/images/clients/5.png";
import client6 from "../assets/images/clients/6.jpg";

const CLIENTS = [
  {
    name: "Engineering and Laboratory Services(Pvt) LTD",
    logo: client1,
  },
  {
    name: "Kahatagaha Graphite",
    logo: client2,
  },
  {
    name: "Waste Management Authority",
    logo: client3,
  },
  {
    name: "Road Development Authority",
    logo: client4,
  },
  {
    name: "Sri Lanka Railway",
    logo: client5,
  },
  {
    name: "Plantation Human Development Trust",
    logo: client6,
  },
];

const SERVICES = [
  {
    icon: Map,
    title: "LIDAR DATA ACQUISITION & PROCESSING",
    text: "High-resolution LiDAR point cloud data capture and processing for accurate terrain representation and orthomosaic maps.",
  },
  {
    icon: Crosshair,
    title: "GROUND CONTROL & ELEVATION DATA COLLECTION",
    text: "Accurate ground control points and elevation data collection for high-precision mapping and verification.",
  },
  {
    icon: Layers,
    title: "2D & 3D MAPPING OUTPUTS",
    text: "Delivering high-quality 2D and 3D mapping solutions tailored to your project's needs and industry standards.",
  },
  {
    icon: Box,
    title: "PHOTOGRAMMETRY SURVEY & 3D MODELING",
    text: "Utilizing drone-based photogrammetry for terrain reconstruction and 3D modeling for various applications.",
  },
];

export default function ServicesAndClients() {
  return (
    <div className="main-container">
      <style>{`
        /* ── Main Container Base ───────────────────────────────── */
        .main-container {
          background-color: #FFFFFF;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1E293B;
        }

        .section-wrapper {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          padding: 90px 24px;
          box-sizing: border-box;
          gap: 90px;
        }

        /* ── Anchor Scroll Offsets ────────────────────────────── */
        #services,
        #clients {
          scroll-margin-top: 110px;
        }

        /* ── Common Header Styles ─────────────────────────────── */
        .section-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 48px;
        }

        .section-title {
          font-size: clamp(2rem, 3.2vw, 2.8rem);
          font-weight: 800;
          color: #1E293B;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }

        .section-subtitle {
          font-size: 0.95rem;
          color: #64748B;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Grid Stretch Fix for ScrollReveal Wrappers ───────── */
        .services-grid > *,
        .clients-grid > * {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        /* ── 1. SERVICES WE OFFER SECTION ──────────────────────── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .service-card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 40px 24px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.04);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          height: 100%;
          box-sizing: border-box;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.09);
        }

        .service-icon {
          color: #1D5DA8;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #EFF6FF;
          width: 64px;
          height: 64px;
          border-radius: 12px;
        }

        .service-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: #1E293B;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          line-height: 1.45;
          margin: 0 0 14px;
          min-height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-text {
          font-size: 0.88rem;
          color: #64748B;
          line-height: 1.65;
          margin: 0;
        }

        /* ── 2. OUR CLIENTS SECTION ─────────────────────────────── */
        .clients-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
        }

        .client-card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 24px 16px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 16px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
          box-sizing: border-box;
        }

        .client-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.08);
        }

        .client-logo-wrapper {
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .client-logo {
          max-width: 100%;
          max-height: 80px;
          object-fit: contain;
        }

        .client-name {
          font-size: 0.78rem;
          font-weight: 700;
          color: #334155;
          line-height: 1.35;
          margin: 0;
        }

        /* ── Responsive Rules ──────────────────────────────────── */
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .clients-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .section-wrapper {
            padding: 70px 24px;
            gap: 70px;
          }
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .clients-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .section-wrapper {
            padding: 60px 16px;
          }
          #services,
          #clients {
            scroll-margin-top: 90px;
          }
        }
      `}</style>

      <div className="section-wrapper">
        {/* ── Services We Offer ── */}
        <section id="services" className="services-section">
          <div className="section-header">
            <ScrollReveal delay={0}>
              <h2 className="section-title">Services We Offer</h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="section-subtitle">
                Providing top-quality data acquisition and processing services for
                detailed terrain modeling and analysis.
              </p>
            </ScrollReveal>
          </div>

          <div className="services-grid">
            {SERVICES.map((s, idx) => {
              const Icon = s.icon;
              return (
                <ScrollReveal key={idx} delay={(idx % 4) * 120} direction="up" distance={30}>
                  <div className="service-card">
                    <div className="service-icon">
                      <Icon size={32} strokeWidth={1.8} />
                    </div>
                    <h3 className="service-title">{s.title}</h3>
                    <p className="service-text">{s.text}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* ── Our Clients ── */}
        <section id="clients" className="clients-section">
          <div className="section-header">
            <ScrollReveal delay={0}>
              <h2 className="section-title">Our Clients</h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="section-subtitle">
                We provide geospatial solutions and insights to a diverse range of clients,
                helping them make informed decisions.
              </p>
            </ScrollReveal>
          </div>

          <div className="clients-grid">
            {CLIENTS.map((client, idx) => (
              <ScrollReveal key={idx} delay={(idx % 6) * 100} direction="up" distance={30}>
                <div className="client-card">
                  <div className="client-logo-wrapper">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="client-logo"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/85x85?text=Logo";
                      }}
                    />
                  </div>
                  <p className="client-name">{client.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}