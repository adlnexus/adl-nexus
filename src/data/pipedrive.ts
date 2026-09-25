export const pipedriveTrialHref = 'https://app.pipedrive.com/affiliate/pdp-psh-andjelka-danilo?utm_source=PartnerScaleHub+Kft.&utm_medium=partners_program&utm_content=copy_text&utm_term=pdp-psh-andjelka-danilo';

type ContentItem = { title: string; text: string };
type FeatureItem = { title: string; text: string };
type FaqItem = { question: string; answer: string };

export type PipedriveDetailedCopy = {
  title: string;
  description: string;
  hero: {
    eyebrow: string;
    headline: string;
    lead: string;
    support: string;
    demo: string;
    trial: string;
    trialNote: string;
  };
  pipeline: {
    title: string;
    addDeal: string;
    stages: [string, string, string, string];
  };
  trust: string;
  pain: {
    eyebrow: string;
    title: string;
    items: ContentItem[];
    summary: string;
  };
  audiences: {
    eyebrow: string;
    title: string;
    lead: string;
    cards: string[];
  };
  why: {
    eyebrow: string;
    title: string;
    lead: string;
    paragraphs: string[];
    closing: string;
  };
  outcomes: ContentItem[];
  workflow: {
    eyebrow: string;
    title: string;
    items: ContentItem[];
  };
  features: {
    eyebrow: string;
    title: string;
    items: FeatureItem[];
  };
  integrations: {
    eyebrow: string;
    title: string;
    lead: string;
    points: string[];
    closing: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
  };
  closing: {
    eyebrow: string;
    title: string;
    text: string;
    demo: string;
    trial: string;
  };
};

