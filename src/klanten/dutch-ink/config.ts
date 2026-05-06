import type { DutchInkConfig } from './types';

export const config: DutchInkConfig = {
  basePath: '/preview/dutch-ink',
  naam: 'Dutch Ink',
  tagline: 'The Tattoo Company',
  beschrijving: 'Vakkundig tattoo- en piercingwerk in een moderne, hygiënische studio. Vaste prijzen, geen verrassingen.',

  colors: {
    primary: '#D4A017',
    primaryHover: '#B8890F',
    primaryLight: 'rgba(212,160,23,0.12)',
    achtergrond: '#0D0D0D',
    kaart: '#1A1A1A',
    tekst: '#FFFFFF',
  },

  logo: 'https://dutchink.nl/wp-content/uploads/2025/10/wijzijndutchink.png',
  logoGold: 'https://dutchink.nl/wp-content/uploads/2025/09/Logo_DutchInk_goud.png',

  navigation: [
    { label: 'Over Dutch Ink', path: '/over-ons' },
    { label: 'Blog', path: '/de-ultieme-tattoo-gids-2026' },
    { label: 'Uitgebreide Tattoo-gids', path: '/uitgebreide-tattoo-gids' },
    { label: 'Tattoos', path: '/alles-over-tatoos' },
    { label: 'Piercing', path: '/piercing' },
    { label: 'Permanente make-up', path: '/permanente-make-up' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    titel: 'Tattoos voor het leven.\nDutch Ink voor altijd.',
    subtitel: 'Topkwaliteit tattoos, piercings en PMU bij Dutch Ink — de tattoo company van Nederland. Walk-in welkom, vaste prijzen, geen verrassingen.',
    afbeelding: 'https://plus.unsplash.com/premium_photo-1661779228112-500334846cb3?w=1920&h=1080&fit=crop&auto=format',
    cta: 'Plan jouw Piercingafspraak',
    ctaLink: '/contact',
    ctaSecundair: 'Wie zijn wij?',
    ctaSecundairLink: '/over-ons',
  },

  stats: [
    { waarde: '10.000+', label: 'Reviews' },
    { waarde: '4.9/5', label: 'Beoordeling' },
    { waarde: '15+', label: 'Vestigingen' },
    { waarde: '100%', label: 'Walk-in' },
  ],

  usps: [
    {
      icon: '💰',
      titel: 'Vaste Prijzen',
      beschrijving: 'Geen uurtarief, geen verrassingen. Jij weet vooraf exact wat je betaalt voor jouw ontwerp.',
    },
    {
      icon: '🚪',
      titel: 'Walk-in Welkom',
      beschrijving: 'Geen afspraak nodig. Loop gewoon binnen en we helpen je direct verder.',
    },
    {
      icon: '🧴',
      titel: 'Gratis Aftercare',
      beschrijving: 'Elke tattoo inclusief luxe nabehandeling: Bepanthen zalf en Unicura zeep, gratis.',
    },
    {
      icon: '🔍',
      titel: 'Gratis Nacontrole',
      beschrijving: 'Na 6 tot 8 weken kom je gratis terug voor een nacontrole. Zo weet je zeker dat alles perfect zit.',
    },
    {
      icon: '✅',
      titel: 'Hoogste Hygiëne',
      beschrijving: 'We werken volgens de strengste hygiënenormen. Veiligheid en kwaliteit staan altijd voorop.',
    },
    {
      icon: '🎨',
      titel: 'Eigen Ontwerp',
      beschrijving: 'Kom met je eigen idee, laat het ontwerpen door onze artiesten, of kies uit ons portfolio.',
    },
  ],

  diensten: [
    {
      id: 'tattoo',
      naam: 'Tattoo',
      beschrijving: 'Van mini tattoo tot full sleeve — onze artiesten zetten jouw idee om naar een tattoo die een leven lang meegaat. Vaste prijs per ontwerp, geen uurtarief.',
      icon: '🖋️',
      highlights: [
        'Vaste prijs per design',
        'Eigen ontwerp of ons portfolio',
        'Gratis aftercare (zalf + zeep)',
        'Gratis nacontrole na 6-8 weken',
        'Alle stijlen mogelijk',
      ],
    },
    {
      id: 'piercing',
      naam: 'Piercing',
      beschrijving: 'Professioneel geplaatste piercings met titanium sieraden van topkwaliteit. Geen gedoe, gewoon goed werk.',
      icon: '💎',
      highlights: [
        'Titanium sieraden standaard',
        'Alle body piercings',
        'Vr + Zo: 11:00 – 17:00',
        'Piercing wisselen: 17:00 – 18:00',
        'Hygiënisch en veilig',
      ],
      note: 'Piercings worden geplaatst op vrijdag en zondag van 11:00 tot 17:00.',
    },
    {
      id: 'pmu',
      naam: 'Permanent Make-Up',
      beschrijving: 'PMU is een geavanceerde cosmetische techniek waarbij pigment in de huid wordt aangebracht voor blijvend mooie wenkbrauwen, eyeliner of lippen.',
      icon: '✨',
      highlights: [
        'Wenkbrauwen (microblading / powder brows)',
        'Eyeliner',
        'Lippen',
        'Lange houdbaarheid',
        'Professionele PMU artiesten',
      ],
    },
    {
      id: 'laser',
      naam: 'Laser Behandeling',
      beschrijving: 'Wil je een tattoo laten verwijderen of voorbereiden op een cover-up? Met onze laserbehandeling verwijderen we tattoo-inkt effectief en veilig.',
      icon: '⚡',
      highlights: [
        'Tattoo verwijdering',
        'Voorbereiding voor cover-up',
        'Moderne laser technologie',
        'Resultaat per sessie zichtbaar',
        'Adviesgesprek vooraf',
      ],
    },
  ],

  vestigingen: [
    { naam: 'Vlaardingen (hoofdvestiging)', adres: 'George Stephensonweg 21, 3133 KJ Vlaardingen', telefoon: '010-8700528', whatsapp: '06-44444350' },
    { naam: 'Amsterdam', adres: 'Amsterdam' },
    { naam: 'Den Haag', adres: 'Den Haag' },
    { naam: 'Hoek van Holland', adres: 'Hoek van Holland' },
    { naam: 'Zeeland', adres: 'Zeeland' },
    { naam: 'Zutphen', adres: 'Zutphen' },
    { naam: 'Doetinchem', adres: 'Doetinchem' },
    { naam: 'Bakel', adres: 'Bakel' },
    { naam: 'Huissen', adres: 'Huissen' },
    { naam: 'Dedemsvaart', adres: 'Dedemsvaart' },
    { naam: 'Beek en Donk', adres: 'Beek en Donk' },
  ],

  openingstijden: [
    { dag: 'Maandag', tijden: 'Gesloten' },
    { dag: 'Di t/m Za', tijden: '12:00 – 20:00' },
    { dag: 'Zondag', tijden: '12:00 – 18:00' },
    { dag: 'Piercings (Vr + Zo)', tijden: '11:00 – 17:00' },
  ],

  email: 'floormanagers@dutchink.nl',

  socials: {
    instagram: 'https://instagram.com/dutchink',
    facebook: 'https://facebook.com/dutchink',
    tiktok: 'https://tiktok.com/@dutchink',
    youtube: 'https://youtube.com/@dutchink',
  },

  testimonials: [
    {
      id: 1,
      naam: 'Remy V.',
      rating: 5,
      tekst: 'Super professioneel en relaxte sfeer. Mijn tattoo is precies zoals ik het wilde. De prijs was meteen duidelijk, geen verrassingen achteraf. Zeker voor herhaling vatbaar!',
      vestiging: 'Vlaardingen',
    },
    {
      id: 2,
      naam: 'Lisa M.',
      rating: 5,
      tekst: 'Voor mijn eerste piercing was ik wat nerveus maar het team stelde me meteen op mijn gemak. Snel, netjes en helemaal geen pijn. Topzaak!',
      vestiging: 'Amsterdam',
    },
    {
      id: 3,
      naam: 'Daan K.',
      rating: 5,
      tekst: 'Mijn vijfde tattoo en elke keer weer hetzelfde hoge niveau. Vaste prijzen, eerlijk advies en het resultaat spreekt voor zich. Dutch Ink doet het gewoon goed.',
      vestiging: 'Den Haag',
    },
  ],
};
