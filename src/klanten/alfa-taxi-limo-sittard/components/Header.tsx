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
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 py-3">
          <Link to={config.basePath + '/'} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xl font-black"
              style={{ backgroundColor: config.colors.primary }}
            >
              🚕
            </div>
            <div>
              <p className="text-base font-black leading-tight" style={{ color: config.colors.text }}>
                Alfa Taxi
              </p>
              <p className="text-xs font-medium text-gray-400 leading-tight">Limo Sittard</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'border-b-2 pb-0.5'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                style={
                  isActive(link.path)
                    ? { color: config.colors.primary, borderColor: config.colors.primary }
                    : {}
                }
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="px-5 py-2.5 text-sm font-bold text-white rounded-xl transition-opacity hover:opacity-90 shadow-sm"
              style={{ backgroundColor: config.colors.primary }}
            >
              📞 Bel Nu
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
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
          <nav className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-1">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.path) ? 'text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
                style={isActive(link.path) ? { backgroundColor: config.colors.primary } : {}}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${config.contact.phone}`}
              className="mx-4 mt-2 px-4 py-2 text-sm font-bold text-white rounded-xl text-center"
              style={{ backgroundColor: config.colors.primary }}
            >
              📞 Bel Nu
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
