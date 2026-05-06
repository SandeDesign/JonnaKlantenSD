import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();
  const p = config.colors.primary;

  return (
    <footer style={{ backgroundColor: config.colors.primary }} className="text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Branding */}
          <div>
            <img
              src={config.logoUrl}
              alt="Autorijschool van der Sande"
              className="h-16 w-auto mb-3 brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed mt-2">{config.tagline}</p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Navigatie</h4>
            <ul className="space-y-2">
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={config.basePath + link.path}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>{config.contact.address}</li>
              <li>
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors">
                  {config.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {year} Autorijschool van der Sande. Alle rechten voorbehouden.</p>
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
