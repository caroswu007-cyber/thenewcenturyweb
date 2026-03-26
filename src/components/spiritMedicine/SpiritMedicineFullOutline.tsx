import { motion } from 'framer-motion';
import { getLocalizedSpiritMedicineOutline } from '../../content/getLocalizedSpiritMedicine';
import { useI18n } from '../../i18n/LocaleProvider';

/**
 * Full curriculum tree (ess-esw.org/spirit-medicine style), same teal/cyan visual language as SpiritMedicineContents.
 */
const SpiritMedicineFullOutline = () => {
  const { t, locale } = useI18n();
  const spiritMedicineOfficialOutline = getLocalizedSpiritMedicineOutline(locale);

  return (
    <section
      id="spirit-medicine-full-outline"
      className="relative z-10 text-white py-16 px-5 sm:px-6 md:px-8"
      style={{ background: '#0a2535' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(56,189,248,0.5), transparent), radial-gradient(ellipse 50% 35% at 10% 80%, rgba(56,189,248,0.4), transparent)',
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(56,189,248,0.45))' }}
          />
          <h2
            className="font-mono text-sm md:text-base tracking-[0.35em] uppercase text-center px-2"
            style={{ color: '#7dd3fc' }}
          >
            {t('spirit.fullOutlineTitle')}
          </h2>
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(to left, transparent, rgba(56,189,248,0.45))' }}
          />
        </div>
        <p
          className="text-center text-sm md:text-base font-serif mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'rgba(186,230,253,0.88)' }}
        >
          {t('spirit.fullOutlineIntro')}
        </p>

        <div
          className="rounded-2xl border backdrop-blur-sm px-5 py-6 md:px-8 md:py-8"
          style={{
            borderColor: 'rgba(56,189,248,0.35)',
            background: 'rgba(8,47,73,0.55)',
            boxShadow: '0 20px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)',
          }}
        >
          <ul className="space-y-8">
            {spiritMedicineOfficialOutline.map((file, fi) => (
              <motion.li
                key={file.anchorId}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: fi * 0.05 }}
              >
                <a
                  href={`#${file.anchorId}`}
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 rounded-lg"
                >
                  <div className="flex flex-wrap items-baseline gap-3 gap-y-1 mb-2">
                    <span
                      className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                      style={{
                        color: '#38bdf8',
                        background: 'rgba(56,189,248,0.12)',
                        border: '1px solid rgba(56,189,248,0.35)',
                      }}
                    >
                      {file.fileLabel}
                    </span>
                    <span
                      className="font-serif font-bold text-lg md:text-xl leading-snug group-hover:text-sky-200 transition-colors"
                      style={{ color: '#e0f2fe' }}
                    >
                      {file.heading}
                    </span>
                  </div>
                </a>
                {file.subsections?.length ? (
                  <ul
                    className="mt-4 ml-4 md:ml-8 space-y-2 pl-4 md:pl-5 border-l-2"
                    style={{ borderColor: 'rgba(56,189,248,0.25)' }}
                  >
                    {file.subsections.map(sub => (
                      <li key={sub.code} className="flex gap-3 items-start">
                        <span className="font-mono text-xs shrink-0 mt-1" style={{ color: '#5a8aa8' }}>
                          ○ {sub.code}
                        </span>
                        <a
                          href={`#${file.anchorId}`}
                          className="text-sm md:text-base font-serif leading-snug hover:text-sky-200 transition-colors"
                          style={{ color: '#94b8cc' }}
                        >
                          {sub.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SpiritMedicineFullOutline;
