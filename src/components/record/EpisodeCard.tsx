import { motion } from 'framer-motion';

type EpisodeCardProps = {
  fileNumber: string;
  title: string;
  description: string;
  link: string;
  delay?: number;
};

const EpisodeCard = ({ fileNumber, title, description, link, delay = 0 }: EpisodeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-slate-800/30 border border-white/5 rounded-2xl p-4 sm:p-6 md:p-10 hover:bg-slate-800/50 hover:border-accent/30 transition-all shadow-xl"
    >
      <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-yellow-600 to-accent text-black font-bold text-sm tracking-widest mb-4 shadow-md shadow-accent/20">
        {fileNumber}
      </span>
      <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-white mb-3 leading-snug">{title}</h3>
      <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-5 md:mb-6">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="block text-center md:inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-semibold py-2.5 px-5 md:px-6 rounded-full transition-all shadow-lg shadow-red-900/40 text-base">
        ▶ Watch on YouTube
      </a>
    </motion.div>
  );
};

export default EpisodeCard;
