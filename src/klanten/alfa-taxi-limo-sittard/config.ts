import type { AlfaTaxiConfig } from './types';

export const config: AlfaTaxiConfig = {
  basePath: '/preview/alfa-taxi-limo-sittard',
  id: 'alfa-taxi-limo-sittard',
  name: 'Alfa Taxi Limo Sittard',
  tagline: 'Betrouwbaar, punctueel en comfortabel vervoer in de regio Sittard-Geleen',
  description:
    'Alfa Taxi Limo Sittard biedt professioneel taxivervoer en limousinediensten in de regio Sittard-Geleen. Of u nu naar het vliegveld, een zakelijke afspraak of een feest moet – wij zijn er voor u.',

  colors: {
    primary: '#DC2626',
    primaryHover: '#B91C1C',
    primaryLight: '#FEE2E2',
    text: '#1E293B',
    background: '#FFFFFF',
  },

  contact: {
    address: 'Vildershof 11, 6162 JM Geleen',
    phone: '+31 46-2600100',
    email: 'info@alfa-taxi-sittard.nl',
    kvk: '62707604',
    hours: {
      weekday: '24 uur per dag',
      weekend: '24 uur per dag',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Over Ons', path: '/over-ons' },
    { label: 'Tarieven & Boeken', path: '/tarieven' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'Uw betrouwbare',
    highlight: 'Taxi in Sittard',
    subtitle:
      'Professioneel taxivervoer en limousinediensten in de regio Sittard-Geleen. Altijd op tijd, altijd comfortabel — dag en nacht beschikbaar.',
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=1080&fit=crop',
    cta: 'Direct Boeken',
    ctaLink: '/tarieven',
    ctaSecondary: 'Bel Ons Nu',
    ctaSecondaryLink: '/contact',
  },

  features: [
    {
      icon: '🕐',
      title: '24/7 Beschikbaar',
      description:
        'Dag en nacht bereikbaar voor uw rit. Vroeg vliegtuig of laat feest — wij zijn er altijd.',
    },
    {
      icon: '✅',
      title: 'Altijd Op Tijd',
      description:
        'Punctualiteit is onze prioriteit. Wij halen u op tijd op en brengen u veilig op uw bestemming.',
    },
    {
      icon: '💼',
      title: 'Zakelijk & Privé',
      description:
        'Van zakelijke ritten naar luchthaven tot persoonlijk vervoer — altijd professioneel.',
    },
    {
      icon: '🚘',
      title: 'Comfort Voertuigen',
      description:
        "Ruime, schone taxi's en limousines voor maximaal rijcomfort. Keus uit 4- of 8-persoonswagen.",
    },
  ],

  services: [
    {
      id: 'airport',
      name: 'Luchthaven Vervoer',
      description:
        'Stressvrij naar Eindhoven Airport, Maastricht Aachen Airport, Schiphol of andere luchthavens. Wij volgen uw vlucht en wachten op u.',
      priceLabel: 'Vaste prijs',
      icon: '✈️',
      features: [
        'Vluchttracering',
        'Gratis wachttijd bij vertraging',
        'Ruime kofferruimte',
        'Vaste, transparante prijs',
      ],
    },
    {
      id: 'zakelijk',
      name: 'Zakelijk Vervoer',
      description:
        'Representatief vervoer voor uw zakelijke afspraken. Wij zorgen voor een stipte en professionele aankomst.',
      priceLabel: 'Op maat',
      icon: '💼',
      features: [
        'Keurig verzorgde chauffeur',
        'WiFi beschikbaar',
        'Factuur mogelijk',
        'Maandrekening voor bedrijven',
      ],
    },
    {
      id: 'limousine',
      name: 'Limousine Service',
      description:
        'Maak uw speciale gelegenheid onvergetelijk. Bruiloften, jubilea, schoolbals — wij rijden u in stijl.',
      priceLabel: 'Vanaf €95',
      icon: '🥂',
      features: [
        'Luxe limousine',
        'Decoratie op aanvraag',
        'Champagne service',
        'Flexibele duur',
      ],
    },
    {
      id: 'ritje',
      name: 'Standaard Taxi',
      description:
        'Gewoon een betrouwbaar ritje nodig in de regio Sittard-Geleen? Bel ons of boek online en wij staan klaar.',
      priceLabel: 'Metertarief',
      icon: '🚕',
      features: [
        'Snel ter plaatse',
        'Contant of pin',
        'Tikkie mogelijk',
        'Creditcard geaccepteerd',
      ],
    },
  ],

  about: {
    title: 'Over Alfa Taxi Limo Sittard',
    story:
      'Alfa Taxi Limo Sittard is opgericht in 2015 en is uitgegroeid tot een vertrouwde naam in de regio Sittard-Geleen. Met jarenlange ervaring in het taxivak kennen wij de regio als geen ander en rijden wij dagelijks tientallen tevreden passagiers naar hun bestemming.',
    mission:
      'Onze missie is simpel: betrouwbaar, comfortabel en betaalbaar vervoer voor iedereen. Of u nu een zakelijke afspraak heeft, het vliegtuig moet halen, of gewoon een ritje nodig heeft — Alfa Taxi staat voor u klaar.',
    image:
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&h=800&fit=crop',
    values: [
      'Stiptheid & betrouwbaarheid',
      'Vriendelijke, professionele chauffeurs',
      'Transparante tarieven zonder verrassingen',
      'Klanttevredenheid staat voorop',
    ],
  },

  testimonials: [
    {
      id: 1,
      name: 'Marloes van den Berg',
      role: 'Particuliere klant',
      rating: 5,
      text: 'Altijd op tijd, vriendelijke chauffeur en een nette auto. Ik bel Alfa Taxi voor iedere rit naar het vliegveld. Absolute aanrader!',
    },
    {
      id: 2,
      name: 'Johan Peeters',
      role: 'Zakelijke klant',
      rating: 5,
      text: 'Voor onze zakelijke ritten vertrouwen wij op Alfa Taxi. Professioneel, punctueel en prettig in contact. Precies wat je nodig hebt.',
    },
    {
      id: 3,
      name: 'Sandra Willems',
      role: 'Bruid',
      rating: 5,
      text: 'De limousine service voor onze bruiloft was perfect! Alles klopte tot in de puntjes. Wat een geweldige dag mede dankzij Alfa Taxi.',
    },
  ],
};
