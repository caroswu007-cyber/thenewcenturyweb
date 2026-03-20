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
        compact ? 'py-3 md:py-4' : 'py-5 md:py-6'
      }`}
    >
      {/* Soft bridge between bands — blur + gentle tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: compact ? 'blur(8px)' : 'blur(14px)',
          WebkitBackdropFilter: compact ? 'blur(8px)' : 'blur(14px)',
          background: compact
            ? 'linear-gradient(180deg, rgba(5,8,15,0.12) 0%, rgba(5,8,15,0.18) 50%, rgba(5,8,15,0.12) 100%)'
            : 'linear-gradient(180deg, rgba(5,8,15,0.05) 0%, rgba(5,8,15,0.22) 50%, rgba(5,8,15,0.05) 100%)',
        }}
        aria-hidden
      />
      {/* Horizontal glow line */}
      <div className="relative z-10 flex items-center w-full max-w-5xl mx-auto gap-5">
        <div
          className="flex-1 h-px"
          style={{
            background:
              'linear-gradient(to right, transparent, rgba(251,191,36,0.5), rgba(251,191,36,0.15))',
          }}
        />
        {/* Center ornament */}
        <div className="flex items-center gap-3 flex-shrink-0 opacity-90">
          <span style={{ color: 'rgba(251,191,36,0.4)', fontSize: '0.55rem' }}>✦</span>
          <span style={{ color: 'rgba(251,191,36,0.6)', fontSize: '0.9rem' }}>◈</span>
          <span style={{ color: 'rgba(251,191,36,0.4)', fontSize: '0.55rem' }}>✦</span>
        </div>
        <div
          className="flex-1 h-px"
          style={{
            background:
              'linear-gradient(to left, transparent, rgba(251,191,36,0.5), rgba(251,191,36,0.15))',
          }}
        />
      </div>

      {/* Optional label */}
      {label && (
        <p
          className="relative z-10 mt-3 font-cinzel text-sm uppercase tracking-[0.45em]"
          style={{ color: 'rgba(251,191,36,0.28)' }}
        >
          {label}
        </p>
      )}
    </div>
  );
};

export default SectionDivider;
