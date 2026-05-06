import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const c = config.colors;

const voordelen = [
  'Moderne technologie',
  'Geavanceerde veiligheidssystemen',
  'Airconditioning (zomer)',
  'Winterbanden (winter)',
  'Rookvrij voertuig',
  'Open schuifdak',
  'Ideale zit- en stuurhouding voor iedereen',
  'CBR-goedgekeurd voor rijexamen',
];

export const Auto = () => (
  <Layout>
    {/* Hero banner */}
    <section className="relative h-72 flex items-end overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1555353540-64580b51c258?w=1920&h=600&fit=crop"
        alt="Lesauto"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${c.accent}CC 0%, ${c.gradientFrom}99 100%)` }}
      />
      <div className="relative container mx-auto px-4 pb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wide">Auto</h1>
      </div>
    </section>

    {/* De lesauto */}
    <section style={{ backgroundColor: c.background }} className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: c.text }}>De lesauto</h2>
            <div className="w-10 h-1 rounded mb-6" style={{ backgroundColor: c.primary }} />
            <div className="space-y-4 leading-relaxed text-sm" style={{ color: c.textBody }}>
              <p>
                Waar veel autorijscholen bezuinigen op de lesauto ben je bij Autorijschool van der Sande van alle gemakken voorzien. Zo rijd je in een gloednieuwe Mercedes — voorzien van de modernste technologie en veiligheidssystemen van nu.
              </p>
              <p>
                In de wintermaanden is de auto uiteraard voorzien van winterbanden. Dit vergroot ook de kans dat je tussentijdse toets of rijexamen gewoon doorgaat ondanks slecht weer.
              </p>
              <p>
                De auto is rookvrij en voorzien van airco voor de hete zomermaanden. Ook heeft de auto een open schuifdak.
              </p>
              <p>
                Iedereen vindt in deze auto een perfecte zit- en stuurhouding. Mijn grootste leerling was 210 cm en de kleinste 146 cm!
              </p>
              <p>
                Een goede lesauto is zeker in de eerste fase van groot belang om de auto onder controle te krijgen — hierdoor kun je je sneller richten op de verkeerssituaties.
              </p>
            </div>
          </div>

          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=500&fit=crop"
                alt="Witte lesauto"
                className="w-full h-64 object-cover"
              />
            </div>
            <h3 className="text-lg font-bold mb-3" style={{ color: c.text }}>De voordelen</h3>
            <div className="w-8 h-1 rounded mb-5" style={{ backgroundColor: c.primary }} />
            <ul className="grid grid-cols-1 gap-2">
              {voordelen.map((v, i) => (
                <li key={i} className="flex items-center gap-3 text-sm" style={{ color: c.textBody }}>
                  <span className="font-bold text-base" style={{ color: c.primary }}>✓</span>
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section
      className="py-16 text-white text-center"
      style={{ background: `linear-gradient(135deg, ${c.accent} 0%, ${c.gradientFrom} 100%)` }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Wil je kennismaken?</h2>
        <p className="text-white/80 mb-8 text-lg">
          Rij binnenkort in de mooiste lesauto van Sittard-Geleen.
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
