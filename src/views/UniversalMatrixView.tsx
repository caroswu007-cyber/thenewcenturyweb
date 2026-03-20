import { motion } from 'framer-motion';

const UniversalMatrixView = () => {
  return (
    <div className="bg-primary pb-24">
      <header className="hero-bg pt-32 md:pt-40 pb-14 md:pb-20 px-4 sm:px-6 text-center border-b border-white/5 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif text-3xl sm:text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-white to-accent mb-5 md:mb-6 tracking-[0.04em] md:tracking-wide py-2"
        >
          Universal Matrix of Meta Awareness
        </motion.h1>
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-white mb-5">The brain beyond universe</h2>
        <p className="max-w-4xl mx-auto text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-light">
          This documentary presents evidence for the existence of the Universal Matrix of Meta Awareness.
          It has created three types of virtual survival environments for humanity, controls human free consciousness,
          the evolution of life on Earth, and the ultimate destiny of human civilization.
        </p>
      </header>

      <main className="max-w-5xl mx-auto py-10 md:py-14 px-4 sm:px-6 space-y-5 md:space-y-8">
        <section className="bg-slate-900/50 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8">
          <h2 className="text-accent font-bold tracking-wider text-sm md:text-base mb-3">FILE 3-1</h2>
          <h3 className="font-serif text-xl md:text-2xl text-white mb-4 leading-snug">Intorduction to Universal Matrix of Meta Awareness</h3>
          <p className="text-slate-400 uppercase tracking-widest text-xs">coming soon</p>
        </section>

        <section className="bg-slate-900/50 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8">
          <h2 className="text-accent font-bold tracking-wider text-sm md:text-base mb-3">FILE 3-2</h2>
          <h3 className="font-serif text-xl md:text-2xl text-white mb-4 leading-snug">Existence evidence Universal Matrix of Meta Awareness</h3>
          <div className="space-y-4 text-slate-300">
            {[
              ['○ 3-2-1', 'Reasonable inference and evidence for his existence'],
              ['○ 3-2-2', 'Verification video for skeptics'],
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
          <h2 className="text-accent font-bold tracking-wider text-sm md:text-base mb-3">FILE 3-3</h2>
          <h3 className="font-serif text-xl md:text-2xl text-white mb-4 leading-snug">Ethereal Matter &amp; Ethereal Realm</h3>
          <div className="space-y-4 text-slate-300">
            {[
              ['○ 3-3-1', 'Ethereal micro-particles & the Zero Space of Ethereal Space'],
              ['○ 3-3-2', 'Control and influence over the real universe'],
              ['○ 3-3-3', 'Virtual space of Ethereal Space'],
              ['○ 3-3-4', 'Spirit survival support system'],
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
          <h2 className="text-accent font-bold tracking-wider text-sm md:text-base mb-3">FILE 3-4</h2>
          <h3 className="font-serif text-xl md:text-2xl text-white mb-4 leading-snug">Spirit Control System from Universal Matrix of Meta Awareness</h3>
          <div className="space-y-4 text-slate-300">
            <div>
              <p className="text-accent">○ 3-4-1</p>
              <p className="text-base md:text-lg leading-relaxed">Description of the control system</p>
            </div>
            {[
              ['○ 3-4-1-1', 'Evidence'],
              ['○ 3-4-1-2', 'Organization framework of Master Spirits'],
              ['○ 3-4-1-3', 'System Data Uplink System-Akashic Record'],
              ['○ 3-4-1-4', 'Multiple Data Downlink Mode'],
            ].map(([id, title]) => (
              <div key={id} className="md:ml-6">
                <p className="text-accent">{id}</p>
                <p className="text-base md:text-lg leading-relaxed">{title}</p>
                <p className="text-slate-400 uppercase tracking-widest text-xs mt-1">coming soon</p>
              </div>
            ))}
            <div>
              <p className="text-accent">○ 3-4-2</p>
              <p className="text-base md:text-lg leading-relaxed">Management &amp; behavior style of Master Spirits</p>
              <p className="text-slate-400 uppercase tracking-widest text-xs mt-1">coming soon</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900/50 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8">
          <h2 className="text-accent font-bold tracking-wider text-sm md:text-base mb-3">FILE 3-5</h2>
          <h3 className="font-serif text-xl md:text-2xl text-white mb-4 leading-snug">Purpose of Manifestation Universal Matrix of Meta Awareness</h3>
          <div className="space-y-4 text-slate-300">
            {[
              ['○ 3-5-1', 'Why do other types of life forms not interact with humans?'],
              ['○ 3-5-2', 'He is scheduled to emerge at the Singularity of AI'],
              ['○ 3-5-3', 'He Guides the Optimal Ultimate Form of Human Society'],
              ['○ 3-5-4', 'He Guides the Optimal Ultimate State of Individual Human Life'],
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

export default UniversalMatrixView;
