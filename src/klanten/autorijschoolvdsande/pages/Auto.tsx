import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

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

export const Auto = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      {/* Hero banner */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555353540-64580b51c258?w=1920&h=600&fit=crop"
          alt="Lesauto"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(27,45,128,0.65)' }} />
        <div className="relative container mx-auto px-4 pb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wide">
            Auto
          </h1>
        </div>
      </section>

      {/* De lesauto */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Tekst */}
            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: p }}>
                De lesauto
              </h2>
              <div className="w-10 h-1 rounded mb-6" style={{ backgroundColor: p }} />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Waar veel autorijscholen bezuinigen op de lesauto ben je bij Autorijschool van der Sande van alle gemakken voorzien. Zo rijd je in een gloednieuwe lesauto. Deze is voorzien van de modernste technologie en veiligheidssystemen van nu.
                </p>
                <p>
                  In de wintermaanden is de auto uiteraard voorzien van winterbanden. Dit is niet alleen veilig tijdens de rijlessen, ook vergroot het de kans dat je tussentijdse toets of rijexamen gewoon doorgaat ondanks het slechte weer.
                </p>
                <p>
                  De auto is rookvrij en voorzien van airco, voor in de hete zomermaanden. Ook heeft de auto een open schuifdak.
                </p>
                <p>
                  Iedereen vindt in deze auto een perfecte zit- en stuurhouding. Mijn grootste leerling was 210 centimeter en de kleinste 146 centimeter!
                </p>
                <p>
                  Zeker in de eerste fase van de rijlessen is een goede lesauto van groot belang om deze onder controle te krijgen. Hierdoor kun je je sneller richten op de verkeerssituaties om je heen.
                </p>
              </div>
            </div>

            {/* Foto + voordelen */}
            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
                <img
                  src="https://images.unsplash.com/photo-1617469767764-a7dcf2a3c2c2?w=800&h=500&fit=crop&q=80"
                  alt="Witte lesauto"
                  className="w-full h-64 object-cover"
                  onError={e => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=500&fit=crop';
                  }}
                />
              </div>

              <h3 className="text-xl font-bold mb-4" style={{ color: p }}>
                De voordelen
              </h3>
              <div className="w-8 h-1 rounded mb-5" style={{ backgroundColor: p }} />
              <ul className="space-y-2">
                {voordelen.map((v, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                    <span className="font-bold" style={{ color: p }}>✓</span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Wil je kennismaken?</h2>
          <p className="text-lg opacity-90 mb-8">
            Neem contact op en rij binnenkort in de mooiste lesauto van Sittard-Geleen.
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
