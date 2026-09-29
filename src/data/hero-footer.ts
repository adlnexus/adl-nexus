import type { SiteLocale } from './localization';

export type HeroFooterContext = 'home' | 'services' | 'about' | 'insights' | 'contact';
type Labels = [string, string, string];

// Translations follow the site's existing native-speaker review requirement.
export const heroFooterCopy: Record<SiteLocale, Record<HeroFooterContext, Labels>> = {
  en: {
    home: ['Belgrade', 'Working internationally', 'Independent representation'],
    services: ['Market entry', 'Sales representation', 'Customer growth'],
    about: ['Selective by design', 'Independent advice', 'Long-term partnerships'],
    insights: ['Software & sales', 'Market perspectives', 'Practical thinking'],
    contact: ['Your goals', 'A focused conversation', 'A clear next step'],
  },
  sr: {
    home: ['Beograd', 'Radimo međunarodno', 'Nezavisno zastupanje'],
    services: ['Ulazak na tržište', 'Prodajno zastupanje', 'Rast klijenata'],
    about: ['Pažljiv izbor', 'Nezavisni saveti', 'Dugoročna partnerstva'],
    insights: ['Softver i prodaja', 'Tržišni uvidi', 'Praktične ideje'],
    contact: ['Vaši ciljevi', 'Fokusiran razgovor', 'Jasan sledeći korak'],
  },
  es: {
    home: ['Belgrado', 'Trabajamos internacionalmente', 'Representación independiente'],
    services: ['Entrada en mercados', 'Representación comercial', 'Crecimiento de clientes'],
    about: ['Selección consciente', 'Asesoramiento independiente', 'Alianzas a largo plazo'],
    insights: ['Software y ventas', 'Perspectivas de mercado', 'Ideas prácticas'],
    contact: ['Tus objetivos', 'Una conversación enfocada', 'Un siguiente paso claro'],
  },
  de: {
    home: ['Belgrad', 'International tätig', 'Unabhängige Vertretung'],
    services: ['Markteintritt', 'Vertriebsvertretung', 'Kundenwachstum'],
    about: ['Bewusste Auswahl', 'Unabhängige Beratung', 'Langfristige Partnerschaften'],
    insights: ['Software & Vertrieb', 'Marktperspektiven', 'Praxisnahe Ideen'],
    contact: ['Ihre Ziele', 'Ein fokussiertes Gespräch', 'Ein klarer nächster Schritt'],
  },
  ru: {
    home: ['Белград', 'Работаем на международных рынках', 'Независимое представительство'],
    services: ['Выход на рынок', 'Торговое представительство', 'Рост клиентов'],
    about: ['Осознанный выбор', 'Независимые рекомендации', 'Долгосрочное партнёрство'],
    insights: ['ПО и продажи', 'Взгляд на рынок', 'Практические идеи'],
    contact: ['Ваши цели', 'Предметный разговор', 'Ясный следующий шаг'],
  },
};
