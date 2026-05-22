import { motion } from 'framer-motion';
import { aboutContent } from '../data/about.js';
import './AboutPage.css';

const fadeIn = {
  initial:   { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function AboutPage() {
  const a = aboutContent;

  return (
    <motion.div
      className="about-me-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* HERO */}
      <div className="about-me-hero">
        <div className="about-me-hero-bar" />
        <div className="about-me-left">
          <p className="about-me-eyebrow">About me</p>
          <h1 className="about-me-name">{a.name}</h1>
          <p className="about-me-title">{a.title}</p>
          {a.bio.map((paragraph, i) => (
            <p
              key={i}
              className="about-me-bio"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
          <div className="about-me-avail">
            <div className="about-me-avail-dot" />
            <span>{a.availability}</span>
          </div>
        </div>
        <div className="about-me-right">
          <div className="about-me-photo">
            <div className="about-me-photo-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
            </div>
            <span className="about-me-photo-label">Add your photo here</span>
            <div className="about-me-photo-accent" />
          </div>
        </div>
      </div>

      {/* STATS */}
      <motion.div className="about-me-stats" {...fadeIn}>
        {a.stats.map((s, i) => (
          <div key={i} className="about-me-stat">
            <div className="about-me-stat-num">
              {s.value}{s.suffix && <span>{s.suffix}</span>}
            </div>
            <div className="about-me-stat-label">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* SKILLS */}
      <motion.div className="about-me-section" {...fadeIn}>
        <p className="about-me-section-label">What I do</p>
        <div className="skills-grid">
          {a.skills.map((s, i) => (
            <div key={i} className="skill-card">
              <div className="skill-card-icon">
                <SkillIcon index={i} />
              </div>
              <h3 className="skill-card-title">{s.title}</h3>
              <p className="skill-card-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* TOOLS */}
      <motion.div className="about-me-section" {...fadeIn}>
        <p className="about-me-section-label">Tools & Methods</p>
        <div className="tools-row">
          {a.tools.map(t => (
            <span key={t} className="tool-pill">{t}</span>
          ))}
        </div>
      </motion.div>

      {/* INDUSTRIES */}
      <motion.div className="about-me-section" {...fadeIn}>
        <p className="about-me-section-label">Industries</p>
        <div className="industries-row">
          {a.industries.map(ind => (
            <span key={ind} className="industry-pill">{ind}</span>
          ))}
        </div>
      </motion.div>

      {/* GET IN TOUCH */}
      <motion.div className="get-in-touch" {...fadeIn}>
        <div className="git-left">
          <h2>Let's build something<br />that matters.</h2>
          <p>I'm currently open to full-time UX design roles — particularly in complex, high-stakes product environments. If you're working on something where clarity, research, and rigour matter, I'd love to hear about it.</p>
        </div>
        <div className="git-links">
          <a href={`mailto:${a.contact.email}`} className="git-link">
            <div className="git-link-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="git-link-body">
              <p className="git-link-label">Email</p>
              <p className="git-link-value">{a.contact.email}</p>
            </div>
            <span className="git-link-arrow">→</span>
          </a>

          <a href={a.contact.linkedinHref} target="_blank" rel="noreferrer" className="git-link">
            <div className="git-link-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </div>
            <div className="git-link-body">
              <p className="git-link-label">LinkedIn</p>
              <p className="git-link-value">{a.contact.linkedin}</p>
            </div>
            <span className="git-link-arrow">→</span>
          </a>

          <a href={a.contact.resumeUrl} download className="git-resume">
            <div className="git-resume-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="12" y1="12" x2="12" y2="18"/>
                <polyline points="9 15 12 18 15 15"/>
              </svg>
            </div>
            <div className="git-resume-body">
              <p className="git-resume-label">Download</p>
              <p className="git-resume-value">Resume — PDF</p>
            </div>
            <span className="git-resume-arrow">↓</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SkillIcon({ index }) {
  switch (index) {
    case 0:
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
    case 1:
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="12" y2="15"/></svg>;
    case 2:
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
    default:
      return null;
  }
}
