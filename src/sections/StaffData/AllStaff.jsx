import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  X,
  Mail,
  Phone,
  GraduationCap,
  Award,
  BookOpen,
  Briefcase,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";

import { STAFF_MEMBERS, categories } from "./staffData";

export default function AllStaff() {
  const navigate = useNavigate();
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [filter, setFilter] = useState("All");

  // Page එකට පිවිසි විට Scroll එක උඩටම Reset කිරීම
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredStaff =
    filter === "All"
      ? STAFF_MEMBERS
      : STAFF_MEMBERS.filter((s) => s.type === filter);

  return (
    <div className="staff-page">
      <style>{`
        /* ── Page Setup ────────────────────────────────────────── */
        .staff-page {
          background-color: #F8FAFC;
          min-height: 100vh;
          padding: 60px 24px;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1E293B;
          box-sizing: border-box;
        }

        .staff-container {
          max-width: 1240px;
          margin: 50px auto;
        }

        /* ── Page Header ───────────────────────────────────────── */
        .staff-header {
          margin-bottom: 36px;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #1D5DA8;
          font-size: 0.88rem;
          font-weight: 700;
          text-decoration: none;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          margin-bottom: 16px;
          transition: transform 0.2s;
        }

        .back-link:hover {
          transform: translateX(-4px);
        }

        .staff-title {
          font-size: clamp(2rem, 3vw, 2.5rem);
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }

        .staff-subtitle {
          color: #64748B;
          font-size: 1rem;
          margin: 0;
        }

        /* ── Category Filters ──────────────────────────────────── */
        .filter-bar {
          display: flex;
          gap: 10px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 8px 18px;
          border-radius: 20px;
          border: 1px solid #E2E8F0;
          background: #FFFFFF;
          color: #475569;
          font-size: 0.86rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          border-color: #CBD5E1;
          color: #0F172A;
        }

        .filter-btn.active {
          background: #1D5DA8;
          color: #FFFFFF;
          border-color: #1D5DA8;
          box-shadow: 0 4px 12px rgba(29, 93, 168, 0.2);
        }

        /* ── Staff Grid ────────────────────────────────────────── */
        .staff-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
          gap: 24px;
        }

        /* ── Staff Card ────────────────────────────────────────── */
        .staff-card {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          position: relative;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .staff-card:hover {
          transform: translateY(-6px);
          border-color: #CBD5E1;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
        }

        .card-avatar {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: #0F172A;
          margin-bottom: 16px;
          overflow: hidden;
          box-shadow: 0 6px 16px rgba(29, 93, 168, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-size: 1.4rem;
          font-weight: 800;
        }

        .card-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 6px;
        }

        .card-role {
          font-size: 0.82rem;
          color: #1D5DA8;
          font-weight: 700;
          margin: 0 0 8px;
        }

        .card-division {
          font-size: 0.78rem;
          color: #64748B;
          margin: 0 0 16px;
          line-height: 1.4;
        }

        .card-action {
          margin-top: auto;
          font-size: 0.82rem;
          font-weight: 700;
          color: #1D5DA8;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        /* ── Slide-Over Backdrop ──────────────────────────────── */
        .drawer-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(4px);
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .drawer-backdrop.open {
          opacity: 1;
          visibility: visible;
        }

        /* ── Slide-Over Panel ────────────────────────────────── */
        .drawer-panel {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          max-width: 460px;
          height: 100vh;
          background: #FFFFFF;
          z-index: 1000;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
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
          gap: 28px;
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

        .profile-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          background: #EFF6FF;
          color: #1D5DA8;
          padding: 3px 10px;
          border-radius: 12px;
        }

        .detail-block {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .detail-heading {
          font-size: 0.85rem;
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

        .contact-row a:hover {
          text-decoration: underline;
        }

        @media (max-width: 640px) {
          .drawer-panel {
            max-width: 100%;
          }
        }
      `}</style>

      <div className="staff-container">
        {/* Header */}
        <div className="staff-header">
          <button onClick={() => navigate("/")} className="back-link">
            <ArrowLeft size={16} /> Back to Overview
          </button>
          <h1 className="staff-title">All Staff Members</h1>
          <p className="staff-subtitle">
            Explore the complete directory of scientists, researchers, and technical staff.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Staff Grid */}
        <div className="staff-grid">
          {filteredStaff.map((staff) => {
            const initials = staff.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2);

            return (
              <div
                key={staff.id}
                className="staff-card"
                onClick={() => setSelectedStaff(staff)}
              >
                <div className="card-avatar">
                  {staff.image ? (
                    <img src={staff.image} alt={staff.name} />
                  ) : (
                    <span>{initials}</span>
                  )}
                </div>
                <h3 className="card-name">{staff.name}</h3>
                <div className="card-role">{staff.role}</div>
                <div className="card-division">{staff.division}</div>
                <span className="card-action">
                  View Details <ChevronRight size={15} />
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide Drawer Backdrop */}
      <div
        className={`drawer-backdrop ${selectedStaff ? "open" : ""}`}
        onClick={() => setSelectedStaff(null)}
      />

      {/* Slide Drawer Panel */}
      <div className={`drawer-panel ${selectedStaff ? "open" : ""}`}>
        {selectedStaff && (
          <>
            <div className="drawer-header">
              <h3>Staff Profile</h3>
              <button
                className="close-btn"
                onClick={() => setSelectedStaff(null)}
                aria-label="Close panel"
              >
                <X size={18} />
              </button>
            </div>

            <div className="drawer-body">
              {/* Profile Top Info */}
              <div className="profile-top">
                <div className="profile-avatar">
                  {selectedStaff.image ? (
                    <img src={selectedStaff.image} alt={selectedStaff.name} />
                  ) : (
                    selectedStaff.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                  )}
                </div>
                <div className="profile-title-area">
                  <h2>{selectedStaff.name}</h2>
                  <div className="profile-role">{selectedStaff.role}</div>
                  <span className="profile-badge">{selectedStaff.type}</span>
                </div>
              </div>

              {/* Bio */}
              {selectedStaff.bio && (
                <div className="detail-block">
                  <h4 className="detail-heading">
                    <Briefcase size={16} /> Overview & Experience
                  </h4>
                  <div className="detail-content">
                    <p>{selectedStaff.bio}</p>
                  </div>
                </div>
              )}

              {/* Qualifications */}
              {selectedStaff.qualifications?.length > 0 && (
                <div className="detail-block">
                  <h4 className="detail-heading">
                    <GraduationCap size={16} /> Qualifications
                  </h4>
                  <ul className="qual-list">
                    {selectedStaff.qualifications.map((qual, idx) => (
                      <li key={idx} className="qual-item">
                        <Award size={16} />
                        <span>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Research / Focus Areas */}
              {selectedStaff.focusAreas?.length > 0 && (
                <div className="detail-block">
                  <h4 className="detail-heading">
                    <BookOpen size={16} /> Focus Areas
                  </h4>
                  <div className="tags-container">
                    {selectedStaff.focusAreas.map((area, idx) => (
                      <span key={idx} className="tag">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Information */}
              {(selectedStaff.email || selectedStaff.phone) && (
                <div className="detail-block">
                  <h4 className="detail-heading">Contact Information</h4>
                  <div className="contact-box">
                    {selectedStaff.email && (
                      <div className="contact-row">
                        <Mail size={16} />
                        <a href={`mailto:${selectedStaff.email}`}>
                          {selectedStaff.email}
                        </a>
                      </div>
                    )}
                    {selectedStaff.phone && (
                      <div className="contact-row">
                        <Phone size={16} />
                        <span>{selectedStaff.phone}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}