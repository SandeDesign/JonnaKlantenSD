import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const c = config.colors;

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname.startsWith(config.basePath + path);

  return (
    <header
      className="sticky top-0 z-50 shadow-md"
      style={{ background: `linear-gradient(135deg, ${c.gradientFrom} 0%, ${c.gradientMid} 100%)` }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo — wit op paarse achtergrond */}
          <Link
            to={config.basePath + '/'}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src={config.logoUrl}
              alt="Autorijschool van der Sande"
              className="h-12 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <div className="hidden sm:block leading-tight">
              <p className="text-xs font-bold text-white/90 tracking-wide">Autorijschool</p>
              <p className="text-xs font-bold text-white tracking-wide">van der Sande</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className="text-sm font-medium transition-all whitespace-nowrap pb-0.5"
                style={
                  isActive(link.path)
                    ? { color: 'white', borderBottom: '2px solid white' }
                    : { color: 'rgba(255,255,255,0.75)' }
                }
                onMouseEnter={e => { if (!isActive(link.path)) e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { if (!isActive(link.path)) e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav
            className="lg:hidden border-t py-4 flex flex-col gap-1"
            style={{ borderColor: 'rgba(255,255,255,0.2)' }}
          >
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium rounded-lg transition-colors"
                style={
                  isActive(link.path)
                    ? { backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }
                    : { color: 'rgba(255,255,255,0.8)' }
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
