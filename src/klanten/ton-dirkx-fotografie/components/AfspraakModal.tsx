import { useState, useEffect } from 'react';
import { useAfspraak } from './AfspraakContext';
import { config } from '../config';

const TIJDEN = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];

const STEPS = ['Dienst', 'Datum & Tijd', 'Gegevens', 'Betaling', 'Bevestiging'];

export const AfspraakModal = () => {
  const { isOpen, close, initialService } = useAfspraak();
  const p = config.colors.primary;
  const dark = config.colors.primaryDark;

  const [step, setStep] = useState(0);
  const [dienst, setDienst] = useState('');
  const [datum, setDatum] = useState('');
  const [tijd, setTijd] = useState('');
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', opmerking: '' });
  const [card, setCard] = useState({ nummer: '', naam: '', geldig: '', cvv: '' });

  useEffect(() => {
    if (isOpen) {
      setStep(0);
      setDienst(initialService);
      setDatum('');
      setTijd('');
      setForm({ naam: '', email: '', telefoon: '', opmerking: '' });
      setCard({ nummer: '', naam: '', geldig: '', cvv: '' });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, initialService]);

  if (!isOpen) return null;

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split('T')[0];

  const canNext = () => {
    if (step === 0) return !!dienst;
    if (step === 1) return !!datum && !!tijd;
    if (step === 2) return !!form.naam && !!form.email;
    if (step === 3) return card.nummer.length >= 16 && !!card.naam && !!card.geldig && card.cvv.length >= 3;
    return true;
  };

  const formatCard = (val: string) =>
    val.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();

  const selectedService = config.services.find((s) => s.id === dienst);

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} />

      {/* Modal */}
      <div
        className="relative w-full sm:max-w-lg max-h-[95vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl shadow-2xl"
        style={{ backgroundColor: '#0f1a0b', color: 'white' }}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 border-b"
          style={{ backgroundColor: '#0f1a0b', borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: p }}>
              Afspraak Maken
            </p>
            <h2 className="text-lg font-bold text-white">{STEPS[step]}</h2>
          </div>
          <button
            onClick={close}
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-white transition-colors"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
          >
            ✕
          </button>
        </div>

        {/* Step indicator */}
        <div className="px-6 pt-5 pb-0">
          <div className="flex gap-1.5">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className="flex-1 h-1 rounded-full transition-all"
                style={{ backgroundColor: i <= step ? p : 'rgba(255,255,255,0.15)' }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {/* Step 0: Dienst */}
          {step === 0 && (
            <div className="space-y-3">
              <p className="text-sm text-gray-400 mb-4">Kies de dienst waarvoor u een afspraak wilt maken.</p>
              {config.services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setDienst(s.id)}
                  className="w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4"
                  style={{
                    borderColor: dienst === s.id ? p : 'rgba(255,255,255,0.1)',
                    backgroundColor: dienst === s.id ? `${p}22` : 'rgba(255,255,255,0.04)',
                  }}
                >
                  <span className="text-2xl">{s.icon}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-white">{s.name}</p>
                    {s.priceLabel && (
                      <p className="text-xs mt-0.5" style={{ color: p }}>{s.priceLabel}</p>
                    )}
                  </div>
                  {dienst === s.id && (
                    <span className="text-lg" style={{ color: p }}>✓</span>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Step 1: Datum & Tijd */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Datum *</label>
                <input
                  type="date"
                  min={minDateStr}
                  value={datum}
                  onChange={(e) => setDatum(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-white text-sm focus:outline-none focus:ring-2 border"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    borderColor: 'rgba(255,255,255,0.12)',
                    colorScheme: 'dark',
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Tijdstip *</label>
                <div className="grid grid-cols-4 gap-2">
                  {TIJDEN.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTijd(t)}
                      className="py-2.5 text-sm rounded-lg border transition-all font-medium"
                      style={{
                        borderColor: tijd === t ? p : 'rgba(255,255,255,0.1)',
                        backgroundColor: tijd === t ? `${p}33` : 'rgba(255,255,255,0.04)',
                        color: tijd === t ? 'white' : '#9ca3af',
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              {datum && tijd && (
                <div
                  className="p-3 rounded-xl text-sm"
                  style={{ backgroundColor: `${p}22`, border: `1px solid ${p}44` }}
                >
                  <span style={{ color: p }}>📅 </span>
                  <span className="text-white">
                    {new Date(datum).toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} om {tijd}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Gegevens */}
          {step === 2 && (
            <div className="space-y-4">
              <p className="text-sm text-gray-400 mb-2">Vul uw contactgegevens in.</p>
              {[
                { key: 'naam', label: 'Naam *', type: 'text', placeholder: 'Uw volledige naam', required: true },
                { key: 'email', label: 'E-mail *', type: 'email', placeholder: 'uw@email.nl', required: true },
                { key: 'telefoon', label: 'Telefoon', type: 'tel', placeholder: '06 12 34 56 78', required: false },
              ].map(({ key, label, type, placeholder }) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">{label}</label>
                  <input
                    type={type}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-xl text-white text-sm focus:outline-none border placeholder-gray-600"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      borderColor: 'rgba(255,255,255,0.12)',
                    }}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Opmerking</label>
                <textarea
                  rows={3}
                  value={form.opmerking}
                  onChange={(e) => setForm({ ...form, opmerking: e.target.value })}
                  placeholder="Eventuele opmerkingen..."
                  className="w-full px-4 py-3 rounded-xl text-white text-sm focus:outline-none border placeholder-gray-600 resize-none"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    borderColor: 'rgba(255,255,255,0.12)',
                  }}
                />
              </div>
            </div>
          )}

          {/* Step 3: Betaling */}
          {step === 3 && (
            <div className="space-y-4">
              {/* Demo badge */}
              <div
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm mb-2"
                style={{ backgroundColor: 'rgba(234,179,8,0.12)', border: '1px solid rgba(234,179,8,0.3)', color: '#fbbf24' }}
              >
                <span>⚠️</span>
                <span>Demo modus — er wordt geen echte betaling verwerkt.</span>
              </div>

              {/* Card visual */}
              <div
                className="relative rounded-2xl p-6 mb-2 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${dark} 0%, ${p} 100%)` }}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="text-white/70 text-sm font-medium">Fotografie Ton Dirkx</div>
                  <div className="text-white text-xl font-bold tracking-widest">VISA</div>
                </div>
                <div className="text-white text-xl tracking-[0.3em] font-mono mb-4">
                  {card.nummer || '•••• •••• •••• ••••'}
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-white/50 text-xs mb-1">KAARTHOUDER</div>
                    <div className="text-white text-sm font-medium">{card.naam || '—'}</div>
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-1">GELDIG T/M</div>
                    <div className="text-white text-sm font-medium">{card.geldig || '—'}</div>
                  </div>
                </div>
              </div>

              {[
                { key: 'nummer', label: 'Kaartnummer', placeholder: '1234 5678 9012 3456', maxLen: 19 },
                { key: 'naam', label: 'Naam op kaart', placeholder: 'J. de Vries', maxLen: 30 },
              ].map(({ key, label, placeholder, maxLen }) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">{label}</label>
                  <input
                    type="text"
                    value={key === 'nummer' ? formatCard(card.nummer) : card[key as keyof typeof card]}
                    onChange={(e) =>
                      setCard({
                        ...card,
                        [key]: key === 'nummer' ? e.target.value.replace(/\D/g, '') : e.target.value,
                      })
                    }
                    placeholder={placeholder}
                    maxLength={maxLen}
                    className="w-full px-4 py-3 rounded-xl text-white text-sm focus:outline-none border placeholder-gray-600 font-mono"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      borderColor: 'rgba(255,255,255,0.12)',
                    }}
                  />
                </div>
              ))}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Geldig t/m</label>
                  <input
                    type="text"
                    placeholder="MM/JJ"
                    maxLength={5}
                    value={card.geldig}
                    onChange={(e) => {
                      let v = e.target.value.replace(/\D/g, '');
                      if (v.length > 2) v = v.slice(0, 2) + '/' + v.slice(2, 4);
                      setCard({ ...card, geldig: v });
                    }}
                    className="w-full px-4 py-3 rounded-xl text-white text-sm focus:outline-none border placeholder-gray-600 font-mono"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      borderColor: 'rgba(255,255,255,0.12)',
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    maxLength={4}
                    value={card.cvv}
                    onChange={(e) => setCard({ ...card, cvv: e.target.value.replace(/\D/g, '') })}
                    className="w-full px-4 py-3 rounded-xl text-white text-sm focus:outline-none border placeholder-gray-600 font-mono"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      borderColor: 'rgba(255,255,255,0.12)',
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Bevestiging */}
          {step === 4 && (
            <div className="text-center py-4">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-5"
                style={{ backgroundColor: `${p}33` }}
              >
                ✅
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Afspraak bevestigd!</h3>
              <p className="text-gray-400 text-sm mb-6">
                U ontvangt een bevestiging op <span style={{ color: p }}>{form.email}</span>
              </p>
              <div
                className="text-left rounded-xl p-4 space-y-3 text-sm mb-6"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {[
                  ['Dienst', selectedService?.name ?? '—'],
                  ['Datum', datum ? new Date(datum).toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : '—'],
                  ['Tijd', tijd],
                  ['Naam', form.naam],
                  ['Locatie', config.contact.address],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4">
                    <span className="text-gray-500">{label}</span>
                    <span className="text-white font-medium text-right">{value}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={close}
                className="w-full py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: p }}
              >
                Sluiten
              </button>
            </div>
          )}
        </div>

        {/* Footer buttons */}
        {step < 4 && (
          <div
            className="sticky bottom-0 px-6 py-4 flex gap-3 border-t"
            style={{ backgroundColor: '#0f1a0b', borderColor: 'rgba(255,255,255,0.08)' }}
          >
            {step > 0 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="flex-1 py-3 rounded-xl text-sm font-semibold border transition-colors text-gray-300 hover:text-white"
                style={{ borderColor: 'rgba(255,255,255,0.15)', backgroundColor: 'transparent' }}
              >
                ← Terug
              </button>
            )}
            <button
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext()}
              className="flex-1 py-3 rounded-xl text-sm font-semibold text-white transition-opacity disabled:opacity-30"
              style={{ backgroundColor: p }}
            >
              {step === 3 ? '✓ Bevestig Afspraak' : 'Volgende →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
