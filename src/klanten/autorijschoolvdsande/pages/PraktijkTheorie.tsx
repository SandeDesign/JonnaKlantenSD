import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const c = config.colors;

export const PraktijkTheorie = () => (
  <Layout>
    {/* Hero banner */}
    <section className="relative h-72 flex items-end overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=600&fit=crop"
        alt="Rijles"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${c.accent}CC 0%, ${c.gradientFrom}99 100%)` }}
      />
      <div className="relative container mx-auto px-4 pb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wide">
          Praktijk / Theorie
        </h1>
      </div>
    </section>

    {/* Twee kolommen */}
    <section style={{ backgroundColor: c.background }} className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Praktijk */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: c.text }}>Praktijk</h2>
            <div className="w-10 h-1 rounded mb-6" style={{ backgroundColor: c.primary }} />
            <p className="leading-relaxed mb-4 text-sm" style={{ color: c.textBody }}>
              Bij Autorijschool van der Sande kun je met een goed gevoel starten aan je rijopleiding. Met een slagingspercentage van 80% ben je bij mij aan het juiste adres. Ik bied zowel een reguliere opleiding aan als een spoedopleiding.
            </p>
            <p className="leading-relaxed mb-8 text-sm" style={{ color: c.textBody }}>
              Voor een compleet overzicht van wat de praktijklessen inhouden klik je op onderstaande button!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              {[
                { label: 'Meer praktijk informatie', href: config.basePath + '/contact' },
                { label: 'Rijschool machtigen', href: 'https://www.cbr.nl/nl/rijbewijs-auto.htm' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="px-5 py-3 text-sm font-semibold rounded-lg border-2 text-center transition-all hover:shadow-md"
                  style={{ borderColor: c.primary, color: c.primary }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = c.primary; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = c.primary; }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Theorie */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: c.text }}>Theorie</h2>
            <div className="w-10 h-1 rounded mb-6" style={{ backgroundColor: c.primary }} />
            <p className="leading-relaxed mb-4 text-sm" style={{ color: c.textBody }}>
              Vanaf 16 jaar mag je het theorie-examen afleggen. Als je eenmaal je theorie behaald hebt is deze 1,5 jaar geldig.
            </p>
            <p className="leading-relaxed mb-8 text-sm" style={{ color: c.textBody }}>
              Om je theorie te oefenen bied ik een zelfsturend lesprogramma aan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              {[
                { label: 'Meer theorie informatie', href: 'https://www.theorie.nl' },
                { label: 'DigiD aanvragen', href: 'https://www.digid.nl/aanvragen-en-activeren/digid-aanvragen' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-sm font-semibold rounded-lg border-2 text-center transition-all hover:shadow-md"
                  style={{ borderColor: c.primary, color: c.primary }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = c.primary; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = c.primary; }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Leeftijdsinfo */}
    <section style={{ backgroundColor: c.primaryLight }} className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center">
          {[
            { age: '16', title: 'Theorie-examen', desc: 'Vanaf 16 jaar mag je je theorie-examen afleggen. Geldig voor 1,5 jaar.' },
            { age: '17', title: '2toDrive', desc: 'Vanaf 17 jaar kun je starten met 2toDrive en onder begeleiding rijden.' },
          ].map(({ age, title, desc }) => (
            <div key={age} className="rounded-2xl p-8 shadow-sm" style={{ backgroundColor: 'white' }}>
              <div className="text-5xl font-extrabold mb-2" style={{ color: c.primary }}>{age}</div>
              <p className="font-semibold mb-2" style={{ color: c.text }}>{title}</p>
              <p className="text-sm" style={{ color: c.textBody }}>{desc}</p>
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
        <h2 className="text-3xl font-bold mb-4">Direct starten?</h2>
        <p className="text-white/80 mb-8 text-lg">Neem contact op voor een vrijblijvend gesprek over jouw rijopleiding.</p>
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
