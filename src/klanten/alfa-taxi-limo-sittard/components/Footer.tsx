import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xl font-black"
                style={{ backgroundColor: config.colors.primary }}
              >
                🚕
              </div>
              <div>
                <p className="text-base font-black leading-tight">Alfa Taxi</p>
                <p className="text-xs text-gray-400 leading-tight">Limo Sittard</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{config.tagline}</p>
            <div className="mt-4 flex gap-3">
              <a
                href={`tel:${config.contact.phone}`}
                className="px-4 py-2 text-sm font-bold text-white rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: config.colors.primary }}
              >
                📞 {config.contact.phone}
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Navigatie</h4>
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

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
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
              <li className="pt-1">
                <span className="text-gray-500">Ma–Zo: </span>{config.contact.hours.weekday}
              </li>
              <li>
                <span className="text-gray-500">KVK: </span>{config.contact.kvk}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
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
