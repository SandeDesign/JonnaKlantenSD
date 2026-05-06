import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const PraktijkTheorie = () => {
  const p = config.colors.primary;

  return (
    <Layout>
      {/* Hero banner met foto */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=600&fit=crop"
          alt="Rijles"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(27,45,128,0.65)' }} />
        <div className="relative container mx-auto px-4 pb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wide">
            Praktijk / Theorie
          </h1>
        </div>
      </section>

      {/* Twee kolommen */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Praktijk */}
            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: p }}>
                Praktijk
              </h2>
              <div className="w-10 h-1 rounded mb-6" style={{ backgroundColor: p }} />
              <p className="text-gray-600 leading-relaxed mb-4">
                Bij Autorijschool van der Sande kun je met een goed gevoel starten aan je rijopleiding. Met een slagingspercentage van 80% ben je bij mij aan het juiste adres. Ik bied zowel een reguliere opleiding aan als een spoedopleiding.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Voor een compleet overzicht van wat de praktijklessen inhouden klik je op onderstaande button!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={config.basePath + '/contact'}
                  className="px-5 py-3 text-sm font-semibold rounded-lg border-2 text-center transition-colors hover:text-white"
                  style={{ borderColor: p, color: p }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = p;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = p;
                  }}
                >
                  Meer praktijk informatie
                </Link>
                <a
                  href="https://www.cbr.nl/nl/rijbewijs-auto.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-sm font-semibold rounded-lg border-2 text-center transition-colors hover:text-white"
                  style={{ borderColor: p, color: p }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = p;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = p;
                  }}
                >
                  Rijschool machtigen
                </a>
              </div>
            </div>

            {/* Theorie */}
            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: p }}>
                Theorie
              </h2>
              <div className="w-10 h-1 rounded mb-6" style={{ backgroundColor: p }} />
              <p className="text-gray-600 leading-relaxed mb-4">
                Vanaf 16 jaar mag je het theorie-examen afleggen. Als je eenmaal je theorie behaald hebt is deze 1,5 jaar geldig.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Om je theorie te oefenen bied ik een zelfsturend lesprogramma aan. Voor meer informatie over theorie en het desbetreffende lesprogramma klik op onderstaande button.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.theorie.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-sm font-semibold rounded-lg border-2 text-center transition-colors"
                  style={{ borderColor: p, color: p }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = p;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = p;
                  }}
                >
                  Meer theorie informatie
                </a>
                <a
                  href="https://www.digid.nl/aanvragen-en-activeren/digid-aanvragen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-sm font-semibold rounded-lg border-2 text-center transition-colors"
                  style={{ borderColor: p, color: p }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = p;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = p;
                  }}
                >
                  DigiD aanvragen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leeftijdsinfo sectie */}
      <section className="py-16" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-5xl font-extrabold mb-2" style={{ color: p }}>16</div>
              <p className="font-semibold mb-2" style={{ color: config.colors.text }}>Theorie-examen</p>
              <p className="text-sm text-gray-500">Vanaf 16 jaar mag je je theorie-examen afleggen. Geldig voor 1,5 jaar.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-5xl font-extrabold mb-2" style={{ color: p }}>17</div>
              <p className="font-semibold mb-2" style={{ color: config.colors.text }}>2toDrive</p>
              <p className="text-sm text-gray-500">Vanaf 17 jaar kun je starten met 2toDrive en onder begeleiding rijden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Direct starten?</h2>
          <p className="text-lg opacity-90 mb-8">
            Neem contact op voor een vrijblijvend gesprek over jouw rijopleiding.
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
