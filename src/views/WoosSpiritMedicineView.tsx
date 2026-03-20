import { motion } from 'framer-motion';

const WoosSpiritMedicineView = () => {
  return (
    <div className="bg-primary pb-24">
      <header className="hero-bg pt-32 md:pt-40 pb-14 md:pb-20 px-4 sm:px-6 text-center border-b border-white/5 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif text-3xl sm:text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-white to-accent mb-5 md:mb-6 tracking-[0.04em] md:tracking-wide py-2"
        >
          Woos Spirit Medicine
        </motion.h1>
        <p className="max-w-4xl mx-auto text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-light mb-8">
          This documentary scientifically reveals the Human Spirit (Soul) Medicine .
          1. Spirit (Soul) organs, physiological systems, and basic pathology
          2. After Human Death, the evidence and pathogenesis of Spirit( Ghost ) and its harm to human(host) flesh
        </p>
      </header>

      <main className="max-w-5xl mx-auto py-10 md:py-14 px-4 sm:px-6 space-y-5 md:space-y-8">
        <section className="bg-slate-900/50 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8">
          <h2 className="text-accent font-bold tracking-wider text-sm md:text-base mb-3">FILE 2-1</h2>
          <h3 className="font-serif text-xl md:text-2xl text-white mb-4 leading-snug">General Principles and Definition of Spirit Medicine</h3>
          <p className="text-slate-400 uppercase tracking-widest text-xs">coming soon</p>
        </section>

        <section className="bg-slate-900/50 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8">
          <h2 className="text-accent font-bold tracking-wider text-sm md:text-base mb-3">FILE 2-2</h2>
          <h3 className="font-serif text-xl md:text-2xl text-white mb-4 leading-snug">Evidence for the Existence of Spirits(Ghosts)</h3>
          <p className="text-slate-400 uppercase tracking-widest text-xs">coming soon</p>
        </section>

        <section className="bg-slate-900/50 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8">
          <h2 className="text-accent font-bold tracking-wider text-sm md:text-base mb-3">FILE 2-3</h2>
          <h3 className="font-serif text-xl md:text-2xl text-white mb-4 leading-snug">Human Spirit (Soul) Physiology</h3>
          <div className="space-y-4 text-slate-300">
            <div>
              <p className="text-accent">○ 2-3-1</p>
              <p className="text-base md:text-lg leading-relaxed">Understand the Spirit(Soul) from Meridians</p>
              <p className="text-slate-400 uppercase tracking-widest text-xs mt-1">coming soon</p>
            </div>
            <div>
              <p className="text-accent">○ 2-3-2</p>
              <p className="text-base md:text-lg leading-relaxed">Physiological Systems of Spirit(Soul)</p>
              <p className="text-slate-400 uppercase tracking-widest text-xs mt-1">coming soon</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900/50 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8">
          <h2 className="text-accent font-bold tracking-wider text-sm md:text-base mb-3">FILE 2-4</h2>
          <h3 className="font-serif text-xl md:text-2xl text-white mb-4 leading-snug">Overview : Physiology &amp; Pathology of Spirits(Ghosts)</h3>
          <div className="space-y-4 text-slate-300">
            {[
              ['○ 2-4-1', 'Overview: America Spirits(Ghosts)'],
              ['○ 2-4-2', 'PSI ability of Spirits(Ghosts)'],
              ['○ 2-4-3', 'Process of Human Death & the Birth of a Ghost'],
              ['○ 2-4-4', 'The Intersection of Spirits(Ghosts) & the Physical World'],
              ['○ 2-4-5', 'Mutual Harm & Death Among Spirits(Ghosts)'],
              ['○ 2-4-6', 'Basic Pathology of Spirits(Ghosts)'],
            ].map(([id, title]) => (
              <div key={id}>
                <p className="text-accent">{id}</p>
                <p className="text-base md:text-lg leading-relaxed">{title}</p>
                <p className="text-slate-400 uppercase tracking-widest text-xs mt-1">coming soon</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900/50 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8">
          <h2 className="text-accent font-bold tracking-wider text-sm md:text-base mb-3">FILE 2-5</h2>
          <h3 className="font-serif text-xl md:text-2xl text-white mb-4 leading-snug">Pathology of Human Spirit(Soul)</h3>
          <div className="space-y-4 text-slate-300">
            {[
              ['○ 2-5-1', 'Intrinsic Pathology of the Human own Spirits(Soul) Body'],
              ['○ 2-5-2', 'Diseases caused by Possessed Spirits(Ghosts)'],
              ['○ 2-5-3', 'Harmonious Coexistence of Humans and Spirits(Ghosts)'],
            ].map(([id, title]) => (
              <div key={id}>
                <p className="text-accent">{id}</p>
                <p className="text-base md:text-lg leading-relaxed">{title}</p>
                <p className="text-slate-400 uppercase tracking-widest text-xs mt-1">coming soon</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default WoosSpiritMedicineView;
