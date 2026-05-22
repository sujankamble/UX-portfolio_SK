import { createContext, useContext, useState, useCallback } from 'react';

const PasswordContext = createContext(null);

const PASSWORD = 'portfolio2025';

export function PasswordProvider({ children }) {
  const [unlocked, setUnlocked] = useState(() => {
    try {
      const saved = sessionStorage.getItem('portfolio_unlocked');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const attempt = useCallback((input) => {
    if (input === PASSWORD) {
      return true;
    }
    return false;
  }, []);

  const unlock = useCallback((slug) => {
    setUnlocked((prev) => {
      if (prev.includes(slug)) return prev;
      const next = [...prev, slug];
      try { sessionStorage.setItem('portfolio_unlocked', JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const isUnlocked = useCallback((slug) => unlocked.includes(slug), [unlocked]);

  return (
    <PasswordContext.Provider value={{ attempt, unlock, isUnlocked }}>
      {children}
    </PasswordContext.Provider>
  );
}

export function usePassword() {
  return useContext(PasswordContext);
}
