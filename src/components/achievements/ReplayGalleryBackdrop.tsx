import { useCallback, useEffect, useMemo, useState } from 'react';
import { carouselSlides, compressUnsplash } from '../../content/achievements2025Content';

const AUTO_MS = 8000;

/**
 * Hero backdrop — lightweight: small Unsplash width, long interval, no Framer overhead.
 * Pauses when tab hidden; static first slide when prefers-reduced-motion.
 */
export function ReplayGalleryBackdrop() {
  const slides = useMemo(
    () => carouselSlides.map(s => ({ ...s, src: compressUnsplash(s.src, 960, 70) })),
    [],
  );
  const [index, setIndex] = useState(0);
  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const next = useCallback(() => {
    setIndex(i => (i + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const first = new Image();
    first.src = slides[0].src;
  }, [slides]);

  useEffect(() => {
    const upcoming = slides[(index + 1) % slides.length];
    const preload = new Image();
    preload.src = upcoming.src;
  }, [index, slides]);

  useEffect(() => {
    if (reduceMotion) return;
    let id: ReturnType<typeof setInterval> | undefined;
    const arm = () => {
      if (id !== undefined) clearInterval(id);
      if (document.hidden) return;
      id = setInterval(next, AUTO_MS);
    };
    arm();
    const onVis = () => {
      if (document.hidden) {
        if (id !== undefined) clearInterval(id);
        id = undefined;
      } else arm();
    };
    document.addEventListener('visibilitychange', onVis);
    return () => {
      document.removeEventListener('visibilitychange', onVis);
      if (id !== undefined) clearInterval(id);
    };
  }, [next, reduceMotion]);

  const src = slides[reduceMotion ? 0 : index].src;

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <img
        src={src}
        alt=""
        sizes="100vw"
        decoding="async"
        className="h-full w-full object-cover scale-[1.05]"
        style={{
          filter: 'blur(6px) saturate(1.04) brightness(0.45)',
        }}
        draggable={false}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(165deg, rgba(6, 8, 18, 0.55) 0%, rgba(18, 12, 10, 0.4) 42%, rgba(15, 23, 42, 0.7) 100%),
            radial-gradient(ellipse 90% 70% at 50% 18%, rgba(201, 168, 76, 0.14), transparent 55%),
            radial-gradient(ellipse 75% 50% at 85% 75%, rgba(56, 189, 248, 0.08), transparent 48%)
          `,
        }}
      />
      <div
        className="absolute inset-0 mix-blend-soft-light opacity-[0.28] md:opacity-[0.32]"
        style={{
          background: 'radial-gradient(circle at 28% 38%, rgba(251, 191, 36, 0.12), transparent 50%)',
        }}
      />
    </div>
  );
}
