export const config = {
  basePath: '/preview/autorijschoolvdsande',
  id: 'autorijschoolvdsande',
  name: 'Autorijschool van der Sande',
  tagline: 'Jouw rijbewijs is mijn reclame!',
  description: 'Autorijschool met 30+ jaar ervaring in Sittard-Geleen. 90% van de leerlingen slaagt de eerste keer.',

  // Palet direct afgeleid van de screenshot-gradient:
  // links (donkerste) → midden (balans) → rechts (wit met violet-hint)
  colors: {
    gradientFrom:  '#7474B2',   // donkerste paars — linker kant gradient
    gradientMid:   '#9898C8',   // midden balans
    gradientLight: '#F0EEF8',   // wit met violet-hint — rechter kant gradient

    primary:       '#6B6BAA',   // knoppen, actieve nav, accenten
    primaryHover:  '#5959A0',
    primaryLight:  '#EDEDF7',   // subtiele paarse achtergrond voor secties

    accent:        '#2D2B7A',   // donker paars voor footer, sterke CTA-balk
    text:          '#1E1E4A',   // donker maar paars-getint voor koppen
    textBody:      '#4A4870',   // body tekst
    background:    '#F8F7FC',   // niet puur wit — hele lichte violet tint
  },

  logoUrl: 'https://www.autorijschoolvdsande.nl/wp-content/uploads/2021/02/jubileum-mike.svg',

  contact: {
    address: 'Geleen, Sittard-Geleen',
    phone: '06-12345678',
    email: 'info@autorijschoolvdsande.nl',
    hours: {
      weekday: 'Op afspraak',
      weekend: 'Op afspraak',
    },
  },

  navigation: [
    { label: 'Even voorstellen', path: '/over-van-der-sande' },
    { label: 'Praktijk / Theorie', path: '/praktijk-theorie' },
    { label: 'Auto', path: '/auto' },
    { label: 'Prijzen', path: '/prijzen' },
    { label: 'Nieuws', path: '/nieuws' },
    { label: 'Geslaagden', path: '/geslaagden' },
    { label: 'Contact', path: '/contact' },
  ],

  stats: [
    { value: '61%', label: 'Slagingspercentage Sittard-Geleen' },
    { value: '90%', label: 'Slaagt de 1e keer bij Van der Sande' },
    { value: '99%', label: 'Geslaagd de 2e keer bij Van der Sande' },
  ],

  features: [
    {
      icon: '🏆',
      title: '90% eerste keer geslaagd',
      description: 'Veruit boven het regionale gemiddelde van 55–60%.',
    },
    {
      icon: '🚗',
      title: 'Moderne Mercedes lesauto',
      description: 'Rij in een gloednieuwe Mercedes met de nieuwste veiligheidssystemen.',
    },
    {
      icon: '🎯',
      title: 'Op maat opleiding',
      description: 'Regulier of spoed — altijd afgestemd op jouw tempo.',
    },
    {
      icon: '💪',
      title: '30+ jaar ervaring',
      description: 'Doorgewinterd rij-instructeur die jou het snelst laat slagen.',
    },
  ],

  sections: [
    { path: '/over-van-der-sande', icon: '👤', label: 'Even voorstellen', desc: 'Wie is Mike van der Sande? Zijn verhaal, passie en aanpak.' },
    { path: '/praktijk-theorie',   icon: '📚', label: 'Praktijk & Theorie', desc: 'Alles over de rijopleiding: regulier, spoed en theorie.' },
    { path: '/auto',               icon: '🚗', label: 'De lesauto',         desc: 'Gloednieuwe Mercedes met alle moderne veiligheidssystemen.' },
    { path: '/prijzen',            icon: '💶', label: 'Prijzen',            desc: 'Eerlijk geprijsd. Minder lessen nodig = lagere totaalkosten.' },
    { path: '/geslaagden',         icon: '🎉', label: 'Geslaagden',         desc: 'Trots op al onze geslaagde leerlingen door de jaren heen.' },
    { path: '/contact',            icon: '✉️', label: 'Contact',            desc: 'Stel een vraag of meld je aan — vrijblijvend en snel.' },
  ],

  geslaagden: [
    { naam: 'Emma de Vries', jaar: 2024 },
    { naam: 'Liam Janssen', jaar: 2024 },
    { naam: 'Sophie Peters', jaar: 2024 },
    { naam: 'Noah van den Berg', jaar: 2024 },
    { naam: 'Olivia Bakker', jaar: 2024 },
    { naam: 'Lucas Visser', jaar: 2024 },
    { naam: 'Mia Smit', jaar: 2024 },
    { naam: 'Finn Meijer', jaar: 2024 },
    { naam: 'Noor van Dijk', jaar: 2024 },
    { naam: 'Daan Bos', jaar: 2024 },
    { naam: 'Lena Mulder', jaar: 2024 },
    { naam: 'Jesse Dekker', jaar: 2024 },
    { naam: 'Sara Vos', jaar: 2024 },
    { naam: 'Tim Brouwer', jaar: 2024 },
    { naam: 'Lisa de Boer', jaar: 2024 },
    { naam: 'Sem Jacobs', jaar: 2024 },
    { naam: 'Roos Hendriks', jaar: 2024 },
    { naam: 'Lars van Leeuwen', jaar: 2024 },
    { naam: 'Julia Willems', jaar: 2023 },
    { naam: 'Stef Linders', jaar: 2023 },
    { naam: 'Anna Kuijpers', jaar: 2023 },
    { naam: 'Tom Wolfs', jaar: 2023 },
    { naam: 'Isa Peeters', jaar: 2023 },
    { naam: 'Max Claessen', jaar: 2023 },
    { naam: 'Fleur Coenen', jaar: 2023 },
    { naam: 'Joris Hermans', jaar: 2023 },
    { naam: 'Femke Aerts', jaar: 2023 },
    { naam: 'Bram Thissen', jaar: 2023 },
    { naam: 'Lotte Nijs', jaar: 2023 },
    { naam: 'Milan Martens', jaar: 2023 },
    { naam: 'Eva Smeets', jaar: 2023 },
    { naam: 'Robin Driessen', jaar: 2023 },
    { naam: 'Amy Geerts', jaar: 2023 },
    { naam: 'Cas Ramakers', jaar: 2023 },
    { naam: 'Kim Verstappen', jaar: 2022 },
    { naam: 'Dave Janssen', jaar: 2022 },
    { naam: 'Laura Knops', jaar: 2022 },
    { naam: 'Ruben Houben', jaar: 2022 },
    { naam: 'Amber Senden', jaar: 2022 },
    { naam: 'Dylan Meijs', jaar: 2022 },
    { naam: 'Vera Bruls', jaar: 2022 },
    { naam: 'Kevin Penders', jaar: 2022 },
    { naam: 'Charlotte Vreuls', jaar: 2022 },
    { naam: 'Sander Puts', jaar: 2022 },
    { naam: 'Manon Lucassen', jaar: 2022 },
    { naam: 'Joren Leenders', jaar: 2022 },
    { naam: 'Elke Kamps', jaar: 2022 },
    { naam: 'Niels Gielen', jaar: 2022 },
    { naam: 'Dorien Ophey', jaar: 2022 },
    { naam: 'Jens Siebers', jaar: 2022 },
    { naam: 'Merel Habets', jaar: 2021 },
    { naam: 'Rick Timmermans', jaar: 2021 },
    { naam: 'Bianca Winkens', jaar: 2021 },
    { naam: 'Mark Beckers', jaar: 2021 },
    { naam: 'Hanna Stassen', jaar: 2021 },
    { naam: 'Joey Cremers', jaar: 2021 },
    { naam: 'Iris Verheijen', jaar: 2021 },
    { naam: 'Thijs Reinders', jaar: 2021 },
    { naam: 'Nathalie Vossen', jaar: 2021 },
    { naam: 'Wouter Rongen', jaar: 2021 },
    { naam: 'Eline Schols', jaar: 2021 },
    { naam: 'Vincent Hoen', jaar: 2021 },
    { naam: 'Kelly Pouls', jaar: 2021 },
    { naam: 'Stefan Schepers', jaar: 2021 },
    { naam: 'Tess Willems', jaar: 2021 },
    { naam: 'Bart Kersten', jaar: 2021 },
  ],
};
