import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const fontLogo = "'Teko', sans-serif";
const fontBody = "'Barlow', sans-serif";

const FlipCard = ({ item }: { item: (typeof config.werkzaamheden)[number] }) => {
  const [flipped, setFlipped] = useState(false);
  const p = config.colors.primary;

  return (
    <div
      className="cursor-pointer"
      style={{ perspective: '1000px', height: '230px' }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.5s',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          className="absolute inset-0 bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow"
        >
          <div>
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-lg"
              style={{ backgroundColor: p, color: '#fff' }}
            >
              {item.icon}
            </div>
            <h3
              className="text-xl font-bold text-gray-900 mb-2 uppercase"
              style={{ fontFamily: fontLogo, letterSpacing: '0.04em' }}
            >
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.short}</p>
          </div>
          <p
            className="text-xs font-semibold mt-3 uppercase tracking-wide"
            style={{ color: p, fontFamily: fontBody }}
          >
            Klik voor meer info →
          </p>
        </div>

        {/* Back */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: '#1F2937',
          }}
          className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-between text-white"
        >
          <div>
            <h3
              className="text-xl font-bold mb-3 uppercase text-white"
              style={{ fontFamily: fontLogo, letterSpacing: '0.04em' }}
            >
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-300">{item.full}</p>
          </div>
          <p
            className="text-xs font-semibold mt-3 uppercase tracking-wide"
            style={{ color: p, fontFamily: fontBody }}
          >
            ← Klik om terug te gaan
          </p>
        </div>
      </div>
    </div>
  );
};

export const Home = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(31,41,55,0.78)' }} />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1.5 rounded-full inline-block"
              style={{ backgroundColor: p, fontFamily: fontBody }}
            >
              RDW Erkend Garagebedrijf · Sittard
            </p>
            {/* Title split: big line + smaller sub-line same font */}
            <h1
              className="font-extrabold leading-none uppercase"
              style={{ fontFamily: fontLogo, letterSpacing: '0.03em' }}
            >
              <span className="block text-6xl md:text-8xl" style={{ lineHeight: '0.95' }}>{config.hero.title}</span>
              <span className="block text-3xl md:text-4xl mt-0.5 text-gray-300">
                {config.hero.titleSub}
              </span>
            </h1>
            <p className="text-base text-gray-300 mt-3 mb-6 leading-relaxed max-w-xl" style={{ fontFamily: fontBody }}>
              {config.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={config.basePath + config.hero.ctaLink}
                className="px-8 py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90 shadow-lg"
                style={{ backgroundColor: p, fontFamily: fontBody }}
              >
                {config.hero.cta}
              </Link>
              <Link
                to={config.basePath + config.hero.ctaSecondaryLink}
                className="px-8 py-4 font-semibold text-white border-2 border-white rounded-xl hover:bg-white hover:text-gray-900 transition-colors"
                style={{ fontFamily: fontBody }}
              >
                {config.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Auto Werkzaamheden */}
      <section className="py-20" style={{ backgroundColor: '#E5E7EB' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-5xl font-extrabold text-gray-900 mb-3 uppercase"
              style={{ fontFamily: fontLogo }}
            >
              Auto Werkzaamheden
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto" style={{ fontFamily: fontBody }}>
              Klik op een kaart voor meer informatie over de dienst.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.werkzaamheden.map((item) => (
              <FlipCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={config.basePath + '/agenda'}
              className="inline-block px-8 py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90 shadow"
              style={{ backgroundColor: p, fontFamily: fontBody }}
            >
              Direct een Afspraak Maken →
            </Link>
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="py-20" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&h=600&fit=crop"
                alt="Care4Cars Sittard werkplaats"
                className="w-full h-72 object-cover"
              />
            </div>
            <div>
              <h2
                className="text-5xl font-extrabold text-gray-900 mb-8 uppercase"
                style={{ fontFamily: fontLogo }}
              >
                Werkwijze
              </h2>
              <div className="space-y-7">
                {config.werkwijze.map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-xl flex-shrink-0 border-2 text-white"
                      style={{ borderColor: p, backgroundColor: p }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold text-gray-900 mb-1 uppercase"
                        style={{ fontFamily: fontLogo, letterSpacing: '0.03em' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: fontBody }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20" style={{ backgroundColor: '#1F2937' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-5xl font-extrabold text-white mb-3 uppercase"
              style={{ fontFamily: fontLogo }}
            >
              Contact
            </h2>
            <p className="text-gray-400 max-w-md mx-auto" style={{ fontFamily: fontBody }}>
              Heeft u vragen of wilt u een afspraak? Neem gerust contact op.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
            {[
              { icon: '📍', label: 'Adres', value: 'Nusterweg 67', sub: '6136 KT Sittard' },
              { icon: '📞', label: 'Telefoon', value: config.contact.phone, href: `tel:${config.contact.phone}` },
              { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
              { icon: '🕐', label: 'Openingstijden', value: 'Ma–Do: 08:30–17:00', sub: 'Vr: 08:30–16:30 | Za–Zo: Gesloten' },
            ].map(({ icon, label, value, sub, href }) => (
              <div key={label} className="rounded-2xl p-6 text-center" style={{ backgroundColor: '#374151' }}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl mx-auto mb-4"
                  style={{ backgroundColor: p, color: '#fff' }}
                >
                  {icon}
                </div>
                <p
                  className="text-xs text-gray-400 uppercase tracking-wider mb-1"
                  style={{ fontFamily: fontBody }}
                >
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="font-semibold text-white text-sm hover:underline block"
                    style={{ fontFamily: fontBody }}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="font-semibold text-white text-sm" style={{ fontFamily: fontBody }}>
                    {value}
                  </p>
                )}
                {sub && (
                  <p className="text-gray-400 text-xs mt-1" style={{ fontFamily: fontBody }}>
                    {sub}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={config.basePath + '/agenda'}
              className="px-8 py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90 shadow"
              style={{ backgroundColor: p, fontFamily: fontBody }}
            >
              Online Afspraak Maken
            </Link>
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-4 font-semibold rounded-xl border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
              style={{ fontFamily: fontBody }}
            >
              Bel Ons Direct
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
