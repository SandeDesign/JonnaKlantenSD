import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

interface BookingForm {
  naam: string;
  telefoon: string;
  email: string;
  datum: string;
  tijd: string;
  vertrek: string;
  bestemming: string;
  passagiers: string;
  opmerking: string;
}

export const Boeken = () => {
  const accent = config.colors.accent;
  const primary = config.colors.primary;

  const [form, setForm] = useState<BookingForm>({
    naam: '',
    telefoon: '',
    email: '',
    datum: '',
    tijd: '',
    vertrek: '',
    bestemming: '',
    passagiers: '1',
    opmerking: '',
  });
  const [sent, setSent] = useState(false);

  const set = (field: keyof BookingForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass = 'w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 transition-shadow bg-white text-gray-800';

  return (
    <Layout>
      {/* Page header */}
      <section className="py-24 text-white text-center" style={{ backgroundColor: primary }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Rit Boeken</h1>
          <p className="max-w-xl mx-auto text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Vul het formulier in en wij bevestigen uw boeking zo snel mogelijk — meestal binnen 30 minuten.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold" style={{ color: primary }}>Hoe werkt het?</h2>

              {[
                { stap: '1', titel: 'Formulier invullen', tekst: 'Vul uw vertrek- en aankomstlocatie, datum en tijd in.' },
                { stap: '2', titel: 'Bevestiging ontvangen', tekst: 'Wij bevestigen uw boeking binnen 30 minuten via telefoon of e-mail.' },
                { stap: '3', titel: 'Chauffeur staat klaar', tekst: 'Op de afgesproken tijd staat uw chauffeur bij u voor de deur.' },
              ].map(({ stap, titel, tekst }) => (
                <div key={stap} className="flex gap-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 text-black"
                    style={{ backgroundColor: accent }}
                  >
                    {stap}
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-sm" style={{ color: primary }}>{titel}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{tekst}</p>
                  </div>
                </div>
              ))}

              <div
                className="p-5 rounded-xl border-l-4 mt-6"
                style={{ backgroundColor: `${accent}10`, borderColor: accent }}
              >
                <p className="text-sm font-semibold mb-1" style={{ color: primary }}>Liever bellen?</p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="text-lg font-bold transition-opacity hover:opacity-80"
                  style={{ color: accent }}
                >
                  {config.contact.phoneDisplay}
                </a>
                <p className="text-xs text-gray-500 mt-1">24/7 bereikbaar</p>
              </div>
            </div>

            {/* Boekingsformulier */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-20 px-8 border border-gray-100 rounded-2xl bg-white">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6"
                    style={{ backgroundColor: `${accent}20` }}
                  >
                    ✅
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: primary }}>
                    Boeking ontvangen!
                  </h3>
                  <p className="text-gray-500 max-w-sm mx-auto">
                    Wij nemen zo snel mogelijk — uiterlijk binnen 30 minuten — contact met u op om uw rit te bevestigen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-5">
                  <h3 className="text-xl font-bold mb-2" style={{ color: primary }}>Uw gegevens</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-gray-600">Naam *</label>
                      <input
                        type="text"
                        required
                        value={form.naam}
                        onChange={set('naam')}
                        className={inputClass}
                        placeholder="Uw volledige naam"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-gray-600">Telefoon *</label>
                      <input
                        type="tel"
                        required
                        value={form.telefoon}
                        onChange={set('telefoon')}
                        className={inputClass}
                        placeholder="06 - ..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-gray-600">E-mailadres</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={set('email')}
                      className={inputClass}
                      placeholder="uw@email.nl"
                    />
                  </div>

                  <div className="border-t border-gray-100 pt-5">
                    <h3 className="text-xl font-bold mb-4" style={{ color: primary }}>Ritgegevens</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-gray-600">Datum *</label>
                      <input
                        type="date"
                        required
                        value={form.datum}
                        onChange={set('datum')}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-gray-600">Tijd *</label>
                      <input
                        type="time"
                        required
                        value={form.tijd}
                        onChange={set('tijd')}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-gray-600">Vertreklocatie *</label>
                    <input
                      type="text"
                      required
                      value={form.vertrek}
                      onChange={set('vertrek')}
                      className={inputClass}
                      placeholder="Straat + huisnummer, Stad"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-gray-600">Bestemming *</label>
                    <input
                      type="text"
                      required
                      value={form.bestemming}
                      onChange={set('bestemming')}
                      className={inputClass}
                      placeholder="Straat + huisnummer, Stad"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-gray-600">Aantal passagiers *</label>
                    <select
                      required
                      value={form.passagiers}
                      onChange={set('passagiers')}
                      className={inputClass}
                    >
                      {['1', '2', '3', '4', '5', '6', '7', '8'].map((n) => (
                        <option key={n} value={n}>{n} {n === '1' ? 'persoon' : 'personen'}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-gray-600">Opmerkingen</label>
                    <textarea
                      rows={3}
                      value={form.opmerking}
                      onChange={set('opmerking')}
                      className={inputClass + ' resize-none'}
                      placeholder="Bijv. rolstoel nodig, vluchtnummer, grote bagage..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 font-bold rounded-xl transition-opacity hover:opacity-90 text-black text-base"
                    style={{ backgroundColor: accent }}
                  >
                    Rit Aanvragen
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    * Verplichte velden. Na uw aanvraag bevestigen wij uw boeking telefonisch of per e-mail.
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
