const fs = require('fs');
const path = require('path');

const ROOT = 'C:/Users/Acer/Desktop/yourname-portfolio/src';

function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
  console.log('Successfully wrote: ' + filePath);
}

// 1. App.css
write('App.css', `/* Neo-Brutalist Playful Jenni Theme Styles */

.container {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-padding {
  padding: 4.5rem 0;
}

/* Card wrappers on pink background */
.section-wrapper {
  background: #ffffff;
  border: 4px solid #111111;
  border-radius: 36px;
  box-shadow: 10px 10px 0px #111111;
  padding: 3.5rem 2.5rem;
  margin: 0 auto;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1.25rem;
  background: #ffe033;
  color: #111111;
  font-weight: 800;
  font-size: 0.85rem;
  border: 2px solid #111111;
  border-radius: 9999px;
  box-shadow: 3px 3px 0px #111111;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

.section-title {
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 800;
  color: #111111;
  letter-spacing: -0.02em;
  margin-bottom: 0.85rem;
  line-height: 1.15;
}

.gradient-text {
  font-family: 'Pacifico', cursive;
  color: #1a36fa;
  display: inline-block;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #4b5563;
  max-width: 620px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 500;
}

/* Cards & Components */
.glass-card {
  background: #ffffff;
  border: 3px solid #111111;
  border-radius: 24px;
  box-shadow: 6px 6px 0px #111111;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.glass-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 9px 9px 0px #111111;
}

/* About Grid */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2.5rem;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}

.about-bio-card {
  padding: 2.5rem;
  background: #ffffff;
}

.bio-title {
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 1.25rem;
  color: #111111;
}

.bio-text {
  color: #4b5563;
  margin-bottom: 1.25rem;
  font-size: 1.05rem;
  line-height: 1.7;
}

.about-badges-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.75rem;
}

.tech-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background: #ffe033;
  border: 2px solid #111111;
  box-shadow: 2px 2px 0px #111111;
  font-size: 0.85rem;
  font-weight: 700;
  color: #111111;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (max-width: 640px) {
  .pillars-grid {
    grid-template-columns: 1fr;
  }
}

.pillar-card {
  padding: 1.75rem;
  background: #ffffff;
}

.pillar-icon-wrapper {
  margin-bottom: 1rem;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  border: 2.5px solid #111111;
  box-shadow: 3px 3px 0px #111111;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffe033;
}

.pillar-icon.cyan { color: #1a36fa; }
.pillar-icon.purple { color: #ff2d78; }
.pillar-icon.emerald { color: #059669; }
.pillar-icon.amber { color: #d97706; }

.pillar-title {
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #111111;
}

.pillar-desc {
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.55;
}

/* Skills Section */
.skills-category-tabs {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.cat-tab {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.5rem;
  border-radius: 9999px;
  border: 2.5px solid #111111;
  background: #ffffff;
  color: #111111;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 3px 3px 0px #111111;
  transition: all 0.15s ease;
  font-size: 0.92rem;
}

.cat-tab:hover {
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0px #111111;
}

.cat-tab.active {
  background: #ff2d78;
  color: #ffffff;
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0px #111111;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  padding: 1.5rem;
  background: #ffffff;
  border: 3px solid #111111;
  border-radius: 20px;
  box-shadow: 5px 5px 0px #111111;
  transition: all 0.2s ease;
}

.skill-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 7px 7px 0px #111111;
}

.skill-card.featured {
  border-color: #1a36fa;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.skill-name {
  font-weight: 800;
  font-size: 1rem;
  color: #111111;
}

.skill-badge {
  font-size: 0.8rem;
  font-weight: 800;
  padding: 0.25rem 0.6rem;
  border-radius: 9999px;
  background: #ffe033;
  border: 1.5px solid #111111;
}

.skill-bar-track {
  height: 12px;
  background: #f3f4f6;
  border: 2px solid #111111;
  border-radius: 9999px;
  overflow: hidden;
}

.skill-bar-fill {
  height: 100%;
  background: #1a36fa;
  border-radius: 9999px;
  transition: width 0.8s ease;
}

/* Projects Section */
.project-filters {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.65rem 1.5rem;
  border-radius: 9999px;
  border: 2.5px solid #111111;
  background: #ffffff;
  color: #111111;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 3px 3px 0px #111111;
  transition: all 0.15s ease;
  font-size: 0.92rem;
}

.filter-btn:hover {
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0px #111111;
}

.filter-btn.active {
  background: #ffe033;
  color: #111111;
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0px #111111;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
}

/* Enhanced marquee + floating previews (keeps original identity) */
.projects-section { position: relative; overflow: visible; }
.project-marquee {
  position: absolute;
  left: 50%;
  top: 2.2rem;
  width: 160%;
  transform: translateX(-50%) rotate(-10deg);
  pointer-events: none;
  z-index: 6;
  opacity: 0.12;
}
.project-marquee .marquee-track {
  display: flex;
  gap: 3.25rem;
  align-items: center;
  white-space: nowrap;
  transform-origin: 0 50%;
  animation: marquee-left 36s linear infinite;
}
.marquee-item {
  font-weight: 900;
  font-size: clamp(0.9rem, 2.4vw, 1.6rem);
  color: #111111;
  letter-spacing: 0.12em;
}
@keyframes marquee-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.floating-preview {
  position: absolute;
  width: 140px;
  height: 96px;
  border-radius: 12px;
  overflow: hidden;
  border: 3px solid #111111;
  box-shadow: 6px 6px 0px #111111;
  transform-origin: center;
  transition: opacity 420ms ease, transform 700ms cubic-bezier(.2,.9,.3,1);
  opacity: 0;
  z-index: 10;
  pointer-events: none;
  background: #ffffff;
}
.floating-preview.visible { opacity: 1; }
.floating-preview img { width: 100%; height: 100%; object-fit: cover; display: block; }

/* Layering: images sit above marquee for legibility */
.project-img-wrapper { position: relative; z-index: 9; }
.project-content { position: relative; z-index: 4; }

/* Responsive: reduce rotation & movement on smaller screens */
@media (max-width: 900px) {
  .project-marquee { transform: translateX(-50%) rotate(-6deg); opacity: 0.09; top: 1.6rem; }
  .floating-preview { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .project-marquee .marquee-track { animation: none; }
  .floating-preview { transition: none; opacity: 0 !important; }
}

.project-card {
  background: #ffffff;
  border: 4px solid #111111;
  border-radius: 28px;
  box-shadow: 8px 8px 0px #111111;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;
}

.project-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 12px 12px 0px #111111;
}

.project-img-wrapper {
  position: relative;
  height: 230px;
  overflow: hidden;
  border-bottom: 3.5px solid #111111;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-img {
  transform: scale(1.05);
}

.project-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-title {
  font-size: 1.45rem;
  font-weight: 800;
  color: #111111;
  margin-bottom: 0.75rem;
}

.project-desc {
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.project-tag {
  padding: 0.3rem 0.85rem;
  background: #ffe033;
  border: 1.5px solid #111111;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 800;
  color: #111111;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 9999px;
  border: 2px solid #111111;
  font-weight: 800;
  font-size: 0.9rem;
  text-decoration: none;
  box-shadow: 3px 3px 0px #111111;
  transition: all 0.15s ease;
}

.project-btn.live {
  background: #ff2d78;
  color: #ffffff;
}

.project-btn.github {
  background: #ffffff;
  color: #111111;
}

.project-btn:hover {
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0px #111111;
}

/* Interactive Lab */
.lab-container {
  background: #ffffff;
  border: 4px solid #111111;
  border-radius: 32px;
  box-shadow: 10px 10px 0px #111111;
  padding: 2.5rem;
}

.lab-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

@media (max-width: 850px) {
  .lab-grid {
    grid-template-columns: 1fr;
  }
}

.lab-card {
  background: #ffffff;
  border: 3px solid #111111;
  border-radius: 20px;
  padding: 1.75rem;
  box-shadow: 5px 5px 0px #111111;
}

.lab-title {
  font-weight: 800;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #111111;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.lab-input {
  width: 100%;
  padding: 0.85rem 1rem;
  border: 2px solid #111111;
  border-radius: 12px;
  font-size: 0.95rem;
  font-family: inherit;
  margin-bottom: 1.25rem;
  outline: none;
}

.lab-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.8rem;
  background: #1a36fa;
  color: #ffffff;
  border: 2.5px solid #111111;
  border-radius: 9999px;
  font-weight: 800;
  font-size: 0.95rem;
  cursor: pointer;
  box-shadow: 4px 4px 0px #111111;
  transition: all 0.15s ease;
}

.lab-btn:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px #111111;
}

.terminal-box {
  background: #111827;
  color: #10b981;
  font-family: monospace;
  padding: 1.5rem;
  border: 2.5px solid #111111;
  border-radius: 16px;
  font-size: 0.85rem;
  line-height: 1.6;
  white-space: pre-wrap;
  min-height: 200px;
}

/* Timeline */
.timeline-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 860px;
  margin: 0 auto;
}

.timeline-item {
  background: #ffffff;
  border: 3.5px solid #111111;
  border-radius: 24px;
  box-shadow: 7px 7px 0px #111111;
  padding: 2.25rem;
  position: relative;
  transition: all 0.2s ease;
}

.timeline-item:hover {
  transform: translate(-2px, -2px);
  box-shadow: 10px 10px 0px #111111;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.timeline-role {
  font-size: 1.4rem;
  font-weight: 800;
  color: #111111;
}

.timeline-company {
  font-weight: 700;
  color: #ff2d78;
  font-size: 1.05rem;
}

.timeline-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: #4b5563;
}

.timeline-desc {
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  font-size: 1rem;
}

.timeline-achievements {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.timeline-achievements li {
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.95rem;
  color: #374151;
}

.timeline-achievements li::before {
  content: "✦";
  position: absolute;
  left: 0;
  color: #1a36fa;
  font-weight: bold;
}

/* Contact */
.contact-wrapper {
  background: #ffffff;
  border: 4px solid #111111;
  border-radius: 36px;
  box-shadow: 10px 10px 0px #111111;
  padding: 3.5rem 2.5rem;
  max-width: 950px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
}

@media (max-width: 800px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

.contact-info-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: #111111;
  margin-bottom: 1rem;
}

.contact-info-text {
  color: #4b5563;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.contact-pill-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: #ffffff;
  border: 2.5px solid #111111;
  border-radius: 16px;
  box-shadow: 3px 3px 0px #111111;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.15s ease;
}

.contact-pill-item:hover {
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0px #111111;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-label {
  font-weight: 700;
  font-size: 0.9rem;
  color: #111111;
}

.form-input, .form-textarea {
  width: 100%;
  padding: 0.9rem 1.25rem;
  border: 2.5px solid #111111;
  border-radius: 14px;
  font-size: 0.95rem;
  font-family: inherit;
  box-shadow: 3px 3px 0px #111111;
  outline: none;
  background: #ffffff;
  transition: all 0.15s ease;
}

.form-input:focus, .form-textarea:focus {
  border-color: #1a36fa;
  box-shadow: 4px 4px 0px #1a36fa;
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 1rem 2.5rem;
  background: #ff2d78;
  color: #ffffff;
  font-weight: 800;
  font-size: 1.05rem;
  border: 3px solid #111111;
  border-radius: 9999px;
  box-shadow: 5px 5px 0px #111111;
  cursor: pointer;
  transition: all 0.15s ease;
}

.submit-btn:hover {
  transform: translate(-2px, -2px);
  box-shadow: 7px 7px 0px #111111;
}

/* Footer */
.footer-section {
  background: #111111;
  color: #ffffff;
  padding: 3.5rem 1.5rem 2.5rem;
  border-top: 4px solid #111111;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.footer-brand-title {
  font-family: 'Pacifico', cursive;
  font-size: 2rem;
  color: #ffffff;
  text-decoration: none;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.footer-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  transition: color 0.15s ease;
}

.footer-link:hover {
  color: #ffe033;
}

.scroll-top-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  background: #ff2d78;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 3px 3px 0px #ffffff;
  transition: all 0.15s ease;
}

.scroll-top-btn:hover {
  transform: translateY(-3px);
  box-shadow: 5px 5px 0px #ffffff;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  font-size: 0.9rem;
  color: #9ca3af;
}
`);

