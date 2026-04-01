import { useLocalizedSiteContent } from '../../content/useLocalizedSiteContent';
import { useI18n } from '../../i18n/LocaleProvider';
import LibraryAmbientBackground from './LibraryAmbientBackground';

const RecordOfSoulHero = () => {
  const { recordOfSoul } = useLocalizedSiteContent();
  const { title, description, note, episodesCount, minutes, backgroundImage, terminologyExplanation } = recordOfSoul;
  const { t } = useI18n();

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        <div className="absolute inset-0 z-[1] opacity-[0.98]">
          <LibraryAmbientBackground />
        </div>

        <div className="absolute inset-0 z-[2]" style={{ background: 'rgba(75,38,8,0.52)' }} />

        <div
          className="absolute inset-0 z-[2]"
          style={{
            background:
              'radial-gradient(ellipse at 50% 36%, rgba(0,0,0,0) 15%, rgba(45,18,4,0.68) 100%)',
          }}
        />

        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 75% 55% at 50% 38%, rgba(210,155,70,0.32) 0%, rgba(160,100,30,0.12) 48%, transparent 72%)',
          }}
        />

        <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-16" style={{ background: 'rgba(235,195,110,0.78)' }} />
            <span
              className="font-mono text-sm tracking-[0.35em] uppercase"
              style={{ color: '#f0d078' }}
            >
              {t('record.archiveSeries')}
            </span>
            <div className="h-px w-16" style={{ background: 'rgba(235,195,110,0.78)' }} />
          </div>

          <h1
            className="font-serif font-bold tracking-tight leading-none mb-2"
            style={{
              fontSize: 'clamp(2.8rem, 8vw, 6rem)',
              color: '#fffdf6',
              textShadow:
                '0 2px 28px rgba(0,0,0,0.92), 0 4px 90px rgba(250,210,120,0.65), 0 0 120px rgba(255,220,150,0.35)',
            }}
          >
            {title}
          </h1>

          <div className="flex items-center gap-5 my-8 w-full max-w-sm">
            <div
              className="flex-1 h-px"
              style={{ background: 'linear-gradient(to right, transparent, #c4904a)' }}
            />
            <span style={{ color: '#c4904a', fontSize: '0.7rem' }}>✦ ✦ ✦</span>
            <div
              className="flex-1 h-px"
              style={{ background: 'linear-gradient(to left, transparent, #c4904a)' }}
            />
          </div>

          <p
            className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-10 sm:mb-12 font-light tracking-wide px-1"
            style={{ color: '#faf2e4' }}
          >
            {description}
          </p>

          <div
            className="flex items-stretch mb-12"
            style={{ border: '1px solid rgba(240,205,120,0.85)' }}
          >
            <div
              className="px-6 md:px-12 py-5 text-center"
              style={{ borderRight: '1px solid rgba(240,205,120,0.85)' }}
            >
              <p
                className="font-mono font-bold mb-1"
                style={{ fontSize: 'clamp(2rem, 8vw, 2.8rem)', color: '#ffe090', lineHeight: 1 }}
              >
                {episodesCount}
              </p>
              <p
                className="font-mono text-sm uppercase tracking-[0.25em]"
                style={{ color: '#f0e4cc' }}
              >
                {t('common.episodes')}
              </p>
            </div>
            <div className="px-6 md:px-12 py-5 text-center">
              <p
                className="font-mono font-bold mb-1"
                style={{ fontSize: 'clamp(2rem, 8vw, 2.8rem)', color: '#ffe090', lineHeight: 1 }}
              >
                {minutes}
              </p>
              <p
                className="font-mono text-sm uppercase tracking-[0.25em]"
                style={{ color: '#f0e4cc' }}
              >
                {t('common.minutes')}
              </p>
            </div>
          </div>

          <div
            className="max-w-2xl w-full text-left px-5 py-4"
            style={{
              borderLeft: '3px solid rgba(180,120,40,0.85)',
              background: 'rgba(50,25,5,0.72)',
            }}
          >
            <p
              className="font-mono text-sm uppercase tracking-[0.25em] mb-2"
              style={{ color: '#f0c860' }}
            >
              {t('record.archivalNote')}
            </p>
            <p className="text-base leading-relaxed italic" style={{ color: '#f5ead8' }}>
              {note}
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-[3]"
          style={{ background: 'linear-gradient(to top, #E8D5B8, transparent)' }}
        />
      </section>

      {/* Screenshot 2: terminology block on parchment (no scroll/delete row) */}
      {terminologyExplanation?.trim() ? (
        <section
          className="relative z-10 px-5 sm:px-6 py-12 md:py-14"
          style={{
            background: '#E8D5B8',
            backgroundImage: `
              linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0.02)),
              url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")
            `,
          }}
        >
          <p
            className="max-w-3xl mx-auto font-serif text-sm md:text-base leading-relaxed text-left"
            style={{ color: '#1a0f05' }}
          >
            {terminologyExplanation}
          </p>
        </section>
      ) : null}
    </>
  );
};

export default RecordOfSoulHero;
