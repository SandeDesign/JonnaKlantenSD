import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const OverOns = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-24 text-white text-center"
        style={{ backgroundColor: config.colors.text }}
      >
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 opacity-60">Beatrix Nails & Beauty</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Over Beatrix</h1>
          <p className="max-w-xl mx-auto opacity-70">{config.tagline}</p>
        </div>
      </section>

      {/* Verhaal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: p }}>
                Over Beatrix
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: config.colors.text }}>
                Vakkundige handen, warm hart
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">{config.about.story}</p>
              <p className="text-gray-600 leading-relaxed">{config.about.mission}</p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={config.about.image}
                alt="Beatrix"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galerij */}
      <section className="py-16" style={{ backgroundColor: config.colors.lightPink }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: config.colors.text }}>
            De Studio
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {config.about.galleryImages.map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-lg transition-shadow">
                <img src={img} alt={`Beatrix Nails studio ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14" style={{ color: config.colors.text }}>
            Onze Kernwaarden
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {config.about.values.map((value, i) => (
              <div
                key={i}
                className="flex items-center gap-5 rounded-2xl p-6 border-2"
                style={{ borderColor: config.colors.primaryLight }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-lg"
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

      {/* Features */}
      <section className="py-20" style={{ backgroundColor: config.colors.lightPink }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14" style={{ color: config.colors.text }}>
            Wat ons onderscheidt
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.features.map((f, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-3xl shadow-sm">
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

      {/* Naambord foto */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://cdn1.treatwell.net/images/view/v2.i894609.w720.h480.xB4A365CD/"
              alt="Beatrix Nails & Beauty naambord"
              className="w-full object-cover"
            />
          </div>
          <p className="mt-6 text-gray-500 text-sm">{config.contact.address}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Kom langs bij Beatrix!</h2>
          <p className="text-lg opacity-90 mb-8">
            Plan een afspraak en ervaar het vakmanschap van Beatrix Nails & Beauty zelf.
          </p>
          <Link
            to={config.basePath + '/contact'}
            className="inline-block px-10 py-4 bg-white font-semibold rounded-full hover:bg-gray-100 transition-colors"
            style={{ color: p }}
          >
            Afspraak Maken
          </Link>
        </div>
      </section>
    </Layout>
  );
};
