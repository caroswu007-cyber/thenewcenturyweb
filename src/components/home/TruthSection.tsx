import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TruthSection = () => {
  return (
    <section id="truth" className="py-16 md:py-24 bg-black/40 px-4 sm:px-6 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-serif text-2xl md:text-5xl text-center text-white mb-10 md:mb-16 border-b-2 border-accent/40 pb-4 inline-block relative left-1/2 -translate-x-1/2"
        >
          The Truth of Spirit<br /><span className="text-2xl md:text-4xl text-slate-400">And its Governor</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="bg-slate-800/60 border border-accent/20 p-5 sm:p-6 md:p-12 rounded-2xl shadow-2xl text-center max-w-4xl mx-auto mb-12 md:mb-20 backdrop-blur-md"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-accent mb-6">Abstract: The Truth We Found</h3>
          <p className="text-sm sm:text-base md:text-xl leading-relaxed">
            Through systematic exploration and firsthand experiential evidence, we have verified scientific methodologies to safely navigate and govern the unseen realm. The Woos Ethereal Life & Realm Documentary Series reveals it all.
          </p>
        </motion.div>

        <h3 className="font-serif text-2xl md:text-3xl text-center text-white mb-4">Video Document Series</h3>
        <p className="text-center text-slate-400 text-sm sm:text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto">
          Journey across multiple dimensions and uncover the ancient truths spanning three seasons of dedicated research.
        </p>

        <div className="grid md:grid-cols-3 gap-5 md:gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900/55 border border-white/10 p-5 sm:p-6 md:p-8 rounded-2xl flex flex-col hover:-translate-y-1 transition-all hover:border-accent/40 shadow-xl group">
            <span className="inline-block bg-accent/10 border border-accent/30 text-accent font-bold text-xs tracking-widest px-4 py-1.5 rounded-full mb-6 max-w-max">SEASON 1</span>
            <h4 className="font-serif text-xl md:text-2xl text-white mb-4">Woos Record of Soul</h4>
            <p className="text-slate-400 leading-relaxed flex-grow mb-6 md:mb-8 text-sm sm:text-base md:text-lg">Collecting all true scientific research materials from East and West regarding spirits, PSI, NDE, past-life memories, and other topics related to spirits and the Ethereal Realm. With personal possession, supernatural and spirit-exorcism experiences.</p>
            <Link to="/record-of-soul" className="block w-full text-center border border-accent/50 text-accent hover:bg-accent hover:text-black font-bold uppercase tracking-widest text-sm py-3 rounded-full transition-colors">Learn more</Link>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-slate-900/55 border border-white/10 p-5 sm:p-6 md:p-8 rounded-2xl flex flex-col hover:-translate-y-1 transition-all hover:border-accent/40 shadow-xl group">
            <span className="inline-block bg-accent/10 border border-accent/30 text-accent font-bold text-xs tracking-widest px-4 py-1.5 rounded-full mb-6 max-w-max">SEASON 2</span>
            <h4 className="font-serif text-xl md:text-2xl text-white mb-4">Woos Spirit Medicine</h4>
            <p className="text-slate-400 leading-relaxed flex-grow mb-6 md:mb-8 text-sm sm:text-base md:text-lg">This documentary provides the evidence of spirits and ghosts existing while people are alive and after death from scientific perspective and causing illness to the physical body. The organs, physiological systems, and basic pathology of spirits.</p>
            <Link to="/spirit-medicine" className="block w-full text-center border border-accent/50 text-accent hover:bg-accent hover:text-black font-bold uppercase tracking-widest text-sm py-3 rounded-full transition-colors">Click</Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-slate-900/55 border border-white/10 p-5 sm:p-6 md:p-8 rounded-2xl flex flex-col hover:-translate-y-1 transition-all hover:border-accent/40 shadow-xl group">
            <span className="inline-block bg-accent/10 border border-accent/30 text-accent font-bold text-xs tracking-widest px-4 py-1.5 rounded-full mb-6 max-w-max">SEASON 3</span>
            <h4 className="font-serif text-xl md:text-2xl text-white mb-4">Universal Matrix of Meta Awareness</h4>
            <p className="text-slate-400 leading-relaxed flex-grow mb-6 md:mb-8 text-sm sm:text-base md:text-lg">This documentary presents evidence for the existence of the Universal Matrix of Meta Awareness. It has created three types of virtual survival environments for humanity, controls human free consciousness, the evolution of life on Earth, and the ultimate destiny of human civilization.</p>
            <Link to="/universal-matrix" className="block w-full text-center border border-accent/50 text-accent hover:bg-accent hover:text-black font-bold uppercase tracking-widest text-sm py-3 rounded-full transition-colors">Learn Mores</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TruthSection;
