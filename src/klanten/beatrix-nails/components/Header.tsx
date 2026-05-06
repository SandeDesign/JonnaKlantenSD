import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';
import { Logo } from './Logo';

const BG = '#C2185B';
const ACTIVE_COLOR = '#FCE4EC';

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

  const navLinks = config.navigation.filter((l) => l.path !== '/contact');

  return (
    <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: BG }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo linkTo={config.basePath + '/'} size="md" variant="white" />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className="text-sm font-medium transition-colors pb-0.5"
                style={
                  isActive(link.path)
                    ? { color: ACTIVE_COLOR, borderBottom: `2px solid ${ACTIVE_COLOR}` }
                    : { color: 'rgba(255,255,255,0.82)' }
                }
                onMouseEnter={(e) => { if (!isActive(link.path)) e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { if (!isActive(link.path)) e.currentTarget.style.color = 'rgba(255,255,255,0.82)'; }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={config.basePath + '/contact'}
              className="px-5 py-2.5 text-sm font-semibold rounded-full transition-all shadow-sm"
              style={{ backgroundColor: 'white', color: BG }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ACTIVE_COLOR; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; }}
            >
              Afspraak Maken
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 transition-colors"
            style={{ color: 'white' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current" />
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav
            className="md:hidden border-t py-4 flex flex-col gap-1"
            style={{ borderColor: 'rgba(255,255,255,0.2)' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium rounded-xl transition-colors"
                style={
                  isActive(link.path)
                    ? { backgroundColor: 'rgba(255,255,255,0.15)', color: ACTIVE_COLOR }
                    : { color: 'rgba(255,255,255,0.82)' }
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={config.basePath + '/contact'}
              onClick={() => setMenuOpen(false)}
              className="mx-4 mt-2 px-4 py-3 text-sm font-semibold rounded-full text-center"
              style={{ backgroundColor: 'white', color: BG }}
            >
              Afspraak Maken
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
