import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Home = () => {
  const c = config.colors;

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${config.hero.afbeelding})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.70) 60%, rgba(0,0,0,0.50) 100%)' }} />

        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <p
              className="inline-block text-xs font-bold uppercase tracking-[0.3em] mb-6 px-3 py-1.5 rounded"
              style={{ color: c.primary, backgroundColor: c.primaryLight, border: `1px solid ${c.primary}40` }}
            >
              {config.tagline}
            </p>
            <h1
              className="text-6xl md:text-8xl font-black uppercase leading-none mb-6"
              style={{ color: c.tekst }}
            >
              {config.hero.titel.split('\n').map((line, i) => (
                <span key={i}>
                  {i === 1 ? <span style={{ color: c.primary }}>{line}</span> : line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>
            <p className="text-lg max-w-xl mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {config.hero.subtitel}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={config.basePath + config.hero.ctaLink}
                className="px-8 py-4 font-bold uppercase tracking-wider text-white rounded transition-opacity hover:opacity-90"
                style={{ backgroundColor: c.primary }}
              >
                {config.hero.cta}
              </Link>
              <Link
                to={config.basePath + config.hero.ctaSecundairLink}
                className="px-8 py-4 font-bold uppercase tracking-wider rounded border transition-colors"
                style={{ color: c.tekst, borderColor: 'rgba(255,255,255,0.3)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {config.hero.ctaSecundair}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: c.primary }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {config.stats.map((s, i) => (
              <div key={i} className="py-6 px-4 text-center text-white">
                <p className="text-3xl md:text-4xl font-black">{s.waarde}</p>
                <p className="text-xs uppercase tracking-widest opacity-80 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten preview */}
      <section className="py-24" style={{ backgroundColor: c.achtergrond }}>
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: c.primary }}>
              Wat we doen
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white">
              Onze Diensten
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {config.diensten.map((d) => (
              <div
                key={d.id}
                className="group p-8 rounded-xl border transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: c.kaart,
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${c.primary}60`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                }}
              >
                <div className="text-4xl mb-4">{d.icon}</div>
                <h3 className="text-2xl font-bold uppercase text-white mb-3">{d.naam}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {d.beschrijving}
                </p>
                <ul className="space-y-1.5">
                  {d.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                      <span style={{ color: c.primary }}>—</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to={config.basePath + "/diensten"}
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors"
              style={{ color: c.primary }}
            >
              Alle diensten bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-24" style={{ backgroundColor: '#111111' }}>
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: c.primary }}>
              Waarom Dutch Ink
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white">
              Onze Beloften
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.usps.map((u, i) => (
              <div key={i} className="flex gap-5">
                <div
                  className="text-2xl w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: c.primaryLight }}
                >
                  {u.icon}
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wide text-white mb-1">{u.titel}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {u.beschrijving}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24" style={{ backgroundColor: c.achtergrond }}>
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: c.primary }}>
              Klanten aan het woord
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white">
              10.000+ Reviews
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map((t) => (
              <div
                key={t.id}
                className="p-7 rounded-xl"
                style={{ backgroundColor: c.kaart, border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: c.primary }}>★</span>
                  ))}
                </div>
                <p className="text-sm italic leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  "{t.tekst}"
                </p>
                <div>
                  <p className="font-bold text-white text-sm">{t.naam}</p>
                  {t.vestiging && (
                    <p className="text-xs mt-0.5" style={{ color: c.primary }}>
                      Dutch Ink {t.vestiging}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 text-center"
        style={{ backgroundColor: c.primary }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">
            Klaar voor jouw tattoo?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Loop gewoon binnen. Geen afspraak nodig. Onze artiesten staan voor je klaar.
          </p>
          <Link
            to={config.basePath + "/contact"}
            className="inline-block px-12 py-5 bg-black font-bold uppercase tracking-wider text-white rounded hover:bg-gray-900 transition-colors"
          >
            Vind een Vestiging →
          </Link>
        </div>
      </section>
    </Layout>
  );
};
