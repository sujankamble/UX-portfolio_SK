import { useEffect, useState } from 'react';
import './Sidenav.css';

export default function Sidenav({ chapters, accentColor, caseSlug }) {
  const [activeId, setActiveId] = useState(chapters[0]?.id || '');

  useEffect(() => {
    const sections = chapters
      .map(c => document.getElementById(c.id))
      .filter(Boolean);

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -60% 0px' }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, [chapters, caseSlug]);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <aside className="cs-sidenav" style={{ '--c': accentColor }}>
      <p className="cs-sidenav-label">Chapters</p>
      <div className="cs-sidenav-links">
        {chapters.map(c => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className={`cs-sidenav-link${activeId === c.id ? ' active' : ''}`}
            onClick={(e) => scrollTo(e, c.id)}
          >
            {c.title}
          </a>
        ))}
      </div>
    </aside>
  );
}
