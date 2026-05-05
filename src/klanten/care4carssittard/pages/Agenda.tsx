import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

const fontLogo = "'Teko', sans-serif";
const fontBody = "'Barlow', sans-serif";
const p = config.colors.primary;

const SERVICES = [
  'Airco controle',
  'APK',
  'Bandenwissel',
  'Grote beurt',
  'Kleine beurt',
  'Wintercheck',
  'Zomercheck',
];

const MONTHS = ['Mei', 'Juni', 'Juli', 'Augustus', 'September'];

const generateDays = (monthIndex: number) => {
  const days: { day: number; status: 0 | 1 | 2 | 3 }[] = [];
  const totalDays = [31, 30, 31, 31, 30][monthIndex];
  const offsets = [4, 0, 2, 5, 1];
  const offset = offsets[monthIndex];

  for (let i = 0; i < offset; i++) days.push({ day: 0, status: 3 });

  for (let d = 1; d <= totalDays; d++) {
    const dayOfWeek = (offset + d - 1) % 7;
    const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;
    if (isWeekend) {
      days.push({ day: d, status: 3 });
    } else if (monthIndex === 0 && d < 11) {
      days.push({ day: d, status: 3 });
    } else {
      const r = Math.random();
      const status: 0 | 1 | 2 = r < 0.4 ? 0 : r < 0.6 ? 1 : 2;
      days.push({ day: d, status });
    }
  }
  return days;
};

const TIMES = [
  '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00',
];

const statusStyle = (status: 0 | 1 | 2 | 3, selected: boolean): React.CSSProperties => {
  if (selected) return { backgroundColor: '#1F2937', color: '#fff', cursor: 'pointer', fontWeight: 700 };
  switch (status) {
    case 0: return { backgroundColor: '#16A34A', color: '#fff', cursor: 'pointer' };
    case 1: return { backgroundColor: '#F59E0B', color: '#fff', cursor: 'pointer' };
    case 2: return { backgroundColor: p, color: '#fff', cursor: 'not-allowed', opacity: 0.85 };
    case 3: return { backgroundColor: '#D1D5DB', color: '#9CA3AF', cursor: 'default' };
  }
};

