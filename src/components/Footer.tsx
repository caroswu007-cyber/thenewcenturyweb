import { useI18n } from '../i18n/LocaleProvider';

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="font-cinzel py-12 text-center mt-auto"
      style={{ background: '#160D04', borderTop: '1px solid rgba(194,123,32,0.12)' }}>
      <p className="mb-2 text-sm md:text-base" style={{ color: 'rgba(245,237,224,0.5)' }}>{t('footer.copyright')}</p>
      <p className="text-sm md:text-base max-w-2xl mx-auto px-4 sm:px-6 leading-relaxed" style={{ color: 'rgba(245,237,224,0.3)' }}>
        {t('footer.disclaimer')}
      </p>
    </footer>
  );
};

export default Footer;
