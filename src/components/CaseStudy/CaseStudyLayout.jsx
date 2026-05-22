import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePassword } from '../../context/PasswordContext.jsx';
import CaseStudyHero from './CaseStudyHero.jsx';
import Chapter from './Chapter.jsx';
import Sidenav from './Sidenav.jsx';
import Pagination from './Pagination.jsx';
import PasswordModal from '../PasswordModal/PasswordModal.jsx';
import { useState } from 'react';
import './Sidenav.css';

export default function CaseStudyLayout({ data }) {
  const { isUnlocked, unlock } = usePassword();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(!isUnlocked(data.slug));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data.slug]);

  const handleSuccess = () => {
    unlock(data.slug);
    setModalOpen(false);
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <>
      <PasswordModal
        isOpen={modalOpen}
        onClose={handleClose}
        onSuccess={handleSuccess}
      />

      {isUnlocked(data.slug) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <CaseStudyHero data={data} />

          <div className="cs-layout">
            <div className="cs-content">
              {data.chapters.map(chapter => (
                <Chapter
                  key={chapter.id}
                  chapter={chapter}
                  accentColor={data.accentColor}
                  accentColorRgb={data.accentColorRgb}
                />
              ))}
              <Pagination
                prev={data.pagination.prev}
                next={data.pagination.next}
              />
            </div>
            <Sidenav
              chapters={data.chapters}
              accentColor={data.accentColor}
              caseSlug={data.slug}
            />
          </div>
        </motion.div>
      )}
    </>
  );
}
