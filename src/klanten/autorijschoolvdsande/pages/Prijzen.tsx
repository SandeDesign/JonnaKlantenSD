import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Prijzen = () => {
  const p = config.colors.primary;
  const [tab, setTab] = useState<'kwaliteit' | 'rekensommetje'>('kwaliteit');

  return (
    <Layout>
      {/* Banner */}
      <section
        className="py-16 text-white text-center"
        style={{
          background: `linear-gradient(135deg, ${config.colors.purple} 0%, ${p} 100%)`,
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Prijzen</h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Kwaliteit hoeft niet duur te zijn — het betaalt zich juist terug.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Tab buttons */}
          <div className="flex rounded-xl overflow-hidden border mb-12" style={{ borderColor: config.colors.primaryLight }}>
            <button
              onClick={() => setTab('kwaliteit')}
              className="flex-1 py-4 text-sm font-semibold transition-colors"
              style={
                tab === 'kwaliteit'
                  ? { backgroundColor: p, color: 'white' }
                  : { backgroundColor: 'white', color: config.colors.text }
              }
            >
              Kwaliteit VS Duurkoop
            </button>
            <button
              onClick={() => setTab('rekensommetje')}
              className="flex-1 py-4 text-sm font-semibold transition-colors"
              style={
                tab === 'rekensommetje'
                  ? { backgroundColor: p, color: 'white' }
                  : { backgroundColor: 'white', color: config.colors.text }
              }
            >
              Een rekensommetje
            </button>
          </div>

          {/* Tab: Kwaliteit VS Duurkoop */}
          {tab === 'kwaliteit' && (
            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: p }}>
                Kwaliteit VS Duurkoop
              </h2>
              <div className="w-10 h-1 rounded mb-8" style={{ backgroundColor: p }} />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Als je voor het eerst op zoek gaat naar een rijschool, kom je vaak autorijscholen tegen met lagere prijzen dan bij van der Sande. Schijn bedriegt: dit zijn vaak scholen die pas gestart zijn of weinig leerlingen hebben. Door mijn 30+ jaar doorgewinterde ervaring als rij-instructeur hebben mijn leerlingen aantoonbaar minder rijlessen nodig.
                </p>
                <p>
                  Bij Autorijschool van der Sande slaagt <strong>90% van de leerlingen de eerste keer</strong> voor hun rijexamen. Gemiddeld gaan mensen in Nederland twee à drie keer op rijexamen. Het slagingspercentage in de regio Sittard-Geleen ligt rond de 55 à 60 procent.
                </p>
                <p>
                  Klik{' '}
                  <a
                    href="https://www.cbr.nl/nl/rijbewijs-auto/rijschool-vinden.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                    style={{ color: p }}
                  >
                    hier
                  </a>{' '}
                  om te zien hoe hoog de rijschool scoort die jij op het oog hebt!
                </p>
              </div>
            </div>
          )}

          {/* Tab: Rekensommetje */}
          {tab === 'rekensommetje' && (
            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: p }}>
                Een rekensommetje
              </h2>
              <div className="w-10 h-1 rounded mb-8" style={{ backgroundColor: p }} />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Stel: Autorijschool X heeft 40 leerlingen per jaar voor het rijexamen. Hiervan slagen 20 à 24 de eerste keer. Van de overgebleven 16 à 20 gezakte leerlingen slagen er de tweede keer nog eens 8 à 10. Bij deze school ga je gemiddeld 2 à 3 keer op examen — één keer zakken kost al gauw <strong>€ 400 à € 500 extra</strong>.
                </p>
                <p>
                  Bij Autorijschool van der Sande slagen van diezelfde 40 leerlingen er <strong>minimaal 36 de eerste keer</strong>. Dat scheelt enorm in tijd, geld en stress.
                </p>
                <p>
                  Door de juiste rijschool te kiezen bespaar je jezelf een hoop geld en stress. Bij Autorijschool van der Sande zijn er niet alleen maar woorden, maar zeker ook daden!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {config.stats.map((s, i) => (
              <div key={i} className="text-center bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-5xl font-extrabold mb-3" style={{ color: p }}>
                  {s.value}
                </div>
                <p className="text-sm font-medium text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Vraag een prijsopgave aan</h2>
          <p className="text-lg opacity-90 mb-8">
            Neem contact op voor een persoonlijk en vrijblijvend gesprek over de kosten van jouw rijopleiding.
          </p>
          <Link
            to={config.basePath + '/contact'}
            className="inline-block px-10 py-4 bg-white font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            style={{ color: p }}
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </Layout>
  );
};