// 2. Footer.jsx
write('components/Footer.jsx', `import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <Link to="/" className="footer-brand-title">
            Jenni<span style={{ color: '#ffe033' }}>.</span>
          </Link>

          <div className="footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/work" className="footer-link">Work</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
            <a href="https://github.com/jmankar8168" target="_blank" rel="noreferrer" className="footer-link">
              GitHub ↗
            </a>
          </div>

          <button onClick={scrollToTop} className="scroll-top-btn" title="Back to top">
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Jennifer. Built with React & Vite. Made with <Heart size={14} style={{ display: 'inline', color: '#ff2d78', verticalAlign: 'middle' }} />.</p>
        </div>
      </div>
    </footer>
  );
}
`);

// 3. Contact.jsx
write('components/Contact.jsx', `import React, { useState } from 'react';
import { Mail, Send, Check, Copy, MapPin, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = "jmankar8168@example.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="contact-wrapper">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-tag">
              <Sparkles size={14} /> GET IN TOUCH
            </span>
            <h2 className="section-title">
              Let's Build Something <span className="gradient-text">Spectacular</span>
            </h2>
            <p className="section-subtitle">
              Have a project in mind, an exciting role, or just want to talk design? Send a message!
            </p>
          </div>

          <div className="contact-grid">
            <div>
              <h3 className="contact-info-title">Say Hello! 👋</h3>
              <p className="contact-info-text">
                I'm always excited to collaborate on groundbreaking web products, creative design systems, and delightful digital experiments.
              </p>

              <div className="contact-pill-item" onClick={handleCopyEmail}>
                <Mail size={20} color="#ff2d78" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: 700 }}>EMAIL ME</div>
                  <div style={{ fontWeight: 800, color: '#111111', fontSize: '0.95rem' }}>{email}</div>
                </div>
                {copiedEmail ? <Check size={18} color="#059669" /> : <Copy size={18} color="#6b7280" />}
              </div>

              <div className="contact-pill-item">
                <MapPin size={20} color="#1a36fa" />
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: 700 }}>LOCATION</div>
                  <div style={{ fontWeight: 800, color: '#111111', fontSize: '0.95rem' }}>Remote / Worldwide</div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jennifer Smith"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jennifer@example.com"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hey Jennifer, I'd love to chat about..."
                  required
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="submit-btn">
                {submitted ? (
                  <>
                    <Check size={18} /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message 🚀
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
`);

