import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const titleFont = { fontFamily: "'Playfair Display', Georgia, serif" };

export const OverOns = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-28 text-white text-center"
        style={{ backgroundColor: config.colors.text }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={titleFont}>
            {config.about.title}
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">{config.tagline}</p>
        </div>
      </section>

      {/* Ons verhaal */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ ...titleFont, color: config.colors.text }}>
                Ons Verhaal
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{config.about.story}</p>
              <p className="text-gray-600 leading-relaxed">{config.about.mission}</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={config.about.image}
                alt={config.name}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Regio */}
      <section className="py-16" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ ...titleFont, color: config.colors.text }}>
              Actief in Limburg & Brabant
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Vanuit onze thuisbasis in Geleen bedienen wij de gehele regio Limburg en Noord-Brabant. Of u nu in Sittard, Heerlen, Maastricht, Roermond of Eindhoven woont — Cleanfirm Stylesatlife staat bij u voor de deur.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Geleen', 'Sittard', 'Heerlen', 'Maastricht', 'Roermond', 'Venlo', 'Weert', 'Eindhoven', 'Helmond', 'Tilburg'].map((stad) => (
                <span
                  key={stad}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white border"
                  style={{ color: p, borderColor: config.colors.secondary }}
                >
                  {stad}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14" style={{ ...titleFont, color: config.colors.text }}>
            Onze Kernwaarden
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {config.about.values.map((value, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm"
                  style={{ backgroundColor: p }}
                >
                  {i + 1}
                </div>
                <p className="font-medium" style={{ color: config.colors.text }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat ons onderscheidt */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14" style={{ ...titleFont, color: config.colors.text }}>
            Wat ons onderscheidt
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.features.map((f, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm">
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

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4" style={titleFont}>
            Leer ons persoonlijk kennen
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Plan een vrijblijvend kennismakingsgesprek en ontdek wat wij voor u kunnen betekenen.
          </p>
          <Link
            to={config.basePath + '/contact'}
            className="inline-block px-10 py-4 bg-white font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            style={{ color: p }}
          >
            Maak Een Afspraak
          </Link>
        </div>
      </section>
    </Layout>
  );
};
