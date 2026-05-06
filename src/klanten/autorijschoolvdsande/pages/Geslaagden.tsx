import { Layout } from '../components/Layout';
import { config } from '../config';
import { Link } from 'react-router-dom';

const c = config.colors;

export const Geslaagden = () => {
  const jaren = [...new Set(config.geslaagden.map((g) => g.jaar))].sort((a, b) => b - a);

  return (
    <Layout>
      {/* Banner */}
      <section
        className="py-16 text-white text-center"
        style={{ background: `linear-gradient(135deg, ${c.gradientFrom} 0%, ${c.gradientMid} 100%)` }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Geslaagden</h1>
          <p className="text-white/75 max-w-xl mx-auto">
            Trots op al onze leerlingen die hun rijbewijs hebben behaald!
          </p>
        </div>
      </section>

      {/* Intro stat */}
      <section style={{ backgroundColor: c.primaryLight }} className="py-12">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="text-5xl font-extrabold mb-2" style={{ color: c.gradientFrom }}>
            {config.geslaagden.length}+
          </div>
          <p className="text-base font-medium" style={{ color: c.text }}>leerlingen geslaagd de afgelopen jaren</p>
          <p className="text-sm mt-1" style={{ color: c.textBody }}>90% slaagt de eerste keer. Jij straks ook?</p>
        </div>
      </section>

      {/* Geslaagden per jaar */}
      <section style={{ backgroundColor: c.background }} className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {jaren.map((jaar) => {
            const namen = config.geslaagden.filter((g) => g.jaar === jaar);
            return (
              <div key={jaar} className="mb-14">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold" style={{ color: c.primary }}>{jaar}</h2>
                  <div className="flex-1 h-px" style={{ backgroundColor: `${c.gradientFrom}33` }} />
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: c.primaryLight, color: c.primary }}
                  >
                    {namen.length} geslaagd
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {namen.map((g, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm"
                      style={{
                        backgroundColor: c.primaryLight,
                        border: `1px solid ${c.gradientFrom}22`,
                        color: c.textBody,
                      }}
                    >
                      <span className="font-bold" style={{ color: c.primary }}>✓</span>
                      <span>{g.naam}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-white text-center"
        style={{ background: `linear-gradient(135deg, ${c.accent} 0%, ${c.gradientFrom} 100%)` }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Binnenkort ook op de lijst?</h2>
          <p className="text-white/80 mb-8 text-lg">
            Haal jouw rijbewijs bij de rijschool met het hoogste slagingspercentage van Sittard-Geleen.
          </p>
          <Link
            to={config.basePath + '/contact'}
            className="inline-block px-10 py-4 font-bold rounded-xl hover:shadow-xl hover:-translate-y-0.5 transition-all"
            style={{ backgroundColor: 'white', color: c.accent }}
          >
            Aanmelden
          </Link>
        </div>
      </section>
    </Layout>
  );
};
