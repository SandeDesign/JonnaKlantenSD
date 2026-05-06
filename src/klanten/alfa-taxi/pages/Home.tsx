import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Home = () => {
  const accent = config.colors.accent;
  const primary = config.colors.primary;

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(11,29,62,0.78)' }} />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: accent }}
            >
              {config.tagline}
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
              {config.hero.title}
            </h1>
            <p className="text-xl mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {config.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={config.basePath + config.hero.ctaLink}
                className="px-8 py-4 font-bold rounded-xl transition-opacity hover:opacity-90 shadow-lg text-black"
                style={{ backgroundColor: accent }}
              >
                {config.hero.cta}
              </Link>
              <Link
                to={config.basePath + config.hero.ctaSecondaryLink}
                className="px-8 py-4 font-semibold rounded-xl border-2 hover:bg-white hover:text-gray-900 transition-colors text-white"
                style={{ borderColor: 'rgba(255,255,255,0.5)' }}
              >
                {config.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: primary }}>
              Waarom Alfa Taxi?
            </h2>
            <p className="max-w-xl mx-auto text-gray-500">
              Wij rijden al jaren betrouwbaar en veilig voor particulieren en zakelijke klanten door heel Nederland.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.features.map((f, i) => (
              <div
                key={i}
                className="text-center p-7 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5"
                  style={{ backgroundColor: `${accent}20` }}
                >
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: primary }}>
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarieven preview */}
      <section className="py-20" style={{ backgroundColor: primary }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Transparante Tarieven
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Geen verborgen kosten. U weet vooraf altijd wat de rit kost.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { label: 'Starttarief', value: '€ 3,50' },
              { label: 'Per km (dag)', value: '€ 2,35' },
              { label: 'Per km (nacht)', value: '€ 3,00' },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="text-center p-7 rounded-2xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
              >
                <p className="text-3xl font-extrabold mb-2" style={{ color: accent }}>
                  {value}
                </p>
                <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to={config.basePath + '/tarieven'}
              className="inline-block px-8 py-4 font-bold rounded-xl transition-opacity hover:opacity-90 text-black"
              style={{ backgroundColor: accent }}
            >
              Alle Tarieven Bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: primary }}>
            Wat klanten zeggen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-lg" style={{ color: accent }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 leading-relaxed text-sm">"{t.text}"</p>
                <p className="font-semibold text-sm" style={{ color: primary }}>{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 text-center" style={{ backgroundColor: accent }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Klaar voor uw rit?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(0,0,0,0.7)' }}>
            Boek eenvoudig online of bel ons direct. Wij staan 24/7 voor u klaar.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to={config.basePath + '/boeken'}
              className="px-10 py-4 font-bold rounded-xl transition-opacity hover:opacity-90 text-white"
              style={{ backgroundColor: primary }}
            >
              Direct Boeken
            </Link>
            <a
              href={`tel:${config.contact.phone}`}
              className="px-10 py-4 font-bold rounded-xl border-2 border-black hover:bg-black hover:text-white transition-colors text-black"
            >
              {config.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
