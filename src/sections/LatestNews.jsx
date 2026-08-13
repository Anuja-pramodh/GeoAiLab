import React from "react";
import ScrollReveal from "../components/animations/ScrollReveal";

import newsImg1 from "../assets/images/news/1.jpg";
import newsImg2 from "../assets/images/news/2.jpg";
import newsImg3 from "../assets/images/news/3.png";
import newsVideo1 from "../assets/images/news/4.mp4";
import newsVideo2 from "../assets/images/news/5.mp4";
import newsVideo3 from "../assets/images/news/6.mp4";

const NEWS_ITEMS = [
  {
    type: "image",
    src: newsImg1,
    title: "Surface Crack Identification Survey",
    description:
      "At GeoAi Lab, we go beyond conventional mapping, delivering insights that help detect risks before they become visible problems.",
  },
  {
    type: "image",
    src: newsImg2,
    title: "Thermal Survey at Karadiyana Waste Management Center",
    description:
      "In the wake of the recent fire incident at the Karadiyana Waste Management Site, the GeoAi Lab at the National Building Research Institute – NBRI stepped in to provide technical support to monitoring and response efforts.",
  },
  {
    type: "image",
    src: newsImg3,
    title: "Full-Day Training on Drone Technology for Urban Informatics and Planning Students",
    description:
      "The GeoAI Lab at NBRO successfully conducted a comprehensive full-day training session on drone technology and its applications for 120 undergraduate students from the Urban Informatics and Planning department at the University of Moratuwa.",
  },
  {
    type: "video",
    src: newsVideo1,
    title: "Thermal Survey at Karadiyana Waste Management Center",
    description: "In the wake of the recent fire incident at the Karadiyana Waste Management Site, the GeoAi Lab at the National Building Research Institute – NBRI stepped in to provide technical support to monitoring and response efforts.",
  },
  {
    type: "video",
    src: newsVideo2,
    title: "Exploring the Legacy of the Nine Arch Bridge",
    description: "The Nine Arch Bridge, located in the heart of Sri Lanka’s picturesque Ella, is a true marvel of engineering and history. Built during the British colonial era in 1919, this stunning bridge stands as a testament to the ingenuity and craftsmanship of its time.",
  },
  {
    type: "video",
    src: newsVideo3,
    title: "LiDAR Survey at Ella–Wellawaya Bus Accident Site",
    description: "On September 4th, tragedy struck at the 24th km post of the Ella–Wellawaya road when a bus carrying employees of the Tangalle Urban Council plunged into a precipice. 16 precious lives were lost, and another 16 people were injured.",
  },
];

export default function LatestNews() {
  return (
    <section id="news" className="news-section">
      <style>{`
        /* ── Base Section ──────────────────────────────────────── */
        .news-section {
          background-color: #FFFFFF;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1E293B;
          padding: 100px 24px;
        }

        #news {
          scroll-margin-top: 110px;
        }

        .news-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        /* ── Header (centered) ──────────────────────────────────── */
        .news-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 64px;
        }

        .news-title {
          font-size: clamp(2rem, 3.4vw, 2.75rem);
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.02em;
          margin: 0 0 16px;
        }

        .news-subtitle {
          font-size: 0.98rem;
          line-height: 1.7;
          color: #64748B;
          margin: 0;
        }

        /* ── Grid ──────────────────────────────────────────────── */
        .news-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4px 36px;
        }

        .news-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .news-card__media {
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 28px;
          background: #0F172A;
          aspect-ratio: 4 / 3;
        }

        .news-card__img,
        .news-card__video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .news-card__title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0F172A;
          text-align: center;
          line-height: 1.3;
          margin: 0 0 14px;
        }

        .news-card__desc {
          font-size: 0.88rem;
          line-height: 1.7;
          color: #64748B;
          text-align: center;
          margin: 0;
        }

        /* ── Responsive Rules ──────────────────────────────────── */
        @media (max-width: 1024px) {
          .news-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .news-grid {
            grid-template-columns: 1fr;
          }
          .news-section {
            padding: 60px 16px;
          }
        }
      `}</style>

      <div className="news-container">
        {/* ── Header ── */}
        <div className="news-header">
          <ScrollReveal delay={0}>
            <h2 className="news-title">Latest news</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="news-subtitle">
              Here are some of the most recent headlines from GeoAi Laboratory
              at National Building Research Institute.
            </p>
          </ScrollReveal>
        </div>

        {/* ── News Grid with Staggered ScrollReveal ── */}
        <div className="news-grid">
          {NEWS_ITEMS.map((item, idx) => (
            <ScrollReveal
              key={idx}
              delay={(idx % 3) * 120}
              direction="up"
              distance={30}
            >
              <div className="news-card">
                <div className="news-card__media">
                  {item.type === "video" ? (
                    <video
                      className="news-card__video"
                      src={item.src}
                      controls
                      preload="metadata"
                      onError={(e) => {
                        e.target.poster =
                          "https://via.placeholder.com/500x300?text=Video";
                      }}
                    />
                  ) : (
                    <img
                      className="news-card__img"
                      src={item.src}
                      alt={item.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/500x300?text=News+Image";
                      }}
                    />
                  )}
                </div>

                <h3 className="news-card__title">{item.title}</h3>
                {item.description && (
                  <p className="news-card__desc">{item.description}</p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}