import React from 'react';
import { siteContent } from '../../content/siteContent';

const RecordOfSoulHero = () => {
  const { title, description, note, episodesCount, minutes, backgroundImage } = siteContent.recordOfSoul;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Lighter cinematic overlay — reduced to 52% so background breathes */}
      <div className="absolute inset-0 bg-black/52" />

      {/* Soft radial vignette only at edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(0,0,0,0) 25%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      {/* Warm amber glow at center — gives depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 45%, rgba(180,120,40,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Film scanline texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.025) 2px, rgba(255,255,255,0.025) 4px)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-6 py-32">

        {/* Archive classification label */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px w-16" style={{ background: 'rgba(200,160,60,0.6)' }} />
          <span
            className="font-mono text-xs tracking-[0.35em] uppercase"
            style={{ color: '#c9a84c' }}
          >
            Documentary Archive · Series I
          </span>
          <div className="h-px w-16" style={{ background: 'rgba(200,160,60,0.6)' }} />
        </div>

        {/* Title */}
        <h1
          className="font-serif font-bold tracking-tight leading-none mb-2"
          style={{
            fontSize: 'clamp(2.8rem, 8vw, 6rem)',
            color: '#f5e8cc',
            textShadow:
              '0 2px 60px rgba(220,170,80,0.45), 0 0 120px rgba(200,150,60,0.2)',
          }}
        >
          {title}
        </h1>

        {/* Ornamental rule */}
        <div className="flex items-center gap-5 my-8 w-full max-w-sm">
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(to right, transparent, #a07840)' }}
          />
          <span style={{ color: '#a07840', fontSize: '0.7rem' }}>✦ ✦ ✦</span>
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(to left, transparent, #a07840)' }}
          />
        </div>

        {/* Description */}
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl mb-12 font-light tracking-wide"
          style={{ color: '#d5ccc0' }}
        >
          {description}
        </p>

        {/* Stats — archival table style */}
        <div
          className="flex items-stretch mb-12"
          style={{ border: '1px solid rgba(200,150,60,0.45)' }}
        >
          <div
            className="px-12 py-5 text-center"
            style={{ borderRight: '1px solid rgba(200,150,60,0.45)' }}
          >
            <p
              className="font-mono font-bold mb-1"
              style={{ fontSize: '2.8rem', color: '#e8c060', lineHeight: 1 }}
            >
              {episodesCount}
            </p>
            <p
              className="font-mono text-xs uppercase tracking-[0.25em]"
              style={{ color: '#a09070' }}
            >
              Episodes
            </p>
          </div>
          <div className="px-12 py-5 text-center">
            <p
              className="font-mono font-bold mb-1"
              style={{ fontSize: '2.8rem', color: '#e8c060', lineHeight: 1 }}
            >
              {minutes}
            </p>
            <p
              className="font-mono text-xs uppercase tracking-[0.25em]"
              style={{ color: '#a09070' }}
            >
              Minutes
            </p>
          </div>
        </div>

        {/* Archival note */}
        <div
          className="max-w-2xl w-full text-left px-5 py-4"
          style={{
            borderLeft: '2px solid rgba(200,150,60,0.6)',
            background: 'rgba(40,28,12,0.7)',
          }}
        >
          <p
            className="font-mono text-xs uppercase tracking-[0.25em] mb-2"
            style={{ color: '#b08040' }}
          >
            Archival Note
          </p>
          <p
            className="text-sm leading-relaxed italic"
            style={{ color: '#b0a085' }}
          >
            {note}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span
          className="font-mono text-xs tracking-[0.25em] uppercase"
          style={{ color: '#a07840' }}
        >
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, #a07840, transparent)' }}
        />
      </div>

      {/* Bottom gradient — smooth fade into timeline */}
      <div
        className="absolute bottom-0 left-0 w-full h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #1a1610, transparent)' }}
      />
    </section>
  );
};

export default RecordOfSoulHero;
