import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const titleFont = { fontFamily: "'Nunito', sans-serif" };

export const Diensten = () => {
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
            Onze Diensten
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">{config.description}</p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.services.map((s) => (
              <div
                key={s.id}
                className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="text-3xl w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: config.colors.primaryLight }}
                  >
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl font-bold" style={{ color: config.colors.text }}>
                        {s.name}
                      </h3>
                      {s.priceLabel && (
                        <span
                          className="text-sm font-semibold px-3 py-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: config.colors.primaryLight, color: p }}
                        >
                          {s.priceLabel}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.description}</p>
                    {s.features && s.features.length > 0 && (
                      <ul className="space-y-1.5">
                        {s.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <span style={{ color: p }}>✓</span>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Werkgebied */}
      <section className="py-16" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ ...titleFont, color: config.colors.text }}>
            Ons Werkgebied
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Wij zijn actief in de hele regio Limburg en Brabant. Twijfelt u of wij bij u in de buurt komen? Neem dan contact op.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Geleen', 'Sittard', 'Heerlen', 'Maastricht', 'Roermond', 'Venlo', 'Weert', 'Eindhoven', 'Tilburg'].map((stad) => (
              <span
                key={stad}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-white border"
                style={{ color: p, borderColor: config.colors.secondary }}
              >
                {stad}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ ...titleFont, color: config.colors.text }}>
            Niet zeker welke dienst bij u past?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Neem contact op voor een vrijblijvend adviesgesprek. Wij helpen u graag de juiste keuze te maken.
          </p>
          <Link
            to={config.basePath + '/contact'}
            className="inline-block px-10 py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: p }}
          >
            Vraag Gratis Advies
          </Link>
        </div>
      </section>
    </Layout>
  );
};
