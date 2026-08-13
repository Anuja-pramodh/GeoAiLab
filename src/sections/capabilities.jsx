import React from "react";
import ScrollReveal from "../components/animations/ScrollReveal";

import img1 from "../assets/images/capabilities/1.png";
import img2 from "../assets/images/capabilities/2.png";
import img3 from "../assets/images/capabilities/3.png";
import img4 from "../assets/images/capabilities/4.png";
import img5 from "../assets/images/capabilities/5.png";
import img6 from "../assets/images/capabilities/6.png";

const CAPABILITIES = [
  {
    title: "Training",
    image: img1,
    description:
      "Businesses in the construction and engineering industry, Agriculture and farming operations, Real estate and property management companies, Infrastructure inspection and maintenance, Media and entertainment industry, Emergency services and disaster management, Energy sector, Transportation and logistics companies and Government agencies and municipalities.",
    hasLearnMore: false,
  },
  {
    title: "Remote Sensing",
    image: img2,
    description:
      "Remote Sensing is the science and technology of obtaining information about objects, areas, or phenomena from a distance, typically using aircraft, satellites, drones, or other sensing technologies. Instead of physically being in contact with the subject, remote sensing captures data using sensors that detect energy reflected or emitted from the Earth's surface.",
    hasLearnMore: false,
  },
  {
    title: "Spatial Database Management",
    image: img3,
    description:
      "Spatial Database Management refers to the storage, retrieval, and management of spatial data, which includes data that represents objects in a geometric space, such as points, lines, and polygons. Spatial databases extend traditional databases by adding spatial data types along with specialized indexing methods that enable efficient querying of spatial data.",
    hasLearnMore: false,
  },
  {
    title: "Drone Surveys",
    image: img4,
    description:
      "The GeoAI Laboratory offers cutting-edge drone survey services that provide high-precision data for a variety of applications. By utilizing advanced drones equipped with RGB, LiDAR, thermal, and multispectral cameras, the lab supports sectors such as urban planning, environmental monitoring, disaster management, agriculture, and construction.",
    hasLearnMore: false,
  },
  {
    title: "Land Layout Planning",
    image: img5,
    description:
      "Land Layout Planning is a crucial process in urban development, ensuring the efficient and sustainable use of land for residential, commercial, and recreational purposes. It involves designing the arrangement of plots, roads, utilities, and public spaces to create functional, aesthetically pleasing, and environmentally friendly layouts.",
    hasLearnMore: false,
  },
  {
    title: "Spatial Data Visualization",
    image: img6,
    description:
      "Spatial Data Visualization refers to the graphical representation of geographic information and spatial data. It transforms complex data sets into visual formats such as maps, 3D models, charts, and infographics, making it easier to analyze spatial relationships, patterns, and trends.",
    hasLearnMore: false,
  },
];

export default function ThingsWereGreatAt() {
  return (
    <section id="capabilities" className="capabilities-section">
      <style>{`
        /* ── Base Section ──────────────────────────────────────── */
        .capabilities-section {
          background-color: #FFFFFF;
          padding: 100px 24px;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1E293B;
        }

        .capabilities-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ── Header ────────────────────────────────────────────── */
        .capabilities-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .capabilities-badge {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #3B82F6;
          margin-bottom: 10px;
          display: block;
        }

        .capabilities-title {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #0F172A;
          margin: 0;
          letter-spacing: -0.02em;
        }

        /* ── Grid Layout ───────────────────────────────────────── */
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 50px 36px;
        }

        /* ── Capability Card ───────────────────────────────────── */
        .capability-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
        }

        .capability-image-box {
          width: 100%;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          background: transparent;
        }

        .capability-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: transform 0.4s ease;
          mix-blend-mode: multiply;
        }

        .capability-card:hover .capability-image {
          transform: translateY(-6px);
        }

        .capability-item-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 12px 0;
        }

        .capability-item-desc {
          font-size: 0.88rem;
          line-height: 1.65;
          color: #64748B;
          margin: 0 0 14px 0;
        }

        .capability-learn-more {
          font-size: 0.85rem;
          font-weight: 600;
          color: #2563EB;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap 0.2s ease, color 0.2s ease;
        }

        .capability-learn-more:hover {
          color: #1D4ED8;
          gap: 10px;
        }

        /* ── Responsive Rules ──────────────────────────────────── */
        @media (max-width: 1024px) {
          .capabilities-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 28px;
          }
        }

        @media (max-width: 640px) {
          .capabilities-grid {
            grid-template-columns: 1fr;
          }
          .capabilities-section {
            padding: 60px 20px;
          }
        }
      `}</style>

      <div className="capabilities-container">
        {/* Header with ScrollReveal */}
        <div className="capabilities-header">
          <ScrollReveal delay={0}>
            <span className="capabilities-badge">SERVICES</span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="capabilities-title">Things we're great at</h2>
          </ScrollReveal>
        </div>

        {/* Grid Cards with Staggered ScrollReveal */}
        <div className="capabilities-grid">
          {CAPABILITIES.map((item, index) => (
            <ScrollReveal
              key={index}
              delay={(index % 3) * 150} // Columns sequentially animate (0ms, 150ms, 300ms)
              direction="up"
              distance={40}
            >
              <div className="capability-card">
                <div className="capability-image-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="capability-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/200x180?text=Image";
                    }}
                  />
                </div>

                <h3 className="capability-item-title">{item.title}</h3>
                <p className="capability-item-desc">{item.description}</p>

                {item.hasLearnMore && (
                  <a href="#contact" className="capability-learn-more">
                    Learn more →
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}