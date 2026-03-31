import EpisodeItem from './EpisodeItem';
import { useLocalizedSiteContent } from '../../content/useLocalizedSiteContent';
import { useI18n } from '../../i18n/LocaleProvider';

// Ethereal background images — lightly blurred so shapes remain visible
const ghostImages = [
  {
    // Celestial / cosmic energy — top-right
    src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=80',
    style: { top: '2%', right: '-2%', width: '40%', opacity: 0.35 },
    blur: 3,
  },
  {
    // Human silhouette in meditative light — upper-left
    src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80',
    style: { top: '16%', left: '-2%', width: '36%', opacity: 0.3 },
    blur: 3,
  },
  {
    // Neural / brain scan — center-right
    src: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=900&q=80',
    style: { top: '40%', right: '-2%', width: '38%', opacity: 0.32 },
    blur: 3,
  },
  {
    // Ethereal misty light figure — lower-left
    src: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=900&q=80',
    style: { top: '62%', left: '-2%', width: '42%', opacity: 0.3 },
    blur: 3,
  },
  {
    // Deep cosmos — bottom-right
    src: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=900&q=80',
    style: { bottom: '3%', right: '-2%', width: '38%', opacity: 0.32 },
    blur: 3,
  },
];

const EpisodeTimeline = () => {
  const { recordOfSoul } = useLocalizedSiteContent();
  const { timeline } = recordOfSoul;
  const { t } = useI18n();

  return (
    <div
      className="relative text-white py-20 px-5 sm:px-6 md:px-8 overflow-hidden"
      style={{ background: '#E8D5B8' }}
    >
      {/* ── Ghosted ethereal background images — adjusted for light bg ── */}
      {ghostImages.map((img, i) => (
        <div
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            ...img.style,
            aspectRatio: '1 / 1',
            backgroundImage: `url(${img.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: `blur(${img.blur}px) saturate(0.38) brightness(0.55) contrast(0.85) sepia(0.45)`,
            zIndex: 0,
            borderRadius: '4px',
            opacity: img.style.opacity as number * 0.5,
          }}
        />
      ))}

      {/* Subtle warm vignette to blend edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 50%, transparent 15%, rgba(180,120,50,0.12) 100%)',
          zIndex: 1,
        }}
      />

      {/* ── Section header ── */}
      <div className="relative z-10 max-w-4xl mx-auto mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div
            className="flex-1 h-px"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(140,85,20,0.55))',
            }}
          />
          <span
            className="font-mono text-sm tracking-[0.35em] uppercase"
            style={{ color: '#7A4A15' }}
          >
            {t('common.episodeIndex')}
          </span>
          <div
            className="flex-1 h-px"
            style={{
              background: 'linear-gradient(to left, transparent, rgba(140,85,20,0.55))',
            }}
          />
        </div>
        <p
          className="text-center font-serif tracking-widest text-sm font-semibold"
          style={{ color: '#5A3210' }}
        >
          {timeline.length}&nbsp;&nbsp;{t('common.classifiedFiles')}
        </p>
      </div>

      {/* ── Timeline ── */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Vertical timeline line */}
        <div
          className="absolute top-0 h-full"
          style={{
            left: '1.25rem',
            width: '1px',
            background:
              'linear-gradient(to bottom, rgba(160,95,25,0.75), rgba(140,85,25,0.3) 88%, transparent)',
          }}
        />

        {timeline.map((episode, index) => (
          <div key={episode.fileNumber} className="relative pl-16 mb-1">
            {/* Timeline node */}
            <div
              className="absolute flex items-center justify-center"
              style={{
                left: '1.25rem',
                top: '2.25rem',
                transform: 'translate(-50%, -50%)',
                width: '1.75rem',
                height: '1.75rem',
                borderRadius: '50%',
                border: '1px solid rgba(160,95,25,0.65)',
                background: '#E8D5B8',
                boxShadow: '0 0 8px rgba(160,95,25,0.12)',
              }}
            >
              <span
                className="font-mono font-bold"
                style={{ fontSize: '0.55rem', color: '#9A5A18', lineHeight: 1 }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <EpisodeItem {...episode} index={index} />
          </div>
        ))}

        {/* Timeline end marker */}
        <div
          className="flex items-center gap-3 pl-16 pt-4"
          style={{ opacity: 0.55 }}
        >
          <div
            className="w-3 h-3 rounded-full"
            style={{
              marginLeft: '-0.375rem',
              border: '1px solid rgba(160,95,25,0.6)',
              background: '#E8D5B8',
            }}
          />
          <span
            className="font-mono text-sm uppercase tracking-[0.25em]"
            style={{ color: '#7A4A15' }}
          >
            {t('record.endArchive')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EpisodeTimeline;
