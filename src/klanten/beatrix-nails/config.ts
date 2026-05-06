import type { BeatrixConfig } from './types';

export const config: BeatrixConfig = {
  basePath: '/preview/beatrix-nails',
  id: 'beatrix-nails',
  name: 'Beatrix Nails & Beauty',
  tagline: 'Mooie nagels – een vanzelfsprekendheid',
  description: 'Professionele nagelstudio in Sittard voor gellak, kunstnagels, acryl en nailart. Mooie nagels zijn bij Beatrix Nails & Beauty een vanzelfsprekendheid voor elke verzorgde vrouw die om haar uiterlijk geeft.',

  colors: {
    primary: '#C2185B',
    primaryHover: '#AD1457',
    primaryLight: '#FCE4EC',
    darkPink: '#880E4F',
    lightPink: '#FDE8F0',
    text: '#2D0F1E',
    background: '#FFFFFF',
  },

  contact: {
    address: 'Arendstraat 37, 6135 KT Sittard',
    phone: '+31641232458',
    email: 'info@beatrixnails.nl',
    hours: {
      maandag: '10:00–20:00',
      dinsdag: '10:00–20:00',
      woensdag: '10:00–20:00',
      donderdag: '10:00–20:00',
      vrijdag: '10:00–20:00',
      zaterdag: '10:00–20:00',
      zondag: 'Gesloten',
    },
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Over Beatrix', path: '/over-ons' },
    { label: 'Diensten', path: '/diensten' },
    { label: 'Contact', path: '/contact' },
  ],

  hero: {
    title: 'Welkom bij',
    highlight: 'Beatrix Nails & Beauty',
    subtitle: 'Professionele nagelstudio in Sittard. Geniet van perfecte nagels met persoonlijke aandacht en vakkundige behandelingen.',
    images: [
      'https://cdn1.treatwell.net/images/view/v2.i894601.w720.h480.x554AC0DB/',
      'https://cdn1.treatwell.net/images/view/v2.i894602.w720.h480.xA43B4A56/',
      'https://cdn1.treatwell.net/images/view/v2.i894606.w720.h480.x18CAA816/',
    ],
    cta: 'Bekijk Diensten',
    ctaLink: '/diensten',
    ctaSecondary: 'Maak Afspraak',
    ctaSecondaryLink: '/contact',
  },

  features: [
    {
      icon: '💅',
      title: 'Vakkundige Behandelingen',
      description: 'Van gellak tot acrylnagels en nailart — elke behandeling met oog voor detail en kwaliteit.',
    },
    {
      icon: '✨',
      title: 'Persoonlijke Aandacht',
      description: 'Beatrix neemt de tijd voor u en luistert naar uw wensen voor het perfecte resultaat.',
    },
    {
      icon: '🌸',
      title: 'Sfeervolle Studio',
      description: 'Een warme, gezellige omgeving waar u zich direct thuis voelt en kunt ontspannen.',
    },
    {
      icon: '⭐',
      title: 'Topmaterialen',
      description: 'Wij werken uitsluitend met hoogwaardige producten voor een lang houdbaar en mooi resultaat.',
    },
  ],

  serviceCategories: [
    {
      id: 'gelpolish',
      name: 'Gelpolish',
      icon: '💅',
      count: 1,
      groups: [
        {
          groupName: 'Gellak behandelingen',
          collapsible: false,
          items: [
            { name: 'Gellak - handen', duration: '1 uur' },
          ],
        },
      ],
    },
    {
      id: 'gel-acryl-acrygel',
      name: 'Gel, Acryl, Acrygel',
      icon: '💎',
      count: 5,
      groups: [
        {
          groupName: 'Nieuwe set',
          collapsible: true,
          items: [
            { name: 'French', duration: '2 uur' },
            { name: 'Naturel of Kleur(en) met gelpolish', duration: '1 uur 30 min' },
          ],
        },
        {
          groupName: 'Nabehandeling / opvullen',
          collapsible: true,
          items: [
            { name: 'French', duration: '2 uur' },
            { name: 'Naturel of Kleur(en) met gelpolish', duration: '1 uur 30 min' },
            { name: 'Sculpting French - vanaf', duration: '2 uur' },
          ],
        },
        {
          groupName: 'Acrylnagels – verwijderen, herstellen & opnieuw zetten',
          collapsible: false,
          items: [
            { name: 'Acrylnagels - oude set verwijderen, herstellen en opnieuw zetten', duration: '4 uur' },
          ],
        },
        {
          groupName: 'Nieuwe kunstnagel los',
          collapsible: true,
          items: [
            { name: '1 nagel', duration: '30 min' },
            { name: '2 nagels', duration: '30 min' },
            { name: '3 nagels', duration: '30 min' },
          ],
        },
        {
          groupName: 'Kunstnagels verwijderen',
          collapsible: false,
          items: [
            { name: 'Kunstnagels verwijderen', duration: '45 min' },
          ],
        },
      ],
    },
    {
      id: 'nailart',
      name: 'Nailart',
      icon: '🎨',
      count: 3,
      groups: [
        {
          groupName: '3D Nail Art',
          collapsible: true,
          items: [
            { name: '1 nagel', duration: '5 min' },
            { name: '2 nagels', duration: '10 min' },
            { name: '5 nagels', duration: '15 min' },
            { name: '10 nagels', duration: '30 min' },
          ],
        },
        {
          groupName: 'Gelpolish Nail Art',
          collapsible: true,
          items: [
            { name: '1 nagel', duration: '5 min' },
            { name: '2 nagels', duration: '10 min' },
            { name: '5 nagels', duration: '15 min' },
            { name: '10 nagels', duration: '30 min' },
          ],
        },
        {
          groupName: 'Steentjes',
          collapsible: false,
          items: [
            { name: 'Steentjes per nagel', duration: '10 min' },
          ],
        },
      ],
    },
  ],

  about: {
    title: 'Over Beatrix Nails & Beauty',
    story: 'Mooie nagels – een vanzelfsprekendheid voor elke verzorgde vrouw die om haar uiterlijk geeft. Bij nagelstudio Beatrix Nails & Beauty in Sittard vindt u precies de plek waar u zich volledig kunt laten verwennen. Met vakkundige handen en een warm hart zorgt Beatrix ervoor dat u de deur uitloopt met nagels om trots op te zijn.',
    mission: 'Ons doel is simpel: elke klant verdient het beste. Of u nu kiest voor een subtiele gellak of een uitgebreide nailart behandeling – wij geven altijd het maximale. Persoonlijk contact, eerlijk advies en resultaten die langer meegaan dan u verwacht.',
    image: 'https://cdn1.treatwell.net/images/view/v2.i894598.w720.h480.x0A5B7608/',
    galleryImages: [
      'https://cdn1.treatwell.net/images/view/v2.i894599.w720.h480.x7F3CC0F1/',
      'https://cdn1.treatwell.net/images/view/v2.i894601.w720.h480.x554AC0DB/',
      'https://cdn1.treatwell.net/images/view/v2.i894602.w720.h480.xA43B4A56/',
      'https://cdn1.treatwell.net/images/view/v2.i894606.w720.h480.x18CAA816/',
    ],
    values: [
      'Kwaliteit in elk detail',
      'Persoonlijke aandacht voor elke klant',
      'Werken met premium producten',
      'Uw tevredenheid is ons doel',
    ],
  },

  testimonials: [
    {
      id: 1,
      name: 'Sophie M.',
      rating: 5,
      text: 'Beatrix is geweldig! Mijn nagels zijn prachtig geworden en de sfeer in de salon is super gezellig. Ik kom zeker terug!',
    },
    {
      id: 2,
      name: 'Laura K.',
      rating: 5,
      text: 'Al jaren mijn vaste nagelstudio. Beatrix doet altijd precies wat ik wil en het resultaat is elke keer weer top. Aanrader!',
    },
    {
      id: 3,
      name: 'Mariam A.',
      rating: 5,
      text: 'Prachtige nailart en erg vriendelijk. Ze luistert goed naar je wensen en het eindresultaat is altijd beter dan je verwacht.',
    },
  ],
};
