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
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to={config.basePath + '/'}
            className="flex items-center gap-3 transition-opacity hover:opacity-85"
          >
            <img
              src="https://cleanfirm.net/wp-content/uploads/2020/07/cropped-bc318426-3415-472a-9dd6-9823b5fca7fe-1.jpeg"
              alt="Cleanfirm Stylesatlife logo"
              className="h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <p className="text-base font-bold leading-tight" style={{ color: config.colors.primary }}>
                Stylesatlife
              </p>
              <p className="text-xs leading-tight text-gray-400 font-medium">
                cleanfirm
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
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
            <Link
              to={config.basePath + '/contact'}
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: config.colors.primary }}
            >
              Afspraak Maken
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
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
          <nav className="lg:hidden border-t border-gray-100 py-4 flex flex-col gap-1">
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
            <Link
              to={config.basePath + '/contact'}
              onClick={() => setMenuOpen(false)}
              className="mx-4 mt-2 px-4 py-2 text-sm font-semibold text-white rounded-lg text-center transition-opacity hover:opacity-90"
              style={{ backgroundColor: config.colors.primary }}
            >
              Afspraak Maken
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
