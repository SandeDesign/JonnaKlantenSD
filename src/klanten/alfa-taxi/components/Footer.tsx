import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#060E20' }} className="text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + omschrijving */}
          <div>
            <img
              src={config.logo}
              alt={config.name}
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {config.tagline}
            </p>
          </div>

          {/* Navigatie */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: config.colors.accent }}>Navigatie</h4>
            <ul className="space-y-2">
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={config.basePath + link.path}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: config.colors.accent }}>Contact</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <li>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {config.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${config.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {config.contact.email}
                </a>
              </li>
              <li className="pt-1">
                24/7 bereikbaar
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
          style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)' }}
        >
          <p>© {year} {config.name}. Alle rechten voorbehouden.</p>
          <p>
            Website door{' '}
            <a
              href="https://sandedesign.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              SandeDesign
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
