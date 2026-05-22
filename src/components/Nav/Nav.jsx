import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const location = useLocation();
  const isHome   = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) { setScrolled(false); return; }
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const navClass = [
    !isHome ? 'solid' : '',
    isHome && scrolled ? 'scrolled' : '',
  ].filter(Boolean).join(' ');

  return (
    <nav className={navClass}>
      <Link to="/" className="nav-name">[Your Full Name]</Link>
      <ul className="nav-links">
        <li>
          <Link to="/" className={isHome ? 'active' : ''}>Work</Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About me</Link>
        </li>
      </ul>
    </nav>
  );
}
