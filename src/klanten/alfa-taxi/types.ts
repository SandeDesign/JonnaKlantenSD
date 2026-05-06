export interface NavLink {
  label: string;
  path: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface TariefRegel {
  omschrijving: string;
  tarief: string;
}

export interface TariefCategorie {
  titel: string;
  regels: TariefRegel[];
}

export interface AlfaTaxiConfig {
  basePath: string;
  id: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  colors: {
    primary: string;
    accent: string;
    accentHover: string;
    text: string;
    background: string;
  };
  contact: {
    address: string;
    phone: string;
    phoneDisplay: string;
    email: string;
    hours: {
      weekday: string;
      weekend: string;
    };
  };
  navigation: NavLink[];
  hero: {
    title: string;
    subtitle: string;
    image: string;
    cta: string;
    ctaLink: string;
    ctaSecondary: string;
    ctaSecondaryLink: string;
  };
  features: Feature[];
  tarieven: TariefCategorie[];
  testimonials: { id: number; name: string; rating: number; text: string }[];
}
