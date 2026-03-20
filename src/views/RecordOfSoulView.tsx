import { motion } from 'framer-motion';
import EpisodeCard from '../components/record/EpisodeCard';
import { siteContent } from '../content/siteContent';

const RecordOfSoulView = () => {
  const { title, description, note, bannerImages, volumes } = siteContent.recordOfSoul;

  return (
    <div className="bg-primary pb-24">
      {/* Header */}
      <header className="hero-bg pt-32 md:pt-40 pb-14 md:pb-20 px-4 sm:px-6 text-center border-b border-white/5 relative">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="font-serif text-3xl sm:text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-white to-accent mb-5 md:mb-6 tracking-[0.04em] md:tracking-wide drop-shadow-2xl py-2"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-light mb-8 md:mb-10"
        >
          {description}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.5 }}
          className="max-w-3xl mx-auto bg-slate-800/60 border border-accent/20 p-4 sm:p-5 md:p-6 rounded-xl shadow-2xl backdrop-blur-sm"
        >
          <p className="text-slate-300 italic text-sm md:text-base leading-relaxed">
            <span className="text-accent font-semibold not-italic">* Note:</span> {note}
          </p>
        </motion.div>
      </header>

      {/* Main Content */}
      <main>
        {volumes.map((volume, volumeIndex) => (
          <div key={volume.title}>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              src={bannerImages[volumeIndex % bannerImages.length]}
              alt={volume.title}
              className={`w-full h-40 sm:h-48 md:h-72 object-cover brightness-50 contrast-125 border-y border-white/10 ${volumeIndex > 0 ? 'mt-4' : ''}`}
            />

            <div className="max-w-4xl mx-auto py-10 md:py-12 px-4 sm:px-6">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-center mb-8 md:mb-12 text-white border-b-2 border-accent/40 pb-3 md:pb-4 inline-block mx-auto left-1/2 relative -translate-x-1/2">
                {volume.title}
              </h2>
              <div className="space-y-8 md:space-y-12">
                {volume.episodes.map((episode) => (
                  <EpisodeCard key={episode.fileNumber} {...episode} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default RecordOfSoulView;
