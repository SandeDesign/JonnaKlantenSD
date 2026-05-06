import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';
import { useAfspraak } from '../components/AfspraakContext';

export const Home = () => {
  const p = config.colors.primary;
  const dark = config.colors.primaryDark;
  const hours = config.contact.hours;
  const { open } = useAfspraak();
  const [activeTab, setActiveTab] = useState(0);

  const activeService = config.services[activeTab];

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
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,26,11,0.88) 0%, rgba(62,140,40,0.4) 100%)' }} />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: p }}>
              {config.tagline}
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              {config.hero.title}{' '}
              <span style={{ color: p }}>{config.hero.highlight}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              {config.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => open()}
                className="px-8 py-4 font-semibold text-white rounded-xl transition-all hover:scale-105 shadow-lg shadow-green-900/40"
                style={{ backgroundColor: p }}
              >
                Afspraak Maken
              </button>
              <Link
                to={config.basePath + config.hero.ctaLink}
                className="px-8 py-4 font-semibold border-2 border-white/40 text-white rounded-xl hover:border-white hover:bg-white/10 transition-all"
              >
                {config.hero.cta}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/50" />
        </div>
      </section>

      {/* ── Openingstijden + klikbare diensten-tabs ── */}
      <section style={{ backgroundColor: '#111827' }}>
        <div className="container mx-auto px-4 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            {/* Openingstijden */}
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                  style={{ backgroundColor: `${p}22` }}
                >
                  🕐
                </div>
                <h2 className="text-lg font-bold text-white">Openingstijden</h2>
              </div>
              <ul className="space-y-2.5 text-sm max-w-[230px] mx-auto lg:mx-0">
                {(
                  [
                    ['Maandag', hours.maandag],
                    ['Dinsdag', hours.dinsdag],
                    ['Woensdag', hours.woensdag],
                    ['Donderdag', hours.donderdag],
                    ['Vrijdag', hours.vrijdag],
                    ['Zaterdag', hours.zaterdag],
                  ] as [string, string][]
                ).map(([day, time]) => (
                  <li key={day} className="flex justify-between gap-4">
                    <span className="text-gray-400">{day}</span>
                    <span className={time === 'Gesloten' ? 'text-red-400 font-medium' : 'text-white font-medium'}>
                      {time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-4 max-w-[230px] mx-auto lg:mx-0">
                Open om 08:45 — ideaal vóór uw afspraak bij het gemeentehuis.
              </p>
            </div>

            {/* Klikbare diensten tabs */}
            <div className="lg:col-span-2">
              {/* Tab bar */}
              <div
                className="flex rounded-xl overflow-x-auto mb-0"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {config.services.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveTab(i)}
                    className="flex-1 px-4 py-3 text-sm font-semibold whitespace-nowrap transition-all rounded-xl"
                    style={
                      activeTab === i
                        ? { color: 'white', backgroundColor: p }
                        : { color: '#9ca3af' }
                    }
                  >
                    {s.name}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div
                className="mt-1 p-6 rounded-xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl">{activeService.icon}</span>
                  <div>
                    <h3 className="font-bold text-white text-lg">{activeService.name}</h3>
                    {activeService.priceLabel && (
                      <span className="text-sm font-semibold" style={{ color: p }}>{activeService.priceLabel}</span>
                    )}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{activeService.description}</p>
                {activeService.features && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                    {activeService.features.map((f) => (
                      <p key={f} className="text-sm text-gray-300 flex items-center gap-2">
                        <span style={{ color: p }}>✓</span> {f}
                      </p>
                    ))}
                  </div>
                )}
                <div className="mt-5 flex gap-3">
                  <button
                    onClick={() => open(activeService.id)}
                    className="px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90"
                    style={{ backgroundColor: p }}
                  >
                    Afspraak Maken
                  </button>
                  <Link
                    to={config.basePath + '/diensten'}
                    className="px-5 py-2.5 text-sm font-semibold rounded-lg border transition-colors"
                    style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#d1d5db' }}
                  >
                    Meer Info →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Waarom ons ── */}
      <section style={{ backgroundColor: dark }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p }}>
              Waarom Ton Dirkx
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Vakmanschap met een persoonlijk gezicht
            </h2>
            <p className="text-green-300 max-w-xl mx-auto opacity-70">
              Al meer dan 10 jaar uw betrouwbare fotograaf in Stadbroek, Sittard.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl transition-all hover:-translate-y-1"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-base font-bold mb-2 text-white">{f.title}</h3>
                <p className="text-green-200 text-sm leading-relaxed opacity-75">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Diensten overzicht ── */}
      <section style={{ backgroundColor: '#1a2332' }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p }}>
              Wat wij bieden
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Onze Diensten
            </h2>
            <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
              {config.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {config.services.map((s) => (
              <div
                key={s.id}
                className="rounded-2xl p-6 transition-all hover:-translate-y-1 cursor-pointer group"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}
                onClick={() => open(s.id)}
              >
                <div
                  className="text-3xl w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${p}22` }}
                >
                  {s.icon}
                </div>
                <h3 className="text-base font-bold mb-2 text-white">{s.name}</h3>
                <p className="text-gray-400 text-xs mb-3 leading-relaxed line-clamp-3">{s.description}</p>
                {s.priceLabel && (
                  <p className="font-semibold text-sm" style={{ color: p }}>{s.priceLabel}</p>
                )}
                <p
                  className="text-xs mt-3 font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: p }}
                >
                  Afspraak maken →
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={config.basePath + '/diensten'}
              className="inline-block px-8 py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: p }}
            >
              Alle Diensten Bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ backgroundColor: '#0f1a0b' }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p }}>
              Klantbeoordelingen
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Wat onze klanten zeggen
            </h2>
            <p className="mt-3" style={{ color: p }}>
              ★★★★½ &nbsp; 4.4 / 5 — 27 beoordelingen
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.testimonials.map((t) => (
              <div
                key={t.id}
                className="rounded-2xl p-7"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-base" style={{ color: i < t.rating ? p : '#374151' }}>★</span>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-5 leading-relaxed text-sm">"{t.text}"</p>
                <p className="font-semibold text-white text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section
        className="py-20 text-white text-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${dark} 0%, ${p} 100%)` }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Kom langs of neem contact op</h2>
          <p className="text-lg mb-1 opacity-90">{config.contact.address}</p>
          <p className="mb-8 opacity-70">{config.contact.phone} &nbsp;·&nbsp; {config.contact.mobile}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => open()}
              className="px-10 py-4 bg-white font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              style={{ color: p }}
            >
              Afspraak Maken
            </button>
            <Link
              to={config.basePath + '/contact'}
              className="px-10 py-4 border-2 border-white/50 font-semibold rounded-xl hover:border-white hover:bg-white/10 transition-all text-white"
            >
              Contact & Route
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
