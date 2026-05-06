import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();
  const p = config.colors.primary;

  return (
    <footer style={{ backgroundColor: config.colors.text }} className="text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="md:col-span-1">
            <img
              src="https://cleanfirm.net/wp-content/uploads/2020/07/cropped-bc318426-3415-472a-9dd6-9823b5fca7fe-1.jpeg"
              alt="Cleanfirm Stylesatlife"
              className="h-14 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">{config.tagline}</p>
            <p className="text-gray-500 text-xs mt-3">{config.contact.city}</p>
          </div>

          {/* Navigatie */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200 text-sm uppercase tracking-wide">Navigatie</h4>
            <ul className="space-y-2">
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={config.basePath + link.path}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200 text-sm uppercase tracking-wide">Diensten</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {config.services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link
                    to={config.basePath + '/diensten'}
                    className="hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>{config.contact.city}</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors">
                  {config.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
              <li className="pt-1 text-xs space-y-0.5">
                <p><span className="text-gray-500">Ma–Vr: </span>{config.contact.hours.weekday}</p>
                <p><span className="text-gray-500">Zaterdag: </span>{config.contact.hours.saturday}</p>
                <p><span className="text-gray-500">Zondag: </span>{config.contact.hours.sunday}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {year} {config.name}. Alle rechten voorbehouden.</p>
          <p>
            Website door{' '}
            <a
              href="https://sandedesign.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              style={{ color: config.colors.secondary }}
            >
              SandeDesign
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
