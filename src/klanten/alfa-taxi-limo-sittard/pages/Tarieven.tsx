import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

type Betaalmethode = 'contant' | 'pinnen' | 'tikkie' | 'creditcard';
type Aanhef = 'dhr' | 'mevr' | '';
type AutoType = '4' | '8';

interface StepOneData {
  ophaaldatum: string;
  ophaaluur: string;
  ophaalminuten: string;
  ophaallocatie: string;
  eindbestemming: string;
  tussenstop: string;
  betaalmethode: Betaalmethode;
}

interface StepTwoData {
  aanhef: Aanhef;
  naam: string;
  telefoon: string;
  email: string;
  stad: string;
  postcode: string;
}

interface StepThreeData {
  aantalPersonen: string;
  aantalKoffers: string;
  autoType: AutoType;
  akkoordVoorwaarden: boolean;
}

const inputClass =
  'w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent bg-white';

const ProgressBar = ({ step }: { step: number }) => {
  const pct = Math.round((step / 3) * 100);
  return (
    <div className="w-full h-1.5 bg-gray-200 rounded-full mb-6 overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${pct}%`, backgroundColor: config.colors.primary }}
      />
    </div>
  );
};

const RadioOption = ({
  name,
  value,
  checked,
  onChange,
  label,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  label: string;
}) => (
  <label className="flex items-center gap-2 cursor-pointer select-none">
    <div
      className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors"
      style={{
        borderColor: checked ? config.colors.primary : '#D1D5DB',
        backgroundColor: checked ? config.colors.primary : 'white',
      }}
      onClick={onChange}
    >
      {checked && <div className="w-2 h-2 rounded-full bg-white" />}
    </div>
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="sr-only"
    />
    <span className="text-sm font-medium text-gray-700">{label}</span>
  </label>
);

