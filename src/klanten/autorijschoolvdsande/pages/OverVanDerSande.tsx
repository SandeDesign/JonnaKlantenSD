import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const c = config.colors;
const gradBanner = `linear-gradient(135deg, ${c.gradientFrom} 0%, ${c.gradientMid} 100%)`;
const gradDark   = `linear-gradient(135deg, ${c.accent} 0%, ${c.gradientFrom} 100%)`;

export const OverVanDerSande = () => (
  <Layout>
    {/* Banner */}
    <section className="py-20 text-white" style={{ background: gradBanner }}>
      <div className="container mx-auto px-4">
        <span className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4 block">Even voorstellen</span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">Mike van der Sande</h1>
      </div>
    </section>

    {/* Bio */}
    <section className="py-20" style={{ backgroundColor: c.primaryLight }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Foto */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://www.autorijschoolvdsande.nl/wp-content/uploads/2021/02/Mike_ZW_02-683x1024.jpg"
                alt="Mike van der Sande" className="w-full h-auto" />
            </div>
            <blockquote className="mt-6 text-xl font-extrabold" style={{ color: c.gradientFrom }}>
              "Jouw rijbewijs is mijn reclame!"
            </blockquote>
          </div>

          {/* Tekst */}
          <div className="lg:col-span-3 space-y-5 text-sm leading-relaxed" style={{ color: c.textBody }}>
            <p>
              Mijn naam is Mike van der Sande, geboren en getogen in Geleen. Ik kom uit een echt ondernemersgezin waarbij hard en goed werken ons met de paplepel is ingegoten. Tijdens mijn studie aan het MEAO te Sittard, kwam ik er al snel achter dat de boekhoudkundige richting niét mijn ding was — al snel schreef ik me in bij de rij-instructeur opleiding.
            </p>
            <p>
              Op twintigjarige leeftijd opende ik de deuren van Autorijschool M.J.H.E. van der Sande en werd daarmee de <strong style={{ color: c.text }}>jongste rijschoolhouder van Nederland</strong>. Al snel merkte ik dat het aanleren van vaardigheden bij mensen echt mijn passie is.
            </p>
            <p>
              Naast mijn rijschool heb ik een grote passie voor sport — mountainbiken, krachtsport en yoga. Mijn fanatieke, sportieve kant is ook in de lesauto goed merkbaar. Op momenten dat het niet loopt zoals het moet ben ik een steunpilaar en motivator. Samen zetten wij elke keer weer een stap in de goede richting, op een leuke maar zeker effectieve manier.
            </p>
            <p>
              Omdat de verschillen tussen leerlingen groot zijn, vind ik het belangrijk dat iedereen een <strong style={{ color: c.text }}>perfecte, op maat gemaakte rijopleiding</strong> krijgt. In het aantal lessen dat bij jou past, zorg ik dat je 100% kans maakt om te slagen voor je examen.
            </p>
            <p>
              Resultaat is misschien wel het belangrijkste, maar voor mij is het minstens zo belangrijk dat een leerling zich op en top voelt op de weg naar zijn/haar rijbewijs.
            </p>
            <p className="font-semibold" style={{ color: c.text }}>Hopelijk zie ik je snel terug in mijn autorijschool!</p>
            <div className="pt-4">
              <Link to={config.basePath + '/contact'}
                className="inline-block px-8 py-4 font-bold text-sm text-white rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all"
                style={{ background: gradDark }}>
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Wat mij onderscheidt */}
    <section className="py-20 relative overflow-hidden" style={{ background: gradBanner }}>
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/3"
        style={{ backgroundColor: 'white' }} />
      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-white mb-16">Wat mij onderscheidt</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {config.features.map((f, i) => (
            <div key={i} className="text-white">
              <span className="text-4xl mb-5 block">{f.icon}</span>
              <h3 className="font-bold text-base mb-2">{f.title}</h3>
              <p className="text-sm text-white/65 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);
