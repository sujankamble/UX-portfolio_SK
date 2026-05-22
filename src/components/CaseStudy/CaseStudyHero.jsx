import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CaseStudyHero.css';

export default function CaseStudyHero({ data }) {
  const { hero, intro, accentColor, accentColorRgb } = data;

  return (
    <>
      <motion.div
        className="cs-hero"
        style={{ '--c': accentColor, '--cr': accentColorRgb }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="cs-hero-glow" />
        <div className="cs-hero-bar" />

        <div className="cs-hero-content">
          <Link to="/" className="cs-back">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="9 2 4 7 9 12"/>
            </svg>
            All work
          </Link>

          <span className="cs-hero-tag">{hero.tag}</span>
          <h1 className="cs-hero-title">{hero.title}</h1>
          <p className="cs-hero-subtitle">{hero.subtitle}</p>
          <p className="cs-hero-spine">{hero.spine}</p>

          <div className="cs-hero-meta">
            {hero.meta.map(m => (
              <div key={m.key} className="cs-meta-pill">
                <span className="cs-meta-k">{m.key}</span>
                <span className="cs-meta-v">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="cs-hero-intro">
        <p>{intro}</p>
      </div>
    </>
  );
}
