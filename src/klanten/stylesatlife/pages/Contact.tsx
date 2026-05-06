import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

const titleFont = { fontFamily: "'Nunito', sans-serif" };

interface FormState {
  naam: string;
  email: string;
  telefoon: string;
  dienst: string;
  datum: string;
  tijd: string;
  bericht: string;
}

export const Contact = () => {
  const p = config.colors.primary;
  const [form, setForm] = useState<FormState>({
    naam: '',
    email: '',
    telefoon: '',
    dienst: '',
    datum: '',
    tijd: '',
    bericht: '',
  });
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass = 'w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white';

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-28 text-white text-center"
        style={{ backgroundColor: config.colors.text }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={titleFont}>
            Contact & Afspraak
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Vraag een offerte aan of maak direct een afspraak. Wij bevestigen binnen 1 werkdag.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold" style={{ ...titleFont, color: config.colors.text }}>
                Onze Gegevens
              </h2>

              {[
                { icon: '📍', label: 'Vestiging', value: config.contact.city },
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
                  <p className="text-sm text-gray-400">Openingstijden</p>
                  <p className="font-medium text-sm" style={{ color: config.colors.text }}>
                    Ma–Vr: {config.contact.hours.weekday}
                  </p>
                  <p className="font-medium text-sm" style={{ color: config.colors.text }}>
                    Zaterdag: {config.contact.hours.saturday}
                  </p>
                  <p className="font-medium text-sm" style={{ color: config.colors.text }}>
                    Zondag: {config.contact.hours.sunday}
                  </p>
                </div>
              </div>

              {/* Note */}
              <div
                className="rounded-xl p-4 text-sm"
                style={{ backgroundColor: config.colors.primaryLight, color: config.colors.text }}
              >
                <p className="font-semibold mb-1">📋 Na het indienen</p>
                <p className="text-gray-600 leading-relaxed">
                  Wij nemen uw aanvraag in behandeling en bevestigen de afspraak via e-mail of telefoon. Geen afspraak is definitief zonder bevestiging van ons.
                </p>
              </div>
            </div>

            {/* Appointment form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-20 px-8 border border-gray-100 rounded-2xl">
                  <div className="text-5xl mb-5">✅</div>
                  <h3 className="text-2xl font-bold mb-3" style={{ ...titleFont, color: config.colors.text }}>
                    Aanvraag ontvangen!
                  </h3>
                  <p className="text-gray-500 max-w-sm mx-auto">
                    Wij bevestigen uw afspraak zo snel mogelijk via e-mail of telefoon. U hoort van ons binnen 1 werkdag.
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
                        onChange={update('naam')}
                        className={inputClass}
                        placeholder="Uw volledige naam"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                        Telefoon *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.telefoon}
                        onChange={update('telefoon')}
                        className={inputClass}
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
                      onChange={update('email')}
                      className={inputClass}
                      placeholder="uw@email.nl"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                      Gewenste dienst
                    </label>
                    <select
                      value={form.dienst}
                      onChange={update('dienst')}
                      className={inputClass}
                    >
                      <option value="">Kies een dienst...</option>
                      {config.services.map((s) => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                      <option value="offerte">Vrijblijvende offerte / advies</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                        Gewenste datum
                      </label>
                      <input
                        type="date"
                        value={form.datum}
                        onChange={update('datum')}
                        className={inputClass}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                        Gewenst tijdstip
                      </label>
                      <select
                        value={form.tijd}
                        onChange={update('tijd')}
                        className={inputClass}
                      >
                        <option value="">Kies een voorkeur...</option>
                        <option value="ochtend">Ochtend (08:00 – 12:00)</option>
                        <option value="middag">Middag (12:00 – 17:00)</option>
                        <option value="flexibel">Flexibel</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                      Aanvullende informatie
                    </label>
                    <textarea
                      rows={4}
                      value={form.bericht}
                      onChange={update('bericht')}
                      className={`${inputClass} resize-none`}
                      placeholder="Bijv. grootte van de ruimte, specifieke wensen, adres..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90 text-base"
                    style={{ backgroundColor: p }}
                  >
                    Afspraak Aanvragen
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    * Verplichte velden. Na bevestiging van ons is de afspraak definitief. Uw gegevens worden nooit gedeeld met derden.
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
