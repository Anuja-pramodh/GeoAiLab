import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  X,
  Mail,
  Phone,
  GraduationCap,
  Award,
  BookOpen,
  Briefcase,
} from "lucide-react";
import ScrollReveal from "../components/animations/ScrollReveal";

import { STAFF_MEMBERS } from "./StaffData/staffData";

// Director සහ අනෙක් Scientists ව STAFF_MEMBERS array එකෙන්ම filter කර ගැනීම
const DIRECTOR = STAFF_MEMBERS.find((m) => m.type === "Leadership");
const SENIOR_SCIENTISTS = STAFF_MEMBERS.filter((m) => m.type === "Senior Scientists");
const SCIENTISTS = STAFF_MEMBERS.filter((m) => m.type === "Scientists");

// Reusable Team Card Component
function TeamCard({ member, isDirector = false, onClick }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className={`team__card ${isDirector ? "team__card--director" : ""}`}
      onClick={onClick}
    >
      <div className="team__avatar-wrapper">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="team__avatar-img"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              if (e.currentTarget.nextSibling) {
                e.currentTarget.nextSibling.style.display = "flex";
              }
            }}
          />
        ) : null}
        <div
          className="team__avatar-fallback"
          style={{ display: member.image ? "none" : "flex" }}
        >
          {initials}
        </div>
      </div>
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <span className="team__card-hint">Click to view profile</span>
    </div>
  );
}