// 4. Update About.jsx to have section-wrapper
write('components/About.jsx', `import React from 'react';
import { Cpu, Zap, Layout, Layers, ShieldCheck, Code, Globe, Sparkles } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Zap className="pillar-icon cyan" size={28} />,
      title: 'Performance First',
      description: 'Optimized rendering, zero bloat, and sub-second load times engineered for maximum conversion.'
    },
    {
      icon: <Layout className="pillar-icon purple" size={28} />,
      title: 'Playful Modern Aesthetics',
      description: 'Tactile micro-animations, expressive typography, sticker badges, and memorable visual flair.'
    },
    {
      icon: <Layers className="pillar-icon emerald" size={28} />,
      title: 'Modular Architecture',
      description: 'Clean, scalable JavaScript & React component hierarchies built for maintainability and speed.'
    },
    {
      icon: <Cpu className="pillar-icon amber" size={28} />,
      title: 'AI & Modern APIs',
      description: 'Integrating smart AI APIs, real-time data flows, and interactive canvas components.'
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-wrapper">
          <div className="section-header">
            <span className="section-tag">
              <Sparkles size={14} /> ABOUT JENNIFER
            </span>
            <h2 className="section-title">
              Crafting Bold & <span className="gradient-text">Delightful Web Magic</span>
            </h2>
            <p className="section-subtitle">
              Combining design obsession with rigorous frontend engineering to create websites that stand out.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-bio-card glass-card">
              <h3 className="bio-title">My Craft & Philosophy</h3>
              <p className="bio-text">
                I build digital experiences that refuse to look like generic templates. With a deep passion for playful aesthetics and rock-solid frontend architecture, I transform ideas into intuitive, fast-loading products.
              </p>
              <p className="bio-text">
                Whether creating custom design systems in React, crafting high-performance dashboards with Vite, or experimenting with generative AI and canvas interactions, my work focuses on user joy and technical excellence.
              </p>
              <div className="about-badges-row">
                <span className="tech-badge"><Code size={14} /> Modern JavaScript</span>
                <span className="tech-badge"><Globe size={14} /> React & Vite</span>
                <span className="tech-badge"><ShieldCheck size={14} /> Clean Architecture</span>
              </div>
            </div>

            <div className="pillars-grid">
              {pillars.map((pillar, index) => (
                <div key={index} className="pillar-card glass-card">
                  <div className="pillar-icon-wrapper">
                    {pillar.icon}
                  </div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`);