export const Agenda = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [activeMonth, setActiveMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState('08:30');
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [licensePlate, setLicensePlate] = useState('');

  const days = generateDays(activeMonth);

  const toggleService = (s: string) =>
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const handleDayClick = (day: number, status: 0 | 1 | 2 | 3) => {
    if (status === 3 || status === 2) return;
    setSelectedDay(day === selectedDay ? null : day);
  };

  const canSubmit = selectedServices.length > 0 && selectedDay !== null && name && phone;

  if (submitted) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center" style={{ backgroundColor: '#F3F4F6' }}>
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100 max-w-md">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-5"
              style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}
            >
              ✓
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3 uppercase" style={{ fontFamily: fontLogo }}>
              Afspraak Bevestigd!
            </h2>
            <p className="text-gray-500 mb-2" style={{ fontFamily: fontBody }}>
              {MONTHS[activeMonth]} {selectedDay} — {selectedTime}
            </p>
            <p className="text-gray-500 text-sm" style={{ fontFamily: fontBody }}>
              U ontvangt een bevestiging via telefoon. Breng uw auto voor 9.00 uur.
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Info banner */}
      <section className="py-4 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600" style={{ fontFamily: fontBody }}>
            Bij een reparatie/onderhoud/APK, graag de auto brengen voor 9.00 uur.
          </p>
          <p className="text-sm text-gray-600" style={{ fontFamily: fontBody }}>
            Bij het maken van een afspraak a.u.b. rekening houden met onze pauzes: 10.30 tot 11.00 en 13.00 tot 13.30.
          </p>
        </div>
      </section>

      <section className="py-10" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left: services + gegevens — flex col so Kenteken bottom aligns with calendar bottom */}
            <div className="flex flex-col">
              <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-widest" style={{ fontFamily: fontBody }}>
                Kies één of meerdere werkzaamheden
              </p>
              <div className="space-y-1.5">
                {SERVICES.map((s) => {
                  const checked = selectedServices.includes(s);
                  return (
                    <label
                      key={s}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer border transition-colors"
                      style={{
                        fontFamily: fontBody,
                        backgroundColor: checked ? '#FEF2F2' : '#fff',
                        borderColor: checked ? p : '#E5E7EB',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleService(s)}
                        className="w-4 h-4 rounded"
                        style={{ accentColor: p }}
                      />
                      <span className="text-sm text-gray-800">{s}</span>
                    </label>
                  );
                })}
              </div>

              {/* Gegevens */}
              <div className="mt-5 space-y-2.5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest" style={{ fontFamily: fontBody }}>
                  Uw gegevens
                </p>
                <input
                  type="text"
                  placeholder="Naam *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2"
                  style={{ fontFamily: fontBody }}
                />
                <input
                  type="tel"
                  placeholder="Telefoonnummer *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2"
                  style={{ fontFamily: fontBody }}
                />
                <input
                  type="text"
                  placeholder="Kenteken"
                  value={licensePlate}
                  onChange={(e) => setLicensePlate(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2"
                  style={{ fontFamily: fontBody }}
                />
              </div>
            </div>

            {/* Right: calendar */}
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-widest" style={{ fontFamily: fontBody }}>
                Kies een beschikbare datum
              </p>

              {/* Month tabs + Time on same row */}
              <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                <div className="flex gap-1 flex-wrap">
                  {MONTHS.map((m, i) => (
                    <button
                      key={m}
                      onClick={() => { setActiveMonth(i); setSelectedDay(null); }}
                      className="px-3 py-1 rounded-lg text-sm font-semibold transition-colors"
                      style={{
                        fontFamily: fontBody,
                        backgroundColor: activeMonth === i ? p : 'transparent',
                        color: activeMonth === i ? '#fff' : '#6B7280',
                      }}
                    >
                      {m}
                    </button>
                  ))}
                </div>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2"
                  style={{ fontFamily: fontBody, minWidth: '90px' }}
                >
                  {TIMES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Calendar grid — compact */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="grid grid-cols-7 border-b border-gray-100">
                  {['Maa', 'Din', 'Woe', 'Don', 'Vrij', 'Zat', 'Zon'].map((d) => (
                    <div
                      key={d}
                      className="text-center py-1.5 text-xs font-semibold text-gray-400 uppercase"
                      style={{ fontFamily: fontBody }}
                    >
                      {d}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7">
                  {days.map((cell, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center text-sm font-semibold border border-gray-50 transition-opacity hover:opacity-90"
                      style={{
                        height: '44px',
                        ...(cell.day === 0
                          ? { backgroundColor: '#F9FAFB' }
                          : statusStyle(cell.status, selectedDay === cell.day)),
                      }}
                      onClick={() => cell.day > 0 && handleDayClick(cell.day, cell.status)}
                    >
                      {cell.day > 0 ? cell.day : ''}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-4 gap-1.5 mt-2">
                {[
                  { bg: '#16A34A', label: 'Beschikbaar' },
                  { bg: '#F59E0B', label: 'Bijna vol' },
                  { bg: p, label: 'Vol' },
                  { bg: '#D1D5DB', label: 'Niet beschikbaar', textColor: '#6B7280' },
                ].map(({ bg, label, textColor }) => (
                  <div
                    key={label}
                    className="rounded-lg py-1.5 px-1 text-center text-xs font-semibold"
                    style={{ backgroundColor: bg, color: textColor ?? '#fff', fontFamily: fontBody }}
                  >
                    {label}
                  </div>
                ))}
              </div>

              {/* Submit */}
              <button
                onClick={() => canSubmit && setSubmitted(true)}
                disabled={!canSubmit}
                className="w-full mt-4 py-3.5 font-semibold text-white rounded-xl transition-opacity"
                style={{
                  fontFamily: fontBody,
                  backgroundColor: canSubmit ? p : '#9CA3AF',
                  cursor: canSubmit ? 'pointer' : 'not-allowed',
                  opacity: canSubmit ? 1 : 0.7,
                }}
              >
                {selectedDay
                  ? `Bevestig Afspraak — ${MONTHS[activeMonth]} ${selectedDay} om ${selectedTime}`
                  : 'Selecteer een datum om door te gaan'}
              </button>

              {!canSubmit && (
                <p className="text-xs text-gray-400 text-center mt-2" style={{ fontFamily: fontBody }}>
                  Vul naam, telefoonnummer in en selecteer een werkzaamheid en datum.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