export default function Team() {
  const navigate = useNavigate();
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section id="team" className="team-section">
      <style>{`
        /* ── Base Section Setup ────────────────────────────────── */
        .team-section {
          background-color: #FFFFFF;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 90px 24px;
          box-sizing: border-box;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          position: relative;
        }

        #team {
          scroll-margin-top: 10px;
        }

        .team__inner {
          max-width: 1240px;
          width: 100%;
          margin: 0 auto;
        }

        /* ── Header ───────────────────────────────────────────── */
        .team__head {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 48px;
        }

        .team__badge {
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1D5DA8;
          margin-bottom: 12px;
          display: inline-block;
        }

        .team__title {
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }

        .team__sub {
          font-size: 0.98rem;
          color: #64748B;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Hierarchy Layout Containers ──────────────────────── */
        .team__layout {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        /* Row 1: Director Centered */
        .team__grid--director {
          display: flex;
          justify-content: center;
        }

        .team__grid--director > * {
          max-width: 420px;
          width: 100%;
        }

        /* Row 2: Senior Scientists (2 Columns) */
        .team__grid--seniors {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 360px));
          justify-content: center;
          gap: 24px;
        }

        /* Row 3: Scientists (4 Columns) */
        .team__grid--scientists {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .team__grid--seniors > *,
        .team__grid--scientists > * {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        /* ── Team Card Component Styles ───────────────────────── */
        .team__card {
          border-radius: 14px;
          padding: 32px 20px 28px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          box-sizing: border-box;
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .team__card:hover {
          transform: translateY(-6px);
          border-color: #CBD5E1;
        }

        .team__card-hint {
          margin-top: 12px;
          font-size: 0.76rem;
          font-weight: 700;
          color: #1D5DA8;
          opacity: 0;
          transform: translateY(4px);
          transition: all 0.25s ease;
        }

        .team__card:hover .team__card-hint {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Avatar Image & Fallback Setup ───────────────────── */
        .team__avatar-wrapper {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          margin-bottom: 20px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(29, 93, 168, 0.2);
          flex-shrink: 0;
          background-color: #0F172A;
        }

        .team__avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .team__avatar-fallback {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #0F172A, #1D5DA8);
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-weight: 800;
          font-size: 1.5rem;
          display: flex;
        }

        .team__card h3 {
          color: #0F172A;
          font-size: 1.05rem;
          font-weight: 700;
          margin: 0 0 8px;
          line-height: 1.3;
        }

        .team__card p {
          color: #475569;
          font-size: 0.84rem;
          font-weight: 500;
          margin: 0;
          line-height: 1.45;
        }

        /* ── See All Staff Button Styles ───────────────────────── */
        .team__action {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .team__btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #1D5DA8;
          color: #FFFFFF;
          padding: 12px 28px;
          border-radius: 8px;
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 14px rgba(29, 93, 168, 0.25);
        }

        .team__btn:hover {
          background-color: #154680;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(29, 93, 168, 0.35);
        }

        /* ── Slide-Over Drawer ────────────────────────────────── */
        .drawer-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(15, 23, 42, 0.45);
          backdrop-filter: blur(4px);
          z-index: 9999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .drawer-backdrop.open {
          opacity: 1;
          visibility: visible;
        }

        .drawer-panel {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          max-width: 460px;
          height: 100vh;
          background: #FFFFFF;
          z-index: 10000;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          text-align: left;
        }

        .drawer-panel.open {
          transform: translateX(0);
        }

        .drawer-header {
          padding: 20px 24px;
          border-bottom: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          background: #FFFFFF;
          z-index: 10;
        }

        .drawer-header h3 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0F172A;
        }

        .close-btn {
          background: #F1F5F9;
          border: none;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #475569;
          cursor: pointer;
          transition: background 0.2s;
        }

        .close-btn:hover {
          background: #E2E8F0;
          color: #0F172A;
        }

        .drawer-body {
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 26px;
        }

        .profile-top {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .profile-avatar {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: #0F172A;
          overflow: hidden;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-size: 1.5rem;
          font-weight: 800;
          box-shadow: 0 4px 14px rgba(29, 93, 168, 0.2);
        }

        .profile-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-title-area h2 {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 4px;
        }

        .profile-role {
          font-size: 0.88rem;
          color: #1D5DA8;
          font-weight: 700;
          margin: 0 0 4px;
        }

        .profile-division {
          font-size: 0.78rem;
          color: #64748B;
          margin: 0;
          line-height: 1.4;
        }

        .detail-block {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .detail-heading {
          font-size: 0.82rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #64748B;
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0;
        }

        .detail-content p {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #334155;
          margin: 0;
        }

        .qual-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .qual-item {
          font-size: 0.86rem;
          color: #334155;
          line-height: 1.45;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: #F8FAFC;
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid #F1F5F9;
        }

        .qual-item svg {
          color: #1D5DA8;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag {
          font-size: 0.78rem;
          font-weight: 600;
          background: #F1F5F9;
          color: #334155;
          padding: 5px 12px;
          border-radius: 6px;
        }

        .contact-box {
          background: #F8FAFC;
          border-radius: 12px;
          padding: 16px;
          border: 1px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.86rem;
          color: #334155;
        }

        .contact-row svg {
          color: #1D5DA8;
        }

        .contact-row a {
          color: #1D5DA8;
          text-decoration: none;
          font-weight: 600;
        }

        /* ── Responsive Rules ────────────────────────────────── */
        @media (max-width: 1024px) {
          .team__grid--scientists {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .team-section {
            min-height: auto;
            padding: 70px 20px;
          }
          .team__grid--seniors,
          .team__grid--scientists {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .drawer-panel {
            max-width: 100%;
          }
        }

        @media (max-width: 540px) {
          .team__grid--seniors,
          .team__grid--scientists {
            grid-template-columns: 1fr;
          }
          .team__grid--director > * {
            max-width: 100%;
          }
        }
      `}</style>

      <div className="team__inner">
        {/* Section Header */}
        <div className="team__head">
          <ScrollReveal delay={0}>
            <span className="team__badge">Our Team</span>
            <h2 className="team__title">The People Behind GeoAi Lab</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="team__sub">
              A multidisciplinary team of scientists, analysts, and engineers
              driving Sri Lanka's landslide resilience and geospatial research.
            </p>
          </ScrollReveal>
        </div>

        {/* Structured Hierarchy Layout */}
        <div className="team__layout">
          {/* Level 1: Director (Centered Top) */}
          {DIRECTOR && (
            <div className="team__grid--director">
              <ScrollReveal delay={150} direction="up" distance={25}>
                <TeamCard
                  member={DIRECTOR}
                  isDirector={true}
                  onClick={() => setSelectedMember(DIRECTOR)}
                />
              </ScrollReveal>
            </div>
          )}

          {/* Level 2: Senior Scientists (Middle 2 Columns) */}
          <div className="team__grid--seniors">
            {SENIOR_SCIENTISTS.map((m, idx) => (
              <ScrollReveal
                key={m.id}
                delay={200 + idx * 100}
                direction="up"
                distance={25}
              >
                <TeamCard member={m} onClick={() => setSelectedMember(m)} />
              </ScrollReveal>
            ))}
          </div>

          {/* Level 3: Scientists (Bottom 4 Columns) */}
          <div className="team__grid--scientists">
            {SCIENTISTS.map((m, idx) => (
              <ScrollReveal
                key={m.id}
                delay={300 + idx * 80}
                direction="up"
                distance={25}
              >
                <TeamCard member={m} onClick={() => setSelectedMember(m)} />
              </ScrollReveal>
            ))}
          </div>

          {/* Level 4: See All Staff Button */}
          <div className="team__action">
            <ScrollReveal delay={450} direction="up" distance={20}>
              <button onClick={() => navigate("/staff")} className="team__btn">
                See All Staff <ArrowRight size={18} />
              </button>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Drawer Backdrop */}
      <div
        className={`drawer-backdrop ${selectedMember ? "open" : ""}`}
        onClick={() => setSelectedMember(null)}
      />

      {/* Drawer Panel */}
      <div className={`drawer-panel ${selectedMember ? "open" : ""}`}>
        {selectedMember && (
          <>
            <div className="drawer-header">
              <h3>Staff Profile</h3>
              <button
                className="close-btn"
                onClick={() => setSelectedMember(null)}
                aria-label="Close panel"
              >
                <X size={18} />
              </button>
            </div>

            <div className="drawer-body">
              {/* Profile Top */}
              <div className="profile-top">
                <div className="profile-avatar">
                  {selectedMember.image ? (
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                    />
                  ) : (
                    selectedMember.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                  )}
                </div>
                <div className="profile-title-area">
                  <h2>{selectedMember.name}</h2>
                  <div className="profile-role">{selectedMember.role}</div>
                  <p className="profile-division">{selectedMember.division}</p>
                </div>
              </div>

              {/* Bio */}
              <div className="detail-block">
                <h4 className="detail-heading">
                  <Briefcase size={16} /> Overview & Experience
                </h4>
                <div className="detail-content">
                  <p>{selectedMember.bio}</p>
                </div>
              </div>

              {/* Qualifications */}
              <div className="detail-block">
                <h4 className="detail-heading">
                  <GraduationCap size={16} /> Qualifications
                </h4>
                <ul className="qual-list">
                  {selectedMember.qualifications?.map((qual, idx) => (
                    <li key={idx} className="qual-item">
                      <Award size={16} />
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Focus Areas */}
              <div className="detail-block">
                <h4 className="detail-heading">
                  <BookOpen size={16} /> Research Focus
                </h4>
                <div className="tags-container">
                  {selectedMember.focusAreas?.map((area, idx) => (
                    <span key={idx} className="tag">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="detail-block">
                <h4 className="detail-heading">Contact Information</h4>
                <div className="contact-box">
                  <div className="contact-row">
                    <Mail size={16} />
                    <a href={`mailto:${selectedMember.email}`}>
                      {selectedMember.email}
                    </a>
                  </div>
                  <div className="contact-row">
                    <Phone size={16} />
                    <span>{selectedMember.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}