import React from 'react';

interface SectionDividerProps {
  label?: string;
  /** Tighter, less “strip” — use after Introduction / dark sections */
  compact?: boolean;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ label, compact }) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center px-6 overflow-hidden ${
        compact ? 'py-8 md:py-12' : 'py-10 md:py-14'
      }`}
    >
      {/* Warm cream gradient bridge — blends between sections */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: compact
            ? 'linear-gradient(180deg, rgba(245,237,224,0) 0%, rgba(237,224,204,0.55) 30%, rgba(237,224,204,0.65) 50%, rgba(237,224,204,0.55) 70%, rgba(245,237,224,0) 100%)'
            : 'linear-gradient(180deg, rgba(245,237,224,0) 0%, rgba(237,224,204,0.45) 25%, rgba(237,224,204,0.6) 50%, rgba(237,224,204,0.45) 75%, rgba(245,237,224,0) 100%)',
        }}
        aria-hidden
      />
      {/* Horizontal amber rule */}
      <div className="relative z-10 flex items-center w-full max-w-5xl mx-auto gap-5">
        <div
          className="flex-1 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(194,123,32,0.45), rgba(194,123,32,0.15))' }}
        />
        {/* Center ornament */}
        <div className="flex items-center gap-3 flex-shrink-0 opacity-80">
          <span style={{ color: 'rgba(194,123,32,0.4)', fontSize: '0.55rem' }}>✦</span>
          <span style={{ color: 'rgba(194,123,32,0.6)', fontSize: '0.9rem' }}>◈</span>
          <span style={{ color: 'rgba(194,123,32,0.4)', fontSize: '0.55rem' }}>✦</span>
        </div>
        <div
          className="flex-1 h-px"
          style={{ background: 'linear-gradient(to left, transparent, rgba(194,123,32,0.45), rgba(194,123,32,0.15))' }}
        />
      </div>

      {/* Optional label */}
      {label && (
        <p
          className="relative z-10 mt-3 font-cinzel text-sm uppercase tracking-[0.45em]"
          style={{ color: 'rgba(194,123,32,0.38)' }}
        >
          {label}
        </p>
      )}
    </div>
  );
};

export default SectionDivider;
