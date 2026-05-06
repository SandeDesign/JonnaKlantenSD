import { Layout } from '../components/Layout';
import { config } from '../config';
import { Link } from 'react-router-dom';

const nieuwsItems = [
  {
    id: 1,
    datum: '12 april 2025',
    titel: 'Nieuwe Mercedes lesauto in gebruik genomen',
    samenvatting: 'Autorijschool van der Sande heeft een gloednieuwe Mercedes in gebruik genomen. De auto is uitgerust met de nieuwste veiligheidssystemen en zorgt voor een nog betere leerervaring.',
  },
  {
    id: 2,
    datum: '3 februari 2025',
    titel: '90% slagingspercentage gehandhaafd in 2024',
    samenvatting: 'Ook in 2024 slaagde 90% van de leerlingen de eerste keer voor hun rijexamen. Dit bevestigt opnieuw de hoge kwaliteit van de rijopleiding bij Autorijschool van der Sande.',
  },
  {
    id: 3,
    datum: '15 januari 2025',
    titel: 'Spoedopleidingen nu ook beschikbaar in het weekend',
    samenvatting: 'Vanaf februari 2025 biedt Autorijschool van der Sande spoedopleidingen aan in het weekend. Ideaal voor leerlingen die snel hun rijbewijs willen halen.',
  },
];

export const Nieuws = () => {
  const p = config.colors.primary;

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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Nieuws</h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Blijf op de hoogte van het laatste nieuws van Autorijschool van der Sande.
          </p>
        </div>
      </section>

      {/* Nieuws items */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            {nieuwsItems.map((item) => (
              <article key={item.id} className="border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: config.colors.purple }}>
                  {item.datum}
                </p>
                <h2 className="text-xl font-bold mb-3" style={{ color: config.colors.text }}>
                  {item.titel}
                </h2>
                <p className="text-gray-500 leading-relaxed">{item.samenvatting}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Vragen of aanmelden?</h2>
          <p className="text-lg opacity-90 mb-8">
            Neem vrijblijvend contact op — ik help je graag verder.
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
