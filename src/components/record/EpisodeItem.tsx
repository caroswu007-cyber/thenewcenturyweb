import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Episode } from '../../content/siteContent';
import { useI18n } from '../../i18n/LocaleProvider';

interface EpisodeItemProps extends Episode {
  index?: number;
}

const EpisodeItem: React.FC<EpisodeItemProps> = ({
  fileNumber,
  title,
  abstract,
  keyFeatures,
  videoLength,
  youtubeLink,
  index = 0,
}) => {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const durationPercent = Math.max(3, (parseInt(videoLength) / 942) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: 'easeOut' }}
      className="py-8 last:border-b-0"
      style={{ borderBottom: '1px solid rgba(31,18,8,0.13)' }}
    >
      {/* File badge */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="font-mono text-sm tracking-[0.2em] uppercase px-2.5 py-1 rounded-sm font-semibold"
          style={{
            color: '#7A4A12',
            background: 'rgba(160,95,25,0.1)',
            border: '1px solid rgba(140,85,20,0.35)',
            letterSpacing: '0.18em',
          }}
        >
          {fileNumber}
        </span>
        <div
          className="flex-1 h-px max-w-20"
          style={{
            background: 'linear-gradient(to right, rgba(140,85,20,0.4), transparent)',
          }}
        />
      </div>

      {/* Title */}
      <h3
        className="font-serif font-bold leading-snug mb-5 transition-colors duration-300"
        style={{
          fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
          color: isOpen ? '#1A0A02' : '#2A1408',
          textShadow: 'none',
        }}
      >
        {title}
      </h3>

      {/* Expand / collapse button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 transition-all duration-300 mb-5"
        style={{
          fontSize: '0.7rem',
          fontFamily: 'monospace',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: isOpen ? '#7A4A12' : '#5A3210',
          border: `1px solid ${isOpen ? 'rgba(140,85,20,0.5)' : 'rgba(31,18,8,0.22)'}`,
          padding: '0.4rem 1rem',
          borderRadius: '2px',
          background: isOpen ? 'rgba(160,95,25,0.08)' : 'rgba(31,18,8,0.04)',
        }}
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: '#9A5A18', fontSize: '1rem', lineHeight: 1 }}
        >
          +
        </motion.span>
        {isOpen ? t('episode.closeDossier') : t('episode.openDossier')}
      </button>

      {/* Expandable dossier content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div
              className="mb-6 pl-5 py-4 pr-3"
              style={{
                borderLeft: '2px solid rgba(160,95,25,0.5)',
                background: 'rgba(31,18,8,0.05)',
              }}
            >
              {/* Abstract */}
              <p
                className="font-mono text-sm uppercase tracking-[0.2em] mb-2 font-semibold"
                style={{ color: '#7A4A12' }}
              >
                {t('episode.abstract')}
              </p>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: '#3D2010' }}
              >
                {abstract}
              </p>

              {/* Key features */}
              {keyFeatures && (
                <>
                  <div
                    className="h-px mb-4"
                    style={{ background: 'rgba(140,85,20,0.2)' }}
                  />
                  <p
                    className="font-mono text-sm uppercase tracking-[0.2em] mb-2 font-semibold"
                    style={{ color: '#7A4A12' }}
                  >
                    {t('episode.keyFeatures')}
                  </p>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: '#3D2010' }}
                  >
                    {keyFeatures}
                  </p>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer row: duration bar + watch button */}
      <div className="flex items-center justify-between gap-6 mt-2">
        {/* Duration */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1.5">
            <span
              className="font-mono text-sm uppercase tracking-wider"
              style={{ color: '#6A4018' }}
            >
              {t('episode.duration')}
            </span>
            <span
              className="font-mono text-sm font-semibold"
              style={{ color: '#9A5A18' }}
            >
              {videoLength}
            </span>
          </div>
          <div
            className="h-0.5 rounded-full overflow-hidden"
            style={{ background: 'rgba(31,18,8,0.14)', maxWidth: '12rem' }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${durationPercent}%`,
                background: 'linear-gradient(to right, #8B5020, #C27B30)',
              }}
            />
          </div>
        </div>

        {/* Watch button */}
        {youtubeLink && (
          <a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 flex-shrink-0 transition-all duration-300"
            style={{
              fontSize: '0.7rem',
              fontFamily: 'monospace',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#5A3210',
              border: '1px solid rgba(31,18,8,0.25)',
              padding: '0.45rem 1rem',
              borderRadius: '2px',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = '#7A4A12';
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(140,85,20,0.5)';
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(160,95,25,0.08)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = '#5A3210';
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(31,18,8,0.25)';
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
            }}
          >
            <span style={{ color: '#c0392b', fontSize: '0.65rem' }}>▶</span>
            {t('episode.watch')}
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default EpisodeItem;
