import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { config } from '../config';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    const fullPath = config.basePath + path;
    return location.pathname.startsWith(fullPath);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={config.basePath + '/over-van-der-sande'} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src={config.logoUrl}
              alt="Autorijschool van der Sande"
              className="h-12 w-auto"
            />
            <div className="hidden sm:block leading-tight">
              <p className="text-xs font-bold" style={{ color: config.colors.primary }}>Autorijschool</p>
              <p className="text-xs font-bold" style={{ color: config.colors.primary }}>van der Sande</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={config.basePath + link.path}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
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
          </nav>
        )}
      </div>
    </header>
  );
};
