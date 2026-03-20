import React from 'react';

interface SectionDividerProps {
  label?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ label }) => {
  return (
    <div className="relative flex flex-col items-center justify-center py-10 px-6 overflow-hidden">
      {/* Horizontal glow line */}
      <div className="flex items-center w-full max-w-5xl mx-auto gap-5">
        <div
          className="flex-1 h-px"
          style={{
            background:
              'linear-gradient(to right, transparent, rgba(251,191,36,0.5), rgba(251,191,36,0.15))',
          }}
        />
        {/* Center ornament */}
        <div className="flex items-center gap-3 flex-shrink-0">
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
          className="mt-4 font-cinzel text-xs uppercase tracking-[0.45em]"
          style={{ color: 'rgba(251,191,36,0.3)' }}
        >
          {label}
        </p>
      )}
    </div>
  );
};

export default SectionDivider;
