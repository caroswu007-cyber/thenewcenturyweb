import { motion } from 'framer-motion';
import { siteContent } from '../../content/siteContent';

const Achievements = () => {
  const { achievements } = siteContent.links;

  return (
    <section id="achievements" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="font-serif text-3xl md:text-5xl text-center text-white mb-16 border-b-2 border-accent/40 pb-4 inline-block relative left-1/2 -translate-x-1/2"
      >
        Our Achievements
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-800/40 border border-white/5 backdrop-blur-xl p-10 rounded-2xl shadow-2xl hover:-translate-y-2 transition-all hover:border-accent/30">
          <h3 className="font-serif text-2xl text-white mb-6">Live Room Content Summary</h3>
          <p className="text-slate-400 leading-loose text-lg">
            Comprehensive overviews and key takeaways from our interactive live sessions. A summary of breakthroughs, patient recoveries, and spiritual revelations discussed with our community.
          </p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-slate-800/40 border border-white/5 backdrop-blur-xl p-10 rounded-2xl shadow-2xl hover:-translate-y-2 transition-all hover:border-accent/30">
          <h3 className="font-serif text-2xl text-white mb-6">Sample Display</h3>
          <p className="text-slate-400 leading-loose text-lg">
            Showcasing the Woos Spirit Management System. Real-world applications, tools, and verified methods utilized by patients and administrators to establish control and harmony.
          </p>
        </motion.div>
      </div>
      
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
        <p className="text-slate-400 mb-6 text-lg">Explore our achievements network for detailed documentation:</p>
        <a href={achievements} target="_blank" rel="noopener noreferrer" className="inline-block border border-white/20 text-white hover:border-accent hover:text-accent font-bold uppercase tracking-widest text-sm py-4 px-12 rounded-full transition-all hover:-translate-y-1">Visit: Our Achievements</a>
      </motion.div>
    </section>
  );
};

export default Achievements;
