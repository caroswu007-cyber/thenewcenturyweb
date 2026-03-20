import React from 'react';
import { motion } from 'framer-motion';

type SubChapter = {
  id: string;
  title: string;
};

type MedicalFile = {
  fileNumber: string;
  title: string;
  subChapters?: SubChapter[];
};

const files: MedicalFile[] = [
  {
    fileNumber: 'FILE 2-1',
    title: 'General Principles and Definition of Spirit Medicine',
  },
  {
    fileNumber: 'FILE 2-2',
    title: 'Evidence for the Existence of Spirits (Ghosts)',
  },
  {
    fileNumber: 'FILE 2-3',
    title: 'Human Spirit (Soul) Physiology',
    subChapters: [
      { id: '2-3-1', title: 'Understand the Spirit (Soul) from Meridians' },
      { id: '2-3-2', title: 'Physiological Systems of Spirit (Soul)' },
    ],
  },
  {
    fileNumber: 'FILE 2-4',
    title: 'Overview: Physiology & Pathology of Spirits (Ghosts)',
    subChapters: [
      { id: '2-4-1', title: 'Overview: America Spirits (Ghosts)' },
      { id: '2-4-2', title: 'PSI Ability of Spirits (Ghosts)' },
      { id: '2-4-3', title: 'Process of Human Death & the Birth of a Ghost' },
      { id: '2-4-4', title: 'The Intersection of Spirits (Ghosts) & the Physical World' },
      { id: '2-4-5', title: 'Mutual Harm & Death Among Spirits (Ghosts)' },
      { id: '2-4-6', title: 'Basic Pathology of Spirits (Ghosts)' },
    ],
  },
  {
    fileNumber: 'FILE 2-5',
    title: 'Pathology of Human Spirit (Soul)',
    subChapters: [
      { id: '2-5-1', title: 'Intrinsic Pathology of the Human Own Spirits (Soul) Body' },
      { id: '2-5-2', title: 'Diseases Caused by Possessed Spirits (Ghosts)' },
      { id: '2-5-3', title: 'Harmonious Coexistence of Humans and Spirits (Ghosts)' },
    ],
  },
];

// Ghosted medical imagery layered in the background
const ghostImages = [
  {
    src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80',
    style: { top: '4%', right: '-3%', width: '38%', opacity: 0.13 },
    blur: 4,
  },
  {
    src: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80',
    style: { top: '28%', left: '-3%', width: '36%', opacity: 0.11 },
    blur: 4,
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    style: { top: '55%', right: '-2%', width: '40%', opacity: 0.12 },
    blur: 4,
  },
  {
    src: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80',
    style: { bottom: '5%', left: '-3%', width: '38%', opacity: 0.11 },
    blur: 4,
  },
];

const ComingSoonBadge = () => (
  <span
    className="inline-flex items-center font-mono text-xs uppercase tracking-widest px-2 py-0.5 rounded-sm flex-shrink-0"
    style={{
      background: 'rgba(56,189,248,0.1)',
      color: '#38bdf8',
      border: '1px solid rgba(56,189,248,0.25)',
    }}
  >
    Coming Soon
  </span>
);

