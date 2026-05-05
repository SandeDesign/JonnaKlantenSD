export interface NavLink {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  highlights: string[];
  note?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  vestiging?: string;
}

export interface Vestiging {
  naam: string;
  adres: string;
  telefoon?: string;
  whatsapp?: string;
}

export interface DutchInkConfig {
  naam: string;
  tagline: string;
  beschrijving: string;
  colors: {
    primary: string;
    primaryHover: string;
    primaryLight: string;
    achtergrond: string;
    kaart: string;
    tekst: string;
  };
  logo?: string;
  navigation: NavLink[];
  hero: {
    titel: string;
    subtitel: string;
    afbeelding: string;
    cta: string;
    ctaLink: string;
    ctaSecundair: string;
    ctaSecundairLink: string;
  };
  stats: { label: string; waarde: string }[];
  usps: { icon: string; titel: string; beschrijving: string }[];
  diensten: Service[];
  vestigingen: Vestiging[];
  openingstijden: { dag: string; tijden: string }[];
  email: string;
  testimonials: Testimonial[];
}
