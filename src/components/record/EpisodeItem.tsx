import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Episode } from '../../content/siteContent';

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
  const [isOpen, setIsOpen] = useState(false);
  const durationPercent = Math.max(3, (parseInt(videoLength) / 942) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: 'easeOut' }}
      className="py-8 last:border-b-0"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
    >
      {/* File badge */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="font-mono text-xs tracking-[0.2em] uppercase px-2.5 py-1 rounded-sm font-semibold"
          style={{
            color: '#d4a855',
            background: 'rgba(200,160,80,0.12)',
            border: '1px solid rgba(200,160,80,0.4)',
            letterSpacing: '0.18em',
          }}
        >
          {fileNumber}
        </span>
        <div
          className="flex-1 h-px max-w-20"
          style={{
            background: 'linear-gradient(to right, rgba(200,160,80,0.4), transparent)',
          }}
        />
      </div>

      {/* Title */}
      <h3
        className="font-serif font-bold leading-snug mb-5 transition-colors duration-300"
        style={{
          fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
          color: isOpen ? '#f0dcb0' : '#e8e0d0',
          textShadow: isOpen ? '0 0 30px rgba(220,170,80,0.2)' : 'none',
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
          color: isOpen ? '#c9a84c' : '#a08060',
          border: `1px solid ${isOpen ? 'rgba(200,160,80,0.5)' : 'rgba(255,255,255,0.15)'}`,
          padding: '0.4rem 1rem',
          borderRadius: '2px',
          background: isOpen ? 'rgba(200,160,80,0.08)' : 'rgba(255,255,255,0.02)',
        }}
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: '#c9a84c', fontSize: '1rem', lineHeight: 1 }}
        >
          +
        </motion.span>
        {isOpen ? 'Close Dossier' : 'Open Dossier'}
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
                borderLeft: '2px solid rgba(200,160,80,0.45)',
                background: 'rgba(255,255,255,0.025)',
              }}
            >
              {/* Abstract */}
              <p
                className="font-mono text-xs uppercase tracking-[0.2em] mb-2 font-semibold"
                style={{ color: '#b08040' }}
              >
                Abstract
              </p>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: '#c0b090' }}
              >
                {abstract}
              </p>

              {/* Key features */}
              {keyFeatures && (
                <>
                  <div
                    className="h-px mb-4"
                    style={{ background: 'rgba(200,160,80,0.2)' }}
                  />
                  <p
                    className="font-mono text-xs uppercase tracking-[0.2em] mb-2 font-semibold"
                    style={{ color: '#b08040' }}
                  >
                    Key Features
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#c0b090' }}
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
              className="font-mono text-xs uppercase tracking-wider"
              style={{ color: '#8a7a60' }}
            >
              Duration
            </span>
            <span
              className="font-mono text-xs font-semibold"
              style={{ color: '#c9a84c' }}
            >
              {videoLength}
            </span>
          </div>
          <div
            className="h-0.5 rounded-full overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.1)', maxWidth: '12rem' }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${durationPercent}%`,
                background: 'linear-gradient(to right, #9a6c28, #e0c060)',
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
              color: '#a09070',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '0.45rem 1rem',
              borderRadius: '2px',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = '#e8c060';
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(220,180,60,0.6)';
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(200,160,60,0.08)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = '#a09070';
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.2)';
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
            }}
          >
            <span style={{ color: '#c0392b', fontSize: '0.65rem' }}>▶</span>
            Watch
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default EpisodeItem;
