import { useRef } from 'react';
import CardFlareCanvas from './CardFlareCanvas.jsx';
import './ProjectCard.css';

export default function ProjectCard({ project, onOpen, dimmed }) {
  const wrapRef = useRef(null);

  return (
    <div
      className="card-flare-wrap"
      ref={wrapRef}
      style={{
        opacity: dimmed ? 0.18 : 1,
        pointerEvents: dimmed ? 'none' : 'all',
        transition: 'opacity 0.3s ease',
      }}
      onClick={onOpen}
    >
      <canvas className="card-flare-canvas" />
      <CardFlareCanvas wrapRef={wrapRef} color={project.accentColor} />

      <div className="card">
        <div className="card-image" style={{ background: project.cardBg }}>
          <div className="ph-icon" style={{ background: project.iconBg }}>
            <ProjectIcon id={project.id} color={project.accentColor} />
          </div>
          <span className="ph-label" style={{ color: project.iconLabelColor }}>
            Add card-thumbnail.png
          </span>
          <span className="card-tag-overlay">{project.cardTagOverlay}</span>
        </div>

        <div className="card-body">
          <h2 className="card-title">{project.title}</h2>
          <p className="card-desc">{project.desc}</p>
          <div className="card-footer">
            <div className="card-meta">
              <span className="card-role">{project.role}</span>
              <span className="card-period">{project.period}</span>
            </div>
            <div className="card-actions">
              <span className="card-lock-badge">
                <span className="lock-dot" />Protected
              </span>
              <div className="card-arrow">
                <svg className="arrow-svg" width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="1.5">
                  <path d="M2 10L10 2M10 2H4M10 2v6"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectIcon({ id, color }) {
  switch (id) {
    case 'banking1':
      return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="12" y2="15"/></svg>;
    case 'banking2':
      return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>;
    case 'audit':
      return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="12" y2="16"/></svg>;
    case 'nocode':
      return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
    case 'mes':
      return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
    default:
      return null;
  }
}
