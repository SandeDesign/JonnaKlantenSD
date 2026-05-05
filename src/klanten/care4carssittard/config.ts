import type { Care4CarsConfig } from './types';

export const config: Care4CarsConfig = {
  basePath: '/preview/care4carssittard',
  id: 'care4carssittard',
  name: 'Care4Cars Sittard',
  tagline: 'RDW erkend garagebedrijf in Sittard',
  description:
    'Wij voeren onderhoud, reparaties en APK uit voor alle merken personenauto\'s en bedrijfswagens. Vakkundige service tegen scherpe tarieven.',

  colors: {
    primary: '#DC2626',
    primaryHover: '#B91C1C',
    primaryLight: '#FEE2E2',
    text: '#FFFFFF',
    background: '#374151',
  },

  contact: {
    address: 'Nusterweg 67, 6136 KT Sittard',
    phone: '0031 (0)46 - 458 8 338',
    email: 'info@care4carssittard.com',
    hours: {
      weekdays: 'Ma t/m Do: 08:30 – 17:00',
      friday: 'Vrijdag: 08:30 – 16:30',
      weekend: 'Zaterdag & Zondag: Gesloten',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Werkzaamheden', path: '/werkzaamheden' },
    { label: 'Over Ons', path: '/over-ons' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'APK & Onderhoud',
    titleSub: "voor alle merken auto's",
    subtitle:
      'RDW erkend garagebedrijf in Sittard. Vakkundige reparaties en onderhoud tegen scherpe tarieven — sneller dan de dealer.',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=1920&h=1080&fit=crop',
    cta: 'Maak een Afspraak',
    ctaLink: '/agenda',
    ctaSecondary: 'Neem Contact Op',
    ctaSecondaryLink: '/contact',
  },

  werkzaamheden: [
    {
      id: 'apk',
      title: 'APK',
      icon: '🔍',
      short: 'RDW erkende APK keuring voor benzine en diesel voertuigen tot 3.500 kg.',
      full: 'Voor de APK van uw auto kunt u terecht bij Care4Cars in Sittard. Wij zijn een RDW erkend garagebedrijf. Onze werkplaats is voorzien van alle benodigde apparatuur om APK keuringen uit te voeren voor benzine en diesel voertuigen tot 3.500 kg.',
    },
    {
      id: 'onderhoud',
      title: 'Onderhoud & Reparaties',
      icon: '🔧',
      short: 'Fabrikant-voorgeschreven onderhoudsschema\'s voor alle merken personenauto\'s en bedrijfswagens.',
      full: 'Wij voeren onderhoud, reparaties en APK uit voor alle merken personenauto\'s en bedrijfswagens. Wij hanteren daarbij de, door de fabrikant voorgeschreven, onderhoudsschema\'s. Door onze jarenlange ervaring zijn wij in staat alle voorkomende reparaties vakkundig uit te voeren.',
    },
    {
      id: 'airco',
      title: 'Airco Service',
      icon: '❄️',
      short: 'Jaarlijkse controle en bijvullen van de airco voorkomt dure storingen.',
      full: 'Het is verstandig de airco elk jaar te controleren en om het jaar bij te laten vullen. Met regelmatig onderhoud voorkomt u dat de airco stuk gaat. Een airco repareren of vervangen is namelijk een dure aangelegenheid.',
    },
    {
      id: 'banden',
      title: 'Banden',
      icon: '⚙️',
      short: 'Autobanden, velgen, balanceren en reparaties van alle merken zomer- en winterbanden.',
      full: 'U kunt bij ons terecht voor autobanden, velgen, balanceren en reparaties. Wij verzorgen de levering en montage van alle merken zomerbanden, 4-seizoenenbanden en winterbanden.',
    },
    {
      id: 'campers',
      title: 'Campers',
      icon: '🚐',
      short: 'Onderhoud en APK voor uw camper — zodat u veilig en onbezorgd op vakantie gaat.',
      full: 'Ook voor het onderhoud en de APK van uw camper bent u bij ons aan het juiste adres. Zo kunt u veilig en onbezorgd met uw camper op vakantie. Zorg dat uw camper weer in topconditie is voor de volgende trip.',
    },
    {
      id: 'diagnose',
      title: 'Diagnoses & Storingen',
      icon: '💻',
      short: 'Gespecialiseerde diagnosemonteurs lezen storingen uit bij ieder merk of type auto.',
      full: 'Een auto is te complex geworden om goed onderhoud uit te kunnen voeren zonder opgeleide monteurs en gespecialiseerde diagnose apparatuur. Wij lezen storingen aan ieder merk of type auto uit.',
    },
  ],

  werkwijze: [
    {
      icon: '☕',
      title: 'Koffie bij uw bezoek',
      description: 'Wacht u op uw auto? Bij ons bent u altijd welkom voor een kopje koffie. Wij zorgen voor een prettig verblijf terwijl onze monteurs aan uw auto werken.',
    },
    {
      icon: '⚙️',
      title: 'Scherpe & eerlijke prijzen',
      description: 'Wij hanteren transparante tarieven die aanzienlijk lager liggen dan de meeste dealerbedrijven — zonder concessies te doen aan kwaliteit of service.',
    },
    {
      icon: '❤️',
      title: 'Uw tevredenheid voorop',
      description: 'Een tevreden klant is ons hoogste doel. Wij staan voor vakkundig werk, duidelijke communicatie en een service waar u met vertrouwen op terug kunt komen.',
    },
  ],
};