export const pipedriveDetailedCopy: Record<'en' | 'sr' | 'es' | 'de' | 'ru', PipedriveDetailedCopy> = {
  en: {
    title: 'Pipedrive CRM tailored to your business — ADL Nexus',
    description: 'Tailored Pipedrive implementation, automation, reporting and ongoing support from an official Pipedrive Premier Partner in the Adria region.',
    hero: {
      eyebrow: 'Pipedrive implementation · Adria region',
      headline: 'Pipedrive CRM tailored to your business',
      lead: 'As an official Pipedrive Premier Partner in the Adria region, we help organisations tailor Pipedrive to the way they work through the right pipeline setup, automation, reporting and team processes.',
      support: 'Built around the way you actually sell, not generic software templates.',
      demo: 'Book a demo',
      trial: 'Try it free for 30 days',
      trialNote: '*No credit card needed',
    },
    pipeline: { title: 'Sales pipeline', addDeal: '+ Add deal', stages: ['New lead', 'Qualified', 'Proposal', 'Won'] },
    trust: 'Trusted by more than 100,000 companies worldwide.',
    pain: {
      eyebrow: 'The challenge',
      title: 'Where does your sales process lose momentum?',
      items: [
        {
          title: 'A slow sales cycle?',
          text: 'You send a proposal, then wait for a response. The prospect goes quiet, speaks with several competitors and, by the time you follow up, it feels too late. Most opportunities are not lost on price; they slip away in the silence. Without a clear system for next steps, even strong salespeople can lose opportunities and revenue that were within reach.',
        },
        {
          title: 'A chaotic sales process?',
          text: 'Every salesperson works differently. Opportunity details remain scattered across inboxes, notes and spreadsheets that nobody updates consistently. New team members have no clear process to follow, and sales forecasts become guesswork. Without one shared system, revenue stays unpredictable.',
        },
        {
          title: 'Unreliable reporting?',
          text: 'You discover that the quarter underperformed only after it has ended. There is no early-warning system, no dependable forecast and too many conversations based on assumptions rather than facts. Without real-time data, it is difficult to make good decisions and build consistent sales performance.',
        },
      ],
      summary: 'Pipedrive turns a chaotic, intuition-led sales process into a clear, measurable and efficient system without adding administrative burden for your team.',
    },
    audiences: {
      eyebrow: 'Who it is for',
      title: 'Pipedrive adapts to the way you sell.',
      lead: 'A flexible sales platform for teams with different markets, deal structures and customer journeys.',
      cards: [
        'Wholesale and distribution',
        'Manufacturing',
        'Machinery and industrial equipment sales',
        'Real estate and mortgage brokerage',
        'IT services and software sales',
        'Construction',
        'Insurance',
        'Marketing and digital agencies',
        'Private clinics and dental practices',
        'Recruitment and HR consulting',
        'Business consulting',
        'HVAC and field services',
      ],
    },
    why: {
      eyebrow: 'Why ADL Nexus',
      title: 'More than CRM implementation.',
      lead: 'Pipedrive should not just be set up. It should be tailored to the way your team actually sells.',
      paragraphs: [
        'The team behind ADL Nexus brings experience in sales, business development and account management across international markets. That is why we do not see CRM simply as software, but as a system that should support your real sales process, from the first opportunity through closing the deal and developing the customer relationship further.',
        'Before we start configuring Pipedrive, we want to understand how your team works: how new opportunities come in, how they are qualified, who takes ownership of them, where the process most often slows down and what information you need to make better decisions.',
        'Based on that, we tailor your pipeline, automations, activities and reporting to the way your team works, then help your team adopt Pipedrive and use it effectively in day-to-day sales.',
      ],
      closing: 'As an official Pipedrive Premier Partner in the Adria region, ADL Nexus combines sales-process expertise with implementation and ongoing support.',
    },
    outcomes: [
      {
        title: 'A faster sales cycle',
        text: 'Every opportunity has a clear next step, due date and owner. Automatic reminders and predefined activity sequences maintain momentum, helping more opportunities progress before they go cold.',
      },
      {
        title: 'An organised sales process',
        text: 'Every opportunity, stage, owner and value is visible in one place. Emails, calls, notes and documents stay attached to the right contact or deal, giving the whole team one shared system and management a clear view.',
      },
      {
        title: 'AI-assisted reporting',
        text: 'As your team uses Pipedrive, real sales activity becomes clear dashboards and forecasts. The sales assistant highlights opportunities that need attention, potential risks and the activities most likely to influence results.',
      },
    ],
    workflow: {
      eyebrow: 'How it works',
      title: 'From first contact to measurable growth.',
      items: [
        {
          title: 'Automatic lead capture',
          text: 'Enquiries from your website, email, LinkedIn or phone can arrive in one place. Your pipeline stays current without repeated copying, lost contacts or opportunities falling between tools.',
        },
        {
          title: 'Follow-up and conversion',
          text: 'Every opportunity moves through a pipeline shaped around your real sales process. Defined activities, owners, deadlines and reminders keep prospects engaged and make every follow-up visible.',
        },
        {
          title: 'Reporting and growth',
          text: 'Real-time dashboards reveal what works and where deals stall. Revenue forecasts update as opportunities progress, while the AI sales assistant helps the team focus on the work that matters now.',
        },
      ],
    },
    features: {
      eyebrow: 'Key capabilities',
      title: 'The Pipedrive features that move sales forward.',
      items: [
        { title: 'Pipeline and sales-process management', text: 'See the entire sales process in one clear view: which opportunities are progressing, where momentum has slowed and what needs attention.' },
        { title: 'Email, calendar, WhatsApp and LinkedIn sync', text: 'Keep messages, meetings, calls and conversations connected to the right contact or opportunity, so your team spends less time searching for context.' },
        { title: 'Automation and AI sales assistant', text: 'Automate repetitive work while the sales assistant identifies opportunities that need attention and suggests useful next activities.' },
        { title: 'Task management', text: 'Give every opportunity a defined next step, task, due date and owner, making it clear what happens after each call, meeting or proposal.' },
        { title: 'AI reporting', text: 'Turn everyday sales data into clear reports and dashboards that show actual performance and support better decisions.' },
        { title: 'Documents and electronic signatures', text: 'Populate proposals and contracts with CRM data and send them for electronic signature directly from Pipedrive.' },
        { title: 'Project management', text: 'Continue tracking delivery after the sale with tasks, deadlines and automated processes in the same system.' },
        { title: 'Lead prioritisation', text: 'Help salespeople focus first on opportunities with the strongest combination of value, stage and engagement.' },
        { title: 'Email campaigns and automated communication', text: 'Send newsletters and automated messages while keeping opens, clicks and replies connected to the relevant contact.' },
        { title: 'Data enrichment', text: 'Use a name and email address to supplement publicly available contact and company data and reduce manual entry.' },
        { title: 'Communication history', text: 'View calls, emails and meetings chronologically for every contact, including who led the conversation and when the last contact happened.' },
        { title: 'Sales inbox', text: 'Connect email conversations with contacts and opportunities so the full history and next steps remain visible in one place.' },
      ],
    },
    integrations: {
      eyebrow: 'Integrations',
      title: 'Everything connected. Everything in one place.',
      lead: 'Pipedrive connects with tools your team already uses, helping you create one coherent system without replacing what already works.',
      points: [
        '500+ direct integrations for email, calendars, invoicing, electronic signatures, customer support, LinkedIn, WhatsApp and more.',
        '4,000+ additional connections through Make.com, Zapier and n8n, including ChatGPT, Facebook and Google.',
        'An API for tailored integrations where a standard connection is not enough.',
      ],
      closing: 'Connect Pipedrive to the tools your team already uses.',
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      title: 'What teams ask before getting started.',
      items: [
        { question: 'Does Pipedrive have a mobile app?', answer: 'Pipedrive is available on iOS and Android, so your sales process remains accessible from anywhere. Update opportunities, log calls, review the pipeline or dictate notes after a meeting directly from your phone.' },
        { question: 'How difficult is Pipedrive to set up and how long does it take?', answer: 'Pipedrive is designed to be straightforward to configure and use. Many teams can bring it into their daily work within a week. You can configure it yourself or ask us to handle the initial setup, import existing contacts and data, and train your team in practical day-to-day use.' },
        { question: 'Is our data protected?', answer: 'Pipedrive stores European customer data in certified data centres in Frankfurt and Dublin. Company data is kept in separate databases, communication uses encrypted HTTPS connections and daily backups are stored through Amazon Web Services. Pipedrive holds SOC 2 Type II, SOC 3, ISO/IEC 27001:2013 and ISO/IEC 27701:2019 certifications.' },
        { question: 'What support do we receive after becoming a customer?', answer: 'Pipedrive provides its own 24/7 support team. As your local partner, we are also available to help resolve issues. Additional development or expansion of your Pipedrive setup is available as a separate service.' },
        { question: 'How can Pipedrive help us improve sales?', answer: 'Pipedrive was created by salespeople for salespeople. Visual pipelines, automated reminders and real-time reporting help teams keep opportunities moving, reduce repetitive work and understand which activities deliver results.' },
      ],
    },
    closing: {
      eyebrow: 'Take the next step',
      title: 'Bring clarity and momentum to your sales process.',
      text: 'See how Pipedrive can be tailored to your team, pipeline and goals.',
      demo: 'Book a demo',
      trial: 'Try it free for 30 days',
    },
  },
  sr: {
    title: 'Pipedrive CRM prilagođen vašem poslovanju — ADL Nexus',
    description: 'Prilagođena Pipedrive implementacija, automatizacije, izveštavanje i kontinuirana podrška zvaničnog Pipedrive Premier Partnera u Adria regionu.',
    hero: {
      eyebrow: 'Pipedrive implementacija · Adria region',
      headline: 'Pipedrive CRM prilagođen vašem poslovanju',
      lead: 'Kao zvanični Pipedrive Premier Partner u Adria regionu, pomažemo organizacijama da Pipedrive prilagode svom načinu rada, kroz odgovarajuće podešavanje pipeline-a, automatizacija, izveštavanja i timskih procesa.',
      support: 'Prilagođen načinu na koji zaista prodajete, a ne generičkim softverskim šablonima.',
      demo: 'Zakažite demo',
      trial: 'Isprobajte besplatno 30 dana',
      trialNote: '*Bez kreditne kartice i obaveza',
    },
    pipeline: { title: 'Prodajni pipeline', addDeal: '+ Dodaj priliku', stages: ['Novi lead', 'Kvalifikovan', 'Ponuda', 'Dobijeno'] },
    trust: 'Više od 100.000 kompanija širom sveta koristi Pipedrive.',
    pain: {
      eyebrow: 'Izazov',
      title: 'Gde vaš prodajni proces gubi zamah?',
      items: [
        { title: 'Spor prodajni ciklus?', text: 'Poslali ste ponudu, a potom čekate na odgovor. Potencijalni klijent se više ne javlja, razgovara sa još nekoliko konkurenata, a kada ga ponovo kontaktirate, deluje kao da je već prekasno. Većina prilika se ne izgubi zbog cene, već se ispuste u tišini. Bez jasno definisanog sistema za praćenje narednih koraka, čak i najbolji prodavci mogu da izgube prilike i prihod koji su bili nadohvat ruke.' },
        { title: 'Haotičan prodajni proces?', text: 'Svaki prodavac radi na svoj način. Informacije o prodajnim prilikama ostaju u inbox-u, beleškama i tabelama koje niko ne ažurira dosledno. Kada se timu pridruži novi član, ne postoji jasno definisan proces koji može da preuzme. Kada menadžer traži prognozu prodaje, odgovor je često samo odokativan. Bez zajedničkog sistema nema ni predvidivih prihoda.' },
        { title: 'Nepouzdani izveštaji?', text: 'Shvatite da je kvartal bio loš tek kada se već završio. Nema sistema ranog upozorenja, nema pouzdane prognoze, a razgovori o rezultatima više se zasnivaju na pretpostavkama nego na činjenicama. Bez podataka u realnom vremenu teško je donositi prave odluke i ostvarivati stabilne prodajne rezultate.' },
      ],
      summary: 'Pipedrive pretvara haotičan prodajni proces zasnovan na osećaju u jasan, merljiv i efikasan sistem, bez dodatnog administrativnog opterećenja za vaš tim.',
    },
    audiences: {
      eyebrow: 'Za koga je Pipedrive',
      title: 'Pipedrive se prilagođava vašem načinu prodaje.',
      lead: 'Fleksibilna prodajna platforma za timove sa različitim tržištima, vrstama prodaje i odnosima sa klijentima.',
      cards: [
        'Veleprodaja i distribucija',
        'Proizvodnja',
        'Prodaja mašina i industrijske opreme',
        'Nekretnine i hipotekarno posredovanje',
        'IT usluge i prodaja softvera',
        'Građevinarstvo',
        'Osiguranje',
        'Marketing i digitalne agencije',
        'Privatne klinike i stomatološke ordinacije',
        'Regrutacija i HR konsalting',
        'Poslovni konsalting',
        'HVAC i terenske usluge',
      ],
    },
    why: {
      eyebrow: 'Zašto ADL Nexus',
      title: 'Više od CRM implementacije.',
      lead: 'Pipedrive ne treba samo podesiti. Treba ga prilagoditi načinu na koji vaš tim zaista prodaje.',
      paragraphs: [
        'Tim iza ADL Nexusa donosi iskustvo u prodaji, razvoju poslovanja i upravljanju klijentima na međunarodnim tržištima. Zato CRM ne posmatramo samo kao softver, već kao sistem koji treba da podrži vaš stvarni prodajni proces, od prve prilike do zaključenja posla i daljeg razvoja odnosa sa klijentom.',
        'Pre nego što počnemo sa podešavanjem Pipedrive-a, želimo da razumemo kako vaš tim radi: kako dolaze nove prilike, kako se kvalifikuju, ko ih preuzima, gde proces najčešće zastaje i koje informacije su vam potrebne da biste donosili bolje odluke.',
        'Na osnovu toga prilagođavamo pipeline, automatizacije, aktivnosti i izveštavanje vašem načinu rada, a zatim pomažemo timu da Pipedrive zaista usvoji i efikasno koristi u svakodnevnoj prodaji.',
      ],
      closing: 'Kao zvanični Pipedrive Premier Partner u Adria regionu, ADL Nexus kombinuje poznavanje prodajnih procesa sa implementacijom i kontinuiranom podrškom.',
    },
    outcomes: [
      { title: 'Brži prodajni ciklus', text: 'Svaka prilika ima jasno definisan sledeći korak, aktivnost, rok i odgovornu osobu. Automatski podsetnici i unapred definisane aktivnosti održavaju kontinuitet, tako da prilike brže napreduju i manje njih se ohladi zbog propuštenog javljanja.' },
      { title: 'Organizovan prodajni proces', text: 'Svaka prodajna prilika, faza, odgovorna osoba i vrednost vidljive su na jednom mestu. Emailovi, pozivi, beleške i dokumenti povezani su sa odgovarajućom prilikom ili kontaktom, dok menadžment dobija jasan pregled.' },
      { title: 'AI izveštavanje', text: 'Redovnim korišćenjem Pipedrive-a podaci se pretvaraju u jasne dashboard-e i prognoze. AI asistent prepoznaje prilike kojima treba posvetiti pažnju, rizike i aktivnosti koje mogu imati najveći uticaj na rezultat.' },
    ],
    workflow: {
      eyebrow: 'Kako funkcioniše',
      title: 'Od prvog kontakta do merljivog rasta.',
      items: [
        { title: 'Automatsko prikupljanje leadova', text: 'Svaki potencijalni klijent koji vam se javi preko sajta, emaila, LinkedIn-a ili telefona završava na jednom mestu. Bez kopiranja podataka, izgubljenih kontakata i prilika koje se izgube usput.' },
        { title: 'Praćenje i konverzija', text: 'Svaka prilika prolazi kroz prilagođen pipeline koji prati vaš stvarni prodajni proces. Aktivnosti, rokovi, odgovorne osobe i podsetnici održavaju angažovanje i čine svaki follow-up vidljivim.' },
        { title: 'Izveštavanje i rast', text: 'Dashboard-i u realnom vremenu pokazuju šta funkcioniše i gde prilike zapinju. Prognoze prihoda se ažuriraju, dok AI asistent pokazuje na šta treba da se fokusirate danas.' },
      ],
    },
    features: {
      eyebrow: 'Ključne funkcionalnosti',
      title: 'Pipedrive funkcionalnosti koje unapređuju prodaju.',
      items: [
        { title: 'Pipeline i upravljanje prodajnim procesom', text: 'Na jednom mestu imate uvid u ceo prodajni proces: koje prilike napreduju, gde je došlo do zastoja i čemu je potrebno posvetiti pažnju.' },
        { title: 'Sinhronizacija emaila, kalendara, WhatsApp-a i LinkedIn-a', text: 'Emailovi, sastanci, pozivi i poruke beleže se uz odgovarajuću prodajnu priliku ili kontakt, pa tim manje vremena troši na traženje informacija.' },
        { title: 'Automatizacija i AI asistent za prodaju', text: 'Automatizujte rutinske zadatke, dok AI asistent prepoznaje prilike koje zahtevaju pažnju i predlaže korisne sledeće aktivnosti.' },
        { title: 'Upravljanje zadacima', text: 'Svaka prodajna prilika ima jasno definisan sledeći korak, zadatak, rok i odgovornu osobu.' },
        { title: 'AI izveštavanje', text: 'Podaci se pretvaraju u jasne izveštaje i pregledne dashboard-e koji pružaju realnu sliku prodajnih rezultata.' },
        { title: 'Dokumenti i elektronsko potpisivanje', text: 'Ponude i ugovori mogu se popuniti podacima iz CRM-a i poslati na elektronsko potpisivanje direktno iz Pipedrive-a.' },
        { title: 'Upravljanje projektima', text: 'Nakon prodaje nastavite da pratite realizaciju kroz zadatke, rokove i automatizovane procese u istom sistemu.' },
        { title: 'Prioritizacija leadova', text: 'Pomozite timu da proceni koje prodajne prilike zaslužuju najveću pažnju na osnovu vrednosti, faze i nivoa angažovanja.' },
        { title: 'Email kampanje i automatizovana komunikacija', text: 'Šaljite newslettere i automatizovane email poruke, dok otvaranja, klikovi i odgovori ostaju povezani sa kontaktom.' },
        { title: 'Dopuna podataka', text: 'Na osnovu imena i emaila dopunite javno dostupne podatke o kontaktu i kompaniji i smanjite ručni unos.' },
        { title: 'Istorija komunikacije', text: 'Pozivi, emailovi i sastanci prikazani su hronološki uz svaki kontakt, zajedno sa poslednjim razgovorom i odgovornom osobom.' },
        { title: 'Prodajni inbox', text: 'Email komunikacija, istorija razgovora i naredni koraci povezani su sa odgovarajućim kontaktima i prodajnim prilikama.' },
      ],
    },
    integrations: {
      eyebrow: 'Integracije',
      title: 'Sve povezano. Sve na jednom mestu.',
      lead: 'Pipedrive se lako povezuje sa alatima koje vaš tim već koristi, tako da dobijate jedinstven sistem bez potrebe da menjate ono što već funkcioniše.',
      points: [
        '500+ direktnih integracija sa alatima za email, kalendar, fakturisanje, elektronsko potpisivanje, korisničku podršku, LinkedIn, WhatsApp i stotine drugih.',
        '4.000+ dodatnih povezivanja putem Make.com, Zapier-a i n8n-a, uključujući ChatGPT, Facebook i Google.',
        'Povezivanje putem API-ja za prilagođene integracije kada standardna veza nije dovoljna.',
      ],
      closing: 'Povežite Pipedrive sa alatima koje vaš tim već koristi.',
    },
    faq: {
      eyebrow: 'Često postavljana pitanja',
      title: 'Šta timovi pitaju pre početka.',
      items: [
        { question: 'Da li Pipedrive ima mobilnu aplikaciju?', answer: 'Pipedrive je dostupan na iOS i Android uređajima, tako da svom prodajnom procesu možete pristupiti sa bilo kog mesta. Ažurirajte prodajne prilike, beležite pozive, pratite pipeline ili diktirajte beleške odmah nakon sastanka direktno sa telefona.' },
        { question: 'Koliko je zahtevno podešavanje Pipedrive-a i koliko traje?', answer: 'Pipedrive je osmišljen tako da se lako podešava i koristi. Većina timova može da ga uvede u svakodnevni rad u roku od nedelju dana. Možete ga podesiti sami ili nama prepustiti početno podešavanje, uvoz postojećih kontakata i podataka, kao i praktičnu obuku tima.' },
        { question: 'Da li su naši podaci zaštićeni?', answer: 'Pipedrive podatke evropskih korisnika čuva u sertifikovanim data centrima u Frankfurtu i Dablinu. Podaci svake kompanije čuvaju se u odvojenoj bazi, komunikacija se odvija putem šifrovanih HTTPS veza, a svakodnevne rezervne kopije čuvaju se putem Amazon Web Services-a. Pipedrive poseduje SOC 2 Type II, SOC 3, ISO/IEC 27001:2013 i ISO/IEC 27701:2019 sertifikate.' },
        { question: 'Kakvu podršku dobijamo nakon što postanemo korisnik?', answer: 'Pipedrive ima sopstveni tim za podršku koji je dostupan 24/7. Kao lokalni partner, i mi smo tu da pomognemo u rešavanju problema. Dodatni razvoj ili proširenje načina na koji koristite Pipedrive nudimo kao zasebnu uslugu.' },
        { question: 'Kako Pipedrive može da nam pomogne da unapredimo prodaju?', answer: 'Pipedrive su napravili prodavci za prodavce. Vizuelni pipeline, automatizovani podsetnici i izveštaji u realnom vremenu pomažu timu da prilike napreduju, smanje se ponavljajući zadaci i jasno vidi koje aktivnosti donose rezultate.' },
      ],
    },
    closing: {
      eyebrow: 'Napravite sledeći korak',
      title: 'Unesite jasnoću i zamah u prodajni proces.',
      text: 'Pogledajte kako Pipedrive može da se prilagodi vašem timu, pipeline-u i ciljevima.',
      demo: 'Zakažite demo',
      trial: 'Isprobajte besplatno 30 dana',
    },
  },
  es: {
    title: 'Pipedrive CRM adaptado a tu empresa — ADL Nexus',
    description: 'Implementación personalizada de Pipedrive, automatización, informes y soporte continuo de ADL Nexus.',
    hero: {
      eyebrow: 'Implementación de Pipedrive · Región Adriática',
      headline: 'Pipedrive CRM adaptado a tu empresa',
      lead: 'Ayudamos a las organizaciones a adaptar Pipedrive a su forma de trabajar mediante una configuración adecuada del embudo, automatizaciones, informes y procesos de equipo.',
      support: 'Configurado según tu forma real de vender, no con plantillas genéricas.',
      demo: 'Reservar una demo',
      trial: 'Probar gratis durante 30 días',
      trialNote: '*Sin tarjeta de crédito',
    },
    pipeline: { title: 'Embudo de ventas', addDeal: '+ Añadir trato', stages: ['Nuevo lead', 'Cualificado', 'Propuesta', 'Ganado'] },
    trust: 'Más de 100.000 empresas de todo el mundo confían en Pipedrive.',
    pain: {
      eyebrow: 'El reto',
      title: '¿Dónde pierde impulso tu proceso de ventas?',
      items: [
        { title: '¿Un ciclo de ventas lento?', text: 'Sin próximos pasos claros, los seguimientos llegan tarde y oportunidades valiosas se enfrían antes de avanzar.' },
        { title: '¿Un proceso de ventas caótico?', text: 'La información queda repartida entre correos, notas y hojas de cálculo, mientras cada persona trabaja de una manera distinta.' },
        { title: '¿Informes poco fiables?', text: 'Sin datos en tiempo real ni previsiones consistentes, los problemas se descubren cuando el trimestre ya ha terminado.' },
      ],
      summary: 'Pipedrive convierte un proceso de ventas caótico e intuitivo en un sistema claro, medible y eficiente sin añadir carga administrativa al equipo.',
    },
    audiences: {
      eyebrow: 'Para quién es',
      title: 'Pipedrive se adapta a tu forma de vender.',
      lead: 'Una plataforma flexible para equipos con mercados, operaciones y recorridos de cliente diferentes.',
      cards: ['Mayoristas y distribución', 'Fabricación', 'Maquinaria y equipos industriales', 'Inmobiliarias e intermediación hipotecaria', 'Servicios de TI y venta de software', 'Construcción', 'Seguros', 'Agencias de marketing y digitales', 'Clínicas privadas y odontología', 'Selección y consultoría de RR. HH.', 'Consultoría empresarial', 'HVAC y servicios de campo'],
    },
    why: {
      eyebrow: 'Por qué ADL Nexus',
      title: 'Más que una implementación de CRM.',
      lead: 'Pipedrive debe adaptarse a la forma en que tu equipo vende realmente.',
      paragraphs: [
        'ADL Nexus aporta experiencia en ventas, desarrollo de negocio y gestión de cuentas en mercados internacionales. Por eso entendemos el CRM como un sistema que debe respaldar todo el proceso comercial.',
        'Antes de configurar Pipedrive, analizamos cómo llegan y se cualifican las oportunidades, quién se responsabiliza de ellas, dónde se frena el proceso y qué información necesita el equipo.',
        'A partir de ahí adaptamos el embudo, las automatizaciones, las actividades y los informes, y ayudamos al equipo a incorporar Pipedrive al trabajo diario.',
      ],
      closing: 'ADL Nexus combina conocimiento del proceso comercial con implementación y soporte continuo.',
    },
    outcomes: [
      { title: 'Un ciclo de ventas más rápido', text: 'Cada oportunidad tiene un siguiente paso, una fecha y una persona responsable, con recordatorios que mantienen el impulso.' },
      { title: 'Un proceso de ventas organizado', text: 'Oportunidades, correos, llamadas, notas y documentos permanecen visibles en un único sistema compartido.' },
      { title: 'Informes asistidos por IA', text: 'Los datos de actividad se convierten en paneles y previsiones que señalan riesgos y oportunidades que requieren atención.' },
    ],
    workflow: {
      eyebrow: 'Cómo funciona',
      title: 'Del primer contacto al crecimiento medible.',
      items: [
        { title: 'Captura automática de leads', text: 'Las consultas de la web, el correo, LinkedIn o el teléfono pueden llegar a un único lugar sin copiar datos manualmente.' },
        { title: 'Seguimiento y conversión', text: 'Actividades, responsables, plazos y recordatorios mantienen cada oportunidad activa y cada seguimiento visible.' },
        { title: 'Informes y crecimiento', text: 'Los paneles en tiempo real muestran qué funciona, dónde se frenan los tratos y en qué debe centrarse el equipo.' },
      ],
    },
    features: {
      eyebrow: 'Funciones clave',
      title: 'Funciones de Pipedrive que impulsan las ventas.',
      items: [
        { title: 'Gestión del embudo y del proceso comercial', text: 'Visualiza qué oportunidades avanzan, dónde se ralentizan y qué necesita atención.' },
        { title: 'Sincronización de correo, calendario, WhatsApp y LinkedIn', text: 'Mantén conversaciones y reuniones conectadas con el contacto o trato correcto.' },
        { title: 'Automatización y asistente de ventas con IA', text: 'Automatiza tareas repetitivas y detecta oportunidades que necesitan atención.' },
        { title: 'Gestión de tareas', text: 'Asigna a cada oportunidad un siguiente paso, una fecha y una persona responsable.' },
        { title: 'Informes con IA', text: 'Convierte los datos diarios en informes claros para tomar mejores decisiones.' },
        { title: 'Documentos y firma electrónica', text: 'Genera propuestas y contratos con datos del CRM y envíalos para su firma.' },
        { title: 'Gestión de proyectos', text: 'Continúa el seguimiento de la entrega tras la venta dentro del mismo sistema.' },
        { title: 'Priorización de leads', text: 'Centra al equipo en las oportunidades con mayor valor, avance e interacción.' },
        { title: 'Campañas de correo y comunicación automatizada', text: 'Envía campañas y conserva aperturas, clics y respuestas junto al contacto.' },
        { title: 'Enriquecimiento de datos', text: 'Completa datos públicos de contactos y empresas y reduce la introducción manual.' },
        { title: 'Historial de comunicaciones', text: 'Consulta cronológicamente llamadas, correos y reuniones de cada contacto.' },
        { title: 'Bandeja de entrada de ventas', text: 'Conecta las conversaciones por correo con sus contactos, tratos y próximos pasos.' },
      ],
    },
    integrations: {
      eyebrow: 'Integraciones',
      title: 'Todo conectado. Todo en un solo lugar.',
      lead: 'Pipedrive se conecta con las herramientas que tu equipo ya utiliza.',
      points: ['Más de 500 integraciones directas para correo, calendarios, facturación, firmas, soporte, LinkedIn, WhatsApp y más.', 'Más de 4.000 conexiones adicionales mediante Make.com, Zapier y n8n.', 'Una API para integraciones personalizadas cuando una conexión estándar no es suficiente.'],
      closing: 'Conecta Pipedrive con las herramientas que tu equipo ya utiliza.',
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Lo que preguntan los equipos antes de empezar.',
      items: [
        { question: '¿Pipedrive tiene una aplicación móvil?', answer: 'Pipedrive está disponible para iOS y Android, por lo que puedes actualizar oportunidades, registrar llamadas y consultar el embudo desde cualquier lugar.' },
        { question: '¿Cuánto cuesta configurar Pipedrive y cuánto tiempo requiere?', answer: 'Pipedrive está diseñado para configurarse y utilizarse con facilidad. Muchos equipos pueden incorporarlo al trabajo diario en una semana, con configuración y formación propias o asistidas.' },
        { question: '¿Están protegidos nuestros datos?', answer: 'Pipedrive protege los datos mediante conexiones HTTPS cifradas, copias de seguridad diarias y centros de datos certificados para clientes europeos.' },
        { question: '¿Qué soporte recibimos después de empezar?', answer: 'Pipedrive ofrece soporte propio 24/7. ADL Nexus también puede ayudar localmente y ampliar la configuración como servicio adicional.' },
        { question: '¿Cómo puede Pipedrive ayudarnos a mejorar las ventas?', answer: 'El embudo visual, los recordatorios automatizados y los informes en tiempo real ayudan a mantener las oportunidades en movimiento y a identificar qué actividades producen resultados.' },
      ],
    },
    closing: { eyebrow: 'Da el siguiente paso', title: 'Aporta claridad e impulso a tu proceso de ventas.', text: 'Descubre cómo adaptar Pipedrive a tu equipo, embudo y objetivos.', demo: 'Reservar una demo', trial: 'Probar gratis durante 30 días' },
  },
  de: {
    title: 'Pipedrive CRM, abgestimmt auf Ihr Unternehmen — ADL Nexus',
    description: 'Individuelle Pipedrive-Einführung, Automatisierung, Berichte und laufende Unterstützung durch ADL Nexus.',
    hero: {
      eyebrow: 'Pipedrive-Einführung · Adria-Region',
      headline: 'Pipedrive CRM, abgestimmt auf Ihr Unternehmen',
      lead: 'Wir helfen Unternehmen, Pipedrive durch passende Pipeline-Strukturen, Automatisierungen, Berichte und Teamprozesse an ihre tatsächliche Arbeitsweise anzupassen.',
      support: 'Auf Ihren echten Vertriebsprozess zugeschnitten statt auf allgemeine Softwarevorlagen.',
      demo: 'Demo buchen',
      trial: '30 Tage kostenlos testen',
      trialNote: '*Keine Kreditkarte erforderlich',
    },
    pipeline: { title: 'Vertriebspipeline', addDeal: '+ Deal hinzufügen', stages: ['Neuer Lead', 'Qualifiziert', 'Angebot', 'Gewonnen'] },
    trust: 'Mehr als 100.000 Unternehmen weltweit vertrauen auf Pipedrive.',
    pain: {
      eyebrow: 'Die Herausforderung',
      title: 'Wo verliert Ihr Vertriebsprozess an Tempo?',
      items: [
        { title: 'Ein langsamer Vertriebszyklus?', text: 'Ohne klare nächste Schritte erfolgen Nachfassaktionen zu spät und wertvolle Chancen kühlen ab.' },
        { title: 'Ein chaotischer Vertriebsprozess?', text: 'Informationen verteilen sich auf Postfächer, Notizen und Tabellen, während jedes Teammitglied anders arbeitet.' },
        { title: 'Unzuverlässige Berichte?', text: 'Ohne Echtzeitdaten und belastbare Prognosen werden Probleme oft erst nach Quartalsende sichtbar.' },
      ],
      summary: 'Pipedrive macht aus einem chaotischen, intuitiven Vertriebsprozess ein klares, messbares und effizientes System ohne zusätzliche Verwaltungslast.',
    },
    audiences: {
      eyebrow: 'Für wen es gedacht ist',
      title: 'Pipedrive passt sich Ihrer Vertriebsweise an.',
      lead: 'Eine flexible Vertriebsplattform für unterschiedliche Märkte, Deal-Strukturen und Customer Journeys.',
      cards: ['Großhandel und Distribution', 'Fertigung', 'Maschinen- und Industrieanlagenvertrieb', 'Immobilien und Baufinanzierung', 'IT-Dienstleistungen und Softwarevertrieb', 'Bauwesen', 'Versicherungen', 'Marketing- und Digitalagenturen', 'Privatkliniken und Zahnarztpraxen', 'Recruiting und HR-Beratung', 'Unternehmensberatung', 'HLK- und Außendienstleistungen'],
    },
    why: {
      eyebrow: 'Warum ADL Nexus',
      title: 'Mehr als eine CRM-Einführung.',
      lead: 'Pipedrive sollte an die tatsächliche Vertriebsarbeit Ihres Teams angepasst werden.',
      paragraphs: [
        'ADL Nexus verbindet Erfahrung in Vertrieb, Geschäftsentwicklung und Account Management auf internationalen Märkten. Deshalb verstehen wir CRM als System für den gesamten realen Vertriebsprozess.',
        'Vor der Konfiguration analysieren wir, wie Chancen entstehen und qualifiziert werden, wer Verantwortung übernimmt, wo Prozesse stocken und welche Informationen das Team benötigt.',
        'Darauf basierend passen wir Pipeline, Automatisierungen, Aktivitäten und Berichte an und unterstützen die Einführung im Arbeitsalltag.',
      ],
      closing: 'ADL Nexus verbindet Vertriebsprozess-Know-how mit Implementierung und laufender Unterstützung.',
    },
    outcomes: [
      { title: 'Ein schnellerer Vertriebszyklus', text: 'Jede Chance hat einen nächsten Schritt, einen Termin und eine verantwortliche Person; Erinnerungen halten die Dynamik aufrecht.' },
      { title: 'Ein organisierter Vertriebsprozess', text: 'Chancen, E-Mails, Anrufe, Notizen und Dokumente bleiben in einem gemeinsamen System sichtbar.' },
      { title: 'KI-gestützte Berichte', text: 'Aktivitätsdaten werden zu Dashboards und Prognosen, die Risiken und wichtige Chancen hervorheben.' },
    ],
    workflow: {
      eyebrow: 'So funktioniert es',
      title: 'Vom Erstkontakt zu messbarem Wachstum.',
      items: [
        { title: 'Automatische Lead-Erfassung', text: 'Anfragen aus Website, E-Mail, LinkedIn oder Telefon gelangen ohne wiederholte Dateneingabe an einen Ort.' },
        { title: 'Nachfassen und Konvertieren', text: 'Aktivitäten, Verantwortliche, Fristen und Erinnerungen halten jede Chance und jedes Follow-up sichtbar.' },
        { title: 'Berichte und Wachstum', text: 'Echtzeit-Dashboards zeigen, was funktioniert, wo Deals stocken und worauf sich das Team konzentrieren sollte.' },
      ],
    },
    features: {
      eyebrow: 'Wichtige Funktionen',
      title: 'Pipedrive-Funktionen, die den Vertrieb voranbringen.',
      items: [
        { title: 'Pipeline- und Vertriebsprozess-Management', text: 'Erkennen Sie, welche Chancen vorankommen, wo Dynamik fehlt und was Aufmerksamkeit braucht.' },
        { title: 'Synchronisation von E-Mail, Kalender, WhatsApp und LinkedIn', text: 'Ordnen Sie Gespräche und Termine dem richtigen Kontakt oder Deal zu.' },
        { title: 'Automatisierung und KI-Vertriebsassistent', text: 'Automatisieren Sie Routinearbeit und erkennen Sie Chancen mit Handlungsbedarf.' },
        { title: 'Aufgabenmanagement', text: 'Definieren Sie für jede Chance nächsten Schritt, Termin und Verantwortung.' },
        { title: 'KI-Berichte', text: 'Verwandeln Sie tägliche Daten in klare Berichte für bessere Entscheidungen.' },
        { title: 'Dokumente und elektronische Signaturen', text: 'Erstellen Sie Angebote mit CRM-Daten und senden Sie sie direkt zur Unterschrift.' },
        { title: 'Projektmanagement', text: 'Verfolgen Sie die Umsetzung nach dem Verkauf im selben System weiter.' },
        { title: 'Lead-Priorisierung', text: 'Fokussieren Sie das Team auf Chancen mit Wert, Fortschritt und Engagement.' },
        { title: 'E-Mail-Kampagnen und automatisierte Kommunikation', text: 'Versenden Sie Kampagnen und halten Sie Öffnungen, Klicks und Antworten beim Kontakt.' },
        { title: 'Datenanreicherung', text: 'Ergänzen Sie öffentliche Kontakt- und Unternehmensdaten und reduzieren Sie manuelle Eingaben.' },
        { title: 'Kommunikationsverlauf', text: 'Sehen Sie Anrufe, E-Mails und Termine jedes Kontakts chronologisch.' },
        { title: 'Vertriebs-Posteingang', text: 'Verbinden Sie E-Mail-Verläufe mit Kontakten, Deals und nächsten Schritten.' },
      ],
    },
    integrations: {
      eyebrow: 'Integrationen',
      title: 'Alles verbunden. Alles an einem Ort.',
      lead: 'Pipedrive verbindet sich mit den Werkzeugen, die Ihr Team bereits nutzt.',
      points: ['Mehr als 500 direkte Integrationen für E-Mail, Kalender, Rechnungen, Signaturen, Support, LinkedIn, WhatsApp und mehr.', 'Mehr als 4.000 weitere Verbindungen über Make.com, Zapier und n8n.', 'Eine API für individuelle Integrationen, wenn eine Standardverbindung nicht ausreicht.'],
      closing: 'Verbinden Sie Pipedrive mit den Werkzeugen, die Ihr Team bereits nutzt.',
    },
    faq: {
      eyebrow: 'Häufig gestellte Fragen',
      title: 'Was Teams vor dem Start wissen möchten.',
      items: [
        { question: 'Gibt es eine mobile Pipedrive-App?', answer: 'Pipedrive ist für iOS und Android verfügbar. Chancen, Anrufe und die Pipeline können daher von überall aktualisiert werden.' },
        { question: 'Wie aufwendig ist die Einrichtung und wie lange dauert sie?', answer: 'Pipedrive ist einfach zu konfigurieren. Viele Teams können es innerhalb einer Woche in den Alltag integrieren – selbstständig oder mit Unterstützung bei Einrichtung, Import und Schulung.' },
        { question: 'Sind unsere Daten geschützt?', answer: 'Pipedrive schützt Daten mit verschlüsselten HTTPS-Verbindungen, täglichen Backups und zertifizierten Rechenzentren für europäische Kunden.' },
        { question: 'Welche Unterstützung erhalten wir nach dem Start?', answer: 'Pipedrive bietet eigenen 24/7-Support. ADL Nexus kann zusätzlich lokal unterstützen und die Einrichtung als separate Leistung erweitern.' },
        { question: 'Wie verbessert Pipedrive unseren Vertrieb?', answer: 'Visuelle Pipelines, automatische Erinnerungen und Echtzeitberichte halten Chancen in Bewegung und zeigen, welche Aktivitäten Ergebnisse bringen.' },
      ],
    },
    closing: { eyebrow: 'Der nächste Schritt', title: 'Bringen Sie Klarheit und Dynamik in Ihren Vertrieb.', text: 'Erfahren Sie, wie Pipedrive an Team, Pipeline und Ziele angepasst werden kann.', demo: 'Demo buchen', trial: '30 Tage kostenlos testen' },
  },
  ru: {
    title: 'Pipedrive CRM с учетом особенностей вашего бизнеса — ADL Nexus',
    description: 'Индивидуальная настройка Pipedrive, автоматизация, отчетность и постоянная поддержка от ADL Nexus.',
    hero: {
      eyebrow: 'Внедрение Pipedrive · Адриатический регион',
      headline: 'Pipedrive CRM с учетом особенностей вашего бизнеса',
      lead: 'Мы помогаем компаниям адаптировать Pipedrive к реальной работе с помощью правильной настройки воронки, автоматизации, отчетности и командных процессов.',
      support: 'Система под ваш реальный процесс продаж, а не под универсальный шаблон.',
      demo: 'Записаться на демо',
      trial: 'Попробовать бесплатно 30 дней',
      trialNote: '*Кредитная карта не требуется',
    },
    pipeline: { title: 'Воронка продаж', addDeal: '+ Добавить сделку', stages: ['Новый лид', 'Квалификация', 'Предложение', 'Выиграно'] },
    trust: 'Pipedrive используют более 100 000 компаний по всему миру.',
    pain: {
      eyebrow: 'Задача',
      title: 'Где ваш процесс продаж теряет темп?',
      items: [
        { title: 'Долгий цикл продаж?', text: 'Без четких следующих шагов контакты происходят слишком поздно, и ценные возможности успевают остыть.' },
        { title: 'Хаотичный процесс продаж?', text: 'Информация разбросана по почте, заметкам и таблицам, а каждый сотрудник работает по-своему.' },
        { title: 'Ненадежная отчетность?', text: 'Без данных в реальном времени и точных прогнозов проблемы становятся заметны лишь после окончания квартала.' },
      ],
      summary: 'Pipedrive превращает хаотичный интуитивный процесс продаж в понятную, измеримую и эффективную систему без лишней административной нагрузки.',
    },
    audiences: {
      eyebrow: 'Для кого',
      title: 'Pipedrive адаптируется к вашему способу продаж.',
      lead: 'Гибкая платформа для команд с разными рынками, типами сделок и клиентскими сценариями.',
      cards: ['Оптовая торговля и дистрибуция', 'Производство', 'Продажа оборудования и промышленной техники', 'Недвижимость и ипотечное посредничество', 'ИТ-услуги и продажа ПО', 'Строительство', 'Страхование', 'Маркетинговые и digital-агентства', 'Частные клиники и стоматология', 'Рекрутинг и HR-консалтинг', 'Бизнес-консалтинг', 'Климатическое оборудование и выездные услуги'],
    },
    why: {
      eyebrow: 'Почему ADL Nexus',
      title: 'Больше, чем внедрение CRM.',
      lead: 'Pipedrive должен быть настроен под то, как ваша команда действительно продает.',
      paragraphs: [
        'ADL Nexus объединяет опыт продаж, развития бизнеса и управления клиентами на международных рынках. Поэтому мы рассматриваем CRM как систему поддержки всего реального процесса продаж.',
        'До настройки мы изучаем, откуда приходят и как квалифицируются возможности, кто отвечает за них, где процесс замедляется и какая информация нужна команде.',
        'После этого мы адаптируем воронку, автоматизацию, действия и отчеты, а затем помогаем встроить Pipedrive в ежедневную работу.',
      ],
      closing: 'ADL Nexus сочетает понимание процессов продаж с внедрением и постоянной поддержкой.',
    },
    outcomes: [
      { title: 'Более быстрый цикл продаж', text: 'У каждой возможности есть следующий шаг, срок и ответственный, а напоминания помогают сохранять темп.' },
      { title: 'Организованный процесс продаж', text: 'Сделки, письма, звонки, заметки и документы остаются в одной общей системе.' },
      { title: 'Отчетность с поддержкой ИИ', text: 'Данные о работе превращаются в панели и прогнозы, которые показывают риски и важные возможности.' },
    ],
    workflow: {
      eyebrow: 'Как это работает',
      title: 'От первого контакта к измеримому росту.',
      items: [
        { title: 'Автоматический сбор лидов', text: 'Обращения с сайта, из почты, LinkedIn или по телефону попадают в одно место без ручного копирования.' },
        { title: 'Сопровождение и конверсия', text: 'Действия, ответственные, сроки и напоминания делают каждую возможность и следующий контакт видимыми.' },
        { title: 'Отчетность и рост', text: 'Панели в реальном времени показывают, что работает, где сделки тормозятся и на чем сосредоточиться.' },
      ],
    },
    features: {
      eyebrow: 'Ключевые возможности',
      title: 'Функции Pipedrive, которые двигают продажи вперед.',
      items: [
        { title: 'Управление воронкой и процессом продаж', text: 'Смотрите, какие сделки движутся вперед, где падает темп и что требует внимания.' },
        { title: 'Синхронизация почты, календаря, WhatsApp и LinkedIn', text: 'Связывайте переписку и встречи с нужным контактом или сделкой.' },
        { title: 'Автоматизация и ИИ-ассистент продаж', text: 'Автоматизируйте рутинную работу и выявляйте возможности, требующие внимания.' },
        { title: 'Управление задачами', text: 'Назначайте для каждой возможности следующий шаг, срок и ответственного.' },
        { title: 'ИИ-отчетность', text: 'Превращайте ежедневные данные в понятные отчеты для лучших решений.' },
        { title: 'Документы и электронная подпись', text: 'Создавайте предложения с данными CRM и отправляйте их на подпись.' },
        { title: 'Управление проектами', text: 'Продолжайте контролировать реализацию после продажи в той же системе.' },
        { title: 'Приоритизация лидов', text: 'Сосредоточьте команду на возможностях с лучшим сочетанием ценности и вовлеченности.' },
        { title: 'Email-кампании и автоматические коммуникации', text: 'Отправляйте кампании и сохраняйте открытия, клики и ответы вместе с контактом.' },
        { title: 'Обогащение данных', text: 'Дополняйте открытые данные о контактах и компаниях и сокращайте ручной ввод.' },
        { title: 'История коммуникаций', text: 'Просматривайте звонки, письма и встречи по каждому контакту в хронологическом порядке.' },
        { title: 'Почтовый ящик продаж', text: 'Связывайте email-переписку с контактами, сделками и следующими шагами.' },
      ],
    },
    integrations: {
      eyebrow: 'Интеграции',
      title: 'Все связано. Все в одном месте.',
      lead: 'Pipedrive подключается к инструментам, которыми ваша команда уже пользуется.',
      points: ['Более 500 прямых интеграций для почты, календарей, счетов, подписей, поддержки, LinkedIn, WhatsApp и других сервисов.', 'Более 4 000 дополнительных подключений через Make.com, Zapier и n8n.', 'API для индивидуальных интеграций, когда стандартного подключения недостаточно.'],
      closing: 'Подключите Pipedrive к инструментам, которыми ваша команда уже пользуется.',
    },
    faq: {
      eyebrow: 'Частые вопросы',
      title: 'Что команды спрашивают перед началом работы.',
      items: [
        { question: 'Есть ли у Pipedrive мобильное приложение?', answer: 'Pipedrive доступен на iOS и Android, поэтому сделки, звонки и воронку можно обновлять из любого места.' },
        { question: 'Насколько сложна настройка и сколько она занимает?', answer: 'Pipedrive легко настраивается. Многие команды внедряют его в ежедневную работу за неделю — самостоятельно или с помощью в настройке, импорте и обучении.' },
        { question: 'Защищены ли наши данные?', answer: 'Pipedrive использует зашифрованные HTTPS-соединения, ежедневные резервные копии и сертифицированные дата-центры для европейских клиентов.' },
        { question: 'Какую поддержку мы получим после запуска?', answer: 'Pipedrive предоставляет собственную поддержку 24/7. ADL Nexus также может помочь локально и расширить настройку как отдельную услугу.' },
        { question: 'Как Pipedrive помогает улучшить продажи?', answer: 'Визуальная воронка, автоматические напоминания и отчеты в реальном времени помогают двигать сделки и понимать, какие действия дают результат.' },
      ],
    },
    closing: { eyebrow: 'Следующий шаг', title: 'Добавьте ясность и динамику в процесс продаж.', text: 'Узнайте, как адаптировать Pipedrive к вашей команде, воронке и целям.', demo: 'Записаться на демо', trial: 'Попробовать бесплатно 30 дней' },
  },
};
