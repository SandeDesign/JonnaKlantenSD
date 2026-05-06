import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Tarieven = () => {
  const accent = config.colors.accent;
  const primary = config.colors.primary;

  return (
    <Layout>
      {/* Page header */}
      <section
        className="py-24 text-white text-center"
        style={{ backgroundColor: primary }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Tarieven</h1>
          <p className="max-w-xl mx-auto text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Vaste, transparante tarieven zonder verborgen kosten. Altijd eerlijk, altijd duidelijk.
          </p>
        </div>
      </section>

      {/* Tarieven tabellen */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-10">
            {config.tarieven.map((categorie) => (
              <div key={categorie.titel} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                {/* Categorie header */}
                <div className="px-7 py-5" style={{ backgroundColor: primary }}>
                  <h2 className="text-lg font-bold text-white">{categorie.titel}</h2>
                </div>

                {/* Rijen */}
                <div className="divide-y divide-gray-100">
                  {categorie.regels.map((regel, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-7 py-4 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-700 text-sm">{regel.omschrijving}</span>
                      <span
                        className="font-bold text-sm tabular-nums"
                        style={{ color: accent }}
                      >
                        {regel.tarief}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Toelichting */}
          <div
            className="mt-10 p-7 rounded-2xl border-l-4 text-sm leading-relaxed text-gray-600"
            style={{ backgroundColor: `${accent}10`, borderColor: accent }}
          >
            <p className="font-semibold mb-2" style={{ color: primary }}>Let op:</p>
            <ul className="space-y-1 list-disc list-inside text-gray-600">
              <li>Alle tarieven zijn inclusief BTW.</li>
              <li>Nachttarief geldt van 22:00 tot 06:00 uur.</li>
              <li>Voor vaste ritten wordt vooraf een prijs afgesproken.</li>
              <li>Bij zakelijk transport kunt u maandelijks laten factureren — neem contact op voor een offerte.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: primary }}>
            Direct een rit boeken?
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Vul ons boekingsformulier in of bel ons direct. Wij zijn 24/7 beschikbaar.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to={config.basePath + '/boeken'}
              className="px-8 py-4 font-bold rounded-xl text-black transition-opacity hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              Nu Boeken
            </Link>
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-4 font-semibold rounded-xl border-2 transition-colors hover:text-white hover:bg-opacity-90 text-white"
              style={{ borderColor: primary, backgroundColor: primary }}
            >
              {config.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
