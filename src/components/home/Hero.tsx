import { motion } from 'framer-motion';
import { useLocalizedSiteContent } from '../../content/useLocalizedSiteContent';
import { useI18n } from '../../i18n/LocaleProvider';

const gatherEase = [0.16, 1, 0.3, 1] as const;

/** Hero text & CTAs only — shared galaxy lives in HomeView so it can extend into Introduction. */
const Hero = () => {
  const { home } = useLocalizedSiteContent();
  const { heroTitle, heroSubtitle, heroCta } = home;
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="relative z-10 min-h-[92vh] md:h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-transparent"
    >
      {/* Light readability veils — keep canvas galaxy visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 88% 72% at 50% 40%, rgba(15,23,42,0.22) 0%, transparent 58%), radial-gradient(ellipse 120% 70% at 50% 92%, rgba(5,8,15,0.55) 0%, transparent 52%)',
        }}
      />

      <div className="absolute inset-0 bg-slate-900/22 pointer-events-none" aria-hidden />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 md:h-48"
        style={{
          background:
            'linear-gradient(to top, rgba(5,8,15,0.75) 0%, rgba(5,8,15,0.28) 38%, rgba(5,8,15,0.06) 68%, transparent 100%)',
        }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: gatherEase }}
        className="relative z-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: gatherEase }}
          className="font-cinzel text-sm sm:text-base uppercase tracking-[0.4em] mb-5"
          style={{ color: 'rgba(251,191,36,0.7)' }}
        >
          {heroSubtitle}
        </motion.p>

        <motion.h1
          className="font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-amber-200 to-accent mb-3 drop-shadow-2xl"
          style={{
            fontSize: 'clamp(2rem, 6.5vw, 5.75rem)',
            lineHeight: 1.08,
            willChange: 'transform, opacity, letter-spacing, filter',
          }}
          initial={{
            opacity: 0,
            scale: 0.88,
            letterSpacing: '0.42em',
            filter: 'blur(14px)',
          }}
          animate={{
            opacity: 1,
            scale: 1,
            letterSpacing: '0.02em',
            filter: 'blur(0px)',
          }}
          transition={{
            duration: 2.45,
            delay: 0.15,
            ease: gatherEase,
          }}
        >
          {heroTitle}
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 1.55, ease: gatherEase }}
        >
          <a
            href="#introduction"
            className="inline-block font-cinzel font-bold uppercase tracking-widest py-3.5 md:py-4 px-9 md:px-14 rounded-full transition-transform hover:-translate-y-1 shadow-lg text-base md:text-lg"
            style={{
              background: 'linear-gradient(135deg, #92610a, #fbbf24, #d97706)',
              color: '#0f0a00',
              boxShadow: '0 4px 30px rgba(251,191,36,0.35)',
            }}
          >
            {heroCta}
          </a>
          <a
            href="/about"
            className="inline-block font-cinzel font-bold uppercase tracking-widest py-3.5 md:py-4 px-9 md:px-14 rounded-full transition-all hover:-translate-y-1 text-base md:text-lg"
            style={{
              border: '1px solid rgba(251,191,36,0.35)',
              color: '#fbbf24',
              background: 'rgba(251,191,36,0.05)',
            }}
          >
            {t('hero.aboutCta')}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