// 5. Update Skills.jsx to have section-wrapper
write('components/Skills.jsx', `import React, { useState } from 'react';
import { Code2, Server, Brain, Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend Tech', icon: <Code2 size={16} /> },
    { id: 'backend', name: 'Backend & Cloud', icon: <Server size={16} /> },
    { id: 'ai', name: 'AI & Tools', icon: <Brain size={16} /> },
  ];

  const skillsData = [
    { name: 'JavaScript (ES6+)', level: 95, category: 'frontend', highlight: true },
    { name: 'React.js', level: 92, category: 'frontend', highlight: true },
    { name: 'Vite / Tooling', level: 90, category: 'frontend' },
    { name: 'Modern CSS3 & Animations', level: 96, category: 'frontend' },
    { name: 'Node.js & Express', level: 88, category: 'backend', highlight: true },
    { name: 'REST & GraphQL APIs', level: 85, category: 'backend' },
    { name: 'PostgreSQL & Database Design', level: 82, category: 'backend' },
    { name: 'Generative AI API Integration', level: 88, category: 'ai', highlight: true },
    { name: 'Git & Collaborative Workflows', level: 92, category: 'ai' },
    { name: 'Web Performance & Core Web Vitals', level: 90, category: 'frontend' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-wrapper">
          <div className="section-header">
            <span className="section-tag">
              <Sparkles size={14} /> TECH ARSENAL
            </span>
            <h2 className="section-title">
              Technologies & <span className="gradient-text">Mastered Skills</span>
            </h2>
            <p className="section-subtitle">
              A comprehensive view of my technical skills, frontend mastery, and developer toolkit.
            </p>
          </div>

          <div className="skills-category-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={\`cat-tab \${activeCategory === cat.id ? 'active' : ''}\`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>

          <div className="skills-grid">
            {filteredSkills.map((skill, index) => (
              <div 
                key={index} 
                className={\`skill-card \${skill.highlight ? 'featured' : ''}\`}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-badge">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div 
                    className="skill-bar-fill" 
                    style={{ width: \`\${skill.level}%\` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
`);

