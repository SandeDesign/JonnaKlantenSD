import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

const c = config.colors;

export const Contact = () => {
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Banner */}
      <section
        className="py-16 text-white text-center"
        style={{ background: `linear-gradient(135deg, ${c.gradientFrom} 0%, ${c.gradientMid} 100%)` }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Contact</h1>
          <p className="text-white/75 max-w-xl mx-auto">
            Vragen of aanmelden? Ik reageer zo snel mogelijk.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: c.background }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold" style={{ color: c.text }}>Gegevens</h2>

              {[
                { icon: '📍', label: 'Locatie', value: config.contact.address },
                { icon: '📞', label: 'Telefoon', value: config.contact.phone, href: `tel:${config.contact.phone}` },
                { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: c.primaryLight }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: c.textBody }}>{label}</p>
                    {href ? (
                      <a href={href} className="font-semibold text-sm hover:underline" style={{ color: c.primary }}>
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-sm" style={{ color: c.text }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: c.primaryLight }}
                >
                  🕐
                </div>
                <div>
                  <p className="text-xs font-medium mb-0.5" style={{ color: c.textBody }}>Lestijden</p>
                  <p className="font-semibold text-sm" style={{ color: c.text }}>Maandag t/m zaterdag</p>
                  <p className="text-xs" style={{ color: c.textBody }}>Op afspraak</p>
                </div>
              </div>

              <div
                className="rounded-2xl p-5"
                style={{ background: `linear-gradient(135deg, ${c.gradientFrom}18, ${c.gradientLight})` }}
              >
                <p className="text-sm font-semibold mb-1" style={{ color: c.primary }}>
                  Vrijblijvend kennismakingsgesprek
                </p>
                <p className="text-xs leading-relaxed" style={{ color: c.textBody }}>
                  Wil je weten of Autorijschool van der Sande bij jou past? Neem gerust contact op — geen verplichtingen.
                </p>
              </div>
            </div>

            {/* Formulier */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-16 px-8 rounded-2xl" style={{ backgroundColor: c.primaryLight }}>
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: c.text }}>Bericht ontvangen!</h3>
                  <p className="text-sm" style={{ color: c.textBody }}>Mike neemt zo snel mogelijk contact met je op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: c.text }}>Naam *</label>
                      <input
                        type="text"
                        required
                        value={form.naam}
                        onChange={(e) => setForm({ ...form, naam: e.target.value })}
                        className="w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2"
                        style={{ borderColor: `${c.gradientFrom}44`, backgroundColor: c.primaryLight }}
                        placeholder="Jouw naam"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: c.text }}>Telefoon</label>
                      <input
                        type="tel"
                        value={form.telefoon}
                        onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                        className="w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2"
                        style={{ borderColor: `${c.gradientFrom}44`, backgroundColor: c.primaryLight }}
                        placeholder="06-..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: c.text }}>E-mailadres *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2"
                      style={{ borderColor: `${c.gradientFrom}44`, backgroundColor: c.primaryLight }}
                      placeholder="jouw@email.nl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: c.text }}>Bericht *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.bericht}
                      onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      className="w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 resize-none"
                      style={{ borderColor: `${c.gradientFrom}44`, backgroundColor: c.primaryLight }}
                      placeholder="Hoe kan ik je helpen?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 font-bold text-sm text-white rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    style={{ background: `linear-gradient(135deg, ${c.gradientFrom}, ${c.accent})` }}
                  >
                    Verstuur bericht
                  </button>
                  <p className="text-xs text-center" style={{ color: c.textBody }}>
                    * Verplichte velden. Jouw gegevens worden nooit gedeeld met derden.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
