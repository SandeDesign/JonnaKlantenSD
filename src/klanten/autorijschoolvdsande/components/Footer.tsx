import { Link } from 'react-router-dom';
import { config } from '../config';

const c = config.colors;

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: `linear-gradient(135deg, ${c.accent} 0%, ${c.gradientFrom} 100%)` }} className="text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Branding */}
          <div>
            <img
              src={config.logoUrl}
              alt="Autorijschool van der Sande"
              className="h-16 w-auto mb-4"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-white/60 text-sm leading-relaxed">{config.tagline}</p>
            <p className="text-white/40 text-xs mt-2">{config.contact.address}</p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-white uppercase tracking-wider">Navigatie</h4>
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
            <h4 className="font-bold text-sm mb-4 text-white uppercase tracking-wider">Contact</h4>
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
              <li className="pt-1 text-white/40 text-xs">Lessen op afspraak, ma–za</li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.35)' }}
        >
          <p>© {year} Autorijschool van der Sande. Alle rechten voorbehouden.</p>
          <p>
            Website door{' '}
            <a href="https://sandedesign.nl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              SandeDesign
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