// 6. Update Projects.jsx to wrap with section-wrapper
write('components/Projects.jsx', `import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

// Enhanced Projects: diagonal marquee + floating image previews
export default function Projects() {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);
  const [floating, setFloating] = useState({ visible: false, src: '', style: {} });

  const projectsData = [
    {
      id: 1,
      title: 'Aurora AI Analytics Platform',
      category: 'ai',
      image: '/project-ai.jpg',
      description: 'An AI-powered predictive analytics dashboard rendering real-time business insights, predictive sales charts, and automated anomaly alerts.',
      tags: ['React', 'JavaScript', 'Vite', 'Recharts', 'AI API'],
      liveUrl: 'https://example.com/aurora-ai',
      githubUrl: 'https://github.com/jmankar8168/aurora-ai',
      featured: true,
      metrics: 'Over 12,000+ active users daily'
    },
    {
      id: 2,
      title: 'Synapse Flow Developer Engine',
      category: 'saas',
      image: '/project-saas.jpg',
      description: 'Futuristic visual workflow automation editor for cloud microservices, complete with code terminal execution, live node graphs, and WebHook integrations.',
      tags: ['JavaScript', 'React', 'Node.js', 'WebSockets', 'Canvas'],
      liveUrl: 'https://example.com/synapse-flow',
      githubUrl: 'https://github.com/jmankar8168/synapse-flow',
      featured: true,
      metrics: '40% reduction in workflow deployment times'
    }
  ];

  // derive marquee labels from project tags (keep to actual project-related labels)
  const marqueeLabels = Array.from(new Set(projectsData.flatMap(p => p.tags))).slice(0, 12);

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  // Floating preview loop (lightweight, respects reduced-motion)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const imgs = projectsData.map(p => p.image).filter(Boolean);
    if (!imgs.length) return;

    let i = 0;
    let alive = true;

    const showNext = () => {
      if (!alive) return;
      const src = imgs[i % imgs.length];
      const rect = sectionRef.current ? sectionRef.current.getBoundingClientRect() : { width: 1000, height: 600 };
      const padding = 40;
      const x = Math.random() * (rect.width - 160 - padding) + padding;
      const y = Math.random() * (rect.height - 120 - padding) + padding;
      const rotate = (Math.random() - 0.5) * 8; // subtle rotation

      setFloating({
        visible: true,
        src,
        style: {
          left: x + 'px',
          top: y + 'px',
          transform: `translate3d(-50%, -50%, 0) rotate(${rotate}deg)`
        }
      });

      const showDuration = 2200 + Math.random() * 2000;
      setTimeout(() => {
        setFloating(f => ({ ...f, visible: false }));
      }, showDuration - 250);

      i++;
    };

    const interval = setInterval(showNext, 3000);
    const t0 = setTimeout(showNext, 700);

    return () => { alive = false; clearInterval(interval); clearTimeout(t0); };
  }, []);

  return (
    <section id="projects" className="section-padding projects-section" ref={sectionRef}>
      <div className="container">
        <div className="section-wrapper">
          <div className="section-header">
            <span className="section-tag">
              <Sparkles size={14} /> FEATURED CREATIONS
            </span>
            <h2 className="section-title">
              Selected <span className="gradient-text">Work & Products</span>
            </h2>
            <p className="section-subtitle">
              High-impact web applications built with modern frontend architecture, intuitive UX, and clean code.
            </p>
          </div>

          <div className="project-filters">
            {['all', 'ai', 'saas'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`filter-btn ${filter === f ? 'active' : ''}`}
              >
                {f === 'all' ? 'All Work' : f === 'ai' ? 'AI & Analytics' : 'SaaS Systems'}
              </button>
            ))}
          </div>

          {/* Diagonal marquee (pure CSS animation) */}
          <div className="project-marquee" aria-hidden>
            <div className="marquee-track">
              {marqueeLabels.concat(marqueeLabels).map((label, idx) => (
                <span key={idx} className="marquee-item">{label.toUpperCase()}</span>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map(proj => (
              <div key={proj.id} className="project-card">
                <div className="project-img-wrapper">
                  <img src={proj.image} alt={proj.title} className="project-img" />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-desc">{proj.description}</p>
                  <div className="project-tags">
                    {proj.tags.map((t, idx) => (
                      <span key={idx} className="project-tag">{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn live"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn github"
                    >
                      <GithubIcon size={16} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating preview element (absolutely positioned inside section) */}
          <div
            className={`floating-preview ${floating.visible ? 'visible' : ''}`}
            style={floating.style}
            aria-hidden
          >
            {floating.src && <img src={floating.src} alt="" />}
          </div>

        </div>
      </div>
    </section>
  );
}
`);


