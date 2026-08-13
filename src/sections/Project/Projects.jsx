import React, { useState, useEffect, useRef } from "react";
import { CheckCircle, Clock, FolderGit2 } from "lucide-react";
import ScrollReveal from "../../components/animations/ScrollReveal";
import { PROJECTS_STATS } from "./ProjectsData";

// Number Spin / Counter Component (Replays every time it scrolls into view)
function AnimatedCounter({ end, duration = 800 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setCount(0); // Reset count when scrolling out of view
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span ref={counterRef}>{count}</span>;
}

export default function Projects() {
  // Total projects calculation
  const totalProjects = PROJECTS_STATS.completed + PROJECTS_STATS.pending;

  return (
    <section id="projects" className="projects-section">
      <style>{`
        .projects-section {
          background-color: #FFFFFF;
          min-height: 30vh;
          display: flex;
          align-items: center;
          justify-content: center;

          box-sizing: border-box;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        #projects {
          scroll-margin-top: 10px;
        }

        .projects-container {
          max-width: 1240px;
          width: 100%;
          margin: 0 auto;
        }

        /* Header */
        .projects-head {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 50px;
        }

        .projects-badge {
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1D5DA8;
          margin-bottom: 12px;
          display: inline-block;
        }

        .projects-title {
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }

        .projects-sub {
          font-size: 0.98rem;
          color: #64748B;
          line-height: 1.6;
          margin: 0;
        }

        /* Stats Grid Cards (3 Columns) */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .stat-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-card:hover {
          transform: translateY(-6px);
          border-color: #CBD5E1;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
        }

        .stat-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: #EFF6FF;
          color: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .stat-number {
          font-size: 2.75rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .stat-number span {
          color: #000000;
        }

        .stat-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 6px;
        }

        .stat-desc {
          font-size: 0.85rem;
          color: #64748B;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-head">
          <ScrollReveal delay={0}>
            <span className="projects-badge">Our Lab Insights</span>
            <h2 className="projects-title">Projects Overview & Status</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="projects-sub">
              An overview of our successfully completed and ongoing research and developmental initiatives.
            </p>
          </ScrollReveal>
        </div>

        {/* Projects Status (All, Completed, Pending - 3 Boxes) */}
        <div className="stats-grid">
          {/* Box 1: All Projects */}
          <ScrollReveal delay={180} direction="up" distance={20}>
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <FolderGit2 size={24} />
              </div>
              <div className="stat-number">
                <AnimatedCounter end={totalProjects} />
              </div>
              <div className="stat-title">All Projects</div>
              <p className="stat-desc">Total undertaken research and developmental initiatives.</p>
            </div>
          </ScrollReveal>

          {/* Box 2: Completed Projects */}
          <ScrollReveal delay={220} direction="up" distance={20}>
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <CheckCircle size={24} />
              </div>
              <div className="stat-number">
                <AnimatedCounter end={PROJECTS_STATS.completed} />
              </div>
              <div className="stat-title">Completed Projects</div>
              <p className="stat-desc">Successfully deployed AI & geospatial solutions.</p>
            </div>
          </ScrollReveal>

          {/* Box 3: Ongoing / Pending Projects */}
          <ScrollReveal delay={260} direction="up" distance={20}>
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <Clock size={24} />
              </div>
              <div className="stat-number">
                <AnimatedCounter end={PROJECTS_STATS.pending} />
              </div>
              <div className="stat-title">Ongoing / Pending Projects</div>
              <p className="stat-desc">Active research and development initiatives.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}