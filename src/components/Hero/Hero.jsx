import { motion } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas.jsx';
import './Hero.css';

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 20 },
  animate:   { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
});

export default function Hero() {
  return (
    <section className="hero">
      <ParticleCanvas />
      <div className="hero-glow" />
      <div className="hero-arc" />
      <div className="hero-arc-2" />

      <div className="hero-content">
        <motion.p className="hero-eyebrow" {...fadeUp(0.1)}>
          Lead UX Designer · 13+ years
        </motion.p>

        <motion.h1 className="hero-heading" {...fadeUp(0.2)}>
          Turning complex<br />
          systems into <em>experiences</em><br />
          people understand.
        </motion.h1>

        <motion.p className="hero-sub" {...fadeUp(0.35)}>
          Research-led design for high-stakes domains — finance, banking, pharma, and insurance.
          Where clarity isn't optional.
        </motion.p>

        <motion.div className="hero-tagline" {...fadeUp(0.5)}>
          <div className="hero-tagline-line" />
          <p>
            13 years of working where the problems are hardest.{' '}
            <span>Research shapes every decision.</span>{' '}
            The user's reality is always the starting point.
          </p>
        </motion.div>

        <motion.div className="hero-scroll-hint" {...fadeUp(0.8)}>
          <span>Selected work</span>
          <div className="scroll-line" />
        </motion.div>
      </div>
    </section>
  );
}
