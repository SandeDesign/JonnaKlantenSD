import type { SjabloonConfig } from './types';

export const config: SjabloonConfig = {
  basePath: '/preview/sjabloon',
  id: 'sjabloon',
  name: 'Bedrijfsnaam',
  tagline: 'Uw vakkundige partner voor [dienst]',
  description: 'Wij helpen particulieren en bedrijven met professionele oplossingen op maat. Kwaliteit en betrouwbaarheid staan bij ons centraal.',

  colors: {
    primary: '#2563EB',
    primaryHover: '#1D4ED8',
    primaryLight: '#DBEAFE',
    text: '#1E293B',
    background: '#FFFFFF',
  },

  contact: {
    address: 'Straatnaam 1, 1234 AB Stad',
    phone: '+31 6 12 34 56 78',
    email: 'info@bedrijfsnaam.nl',
    hours: {
      weekday: '09:00 - 17:00',
      weekend: 'Op afspraak',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Over Ons', path: '/over-ons' },
    { label: 'Diensten', path: '/diensten' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'Welkom bij',
    highlight: 'Bedrijfsnaam',
    subtitle: 'Professionele service met persoonlijke aandacht. Wij zorgen voor de beste oplossing voor uw situatie.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop',
    cta: 'Bekijk Diensten',
    ctaLink: '/diensten',
    ctaSecondary: 'Neem Contact Op',
    ctaSecondaryLink: '/contact',
  },

  features: [
    {
      icon: '⭐',
      title: 'Topkwaliteit',
      description: 'Wij leveren uitstekende kwaliteit in alles wat we doen, zonder concessies.',
    },
    {
      icon: '🤝',
      title: 'Betrouwbaar',
      description: 'U kunt altijd op ons rekenen. Afspraak is afspraak, altijd en overal.',
    },
    {
      icon: '⚡',
      title: 'Snel & Efficiënt',
      description: 'Wij werken snel en efficiënt zodat u nooit lang hoeft te wachten op resultaat.',
    },
    {
      icon: '💬',
      title: 'Persoonlijk',
      description: 'Wij luisteren naar uw wensen en bieden oplossingen die écht bij u passen.',
    },
  ],

  services: [
    {
      id: 'dienst-1',
      name: 'Dienst Één',
      description: 'Omschrijving van uw eerste dienst. Wat houdt het in, voor wie is het geschikt, en welk resultaat mag de klant verwachten?',
      price: 99,
      priceLabel: 'Vanaf €99',
      icon: '🔧',
      features: ['Voordeel één', 'Voordeel twee', 'Voordeel drie', 'Inclusief nazorg'],
    },
    {
      id: 'dienst-2',
      name: 'Dienst Twee',
      description: 'Omschrijving van uw tweede dienst. Beschrijf kort en krachtig wat de klant kan verwachten.',
      price: 149,
      priceLabel: 'Vanaf €149',
      icon: '📋',
      features: ['Voordeel één', 'Voordeel twee', 'Voordeel drie', 'Gratis adviesgesprek'],
    },
    {
      id: 'dienst-3',
      name: 'Dienst Drie',
      description: 'Omschrijving van uw derde dienst. Maak duidelijk waarom klanten voor deze optie kiezen.',
      price: 199,
      priceLabel: 'Vanaf €199',
      icon: '🎯',
      features: ['Alles van Dienst Twee', 'Extra voordeel', 'Prioriteit service', 'Uitgebreide rapportage'],
    },
    {
      id: 'dienst-4',
      name: 'Dienst Vier',
      description: 'Uw vierde dienst of een all-in pakket. Ideaal voor klanten die het complete plaatje willen.',
      priceLabel: 'Op maat',
      icon: '🏆',
      features: ['Maatwerk oplossing', 'Persoonlijke begeleiding', 'Onbeperkte aanpassingen', 'SLA garantie'],
    },
  ],

  about: {
    title: 'Over Bedrijfsnaam',
    story: 'Opgericht in [jaar] zijn wij uitgegroeid tot een betrouwbare naam in [branche]. Met een team van gedreven professionals helpen wij dagelijks tientallen klanten verder. Ons succes is gebaseerd op kennis, eerlijkheid en echt luisteren naar wat de klant nodig heeft.',
    mission: 'Onze missie is om elke klant de beste ervaring te bieden. Wij geloven dat kwalitatief werk en persoonlijk contact hand in hand gaan. Dat is waarom wij altijd de extra stap zetten.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop',
    values: [
      'Kwaliteit boven kwantiteit',
      'Transparante communicatie',
      'Altijd op tijd',
      'Tevreden klant is ons doel',
    ],
  },

  testimonials: [
    {
      id: 1,
      name: 'Jan de Vries',
      role: 'Particuliere klant',
      rating: 5,
      text: 'Geweldige service! Het team was professioneel, snel en het resultaat overtrof mijn verwachtingen. Ik raad hen aan iedereen aan.',
    },
    {
      id: 2,
      name: 'Marieke Bakker',
      role: 'Ondernemer',
      rating: 5,
      text: 'Al jaren gebruik ik hun diensten en ik ben elke keer weer tevreden. Persoonlijk contact, eerlijk advies en uitstekende kwaliteit.',
    },
    {
      id: 3,
      name: 'Peter Smit',
      role: 'Zakelijke klant',
      rating: 5,
      text: 'Snel, netjes en voor een eerlijke prijs. Wat wil je nog meer? Het team denkt actief mee en komt altijd met goede oplossingen.',
    },
  ],
};
