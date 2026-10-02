import type { SiteLocale } from './localization';
interface Product { headline: string; text: string; explore: string }
interface HomeCopy {
  audienceLabel: string;
  audiences: { title: string; text: string; action: string }[];
  why: { eyebrow: string; title: string; points: { title: string; text: string }[] };
  solutions: { eyebrow: string; title: string; pipedrive: Product; learnie: Product; demo: string; previous: string; next: string };
  closing: { eyebrow: string; title: string; accent: string; text: string; cta: string };
}
// English follows the final v2 owner brief. SR/ES require native-speaker review.
export const homeCopy: Record<SiteLocale, HomeCopy> = {
  en: {
    audienceLabel: 'Two sides of one partnership',
    audiences: [
      { title: 'Find software that fits.', text: 'Discover software that fits the way your organisation works, with guidance on choosing the right solution and getting started.', action: 'Explore our solutions' },
      { title: 'Grow in the right markets.', text: 'Reach new customers through business development, sales representation and referrals, backed by international sales experience and a strong professional network. Each partnership is built around agreed goals, with no competing solutions that address the same need.', action: 'Explore our services' },
    ],
    why: { eyebrow: 'Why ADL Nexus?', title: 'The right partner. A lasting partnership.', points: [
      { title: 'Deliberately selective.', text: 'We partner only with solutions we believe in and do not represent competing products that address the same need.' },
      { title: 'Internationally experienced.', text: 'We bring extensive international sales experience and a strong professional network to help our partners reach the right customers.' },
      { title: 'Committed for the long term.', text: 'We build lasting relationships with organisations and technology partners through transparency, clear communication and shared goals.' },
    ] },
    solutions: { eyebrow: 'Featured solutions', title: 'Find the right fit for your organisation.',
      pipedrive: { headline: 'The easy and effective CRM for closing deals.', text: 'Track your sales pipeline, manage leads and deals, and automate repetitive tasks so your team can focus on selling.', explore: 'Explore Pipedrive' },
      learnie: { headline: 'Turn everyday experience into shared knowledge.', text: 'Capture practical know-how in bite-sized, mobile-first learning that makes onboarding easier and keeps knowledge moving across your team.', explore: 'Explore Learnie' },
      demo: 'Book a Demo', previous: 'Previous', next: 'Next' },
    closing: { eyebrow: 'Start a conversation', title: 'The right software. The right market. Let’s find it.', accent: 'Let’s find it.', text: 'Tell us where you want to go. We’ll bring focus, clarity and a partnership built to last.', cta: 'Contact us' },
  },
  sr: {
    audienceLabel: 'Dve strane jednog partnerstva',
    audiences: [
      { title: 'Pronađite softver koji odgovara.', text: 'Otkrijte softver koji odgovara načinu rada vaše organizacije, uz podršku pri izboru pravog rešenja i početku korišćenja.', action: 'Istražite naša rešenja' },
      { title: 'Rastite na pravim tržištima.', text: 'Dođite do novih klijenata kroz razvoj poslovanja, prodajno zastupanje i preporuke, uz međunarodno prodajno iskustvo i snažnu profesionalnu mrežu. Svako partnerstvo zasnivamo na dogovorenim ciljevima, bez zastupanja konkurentskih rešenja koja odgovaraju na istu potrebu.', action: 'Istražite naše usluge' },
    ],
    why: { eyebrow: 'Zašto ADL Nexus?', title: 'Pravi partner. Trajno partnerstvo.', points: [
      { title: 'Pažljivo biramo.', text: 'Partneri smo samo rešenjima u koja verujemo i ne zastupamo konkurentske proizvode koji odgovaraju na istu potrebu.' },
      { title: 'Imamo međunarodno iskustvo.', text: 'Donosimo bogato međunarodno prodajno iskustvo i snažnu profesionalnu mrežu kako bismo partnerima pomogli da dođu do pravih klijenata.' },
      { title: 'Posvećeni smo na duge staze.', text: 'Gradimo trajne odnose sa organizacijama i tehnološkim partnerima kroz transparentnost, jasnu komunikaciju i zajedničke ciljeve.' },
    ] },
    solutions: { eyebrow: 'Odabrana rešenja', title: 'Pronađite pravo rešenje za svoju organizaciju.',
      pipedrive: { headline: 'Jednostavan i efikasan CRM za zaključivanje prodaje.', text: 'Pratite prodajni tok, upravljajte potencijalnim klijentima i poslovima i automatizujte ponavljajuće zadatke kako bi vaš tim mogao da se posveti prodaji.', explore: 'Istražite Pipedrive' },
      learnie: { headline: 'Pretvorite svakodnevno iskustvo u zajedničko znanje.', text: 'Sačuvajte praktično znanje kroz kratke sadržaje prilagođene mobilnim uređajima, koji olakšavaju uvođenje u posao i podstiču razmenu znanja u timu.', explore: 'Istražite Learnie' },
      demo: 'Zakažite demo', previous: 'Prethodno', next: 'Sledeće' },
    closing: { eyebrow: 'Započnimo razgovor', title: 'Pravi softver. Pravo tržište. Hajde da ih pronađemo.', accent: 'Hajde da ih pronađemo.', text: 'Recite nam gde želite da stignete. Donosimo fokus, jasnoću i partnerstvo koje traje.', cta: 'Kontaktirajte nas' },
  },
  es: {
    audienceLabel: 'Dos lados de una misma colaboración',
    audiences: [
      { title: 'Encuentra el software adecuado.', text: 'Descubre software que se adapte a la forma de trabajar de tu organización, con orientación para elegir la solución adecuada y empezar a utilizarla.', action: 'Explora nuestras soluciones' },
      { title: 'Crece en los mercados adecuados.', text: 'Llega a nuevos clientes mediante el desarrollo de negocio, la representación comercial y las recomendaciones, con el respaldo de experiencia internacional en ventas y una sólida red profesional. Cada colaboración se basa en objetivos acordados, sin soluciones competidoras que respondan a la misma necesidad.', action: 'Explora nuestros servicios' },
    ],
    why: { eyebrow: '¿Por qué ADL Nexus?', title: 'El socio adecuado. Una colaboración duradera.', points: [
      { title: 'Deliberadamente selectivos.', text: 'Solo colaboramos con soluciones en las que creemos y no representamos productos competidores que respondan a la misma necesidad.' },
      { title: 'Con experiencia internacional.', text: 'Aportamos una amplia experiencia internacional en ventas y una sólida red profesional para ayudar a nuestros socios a llegar a los clientes adecuados.' },
      { title: 'Comprometidos a largo plazo.', text: 'Construimos relaciones duraderas con organizaciones y socios tecnológicos mediante la transparencia, una comunicación clara y objetivos compartidos.' },
    ] },
    solutions: { eyebrow: 'Soluciones seleccionadas', title: 'Encuentra la solución adecuada para tu organización.',
      pipedrive: { headline: 'El CRM sencillo y eficaz para cerrar ventas.', text: 'Haz seguimiento de tu embudo de ventas, gestiona contactos y oportunidades y automatiza tareas repetitivas para que tu equipo pueda centrarse en vender.', explore: 'Explora Pipedrive' },
      learnie: { headline: 'Convierte la experiencia cotidiana en conocimiento compartido.', text: 'Recoge conocimientos prácticos en contenidos breves diseñados para móviles, que facilitan la incorporación y mantienen el conocimiento en circulación en tu equipo.', explore: 'Explora Learnie' },
      demo: 'Reserva una demo', previous: 'Anterior', next: 'Siguiente' },
    closing: { eyebrow: 'Empecemos a hablar', title: 'El software adecuado. El mercado adecuado. Encontrémoslos juntos.', accent: 'Encontrémoslos juntos.', text: 'Cuéntanos adónde quieres llegar. Aportaremos enfoque, claridad y una colaboración duradera.', cta: 'Contacta con nosotros' },
  },
};
