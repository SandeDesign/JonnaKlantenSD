import type { AlfaTaxiConfig } from './types';

export const config: AlfaTaxiConfig = {
  basePath: '/preview/alfa-taxi',
  id: 'alfa-taxi',
  name: 'Alfa Taxi',
  tagline: 'Taxiservice vanuit Sittard & omgeving',
  description: 'Alfa Taxi staat voor punctueel, veilig en comfortabel vervoer. Of u nu naar het vliegveld moet, een zakelijke afspraak heeft of gewoon een rit nodig heeft — wij rijden voor u.',
  logo: '/cropped-logo.png',

  colors: {
    primary: '#0B1D3E',
    accent: '#F59E0B',
    accentHover: '#D97706',
    text: '#FFFFFF',
    background: '#0B1D3E',
  },

  contact: {
    address: 'Nederland',
    phone: '+31612345678',
    phoneDisplay: '06 - 12 34 56 78',
    email: 'info@taxialfa.nl',
    hours: {
      weekday: '24 uur per dag',
      weekend: '24 uur per dag',
    },
  },

  navigation: [
    { label: 'Tarieven', path: '/tarieven' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'Altijd op tijd, altijd comfortabel',
    subtitle: 'Betrouwbaar taxivervoer voor particulieren en zakelijk. Direct boeken, vaste tarieven, 24/7 beschikbaar.',
    image: 'https://taxibobenschede.nl/images/hero-taxi.png',
    cta: 'Direct Boeken',
    ctaLink: '/boeken',
    ctaSecondary: 'Bekijk Tarieven',
    ctaSecondaryLink: '/tarieven',
  },

  features: [
    {
      icon: '⏱️',
      title: 'Altijd Op Tijd',
      description: 'Wij volgen uw vlucht of afspraak nauwkeurig op de voet. Punctualiteit is geen bijzaak — het is onze standaard.',
    },
    {
      icon: '🤝',
      title: 'Betrouwbaar & Transparant',
      description: 'Uw reis is onze hoogste prioriteit. Wij komen al onze afspraken na en zijn altijd transparant in communicatie en prijzen. Geen onaangename verrassingen.',
    },
    {
      icon: '👔',
      title: 'Professioneel',
      description: 'Al onze chauffeurs zijn gediplomeerde professionals. Altijd goed gekleed, correct Nederlands en Engels, bagage inladen en deur openhouden is vanzelfsprekend.',
    },
    {
      icon: '🔒',
      title: 'Vaste Tarieven',
      description: 'U weet vooraf precies wat de rit kost. Geen verborgen kosten, geen verrassingen achteraf — gewoon eerlijk en duidelijk.',
    },
  ],

  tarieven: [
    {
      titel: 'Basistarieven',
      regels: [
        { omschrijving: 'Starttarief', tarief: '€ 3,50' },
        { omschrijving: 'Prijs per km (dag — 06:00–22:00)', tarief: '€ 2,35' },
        { omschrijving: 'Prijs per km (nacht — 22:00–06:00)', tarief: '€ 3,00' },
        { omschrijving: 'Wachttarief per uur', tarief: '€ 35,00' },
        { omschrijving: 'Reserveringstoeslag', tarief: '€ 2,50' },
      ],
    },
    {
      titel: 'Vaste Ritten',
      regels: [
        { omschrijving: 'Naar Schiphol (tot 50 km)', tarief: 'Vanaf € 60,00' },
        { omschrijving: 'Naar Eindhoven Airport', tarief: 'Vanaf € 45,00' },
        { omschrijving: 'Naar Rotterdam Airport', tarief: 'Vanaf € 50,00' },
        { omschrijving: 'Stationsrit (binnen 10 km)', tarief: 'Vanaf € 25,00' },
        { omschrijving: 'Ziekenhuisvervoer (enkele reis)', tarief: 'Vanaf € 20,00' },
      ],
    },
    {
      titel: 'Zakelijk & Groepsvervoer',
      regels: [
        { omschrijving: 'Zakelijk account (maandelijks factureren)', tarief: 'Op aanvraag' },
        { omschrijving: 'Groepsvervoer (minibus t/m 8 pers.)', tarief: 'Op aanvraag' },
        { omschrijving: 'Evenementen & trouwerijen', tarief: 'Op aanvraag' },
        { omschrijving: 'Rolstoeltoegankelijk vervoer', tarief: 'Op aanvraag' },
      ],
    },
  ],

  testimonials: [
    {
      id: 1,
      name: 'Henk van der Berg',
      rating: 5,
      text: 'Altijd op tijd, altijd vriendelijk. Ik gebruik Alfa Taxi al jaren voor mijn vluchten naar Schiphol. Nooit teleurgesteld!',
    },
    {
      id: 2,
      name: 'Anita de Vries',
      rating: 5,
      text: 'Fijn bedrijf. Nette auto, chauffeur was vriendelijk en kende de weg perfect. Vaste prijs, geen verrassingen.',
    },
    {
      id: 3,
      name: 'Marco Janssen',
      rating: 5,
      text: 'Zakelijk gebruik ik Alfa Taxi regelmatig. Betrouwbaar, professioneel en altijd beschikbaar. Aanrader!',
    },
  ],
};
