import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useI18n } from '../i18n/LocaleProvider';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { t } = useI18n();

  return (
    <nav
      className="fixed w-full z-50 backdrop-blur-md shadow-lg border-b border-white/5 py-4 md:py-5 px-4 sm:px-6 md:px-12 flex flex-wrap gap-y-3 justify-between items-center transition-all"
      style={{ background: 'rgba(5,8,15,0.88)' }}
    >
      <Link
        to="/"
        className="font-cinzel font-bold tracking-[0.25em] uppercase drop-shadow-[0_0_10px_rgba(251,191,36,0.3)] transition-colors hover:text-white"
        style={{ color: '#fbbf24', fontSize: '1.2rem' }}
      >
        ASra
      </Link>

      <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-4 md:gap-6 flex-1 min-w-0">
        {isHome ? (
          <>
            <ul className="hidden md:flex flex-wrap gap-x-4 lg:gap-x-7 text-sm font-semibold tracking-widest uppercase items-center font-cinzel">
              <li>
                <a href="#home" className="hover:text-accent transition-colors text-slate-300">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors text-slate-300">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <a href="#truth" className="hover:text-accent transition-colors text-slate-300">
                  {t('nav.truth')}
                </a>
              </li>
              <li>
                <Link to="/record-of-soul" className="hover:text-accent transition-colors text-slate-300">
                  {t('nav.record')}
                </Link>
              </li>
              <li>
                <Link to="/spirit-medicine" className="hover:text-accent transition-colors text-slate-300">
                  {t('nav.spirit')}
                </Link>
              </li>
              <li>
                <a href="#join" className="hover:text-accent transition-colors text-slate-300">
                  {t('nav.join')}
                </a>
              </li>
            </ul>
            <div className="md:hidden text-accent text-sm font-bold tracking-widest font-cinzel order-first sm:order-none">
              {t('nav.menu')}
            </div>
          </>
        ) : (
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 justify-end">
            {location.pathname !== '/about' && (
              <Link
                to="/about"
                className="font-cinzel text-sm tracking-widest uppercase transition-colors hidden md:block"
                style={{ color: 'rgba(251,191,36,0.6)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fbbf24')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(251,191,36,0.6)')}
              >
                {t('nav.about')}
              </Link>
            )}
            <Link
              to="/"
              className="font-cinzel text-sm font-semibold tracking-widest uppercase hover:text-white transition-colors"
              style={{ color: 'rgba(251,191,36,0.7)' }}
            >
              {t('nav.back')}
            </Link>
          </div>
        )}
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
