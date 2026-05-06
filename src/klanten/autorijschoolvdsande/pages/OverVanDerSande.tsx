import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const c = config.colors;

export const OverVanDerSande = () => (
  <Layout>
    {/* Banner */}
    <section
      className="py-16 text-white text-center"
      style={{ background: `linear-gradient(135deg, ${c.gradientFrom} 0%, ${c.gradientMid} 100%)` }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Even voorstellen</h1>
        <p className="text-white/75 max-w-xl mx-auto">Wie is Mike van der Sande?</p>
      </div>
    </section>

    {/* Bio */}
    <section style={{ backgroundColor: c.background }} className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Foto */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-sm">
              <img
                src="https://www.autorijschoolvdsande.nl/wp-content/uploads/2021/02/Mike_ZW_02-683x1024.jpg"
                alt="Mike van der Sande"
                className="w-full object-cover"
              />
            </div>
            <blockquote className="mt-6 text-xl font-bold text-center lg:text-left" style={{ color: c.primary }}>
              "Jouw rijbewijs is mijn reclame!"
            </blockquote>
          </div>

          {/* Tekst */}
          <div>
            <h2 className="text-3xl font-bold mb-2" style={{ color: c.text }}>Mike van der Sande</h2>
            <div className="w-12 h-1 rounded mb-8" style={{ backgroundColor: c.primary }} />
            <div className="space-y-4 leading-relaxed text-sm" style={{ color: c.textBody }}>
              <p>
                Mijn naam is Mike van der Sande, geboren en getogen in Geleen. Ik kom uit een echt ondernemersgezin waarbij hard en goed werken ons met de paplepel is ingegoten. Tijdens mijn studie aan het MEAO te Sittard, kwam ik er al snel achter dat de boekhoudkundige richting niét mijn ding was. Al snel schreef ik me in bij de rij-instructeur opleiding.
              </p>
              <p>
                Op twintigjarige leeftijd opende ik de deuren van Autorijschool M.J.H.E. van der Sande — daarmee was ik de jongste rijschoolhouder van Nederland. Al snel merkte ik dat het aanleren van vaardigheden bij mensen echt mijn passie is. Mijn specialisme ligt bij het geven van autorijlessen in de categorie B.
              </p>
              <p>
                Naast mijn rijschool heb ik een grote passie voor sport (mountainbiken, krachtsport en yoga). Mijn fanatieke, sportieve kant is ook in de lesauto goed merkbaar. Op momenten dat het niet loopt zoals het moet ben ik een steunpilaar en motivator. Samen zetten wij elke keer weer een stap in de goede richting — op een leuke, ontspannen maar zeker effectieve manier.
              </p>
              <p>
                Omdat de verschillen tussen leerlingen groot zijn, vind ik het belangrijk dat een leerling een perfecte, op maat gemaakte rijopleiding krijgt. In het aantal lessen dat bij jou past, zorg ik dat je 100% kans maakt om te slagen voor je examen.
              </p>
              <p>
                Resultaat is misschien wel het belangrijkste, maar voor mij is het minstens zo belangrijk dat een leerling zich op en top voelt op de weg naar zijn/haar rijbewijs.
              </p>
              <p className="font-semibold" style={{ color: c.text }}>Hopelijk zie ik je snel terug in mijn autorijschool!</p>
            </div>
            <div className="mt-8">
              <Link
                to={config.basePath + '/contact'}
                className="inline-block px-8 py-4 font-bold text-sm text-white rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all"
                style={{ backgroundColor: c.primary }}
              >
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Wat mij onderscheidt */}
    <section style={{ backgroundColor: c.primaryLight }} className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-14" style={{ color: c.text }}>Wat mij onderscheidt</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.features.map((f, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl"
              style={{ backgroundColor: 'white', border: `1px solid ${c.gradientFrom}22` }}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-sm mb-2" style={{ color: c.text }}>{f.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: c.textBody }}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);
