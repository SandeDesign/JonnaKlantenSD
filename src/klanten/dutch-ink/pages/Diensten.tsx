import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Diensten = () => {
  const c = config.colors;

  return (
    <Layout>
      {/* Header */}
      <section className="py-32" style={{ backgroundColor: '#111' }}>
        <div className="container mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: c.primary }}>
            Dutch Ink
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase text-white mb-4">
            Diensten
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
            {config.beschrijving}
          </p>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-24" style={{ backgroundColor: c.achtergrond }}>
        <div className="container mx-auto px-4 space-y-6">
          {config.diensten.map((d, i) => (
            <div
              key={d.id}
              className="p-8 md:p-10 rounded-2xl border"
              style={{
                backgroundColor: c.kaart,
                borderColor: 'rgba(255,255,255,0.06)',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Icon + titel */}
                <div>
                  <div
                    className="text-4xl w-16 h-16 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: c.primaryLight }}
                  >
                    {d.icon}
                  </div>
                  <div
                    className="text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: c.primary }}
                  >
                    Dienst {String(i + 1).padStart(2, '0')}
                  </div>
                  <h2 className="text-3xl font-black uppercase text-white">{d.naam}</h2>
                </div>

                {/* Beschrijving */}
                <div>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {d.beschrijving}
                  </p>
                  {d.note && (
                    <p
                      className="mt-4 text-xs p-3 rounded-lg"
                      style={{ color: c.primary, backgroundColor: c.primaryLight }}
                    >
                      ℹ️ {d.note}
                    </p>
                  )}
                </div>

                {/* Highlights */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    Inbegrepen
                  </p>
                  <ul className="space-y-2.5">
                    {d.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.70)' }}>
                        <span className="font-bold mt-0.5" style={{ color: c.primary }}>✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prijzeninfo */}
      <section className="py-20" style={{ backgroundColor: '#111' }}>
        <div className="container mx-auto px-4">
          <div
            className="p-10 rounded-2xl border text-center"
            style={{ borderColor: `${c.primary}40`, backgroundColor: c.primaryLight }}
          >
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-2xl font-black uppercase text-white mb-3">
              Vaste Prijzen. Altijd.
            </h3>
            <p className="text-sm max-w-xl mx-auto mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Bij Dutch Ink werken we niet met een uurtarief. Jij weet vooraf precies wat je betaalt — eerlijk, transparant, zonder verrassingen. Kom langs voor een vrijblijvende prijsopgave.
            </p>
            <Link
              to={config.basePath + "/contact"}
              className="inline-block px-8 py-3 font-bold uppercase tracking-wider text-white rounded transition-opacity hover:opacity-90"
              style={{ backgroundColor: c.primary }}
            >
              Vraag een Prijs op
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
