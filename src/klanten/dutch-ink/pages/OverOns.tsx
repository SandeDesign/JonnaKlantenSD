import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const OverOns = () => {
  const c = config.colors;

  return (
    <Layout>
      {/* Header */}
      <section
        className="py-32 relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=1920&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.80)' }} />
        <div className="relative container mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: c.primary }}>
            Ons verhaal
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase text-white">
            Over Dutch Ink
          </h1>
        </div>
      </section>

      {/* Verhaal */}
      <section className="py-24" style={{ backgroundColor: c.achtergrond }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: c.primary }}>
                Wie zijn wij
              </p>
              <h2 className="text-4xl font-black uppercase text-white mb-8">
                The Tattoo Company
              </h2>
              <div className="space-y-5 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.60)' }}>
                <p>
                  Dutch Ink is opgericht met één doel: de beste tattoo- en piercingervaring bieden in Nederland. We geloven dat vakmanschap, transparantie en een unieke klantbeleving hand in hand gaan.
                </p>
                <p>
                  In onze moderne studio's werken topartiesten die met je meedenken — van het eerste idee tot het eindresultaat. We werken altijd volgens de hoogste hygiënenormen en gebruiken uitsluitend A-merken materialen.
                </p>
                <p>
                  Wat ons echt onderscheidt? Eerlijke vaste prijzen. Geen uurtarief, geen verrassingen achteraf. Jij weet vooraf exact wat je betaalt, en wij leveren precies wat we beloven.
                </p>
                <p>
                  Inmiddels zijn we uitgegroeid naar meer dan 15 vestigingen door heel Nederland — van Vlaardingen tot Amsterdam, van Den Haag tot Dedemsvaart. Overal dezelfde kwaliteit, overal dezelfde eerlijkheid.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { cijfer: '15+', label: 'Vestigingen door heel NL' },
                { cijfer: '10.000+', label: 'Tevreden klanten' },
                { cijfer: '4.9 / 5', label: 'Gemiddelde beoordeling' },
                { cijfer: '100%', label: 'Walk-in welkom' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 p-6 rounded-xl"
                  style={{ backgroundColor: c.kaart, border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span className="text-4xl font-black" style={{ color: c.primary }}>
                    {s.cijfer}
                  </span>
                  <span className="font-medium text-white">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-24" style={{ backgroundColor: '#111' }}>
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: c.primary }}>
              Onze belofte
            </p>
            <h2 className="text-4xl font-black uppercase text-white">
              Waarom Dutch Ink?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.usps.map((u, i) => (
              <div
                key={i}
                className="p-7 rounded-xl"
                style={{ backgroundColor: c.kaart, border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div
                  className="text-2xl w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: c.primaryLight }}
                >
                  {u.icon}
                </div>
                <h3 className="font-bold uppercase tracking-wide text-white mb-2">{u.titel}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {u.beschrijving}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: c.primary }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black uppercase text-white mb-4">
            Klaar om langs te komen?
          </h2>
          <p className="text-white/80 mb-8">Walk-in welkom. Geen afspraak nodig.</p>
          <Link
            to={config.basePath + "/contact"}
            className="inline-block px-10 py-4 bg-black font-bold uppercase tracking-wider text-white rounded hover:bg-gray-900 transition-colors"
          >
            Vind een Vestiging
          </Link>
        </div>
      </section>
    </Layout>
  );
};
