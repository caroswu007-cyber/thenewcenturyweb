import React, { useEffect, useRef } from 'react';

/**
 * Subtle “reading room” motion: drifting dust, slow shelf lines, lamp shimmer — analogous role to homepage GalaxyBackground.
 */

const DUST_COUNT = 95;
const SHELF_COUNT = 14;

interface Mote {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  a: number;
  o: number;
}

const LibraryAmbientBackground: React.FC<{ className?: string }> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let t = 0;
    let motes: Mote[] = [];
    let cssW = 0;
    let cssH = 0;

    const initMotes = (w: number, h: number) => {
      motes = Array.from({ length: DUST_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.35,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.12,
        a: Math.random() * Math.PI * 2,
        o: Math.random() * 0.5 + 0.18,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      cssW = canvas.offsetWidth;
      cssH = canvas.offsetHeight;
      canvas.width = Math.max(1, Math.floor(cssW * dpr));
      canvas.height = Math.max(1, Math.floor(cssH * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initMotes(cssW, cssH);
    };

    const drawShelves = (w: number, h: number) => {
      const phase = t * 0.00012;
      const gap = h / SHELF_COUNT;
      for (let i = 0; i <= SHELF_COUNT; i++) {
        const y = i * gap + Math.sin(i * 0.35 + phase) * 3;
        const alpha = 0.085 + (i / SHELF_COUNT) * 0.085;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(215, 180, 125, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.moveTo(w * 0.06, y);
        ctx.lineTo(w * 0.94, y);
        ctx.stroke();
      }
    };

    const drawLampGlow = (w: number, h: number) => {
      const cx = w * 0.5;
      const cy = h * 0.22;
      const pulse = 0.85 + Math.sin(t * 0.002) * 0.12;
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(w, h) * 0.38);
      g.addColorStop(0, `rgba(255, 228, 175, ${0.125 * pulse})`);
      g.addColorStop(0.45, 'rgba(140, 100, 55, 0.055)');
      g.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    };

    const drawSpines = (w: number, h: number) => {
      const n = 28;
      const drift = t * 0.02;
      for (let i = 0; i < n; i++) {
        const x = (w * 0.12 + ((i * 977) % (w * 0.76))) % (w * 0.88);
        const bh = 18 + (i % 5) * 7;
        const y = h * 0.35 + (i * 41) % (h * 0.5);
        ctx.fillStyle = `rgba(52, 42, 30, ${0.11 + (i % 3) * 0.028})`;
        ctx.fillRect(x + Math.sin(drift + i) * 2, y, 2.2 + (i % 4) * 0.5, bh);
      }
    };

    const tick = () => {
      const w = cssW;
      const h = cssH;
      t += 1;
      ctx.clearRect(0, 0, w, h);

      drawLampGlow(w, h);
      drawShelves(w, h);
      drawSpines(w, h);

      for (const m of motes) {
        m.x += m.vx + Math.sin(t * 0.003 + m.a) * 0.08;
        m.y += m.vy + Math.cos(t * 0.0025 + m.a) * 0.05;
        m.o += (Math.random() - 0.5) * 0.008;
        m.o = Math.max(0.08, Math.min(0.65, m.o));
        if (m.x < -4) m.x = w + 4;
        if (m.x > w + 4) m.x = -4;
        if (m.y < -4) m.y = h + 4;
        if (m.y > h + 4) m.y = -4;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 240, 220, ${m.o})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('resize', resize);
    resize();
    tick();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className ?? ''}`}
    />
  );
};

export default LibraryAmbientBackground;
