import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';
import type { GalleryItem } from '../types';

const titleFont = { fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 as const };

const categories: { key: GalleryItem['category'] | 'alle'; label: string }[] = [
  { key: 'alle', label: 'Alle Resultaten' },
  { key: 'woning', label: 'Woningen' },
  { key: 'kantoor', label: 'Kantoren' },
  { key: 'verbouwing', label: 'Na Verbouwing' },
  { key: 'overig', label: 'Overig' },
];

export const Resultaten = () => {
  const p = config.colors.primary;
  const [activeFilter, setActiveFilter] = useState<GalleryItem['category'] | 'alle'>('alle');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = activeFilter === 'alle'
    ? config.gallery
    : config.gallery.filter((item) => item.category === activeFilter);

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-28 text-white text-center"
        style={{ backgroundColor: config.colors.text }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={titleFont}>
            Onze Resultaten
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Bekijk het werk dat wij voor onze klanten hebben gerealiseerd. Elk project getuigt van onze toewijding aan kwaliteit.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all"
                style={
                  activeFilter === cat.key
                    ? { backgroundColor: p, color: '#fff' }
                    : { backgroundColor: config.colors.primaryLight, color: p }
                }
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => setLightbox(item)}
                className="relative rounded-2xl overflow-hidden group aspect-[4/3] w-full text-left focus:outline-none"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-5">
                    <p className="text-white font-semibold text-lg">{item.title}</p>
                    <p className="text-white/70 text-sm capitalize">{item.category}</p>
                  </div>
                </div>
                <div
                  className="absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full capitalize"
                  style={{ backgroundColor: config.colors.primaryLight, color: p }}
                >
                  {item.category}
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-16">Geen resultaten in deze categorie.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="w-full max-h-[60vh] object-cover"
            />
            <div className="p-6 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold" style={{ color: config.colors.text }}>{lightbox.title}</h3>
                <p className="text-sm capitalize mt-1" style={{ color: p }}>{lightbox.category}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="text-gray-400 hover:text-gray-700 text-2xl leading-none"
                aria-label="Sluiten"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4" style={titleFont}>
            Wilt u ook zulke resultaten?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Neem contact op en maak een afspraak. Wij staan voor u klaar.
          </p>
          <Link
            to={config.basePath + '/contact'}
            className="inline-block px-10 py-4 bg-white font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            style={{ color: p }}
          >
            Afspraak Maken
          </Link>
        </div>
      </section>
    </Layout>
  );
};
