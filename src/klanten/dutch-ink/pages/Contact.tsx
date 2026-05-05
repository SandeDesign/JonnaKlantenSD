import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const c = config.colors;
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', dienst: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const hoofd = config.vestigingen[0];

  return (
    <Layout>
      {/* Header */}
      <section className="py-32" style={{ backgroundColor: '#111' }}>
        <div className="container mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: c.primary }}>
            Kom langs
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase text-white mb-4">
            Contact
          </h1>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Walk-in welkom — geen afspraak nodig. Of stuur ons een bericht.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-24" style={{ backgroundColor: c.achtergrond }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contactgegevens */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hoofdvestiging */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: c.primary }}>
                  Hoofdvestiging
                </p>
                <div className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <p className="text-white font-bold">{hoofd.naam}</p>
                  <p>{hoofd.adres}</p>
                  {hoofd.telefoon && (
                    <a href={`tel:${hoofd.telefoon}`} className="block hover:text-white transition-colors">
                      📞 {hoofd.telefoon}
                    </a>
                  )}
                  {hoofd.whatsapp && (
                    <a
                      href={`https://wa.me/31${hoofd.whatsapp.replace(/^06/, '6').replace(/\D/g, '')}`}
                      className="block hover:text-white transition-colors"
                    >
                      💬 WhatsApp: {hoofd.whatsapp}
                    </a>
                  )}
                  <a href={`mailto:${config.email}`} className="block hover:text-white transition-colors">
                    ✉️ {config.email}
                  </a>
                </div>
              </div>

              {/* Openingstijden */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: c.primary }}>
                  Openingstijden
                </p>
                <div className="space-y-2">
                  {config.openingstijden.map((o, i) => (
                    <div key={i} className="flex justify-between text-sm gap-4">
                      <span style={{ color: 'rgba(255,255,255,0.45)' }}>{o.dag}</span>
                      <span
                        className="font-medium text-right"
                        style={{ color: o.tijden === 'Gesloten' ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.80)' }}
                      >
                        {o.tijden}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vestigingen */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: c.primary }}>
                  Alle Vestigingen
                </p>
                <div className="flex flex-wrap gap-2">
                  {config.vestigingen.map((v, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded"
                      style={{
                        backgroundColor: i === 0 ? c.primaryLight : c.kaart,
                        color: i === 0 ? c.primary : 'rgba(255,255,255,0.5)',
                        border: `1px solid ${i === 0 ? `${c.primary}40` : 'rgba(255,255,255,0.06)'}`,
                      }}
                    >
                      {v.naam}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulier */}
            <div className="lg:col-span-3">
              {sent ? (
                <div
                  className="text-center py-20 px-8 rounded-2xl"
                  style={{ backgroundColor: c.kaart, border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-black uppercase text-white mb-2">
                    Bericht Ontvangen!
                  </h3>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    We nemen zo snel mogelijk contact met je op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white">
                        Naam *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.naam}
                        onChange={(e) => setForm({ ...form, naam: e.target.value })}
                        className="w-full px-4 py-3 text-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                        style={{ backgroundColor: c.kaart, border: '1px solid rgba(255,255,255,0.08)' }}
                        placeholder="Jouw naam"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white">
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        value={form.telefoon}
                        onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                        className="w-full px-4 py-3 text-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                        style={{ backgroundColor: c.kaart, border: '1px solid rgba(255,255,255,0.08)' }}
                        placeholder="+31 6 ..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      style={{ backgroundColor: c.kaart, border: '1px solid rgba(255,255,255,0.08)' }}
                      placeholder="jouw@email.nl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white">
                      Dienst
                    </label>
                    <select
                      value={form.dienst}
                      onChange={(e) => setForm({ ...form, dienst: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      style={{ backgroundColor: c.kaart, border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      <option value="">Kies een dienst...</option>
                      {config.diensten.map((d) => (
                        <option key={d.id} value={d.naam}>{d.naam}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white">
                      Bericht *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.bericht}
                      onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
                      style={{ backgroundColor: c.kaart, border: '1px solid rgba(255,255,255,0.08)' }}
                      placeholder="Beschrijf je idee of vraag..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 font-bold uppercase tracking-wider text-white rounded-lg transition-opacity hover:opacity-90"
                    style={{ backgroundColor: c.primary }}
                  >
                    Verstuur Bericht
                  </button>
                  <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.25)' }}>
                    * Verplichte velden. Of loop gewoon binnen — walk-in is altijd welkom.
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
