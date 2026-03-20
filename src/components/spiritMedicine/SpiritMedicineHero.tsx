import React from 'react';

const SpiritMedicineHero = () => {
  return (
    <section className="relative flex flex-col justify-center items-center overflow-hidden" style={{ minHeight: '72vh' }}>
      {/* Medical lab background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=85)',
        }}
      />

      {/* Teal medical overlay — lighter than the dark archival series */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(6, 78, 104, 0.68)' }}
      />

      {/* Subtle center brightening */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 45%, rgba(14,165,233,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-6 py-28">

        {/* Series badge */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-14" style={{ background: 'rgba(103,232,249,0.5)' }} />
          <span
            className="font-mono text-xs tracking-[0.35em] uppercase"
            style={{ color: '#67e8f9' }}
          >
            Medical Documentary · Series II
          </span>
          <div className="h-px w-14" style={{ background: 'rgba(103,232,249,0.5)' }} />
        </div>

        {/* Title */}
        <h1
          className="font-serif font-bold text-white mb-3 leading-tight"
          style={{
            fontSize: 'clamp(2.6rem, 7vw, 5.2rem)',
            textShadow: '0 2px 40px rgba(0,200,255,0.25)',
          }}
        >
          Woos{' '}
          <span
            style={{
              borderBottom: '3px solid #f59e0b',
              paddingBottom: '4px',
            }}
          >
            Spirit Medicine
          </span>
        </h1>

        {/* Ornamental divider */}
        <div className="flex items-center gap-4 my-7 w-full max-w-xs">
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(103,232,249,0.5))' }}
          />
          <span style={{ color: 'rgba(103,232,249,0.6)', fontSize: '0.6rem' }}>◆ ◆ ◆</span>
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(to left, transparent, rgba(103,232,249,0.5))' }}
          />
        </div>

        {/* Description */}
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl mb-10"
          style={{ color: 'rgba(255,255,255,0.85)' }}
        >
          This documentary scientifically reveals the Human Spirit (Soul) Medicine —
          organs, physiological systems, and basic pathology of the Spirit (Soul), along with
          the evidence and pathogenesis of Spirit (Ghost) harm to the human host after death.
        </p>

        {/* Stats bar */}
        <div
          className="flex items-stretch"
          style={{ border: '1px solid rgba(255,255,255,0.2)' }}
        >
          {[
            { value: '5', label: 'Files' },
            { value: '11', label: 'Sub-chapters' },
            { value: '2025', label: 'Series' },
          ].map((stat, i, arr) => (
            <div
              key={stat.label}
              className="px-8 py-4 text-center"
              style={i < arr.length - 1 ? { borderRight: '1px solid rgba(255,255,255,0.2)' } : {}}
            >
              <p
                className="font-mono font-bold mb-0.5"
                style={{ fontSize: '1.6rem', color: '#67e8f9', lineHeight: 1 }}
              >
                {stat.value}
              </p>
              <p
                className="font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient — fades into the light content section */}
      <div
        className="absolute bottom-0 left-0 w-full h-36 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0a2535, transparent)' }}
      />
    </section>
  );
};

export default SpiritMedicineHero;