// 7. Update InteractiveLab.jsx to wrap with section-wrapper
write('components/InteractiveLab.jsx', `import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Terminal, Play, PartyPopper } from 'lucide-react';

export default function InteractiveLab() {
  const [promptInput, setPromptInput] = useState('Build a Vite + React portfolio website with Jenni aesthetic');
  const [isGenerating, setIsGenerating] = useState(false);
  const [outputResult, setOutputResult] = useState(
    '// Ready to generate code snippet...\\n// Click "Generate Code" above.'
  );

  const handleConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setOutputResult('// Synthesizing architecture...\\n// Initializing Vite + React components...');

    setTimeout(() => {
      setOutputResult(
\`// Output generated for prompt: "\${promptInput}"
import React from 'react';

export default function JenniPortfolio() {
  return (
    <div className="portfolio-hero" style={{ background: '#ff2d78', padding: '40px' }}>
      <h1 style={{ fontFamily: 'Pacifico, cursive', color: '#1a36fa' }}>What the F*lio?</h1>
      <p style={{ color: '#ffffff' }}>Loaded instantly in sub-seconds with zero bundle bloat!</p>
    </div>
  );
}\`
      );
      setIsGenerating(false);
      handleConfetti();
    }, 900);
  };

  return (
    <section id="lab" className="section-padding">
      <div className="container">
        <div className="section-wrapper">
          <div className="section-header">
            <span className="section-tag">
              <Sparkles size={14} /> PLAYGROUND
            </span>
            <h2 className="section-title">
              Interactive <span className="gradient-text">Dev Sandbox</span>
            </h2>
            <p className="section-subtitle">
              Try out live code synthesis and confetti triggers in this interactive browser sandbox.
            </p>
          </div>

          <div className="lab-grid">
            <div className="lab-card">
              <h3 className="lab-title">
                <Terminal size={20} color="#1a36fa" /> Code Synthesis Engine
              </h3>
              <p style={{ color: '#4b5563', fontSize: '0.95rem', marginBottom: '1rem' }}>
                Type an idea below to simulate AI code generation:
              </p>
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                className="lab-input"
                placeholder="Describe a component..."
              />
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button onClick={handleGenerate} disabled={isGenerating} className="lab-btn">
                  <Play size={16} /> {isGenerating ? 'Generating...' : 'Generate Code'}
                </button>
                <button
                  onClick={handleConfetti}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.8rem 1.6rem',
                    background: '#ffe033',
                    color: '#111111',
                    border: '2.5px solid #111111',
                    borderRadius: '9999px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: '4px 4px 0px #111111',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <PartyPopper size={16} /> Celebrate! 🎉
                </button>
              </div>
            </div>

            <div className="terminal-box">
              {outputResult}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`);

