import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const titleFont = { fontFamily: "'Playfair Display', Georgia, serif" };

export const Tips = () => {
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
            Schoonmaaktips
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Handige tips en tricks van onze schoonmaakexperts voor een stralend schone woning.
          </p>
        </div>
      </section>

      {/* Tips grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {config.tips.map((tip) => (
              <Link
                key={tip.id}
                to={config.basePath + '/tips/' + tip.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all block group"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="text-3xl w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: config.colors.primaryLight }}
                    >
                      {tip.icon}
                    </div>
                    <span className="text-xs text-gray-400 pt-1">{tip.readTime} leestijd</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 leading-snug group-hover:underline" style={{ color: config.colors.text }}>
                    {tip.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{tip.excerpt}</p>
                  <p className="text-sm font-semibold" style={{ color: p }}>
                    Lees meer →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ ...titleFont, color: config.colors.text }}>
            Liever dat wij het voor u doen?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Professionele schoonmaak bespaart u tijd en energie. Maak een afspraak en laat het aan ons over.
          </p>
          <Link
            to={config.basePath + '/contact'}
            className="inline-block px-10 py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: p }}
          >
            Afspraak Maken
          </Link>
        </div>
      </section>
    </Layout>
  );
};
