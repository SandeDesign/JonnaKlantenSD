import { Link } from 'react-router-dom';

interface KlantCard {
  naam: string;
  branche: string;
  beschrijving: string;
  pad: string;
  kleur: string;
  accent: string;
  icon: string;
  status: 'live' | 'concept';
}

const klanten: KlantCard[] = [
  {
    naam: 'Alfa Taxi',
    branche: 'Taxivervoer',
    beschrijving: 'Betrouwbaar en comfortabel taxivervoer 24/7. Vaste tarieven voor particulieren en zakelijk.',
    pad: '/preview/alfa-taxi',
    kleur: '#0B1D3E',
    accent: '#F59E0B',
    icon: '🚖',
    status: 'concept',
  },
  {
    naam: 'Care4Cars Sittard',
    branche: 'Garage & APK',
    beschrijving: 'RDW erkend garagebedrijf in Sittard. APK, onderhoud, banden, airco, diagnose en campers.',
    pad: '/preview/care4carssittard',
    kleur: '#1F2937',
    accent: '#DC2626',
    icon: '🔧',
    status: 'concept',
  },
  {
    naam: 'Dutch Ink',
    branche: 'Tattoo & Piercing',
    beschrijving: 'The Tattoo Company — 15+ vestigingen door heel Nederland. Tattoo, piercing, PMU en laser.',
    pad: '/preview/dutch-ink',
    kleur: '#0D0D0D',
    accent: '#DC2626',
    icon: '🖋️',
    status: 'concept',
  },
  {
    naam: 'Beatrix Nails & Beauty',
    branche: 'Nagelstudio & Beauty',
    beschrijving: 'Professionele nagelstudio in Sittard. Gellak, acrylnagels, nailart en meer. Mooie nagels voor elke verzorgde vrouw.',
    pad: '/preview/beatrix-nails',
    kleur: '#2D0F1E',
    accent: '#C2185B',
    icon: '💅',
    status: 'concept',
  },
  {
    naam: 'Autorijschool van der Sande',
    branche: 'Autorijschool',
    beschrijving: '30+ jaar ervaring in Sittard-Geleen. 90% slaagt de eerste keer. Moderne Mercedes lesauto, reguliere en spoedopleiding.',
    pad: '/preview/autorijschoolvdsande',
    kleur: '#1B2D80',
    accent: '#7878B2',
    icon: '🚗',
    status: 'concept',
  },
  {
    naam: 'Sjabloon',
    branche: 'Generiek Template',
    beschrijving: 'Het basis-sjabloon voor nieuwe klanten. Kopieer deze map en pas config.ts aan om te starten.',
    pad: '/preview/sjabloon',
    kleur: '#1E3A8A',
    accent: '#2563EB',
    icon: '📋',
    status: 'concept',
  },
  {
    naam: 'Fotografie Ton Dirkx',
    branche: 'Fotografie & Pasfoto\'s',
    beschrijving: "Vakkundige fotostudio in Sittard. Officiële pasfoto's zonder afspraak, fotolijsten, 3D crystal en reportages.",
    pad: '/preview/ton-dirkx-fotografie',
    kleur: '#1a4d0e',
    accent: '#3e8c28',
    icon: '📸',
    status: 'concept',
  },
];

export const KlantenOverzicht = () => (
  <div className="min-h-screen bg-[#0a0a0a] text-white">
    {/* Header */}
    <header className="border-b border-white/10 px-6 py-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://fl-group.org/wp-content/uploads/2025/03/New-Logo-SandeDesign-150x150.png"
            alt="SandeDesign"
            className="w-8 h-8 opacity-80"
          />
          <div>
            <p className="text-sm font-bold text-white">SandeDesign</p>
            <p className="text-xs text-white/40">Klanten Bibliotheek</p>
          </div>
        </div>
        <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/40 border border-white/10">
          Intern — Niet delen
        </span>
      </div>
    </header>

    {/* Hero */}
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-4">
          Acquisitie Bibliotheek
        </p>
        <h1 className="text-5xl md:text-6xl font-black mb-4">
          Klanten{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Preview
          </span>
        </h1>
        <p className="text-white/50 max-w-lg mx-auto">
          Klik op een klant om de preview-website te bekijken. Elke site is direct klaar om te presenteren.
        </p>
      </div>
    </section>

    {/* Klanten grid */}
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {klanten.map((k) => (
            <Link
              key={k.pad}
              to={k.pad}
              className="group block rounded-2xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ backgroundColor: '#141414' }}
            >
              {/* Color band */}
              <div
                className="h-2"
                style={{ backgroundColor: k.accent }}
              />

              <div className="p-7">
                {/* Icon + status */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${k.accent}20` }}
                  >
                    {k.icon}
                  </div>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor: k.status === 'live' ? '#16a34a20' : '#f59e0b20',
                      color: k.status === 'live' ? '#4ade80' : '#fbbf24',
                    }}
                  >
                    {k.status === 'live' ? '● Live' : '○ Concept'}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white mb-1">{k.naam}</h2>
                <p className="text-xs font-medium mb-3" style={{ color: k.accent }}>
                  {k.branche}
                </p>
                <p className="text-sm leading-relaxed text-white/45">{k.beschrijving}</p>

                {/* CTA */}
                <div
                  className="mt-6 flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                >
                  <span className="group-hover:text-white transition-colors">Preview bekijken</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}

          {/* Nieuwe klant toevoegen card */}
          <div
            className="rounded-2xl border-2 border-dashed border-white/10 p-7 flex flex-col items-center justify-center text-center min-h-[220px] hover:border-white/20 transition-colors cursor-default"
          >
            <div className="text-4xl mb-4 opacity-30">+</div>
            <p className="text-sm font-medium text-white/30">Nieuwe klant toevoegen</p>
            <p className="text-xs text-white/20 mt-1">
              Kopieer src/klanten/sjabloon/ naar een nieuwe map
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-white/5 py-8 text-center">
      <p className="text-xs text-white/20">
        © {new Date().getFullYear()} SandeDesign — Interne tool
      </p>
    </footer>
  </div>
);
