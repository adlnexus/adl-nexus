import type { SiteLocale } from './localization';
type Item = { title: string; text: string };
export interface ServicesCopy {
  heroFirst: string; heroAccent: string; lead: string; introTitle: string; intro: [string, string];
  items: [Item, Item, Item, Item, Item]; approach: string; principles: [Item, Item, Item];
  contact: string; closingTitle: string; closingText: string; talk: string;
}
// English follows the October owner brief. All translations need native-speaker review.
export const servicesCopy: Record<SiteLocale, ServicesCopy> = {
  en: {
    heroFirst: 'Reach new customers.', heroAccent: 'Build lasting growth.',
    lead: 'We help technology companies reach new customers through business development, sales representation and referrals, with a scope of support tailored to each partnership.',
    introTitle: 'How we support your growth.',
    intro: ['Reaching new customers and building lasting relationships takes more than a contact list. It requires an understanding of how customers buy, relevant connections and consistent follow-through.', 'ADL Nexus brings international sales experience and an established professional network to each partnership. From introductions and focused projects to ongoing commercial collaboration, we agree on the support that fits your goals.'],
    items: [
      { title: 'Market entry', text: 'Identify priority markets, understand customer needs and develop a practical approach to reaching the right buyers.' },
      { title: 'Business development', text: 'Connect with potential customers, make relevant introductions and develop qualified sales opportunities.' },
      { title: 'Sales representation', text: 'Represent your solution in customer conversations and support the sales process, from initial meetings to negotiations and closing.' },
      { title: 'Partner development', text: 'Build and support partnerships that bring your solution to the right customers.' },
      { title: 'Customer success & growth', text: 'Help customers get started, use your solution effectively and identify opportunities to grow the relationship.' },
    ], approach: 'How we work',
    principles: [
      { title: 'Referrals & introductions.', text: 'We connect potential customers with your team, who lead the sales process and manage the customer relationship.' },
      { title: 'Focused projects.', text: 'We take on a defined commercial assignment, such as developing opportunities in a selected market or finding suitable partners.' },
      { title: 'Ongoing collaboration.', text: 'We work as your external team in sales, partner development or customer growth, with a white-label option.' },
    ], contact: 'Contact us', closingTitle: 'A better path to growth starts with the right conversation.', closingText: 'Together, we can clarify your next step and where we fit.', talk: 'Let’s talk',
  },
  sr: {
    heroFirst: 'Dođite do novih klijenata.', heroAccent: 'Izgradite dugoročan rast.',
    lead: 'Pomažemo tehnološkim kompanijama da dođu do novih klijenata kroz razvoj poslovanja, prodajno zastupanje i preporuke, uz obim podrške prilagođen svakom partnerstvu.',
    introTitle: 'Kako podržavamo vaš rast.',
    intro: ['Za dolazak do novih klijenata i izgradnju trajnih odnosa potrebno je više od spiska kontakata. Potrebni su razumevanje načina na koji klijenti kupuju, relevantne veze i dosledan rad na svakom narednom koraku.', 'ADL Nexus u svako partnerstvo unosi međunarodno prodajno iskustvo i razvijenu profesionalnu mrežu. Od povezivanja i fokusiranih projekata do kontinuirane komercijalne saradnje, zajedno dogovaramo podršku koja odgovara vašim ciljevima.'],
    items: [
      { title: 'Ulazak na tržište', text: 'Prepoznajte prioritetna tržišta, razumite potrebe klijenata i razvijte praktičan pristup dolasku do pravih kupaca.' },
      { title: 'Razvoj poslovanja', text: 'Povežite se sa potencijalnim klijentima, ostvarite relevantne kontakte i razvijte kvalifikovane prodajne prilike.' },
      { title: 'Prodajno zastupanje', text: 'Predstavljanje vašeg rešenja u razgovorima sa klijentima i podrška prodajnom procesu, od prvih sastanaka do pregovora i zaključivanja prodaje.' },
      { title: 'Razvoj partnerstava', text: 'Izgradite i podržite partnerstva koja vaše rešenje dovode do pravih klijenata.' },
      { title: 'Uspeh i rast klijenata', text: 'Pomozite klijentima da započnu rad, efikasno koriste vaše rešenje i prepoznaju prilike za razvoj saradnje.' },
    ], approach: 'Kako radimo',
    principles: [
      { title: 'Preporuke i povezivanje.', text: 'Povezujemo potencijalne klijente sa vašim timom, koji vodi prodajni proces i upravlja odnosom sa klijentom.' },
      { title: 'Fokusirani projekti.', text: 'Preuzimamo jasno definisan komercijalni zadatak, poput razvoja prilika na odabranom tržištu ili pronalaženja odgovarajućih partnera.' },
      { title: 'Kontinuirana saradnja.', text: 'Radimo kao vaš eksterni tim za prodaju, razvoj partnerstava ili rast klijenata, uz mogućnost rada pod vašim brendom.' },
    ], contact: 'Kontaktirajte nas', closingTitle: 'Bolji put ka rastu počinje pravim razgovorom.', closingText: 'Zajedno možemo razjasniti vaš sledeći korak i našu ulogu u njemu.', talk: 'Hajde da pričamo',
  },
  es: {
    heroFirst: 'Llega a nuevos clientes.', heroAccent: 'Construye un crecimiento duradero.',
    lead: 'Ayudamos a las empresas tecnológicas a llegar a nuevos clientes mediante el desarrollo de negocio, la representación comercial y las recomendaciones, con un alcance de apoyo adaptado a cada colaboración.',
    introTitle: 'Cómo apoyamos tu crecimiento.',
    intro: ['Llegar a nuevos clientes y construir relaciones duraderas requiere más que una lista de contactos. Hace falta comprender cómo compran los clientes, contar con conexiones relevantes y mantener un seguimiento constante.', 'ADL Nexus aporta experiencia internacional en ventas y una red profesional consolidada a cada colaboración. Desde presentaciones y proyectos específicos hasta una colaboración comercial continua, acordamos el apoyo que mejor se ajusta a tus objetivos.'],
    items: [
      { title: 'Entrada en mercados', text: 'Identifica mercados prioritarios, comprende las necesidades de los clientes y desarrolla un enfoque práctico para llegar a los compradores adecuados.' },
      { title: 'Desarrollo de negocio', text: 'Conecta con clientes potenciales, establece contactos relevantes y desarrolla oportunidades de venta cualificadas.' },
      { title: 'Representación comercial', text: 'Representamos tu solución en conversaciones con clientes y apoyamos el proceso de venta, desde las reuniones iniciales hasta la negociación y el cierre.' },
      { title: 'Desarrollo de alianzas', text: 'Construye y apoya alianzas que lleven tu solución a los clientes adecuados.' },
      { title: 'Éxito y crecimiento del cliente', text: 'Ayuda a los clientes a empezar, utilizar tu solución eficazmente e identificar oportunidades para ampliar la relación.' },
    ], approach: 'Cómo trabajamos',
    principles: [
      { title: 'Recomendaciones y presentaciones.', text: 'Conectamos a clientes potenciales con tu equipo, que dirige el proceso de venta y gestiona la relación con el cliente.' },
      { title: 'Proyectos específicos.', text: 'Asumimos un encargo comercial definido, como desarrollar oportunidades en un mercado seleccionado o encontrar socios adecuados.' },
      { title: 'Colaboración continua.', text: 'Trabajamos como tu equipo externo de ventas, desarrollo de alianzas o crecimiento del cliente, con la opción de operar bajo tu marca.' },
    ], contact: 'Contáctanos', closingTitle: 'Un mejor camino hacia el crecimiento empieza con la conversación adecuada.', closingText: 'Juntos podemos aclarar tu próximo paso y cómo podemos contribuir.', talk: 'Hablemos',
  },
  de: {
    heroFirst: 'Neue Kunden erreichen.', heroAccent: 'Dauerhaftes Wachstum aufbauen.',
    lead: 'Wir helfen Technologieunternehmen, durch Geschäftsentwicklung, Vertriebsvertretung und Empfehlungen neue Kunden zu erreichen – mit einem auf jede Partnerschaft abgestimmten Unterstützungsumfang.',
    introTitle: 'So unterstützen wir Ihr Wachstum.',
    intro: ['Neue Kunden zu erreichen und dauerhafte Beziehungen aufzubauen erfordert mehr als eine Kontaktliste. Entscheidend sind ein Verständnis dafür, wie Kunden kaufen, relevante Kontakte und konsequente Nachverfolgung.', 'ADL Nexus bringt internationale Vertriebserfahrung und ein etabliertes berufliches Netzwerk in jede Partnerschaft ein. Von Kontaktanbahnungen und gezielten Projekten bis zur laufenden kommerziellen Zusammenarbeit vereinbaren wir die Unterstützung, die zu Ihren Zielen passt.'],
    items: [
      { title: 'Markteintritt', text: 'Prioritätsmärkte identifizieren, Kundenbedürfnisse verstehen und einen praktischen Ansatz entwickeln, um die richtigen Käufer zu erreichen.' },
      { title: 'Geschäftsentwicklung', text: 'Mit potenziellen Kunden in Kontakt treten, relevante Kontakte herstellen und qualifizierte Verkaufschancen entwickeln.' },
      { title: 'Vertriebsvertretung', text: 'Ihre Lösung in Kundengesprächen vertreten und den Vertriebsprozess unterstützen – von ersten Treffen über Verhandlungen bis zum Abschluss.' },
      { title: 'Partnerentwicklung', text: 'Partnerschaften aufbauen und unterstützen, die Ihre Lösung zu den richtigen Kunden bringen.' },
      { title: 'Kundenerfolg und Wachstum', text: 'Kunden beim Einstieg und der effektiven Nutzung Ihrer Lösung unterstützen und Möglichkeiten zum Ausbau der Beziehung erkennen.' },
    ], approach: 'So arbeiten wir',
    principles: [
      { title: 'Empfehlungen und Kontaktanbahnung.', text: 'Wir verbinden potenzielle Kunden mit Ihrem Team, das den Vertriebsprozess führt und die Kundenbeziehung betreut.' },
      { title: 'Gezielte Projekte.', text: 'Wir übernehmen einen klar definierten kommerziellen Auftrag, etwa die Entwicklung von Chancen in einem ausgewählten Markt oder die Suche nach geeigneten Partnern.' },
      { title: 'Laufende Zusammenarbeit.', text: 'Wir arbeiten als Ihr externes Team im Vertrieb, in der Partnerentwicklung oder im Kundenwachstum – auf Wunsch auch unter Ihrer Marke.' },
    ], contact: 'Kontakt aufnehmen', closingTitle: 'Ein besserer Weg zum Wachstum beginnt mit dem richtigen Gespräch.', closingText: 'Gemeinsam klären wir Ihren nächsten Schritt und unseren Beitrag dazu.', talk: 'Lassen Sie uns sprechen',
  },
  ru: {
    heroFirst: 'Находите новых клиентов.', heroAccent: 'Создавайте долгосрочный рост.',
    lead: 'Мы помогаем технологическим компаниям находить новых клиентов через развитие бизнеса, торговое представительство и рекомендации, подбирая объём поддержки для каждого партнёрства.',
    introTitle: 'Как мы поддерживаем ваш рост.',
    intro: ['Для привлечения новых клиентов и построения долгосрочных отношений нужен не просто список контактов. Необходимо понимать, как клиенты принимают решения о покупке, иметь нужные связи и последовательно доводить работу до результата.', 'ADL Nexus привносит в каждое партнёрство международный опыт продаж и развитую сеть профессиональных контактов. От деловых знакомств и целевых проектов до постоянного коммерческого сотрудничества — мы согласовываем поддержку, соответствующую вашим целям.'],
    items: [
      { title: 'Выход на рынок', text: 'Определите приоритетные рынки, поймите потребности клиентов и разработайте практический подход к поиску подходящих покупателей.' },
      { title: 'Развитие бизнеса', text: 'Устанавливайте связи с потенциальными клиентами, организуйте полезные знакомства и развивайте квалифицированные возможности продаж.' },
      { title: 'Торговое представительство', text: 'Представляем ваше решение в общении с клиентами и поддерживаем процесс продаж — от первых встреч до переговоров и заключения сделки.' },
      { title: 'Развитие партнёрств', text: 'Создавайте и поддерживайте партнёрства, которые помогают вашему решению находить подходящих клиентов.' },
      { title: 'Успех и рост клиентов', text: 'Помогайте клиентам начать работу, эффективно использовать ваше решение и находить возможности для развития сотрудничества.' },
    ], approach: 'Как мы работаем',
    principles: [
      { title: 'Рекомендации и знакомства.', text: 'Мы знакомим потенциальных клиентов с вашей командой, которая ведёт процесс продаж и управляет отношениями с клиентом.' },
      { title: 'Целевые проекты.', text: 'Мы берём на себя конкретную коммерческую задачу, например развитие возможностей на выбранном рынке или поиск подходящих партнёров.' },
      { title: 'Постоянное сотрудничество.', text: 'Мы работаем как ваша внешняя команда по продажам, развитию партнёрств или росту клиентов, в том числе под вашим брендом.' },
    ], contact: 'Свяжитесь с нами', closingTitle: 'Лучший путь к росту начинается с правильного разговора.', closingText: 'Вместе мы определим ваш следующий шаг и нашу роль в нём.', talk: 'Давайте обсудим',
  },
};
