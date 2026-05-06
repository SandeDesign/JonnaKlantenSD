import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const c = config.colors;

export const Prijzen = () => {
  const [tab, setTab] = useState<'kwaliteit' | 'rekensommetje'>('kwaliteit');

  return (
    <Layout>
      {/* Banner */}
      <section
        className="py-16 text-white text-center"
        style={{ background: `linear-gradient(135deg, ${c.gradientFrom} 0%, ${c.gradientMid} 100%)` }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Prijzen</h1>
          <p className="text-white/75 max-w-xl mx-auto">
            Kwaliteit hoeft niet duur te zijn — het betaalt zich juist terug.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section style={{ backgroundColor: c.background }} className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Tab buttons */}
          <div
            className="flex rounded-2xl overflow-hidden mb-12 p-1 gap-1"
            style={{ backgroundColor: c.primaryLight }}
          >
            {([
              { key: 'kwaliteit', label: 'Kwaliteit VS Duurkoop' },
              { key: 'rekensommetje', label: 'Een rekensommetje' },
            ] as const).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className="flex-1 py-3.5 text-sm font-semibold rounded-xl transition-all"
                style={
                  tab === key
                    ? { background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.gradientMid})`, color: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }
                    : { color: c.textBody, backgroundColor: 'transparent' }
                }
              >
                {label}
              </button>
            ))}
          </div>

          {tab === 'kwaliteit' && (
            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: c.text }}>Kwaliteit VS Duurkoop</h2>
              <div className="w-10 h-1 rounded mb-8" style={{ backgroundColor: c.primary }} />
              <div className="space-y-4 leading-relaxed text-sm" style={{ color: c.textBody }}>
                <p>
                  Als je voor het eerst op zoek gaat naar een rijschool, kom je vaak autorijscholen tegen met lagere prijzen dan bij van der Sande. Schijn bedriegt: dit zijn vaak scholen die pas gestart zijn of weinig leerlingen hebben. Door mijn <strong style={{ color: c.text }}>30+ jaar doorgewinterde ervaring</strong> hebben mijn leerlingen aantoonbaar minder rijlessen nodig.
                </p>
                <p>
                  Bij Autorijschool van der Sande slaagt <strong style={{ color: c.text }}>90% van de leerlingen de eerste keer</strong> voor hun rijexamen. Gemiddeld gaan mensen in Nederland twee à drie keer op rijexamen. Het slagingspercentage in de regio Sittard-Geleen ligt rond de 55 à 60 procent.
                </p>
                <p>
                  Klik{' '}
                  <a
                    href="https://www.cbr.nl/nl/rijbewijs-auto/rijschool-vinden.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold"
                    style={{ color: c.primary }}
                  >
                    hier
                  </a>{' '}
                  om te zien hoe hoog de rijschool scoort die jij op het oog hebt!
                </p>
              </div>
            </div>
          )}

          {tab === 'rekensommetje' && (
            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: c.text }}>Een rekensommetje</h2>
              <div className="w-10 h-1 rounded mb-8" style={{ backgroundColor: c.primary }} />
              <div className="space-y-4 leading-relaxed text-sm" style={{ color: c.textBody }}>
                <p>
                  Stel: Autorijschool X heeft 40 leerlingen per jaar voor het rijexamen. Hiervan slagen 20 à 24 de eerste keer. Van de overgebleven gezakte leerlingen slagen er de tweede keer nog eens 8 à 10. Bij deze school ga je gemiddeld 2 à 3 keer op examen — één keer zakken kost al gauw <strong style={{ color: c.text }}>€ 400 à € 500 extra</strong>.
                </p>
                <p>
                  Bij Autorijschool van der Sande slagen van diezelfde 40 leerlingen er <strong style={{ color: c.text }}>minimaal 36 de eerste keer</strong>. Dat scheelt enorm in tijd, geld en stress.
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
      <section style={{ backgroundColor: c.primaryLight }} className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {config.stats.map((s, i) => (
              <div
                key={i}
                className="text-center rounded-2xl p-8"
                style={{ background: `linear-gradient(135deg, ${c.gradientFrom}18, white)` }}
              >
                <div className="text-5xl font-extrabold mb-2" style={{ color: c.gradientFrom }}>{s.value}</div>
                <p className="text-sm font-medium" style={{ color: c.textBody }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-white text-center"
        style={{ background: `linear-gradient(135deg, ${c.accent} 0%, ${c.gradientFrom} 100%)` }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Vraag een prijsopgave aan</h2>
          <p className="text-white/80 mb-8 text-lg">
            Neem contact op voor een persoonlijk en vrijblijvend gesprek.
          </p>
          <Link
            to={config.basePath + '/contact'}
            className="inline-block px-10 py-4 font-bold rounded-xl hover:shadow-xl hover:-translate-y-0.5 transition-all"
            style={{ backgroundColor: 'white', color: c.accent }}
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </Layout>
  );
};
