import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePassword } from '../../context/PasswordContext.jsx';
import ProjectCard from './ProjectCard.jsx';
import PasswordModal from '../PasswordModal/PasswordModal.jsx';
import { projects } from '../../data/projects.js';
import './WorkSection.css';

const FILTERS = [
  { label: 'All',                  value: 'all' },
  { label: 'Research & Strategy',  value: 'research' },
  { label: 'Product & App Design', value: 'product' },
  { label: 'Service Design',       value: 'service' },
];

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalOpen,    setModalOpen]    = useState(false);
  const [pendingId,    setPendingId]    = useState(null);
  const navigate = useNavigate();
  const { unlock, isUnlocked } = usePassword();

  const handleCardClick = (project) => {
    if (isUnlocked(project.id)) {
      navigate(project.path);
    } else {
      setPendingId(project.id);
      setModalOpen(true);
    }
  };

  const handleSuccess = () => {
    if (pendingId) {
      unlock(pendingId);
      setModalOpen(false);
      const p = projects.find(p => p.id === pendingId);
      if (p) navigate(p.path);
    }
  };

  return (
    <section className="work-section" id="work">
      <div className="work-header">
        <span className="work-label">Case studies — {projects.length} projects</span>
        <div className="filter-bar">
          {FILTERS.map(f => (
            <button
              key={f.value}
              className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="cards-grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.07 }}
            style={{ display: 'contents' }}
          >
            <ProjectCard
              project={project}
              onOpen={() => handleCardClick(project)}
              dimmed={activeFilter !== 'all' && project.category !== activeFilter}
            />
          </motion.div>
        ))}
      </div>

      <PasswordModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={handleSuccess}
      />
    </section>
  );
}
