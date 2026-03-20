import { motion } from 'framer-motion';
import { siteContent } from '../../content/siteContent';

const JoinSection = () => {
  const { join } = siteContent.links;

  return (
    <section id="join" className="py-32 bg-black/40 px-6 text-center border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-center text-white mb-8 border-b-2 border-accent/40 pb-4 inline-block">Join & Participate</h2>
        <p className="text-slate-300 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
          Become a part of the Spirit Ambassador Association. Whether you seek guidance, wish to share your journey, or want to join our team of administrators, your ethereal life begins here.
        </p>
        <a href={join} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-yellow-600 to-accent hover:from-accent hover:to-yellow-400 text-black font-bold uppercase tracking-widest text-lg md:text-xl py-4 px-16 rounded-full transition-transform hover:-translate-y-1 shadow-lg shadow-accent/20">
          Visit: Join Us
        </a>
      </motion.div>
    </section>
  );
};

export default JoinSection;
