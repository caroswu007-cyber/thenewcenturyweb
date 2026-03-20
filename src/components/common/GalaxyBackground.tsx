import React, { useEffect, useRef } from 'react';

/**
 * GalaxyBackground — Canvas-based spiral galaxy center animation.
 *
 * Visual design:
 *   - Bright golden/white glowing core at center
 *   - Stars distributed across 4 spiral arms, slowly rotating
 *   - Outer nebula haze in deep blue-purple tones
 *   - Full "new century" cosmic aesthetic
 *
 * Tuning:
 *   - `ROTATION_SPEED`  : radians per frame (default 0.0003 ≈ 1 full turn / ~35s)
 *   - `STAR_COUNT`      : total particles per spiral arm
 *   - `CORE_RADIUS`     : px radius of the bright core glow
 */

const ROTATION_SPEED = 0.0003;
const STAR_COUNT = 320;
const CORE_RADIUS = 60;
const ARM_COUNT = 4;

interface Particle {
  angle: number;       // current angle (radians)
  radius: number;      // distance from center
  size: number;
  opacity: number;
  opacityDelta: number;
  hue: number;         // 40–260 (gold → blue-purple)
}

const GalaxyBackground: React.FC<{ className?: string }> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;
    let particles: Particle[] = [];

    const buildParticles = (w: number, h: number) => {
      const maxR = Math.min(w, h) * 0.46;
      particles = [];
      for (let arm = 0; arm < ARM_COUNT; arm++) {
        const armOffset = (Math.PI * 2 * arm) / ARM_COUNT;
        for (let i = 0; i < STAR_COUNT; i++) {
          const t = i / STAR_COUNT;                   // 0 → 1
          const radius = 18 + t * maxR;
          const spread = (Math.random() - 0.5) * 0.55 * (1 + t);
          const angle = armOffset + t * Math.PI * 3.5 + spread;
          // gold near core, blue-purple at edges
          const hue = 45 + t * 215 + (Math.random() - 0.5) * 30;
          particles.push({
            angle,
            radius,
            size: Math.random() * 1.8 + 0.4,
            opacity: Math.random() * 0.7 + 0.3,
            opacityDelta: (Math.random() - 0.5) * 0.012,
            hue,
          });
        }
      }
      // Extra dense core dust
      for (let i = 0; i < 120; i++) {
        const radius = Math.random() * CORE_RADIUS * 0.9;
        const angle = Math.random() * Math.PI * 2;
        particles.push({
          angle, radius,
          size: Math.random() * 2.5 + 0.5,
          opacity: Math.random() * 0.9 + 0.1,
          opacityDelta: (Math.random() - 0.5) * 0.02,
          hue: 40 + Math.random() * 40,
        });
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      buildParticles(canvas.width, canvas.height);
    };

    const drawCore = (cx: number, cy: number) => {
      // Outermost soft haze
      const haze = ctx.createRadialGradient(cx, cy, 0, cx, cy, CORE_RADIUS * 3.5);
      haze.addColorStop(0, 'rgba(255, 220, 100, 0.18)');
      haze.addColorStop(0.4, 'rgba(160, 100, 255, 0.08)');
      haze.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = haze;
      ctx.beginPath();
      ctx.arc(cx, cy, CORE_RADIUS * 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Inner glow
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, CORE_RADIUS);
      glow.addColorStop(0, 'rgba(255, 255, 220, 0.95)');
      glow.addColorStop(0.2, 'rgba(255, 210, 80, 0.7)');
      glow.addColorStop(0.55, 'rgba(180, 120, 255, 0.25)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, CORE_RADIUS, 0, Math.PI * 2);
      ctx.fill();

      // Bright pinpoint
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.98)';
      ctx.fill();
    };

    const animate = () => {
      const { width: w, height: h } = canvas;
      ctx.clearRect(0, 0, w, h);

      rotation += ROTATION_SPEED;
      const cx = w / 2;
      const cy = h / 2;

      // Draw particles
      for (const p of particles) {
        const a = p.angle + rotation;
        const x = cx + Math.cos(a) * p.radius;
        const y = cy + Math.sin(a) * p.radius * 0.42; // flatten to ellipse (galaxy tilt)

        p.opacity += p.opacityDelta;
        if (p.opacity > 1) { p.opacity = 1; p.opacityDelta *= -1; }
        if (p.opacity < 0.1) { p.opacity = 0.1; p.opacityDelta *= -1; }

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 80%, ${p.opacity})`;
        ctx.fill();
      }

      drawCore(cx, cy);

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
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

export default GalaxyBackground;
