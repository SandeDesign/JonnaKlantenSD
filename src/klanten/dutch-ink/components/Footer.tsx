import { Link } from 'react-router-dom';
import { config } from '../config';

export const Footer = () => {
  const jaar = new Date().getFullYear();
  const hoofd = config.vestigingen[0];

  return (
    <footer style={{ backgroundColor: '#080808', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Branding */}
          <div>
            <div className="mb-4">
              {config.logo ? (
                <img src={config.logo} alt={config.naam} className="h-10 w-auto" />
              ) : (
                <div className="flex flex-col leading-none">
                  <span className="text-2xl font-black tracking-wider uppercase text-white">
                    {config.naam}
                  </span>
                  <span
                    className="text-[10px] font-bold tracking-[0.25em] uppercase"
                    style={{ color: config.colors.primary }}
                  >
                    {config.tagline}
                  </span>
                </div>
              )}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              {config.beschrijving}
            </p>
          </div>

          {/* Navigatie */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: config.colors.primary }}
            >
              Navigatie
            </h4>
            <ul className="space-y-2.5">
              {config.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: config.colors.primary }}
            >
              Contact
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <li>{hoofd.adres}</li>
              {hoofd.telefoon && (
                <li>
                  <a href={`tel:${hoofd.telefoon}`} className="hover:text-white transition-colors">
                    {hoofd.telefoon}
                  </a>
                </li>
              )}
              {hoofd.whatsapp && (
                <li>
                  <a
                    href={`https://wa.me/31${hoofd.whatsapp.replace(/^06/, '6').replace(/\D/g, '')}`}
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp: {hoofd.whatsapp}
                  </a>
                </li>
              )}
              <li>
                <a href={`mailto:${config.email}`} className="hover:text-white transition-colors">
                  {config.email}
                </a>
              </li>
              <li className="pt-2 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Di–Zo vanaf 11:00 · Walk-in welkom
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.25)' }}
        >
          <p>© {jaar} {config.naam}. Alle rechten voorbehouden.</p>
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
