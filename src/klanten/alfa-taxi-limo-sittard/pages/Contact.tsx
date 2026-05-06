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
      <section
        className="relative py-24 text-white text-center"
        style={{ backgroundColor: config.colors.text }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Vragen, opmerkingenof wilt u een rit boeken? Wij zijn dag en nacht bereikbaar.
          </p>
        </div>
      </section>

      {/* Quick contact strip */}
      <div style={{ backgroundColor: p }} className="py-5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
          <a href={`tel:${config.contact.phone}`} className="flex items-center gap-3 text-white font-bold text-lg hover:underline">
            <span className="text-2xl">📞</span>
            <span>{config.contact.phone}</span>
          </a>
          <span className="text-white/30 hidden md:block">|</span>
          <a href={`mailto:${config.contact.email}`} className="flex items-center gap-3 text-white font-medium hover:underline">
            <span className="text-2xl">✉️</span>
            <span>{config.contact.email}</span>
          </a>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold" style={{ color: config.colors.text }}>
                Onze Gegevens
              </h2>

              {[
                { icon: '📍', label: 'Adres', value: config.contact.address },
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

              <div className="flex gap-4 pt-2">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: config.colors.primaryLight }}
                >
                  🕐
                </div>
                <div>
                  <p className="text-sm text-gray-400">Beschikbaarheid</p>
                  <p className="font-medium" style={{ color: config.colors.text }}>
                    7 dagen per week — {config.contact.hours.weekday}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: config.colors.primaryLight }}
                >
                  🏢
                </div>
                <div>
                  <p className="text-sm text-gray-400">KVK-nummer</p>
                  <p className="font-medium" style={{ color: config.colors.text }}>
                    {config.contact.kvk}
                  </p>
                </div>
              </div>

              <div
                className="p-5 rounded-xl border-2"
                style={{ borderColor: p, backgroundColor: config.colors.primaryLight }}
              >
                <p className="font-bold text-sm mb-1" style={{ color: config.colors.text }}>
                  Snel een rit nodig?
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  Bel direct voor directe beschikbaarheid en vaste prijzen.
                </p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="inline-block px-5 py-2.5 text-sm font-bold text-white rounded-xl"
                  style={{ backgroundColor: p }}
                >
                  📞 Bel Nu
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-16 px-8 border border-gray-100 rounded-2xl">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: config.colors.text }}>
                    Bericht ontvangen!
                  </h3>
                  <p className="text-gray-500">
                    Wij nemen zo snel mogelijk contact met u op.
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
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                        placeholder="Uw naam"
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
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                        placeholder="+31 6 ..."
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                      placeholder="uw@email.nl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                      Uw bericht *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.bericht}
                      onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-300 resize-none"
                      placeholder="Hoe kunnen wij u helpen?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 font-bold text-white rounded-xl transition-opacity hover:opacity-90"
                    style={{ backgroundColor: p }}
                  >
                    Verstuur Bericht
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    * Verplichte velden. Uw gegevens worden nooit gedeeld met derden.
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
