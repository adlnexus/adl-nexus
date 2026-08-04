import type { LocalizedLandingCode } from './localization';

type ClosingCopy = { eyebrow: string; title: string; text: string; button: string };
type CardCopy = { label: string; title: string; text: string };
type ProductCopy = {
  title: string;
  eyebrow: string;
  headline: string;
  lead: string;
  demo: string;
  visual: [string, string, string, string, string, string];
  introTitle: string;
  intro: [string, string];
  why: string;
  benefits: [CardCopy, CardCopy, CardCopy];
  closing: ClosingCopy;
};

export type LocalizedPageCopy = {
  services: {
    title: string; description: string; eyebrow: string; heroFirst: string; heroAccent: string; lead: string;
    introTitle: string; intro: [string, string]; items: [CardCopy, CardCopy, CardCopy, CardCopy, CardCopy]; itemCta: string;
    approach: string; principles: [CardCopy, CardCopy, CardCopy]; closing: ClosingCopy;
  };
  about: {
    title: string; eyebrow: string; heroFirst: string; heroAccent: string; lead: string;
    introTitle: string; intro: [string, string]; beliefEyebrow: string; belief: string; principlesEyebrow: string;
    principles: [CardCopy, CardCopy, CardCopy]; closing: ClosingCopy;
  };
  insights: {
    title: string; eyebrow: string; heroFirst: string; heroAccent: string; lead: string; readTime: string; request: string;
    articles: [CardCopy, CardCopy, CardCopy, CardCopy, CardCopy, CardCopy]; closing: ClosingCopy;
  };
  contact: {
    title: string; description: string; eyebrow: string; heroFirst: string; heroAccent: string; lead: string;
    start: string; brief: string; response: string; email: string; based: string; location: string;
    fields: { name: string; company: string; workEmail: string; topic: string; message: string };
    topics: [string, string, string, string]; submit: string; note: string; subject: string;
  };
  pipedrive: ProductCopy;
  learnie: ProductCopy;
};

