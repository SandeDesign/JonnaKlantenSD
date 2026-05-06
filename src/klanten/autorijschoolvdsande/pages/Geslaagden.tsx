import { Layout } from '../components/Layout';
import { config } from '../config';

export const Geslaagden = () => {
  const p = config.colors.primary;

  const jaren = [...new Set(config.geslaagden.map((g) => g.jaar))].sort((a, b) => b - a);

  return (
    <Layout>
      {/* Banner */}
      <section
        className="py-16 text-white text-center"
        style={{
          background: `linear-gradient(135deg, ${config.colors.purple} 0%, ${p} 100%)`,
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Geslaagden</h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Trots op al onze leerlingen die hun rijbewijs hebben behaald!
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="text-5xl font-extrabold mb-2" style={{ color: p }}>
            {config.geslaagden.length}+
          </div>
          <p className="text-lg font-medium text-gray-600">
            leerlingen geslaagd de afgelopen jaren
          </p>
          <p className="text-gray-400 text-sm mt-2">
            90% slaagt de eerste keer. Jij straks ook?
          </p>
        </div>
      </section>

      {/* Geslaagden per jaar */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {jaren.map((jaar) => {
            const namen = config.geslaagden.filter((g) => g.jaar === jaar);
            return (
              <div key={jaar} className="mb-14">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold" style={{ color: p }}>{jaar}</h2>
                  <div className="flex-1 h-px bg-gray-200" />
                  <span
                    className="text-sm font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: config.colors.primaryLight, color: p }}
                  >
                    {namen.length} geslaagd
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {namen.map((g, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-700 shadow-sm"
                    >
                      <span style={{ color: p }}>✓</span>
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
        style={{ backgroundColor: p }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Binnenkort ook op de lijst?</h2>
          <p className="text-lg opacity-90 mb-8">
            Neem contact op en haal jouw rijbewijs bij de rijschool met het hoogste slagingspercentage in Sittard-Geleen.
          </p>
          <a
            href={config.basePath + '/contact'}
            className="inline-block px-10 py-4 bg-white font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            style={{ color: p }}
          >
            Aanmelden
          </a>
        </div>
      </section>
    </Layout>
  );
};
