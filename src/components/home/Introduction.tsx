import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <section id="introduction" className="py-28 px-6 md:px-12 max-w-6xl mx-auto">

      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        {/* Top ornament */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-20" style={{ background: 'linear-gradient(to right, transparent, rgba(251,191,36,0.5))' }} />
          <span style={{ color: 'rgba(251,191,36,0.5)', fontSize: '0.6rem', letterSpacing: '0.4em' }}>✦ ✦ ✦</span>
          <div className="h-px w-20" style={{ background: 'linear-gradient(to left, transparent, rgba(251,191,36,0.5))' }} />
        </div>

        <h2
          className="cosmic-title mb-4"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: 1.1 }}
        >
          Introduction to SAA
        </h2>

        {/* Bottom rule */}
        <div className="flex items-center justify-center gap-4 mt-5">
          <div className="h-px w-32" style={{ background: 'linear-gradient(to right, transparent, rgba(251,191,36,0.3))' }} />
          <span
            className="font-cinzel text-xs uppercase tracking-[0.35em]"
            style={{ color: 'rgba(251,191,36,0.35)' }}
          >
            Spirit Ambassador Association
          </span>
          <div className="h-px w-32" style={{ background: 'linear-gradient(to left, transparent, rgba(251,191,36,0.3))' }} />
        </div>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="backdrop-blur-xl p-10 rounded-2xl shadow-2xl hover:-translate-y-2 transition-all duration-300"
          style={{
            background: 'rgba(15,23,42,0.65)',
            border: '1px solid rgba(251,191,36,0.12)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(251,191,36,0.08)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(251,191,36,0.3)';
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 50px rgba(0,0,0,0.6), 0 0 30px rgba(251,191,36,0.08), inset 0 1px 0 rgba(251,191,36,0.12)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(251,191,36,0.12)';
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(251,191,36,0.08)';
          }}
        >
          {/* Card top accent line */}
          <div className="h-px mb-8" style={{ background: 'linear-gradient(to right, rgba(251,191,36,0.4), transparent)' }} />
          <h3
            className="font-cinzel text-xl md:text-2xl text-white mb-6 tracking-wide"
          >
            Organization Mission
          </h3>
          <p className="text-slate-300 leading-loose text-base md:text-lg">
            A team of administrators composed of recovered individuals helping others control the spirit within their bodies, conquer symptoms, and achieve true ethereal symbiosis and mental wellness.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="backdrop-blur-xl p-10 rounded-2xl shadow-2xl hover:-translate-y-2 transition-all duration-300"
          style={{
            background: 'rgba(15,23,42,0.65)',
            border: '1px solid rgba(251,191,36,0.12)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(251,191,36,0.08)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(251,191,36,0.3)';
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 50px rgba(0,0,0,0.6), 0 0 30px rgba(251,191,36,0.08), inset 0 1px 0 rgba(251,191,36,0.12)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(251,191,36,0.12)';
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(251,191,36,0.08)';
          }}
        >
          <div className="h-px mb-8" style={{ background: 'linear-gradient(to right, rgba(251,191,36,0.4), transparent)' }} />
          <h3 className="font-cinzel text-xl md:text-2xl text-white mb-2 tracking-wide">
            Founder Story
          </h3>
          <h4 className="text-accent font-semibold tracking-widest uppercase text-xs mb-6 font-cinzel">
            Woos Family Story
          </h4>
          <p className="text-slate-300 leading-loose text-base md:text-lg mb-7">
            The storyline and introduction behind the establishment of the Spirit Ambassador Association. Witness the genesis of a system built to guide souls.
          </p>
          <span
            className="inline-block font-cinzel text-accent font-bold uppercase text-xs px-4 py-2 rounded-full tracking-widest"
            style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)' }}
          >
            Coming in December 2025
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
