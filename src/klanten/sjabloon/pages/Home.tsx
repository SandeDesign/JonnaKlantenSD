import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Home = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative min-h-[88vh] flex items-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-80">
              {config.tagline}
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              {config.hero.title}{' '}
              <span style={{ color: p }}>{config.hero.highlight}</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              {config.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={config.basePath + config.hero.ctaLink}
                className="px-8 py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90 shadow-lg"
                style={{ backgroundColor: p }}
              >
                {config.hero.cta}
              </Link>
              <Link
                to={config.basePath + config.hero.ctaSecondaryLink}
                className="px-8 py-4 font-semibold text-white border-2 border-white rounded-xl hover:bg-white hover:text-gray-900 transition-colors"
              >
                {config.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom ons */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: config.colors.text }}>
              Waarom kiezen voor {config.name}?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Wij onderscheiden ons door kwaliteit, snelheid en persoonlijk contact.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.features.map((f, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.services.slice(0, 3).map((s) => (
              <div
                key={s.id}
                className="border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: config.colors.text }}>
                  {s.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{s.description}</p>
                {s.priceLabel && (
                  <p className="font-semibold text-sm" style={{ color: p }}>
                    {s.priceLabel}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={config.basePath + "/diensten"}
              className="inline-block px-8 py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: p }}
            >
              Alle Diensten Bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: config.colors.text }}>
            Wat onze klanten zeggen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-lg" style={{ color: p }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-semibold" style={{ color: config.colors.text }}>{t.name}</p>
                  {t.role && <p className="text-sm text-gray-400">{t.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar om te beginnen?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-xl mx-auto">
            Neem vandaag nog contact op voor een vrijblijvend gesprek.
          </p>
          <Link
            to={config.basePath + "/contact"}
            className="inline-block px-10 py-4 bg-white font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            style={{ color: p }}
          >
            Neem Contact Op
          </Link>
        </div>
      </section>
    </Layout>
  );
};