export const localizedPagesCopy: Record<LocalizedLandingCode, LocalizedPageCopy> = {
  sr: {
    services: {
      title: 'Usluge — ADL Nexus',
      description: 'Ulazak na tržište, razvoj poslovanja, prodajno zastupanje i rast klijenata za tehnološke kompanije.',
      eyebrow: 'Usluge', heroFirst: 'Lokalno prisustvo.', heroAccent: 'Međunarodna ambicija.',
      lead: 'Komercijalna podrška sa fokusom, jasnoćom i dugoročnom posvećenošću. Postajemo pouzdan deo vašeg tima na tržištima koja su važna.',
      introTitle: 'Vaš tržišni tim, bez distance.',
      intro: ['Ulazak na novo tržište zahteva više od spiska kontakata. Potrebni su kontekst, kredibilitet, strpljiva izgradnja odnosa i razumevanje lokalnih odluka o kupovini.', 'ADL Nexus spaja praktično prodajno rukovodstvo sa razvijenom međunarodnom mrežom. Radimo sa ograničenim brojem partnera koji nisu konkurenti.'],
      items: [
        { label: 'Ulazak na tržište', title: 'Jasan put do pravih kupaca.', text: 'Razumite tržište, izoštrite pozicioniranje i uđite sa praktičnim planom.' },
        { label: 'Razvoj poslovanja', title: 'Prilike koje vode održivom rastu.', text: 'Prepoznajemo prilike, gradimo prodajni tok i razvijamo izabrana tržišta.' },
        { label: 'Prodajno zastupanje', title: 'Iskusno lokalno predstavljanje.', text: 'Vaše rešenje predstavljamo potencijalnim klijentima i vodimo prodajni proces.' },
        { label: 'Razvoj partnera', title: 'Mreža koja proširuje domet.', text: 'Gradimo i osnažujemo partnerske mreže bez razvodnjavanja vaše ponude.' },
        { label: 'Uspeh i rast klijenata', title: 'Vrednost posle prvog ugovora.', text: 'Podržavamo uvođenje, korišćenje i rast naloga radi dugoročne vrednosti.' },
      ],
      itemCta: 'Razgovarajmo o vašem tržištu', approach: 'Kako radimo',
      principles: [
        { label: '01 / Fokus', title: 'Jedna kategorija, jedna posvećenost.', text: 'Ne zastupamo konkurentska rešenja za istu organizacionu potrebu.' },
        { label: '02 / Kontekst', title: 'Strategija zasnovana na stvarnosti.', text: 'Svaki plan prati lokalno ponašanje kupaca, odnose i komercijalne uslove.' },
        { label: '03 / Kontinuitet', title: 'Partnerstvo posle prve prodaje.', text: 'Podržavamo odnos sa klijentom od prvog razgovora do usvajanja i rasta.' },
      ],
      closing: { eyebrow: 'Započnimo razgovor', title: 'Bolji ulazak na tržište počinje pravim razgovorom.', text: 'Jedan fokusiran razgovor može razjasniti sledeći korak.', button: 'Kontaktirajte nas' },
    },
    about: {
      title: 'O nama — ADL Nexus', eyebrow: 'O ADL-u', heroFirst: 'Mali portfolio.', heroAccent: 'Ozbiljna posvećenost.',
      lead: 'Povezujemo organizacije sa pažljivo odabranim softverom i tehnološkim kompanijama pružamo prisustvo potrebno za rast.',
      introTitle: 'Nezavisan partner na obe strane.',
      intro: ['ADL Nexus je nastao iz jednostavne ideje: više izbora nije uvek korisnije. Organizacijama treba pouzdana preporuka, a tehnološkim kompanijama fokusirano i posvećeno zastupanje.', 'Zato za svaku potrebu biramo jedno snažno rešenje i oko njega gradimo dugoročna partnerstva.'],
      beliefEyebrow: 'U šta verujemo', belief: '„Najjača partnerstva nastaju kada su interesi usklađeni, očekivanja jasna i obe strane posvećene dugoročnom uspehu.“',
      principlesEyebrow: 'Naši principi',
      principles: [
        { label: '01 / Selektivnost', title: 'Dubina pre širine.', text: 'Namerno mali portfolio donosi stvarnu stručnost i nepodeljenu pažnju.' },
        { label: '02 / Transparentnost', title: 'Jasnoća od prvog dana.', text: 'Otvoreno govorimo o prilikama, ograničenjima i uslovima uspeha.' },
        { label: '03 / Međunarodno', title: 'Lokalni uvid, šira slika.', text: 'Naša mreža povezuje lokalne nijanse sa međunarodnom ambicijom.' },
      ],
      closing: { eyebrow: 'Započnimo razgovor', title: 'Izgradimo nešto što traje.', text: 'Bilo da birate tehnologiju ili tržište, pravi partner menja ishod.', button: 'Kontaktirajte nas' },
    },
    insights: {
      title: 'Uvidi — ADL Nexus', eyebrow: 'Uvidi', heroFirst: 'Korisne ideje.', heroAccent: 'Bez buke.',
      lead: 'Pogledi na softver, prodaju, ulazak na tržište i dugoročna partnerstva koja čine rast održivim.', readTime: 'min čitanja', request: 'Zatražite ceo tekst',
      articles: [
        { label: 'Ulazak na tržište', title: 'Pet principa za održiv rast na novim tržištima', text: 'Rast uspeva kada komercijalni fokus, lokalni kontekst i strpljiva izgradnja odnosa rade zajedno.' },
        { label: 'Prodaja', title: 'Zašto je lokalno prisustvo i dalje važno', text: 'Digitalni domet otvara vrata, ali poverenje i dosledno lokalno praćenje zatvaraju složene prodaje.' },
        { label: 'Partnerstva', title: 'Mreža kao multiplikator širenja', text: 'Pravi partnerski ekosistem ubrzava učenje i širi domet bez gubitka fokusa.' },
        { label: 'Uspeh klijenata', title: 'Rast počinje posle prvog potpisa', text: 'Uvođenje, usvajanje i razvoj naloga pretvaraju prodaju u trajnu vrednost.' },
        { label: 'Izbor softvera', title: 'Selektivan portfolio je bolji za sve', text: 'Jedna snažna preporuka gradi više poverenja od kataloga sličnih opcija.' },
        { label: 'Učenje', title: 'Znanje koje organizacija ne sme da izgubi', text: 'Praktičan pogled na čuvanje iskustva pre nego što napusti organizaciju.' },
      ],
      closing: { eyebrow: 'Započnimo razgovor', title: 'Donesite nam pitanje iza vašeg sledećeg poteza.', text: 'Najkorisniji uvid polazi od vašeg stvarnog tržišta, tima i ambicije.', button: 'Kontaktirajte nas' },
    },
    contact: {
      title: 'Kontakt — ADL Nexus', description: 'Započnite razgovor sa ADL Nexusom o softveru, tržištu ili komercijalnom rastu.',
      eyebrow: 'Kontakt', heroFirst: 'Pronađimo', heroAccent: 'pravi sledeći korak.', lead: 'Recite nam više o softverskom izazovu, tržišnoj prilici ili komercijalnom cilju.',
      start: 'Započnimo razgovor', brief: 'Kratak opis je dovoljan.', response: 'Odgovorićemo pitanjima koja su važna i predložiti fokusiran prvi razgovor.', email: 'Email', based: 'Lokacija', location: 'Beograd · radimo međunarodno',
      fields: { name: 'Ime', company: 'Kompanija', workEmail: 'Poslovni email', topic: 'Zanima me', message: 'Na čemu radite?' },
      topics: ['Opšti razgovor', 'Pipedrive demo', 'Learnie demo', 'Ulazak na tržište i prodajno zastupanje'], submit: 'Pripremi email', note: 'Slanje otvara vašu email aplikaciju sa pripremljenom porukom. Sajt ne čuva podatke.', subject: 'ADL Nexus upit',
    },
    pipedrive: {
      title: 'Pipedrive CRM — ADL Nexus', eyebrow: 'Odabrano rešenje · CRM', headline: 'Jednostavan i efikasan CRM za zaključivanje prodaje.',
      lead: 'Pratite prodajni tok, optimizujte potencijalne klijente, upravljajte poslovima i automatizujte proces kako bi tim mogao da se posveti prodaji.', demo: 'Zakažite demo',
      visual: ['Novi kontakt', 'Kontakt ostvaren', 'Ponuda', 'Dobijeno', '', ''], introTitle: 'Napravljen prema načinu na koji se prodaja zaista odvija.',
      intro: ['Pipedrive pretvara složene prodajne aktivnosti u jasan i primenljiv tok.', 'ADL Nexus vam pomaže da procenite uklapanje i donesete sigurnu odluku pre implementacije.'], why: 'Zašto Pipedrive',
      benefits: [
        { label: '01', title: 'Jasan pregled svakog posla', text: 'Vizuelni tok daje timu zajednički pogled na prioritete i sledeće korake.' },
        { label: '02', title: 'Fokus na prodaju', text: 'Automatizujte administraciju, a sačuvajte lični rad koji pokreće prilike.' },
        { label: '03', title: 'Napredak zasnovan na podacima', text: 'Koristite uvide da razumete šta radi i gde se poslovi usporavaju.' },
      ], closing: { eyebrow: 'Započnimo razgovor', title: 'Sagledajte prodajni proces sa novom jasnoćom.', text: 'Zakažite fokusiran Pipedrive demo prema vašem timu, toku i ciljevima.', button: 'Kontaktirajte nas' },
    },
    learnie: {
      title: 'Learnie — ADL Nexus', eyebrow: 'Odabrano rešenje · Učenje', headline: 'Učenje koje je društveno, korisno i živo.',
      lead: 'Mobilna platforma za učenje koja čuva iskustvo, unapređuje uvođenje novih ljudi i podržava kontinuirano učenje bez složenih sistema.', demo: 'Zakažite demo',
      visual: ['Šta bih voleo da sam znao prve nedelje', 'Uvođenje · 8 lekcija', 'Kako naši najbolji ljudi rešavaju prigovore', 'Prodaja · 12 lekcija', 'Pametniji način za deljenje iskustva', 'Znanje tima · 6 lekcija'],
      introTitle: 'Vaša organizacija već zna više nego što može da dokumentuje.', intro: ['Važno znanje često živi u razgovorima, iskustvu i neformalnim navikama.', 'ADL Nexus vam pomaže da istražite najvažnije primene—od uvođenja do čuvanja institucionalnog znanja.'], why: 'Zašto Learnie',
      benefits: [
        { label: '01', title: 'Sačuvajte iskustvo', text: 'Pretvorite vredno znanje u kratko i dostupno učenje koje ostaje u organizaciji.' },
        { label: '02', title: 'Bolje uvođenje', text: 'Pomozite novim ljudima da brže uče od kolega i steknu sigurnost.' },
        { label: '03', title: 'Održite učenje živim', text: 'Neka deljenje znanja postane laka i kontinuirana navika.' },
      ], closing: { eyebrow: 'Započnimo razgovor', title: 'Olakšajte deljenje znanja vaših ljudi.', text: 'Zakažite Learnie demo i istražite lakši put ka organizaciji koja uči.', button: 'Kontaktirajte nas' },
    },
  },
  es: {
    services: {
      title: 'Servicios — ADL Nexus', description: 'Entrada en mercados, desarrollo de negocio, representación comercial y crecimiento de clientes para empresas tecnológicas.',
      eyebrow: 'Servicios', heroFirst: 'Presencia local.', heroAccent: 'Ambición internacional.', lead: 'Apoyo comercial con enfoque, claridad y compromiso a largo plazo. Nos convertimos en una extensión de tu equipo en los mercados que importan.',
      introTitle: 'Tu equipo de mercado, sin distancia.', intro: ['Entrar en un mercado exige más que una lista de contactos: requiere contexto, credibilidad, relaciones pacientes y comprensión de las decisiones de compra locales.', 'ADL Nexus combina liderazgo comercial práctico con una sólida red internacional y trabaja con un número limitado de socios no competidores.'],
      items: [
        { label: 'Entrada en mercados', title: 'Una ruta clara hacia los clientes adecuados.', text: 'Comprende el mercado, afina tu posición y entra con un plan práctico.' },
        { label: 'Desarrollo de negocio', title: 'Oportunidades para crecer de forma sostenible.', text: 'Identificamos oportunidades, construimos pipelines y desarrollamos mercados seleccionados.' },
        { label: 'Representación comercial', title: 'Experiencia local frente al cliente.', text: 'Representamos tu solución ante clientes potenciales y acompañamos el cierre.' },
        { label: 'Desarrollo de socios', title: 'Una red que amplía el alcance.', text: 'Creamos y activamos redes de socios sin diluir tu propuesta.' },
        { label: 'Éxito y crecimiento del cliente', title: 'Valor después de la primera firma.', text: 'Apoyamos la incorporación, adopción y expansión de las cuentas.' },
      ], itemCta: 'Hablemos de tu mercado', approach: 'Cómo trabajamos',
      principles: [
        { label: '01 / Enfoque', title: 'Una categoría, un compromiso.', text: 'No representamos soluciones competidoras para la misma necesidad.' },
        { label: '02 / Contexto', title: 'Estrategia basada en la realidad.', text: 'Cada plan refleja el comportamiento de compra, las relaciones y las condiciones locales.' },
        { label: '03 / Continuidad', title: 'Más allá de la primera venta.', text: 'Acompañamos la relación desde la primera conversación hasta la adopción y el crecimiento.' },
      ], closing: { eyebrow: 'Empecemos a hablar', title: 'Una mejor entrada en el mercado comienza con la conversación adecuada.', text: 'Una conversación enfocada puede aclarar el siguiente paso.', button: 'Contacta con nosotros' },
    },
    about: {
      title: 'Nosotros — ADL Nexus', eyebrow: 'Sobre ADL', heroFirst: 'Cartera pequeña.', heroAccent: 'Compromiso serio.', lead: 'Conectamos organizaciones con software cuidadosamente seleccionado y damos a las empresas tecnológicas la presencia necesaria para crecer.',
      introTitle: 'Un socio independiente a ambos lados de la mesa.', intro: ['ADL Nexus nació de una idea sencilla: más opciones no siempre ayudan. Las organizaciones merecen una recomendación fiable y las empresas tecnológicas una representación enfocada y comprometida.', 'Por eso elegimos una solución sólida para cada necesidad y construimos relaciones duraderas a su alrededor.'],
      beliefEyebrow: 'En qué creemos', belief: '«Las mejores colaboraciones nacen cuando los intereses están alineados, las expectativas son claras y ambas partes apuestan por el largo plazo.»', principlesEyebrow: 'Nuestros principios',
      principles: [
        { label: '01 / Selectivos', title: 'Profundidad antes que amplitud.', text: 'Una cartera deliberadamente pequeña aporta experiencia real y atención plena.' },
        { label: '02 / Transparentes', title: 'Claridad desde el primer día.', text: 'Hablamos abiertamente de oportunidades, límites y requisitos para el éxito.' },
        { label: '03 / Internacionales', title: 'Visión local, perspectiva amplia.', text: 'Nuestra red conecta los matices locales con la ambición internacional.' },
      ], closing: { eyebrow: 'Empecemos a hablar', title: 'Construyamos algo que perdure.', text: 'Al elegir tecnología o mercado, el socio adecuado cambia el resultado.', button: 'Contacta con nosotros' },
    },
    insights: {
      title: 'Perspectivas — ADL Nexus', eyebrow: 'Perspectivas', heroFirst: 'Ideas útiles.', heroAccent: 'Sin ruido.', lead: 'Perspectivas sobre software, ventas, entrada en mercados y colaboraciones que hacen sostenible el crecimiento.', readTime: 'min de lectura', request: 'Solicitar el artículo completo',
      articles: [
        { label: 'Entrada en mercados', title: 'Cinco principios para crecer de forma sostenible', text: 'El crecimiento funciona cuando el enfoque comercial, el contexto local y las relaciones avanzan juntos.' },
        { label: 'Ventas', title: 'Por qué la presencia local sigue importando', text: 'El alcance digital abre puertas; la confianza y el seguimiento local cierran ventas complejas.' },
        { label: 'Colaboraciones', title: 'Tu red multiplica la expansión', text: 'El ecosistema adecuado ayuda a aprender más rápido y llegar más lejos sin perder enfoque.' },
        { label: 'Éxito del cliente', title: 'El crecimiento comienza tras la firma', text: 'La incorporación, adopción y expansión convierten una venta en valor duradero.' },
        { label: 'Selección de software', title: 'Una cartera selectiva beneficia a todos', text: 'Una recomendación sólida genera más confianza que un catálogo de opciones similares.' },
        { label: 'Aprendizaje', title: 'El conocimiento que no puedes perder', text: 'Cómo conservar la experiencia antes de que salga de la organización.' },
      ], closing: { eyebrow: 'Empecemos a hablar', title: 'Tráenos la pregunta detrás de tu próximo paso.', text: 'La mejor perspectiva parte de tu mercado, equipo y ambición reales.', button: 'Contacta con nosotros' },
    },
    contact: {
      title: 'Contacto — ADL Nexus', description: 'Inicia una conversación con ADL Nexus sobre software, mercados o crecimiento comercial.', eyebrow: 'Contacto', heroFirst: 'Encontremos', heroAccent: 'el siguiente paso adecuado.', lead: 'Cuéntanos el reto de software, la oportunidad de mercado o el objetivo comercial en el que trabajas.',
      start: 'Empecemos a hablar', brief: 'Una breve descripción es suficiente.', response: 'Responderemos con las preguntas importantes y propondremos una primera conversación enfocada.', email: 'Correo', based: 'Ubicación', location: 'Belgrado · trabajamos internacionalmente',
      fields: { name: 'Nombre', company: 'Empresa', workEmail: 'Correo profesional', topic: 'Me interesa', message: '¿En qué estás trabajando?' }, topics: ['Una conversación general', 'Una demo de Pipedrive', 'Una demo de Learnie', 'Entrada en mercados y representación comercial'], submit: 'Preparar correo', note: 'Al enviar se abre tu aplicación de correo con el mensaje preparado. Este sitio no almacena datos.', subject: 'Consulta a ADL Nexus',
    },
    pipedrive: {
      title: 'Pipedrive CRM — ADL Nexus', eyebrow: 'Solución seleccionada · CRM', headline: 'El CRM sencillo y eficaz para cerrar ventas.', lead: 'Sigue tu pipeline, optimiza leads, gestiona oportunidades y automatiza el proceso para que tu equipo pueda vender.', demo: 'Reservar demo',
      visual: ['Nuevo lead', 'Contacto realizado', 'Propuesta', 'Ganado', '', ''], introTitle: 'Diseñado para cómo funciona realmente la venta.', intro: ['Pipedrive convierte una actividad comercial compleja en un pipeline claro y accionable.', 'ADL Nexus te ayuda a evaluar el encaje y decidir con confianza antes de implementar.'], why: 'Por qué Pipedrive',
      benefits: [
        { label: '01', title: 'Cada oportunidad clara', text: 'Un pipeline visual alinea prioridades, próximos pasos e impulso.' },
        { label: '02', title: 'Enfoque en vender', text: 'Automatiza tareas repetitivas sin perder el trabajo personal que mueve oportunidades.' },
        { label: '03', title: 'Mejora con evidencia', text: 'Usa datos de actividad y conversión para saber qué funciona y dónde se frena.' },
      ], closing: { eyebrow: 'Empecemos a hablar', title: 'Mira tu proceso comercial con nueva claridad.', text: 'Reserva una demo de Pipedrive adaptada a tu equipo, pipeline y objetivos.', button: 'Contacta con nosotros' },
    },
    learnie: {
      title: 'Learnie — ADL Nexus', eyebrow: 'Solución seleccionada · Aprendizaje', headline: 'Aprendizaje social, útil y vivo.', lead: 'Una plataforma móvil que conserva experiencia, mejora la incorporación y apoya el aprendizaje continuo sin sistemas tradicionales complejos.', demo: 'Reservar demo',
      visual: ['Lo que me habría gustado saber la primera semana', 'Incorporación · 8 lecciones', 'Cómo responde nuestro mejor equipo a las objeciones', 'Ventas · 12 lecciones', 'Una forma mejor de compartir experiencia', 'Conocimiento · 6 lecciones'], introTitle: 'Tu organización ya sabe más de lo que puede documentar.', intro: ['El conocimiento importante vive en conversaciones, experiencia y hábitos informales.', 'ADL Nexus te ayuda a explorar los casos de uso que importan, desde la incorporación hasta la memoria institucional.'], why: 'Por qué Learnie',
      benefits: [
        { label: '01', title: 'Conserva la experiencia', text: 'Convierte el saber valioso en aprendizaje breve y accesible que permanece.' },
        { label: '02', title: 'Mejora la incorporación', text: 'Ayuda a las nuevas personas a aprender de sus compañeros y ganar confianza antes.' },
        { label: '03', title: 'Mantén vivo el aprendizaje', text: 'Haz del intercambio de conocimiento un hábito ligero y continuo.' },
      ], closing: { eyebrow: 'Empecemos a hablar', title: 'Haz que el conocimiento sea más fácil de compartir.', text: 'Reserva una demo de Learnie y descubre una forma más ligera de aprender.', button: 'Contacta con nosotros' },
    },
  },
  de: {
    services: {
      title: 'Leistungen — ADL Nexus', description: 'Markteintritt, Geschäftsentwicklung, Vertriebsvertretung und Kundenwachstum für Technologieunternehmen.', eyebrow: 'Leistungen', heroFirst: 'Lokale Präsenz.', heroAccent: 'Internationale Ambition.', lead: 'Kommerzielle Unterstützung mit Fokus, Klarheit und langfristigem Engagement. Wir werden zur verlässlichen Erweiterung Ihres Teams.',
      introTitle: 'Ihr Marktteam – ohne Distanz.', intro: ['Ein neuer Markt braucht mehr als Kontakte: Kontext, Glaubwürdigkeit, geduldige Beziehungen und Verständnis für lokale Kaufentscheidungen.', 'ADL Nexus verbindet praktische Vertriebsführung mit einem starken internationalen Netzwerk und arbeitet mit wenigen, nicht konkurrierenden Partnern.'],
      items: [
        { label: 'Markteintritt', title: 'Ein klarer Weg zu den richtigen Kunden.', text: 'Markt verstehen, Position schärfen und mit einem praktischen Plan starten.' },
        { label: 'Geschäftsentwicklung', title: 'Chancen für nachhaltiges Wachstum.', text: 'Wir identifizieren Chancen, bauen Pipelines auf und entwickeln ausgewählte Märkte.' },
        { label: 'Vertriebsvertretung', title: 'Lokale Erfahrung beim Kunden.', text: 'Wir vertreten Ihre Lösung professionell und begleiten den Abschluss.' },
        { label: 'Partnerentwicklung', title: 'Ein Netzwerk für mehr Reichweite.', text: 'Wir bauen Partnernetzwerke auf, ohne Ihr Angebot zu verwässern.' },
        { label: 'Customer Success & Wachstum', title: 'Wert nach dem ersten Abschluss.', text: 'Wir unterstützen Onboarding, Nutzung und Account-Wachstum.' },
      ], itemCta: 'Sprechen wir über Ihren Markt', approach: 'So arbeiten wir',
      principles: [
        { label: '01 / Fokus', title: 'Eine Kategorie, ein Engagement.', text: 'Wir vertreten keine konkurrierenden Lösungen für denselben Bedarf.' },
        { label: '02 / Kontext', title: 'Strategie mit Realitätsbezug.', text: 'Jeder Plan folgt lokalem Kaufverhalten, Beziehungen und Marktbedingungen.' },
        { label: '03 / Kontinuität', title: 'Über den ersten Abschluss hinaus.', text: 'Wir begleiten Kunden von der ersten Unterhaltung bis zu Nutzung und Wachstum.' },
      ], closing: { eyebrow: 'Gespräch starten', title: 'Ein besserer Markteintritt beginnt mit dem richtigen Gespräch.', text: 'Ein fokussiertes Gespräch kann den nächsten Schritt klären.', button: 'Kontakt aufnehmen' },
    },
    about: {
      title: 'Über uns — ADL Nexus', eyebrow: 'Über ADL', heroFirst: 'Kleines Portfolio.', heroAccent: 'Ernsthaftes Engagement.', lead: 'Wir verbinden Organisationen mit sorgfältig ausgewählter Software und geben Technologieunternehmen die Marktpräsenz für Wachstum.',
      introTitle: 'Ein unabhängiger Partner auf beiden Seiten.', intro: ['ADL Nexus entstand aus einer einfachen Idee: Mehr Auswahl hilft nicht immer. Organisationen verdienen eine verlässliche Empfehlung, Technologieunternehmen eine fokussierte Vertretung.', 'Darum wählen wir für jeden Bedarf eine starke Lösung und bauen langfristige Partnerschaften darum auf.'],
      beliefEyebrow: 'Woran wir glauben', belief: '„Die stärksten Partnerschaften entstehen, wenn Interessen abgestimmt, Erwartungen klar und beide Seiten langfristig engagiert sind.“', principlesEyebrow: 'Unsere Prinzipien',
      principles: [
        { label: '01 / Selektiv', title: 'Tiefe statt Breite.', text: 'Ein bewusst kleines Portfolio schafft echte Expertise und ungeteiltes Engagement.' },
        { label: '02 / Transparent', title: 'Klarheit ab dem ersten Tag.', text: 'Wir sprechen offen über Chancen, Grenzen und Erfolgsbedingungen.' },
        { label: '03 / International', title: 'Lokaler Einblick, weite Sicht.', text: 'Unser Netzwerk verbindet Marktkenntnis mit internationaler Ambition.' },
      ], closing: { eyebrow: 'Gespräch starten', title: 'Lassen Sie uns etwas Dauerhaftes aufbauen.', text: 'Bei Technologie oder Markt verändert der richtige Partner das Ergebnis.', button: 'Kontakt aufnehmen' },
    },
    insights: {
      title: 'Einblicke — ADL Nexus', eyebrow: 'Einblicke', heroFirst: 'Nützliche Gedanken.', heroAccent: 'Ohne Rauschen.', lead: 'Perspektiven auf Software, Vertrieb, Markteintritt und langfristige Partnerschaften für nachhaltiges Wachstum.', readTime: 'Min. Lesezeit', request: 'Vollständigen Beitrag anfordern',
      articles: [
        { label: 'Markteintritt', title: 'Fünf Prinzipien für nachhaltiges Wachstum', text: 'Wachstum gelingt, wenn kommerzieller Fokus, lokaler Kontext und Beziehungen zusammenspielen.' },
        { label: 'Vertrieb', title: 'Warum lokale Präsenz weiter zählt', text: 'Digitale Reichweite öffnet Türen; Vertrauen und lokales Nachfassen schließen komplexe Geschäfte.' },
        { label: 'Partnerschaften', title: 'Ihr Netzwerk vervielfacht Expansion', text: 'Das richtige Ökosystem beschleunigt Lernen und Reichweite ohne Fokusverlust.' },
        { label: 'Customer Success', title: 'Wachstum beginnt nach der Unterschrift', text: 'Onboarding, Nutzung und Account-Entwicklung schaffen dauerhaften Kundenwert.' },
        { label: 'Softwareauswahl', title: 'Ein selektives Portfolio ist besser', text: 'Eine starke Empfehlung schafft mehr Vertrauen als ein Katalog ähnlicher Optionen.' },
        { label: 'Lernen', title: 'Wissen, das nicht verloren gehen darf', text: 'Ein praktischer Blick darauf, Erfahrung in der Organisation zu bewahren.' },
      ], closing: { eyebrow: 'Gespräch starten', title: 'Bringen Sie uns die Frage hinter Ihrem nächsten Schritt.', text: 'Der beste Einblick basiert auf Ihrem realen Markt, Team und Ziel.', button: 'Kontakt aufnehmen' },
    },
    contact: {
      title: 'Kontakt — ADL Nexus', description: 'Sprechen Sie mit ADL Nexus über Software, Märkte oder kommerzielles Wachstum.', eyebrow: 'Kontakt', heroFirst: 'Finden wir', heroAccent: 'den richtigen nächsten Schritt.', lead: 'Erzählen Sie uns von Ihrer Softwarefrage, Marktchance oder Ihrem kommerziellen Ziel.', start: 'Gespräch starten', brief: 'Eine kurze Beschreibung genügt.', response: 'Wir antworten mit den wichtigen Fragen und schlagen ein fokussiertes Erstgespräch vor.', email: 'E-Mail', based: 'Standort', location: 'Belgrad · international tätig',
      fields: { name: 'Name', company: 'Unternehmen', workEmail: 'Geschäftliche E-Mail', topic: 'Ich interessiere mich für', message: 'Woran arbeiten Sie?' }, topics: ['Ein allgemeines Gespräch', 'Eine Pipedrive-Demo', 'Eine Learnie-Demo', 'Markteintritt und Vertriebsvertretung'], submit: 'E-Mail vorbereiten', note: 'Beim Absenden öffnet sich Ihre E-Mail-App mit der vorbereiteten Anfrage. Diese Website speichert keine Daten.', subject: 'ADL Nexus Anfrage',
    },
    pipedrive: {
      title: 'Pipedrive CRM — ADL Nexus', eyebrow: 'Ausgewählte Lösung · CRM', headline: 'Das einfache und effektive CRM für erfolgreiche Abschlüsse.', lead: 'Verfolgen Sie Pipeline und Leads, verwalten Sie Deals und automatisieren Sie Prozesse, damit Ihr Team verkaufen kann.', demo: 'Demo buchen', visual: ['Neuer Lead', 'Kontakt hergestellt', 'Angebot', 'Gewonnen', '', ''], introTitle: 'Für die Realität des Vertriebs entwickelt.', intro: ['Pipedrive macht komplexe Vertriebsaktivität zu einer klaren, handlungsorientierten Pipeline.', 'ADL Nexus hilft bei der Einordnung und einer sicheren Entscheidung vor der Einführung.'], why: 'Warum Pipedrive',
      benefits: [
        { label: '01', title: 'Jeden Deal klar sehen', text: 'Eine visuelle Pipeline zeigt Prioritäten, nächste Schritte und Dynamik.' },
        { label: '02', title: 'Auf Verkauf fokussieren', text: 'Automatisieren Sie Verwaltung und bewahren Sie die persönliche Vertriebsarbeit.' },
        { label: '03', title: 'Mit Fakten verbessern', text: 'Aktivitäts- und Konversionsdaten zeigen, was funktioniert und wo Deals stocken.' },
      ], closing: { eyebrow: 'Gespräch starten', title: 'Sehen Sie Ihren Vertrieb mit neuer Klarheit.', text: 'Buchen Sie eine Pipedrive-Demo passend zu Team, Pipeline und Zielen.', button: 'Kontakt aufnehmen' },
    },
    learnie: {
      title: 'Learnie — ADL Nexus', eyebrow: 'Ausgewählte Lösung · Lernen', headline: 'Lernen, das sozial, nützlich und lebendig ist.', lead: 'Eine mobile Lernplattform, die Erfahrung bewahrt, Onboarding verbessert und kontinuierliches Lernen ohne komplexe Systeme unterstützt.', demo: 'Demo buchen', visual: ['Was ich in Woche eins gern gewusst hätte', 'Onboarding · 8 Lektionen', 'Wie unsere Besten Einwände behandeln', 'Vertrieb · 12 Lektionen', 'Erfahrung besser teilen', 'Teamwissen · 6 Lektionen'], introTitle: 'Ihre Organisation weiß mehr, als sie dokumentieren kann.', intro: ['Wichtiges Wissen steckt oft in Gesprächen, Erfahrung und informellen Gewohnheiten.', 'ADL Nexus hilft, die wichtigsten Anwendungen von Onboarding bis Wissenssicherung zu erkunden.'], why: 'Warum Learnie',
      benefits: [
        { label: '01', title: 'Erfahrung bewahren', text: 'Machen Sie wertvolles Know-how zu kurzem, zugänglichem Lernen.' },
        { label: '02', title: 'Onboarding verbessern', text: 'Neue Mitarbeitende lernen von Kollegen und gewinnen schneller Sicherheit.' },
        { label: '03', title: 'Lernen lebendig halten', text: 'Wissensaustausch wird zu einer leichten, kontinuierlichen Gewohnheit.' },
      ], closing: { eyebrow: 'Gespräch starten', title: 'Machen Sie Wissen leichter teilbar.', text: 'Buchen Sie eine Learnie-Demo für einen leichteren Weg zur lernenden Organisation.', button: 'Kontakt aufnehmen' },
    },
  },
  ru: {
    services: {
      title: 'Услуги — ADL Nexus', description: 'Выход на рынок, развитие бизнеса, представительство в продажах и рост клиентов для технологических компаний.', eyebrow: 'Услуги', heroFirst: 'Локальное присутствие.', heroAccent: 'Международные амбиции.', lead: 'Коммерческая поддержка с фокусом, ясностью и долгосрочной ответственностью. Мы становимся надежным продолжением вашей команды.',
      introTitle: 'Ваша рыночная команда без дистанции.', intro: ['Для выхода на новый рынок недостаточно списка контактов. Нужны контекст, доверие, терпеливое развитие отношений и понимание местных решений о покупке.', 'ADL Nexus сочетает практический опыт продаж с сильной международной сетью и работает с ограниченным числом неконкурирующих партнеров.'],
      items: [
        { label: 'Выход на рынок', title: 'Понятный путь к нужным клиентам.', text: 'Изучаем рынок, уточняем позиционирование и создаем практичный план входа.' },
        { label: 'Развитие бизнеса', title: 'Возможности для устойчивого роста.', text: 'Находим возможности, строим воронку и развиваем выбранные рынки.' },
        { label: 'Представительство в продажах', title: 'Локальная экспертиза перед клиентом.', text: 'Представляем ваше решение потенциальным клиентам и сопровождаем сделки.' },
        { label: 'Развитие партнеров', title: 'Сеть, расширяющая охват.', text: 'Создаем и развиваем партнерские сети без размывания предложения.' },
        { label: 'Успех и рост клиентов', title: 'Ценность после первой сделки.', text: 'Поддерживаем внедрение, использование и развитие клиентских аккаунтов.' },
      ], itemCta: 'Обсудить ваш рынок', approach: 'Как мы работаем',
      principles: [
        { label: '01 / Фокус', title: 'Одна категория — одно обязательство.', text: 'Мы не представляем конкурирующие решения для одной потребности.' },
        { label: '02 / Контекст', title: 'Стратегия, основанная на реальности.', text: 'Каждый план учитывает местное поведение покупателей, связи и условия.' },
        { label: '03 / Последовательность', title: 'Дальше первой сделки.', text: 'Мы поддерживаем отношения от первого разговора до внедрения и роста.' },
      ], closing: { eyebrow: 'Начнем разговор', title: 'Успешный выход на рынок начинается с правильного разговора.', text: 'Один предметный разговор поможет определить следующий шаг.', button: 'Связаться с нами' },
    },
    about: {
      title: 'О нас — ADL Nexus', eyebrow: 'Об ADL', heroFirst: 'Небольшой портфель.', heroAccent: 'Серьезная вовлеченность.', lead: 'Мы помогаем организациям выбирать тщательно отобранный софт, а технологическим компаниям — создавать присутствие для роста.',
      introTitle: 'Независимый партнер по обе стороны.', intro: ['ADL Nexus основан на простой идее: больше выбора не всегда полезнее. Организациям нужна надежная рекомендация, а технологическим компаниям — сфокусированное представительство.', 'Поэтому для каждой потребности мы выбираем одно сильное решение и строим вокруг него долгосрочные отношения.'],
      beliefEyebrow: 'Во что мы верим', belief: '«Самые сильные партнерства возникают, когда интересы согласованы, ожидания ясны, а обе стороны настроены на долгий срок.»', principlesEyebrow: 'Наши принципы',
      principles: [
        { label: '01 / Избирательность', title: 'Глубина важнее широты.', text: 'Небольшой портфель означает настоящую экспертизу и полную вовлеченность.' },
        { label: '02 / Прозрачность', title: 'Ясность с первого дня.', text: 'Мы открыто говорим о возможностях, ограничениях и условиях успеха.' },
        { label: '03 / Международность', title: 'Локальное понимание, широкий взгляд.', text: 'Наша сеть соединяет нюансы рынка с международными амбициями.' },
      ], closing: { eyebrow: 'Начнем разговор', title: 'Создадим то, что прослужит долго.', text: 'При выборе технологии или рынка правильный партнер меняет результат.', button: 'Связаться с нами' },
    },
    insights: {
      title: 'Материалы — ADL Nexus', eyebrow: 'Материалы', heroFirst: 'Полезные идеи.', heroAccent: 'Без лишнего шума.', lead: 'Практические взгляды на софт, продажи, выход на рынки и долгосрочные партнерства для устойчивого роста.', readTime: 'мин чтения', request: 'Запросить полный материал',
      articles: [
        { label: 'Выход на рынок', title: 'Пять принципов устойчивого роста', text: 'Рост возможен, когда коммерческий фокус, местный контекст и отношения работают вместе.' },
        { label: 'Продажи', title: 'Почему локальное присутствие по-прежнему важно', text: 'Цифровой охват открывает двери, а доверие и местная работа закрывают сложные сделки.' },
        { label: 'Партнерства', title: 'Сеть как ускоритель расширения', text: 'Правильная экосистема помогает быстрее учиться и расти без потери фокуса.' },
        { label: 'Успех клиентов', title: 'Рост начинается после подписи', text: 'Внедрение, использование и развитие аккаунта создают долгосрочную ценность.' },
        { label: 'Выбор софта', title: 'Избирательный портфель выгоден всем', text: 'Одна сильная рекомендация вызывает больше доверия, чем каталог похожих вариантов.' },
        { label: 'Обучение', title: 'Знания, которые нельзя потерять', text: 'Практический взгляд на сохранение опыта внутри организации.' },
      ], closing: { eyebrow: 'Начнем разговор', title: 'Принесите нам вопрос, стоящий за вашим следующим шагом.', text: 'Лучшие идеи опираются на реальный рынок, команду и амбиции.', button: 'Связаться с нами' },
    },
    contact: {
      title: 'Контакты — ADL Nexus', description: 'Обсудите с ADL Nexus программные решения, рынки или коммерческий рост.', eyebrow: 'Контакты', heroFirst: 'Найдем', heroAccent: 'правильный следующий шаг.', lead: 'Расскажите о вашей задаче, рыночной возможности или коммерческой цели.', start: 'Начнем разговор', brief: 'Краткого описания достаточно.', response: 'Мы ответим важными уточняющими вопросами и предложим предметную первую встречу.', email: 'Email', based: 'Мы находимся', location: 'Белград · работаем на международных рынках',
      fields: { name: 'Имя', company: 'Компания', workEmail: 'Рабочий email', topic: 'Меня интересует', message: 'Над чем вы работаете?' }, topics: ['Общий разговор', 'Демо Pipedrive', 'Демо Learnie', 'Выход на рынок и представительство в продажах'], submit: 'Подготовить письмо', note: 'После отправки откроется ваше почтовое приложение с подготовленным письмом. Сайт не хранит данные.', subject: 'Запрос в ADL Nexus',
    },
    pipedrive: {
      title: 'Pipedrive CRM — ADL Nexus', eyebrow: 'Отобранное решение · CRM', headline: 'Простая и эффективная CRM для успешных сделок.', lead: 'Отслеживайте воронку, управляйте лидами и сделками, автоматизируйте процесс и сосредоточьтесь на продажах.', demo: 'Записаться на демо', visual: ['Новый лид', 'Контакт установлен', 'Предложение', 'Выиграно', '', ''], introTitle: 'Создано с учетом реального процесса продаж.', intro: ['Pipedrive превращает сложную активность в понятную и управляемую воронку.', 'ADL Nexus помогает оценить соответствие и уверенно принять решение до внедрения.'], why: 'Почему Pipedrive',
      benefits: [
        { label: '01', title: 'Каждая сделка на виду', text: 'Визуальная воронка дает общий обзор приоритетов и следующих шагов.' },
        { label: '02', title: 'Фокус на продажах', text: 'Автоматизируйте рутину, сохраняя личную работу, которая двигает сделки.' },
        { label: '03', title: 'Улучшения на основе данных', text: 'Аналитика показывает, что работает и где сделки замедляются.' },
      ], closing: { eyebrow: 'Начнем разговор', title: 'Посмотрите на продажи с новой ясностью.', text: 'Запишитесь на демо Pipedrive с учетом вашей команды, воронки и целей.', button: 'Связаться с нами' },
    },
    learnie: {
      title: 'Learnie — ADL Nexus', eyebrow: 'Отобранное решение · Обучение', headline: 'Обучение, которое остается живым и полезным.', lead: 'Мобильная платформа помогает сохранять опыт, улучшать адаптацию и поддерживать непрерывное обучение без сложных систем.', demo: 'Записаться на демо', visual: ['Что стоило знать в первую неделю', 'Адаптация · 8 уроков', 'Как лучшие сотрудники работают с возражениями', 'Продажи · 12 уроков', 'Как лучше делиться опытом', 'Знания команды · 6 уроков'], introTitle: 'Ваша организация знает больше, чем успевает документировать.', intro: ['Важные знания часто живут в разговорах, личном опыте и неформальных привычках.', 'ADL Nexus помогает изучить ключевые сценарии — от адаптации до сохранения институциональной памяти.'], why: 'Почему Learnie',
      benefits: [
        { label: '01', title: 'Сохраняйте опыт', text: 'Превращайте ценные знания в короткое доступное обучение.' },
        { label: '02', title: 'Улучшайте адаптацию', text: 'Помогайте новым сотрудникам быстрее учиться у коллег и обретать уверенность.' },
        { label: '03', title: 'Поддерживайте обучение', text: 'Сделайте обмен знаниями легкой и постоянной привычкой.' },
      ], closing: { eyebrow: 'Начнем разговор', title: 'Упростите обмен знаниями в команде.', text: 'Запишитесь на демо Learnie и найдите более легкий путь к обучающейся организации.', button: 'Связаться с нами' },
    },
  },
};
