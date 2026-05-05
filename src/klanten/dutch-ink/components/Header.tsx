import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    const fullPath = config.basePath + path;
    if (path === '/') {
      return location.pathname === config.basePath || location.pathname === config.basePath + '/';
    }
    return location.pathname.startsWith(fullPath);
  };

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{ backgroundColor: config.colors.achtergrond, borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={config.basePath + "/"} className="flex items-center gap-3">
            {config.logo ? (
              <img src={config.logo} alt={config.naam} className="h-9 w-auto" />
            ) : (
              <div className="flex flex-col leading-none">
                <span
                  className="text-xl font-black tracking-wider uppercase"
                  style={{ color: config.colors.tekst }}
                >
                  {config.naam}
                </span>
                <span
                  className="text-[9px] font-bold tracking-[0.25em] uppercase"
                  style={{ color: config.colors.primary }}
                >
                  {config.tagline}
                </span>
              </div>
            )}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className="text-sm font-medium tracking-wide uppercase transition-colors"
                style={{
                  color: isActive(link.path) ? config.colors.primary : 'rgba(255,255,255,0.65)',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={config.basePath + "/contact"}
              className="px-5 py-2 text-sm font-bold uppercase tracking-wider rounded transition-opacity hover:opacity-90"
              style={{ backgroundColor: config.colors.primary, color: '#fff' }}
            >
              Walk-in Welkom
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="block w-5 h-0.5 bg-white" />
            <span className="block w-5 h-0.5 bg-white" />
            <span className="block w-5 h-0.5 bg-white" />
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav
            className="md:hidden border-t py-4 flex flex-col gap-1"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          >
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium uppercase tracking-wide transition-colors"
                style={{
                  color: isActive(link.path) ? config.colors.primary : 'rgba(255,255,255,0.7)',
                  borderLeft: isActive(link.path) ? `3px solid ${config.colors.primary}` : '3px solid transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={config.basePath + "/contact"}
              onClick={() => setMenuOpen(false)}
              className="mx-4 mt-2 py-3 text-sm font-bold uppercase tracking-wider text-center rounded"
              style={{ backgroundColor: config.colors.primary, color: '#fff' }}
            >
              Walk-in Welkom
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
