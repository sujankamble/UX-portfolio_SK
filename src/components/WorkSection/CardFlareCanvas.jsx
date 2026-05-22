import { useEffect, useRef } from 'react';

function hexToRgba(hex, alpha) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  const r = parseInt(hex.substr(0,2), 16);
  const g = parseInt(hex.substr(2,2), 16);
  const b = parseInt(hex.substr(4,2), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function getPosOnRect(pos, x1, y1, x2, y2) {
  const w = x2 - x1, h = y2 - y1;
  const top = w, right = w + h, bottom = w + h + w;
  if (pos < top)    return { x: x1 + pos,          y: y1 };
  if (pos < right)  return { x: x2,                y: y1 + (pos - top) };
  if (pos < bottom) return { x: x2 - (pos - right), y: y2 };
  return { x: x1, y: y2 - (pos - bottom) };
}

export default function CardFlareCanvas({ wrapRef, color }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = wrapRef.current?.querySelector('.card-flare-canvas');
    if (!canvas) return;
    const ctx   = canvas.getContext('2d');
    let angle   = 0;
    let rafId   = null;

    function resize() {
      canvas.width  = (wrapRef.current?.offsetWidth  || 360) + 4;
      canvas.height = (wrapRef.current?.offsetHeight || 360) + 4;
    }

    function draw() {
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const perimeter = 2 * (w + h);
      const spotPos   = ((angle / (Math.PI * 2)) % 1) * perimeter;

      for (let i = 0; i < 3; i++) {
        const pos = (spotPos + (i * perimeter / 3)) % perimeter;
        const { x, y } = getPosOnRect(pos, 2, 2, w - 4, h - 4);
        const alpha = i === 0 ? 0.9 : 0.4;
        const grad  = ctx.createRadialGradient(x, y, 0, x, y, 60);
        grad.addColorStop(0,   hexToRgba(color, alpha));
        grad.addColorStop(0.3, hexToRgba(color, alpha * 0.5));
        grad.addColorStop(1,   'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      const borderPath = new Path2D();
      borderPath.roundRect(2, 2, w - 4, h - 4, 14);
      ctx.globalCompositeOperation = 'destination-in';
      ctx.lineWidth   = 3;
      ctx.strokeStyle = 'white';
      ctx.stroke(borderPath);
      ctx.globalCompositeOperation = 'source-over';

      angle += 0.025;
      rafId = requestAnimationFrame(draw);
    }

    const wrap = wrapRef.current;
    const start = () => { resize(); draw(); };
    const stop  = () => {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const onResize = resize;
    wrap?.addEventListener('mouseenter', start);
    wrap?.addEventListener('mouseleave', stop);
    window.addEventListener('resize', onResize);

    return () => {
      stop();
      wrap?.removeEventListener('mouseenter', start);
      wrap?.removeEventListener('mouseleave', stop);
      window.removeEventListener('resize', onResize);
    };
  }, [wrapRef, color]);

  return null;
}
