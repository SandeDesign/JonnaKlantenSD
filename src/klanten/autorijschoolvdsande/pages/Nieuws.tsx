import { Layout } from '../components/Layout';
import { config } from '../config';
import { Link } from 'react-router-dom';

const c = config.colors;

const nieuwsItems = [
  {
    id: 1,
    datum: '12 april 2025',
    titel: 'Nieuwe Mercedes lesauto in gebruik genomen',
    samenvatting: 'Autorijschool van der Sande heeft een gloednieuwe Mercedes in gebruik genomen, uitgerust met de nieuwste veiligheidssystemen voor een nog betere leerervaring.',
  },
  {
    id: 2,
    datum: '3 februari 2025',
    titel: '90% slagingspercentage gehandhaafd in 2024',
    samenvatting: 'Ook in 2024 slaagde 90% van de leerlingen de eerste keer voor hun rijexamen — ver boven het regionale gemiddelde van 55–60%.',
  },
  {
    id: 3,
    datum: '15 januari 2025',
    titel: 'Spoedopleidingen nu ook beschikbaar in het weekend',
    samenvatting: 'Vanaf februari 2025 zijn er weekendspoed­opleidingen beschikbaar. Ideaal voor leerlingen die snel hun rijbewijs willen halen.',
  },
];

export const Nieuws = () => (
  <Layout>
    {/* Banner */}
    <section
      className="py-16 text-white text-center"
      style={{ background: `linear-gradient(135deg, ${c.gradientFrom} 0%, ${c.gradientMid} 100%)` }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Nieuws</h1>
        <p className="text-white/75 max-w-xl mx-auto">
          Blijf op de hoogte van het laatste nieuws van Autorijschool van der Sande.
        </p>
      </div>
    </section>

    {/* Nieuws items */}
    <section style={{ backgroundColor: c.background }} className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-6">
          {nieuwsItems.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl p-8 hover:shadow-md transition-shadow"
              style={{ backgroundColor: c.primaryLight, border: `1px solid ${c.gradientFrom}22` }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: c.primary }}>
                {item.datum}
              </p>
              <h2 className="text-lg font-bold mb-3" style={{ color: c.text }}>{item.titel}</h2>
              <p className="text-sm leading-relaxed" style={{ color: c.textBody }}>{item.samenvatting}</p>
            </article>
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
        <h2 className="text-3xl font-bold mb-4">Vragen of aanmelden?</h2>
        <p className="text-white/80 mb-8 text-lg">Neem vrijblijvend contact op — ik help je graag verder.</p>
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
