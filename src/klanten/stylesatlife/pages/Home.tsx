import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const titleFont = { fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 as const };
const bodyFont = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

export const Home = () => {
  const p = config.colors.primary;
  const s = config.colors.secondary;

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
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-5 opacity-70" style={bodyFont}>
              {config.tagline}
            </p>
            <h1 className="leading-none mb-6" style={{ ...titleFont, fontSize: 'clamp(2.8rem, 6vw, 4.5rem)' }}>
              {config.hero.title}
              <br />
              <span style={{ color: s }}>Cleanfirm Stylesatlife</span>
            </h1>
            <p className="text-lg text-gray-200 mb-10 leading-relaxed max-w-lg" style={bodyFont}>
              {config.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={config.basePath + config.hero.ctaLink}
                className="px-8 py-4 font-semibold text-white rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
                style={{ backgroundColor: p, ...bodyFont }}
              >
                {config.hero.cta}
              </Link>
              <Link
                to={config.basePath + config.hero.ctaSecondaryLink}
                className="px-8 py-4 font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white hover:text-gray-900 transition-all"
                style={bodyFont}
              >
                {config.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom ons */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: s, ...bodyFont }}>
              Waarom wij
            </p>
            <h2 className="text-3xl md:text-4xl mb-4" style={{ ...titleFont, color: config.colors.text }}>
              Wat maakt ons anders?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl border-t-4 bg-gray-50 hover:-translate-y-1 transition-all"
                style={{ borderTopColor: p }}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-base mb-2" style={{ ...titleFont, color: config.colors.text }}>
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={bodyFont}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten preview */}
      <section className="py-20" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: p, ...bodyFont }}>
              Onze diensten
            </p>
            <h2 className="text-3xl md:text-4xl mb-4" style={{ ...titleFont, color: config.colors.text }}>
              Wat wij voor u doen
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto" style={bodyFont}>{config.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.services.slice(0, 3).map((s_item) => (
              <div
                key={s_item.id}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div
                  className="text-2xl w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: config.colors.primaryLight, border: `1.5px solid ${p}30` }}
                >
                  {s_item.icon}
                </div>
                <h3 className="text-lg mb-2" style={{ ...titleFont, color: config.colors.text }}>
                  {s_item.name}
                </h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed" style={bodyFont}>{s_item.description}</p>
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: `${p}15`, color: p, ...bodyFont }}
                >
                  {s_item.priceLabel}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={config.basePath + '/diensten'}
              className="inline-block px-8 py-4 font-semibold text-white rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ backgroundColor: p, ...bodyFont }}
            >
              Alle diensten bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* Resultaten preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: s, ...bodyFont }}>
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl mb-4" style={{ ...titleFont, color: config.colors.text }}>
              Onze Resultaten
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {config.gallery.slice(0, 6).map((item) => (
              <div key={item.id} className="relative rounded-2xl overflow-hidden group aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-sm font-semibold px-4 pb-4" style={bodyFont}>
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={config.basePath + '/resultaten'}
              className="inline-block px-8 py-4 font-semibold text-white rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ backgroundColor: p, ...bodyFont }}
            >
              Alle resultaten bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: p, ...bodyFont }}>
              Reviews
            </p>
            <h2 className="text-3xl md:text-4xl" style={{ ...titleFont, color: config.colors.text }}>
              Wat onze klanten zeggen
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ backgroundColor: p }}
                />
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-base" style={{ color: p }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6" style={bodyFont}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: p, ...titleFont }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: config.colors.text, ...bodyFont }}>{t.name}</p>
                    {t.role && <p className="text-xs text-gray-400" style={bodyFont}>{t.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: s, ...bodyFont }}>
              Tips & Tricks
            </p>
            <h2 className="text-3xl md:text-4xl mb-4" style={{ ...titleFont, color: config.colors.text }}>
              Schoonmaaktips
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto" style={bodyFont}>
              Handige tips van onze experts voor een stralend schone woning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.tips.slice(0, 3).map((tip) => (
              <Link
                key={tip.id}
                to={config.basePath + '/tips/' + tip.id}
                className="group block rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="h-1.5" style={{ backgroundColor: p }} />
                <div className="p-7">
                  <div className="text-3xl mb-4">{tip.icon}</div>
                  <h3 className="text-base mb-3 leading-snug" style={{ ...titleFont, color: config.colors.text }}>
                    {tip.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5" style={bodyFont}>{tip.excerpt}</p>
                  <p className="text-xs font-semibold group-hover:underline" style={{ color: p, ...bodyFont }}>
                    {tip.readTime} lezen →
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={config.basePath + '/tips'}
              className="inline-block px-8 py-4 font-semibold text-white rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ backgroundColor: p, ...bodyFont }}
            >
              Alle tips bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: config.colors.text }}>
        <div className="container mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 opacity-50" style={bodyFont}>
            Klaar om te starten?
          </p>
          <h2 className="text-3xl md:text-4xl mb-5" style={titleFont}>
            Vlekkeloos schoon huis of kantoor?
          </h2>
          <p className="text-lg mb-10 opacity-70 max-w-xl mx-auto" style={bodyFont}>
            Maak een afspraak. Wij bevestigen binnen 1 werkdag.
          </p>
          <Link
            to={config.basePath + '/contact'}
            className="inline-block px-10 py-4 font-semibold rounded-xl hover:opacity-90 transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: s, color: config.colors.text, ...bodyFont }}
          >
            Afspraak Maken
          </Link>
        </div>
      </section>
    </Layout>
  );
};
