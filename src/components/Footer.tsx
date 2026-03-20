import { useI18n } from '../i18n/LocaleProvider';

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="bg-black py-12 text-center border-t border-white/10 mt-auto">
      <p className="text-slate-500 mb-2 text-base">{t('footer.copyright')}</p>
      <p className="text-slate-600 text-base max-w-2xl mx-auto px-6 leading-relaxed">{t('footer.disclaimer')}</p>
    </footer>
  );
};

export default Footer;
