import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const p = config.colors.primary;
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
        style={{
          background: `linear-gradient(135deg, ${config.colors.purple} 0%, ${p} 100%)`,
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Contact</h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Vragen of aanmelden? Ik reageer zo snel mogelijk.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold" style={{ color: config.colors.text }}>
                Gegevens
              </h2>

              {[
                { icon: '📍', label: 'Locatie', value: config.contact.address },
                { icon: '📞', label: 'Telefoon', value: config.contact.phone, href: `tel:${config.contact.phone}` },
                { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: config.colors.primaryLight }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{label}</p>
                    {href ? (
                      <a href={href} className="font-medium hover:underline" style={{ color: p }}>
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium" style={{ color: config.colors.text }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: config.colors.primaryLight }}
                >
                  🕐
                </div>
                <div>
                  <p className="text-sm text-gray-400">Lestijden</p>
                  <p className="font-medium" style={{ color: config.colors.text }}>
                    Maandag t/m zaterdag
                  </p>
                  <p className="text-sm text-gray-500">Op afspraak</p>
                </div>
              </div>

              <div
                className="rounded-2xl p-5 mt-4"
                style={{ backgroundColor: config.colors.primaryLight }}
              >
                <p className="text-sm font-semibold mb-1" style={{ color: p }}>
                  Vrijblijvend kennismakingsgesprek
                </p>
                <p className="text-sm text-gray-600">
                  Wil je weten of Autorijschool van der Sande bij jou past? Neem gerust contact op voor een vrijblijvend gesprek.
                </p>
              </div>
            </div>

            {/* Formulier */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-16 px-8 border border-gray-100 rounded-2xl">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: config.colors.text }}>
                    Bericht ontvangen!
                  </h3>
                  <p className="text-gray-500">
                    Mike neemt zo snel mogelijk contact met je op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                        Naam *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.naam}
                        onChange={(e) => setForm({ ...form, naam: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                        placeholder="Jouw naam"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        value={form.telefoon}
                        onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2"
                        placeholder="06-..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2"
                      placeholder="jouw@email.nl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                      Bericht *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.bericht}
                      onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 resize-none"
                      placeholder="Hoe kan ik je helpen? (bijv. aanmelden, spoedopleiding, vragen over het tarief...)"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90"
                    style={{ backgroundColor: p }}
                  >
                    Verstuur bericht
                  </button>
                  <p className="text-xs text-gray-400 text-center">
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
