import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useI18n } from '../i18n/LocaleProvider';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        className="font-cinzel fixed w-full z-50 shadow-sm border-b py-4 md:py-5 px-4 sm:px-6 md:px-12 flex flex-wrap gap-y-3 justify-between items-center transition-all"
        style={{
          background: 'rgba(251,246,238,0.93)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderColor: 'rgba(31,18,8,0.1)',
        }}
      >
        <Link
          to="/"
          onClick={closeMobile}
          className="font-cinzel font-bold tracking-[0.25em] uppercase transition-colors text-base md:text-[1.2rem]"
          style={{ color: '#1F1208' }}
        >
          ASra
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-4 md:gap-6 flex-1 min-w-0">
          {isHome ? (
            <>
              {/* Desktop links */}
              <ul className="hidden md:flex flex-wrap gap-x-4 lg:gap-x-7 text-sm font-medium tracking-widest uppercase items-center font-cinzel">
                <li>
                  <a href="#home" className="transition-colors" style={{ color: 'rgba(31,18,8,0.7)' }}
                    onMouseEnter={e=>(e.currentTarget.style.color='#C27B20')}
                    onMouseLeave={e=>(e.currentTarget.style.color='rgba(31,18,8,0.7)')}>
                    {t('nav.home')}
                  </a>
                </li>
                <li>
                  <Link to="/about" className="transition-colors" style={{ color: 'rgba(31,18,8,0.7)' }}
                    onMouseEnter={e=>(e.currentTarget.style.color='#C27B20')}
                    onMouseLeave={e=>(e.currentTarget.style.color='rgba(31,18,8,0.7)')}>
                    {t('nav.about')}
                  </Link>
                </li>
                <li>
                  <a href="#truth" className="transition-colors" style={{ color: 'rgba(31,18,8,0.7)' }}
                    onMouseEnter={e=>(e.currentTarget.style.color='#C27B20')}
                    onMouseLeave={e=>(e.currentTarget.style.color='rgba(31,18,8,0.7)')}>
                    {t('nav.truth')}
                  </a>
                </li>
                <li>
                  <Link to="/record-of-soul" className="transition-colors" style={{ color: 'rgba(31,18,8,0.7)' }}
                    onMouseEnter={e=>(e.currentTarget.style.color='#C27B20')}
                    onMouseLeave={e=>(e.currentTarget.style.color='rgba(31,18,8,0.7)')}>
                    {t('nav.record')}
                  </Link>
                </li>
                <li>
                  <Link to="/spirit-medicine" className="transition-colors" style={{ color: 'rgba(31,18,8,0.7)' }}
                    onMouseEnter={e=>(e.currentTarget.style.color='#C27B20')}
                    onMouseLeave={e=>(e.currentTarget.style.color='rgba(31,18,8,0.7)')}>
                    {t('nav.spirit')}
                  </Link>
                </li>
                <li>
                  <Link to="/our-achievements" className="transition-colors" style={{ color: 'rgba(31,18,8,0.7)' }}
                    onMouseEnter={e=>(e.currentTarget.style.color='#C27B20')}
                    onMouseLeave={e=>(e.currentTarget.style.color='rgba(31,18,8,0.7)')}>
                    {t('nav.achievements')}
                  </Link>
                </li>
                <li>
                  <a href="#join" className="transition-colors" style={{ color: '#C27B20', borderBottom: '1px solid rgba(194,123,32,0.4)', paddingBottom: '1px' }}
                    onMouseEnter={e=>(e.currentTarget.style.color='#8B5413')}
                    onMouseLeave={e=>(e.currentTarget.style.color='#C27B20')}>
                    {t('nav.join')}
                  </a>
                </li>
              </ul>
              {/* Mobile hamburger */}
              <button
                type="button"
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-md border transition-colors"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMobileOpen(v => !v)}
                style={{ borderColor: 'rgba(31,18,8,0.2)', color: '#3D2510' }}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </>
          ) : (
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 justify-end">
              {location.pathname !== '/about' && (
                <Link
                  to="/about"
                  className="font-cinzel text-sm tracking-widest uppercase transition-colors hidden md:block"
                  style={{ color: 'rgba(31,18,8,0.6)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C27B20')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(31,18,8,0.6)')}
                >
                  {t('nav.about')}
                </Link>
              )}
              {location.pathname !== '/founder-story' && (
                <Link
                  to="/founder-story"
                  className="font-cinzel text-sm tracking-widest uppercase transition-colors hidden lg:block"
                  style={{ color: 'rgba(31,18,8,0.55)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#1F1208')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(31,18,8,0.55)')}
                >
                  {t('nav.founderStory')}
                </Link>
              )}
              {location.pathname !== '/our-achievements' && (
                <Link
                  to="/our-achievements"
                  className="font-cinzel text-sm tracking-widest uppercase transition-colors hidden md:block"
                  style={{ color: 'rgba(31,18,8,0.65)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C27B20')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(31,18,8,0.65)')}
                >
                  {t('nav.achievements')}
                </Link>
              )}
              <Link
                to="/"
                className="font-cinzel text-sm font-semibold tracking-widest uppercase hover:text-[#C27B20] transition-colors"
                style={{ color: 'rgba(31,18,8,0.65)' }}
              >
                {t('nav.back')}
              </Link>
            </div>
          )}
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Mobile drawer — home page only */}
      {isHome && mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col md:hidden"
          style={{ background: 'rgba(251,246,238,0.98)', paddingTop: '4.5rem' }}
          onClick={closeMobile}
        >
          <nav
            className="flex flex-col items-center gap-1 py-8 px-6 overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <a
              href="#home"
              onClick={closeMobile}
              className="w-full text-center font-cinzel text-base uppercase tracking-[0.3em] py-4 border-b transition-colors"
              style={{ borderColor: 'rgba(31,18,8,0.1)', color: '#1F1208' }}
            >
              {t('nav.home')}
            </a>
            <Link
              to="/about"
              onClick={closeMobile}
              className="w-full text-center font-cinzel text-base uppercase tracking-[0.3em] py-4 border-b transition-colors"
              style={{ borderColor: 'rgba(31,18,8,0.1)', color: '#1F1208' }}
            >
              {t('nav.about')}
            </Link>
            <a
              href="#truth"
              onClick={closeMobile}
              className="w-full text-center font-cinzel text-base uppercase tracking-[0.3em] py-4 border-b transition-colors"
              style={{ borderColor: 'rgba(31,18,8,0.1)', color: '#1F1208' }}
            >
              {t('nav.truth')}
            </a>
            <Link
              to="/record-of-soul"
              onClick={closeMobile}
              className="w-full text-center font-cinzel text-base uppercase tracking-[0.3em] py-4 border-b transition-colors"
              style={{ borderColor: 'rgba(31,18,8,0.1)', color: '#1F1208' }}
            >
              {t('nav.record')}
            </Link>
            <Link
              to="/spirit-medicine"
              onClick={closeMobile}
              className="w-full text-center font-cinzel text-base uppercase tracking-[0.3em] py-4 border-b transition-colors"
              style={{ borderColor: 'rgba(31,18,8,0.1)', color: '#1F1208' }}
            >
              {t('nav.spirit')}
            </Link>
            <Link
              to="/our-achievements"
              onClick={closeMobile}
              className="w-full text-center font-cinzel text-base uppercase tracking-[0.3em] py-4 border-b transition-colors"
              style={{ borderColor: 'rgba(31,18,8,0.1)', color: '#1F1208' }}
            >
              {t('nav.achievements')}
            </Link>
            <a
              href="#join"
              onClick={closeMobile}
              className="w-full text-center font-cinzel text-base uppercase tracking-[0.3em] py-4 transition-colors"
              style={{ color: '#C27B20' }}
            >
              {t('nav.join')}
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
