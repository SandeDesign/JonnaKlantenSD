import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Logo } from '../components/Logo';
import { config } from '../config';

export const Home = () => {
  const p = config.colors.primary;
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % config.hero.images.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {config.hero.images.map((img, i) => (
          <div
            key={img}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: i === heroIndex ? 1 : 0,
            }}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(136,14,79,0.82) 0%, rgba(45,15,30,0.60) 100%)' }}
        />

        <div className="relative container mx-auto px-4 py-16">
          {/* Logo bovenaan in hero – wit */}
          <div className="mb-10">
            <Logo size="lg" variant="white" />
          </div>

          <p className="text-sm font-medium uppercase tracking-widest mb-4 text-white/70">
            {config.tagline}
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white"
            style={{ fontFamily: "'Cinzel Decorative', 'Playfair Display', serif" }}
          >
            Professionele Nagelstudio<br className="hidden md:block" /> in Sittard
          </h1>
          <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-xl">
            {config.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to={config.basePath + config.hero.ctaLink}
              className="px-8 py-4 font-semibold text-white rounded-full transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: p }}
            >
              {config.hero.cta}
            </Link>
            <Link
              to={config.basePath + '/contact'}
              className="px-8 py-4 font-semibold text-white border-2 border-white/70 rounded-full hover:bg-white hover:text-gray-900 transition-colors"
            >
              Afspraak Maken
            </Link>
          </div>
        </div>

        {/* Slideshow dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {config.hero.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIndex(i)}
              className="rounded-full transition-all"
              style={{
                width: i === heroIndex ? '24px' : '8px',
                height: '8px',
                backgroundColor: i === heroIndex ? 'white' : 'rgba(255,255,255,0.4)',
              }}
            />
          ))}
        </div>
      </section>

      {/* ── Over Beatrix – direct onder de hero ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={config.about.image}
                alt="Beatrix"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: p }}>
                Over Beatrix
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: config.colors.text }}>
                Vakkundige handen, warm hart
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {config.about.story}
              </p>
              <Link
                to={config.basePath + '/over-ons'}
                className="inline-block px-8 py-3.5 font-semibold text-white rounded-full transition-all hover:scale-105 shadow-md"
                style={{ backgroundColor: p }}
              >
                Meer Over Beatrix
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Waarom Beatrix ── */}
      <section className="py-20" style={{ backgroundColor: config.colors.lightPink }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: config.colors.text }}>
              Waarom kiezen voor Beatrix?
            </h2>
            <p className="max-w-xl mx-auto text-gray-500">
              Bij ons staat kwaliteit en uw tevredenheid altijd voorop.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.features.map((f, i) => (
              <div
                key={i}
                className="text-center p-7 bg-white rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
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

      {/* ── Diensten preview ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: config.colors.text }}>
              Onze Diensten
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Van gellak tot kunstnagels en prachtige nailart – bij Beatrix bent u aan het juiste adres.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.serviceCategories.map((cat) => (
              <div
                key={cat.id}
                className="rounded-3xl p-8 border-2 hover:shadow-xl hover:-translate-y-1 transition-all"
                style={{ borderColor: config.colors.primaryLight }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5"
                  style={{ backgroundColor: config.colors.primaryLight }}
                >
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: config.colors.text }}>
                  {cat.name}
                </h3>
                <ul className="space-y-1.5">
                  {cat.groups.slice(0, 3).flatMap((g) => g.items).slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <span style={{ color: p }}>✦</span>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to={config.basePath + '/diensten'}
              className="inline-block px-10 py-4 font-semibold text-white rounded-full transition-all hover:scale-105 shadow-md"
              style={{ backgroundColor: p }}
            >
              Alle Diensten Bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-20" style={{ backgroundColor: config.colors.lightPink }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: config.colors.text }}>
            Wat onze klanten zeggen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-xl" style={{ color: p }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5 leading-relaxed">"{t.text}"</p>
                <p className="font-bold text-sm" style={{ color: config.colors.text }}>{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fotogalerij ── */}
      <section className="py-3" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="flex gap-3 px-3 overflow-hidden">
          {[...config.about.galleryImages, ...config.about.galleryImages].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-64 h-44 rounded-2xl overflow-hidden">
              <img
                src={img}
                alt="Beatrix Nails salon"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Logo size="md" variant="white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Klaar voor perfecte nagels?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-xl mx-auto">
            Maak vandaag nog een afspraak bij Beatrix Nails & Beauty in Sittard.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to={config.basePath + '/contact'}
              className="inline-block px-10 py-4 font-semibold rounded-full transition-all hover:scale-105"
              style={{ backgroundColor: 'white', color: p }}
            >
              Afspraak Maken
            </Link>
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-block px-10 py-4 border-2 border-white/70 font-semibold rounded-full hover:bg-white/10 transition-colors text-white"
            >
              📞 Bel Direct
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
