import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const DARK = '#0B1D3E';
const DARK2 = '#0F2448';
const CARD = 'rgba(255,255,255,0.05)';
const BORDER = 'rgba(255,255,255,0.08)';
const MUTED = 'rgba(255,255,255,0.6)';

export const Home = () => {
  const accent = config.colors.accent;

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative min-h-[92vh] flex items-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(120deg, rgba(11,29,62,0.90) 55%, rgba(11,29,62,0.55) 100%)' }}
        />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl">
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.25em] mb-6 px-3 py-1 rounded-full"
              style={{ backgroundColor: `${accent}20`, color: accent }}
            >
              {config.tagline}
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6 text-white">
              Altijd op tijd,<br />
              Altijd comfortabel
            </h1>
            <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-lg" style={{ color: MUTED }}>
              {config.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={config.basePath + config.hero.ctaLink}
                className="px-8 py-4 font-bold rounded-xl transition-all hover:scale-105 shadow-lg text-black text-base"
                style={{ backgroundColor: accent }}
              >
                {config.hero.cta}
              </Link>
              <Link
                to={config.basePath + config.hero.ctaSecondaryLink}
                className="px-8 py-4 font-semibold rounded-xl border transition-all hover:bg-white hover:text-gray-900 text-white text-base"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}
              >
                {config.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>

        {/* Stat-strip onderin hero */}
        <div
          className="absolute bottom-0 left-0 right-0 hidden md:block"
          style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)' }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 divide-x py-4" style={{ divideColor: BORDER }}>
              {[
                { value: '24/7', label: 'Bereikbaar' },
                { value: 'Vast tarief', label: 'Geen verrassingen' },
                { value: '100%', label: 'Gecertificeerde chauffeurs' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center px-6">
                  <p className="font-extrabold text-lg" style={{ color: accent }}>{value}</p>
                  <p className="text-xs" style={{ color: MUTED }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Alfa Taxi */}
      <section className="py-24" style={{ backgroundColor: DARK2 }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accent }}>
              Onze beloftes
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Waarom Alfa Taxi?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: MUTED }}>
              Wij rijden al jaren betrouwbaar en veilig voor particulieren en zakelijke klanten door heel Nederland.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {config.features.map((f, i) => (
              <div
                key={i}
                className="flex gap-5 p-7 rounded-2xl transition-all hover:scale-[1.01]"
                style={{
                  backgroundColor: CARD,
                  border: `1px solid ${BORDER}`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: `${accent}18`, border: `1px solid ${accent}30` }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarieven preview */}
      <section className="py-24" style={{ backgroundColor: DARK }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accent }}>
              Transparant
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Vaste Tarieven
            </h2>
            <p className="mt-4 max-w-lg mx-auto text-sm" style={{ color: MUTED }}>
              Geen verborgen kosten. U weet vooraf altijd wat de rit kost.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto mb-12">
            {[
              { label: 'Starttarief', value: '€ 3,50' },
              { label: 'Per km (dag)', value: '€ 2,35' },
              { label: 'Per km (nacht)', value: '€ 3,00' },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="text-center p-8 rounded-2xl"
                style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}
              >
                <p className="text-4xl font-extrabold mb-2" style={{ color: accent }}>
                  {value}
                </p>
                <p className="text-xs font-medium uppercase tracking-wide" style={{ color: MUTED }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to={config.basePath + '/tarieven'}
              className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl transition-all hover:scale-105 text-black"
              style={{ backgroundColor: accent }}
            >
              Alle tarieven bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24" style={{ backgroundColor: DARK2 }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accent }}>
              Ervaringen
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Wat klanten zeggen
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map((t) => (
              <div
                key={t.id}
                className="p-7 rounded-2xl flex flex-col"
                style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: accent }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-5 italic" style={{ color: MUTED }}>
                  "{t.text}"
                </p>
                <p className="font-semibold text-sm text-white">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ backgroundColor: DARK }}>
        <div className="container mx-auto px-4">
          <div
            className="max-w-2xl mx-auto p-12 rounded-3xl"
            style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Klaar voor uw rit?
            </h2>
            <p className="mb-10 max-w-md mx-auto text-sm leading-relaxed" style={{ color: MUTED }}>
              Boek eenvoudig online of bel ons direct. Wij staan 24/7 voor u klaar.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to={config.basePath + '/boeken'}
                className="px-10 py-4 font-bold rounded-xl transition-all hover:scale-105 text-black"
                style={{ backgroundColor: accent }}
              >
                Direct Boeken
              </Link>
              <a
                href={`tel:${config.contact.phone}`}
                className="px-10 py-4 font-bold rounded-xl border-2 transition-all hover:opacity-80 text-white"
                style={{ borderColor: 'rgba(255,255,255,0.2)' }}
              >
                {config.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
