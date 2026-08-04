export const localeCodes = ['en', 'sr', 'es', 'de', 'ru'] as const;
export const localizedLandingCodes = ['sr', 'es', 'de', 'ru'] as const;

export type SiteLocale = (typeof localeCodes)[number];
export type LocalizedLandingCode = (typeof localizedLandingCodes)[number];

export function routeFor(locale: SiteLocale, route = '/') {
  if (locale === 'en') return route;
  return route === '/' ? `/${locale}/` : `/${locale}${route}`;
}

export function equivalentLocaleRoute(pathname: string, locale: SiteLocale) {
  const localePattern = new RegExp(`^/(${localizedLandingCodes.join('|')})(?=/|$)`);
  const route = pathname.replace(localePattern, '') || '/';
  return routeFor(locale, route);
}

export const languageNames: Record<SiteLocale, string> = {
  en: 'English',
  sr: 'Srpski',
  es: 'Español',
  de: 'Deutsch',
  ru: 'Русский',
};

export const uiCopy = {
  en: {
    nav: { home: 'Home', solutions: 'Solutions', services: 'Services', about: 'About Us', insights: 'Insights', contact: 'Contact' },
    solutionNotes: { pipedrive: 'CRM for closing deals', learnie: 'Learning that travels' },
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
    solutionNotes: { pipedrive: 'CRM za efikasniju prodaju', learnie: 'Učenje koje ide sa vama' },
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
    solutionNotes: { pipedrive: 'CRM para cerrar más ventas', learnie: 'Aprendizaje que te acompaña' },
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
  de: {
    nav: { home: 'Startseite', solutions: 'Lösungen', services: 'Leistungen', about: 'Über uns', insights: 'Einblicke', contact: 'Kontakt' },
    solutionNotes: { pipedrive: 'CRM für erfolgreiche Abschlüsse', learnie: 'Lernen, das mitkommt' },
    cta: 'Gespräch starten',
    languageLabel: 'Sprache wählen',
    menuLabel: 'Navigation öffnen',
    navLabel: 'Hauptnavigation',
    footer: {
      tagline: 'Ein verlässlicher Partner für die richtige Software und die richtigen Märkte.',
      explore: 'Entdecken', company: 'Unternehmen', contact: 'Kontakt', location: 'Belgrad · international tätig',
      closing: 'Für langfristige Partnerschaften gemacht.',
    },
  },
  ru: {
    nav: { home: 'Главная', solutions: 'Решения', services: 'Услуги', about: 'О нас', insights: 'Материалы', contact: 'Контакты' },
    solutionNotes: { pipedrive: 'CRM для успешных продаж', learnie: 'Обучение всегда с вами' },
    cta: 'Обсудить проект',
    languageLabel: 'Выбрать язык',
    menuLabel: 'Открыть навигацию',
    navLabel: 'Основная навигация',
    footer: {
      tagline: 'Один надежный партнер для правильных решений и рынков.',
      explore: 'Разделы', company: 'Компания', contact: 'Контакты', location: 'Белград · работаем на международных рынках',
      closing: 'Создаем долгосрочные партнерства.',
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
    audiences: { eyebrow: 'Dve strane jednog partnerstva', organisations: 'Za organizacije', organisationsTitle: 'Pronađite softver koji odgovara.', organisationsText: 'Za svaku potrebu pažljivo biramo jedno snažno rešenje. Ne nudimo katalog konkurentskih proizvoda—naš portfolio je namerno selektivan.', tech: 'Za tehnološke kompanije', techTitle: 'Rastite na pravim tržištima.', techText: 'Razvoj poslovanja, prodajno zastupanje i podrška zasnovani na bogatom tržišnom iskustvu i snažnoj međunarodnoj mreži.' },
    why: { eyebrow: 'Zašto ADL?', title: 'Biramo pažljivo. Poznajemo tržišta. Razmišljamo dugoročno.', points: ['Partneri smo samo rešenjima u koja verujemo i ne zastupamo direktne konkurente.', 'Naš pristup se oslanja na međunarodno prodajno iskustvo i snažnu profesionalnu mrežu.', 'Gradimo transparentne, dugoročne odnose sa tehnološkim kompanijama i njihovim klijentima.'] },
    products: { eyebrow: 'Odabrana rešenja', pipedrive: 'CRM za efikasnije vođenje prodaje', learnie: 'Mobilno učenje i deljenje znanja' },
    insights: { eyebrow: 'Uvidi', title: 'Ideje za bolje odluke.', text: 'Praktična razmišljanja o softveru, prodaji, ulasku na tržište i dugoročnim partnerstvima.', link: 'Pogledajte sve uvide' },
    closing: { eyebrow: 'Započnimo razgovor', title: 'Pravi softver. Pravo tržište. Hajde da ih pronađemo.', cta: 'Kontaktirajte nas' },
  },
  es: {
    title: 'ADL Nexus — Soluciones de software y crecimiento de mercados',
    description: 'Ayudamos a las organizaciones a encontrar el software adecuado y a las empresas tecnológicas a entrar y crecer en nuevos mercados.',
    hero: { eyebrow: 'Soluciones de software · Crecimiento de mercados', first: 'Software seleccionado cuidadosamente.', accent: 'Un socio de confianza.', support: 'Ayudamos a las organizaciones a encontrar las soluciones de software adecuadas y a las empresas tecnológicas a entrar y crecer en nuevos mercados.', cta: 'Contacta con nosotros' },
    audiences: { eyebrow: 'Dos lados de una misma colaboración', organisations: 'Para organizaciones', organisationsTitle: 'Encuentra el software adecuado.', organisationsText: 'Seleccionamos cuidadosamente una solución sólida para cada necesidad. No ofrecemos un catálogo de productos competidores: nuestra cartera es deliberadamente selectiva.', tech: 'Para empresas tecnológicas', techTitle: 'Crece en los mercados adecuados.', techText: 'Desarrollo de negocio, representación comercial y apoyo basados en una amplia experiencia de mercado y una sólida red internacional.' },
    why: { eyebrow: '¿Por qué ADL?', title: 'Elegimos con cuidado. Conocemos los mercados. Pensamos a largo plazo.', points: ['Solo colaboramos con soluciones en las que creemos y no representamos a competidores directos.', 'Nuestro enfoque se basa en una amplia experiencia en ventas internacionales y una sólida red profesional.', 'Construimos relaciones transparentes y duraderas con empresas tecnológicas y las organizaciones a las que sirven.'] },
    products: { eyebrow: 'Soluciones seleccionadas', pipedrive: 'CRM para gestionar las ventas con mayor eficacia', learnie: 'Aprendizaje móvil y gestión del conocimiento' },
    insights: { eyebrow: 'Perspectivas', title: 'Ideas para tomar mejores decisiones.', text: 'Reflexiones prácticas sobre software, ventas, entrada en nuevos mercados y colaboraciones a largo plazo.', link: 'Ver todas las perspectivas' },
    closing: { eyebrow: 'Empecemos a hablar', title: 'El software adecuado. El mercado adecuado. Encontrémoslos juntos.', cta: 'Contacta con nosotros' },
  },
  de: {
    title: 'ADL Nexus — Softwarelösungen und Marktwachstum',
    description: 'Wir helfen Organisationen, die richtige Software zu finden, und Technologieunternehmen, neue Märkte zu erschließen und dort zu wachsen.',
    hero: { eyebrow: 'Softwarelösungen · Marktwachstum', first: 'Mit Bedacht ausgewählte Software.', accent: 'Ein verlässlicher Partner.', support: 'Wir helfen Organisationen, die richtigen Softwarelösungen zu finden, und Technologieunternehmen, neue Märkte zu erschließen und dort zu wachsen.', cta: 'Kontakt aufnehmen' },
    audiences: { eyebrow: 'Zwei Seiten einer Partnerschaft', organisations: 'Für Organisationen', organisationsTitle: 'Software finden, die wirklich passt.', organisationsText: 'Wir wählen für jeden Bedarf eine starke Lösung sorgfältig aus. Statt eines Katalogs konkurrierender Produkte bieten wir ein bewusst fokussiertes Portfolio.', tech: 'Für Technologieunternehmen', techTitle: 'In den richtigen Märkten wachsen.', techText: 'Geschäftsentwicklung, Vertriebsvertretung und Unterstützung – getragen von umfassender Markterfahrung und einem starken internationalen Netzwerk.' },
    why: { eyebrow: 'Warum ADL?', title: 'Wir wählen sorgfältig aus. Wir kennen die Märkte. Wir denken langfristig.', points: ['Wir arbeiten nur mit Lösungen, an die wir glauben, und vertreten keine direkten Wettbewerber.', 'Unser Ansatz basiert auf umfassender internationaler Vertriebserfahrung und einem starken professionellen Netzwerk.', 'Wir bauen transparente, langfristige Beziehungen zu Technologieunternehmen und ihren Kunden auf.'] },
    products: { eyebrow: 'Ausgewählte Lösungen', pipedrive: 'CRM für eine effektivere Vertriebssteuerung', learnie: 'Mobiles Lernen und Wissensaustausch' },
    insights: { eyebrow: 'Einblicke', title: 'Ideen für bessere Entscheidungen.', text: 'Praxisnahe Perspektiven zu Software, Vertrieb, Markteintritt und langfristigen Partnerschaften.', link: 'Alle Einblicke ansehen' },
    closing: { eyebrow: 'Lassen Sie uns sprechen', title: 'Die richtige Software. Der richtige Markt. Finden wir beides.', cta: 'Kontakt aufnehmen' },
  },
  ru: {
    title: 'ADL Nexus — Программные решения и развитие рынков',
    description: 'Мы помогаем организациям находить подходящие программные решения, а технологическим компаниям — выходить на новые рынки и развиваться на них.',
    hero: { eyebrow: 'Программные решения · Развитие рынков', first: 'Тщательно отобранные решения.', accent: 'Один надежный партнер.', support: 'Мы помогаем организациям находить подходящие программные решения, а технологическим компаниям — выходить на новые рынки и развиваться на них.', cta: 'Связаться с нами' },
    audiences: { eyebrow: 'Две стороны одного партнерства', organisations: 'Для организаций', organisationsTitle: 'Найдите решение, которое вам подходит.', organisationsText: 'Для каждой задачи мы тщательно выбираем одно сильное решение. Вместо каталога конкурирующих продуктов мы предлагаем продуманный и сфокусированный портфель.', tech: 'Для технологических компаний', techTitle: 'Развивайтесь на правильных рынках.', techText: 'Развитие бизнеса, представительство в продажах и поддержка, основанные на глубоком знании рынков и сильной международной сети контактов.' },
    why: { eyebrow: 'Почему ADL?', title: 'Мы выбираем тщательно. Знаем рынки. Думаем на перспективу.', points: ['Мы работаем только с решениями, в которые верим, и не представляем прямых конкурентов.', 'Наш подход основан на большом опыте международных продаж и сильной профессиональной сети.', 'Мы строим прозрачные и долгосрочные отношения с технологическими компаниями и их клиентами.'] },
    products: { eyebrow: 'Отобранные решения', pipedrive: 'CRM для эффективного управления продажами', learnie: 'Мобильное обучение и обмен знаниями' },
    insights: { eyebrow: 'Материалы', title: 'Идеи для взвешенных решений.', text: 'Практические взгляды на программные продукты, продажи, выход на рынки и долгосрочные партнерства.', link: 'Смотреть все материалы' },
    closing: { eyebrow: 'Начнем разговор', title: 'Правильное решение. Правильный рынок. Найдем их вместе.', cta: 'Связаться с нами' },
  },
} satisfies Record<LocalizedLandingCode, {
  title: string;
  description: string;
  hero: { eyebrow: string; first: string; accent: string; support: string; cta: string };
  audiences: { eyebrow: string; organisations: string; organisationsTitle: string; organisationsText: string; tech: string; techTitle: string; techText: string };
  why: { eyebrow: string; title: string; points: [string, string, string] };
  products: { eyebrow: string; pipedrive: string; learnie: string };
  insights: { eyebrow: string; title: string; text: string; link: string };
  closing: { eyebrow: string; title: string; cta: string };
}>;
