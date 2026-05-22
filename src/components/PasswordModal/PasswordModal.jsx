import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePassword } from '../../context/PasswordContext.jsx';
import './PasswordModal.css';

export default function PasswordModal({ isOpen, onClose, onSuccess }) {
  const [value, setValue] = useState('');
  const [hasError, setHasError] = useState(false);
  const inputRef = useRef(null);
  const { attempt } = usePassword();

  useEffect(() => {
    if (isOpen) {
      setValue('');
      setHasError(false);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  const submit = () => {
    if (attempt(value)) {
      onSuccess();
    } else {
      setHasError(true);
      setValue('');
      inputRef.current?.focus();
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') submit();
    if (e.key === 'Escape') onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            className="modal"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25 }}
          >
            <button className="modal-close" onClick={onClose}>✕</button>
            <div className="modal-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h2 className="modal-title">Protected work</h2>
            <p className="modal-sub">This case study contains confidential client work. Enter the password to continue.</p>
            <input
              ref={inputRef}
              className={`modal-input${hasError ? ' error' : ''}`}
              type="password"
              placeholder="Enter password"
              value={value}
              onChange={(e) => { setValue(e.target.value); setHasError(false); }}
              onKeyDown={handleKey}
            />
            <p className={`modal-error${hasError ? ' show' : ''}`}>
              Incorrect password — please try again.
            </p>
            <button className="modal-btn" onClick={submit}>View case study →</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
