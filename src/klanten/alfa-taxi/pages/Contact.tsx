import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const accent = config.colors.accent;
  const primary = config.colors.primary;

  return (
    <Layout>
      {/* Page header */}
      <section className="py-24 text-white text-center" style={{ backgroundColor: primary }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact</h1>
          <p className="max-w-xl mx-auto text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Heeft u een vraag of wilt u meer informatie? Wij helpen u graag verder.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '📞',
                label: 'Telefoon',
                value: config.contact.phoneDisplay,
                href: `tel:${config.contact.phone}`,
                sub: '24/7 bereikbaar',
              },
              {
                icon: '✉️',
                label: 'E-mail',
                value: config.contact.email,
                href: `mailto:${config.contact.email}`,
                sub: 'Reactie binnen 1 werkdag',
              },
              {
                icon: '🕐',
                label: 'Beschikbaarheid',
                value: '24 uur per dag, 7 dagen per week',
                href: undefined,
                sub: 'Feestdagen inbegrepen',
              },
              {
                icon: '🚖',
                label: 'Direct Boeken',
                value: 'Gebruik ons boekingsformulier',
                href: config.basePath + '/boeken',
                sub: 'Bevestiging binnen 30 min.',
              },
            ].map(({ icon, label, value, href, sub }) => (
              <div
                key={label}
                className="flex gap-5 p-7 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: `${accent}20` }}
                >
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 mb-1">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="font-bold transition-opacity hover:opacity-75 text-sm block"
                      style={{ color: primary }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-bold text-sm" style={{ color: primary }}>{value}</p>
                  )}
                  {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
