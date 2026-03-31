import { motion } from 'framer-motion';
import { useLocalizedSiteContent } from '../../content/useLocalizedSiteContent';

const gatherEase = [0.16, 1, 0.3, 1] as const;

/** Hero text only — editorial warm style, no dark galaxy */
const Hero = () => {
  const { home } = useLocalizedSiteContent();
  const { heroTitle, heroSubtitle } = home;

  return (
    <section
      id="home"
      className="relative z-10 min-h-[100svh] md:h-screen flex items-center justify-center text-center px-6 sm:px-8 overflow-hidden scroll-mt-24 md:scroll-mt-28"
      style={{ background: 'transparent' }}
    >
      {/* Subtle gradient feather to bottom */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48 md:h-64"
        style={{
          background:
            'linear-gradient(to top, rgba(245,237,224,0.95) 0%, rgba(245,237,224,0.55) 35%, rgba(245,237,224,0.18) 65%, transparent 100%)',
        }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.3, ease: gatherEase }}
        className="relative z-10 flex flex-col items-center gap-6 sm:gap-7 px-2"
      >
        {/* Decorative top amber rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.6, ease: gatherEase }}
          className="w-16 sm:w-20 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(194,123,32,0.6), transparent)' }}
        />

        {/* Subtitle eyebrow */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.8em', y: 8 }}
          animate={{ opacity: 1, letterSpacing: '0.3em', y: 0 }}
          transition={{ duration: 1.4, delay: 0.55, ease: gatherEase }}
          className="font-cinzel text-xs sm:text-sm md:text-base uppercase tracking-[0.3em]"
          style={{ color: 'rgba(194,123,32,0.8)' }}
        >
          {heroSubtitle}
        </motion.p>

        {/* Main title — Cormorant Garamond editorial treatment */}
        <motion.h1
          className="cosmic-title font-bold leading-tight"
          style={{
            fontSize: 'clamp(2.6rem, 10vw, 5.75rem)',
            lineHeight: 1.1,
            willChange: 'transform, opacity, filter',
          }}
          initial={{
            opacity: 0,
            scale: 0.88,
            letterSpacing: '0.3em',
            filter: 'blur(12px)',
            y: 16,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            letterSpacing: '0.035em',
            filter: 'blur(0px)',
            y: 0,
          }}
          transition={{
            duration: 2.6,
            delay: 0.1,
            ease: gatherEase,
          }}
        >
          {heroTitle}
        </motion.h1>

        {/* Decorative bottom rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.9, ease: gatherEase }}
          className="w-24 sm:w-32 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(194,123,32,0.4), transparent)' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
