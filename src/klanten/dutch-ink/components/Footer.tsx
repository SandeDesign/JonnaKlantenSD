import { config } from '../config';

const gold = config.colors.primary;

const IconInstagram = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);
const IconFacebook = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const IconTikTok = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);
const IconYouTube = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
);
const IconGift = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="20 12 20 22 4 22 4 12"/>
    <rect x="2" y="7" width="20" height="5"/>
    <line x1="12" y1="22" x2="12" y2="7"/>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
  </svg>
);

export const Footer = () => {
  const jaar = new Date().getFullYear();
  const hoofd = config.vestigingen[0];

  return (
    <footer
      style={{
        background: 'linear-gradient(160deg, #2D1F00 0%, #4A3500 40%, #3A2800 70%, #2D1F00 100%)',
        borderTop: '1px solid rgba(212,160,23,0.2)',
      }}
    >
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Branding + contact */}
          <div>
            <img
              src="https://dutchink.nl/wp-content/uploads/2025/09/Logo_DutchInk_goud.png"
              alt="Dutch Ink"
              className="h-24 w-auto mb-5"
            />
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(0,0,0,0.75)' }}>
              <li className="font-medium" style={{ color: '#1a1200' }}>{hoofd.adres}</li>
              {hoofd.telefoon && (
                <li>
                  <a
                    href={`tel:${hoofd.telefoon}`}
                    className="hover:underline flex items-center gap-1.5"
                    style={{ color: '#1a1200' }}
                  >
                    📞 {hoofd.telefoon}
                  </a>
                </li>
              )}
              {hoofd.whatsapp && (
                <li>
                  <a
                    href={`https://wa.me/31${hoofd.whatsapp.replace(/^06/, '6').replace(/\D/g, '')}`}
                    className="hover:underline flex items-center gap-1.5"
                    style={{ color: '#1a1200' }}
                  >
                    💬 {hoofd.whatsapp}
                  </a>
                </li>
              )}
              <li>
                <a href={`mailto:${config.email}`} className="hover:underline flex items-center gap-1.5" style={{ color: '#1a1200' }}>
                  ✉ {config.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Openingstijden */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-widest mb-4" style={{ color: '#1a1200' }}>
              Openingstijden
            </h4>
            <p className="text-sm mb-3" style={{ color: '#1a1200' }}>
              Dutch Ink is <strong>6 dagen per week geopend</strong>. Van dinsdag tot en met
              zaterdag van <strong>12:00 tot 20:00</strong> en op zondag van{' '}
              <strong>12:00 tot 18:00</strong>. We sluiten echter pas{' '}
              <strong>als iedereen gedaan is!</strong>
            </p>
            <p className="text-sm" style={{ color: '#2a1800' }}>
              Onze piercer is alleen aanwezig op vrijdag en zondag van{' '}
              <strong>11:00 tot 17:00</strong>. Wisselen van piercings? Dat kan deze dagen
              tussen <strong>17:00 en 18:00 uur!</strong>
            </p>
          </div>

          {/* Volg ons + Kadobon */}
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-widest mb-4" style={{ color: '#1a1200' }}>
                Volg ons
              </h4>
              <div className="flex items-center gap-4">
                {[
                  { href: config.socials.instagram, Icon: IconInstagram },
                  { href: config.socials.facebook, Icon: IconFacebook },
                  { href: config.socials.tiktok, Icon: IconTikTok },
                  { href: config.socials.youtube, Icon: IconYouTube },
                ].map(({ href, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-70"
                    style={{ color: '#1a1200' }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-widest mb-4" style={{ color: '#1a1200' }}>
                Dutch Ink Kadobon
              </h4>
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center border-2"
                style={{ borderColor: '#1a1200', color: '#1a1200' }}
              >
                <IconGift />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-5 flex flex-col md:flex-row justify-center items-center gap-3 text-xs"
          style={{ borderTop: '1px solid rgba(0,0,0,0.15)', color: 'rgba(0,0,0,0.5)' }}
        >
          <span>© Copyright – {config.naam}</span>
          <span className="hidden md:inline">|</span>
          <a href="/" className="hover:underline" style={{ color: 'rgba(0,0,0,0.6)' }}>Home</a>
          <span>|</span>
          <a href="/" className="hover:underline" style={{ color: 'rgba(0,0,0,0.6)' }}>Gebruiksvoorwaarden</a>
          <span className="hidden md:inline">|</span>
          <span>
            Website door{' '}
            <a href="https://sandedesign.nl" target="_blank" rel="noopener noreferrer" className="hover:underline">
              SandeDesign
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
