import { useParams, Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const titleFont = { fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 as const };

export const TipDetail = () => {
  const { id } = useParams<{ id: string }>();
  const p = config.colors.primary;
  const tip = config.tips.find((t) => t.id === id);

  if (!tip) {
    return (
      <Layout>
        <div className="py-32 text-center">
          <p className="text-gray-400 mb-6">Tip niet gevonden.</p>
          <Link
            to={config.basePath + '/tips'}
            className="px-6 py-3 font-semibold text-white rounded-xl"
            style={{ backgroundColor: p }}
          >
            Terug naar Schoonmaaktips
          </Link>
        </div>
      </Layout>
    );
  }

  const otherTips = config.tips.filter((t) => t.id !== id).slice(0, 3);

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-28 text-white text-center"
        style={{ backgroundColor: config.colors.text }}
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <div
            className="text-4xl w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
          >
            {tip.icon}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug" style={titleFont}>
            {tip.title}
          </h1>
          <p className="text-gray-300 text-sm">{tip.readTime} leestijd</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 py-3">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to={config.basePath + '/'} className="hover:text-gray-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to={config.basePath + '/tips'} className="hover:text-gray-600 transition-colors">Schoonmaaktips</Link>
            <span>/</span>
            <span className="text-gray-600 truncate max-w-xs">{tip.title}</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-medium">{tip.excerpt}</p>
            <div className="space-y-5">
              {tip.content.map((paragraph, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share CTA */}
            <div
              className="mt-12 p-6 rounded-2xl"
              style={{ backgroundColor: config.colors.primaryLight }}
            >
              <h3 className="text-lg font-bold mb-2" style={{ color: config.colors.text }}>
                Liever dat wij het voor u regelen?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Maak een afspraak met Cleanfirm Stylesatlife en laat het schoonmaken aan ons over.
              </p>
              <Link
                to={config.basePath + '/contact'}
                className="inline-block px-6 py-3 font-semibold text-white rounded-xl transition-opacity hover:opacity-90 text-sm"
                style={{ backgroundColor: p }}
              >
                Afspraak Maken
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Andere tips */}
      {otherTips.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-10 text-center" style={{ ...titleFont, color: config.colors.text }}>
              Meer Schoonmaaktips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {otherTips.map((t) => (
                <Link
                  key={t.id}
                  to={config.basePath + '/tips/' + t.id}
                  className="bg-white rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all block"
                >
                  <div className="text-2xl mb-3">{t.icon}</div>
                  <h3 className="font-bold mb-2 leading-snug text-sm" style={{ color: config.colors.text }}>
                    {t.title}
                  </h3>
                  <p className="text-xs font-medium" style={{ color: p }}>
                    {t.readTime} leestijd →
                  </p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to={config.basePath + '/tips'}
                className="text-sm font-medium hover:underline"
                style={{ color: p }}
              >
                ← Alle tips bekijken
              </Link>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};
