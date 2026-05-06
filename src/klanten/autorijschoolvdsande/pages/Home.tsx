import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const c = config.colors;

export const Home = () => (
  <Layout>
    {/* ── HERO ─────────────────────────────────────────────────── */}
    <section
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${c.gradientFrom} 0%, ${c.gradientMid} 45%, ${c.gradientLight} 100%)`,
      }}
    >
      {/* Subtiel raster-patroon overlay voor premium gevoel */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Tekst */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase"
              style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
            >
              <span className="w-2 h-2 rounded-full bg-white inline-block" />
              Geleen · Sittard-Geleen · Limburg
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5">
              Jouw rijbewijs,<br />
              <span style={{ color: c.gradientLight }}>onze trots.</span>
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
              30+ jaar ervaring. Moderne Mercedes lesauto. En het hoogste slagingspercentage van de regio — <strong className="text-white">90% slaagt de eerste keer.</strong>
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to={config.basePath + '/contact'}
                className="px-8 py-4 font-bold text-sm rounded-xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                style={{ backgroundColor: 'white', color: c.gradientFrom }}
              >
                Aanmelden — gratis gesprek
              </Link>
              <Link
                to={config.basePath + '/over-van-der-sande'}
                className="px-8 py-4 font-semibold text-sm rounded-xl border-2 border-white/50 text-white hover:border-white hover:bg-white/10 transition-all"
              >
                Even voorstellen →
              </Link>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={config.logoUrl}
              alt="Autorijschool van der Sande"
              className="w-72 h-72 object-contain"
              style={{ filter: 'brightness(0) invert(1) opacity(0.85)' }}
            />
          </div>
        </div>
      </div>

      {/* Golvende overgang naar volgende sectie */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill={c.background} />
        </svg>
      </div>
    </section>

    {/* ── STATS BALK ───────────────────────────────────────────── */}
    <section style={{ backgroundColor: c.background }} className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {config.stats.map((s, i) => (
            <div
              key={i}
              className="text-center rounded-2xl p-8"
              style={{ background: `linear-gradient(135deg, ${c.gradientFrom}18, ${c.gradientLight})` }}
            >
              <div className="text-5xl font-extrabold mb-2" style={{ color: c.gradientFrom }}>
                {s.value}
              </div>
              <p className="text-sm font-medium" style={{ color: c.textBody }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── SECTIES OVERZICHT ────────────────────────────────────── */}
    <section style={{ backgroundColor: c.primaryLight }} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: c.text }}>
            Alles wat je nodig hebt
          </h2>
          <p className="max-w-lg mx-auto text-sm" style={{ color: c.textBody }}>
            Van kennismaking tot geslaagd — bij Autorijschool van der Sande in Geleen staat alles voor je klaar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.sections.map((s) => (
            <Link
              key={s.path}
              to={config.basePath + s.path}
              className="group block rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: 'white' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-colors"
                style={{ backgroundColor: `${c.gradientFrom}18` }}
              >
                {s.icon}
              </div>
              <h3 className="font-bold text-base mb-2 group-hover:underline" style={{ color: c.text }}>
                {s.label}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: c.textBody }}>{s.desc}</p>
              <p className="mt-4 text-xs font-semibold" style={{ color: c.primary }}>
                Bekijk meer →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ── WAAROM VAN DER SANDE ─────────────────────────────────── */}
    <section style={{ backgroundColor: c.background }} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: c.text }}>
            Waarom kiezen voor van der Sande?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.features.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 text-center"
              style={{
                background: `linear-gradient(160deg, ${c.gradientFrom}14 0%, ${c.gradientLight} 100%)`,
                border: `1px solid ${c.gradientFrom}22`,
              }}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-sm mb-2" style={{ color: c.text }}>{f.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: c.textBody }}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA BANNER ───────────────────────────────────────────── */}
    <section
      className="py-20 text-white text-center"
      style={{
        background: `linear-gradient(135deg, ${c.accent} 0%, ${c.gradientFrom} 100%)`,
      }}
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-4xl mb-4">🚗</div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Klaar om te starten in Geleen?
        </h2>
        <p className="text-white/80 mb-8 text-lg leading-relaxed">
          Plan een vrijblijvend kennismakingsgesprek en ontdek hoe snel jij jouw rijbewijs kunt halen.
        </p>
        <Link
          to={config.basePath + '/contact'}
          className="inline-block px-10 py-4 font-bold rounded-xl transition-all hover:shadow-xl hover:-translate-y-0.5"
          style={{ backgroundColor: 'white', color: c.accent }}
        >
          Neem contact op
        </Link>
      </div>
    </section>
  </Layout>
);