const SpiritMedicineContents = () => {
  const totalSubs = files.reduce((acc, f) => acc + (f.subChapters?.length ?? 0), 0);

  return (
    <div
      className="relative overflow-hidden text-white py-20 px-4 md:px-8"
      style={{ background: '#0a2535' }}
    >
      {/* Ghosted medical background images */}
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
            filter: `blur(${img.blur}px) saturate(0.4) brightness(0.7)`,
            zIndex: 0,
          }}
        />
      ))}

      {/* Edge vignette to keep text readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 50% at 50% 50%, transparent 20%, rgba(10,37,53,0.55) 100%)',
          zIndex: 1,
        }}
      />

      {/* Section header */}
      <div className="relative z-10 max-w-4xl mx-auto mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(56,189,248,0.4))' }}
          />
          <span
            className="font-mono text-xs tracking-[0.35em] uppercase"
            style={{ color: '#38bdf8' }}
          >
            File Index
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(to left, transparent, rgba(56,189,248,0.4))' }}
          />
        </div>
        <p
          className="text-center font-serif tracking-widest text-sm font-semibold"
          style={{ color: '#4a7a96' }}
        >
          {files.length} FILES &nbsp;·&nbsp; {totalSubs} SUB-CHAPTERS
        </p>
      </div>

      {/* Timeline */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Vertical line */}
        <div
          className="absolute top-0 h-full"
          style={{
            left: '1.25rem',
            width: '1px',
            background:
              'linear-gradient(to bottom, rgba(56,189,248,0.7), rgba(56,189,248,0.15) 90%, transparent)',
          }}
        />

        {files.map((file, index) => (
          <motion.div
            key={file.fileNumber}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
            className="relative pl-16"
          >
            {/* Timeline node */}
            <div
              className="absolute flex items-center justify-center"
              style={{
                left: '1.25rem',
                top: '2.6rem',
                transform: 'translate(-50%, -50%)',
                width: '1.75rem',
                height: '1.75rem',
                borderRadius: '50%',
                border: '1px solid rgba(56,189,248,0.55)',
                background: '#0a2535',
                boxShadow: '0 0 10px rgba(56,189,248,0.12)',
              }}
            >
              <span
                className="font-mono font-bold"
                style={{ fontSize: '0.55rem', color: '#38bdf8', lineHeight: 1 }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* File content */}
            <div
              className="py-10 last:border-0"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              {/* FILE badge */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-mono text-xs tracking-[0.2em] uppercase px-2.5 py-1 rounded-sm font-semibold"
                  style={{
                    color: '#38bdf8',
                    background: 'rgba(56,189,248,0.08)',
                    border: '1px solid rgba(56,189,248,0.3)',
                  }}
                >
                  {file.fileNumber}
                </span>
                <div
                  className="flex-1 h-px max-w-16"
                  style={{
                    background:
                      'linear-gradient(to right, rgba(56,189,248,0.3), transparent)',
                  }}
                />
              </div>

              {/* Title */}
              <h3
                className="font-serif font-bold leading-snug mb-6"
                style={{
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                  color: '#dff0fa',
                }}
              >
                {file.title}
              </h3>

              {/* Sub-chapters */}
              {file.subChapters ? (
                <div
                  className="pl-5 py-2 space-y-0"
                  style={{
                    borderLeft: '2px solid rgba(56,189,248,0.3)',
                  }}
                >
                  {file.subChapters.map((sub, si) => (
                    <div
                      key={sub.id}
                      className="flex items-center justify-between gap-4 py-3"
                      style={
                        si < file.subChapters!.length - 1
                          ? { borderBottom: '1px solid rgba(255,255,255,0.04)' }
                          : {}
                      }
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className="w-1.5 h-1.5 rounded-sm rotate-45 flex-shrink-0"
                          style={{ background: '#38bdf8', marginTop: '1px' }}
                        />
                        <span
                          className="font-mono text-xs font-semibold flex-shrink-0"
                          style={{ color: '#38bdf8' }}
                        >
                          {sub.id}
                        </span>
                        <span
                          className="text-sm leading-snug"
                          style={{ color: '#94b8cc' }}
                        >
                          {sub.title}
                        </span>
                      </div>
                      <ComingSoonBadge />
                    </div>
                  ))}
                </div>
              ) : (
                <ComingSoonBadge />
              )}
            </div>
          </motion.div>
        ))}

        {/* End marker */}
        <div
          className="flex items-center gap-3 pl-16 pt-4"
          style={{ opacity: 0.4 }}
        >
          <div
            className="w-3 h-3 rounded-full"
            style={{
              marginLeft: '-0.375rem',
              border: '1px solid rgba(56,189,248,0.5)',
              background: '#0a2535',
            }}
          />
          <span
            className="font-mono text-xs uppercase tracking-[0.25em]"
            style={{ color: '#38bdf8' }}
          >
            End of Series II
          </span>
        </div>
      </div>

      {/* Footer note */}
      <div className="relative z-10 max-w-4xl mx-auto mt-16 text-center">
        <p
          className="text-xs font-mono uppercase tracking-widest"
          style={{ color: '#2d5c74' }}
        >
          © 2025 Woos Spirit Management Ltd. · All research based on verified scientific studies.
        </p>
      </div>
    </div>
  );
};

export default SpiritMedicineContents;
