export const localeCodes = ['en', 'sr', 'es'] as const;
export const localizedLandingCodes = ['sr', 'es'] as const;

export type SiteLocale = (typeof localeCodes)[number];
export type LocalizedLandingCode = (typeof localizedLandingCodes)[number];

export function routeFor(locale: SiteLocale, route = '/') {
  const routePath = route === '/' ? '/' : `/${route.replace(/^\/+|\/+$/g, '')}/`;
  if (locale === 'en') return routePath;
  return routePath === '/' ? `/${locale}/` : `/${locale}${routePath}`;
}

export function equivalentLocaleRoute(pathname: string, locale: SiteLocale) {
  const localePattern = new RegExp(`^/(${localizedLandingCodes.join('|')})(?=/|$)`);
  const route = pathname.replace(localePattern, '') || '/';
  // New EN/SR Pipedrive articles have no Spanish translation yet.
  if (locale === 'es' && route.startsWith('/solutions/pipedrive/')) return routeFor(locale, '/solutions/pipedrive');
  return routeFor(locale, route);
}

export const languageNames: Record<SiteLocale, string> = {
  en: 'English',
  sr: 'Srpski',
  es: 'Español',
};

export const uiCopy = {
  en: {
    nav: { home: 'Home', solutions: 'Solutions', services: 'Services', about: 'About Us', insights: 'Insights', contact: 'Contact' },
    solutionNotes: { pipedrive: 'CRM for closing deals', learnie: 'Mobile-first microlearning' },
    cta: 'Let’s talk',
    languageLabel: 'Choose language',
    menuLabel: 'Open navigation',
    navLabel: 'Main navigation',
    footer: {
      tagline: 'One trusted partner for the right software and the right markets.',
      explore: 'Explore', company: 'Company', contact: 'Contact', location: 'Belgrade · working internationally',
      closing: 'Built for long-term partnerships.',
    },
  },
  sr: {
    nav: { home: 'Početna', solutions: 'Rešenja', services: 'Usluge', about: 'O nama', insights: 'Uvidi', contact: 'Kontakt' },
    solutionNotes: { pipedrive: 'CRM za efikasniju prodaju', learnie: 'Mikroučenje prilagođeno mobilnim uređajima' },
    cta: 'Hajde da pričamo',
    languageLabel: 'Izaberite jezik',
    menuLabel: 'Otvori navigaciju',
    navLabel: 'Glavna navigacija',
    footer: {
      tagline: 'Jedan pouzdan partner za pravi softver i prava tržišta.',
      explore: 'Istražite', company: 'Kompanija', contact: 'Kontakt', location: 'Beograd · radimo međunarodno',
      closing: 'Gradimo dugoročna partnerstva.',
    },
  },
  es: {
    nav: { home: 'Inicio', solutions: 'Soluciones', services: 'Servicios', about: 'Nosotros', insights: 'Perspectivas', contact: 'Contacto' },
    solutionNotes: { pipedrive: 'CRM para cerrar más ventas', learnie: 'Microaprendizaje diseñado para móviles' },
    cta: 'Hablemos',
    languageLabel: 'Elegir idioma',
    menuLabel: 'Abrir navegación',
    navLabel: 'Navegación principal',
    footer: {
      tagline: 'Un socio de confianza para el software y los mercados adecuados.',
      explore: 'Explorar', company: 'Empresa', contact: 'Contacto', location: 'Belgrado · trabajamos internacionalmente',
      closing: 'Creamos relaciones a largo plazo.',
    },
  },
} satisfies Record<SiteLocale, {
  nav: Record<'home' | 'solutions' | 'services' | 'about' | 'insights' | 'contact', string>;
  solutionNotes: Record<'pipedrive' | 'learnie', string>;
  cta: string;
  languageLabel: string;
  menuLabel: string;
  navLabel: string;
  footer: { tagline: string; explore: string; company: string; contact: string; location: string; closing: string };
}>;

export const landingCopy = {
  sr: {
    title: 'ADL Nexus — Softverska rešenja i razvoj tržišta',
    description: 'Pomažemo organizacijama da pronađu pravo softversko rešenje, a tehnološkim kompanijama da uđu na nova tržišta i rastu.',
    hero: { eyebrow: 'Softverska rešenja · Razvoj tržišta', first: 'Pažljivo odabran softver.', accent: 'Jedan pouzdan partner.', support: 'Pomažemo organizacijama da pronađu pravo softversko rešenje, a tehnološkim kompanijama da uđu na nova tržišta i rastu.', cta: 'Kontaktirajte nas' },
  },
  es: {
    title: 'ADL Nexus — Soluciones de software y crecimiento de mercados',
    description: 'Ayudamos a las organizaciones a encontrar el software adecuado y a las empresas tecnológicas a entrar y crecer en nuevos mercados.',
    hero: { eyebrow: 'Soluciones de software · Crecimiento de mercados', first: 'Software seleccionado cuidadosamente.', accent: 'Un socio de confianza.', support: 'Ayudamos a las organizaciones a encontrar las soluciones de software adecuadas y a las empresas tecnológicas a entrar y crecer en nuevos mercados.', cta: 'Contacta con nosotros' },
  },
} satisfies Record<LocalizedLandingCode, {
  title: string;
  description: string;
  hero: { eyebrow: string; first: string; accent: string; support: string; cta: string };
}>;

export const socialMetadata = {
  en: {
    openGraphLocale: 'en_GB',
    imageAlt: 'ADL Nexus — Carefully selected software. One trusted partner.',
  },
  sr: {
    openGraphLocale: 'sr_RS',
    imageAlt: `ADL Nexus — ${landingCopy.sr.hero.first} ${landingCopy.sr.hero.accent}`,
  },
  es: {
    openGraphLocale: 'es_ES',
    imageAlt: `ADL Nexus — ${landingCopy.es.hero.first} ${landingCopy.es.hero.accent}`,
  },
} satisfies Record<SiteLocale, { openGraphLocale: string; imageAlt: string }>;