export const Tarieven = () => {
  const p = config.colors.primary;
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [step1, setStep1] = useState<StepOneData>({
    ophaaldatum: '',
    ophaaluur: '',
    ophaalminuten: '',
    ophaallocatie: '',
    eindbestemming: '',
    tussenstop: '',
    betaalmethode: 'contant',
  });

  const [step2, setStep2] = useState<StepTwoData>({
    aanhef: '',
    naam: '',
    telefoon: '',
    email: '',
    stad: '',
    postcode: '',
  });

  const [step3, setStep3] = useState<StepThreeData>({
    aantalPersonen: '',
    aantalKoffers: '',
    autoType: '4',
    akkoordVoorwaarden: false,
  });

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const stepLabels = ['Gegevens heenreis', 'Uw gegevens', 'Speciale wensen'];

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-20 text-white text-center"
        style={{ backgroundColor: config.colors.text }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Tarieven & Boeken</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Boek uw rit eenvoudig online of bel ons direct op{' '}
            <a href={`tel:${config.contact.phone}`} className="underline font-semibold hover:text-white">
              {config.contact.phone}
            </a>
          </p>
        </div>
      </section>

      {/* Tarieven */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: config.colors.text }}>
            Onze Diensten & Tarieven
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {config.services.map((s) => (
              <div
                key={s.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: config.colors.primaryLight }}
                  >
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-lg font-bold" style={{ color: config.colors.text }}>
                        {s.name}
                      </h3>
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: config.colors.primaryLight, color: p }}
                      >
                        {s.priceLabel}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{s.description}</p>
                    <ul className="space-y-1">
                      {s.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <span style={{ color: p }}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-2" style={{ color: config.colors.text }}>
              Rit Bestellen
            </h2>
            <p className="text-gray-500 text-center text-sm mb-8">
              Vul het formulier in en wij bevestigen uw rit zo snel mogelijk.
            </p>

            {submitted ? (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">
                <div className="text-6xl mb-5">🎉</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: config.colors.text }}>
                  Rit aangevraagd!
                </h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  Bedankt voor uw boeking! Wij nemen zo snel mogelijk contact met u op om uw rit te
                  bevestigen. U kunt ons ook direct bereiken op{' '}
                  <a href={`tel:${config.contact.phone}`} className="font-bold underline" style={{ color: p }}>
                    {config.contact.phone}
                  </a>
                  .
                </p>
                <button
                  onClick={() => { setSubmitted(false); setStep(1); }}
                  className="px-8 py-3 font-bold text-white rounded-xl"
                  style={{ backgroundColor: p }}
                >
                  Nieuwe rit boeken
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Progress */}
                <div className="px-8 pt-6 pb-0">
                  <ProgressBar step={step} />
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                    Stap {step} van 3
                  </p>
                  <h3 className="text-xl font-bold mb-6" style={{ color: config.colors.text }}>
                    {step}. {stepLabels[step - 1]}
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="px-8 pb-8">
                  {/* ── STEP 1 ── */}
                  {step === 1 && (
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Ophaaldatum */}
                        <div>
                          <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                            Ophaaldatum <span style={{ color: p }}>*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="date"
                              required
                              value={step1.ophaaldatum}
                              onChange={(e) => setStep1({ ...step1, ophaaldatum: e.target.value })}
                              className={inputClass}
                            />
                          </div>
                        </div>

                        {/* Ophaaltijd */}
                        <div>
                          <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                            Ophaaltijd <span style={{ color: p }}>*</span>
                          </label>
                          <div className="flex gap-2">
                            <input
                              type="number"
                              required
                              min={0}
                              max={23}
                              placeholder="UU"
                              value={step1.ophaaluur}
                              onChange={(e) => setStep1({ ...step1, ophaaluur: e.target.value })}
                              className={inputClass}
                            />
                            <input
                              type="number"
                              required
                              min={0}
                              max={59}
                              placeholder="MM"
                              value={step1.ophaalminuten}
                              onChange={(e) => setStep1({ ...step1, ophaalminuten: e.target.value })}
                              className={inputClass}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                            Ophaallocatie
                          </label>
                          <input
                            type="text"
                            placeholder="Ophaallocatie"
                            value={step1.ophaallocatie}
                            onChange={(e) => setStep1({ ...step1, ophaallocatie: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                            Eindbestemming
                          </label>
                          <input
                            type="text"
                            placeholder="Eindbestemming"
                            value={step1.eindbestemming}
                            onChange={(e) => setStep1({ ...step1, eindbestemming: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                          Tussenstop
                        </label>
                        <input
                          type="text"
                          placeholder="Tussenstop (optioneel)"
                          value={step1.tussenstop}
                          onChange={(e) => setStep1({ ...step1, tussenstop: e.target.value })}
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: config.colors.text }}>
                          Betaalmogelijkheid <span style={{ color: p }}>*</span>
                        </label>
                        <div className="flex flex-wrap gap-5">
                          {(['contant', 'pinnen', 'tikkie', 'creditcard'] as Betaalmethode[]).map((m) => (
                            <RadioOption
                              key={m}
                              name="betaalmethode"
                              value={m}
                              checked={step1.betaalmethode === m}
                              onChange={() => setStep1({ ...step1, betaalmethode: m })}
                              label={m.charAt(0).toUpperCase() + m.slice(1)}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={handleNext}
                          className="px-8 py-3 font-bold text-white rounded-xl transition-opacity hover:opacity-90 flex items-center gap-2"
                          style={{ backgroundColor: p }}
                        >
                          Volgende <span>→</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ── STEP 2 ── */}
                  {step === 2 && (
                    <div className="space-y-5">
                      {/* Aanhef */}
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: config.colors.text }}>
                          Aanhef
                        </label>
                        <div className="flex gap-6">
                          <RadioOption
                            name="aanhef"
                            value="dhr"
                            checked={step2.aanhef === 'dhr'}
                            onChange={() => setStep2({ ...step2, aanhef: 'dhr' })}
                            label="Dhr."
                          />
                          <RadioOption
                            name="aanhef"
                            value="mevr"
                            checked={step2.aanhef === 'mevr'}
                            onChange={() => setStep2({ ...step2, aanhef: 'mevr' })}
                            label="Mevr."
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div>
                          <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                            Volledige naam
                          </label>
                          <input
                            type="text"
                            placeholder="Volledige naam"
                            value={step2.naam}
                            onChange={(e) => setStep2({ ...step2, naam: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                            Telefoon <span style={{ color: p }}>*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="Telefoon"
                            value={step2.telefoon}
                            onChange={(e) => setStep2({ ...step2, telefoon: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                            Email <span style={{ color: p }}>*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="Email"
                            value={step2.email}
                            onChange={(e) => setStep2({ ...step2, email: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                          Adres
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="Stad"
                            value={step2.stad}
                            onChange={(e) => setStep2({ ...step2, stad: e.target.value })}
                            className={inputClass}
                          />
                          <input
                            type="text"
                            placeholder="ZIP / Postcode"
                            value={step2.postcode}
                            onChange={(e) => setStep2({ ...step2, postcode: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="px-6 py-3 font-bold rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-2"
                        >
                          ← Vorige
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="px-8 py-3 font-bold text-white rounded-xl transition-opacity hover:opacity-90 flex items-center gap-2"
                          style={{ backgroundColor: p }}
                        >
                          Volgende <span>→</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ── STEP 3 ── */}
                  {step === 3 && (
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                            Aantal personen
                          </label>
                          <input
                            type="number"
                            min={1}
                            max={8}
                            placeholder="Aantal personen"
                            value={step3.aantalPersonen}
                            onChange={(e) => setStep3({ ...step3, aantalPersonen: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                            Aantal koffers
                          </label>
                          <input
                            type="number"
                            min={0}
                            placeholder="Aantal koffers"
                            value={step3.aantalKoffers}
                            onChange={(e) => setStep3({ ...step3, aantalKoffers: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: config.colors.text }}>
                          Soort auto: <span style={{ color: p }}>*</span>
                        </label>
                        <div className="flex gap-8 mb-4">
                          <RadioOption
                            name="autoType"
                            value="4"
                            checked={step3.autoType === '4'}
                            onChange={() => setStep3({ ...step3, autoType: '4' })}
                            label="4"
                          />
                          <RadioOption
                            name="autoType"
                            value="8"
                            checked={step3.autoType === '8'}
                            onChange={() => setStep3({ ...step3, autoType: '8' })}
                            label="8"
                          />
                        </div>

                        {/* Car visual */}
                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <img
                            src={
                              step3.autoType === '4'
                                ? 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&h=80&fit=crop'
                                : 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=80&fit=crop'
                            }
                            alt={`${step3.autoType}-persoons taxi`}
                            className="w-28 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <p className="font-bold text-sm" style={{ color: config.colors.text }}>
                              {step3.autoType}-persoons taxi
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5">
                              {step3.autoType === '4'
                                ? 'Comfortabele sedan, tot 4 passagiers'
                                : 'Ruime MPV/bus, tot 8 passagiers'}
                            </p>
                            <div className="flex gap-1 mt-2">
                              {Array.from({ length: parseInt(step3.autoType) }).map((_, i) => (
                                <span key={i} className="text-lg" style={{ color: '#6366f1' }}>
                                  🧍
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Voorwaarden */}
                      <label className="flex items-start gap-3 cursor-pointer">
                        <div
                          className="w-5 h-5 mt-0.5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors"
                          style={{
                            borderColor: step3.akkoordVoorwaarden ? p : '#D1D5DB',
                            backgroundColor: step3.akkoordVoorwaarden ? p : 'white',
                          }}
                          onClick={() =>
                            setStep3({ ...step3, akkoordVoorwaarden: !step3.akkoordVoorwaarden })
                          }
                        >
                          {step3.akkoordVoorwaarden && (
                            <span className="text-white text-xs font-bold">✓</span>
                          )}
                        </div>
                        <input
                          type="checkbox"
                          required
                          checked={step3.akkoordVoorwaarden}
                          onChange={(e) =>
                            setStep3({ ...step3, akkoordVoorwaarden: e.target.checked })
                          }
                          className="sr-only"
                        />
                        <span className="text-sm text-gray-600">
                          Ik heb de algemene voorwaarden gelezen en ik ga akkoord.
                        </span>
                      </label>

                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="px-6 py-3 font-bold rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-2"
                        >
                          ← Vorige
                        </button>
                        <button
                          type="submit"
                          className="px-8 py-3 font-bold text-white rounded-xl transition-opacity hover:opacity-90 flex items-center gap-2"
                          style={{ backgroundColor: p }}
                        >
                          Rit Aanvragen →
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA bellen */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 mb-4">Liever direct bellen?</p>
          <a
            href={`tel:${config.contact.phone}`}
            className="inline-flex items-center gap-3 px-10 py-4 font-bold text-white rounded-xl text-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: p }}
          >
            <span>📞</span>
            <span>{config.contact.phone}</span>
            <span className="text-sm font-medium opacity-80">— 24/7 bereikbaar</span>
          </a>
        </div>
      </section>
    </Layout>
  );
};
