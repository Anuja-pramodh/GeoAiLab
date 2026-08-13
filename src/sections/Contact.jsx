import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import ScrollReveal from "../components/animations/ScrollReveal";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbx6znbThUfdpQWP0f24HnhgAqWOS39-brhV8C4Fd7_zbpD9ED6xAcFVfmWdehMHWAwn/exec";

    // ⚡ Fast Submission Strategy (Optimistic Instant Response)
    // Google Script එක Response එක දෙනකම් ඉන්නේ නැතිව Background එකේ Data යවන අතරතුර UI එක Instant Complete කරයි.
    
    // 1. Google Apps Script එකට Background එකෙන් Request එක යැවීම
    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(formData),
    }).catch((err) => {
      console.error("Submission error:", err);
    });

    // 2. User ට තත්පර භාගයක් (500ms) ඇතුළත Success message එක පෙන්වීම
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 500);
  };

  return (
    <section id="contact" className="contact-section">
      <style>{`
        /* ── Full 100vh Viewport Section Setup ────────────────── */
        .contact-section {
          background-color: #081b33;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          box-sizing: border-box;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1E293B;
        }

        #contact {
          scroll-margin-top: 10px;
        }

        .contact-container {
          max-width: 1240px;
          width: 100%;
          margin: 0 auto;
        }

        /* ── Two-Column Grid Layout ────────────────────────────── */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 40px;
          align-items: stretch;
        }

        .contact-grid > * {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        /* ── Interactive Map Container ─────────────────────────── */
        .map-wrapper {
          width: 100%;
          height: 100%;
          min-height: 480px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
          border: 1px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .map-frame {
          width: 100%;
          height: 100%;
          flex: 1;
          border: 0;
          display: block;
        }

        /* ── Right Content Layout ──────────────────────────────── */
        .contact-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
          justify-content: space-between;
        }

        .contact-title {
          font-size: clamp(2rem, 3vw, 2.5rem);
          font-weight: 800;
          color: #EFF6FF;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }

        .contact-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          color: #EFF6FF;
          margin: 0;
        }

        /* ── Contact Details List ──────────────────────────────── */
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .info-icon {
          color: #1D5DA8;
          background: #EFF6FF;
          padding: 8px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-text p {
          margin: 0;
          font-size: 0.85rem;
          color: #EFF6FF;
          line-height: 1.45;
        }

        .info-text strong {
          color: #EFF6FF;
          display: block;
          margin-bottom: 2px;
        }

        /* ── Compact Message Form ──────────────────────────────── */
        .contact-form-card {
          background: #F8FAFC;
          border-radius: 14px;
          padding: 22px 24px;
          border: 1px solid #E2E8F0;
        }

        .form-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 14px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .form-group.full-width {
          grid-column: span 2;
        }

        .form-group label {
          font-size: 0.78rem;
          font-weight: 600;
          color: #475569;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #CBD5E1;
          border-radius: 8px;
          font-size: 0.88rem;
          color: #0F172A;
          background: #FFFFFF;
          box-sizing: border-box;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: inherit;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: #1D5DA8;
          box-shadow: 0 0 0 3px rgba(29, 93, 168, 0.12);
        }

        .form-textarea {
          resize: vertical;
          min-height: 80px;
        }

        .submit-btn {
          background-color: #1D5DA8;
          color: #FFFFFF;
          border: none;
          border-radius: 8px;
          padding: 10px 20px;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background-color 0.2s;
          margin-top: 6px;
        }

        .submit-btn:hover {
          background-color: #154680;
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .btn-spinner {
          width: 14px;
          height: 14px;
          border: 2px solid #ffffff;
          border-bottom-color: transparent;
          border-radius: 50%;
          display: inline-block;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .status-msg {
          margin-top: 10px;
          font-size: 0.82rem;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .status-msg.success {
          color: #16A34A;
        }

        .status-msg.error {
          color: #DC2626;
        }

        @media (max-width: 960px) {
          .contact-section {
            min-height: auto;
            padding: 70px 20px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .map-wrapper {
            min-height: 380px;
          }
        }

        @media (max-width: 540px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .form-group.full-width {
            grid-column: span 1;
          }
        }
      `}</style>

      <div className="contact-container">
        <div className="contact-grid">
          <ScrollReveal direction="right" delay={100} distance={30}>
            <div className="map-wrapper">
              <iframe
                title="NBRO GeoAI Lab Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.970116898492!2d79.8659113!3d6.8942678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bd6b9283f6d%3A0x21c6681f742965c2!2sNational%20Building%20Research%20Institute!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                className="map-frame"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </ScrollReveal>

          <div className="contact-content">
            <ScrollReveal direction="up" delay={150} distance={20}>
              <div>
                <h2 className="contact-title">Contact us</h2>
                <p className="contact-desc">
                  GeoAI Lab specializes in integrating geospatial data with artificial intelligence to drive innovative solutions for urban planning, disaster management, environmental monitoring, and infrastructure development.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={250} distance={20}>
              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon">
                    <Phone size={18} />
                  </div>
                  <div className="info-text">
                    <p>+94 112 586 946 / +94 112 501 834</p>
                    <p>+94 112 500 354 / +94 112 503 826</p>
                    <p>+94 112 503 431 / +94 112 502 611</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Mail size={18} />
                  </div>
                  <div className="info-text">
                    <p>info@nbro.gov.lk / nbro@sltnet.lk</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <MapPin size={18} />
                  </div>
                  <div className="info-text">
                    <strong>General Inquiries</strong>
                    <p>99/1, Jawatta Road, Colombo 05, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={350} distance={20}>
              <div className="contact-form-card">
                <h3 className="form-title">Send us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+94 7X XXX XXXX"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="form-textarea"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={status.submitting}
                  >
                    {status.submitting ? (
                      <>
                        <span className="btn-spinner"></span> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={15} />
                      </>
                    )}
                  </button>

                  {status.submitted && (
                    <div className="status-msg success">
                      <CheckCircle size={15} /> Thank you! Your message has been recorded.
                    </div>
                  )}

                  {status.error && (
                    <div className="status-msg error">
                      Failed to send message. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}