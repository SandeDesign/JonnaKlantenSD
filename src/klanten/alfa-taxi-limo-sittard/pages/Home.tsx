import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Home = () => {
  const p = config.colors.primary;

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

        {/* Floating phone bar */}
        <div className="absolute top-6 right-6 z-10 hidden md:flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2">
          <span className="text-white text-sm">📞</span>
          <a href={`tel:${config.contact.phone}`} className="text-white font-bold text-sm hover:underline">
            {config.contact.phone}
          </a>
          <span className="text-white/50 text-xs">— 24/7</span>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: `${p}cc` }}
            >
              <span>🚕</span>
              <span>Sittard-Geleen & Omgeving — 24/7 Beschikbaar</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              {config.hero.title}{' '}
              <span style={{ color: p }}>{config.hero.highlight}</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-xl">
              {config.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={config.basePath + config.hero.ctaLink}
                className="px-8 py-4 font-bold text-white rounded-xl transition-opacity hover:opacity-90 shadow-xl text-lg"
                style={{ backgroundColor: p }}
              >
                {config.hero.cta} →
              </Link>
              <a
                href={`tel:${config.contact.phone}`}
                className="px-8 py-4 font-bold text-white border-2 border-white rounded-xl hover:bg-white hover:text-gray-900 transition-colors text-lg"
              >
                📞 Direct Bellen
              </a>
            </div>

            {/* USP row */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/20">
              {['✅ Vaste prijzen', '🕐 24/7 beschikbaar', '✈️ Alle luchthavens', '💳 Meerdere betaalmethoden'].map(
                (usp) => (
                  <span key={usp} className="text-sm text-gray-300 font-medium">
                    {usp}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick book strip */}
      <div style={{ backgroundColor: p }} className="py-5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white font-bold text-lg">Snel een rit boeken?</div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="px-6 py-2.5 bg-white font-bold rounded-xl text-sm transition-opacity hover:opacity-90"
              style={{ color: p }}
            >
              📞 Bel {config.contact.phone}
            </a>
            <Link
              to={config.basePath + '/tarieven'}
              className="px-6 py-2.5 border-2 border-white text-white font-bold rounded-xl text-sm hover:bg-white/10 transition-colors"
            >
              Online Boeken
            </Link>
          </div>
        </div>
      </div>

      {/* Waarom ons */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: config.colors.text }}>
              Waarom kiezen voor {config.name}?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Al meer dan 10 jaar vertrouwde naam in de regio Sittard-Geleen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.features.map((f, i) => (
              <div
                key={i}
                className="text-center p-7 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: config.colors.text }}>
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: config.colors.text }}>
              Onze Diensten
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">{config.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.services.map((s) => (
              <div
                key={s.id}
                className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: config.colors.text }}>
                  {s.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-3">{s.description}</p>
                <span className="text-sm font-semibold" style={{ color: p }}>
                  {s.priceLabel}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={config.basePath + '/tarieven'}
              className="inline-block px-8 py-4 font-bold text-white rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: p }}
            >
              Tarieven Bekijken & Boeken →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: config.colors.text }}>
            Wat onze klanten zeggen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-lg" style={{ color: p }}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-semibold" style={{ color: config.colors.text }}>
                    {t.name}
                  </p>
                  {t.role && <p className="text-sm text-gray-400">{t.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: config.colors.text }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar voor uw rit?</h2>
          <p className="text-xl mb-8 opacity-80 max-w-xl mx-auto">
            Bel direct of boek online. Wij zijn dag en nacht bereikbaar voor u.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-block px-10 py-4 font-bold rounded-xl hover:opacity-90 transition-opacity text-lg"
              style={{ backgroundColor: p, color: 'white' }}
            >
              📞 {config.contact.phone}
            </a>
            <Link
              to={config.basePath + '/tarieven'}
              className="inline-block px-10 py-4 bg-white font-bold rounded-xl hover:bg-gray-100 transition-colors text-lg"
              style={{ color: config.colors.text }}
            >
              Online Boeken
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
