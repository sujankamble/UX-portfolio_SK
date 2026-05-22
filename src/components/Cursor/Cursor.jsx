import { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const rafRef  = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      dot.style.transform = `translate(${e.clientX - 4}px,${e.clientY - 4}px)`;
    };

    const tick = () => {
      const p = pos.current;
      p.rx += (p.mx - p.rx - 15) * 0.1;
      p.ry += (p.my - p.ry - 15) * 0.1;
      ring.style.transform = `translate(${p.rx}px,${p.ry}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const onOver = (e) => {
      if (e.target.closest('a, button, .card-flare-wrap, .filter-btn, .cs-pag-btn, .git-link, .git-resume')) {
        ring.classList.add('hovering');
      }
    };
    const onOut = (e) => {
      if (e.target.closest('a, button, .card-flare-wrap, .filter-btn, .cs-pag-btn, .git-link, .git-resume')) {
        ring.classList.remove('hovering');
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover',  onOver);
    document.addEventListener('mouseout',   onOut);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover',  onOver);
      document.removeEventListener('mouseout',   onOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div className="cursor"      ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
