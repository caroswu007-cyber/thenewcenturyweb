import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center transition-all">
      <Link to="/" className="text-2xl font-serif font-bold text-accent tracking-widest drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]">
        SAA
      </Link>
      
      {isHome ? (
        <>
          <ul className="hidden md:flex space-x-8 text-sm font-semibold tracking-widest uppercase items-center">
            <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
            <li><a href="#introduction" className="hover:text-accent transition-colors">Introduction</a></li>
            <li><a href="#truth" className="hover:text-accent transition-colors">The Truth</a></li>
            <li><Link to="/record-of-soul" className="hover:text-accent transition-colors">Record of Soul</Link></li>
            <li><a href="#achievements" className="hover:text-accent transition-colors">Achievements</a></li>
            <li><a href="#join" className="hover:text-accent transition-colors">Join</a></li>
          </ul>
          <div className="md:hidden text-accent text-sm font-bold tracking-widest">
            MENU
          </div>
        </>
      ) : (
        <Link to="/" className="text-accent text-xs md:text-sm font-semibold tracking-widest uppercase hover:text-white transition-colors">
          &larr; Back to Home
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
