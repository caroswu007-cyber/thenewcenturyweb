import React, { useEffect, useRef } from 'react';

/** Cool spiral: deep sky / indigo nebula — pairs with dark achievement shells. */
const ROTATION_SPEED = 0.00022;
const ARM_COUNT = 4;
const CENTER_X_RATIO = 0.5;
const CENTER_Y_RATIO = 0.3;
const CORE_RADIUS = 56;

interface Particle {
  angle: number;
  radius: number;
  size: number;
  opacity: number;
  opacityDelta: number;
  hue: number;
}

const CosmicGalaxyCanvas: React.FC<{ className?: string }> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId = 0;
    let rotation = 0;
    let particles: Particle[] = [];
    let cssW = 0;
    let cssH = 0;

    const reduceMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const getCounts = () => {
      const narrow = cssW < 768;
      if (reduceMotion) return { starCount: 0, coreExtra: 0 };
      const starCount = narrow ? 100 : 200;
      const coreExtra = narrow ? 40 : 70;
      return { starCount, coreExtra };
    };

    const buildParticles = (w: number, h: number) => {
      const { starCount, coreExtra } = getCounts();
      const maxR = Math.min(w, h) * 0.5;
      particles = [];
      if (starCount === 0) return;

      for (let arm = 0; arm < ARM_COUNT; arm++) {
        const armOffset = (Math.PI * 2 * arm) / ARM_COUNT;
        for (let i = 0; i < starCount; i++) {
          const t = i / starCount;
          const radius = 14 + t * maxR;
          const spread = (Math.random() - 0.5) * 0.58 * (1 + t);
          const angle = armOffset + t * Math.PI * 3.55 + spread;
          const hue = 188 + t * 62 + (Math.random() - 0.5) * 26;
          particles.push({
            angle,
            radius,
            size: Math.random() * 2.15 + 0.42,
            opacity: Math.random() * 0.42 + 0.52,
            opacityDelta: (Math.random() - 0.5) * 0.011,
            hue,
          });
        }
      }
      for (let i = 0; i < coreExtra; i++) {
        const radius = Math.random() * CORE_RADIUS * 0.95;
        const angle = Math.random() * Math.PI * 2;
        particles.push({
          angle,
          radius,
          size: Math.random() * 2.4 + 0.5,
          opacity: Math.random() * 0.32 + 0.62,
          opacityDelta: (Math.random() - 0.5) * 0.018,
          hue: 200 + Math.random() * 45,
        });
      }
    };

    const drawCore = (cx: number, cy: number) => {
      const haze = ctx.createRadialGradient(cx, cy, 0, cx, cy, CORE_RADIUS * 4.2);
      haze.addColorStop(0, 'rgba(186, 230, 253, 0.28)');
      haze.addColorStop(0.28, 'rgba(96, 165, 250, 0.14)');
      haze.addColorStop(0.55, 'rgba(79, 70, 229, 0.08)');
      haze.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = haze;
      ctx.beginPath();
      ctx.arc(cx, cy, CORE_RADIUS * 4.2, 0, Math.PI * 2);
      ctx.fill();

      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, CORE_RADIUS * 1.08);
      glow.addColorStop(0, 'rgba(240, 249, 255, 0.92)');
      glow.addColorStop(0.22, 'rgba(125, 211, 252, 0.55)');
      glow.addColorStop(0.5, 'rgba(59, 130, 246, 0.2)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, CORE_RADIUS * 1.08, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, 2.8, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.98)';
      ctx.fill();
    };

    const drawFrame = () => {
      const w = cssW;
      const h = cssH;
      ctx.clearRect(0, 0, w, h);

      rotation += ROTATION_SPEED;
      const cx = w * CENTER_X_RATIO;
      const cy = h * CENTER_Y_RATIO;

      for (const p of particles) {
        const a = p.angle + rotation;
        const x = cx + Math.cos(a) * p.radius;
        const y = cy + Math.sin(a) * p.radius * 0.44;

        p.opacity += p.opacityDelta;
        if (p.opacity > 1) {
          p.opacity = 1;
          p.opacityDelta *= -1;
        }
        if (p.opacity < 0.12) {
          p.opacity = 0.12;
          p.opacityDelta *= -1;
        }

        const light = Math.min(1, p.opacity * 1.06);
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 62%, 76%, ${light})`;
        ctx.fill();
      }

      drawCore(cx, cy);
    };

    const resize = () => {
      const rawDpr = window.devicePixelRatio || 1;
      const narrow = canvas.offsetWidth < 768;
      const dpr = Math.min(rawDpr, narrow ? 1.25 : 1.65);
      cssW = canvas.offsetWidth;
      cssH = canvas.offsetHeight;
      canvas.width = Math.max(1, Math.floor(cssW * dpr));
      canvas.height = Math.max(1, Math.floor(cssH * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles(cssW, cssH);

      if (reduceMotion || particles.length === 0) {
        rotation = 0;
        drawFrame();
      }
    };

    const tick = () => {
      if (document.hidden) {
        animationFrameId = 0;
        return;
      }
      drawFrame();
      animationFrameId = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (reduceMotion || particles.length === 0 || document.hidden) return;
      if (animationFrameId !== 0) return;
      animationFrameId = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      } else {
        startLoop();
      }
    };

    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);
    resize();
    startLoop();

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className ?? ''}`}
    />
  );
};

export default CosmicGalaxyCanvas;