// 8. Update Experience.jsx to wrap with section-wrapper
write('components/Experience.jsx', `import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Senior Full-Stack Architect',
      company: 'InnovateX AI Labs',
      location: 'San Francisco, CA',
      period: '2023 - Present',
      description: 'Leading engineering on real-time AI dashboards and high-throughput data processing pipelines with React, Node.js, and Cloud native services.',
      achievements: [
        'Reduced web bundle load times by 45% through Vite build optimization and code splitting.',
        'Architected AI prompt management middleware handling 2M+ requests per month.',
        'Mentored 6 junior/mid-level engineers in modern JavaScript standards.'
      ]
    },
    {
      role: 'Lead Frontend Engineer',
      company: 'Apex Digital Studio',
      location: 'Remote',
      period: '2021 - 2023',
      description: 'Spearheaded frontend architecture for enterprise SaaS clients using React, state management, and high-performance WebGL canvas components.',
      achievements: [
        'Built custom design system component library adopted across 12 client products.',
        'Improved Google Core Web Vitals LCP score from 3.8s to 0.9s across flagship apps.'
      ]
    },
    {
      role: 'Full-Stack Developer',
      company: 'CloudSphere Solutions',
      location: 'New York, NY',
      period: '2019 - 2021',
      description: 'Developed RESTful microservices and single-page web applications for fintech & e-commerce clients.',
      achievements: [
        'Engineered secure OAuth2 authentication flow for over 150,000 active accounts.',
        'Automated CI/CD deployment pipelines using GitHub Actions.'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="section-wrapper">
          <div className="section-header">
            <span className="section-tag">
              <Sparkles size={14} /> CAREER TIMELINE
            </span>
            <h2 className="section-title">
              Professional <span className="gradient-text">Journey</span>
            </h2>
            <p className="section-subtitle">
              A track record of leading web application initiatives and delivering engineering excellence.
            </p>
          </div>

          <div className="timeline-container">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <span className="timeline-company">{exp.company}</span>
                  </div>
                  <div className="timeline-meta">
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={14} /> {exp.period}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>
                </div>

                <p className="timeline-desc">{exp.description}</p>

                <ul className="timeline-achievements">
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
`);

console.log('--- ALL COMPONENTS & STYLES UPDATED ---');
