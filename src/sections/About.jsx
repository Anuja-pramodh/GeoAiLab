import React from "react";
import ScrollReveal from "../components/animations/ScrollReveal";
import aboutBg from "../assets/images/aboutbg.jpg"; // Asset import

export default function About() {
  return (
    <section 
      id="about" 
      className="about"
      style={{
        background: `url(${aboutBg}) no-repeat center center / cover`
      }}
    >
      <style>{`
        .about {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px clamp(24px, 5vw, 80px);
          box-sizing: border-box;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow: hidden;
        }

        /* Screen width එක වැඩි වෙද්දී inner container එක loku වෙනවා */
        .about__inner {
          max-width: clamp(1100px, 85vw, 1600px);
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: clamp(40px, 5vw, 90px);
          align-items: center;
        }

        .about__image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .about__image {
          width: 150%;
          max-width: clamp(280px, 22vw, 480px);
          height: auto;
          object-fit: contain;
          display: block;
        }

        .about__badge {
          display: inline-block;
          font-size: clamp(0.75rem, 0.9vw, 1rem);
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7A1113;
          margin-bottom: 14px;
        }

        /* Main Heading එක scale වීම */
        .about__title {
          font-size: clamp(1.8rem, 3.2vw, 3.2rem);
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 20px;
          line-height: 1.2;
        }

        /* Body Text එක scale වීම */
        .about__text {
          color: #000000;
          line-height: 1.8;
          font-size: clamp(1rem, 1.15vw, 1.3rem);
          margin: 0 0 32px;
        }

        /* Button එක scale වීම */
        .about__link {
          display: inline-block;
          padding: clamp(12px, 1vw, 18px) clamp(26px, 2vw, 40px);
          border-radius: 6px;
          background: #0B2545;
          color: #ffffff;
          text-decoration: none;
          font-size: clamp(0.8rem, 0.9vw, 1.05rem);
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .about__link:hover {
          background: #133a68;
          transform: translateY(-2px);
        }

        @media (max-width: 800px) {
          .about {
            min-height: 100vh;
            padding: 80px 20px 40px;
          }
          .about__inner {
            grid-template-columns: 1fr;
            gap: 28px;
            text-align: center;
          }
          .about__image {
            max-width: 220px;
            margin: 0 auto;
          }
          .about__link {
            margin: 0 auto;
          }
        }
      `}</style>

      <div className="about__inner">
        {/* Logo / Image Wrapper */}
        <ScrollReveal direction="right" distance={60} blur={false}>
          <div className="about__image-wrapper">
            <img
              src="https://geoailab.nbro.lk/wp-content/uploads/2025/02/NBRO-Logo-03.png"
              alt="National Building Research Institute (NBRO) Logo"
              className="about__image"
            />
          </div>
        </ScrollReveal>

        {/* Text Content */}
        <div>
          <ScrollReveal delay={0}>
            <span className="about__badge">With the parenting of</span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="about__title">National Building Research Institute</h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="about__text">
              NBRI is the designated national focal point for landslide risk
              management in Sri Lanka. As part of its responsibilities, NBRI
              carries out landslide-related studies, investigations, mapping,
              monitoring, early warning and mitigation work, and provides
              Landslide Risk Assessment Reports as a pre-requisite for approving
              building permits and development plans. NBRI's expertise extends
              into environmental management, human settlements planning,
              engineering project management, geotechnical engineering, and
              building materials engineering.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <a
              className="about__link"
              href="https://nbro.gov.lk/index.php?option=com_content&view=article&id=12&Itemid=166&lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              About Us
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}