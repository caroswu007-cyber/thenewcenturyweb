import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Clapperboard, ExternalLink, Film, Radio, Video } from 'lucide-react';
import { LIVESTREAM_REPLAY_PLAYLIST, carouselSlides } from '../../content/achievements2025Content';
import { useI18n } from '../../i18n/LocaleProvider';

const AUTO_MS = 4000;

/** Carousel — cosmic / dark glass panel for our-achievements */
const LivestreamCarousel = () => {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const next = useCallback(() => setIndex(i => (i + 1) % carouselSlides.length), []);
  const prev = useCallback(
    () => setIndex(i => (i - 1 + carouselSlides.length) % carouselSlides.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(next, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (dx > 50) prev();
    else if (dx < -50) next();
  };

  return (
    <div
      className="rounded-xl border-2 border-cyan-400/25 bg-slate-950/60 backdrop-blur-md p-5 md:p-6 relative overflow-hidden shadow-[0_0_60px_rgba(14,165,233,0.08),inset_0_1px_0_rgba(255,255,255,0.06)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute top-3 right-4 flex gap-2 text-cyan-500/25" aria-hidden>
        <Film className="w-7 h-7" />
        <Video className="w-6 h-6" />
        <Radio className="w-6 h-6" />
        <Clapperboard className="w-7 h-7" />
      </div>
      <div className="relative z-[1] flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 mb-5">
        <a
          href={LIVESTREAM_REPLAY_PLAYLIST}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 font-ui text-sm font-semibold uppercase tracking-widest px-5 py-2.5 rounded-md border border-black/20 text-white bg-[#c00] hover:bg-[#a00] transition-colors shadow-[0_4px_24px_rgba(220,38,38,0.35)] w-full sm:w-auto"
        >
          <ExternalLink className="w-4 h-4" aria-hidden />
          {t('achievementsPage.replayPlaylist')}
        </a>
      </div>

      <div
        className="relative z-[1] rounded-lg overflow-hidden border border-cyan-500/20 shadow-[0_12px_40px_rgba(0,0,0,0.45)] bg-slate-900/80"
        style={{ touchAction: 'pan-y' }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative aspect-[16/9] bg-slate-950">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <img
                src={carouselSlides[index].src}
                alt={carouselSlides[index].alt}
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-cyan-400/15" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-2 overflow-x-auto px-3 py-3 bg-slate-950/90 border-t border-cyan-500/20">
          {carouselSlides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              className={`shrink-0 w-[4.5rem] h-12 rounded-md overflow-hidden ring-2 transition-all ${
                i === index ? 'ring-sky-400 scale-[1.02] shadow-[0_0_20px_rgba(56,189,248,0.35)]' : 'ring-transparent opacity-70 hover:opacity-100'
              }`}
              aria-label={`Show slide ${i + 1}`}
            >
              <img src={slide.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LivestreamCarousel;
