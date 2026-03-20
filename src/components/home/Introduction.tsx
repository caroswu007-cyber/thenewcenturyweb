import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <section id="introduction" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="font-serif text-3xl md:text-5xl text-center text-white mb-16 border-b-2 border-accent/40 pb-4 inline-block relative left-1/2 -translate-x-1/2"
      >
        Introduction to SAA
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <motion.div 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
           className="bg-slate-800/40 border border-white/5 backdrop-blur-xl p-10 rounded-2xl shadow-2xl hover:-translate-y-2 transition-all hover:border-accent/30"
        >
          <h3 className="font-serif text-2xl text-white mb-6">Organization Mission</h3>
          <p className="text-slate-400 leading-loose text-lg">A team of administrators composed of recovered individuals helping others control the spirit within their bodies, conquer symptoms, and achieve true ethereal symbiosis and mental wellness.</p>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
           className="bg-slate-800/40 border border-white/5 backdrop-blur-xl p-10 rounded-2xl shadow-2xl hover:-translate-y-2 transition-all hover:border-accent/30"
        >
          <h3 className="font-serif text-2xl text-white mb-2">Founder Story</h3>
          <h4 className="text-accent font-semibold tracking-wide uppercase text-sm mb-6">Woos Family Story</h4>
          <p className="text-slate-400 leading-loose text-lg mb-6">The storyline and introduction behind the establishment of the Spirit Ambassador Association. Witness the genesis of a system built to guide souls.</p>
          <span className="inline-block bg-accent/20 text-accent font-bold uppercase text-xs px-4 py-1.5 rounded-full border border-accent/20 tracking-wider">Coming in December 2025</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
