import { motion } from 'framer-motion';
import './Chapter.css';

export default function Chapter({ chapter, accentColor, accentColorRgb }) {
  const { id, hook, title, paragraphs, pullQuote, artifactLabel, artifactImage } = chapter;
  const bgColor = `rgba(${accentColorRgb}, 0.07)`;

  return (
    <motion.div
      className="chapter"
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="chapter-label">
        <span className="chapter-hook">{hook}</span>
      </div>
      <h3 className="chapter-title">{title}</h3>

      {paragraphs.map((p, i) => (
        <p key={i} className="cs-body">{p}</p>
      ))}

      {pullQuote && (
        <blockquote
          className="cs-pull-quote"
          style={{ borderColor: accentColor, background: bgColor }}
        >
          <span className="cs-pull-icon" style={{ color: accentColor }}>"</span>
          <p>{pullQuote}</p>
        </blockquote>
      )}

      {(artifactLabel || artifactImage) && (
        <div className="cs-artifact">
          {artifactImage ? (
            <img src={artifactImage} alt={artifactLabel || title} />
          ) : (
            <div className="cs-artifact-placeholder">
              <div className="cs-artifact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
              {artifactLabel && <span className="cs-artifact-label">{artifactLabel}</span>}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
