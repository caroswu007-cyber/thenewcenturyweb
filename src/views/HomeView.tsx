import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import TruthSection from '../components/home/TruthSection';
import Achievements from '../components/home/Achievements';
import JoinSection from '../components/home/JoinSection';
import SectionDivider from '../components/common/SectionDivider';
import GalaxyBackground from '../components/common/GalaxyBackground';
import { useI18n } from '../i18n/LocaleProvider';

/** Same plate as `body` in index.css — feathered over rotating galaxy so purple zone merges, not a hard line */
const NEBULA_BG =
  'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1920&q=80';

const HomeView = () => {
  const { t } = useI18n();
  return (
    <div className="relative">
      {/* Hero + Introduction: one column so galaxy + nebula fill the full scroll height */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div className="absolute inset-0 bg-[#010105]" />
          <GalaxyBackground />
          {/* Violet wash — builds toward lower intro (over galaxy) */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                180deg,
                rgba(0,0,0,0) 0%,
                rgba(0,0,0,0.06) 18%,
                rgba(18,8,35,0.16) 40%,
                rgba(40,12,62,0.34) 62%,
                rgba(48,16,72,0.44) 82%,
                rgba(38,12,58,0.5) 100%
              )`,
            }}
          />
          {/* Nebula photo: invisible at top, blends in mid → bottom (merged with page starfield look) */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${NEBULA_BG})`,
              opacity: 0.5,
              mixBlendMode: 'screen',
              maskImage:
                'linear-gradient(to bottom, transparent 0%, transparent 32%, rgba(0,0,0,0.35) 52%, rgba(0,0,0,0.85) 78%, black 100%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent 0%, transparent 32%, rgba(0,0,0,0.35) 52%, rgba(0,0,0,0.85) 78%, black 100%)',
            }}
          />
          {/* Readability scaffold */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                180deg,
                rgba(0,0,0,0.28) 0%,
                rgba(0,0,0,0.08) 28%,
                transparent 45%,
                transparent 58%,
                rgba(6,2,12,0.22) 100%
              )`,
            }}
          />
        </div>

        <div className="relative z-10">
          <Hero />
          <Introduction />
        </div>
      </div>

      <SectionDivider label={t('home.divider.documentary')} compact />
      <TruthSection />
      <SectionDivider label={t('home.divider.discoveries')} />
      <Achievements />
      <SectionDivider label={t('home.divider.join')} />
      <JoinSection />
    </div>
  );
};

export default HomeView;
