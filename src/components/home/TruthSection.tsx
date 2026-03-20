import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const seasons = [
  {
    season: 'SEASON 1',
    title: 'Woos Record of Soul',
    description:
      'Collecting all true scientific research materials from East and West regarding spirits, PSI, NDE, past-life memories, and other topics related to spirits and the Ethereal Realm. With personal possession, supernatural and spirit-exorcism experiences.',
    link: '/record-of-soul',
    cta: 'Explore Season I',
    accent: '#c9a84c',
    glow: 'rgba(201,168,76,0.15)',
  },
  {
    season: 'SEASON 2',
    title: 'Woos Spirit Medicine',
    description:
      'This documentary provides the evidence of spirits and ghosts existing while people are alive and after death from scientific perspective and causing illness to the physical body. The organs, physiological systems, and basic pathology of spirits.',
    link: '/spirit-medicine',
    cta: 'Explore Season II',
    accent: '#38bdf8',
    glow: 'rgba(56,189,248,0.12)',
  },
  {
    season: 'SEASON 3',
    title: 'Universal Matrix of Meta Awareness',
    description:
      'This documentary presents evidence for the existence of the Universal Matrix of Meta Awareness. It controls human free consciousness, the evolution of life on Earth, and the ultimate destiny of human civilization.',
    link: '/universal-matrix',
    cta: 'Explore Season III',
    accent: '#a78bfa',
    glow: 'rgba(167,139,250,0.12)',
  },
];

const TruthSection = () => {
  return (
    <section
      id="truth"
      className="py-28 px-4 sm:px-6 relative"
      style={{ background: 'rgba(5,8,15,0.6)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20" style={{ background: 'linear-gradient(to right, transparent, rgba(251,191,36,0.5))' }} />
            <span style={{ color: 'rgba(251,191,36,0.5)', fontSize: '0.6rem', letterSpacing: '0.4em' }}>✦ ✦ ✦</span>
            <div className="h-px w-20" style={{ background: 'linear-gradient(to left, transparent, rgba(251,191,36,0.5))' }} />
          </div>

          <h2
            className="cosmic-title mb-3"
            style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.5rem)', lineHeight: 1.1 }}
          >
            The Truth of Spirit
          </h2>
          <p
            className="font-cinzel mt-2 mb-5"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.8rem)', color: 'rgba(248,250,252,0.45)', letterSpacing: '0.06em' }}
          >
            And Its Governor
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24" style={{ background: 'linear-gradient(to right, transparent, rgba(251,191,36,0.3))' }} />
            <span className="font-cinzel text-xs uppercase tracking-[0.35em]" style={{ color: 'rgba(251,191,36,0.35)' }}>
              Documentary Series
            </span>
            <div className="h-px w-24" style={{ background: 'linear-gradient(to left, transparent, rgba(251,191,36,0.3))' }} />
          </div>
        </motion.div>

        {/* Abstract quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-md p-8 md:p-12 rounded-2xl text-center max-w-4xl mx-auto mb-20"
          style={{
            background: 'rgba(15,23,42,0.6)',
            border: '1px solid rgba(251,191,36,0.18)',
            boxShadow: '0 0 60px rgba(251,191,36,0.06)',
          }}
        >
          <div className="h-px mb-8" style={{ background: 'linear-gradient(to right, transparent, rgba(251,191,36,0.4), transparent)' }} />
          <h3
            className="font-cinzel mb-5"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: '#fbbf24', letterSpacing: '0.04em' }}
          >
            Abstract: The Truth We Found
          </h3>
          <p className="text-slate-200 text-base md:text-lg leading-relaxed font-light">
            Through systematic exploration and firsthand experiential evidence, we have verified scientific
            methodologies to safely navigate and govern the unseen realm. The Woos Ethereal Life & Realm
            Documentary Series reveals it all.
          </p>
          <div className="h-px mt-8" style={{ background: 'linear-gradient(to right, transparent, rgba(251,191,36,0.4), transparent)' }} />
        </motion.div>

        {/* Season subtitle */}
        <div className="text-center mb-12">
          <h3
            className="font-cinzel text-white mb-3"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', letterSpacing: '0.06em' }}
          >
            Video Document Series
          </h3>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-light">
            Journey across multiple dimensions and uncover the ancient truths spanning three seasons of dedicated research.
          </p>
        </div>

        {/* Season cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {seasons.map((s, i) => (
            <motion.div
              key={s.season}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="backdrop-blur-md rounded-2xl flex flex-col hover:-translate-y-2 transition-all duration-300 shadow-2xl overflow-hidden"
              style={{
                background: 'rgba(10,18,35,0.7)',
                border: `1px solid rgba(255,255,255,0.08)`,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = s.accent + '55';
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 40px ${s.glow}`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '';
              }}
            >
              {/* Top accent bar */}
              <div className="h-0.5 w-full" style={{ background: `linear-gradient(to right, ${s.accent}, transparent)` }} />

              <div className="p-7 md:p-8 flex flex-col flex-1">
                <span
                  className="inline-block font-cinzel font-bold text-xs tracking-widest px-3 py-1.5 rounded-full mb-6 max-w-max"
                  style={{
                    background: s.accent + '18',
                    border: `1px solid ${s.accent}40`,
                    color: s.accent,
                  }}
                >
                  {s.season}
                </span>

                <h4
                  className="font-serif font-bold text-white mb-5 leading-snug"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
                >
                  {s.title}
                </h4>

                <p className="text-slate-400 leading-relaxed flex-grow mb-8 text-sm md:text-base">
                  {s.description}
                </p>

                <Link
                  to={s.link}
                  className="block w-full text-center font-cinzel font-bold uppercase tracking-widest text-xs py-3 rounded-full transition-all duration-300"
                  style={{
                    border: `1px solid ${s.accent}60`,
                    color: s.accent,
                    background: 'transparent',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = s.accent + '18';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = s.accent + 'cc';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = s.accent + '60';
                  }}
                >
                  {s.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TruthSection;
