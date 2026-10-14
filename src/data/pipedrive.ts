import spanishPipedrive from './pipedrive-es.json';

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

export const pipedriveDetailedCopy: Record<'en' | 'sr' | 'es', PipedriveDetailedCopy> = {
  en: {
    title: 'Pipedrive CRM tailored to your business — ADL Nexus',
    description: 'Tailored Pipedrive implementation, automation, reporting and ongoing support from an official Pipedrive Premier Partner in the Adria region.',
    hero: {
      eyebrow: 'Pipedrive implementation · Adria region',
      headline: 'Pipedrive CRM tailored to your business.',
      lead: 'ADL Nexus, an official Pipedrive Partner, helps organisations get more from Pipedrive, with pipelines, automation, reporting and workflows built around the way their teams actually work.',
      support: 'Because your CRM should be built around your sales process, not the other way around.',
      demo: 'Book a free demo',
      trial: 'Start your free 30-day trial',
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
      support: 'Zato što CRM treba da prati vaš prodajni proces, a ne obrnuto.',
      demo: 'Zakažite besplatan demo',
      trial: 'Započnite besplatnu probu od 30 dana',
      trialNote: '*Bez kreditne kartice i obaveza',
    },
    pipeline: { title: 'Prodajni pipeline', addDeal: '+ Dodaj priliku', stages: ['Novi lead', 'Kvalifikovan', 'Ponuda', 'Dobijeno'] },
    trust: 'Više od 100.000 kompanija širom sveta koristi Pipedrive.',
    pain: {
      eyebrow: 'Izazov',
      title: 'Gde vaš prodajni proces gubi zamah?',
      items: [
        { title: 'Spor prodajni ciklus?', text: 'Poslali ste ponudu, a potom čekate na odgovor. Potencijalni klijent se više ne javlja, razgovara sa još nekoliko konkurenata, a kada ga ponovo kontaktirate, deluje kao da je već prekasno. Većina prilika se ne izgubi zbog cene, već se ispuste u tišini. Bez jasno definisanog sistema za praćenje narednih koraka, čak i najbolji prodavci mogu da izgube prilike i prihod koji su bili nadohvat ruke.' },
        { title: 'Haotičan prodajni proces?', text: 'Svaki prodavac radi na svoj način. Informacije o prodajnim prilikama ostaju u inbox-u, beleškama i tabelama koje niko ne ažurira dosledno. Kada se timu pridruži novi član, ne postoji jasno definisan proces koji može da preuzme. Kada menadžer traži prognozu prodaje, odgovor je često samo odokativan. Bez zajedničkog sistema nema ni predvidivih prihoda, već samo prijatnih i neprijatnih iznenađenja.' },
        { title: 'Nepouzdani izveštaji?', text: 'Shvatite da je kvartal bio loš tek kada se već završio. Nema sistema ranog upozorenja, nema pouzdane prognoze, a razgovori o rezultatima više se zasnivaju na pretpostavkama nego na činjenicama. Bez podataka u realnom vremenu teško je donositi prave odluke i ostvarivati stabilne prodajne rezultate.' },
      ],
      summary: 'Pipedrive pretvara haotičan prodajni proces zasnovan na osećaju u jasan, merljiv i efikasan sistem, bez dodatnog administrativnog opterećenja za vaš tim.',
    },
    audiences: {
      eyebrow: 'Za koga je Pipedrive?',
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
        "Iza ADL Nexusa stoji iskustvo u prodaji, razvoju partnerstava i radu sa klijentima na različitim međunarodnim tržištima. Zato CRM ne posmatramo samo kao softver, već kao sistem koji treba da podrži vaš stvarni prodajni proces, od prve prilike do zaključenja posla i daljeg razvoja klijenta.",
        "Pre nego što počnemo sa podešavanjem Pipedrive-a, želimo da razumemo kako vaš tim radi: kako dolaze nove prilike, kako se kvalifikuju, ko ih preuzima, gde proces najčešće zastaje i koje informacije su vam potrebne da biste donosili bolje odluke.",
        "Na osnovu toga prilagođavamo pipeline, automatizacije, aktivnosti i izveštavanje vašem načinu rada, a zatim pomažemo timu da Pipedrive zaista usvoji i koristi u svakodnevnoj prodaji.",
      ],
      closing: 'Kao zvanični Pipedrive Premier Partner u Adria regionu, ADL Nexus kombinuje poznavanje prodajnih procesa sa implementacijom i kontinuiranom podrškom.',
    },
    outcomes: [
      { title: 'Brži prodajni ciklus', text: "U Pipedrive-u svaka prilika ima jasno definisan sledeći korak: aktivnost, rok i odgovornu osobu. Kada prodavac završi poziv ili pošalje ponudu, sistem odmah postavlja pitanje:\n\nKoji je sledeći korak?\n\nAutomatski podsetnici pomažu da nijedna prilika ne bude zaboravljena, dok unapred definisane aktivnosti (tzv. sekvence) održavaju kontinuitet kontakta sa potencijalnim klijentom između razgovora.\n\nKrajnji rezultat koji se postiže je da prodajne prilike brže napreduju, a manje njih se „ohladi“ samo zato što je neko zaboravio da se ponovo javi." },
      { title: 'Organizovan prodajni proces', text: "Pipedrive pregledno prikazuje svaku prodajnu priliku u pipeline-u, fazu u kojoj se nalazi, odgovornu osobu i njenu vrednost, sve na jednom mestu. Faze prodajnog procesa možete postaviti prema načinu na koji vaš tim radi. Umesto da se vaš tim uklapa u generički šablon, Pipedrive prilagođavamo načinu na koji zaista prodajete.\n\nSve relevantne informacije, emailovi, pozivi, beleške i dokumenti, povezane su sa odgovarajućom prodajnom prilikom ili kontaktom, tako da vam je kompletan kontekst uvek lako dostupan.\n\nCeo tim koristi isti sistem, dok menadžment dobija jasan pregled prodajnog procesa." },
      { title: 'AI izveštavanje', text: 'Redovnim korišćenjem Pipedrive-a podaci se pretvaraju u jasne dashboard-e i prognoze. AI asistent prepoznaje prilike kojima treba posvetiti pažnju, rizike i aktivnosti koje mogu imati najveći uticaj na rezultat.' },
    ],
    workflow: {
      eyebrow: 'Kako funkcioniše',
      title: 'Od prvog kontakta do merljivog rasta.',
      items: [
        { title: 'Automatsko prikupljanje leadova', text: "Svaki potencijalni klijent koji vam se javi, bilo preko sajta, e-maila, LinkedIn-a ili telefona, automatski završava na jednom mestu. Bez kopiranja podataka, bez izgubljenih kontakata i bez prilika koje se izgube usput. Vaš pipeline se automatski popunjava, a vi u svakom trenutku tačno znate sa koliko prilika trenutno radite." },
        { title: 'Praćenje i konverzija', text: "Svaka prilika prolazi kroz prilagođen pipeline koji prati vaš stvarni prodajni proces. Svaka faza ima definisanu aktivnost, rok i odgovornu osobu. Automatski podsetnici i unapred definisani koraci za praćenje pomažu da potencijalni klijenti ostanu angažovani i da se svaki follow-up obavi na vreme, bez obzira na to da li ga se prodavac setio ili ne." },
        { title: 'Izveštavanje i rast', text: "Kako se prilike zaključuju i podaci prikupljaju, Pipedrive stvara sve jasniju sliku vašeg prodajnog procesa. Dashboard-i u realnom vremenu pokazuju šta funkcioniše i gde prilike zapinju. Prognoze prihoda se automatski ažuriraju. AI asistent vam pokazuje na šta treba da se fokusirate danas kako biste ostvarili cilj za tekući mesec." },
      ],
    },
    features: {
      eyebrow: 'Ključne funkcionalnosti',
      title: 'Omiljene funkcionalnosti koje unapređuju prodaju.',
      items: [
        { title: "Pipeline i upravljanje prodajnim procesom", text: "Pipeline je pregledno prikazan tako da na jednom mestu imate uvid u ceo prodajni proces: koje prilike napreduju, gde je došlo do zastoja i čemu je potrebno posvetiti pažnju." },
        { title: "Sinhronizacija emaila, kalendara, WhatsApp-a i LinkedIn-a", text: "Emailovi, sastanci, pozivi i poruke automatski se beleže uz odgovarajuću prodajnu priliku ili kontakt. Vaš tim manje vremena troši na traženje informacija, a više na prodaju." },
        { title: "Automatizacija i AI asistent za prodaju", text: "Pipedrive automatizuje rutinske zadatke koji nepotrebno oduzimaju vreme, dok AI asistent prepoznaje prodajne prilike koje zahtevaju pažnju i predlaže sledeće aktivnosti sa najvećim potencijalom." },
        { title: "Upravljanje zadacima", text: "Svaka prodajna prilika ima jasno definisan sledeći korak, zadatak, rok i odgovornu osobu. Kada završite poziv, sastanak ili pošaljete ponudu, Pipedrive od vas traži da definišete šta sledi." },
        { title: "AI izveštavanje", text: "Kada se redovno koristi, Pipedrive podatke automatski pretvara u jasne izveštaje i pregledne dashboard-e, pružajući vam realnu sliku prodajnih rezultata i bolju osnovu za donošenje odluka." },
        { title: "Dokumenti i elektronsko potpisivanje", text: "Ponude i ugovori automatski se popunjavaju podacima iz CRM-a i mogu se poslati na elektronsko potpisivanje direktno iz Pipedrive-a. Manje administracije, manje ručnog unosa i brže zaključivanje poslova." },
        { title: "Upravljanje projektima", text: "Nakon prodaje, nastavite da pratite realizaciju kroz Pipedrive. Zadaci, rokovi i automatizovani procesi ostaju na jednom mestu, tako da nema haotične primopredaje niti nepotrebnog prebacivanja između različitih alata." },
        { title: "Prioritizacija lead-ova", text: "Pipedrive pomaže vašem timu da proceni koje prodajne prilike zaslužuju najveću pažnju na osnovu vrednosti, faze prodaje i nivoa angažovanja. Tako prodavci znaju gde prvo da usmere svoje vreme i energiju." },
        { title: "Email kampanje i automatizovana komunikacija", text: "Šaljite newslettere i automatizovane email poruke direktno iz Pipedrive-a. Otvaranja mejlova, klikovi i odgovori automatski se beleže uz odgovarajući kontakt, tako da kompletna komunikacija ostaje u vašem CRM-u." },
        { title: "Dopuna podataka", text: "Unesite ime i email, a Pipedrive može automatski da dopuni javno dostupne podatke o kontaktu i kompaniji. Tako štedite vreme i izbegavate nepotreban ručni unos podataka." },
        { title: "Istorija komunikacije", text: "Pozivi, emailovi i sastanci prikazani su hronološki uz svaki kontakt. Uvek možete da vidite kada je poslednji kontakt ostvaren, o čemu se razgovaralo i ko je iz vašeg tima vodio komunikaciju." },
        { title: "Prodajni inbox", text: "Email komunikacija povezana je sa odgovarajućim kontaktima i prodajnim prilikama. Istorija razgovora i naredni koraci prikazani su na jednom mestu, tako da vaš tim uvek zna gde je komunikacija stala." },
      ],
    },
    integrations: {
      eyebrow: 'Integracije',
      title: 'Sve povezano. Sve na jednom mestu.',
      lead: 'Pipedrive se povezuje sa alatima koje vaš tim već koristi, tako da dobijate jedinstven sistem bez potrebe da menjate ono što već funkcioniše.',
      points: [
        '500+ direktnih integracija sa alatima za email, kalendar, fakturisanje, elektronsko potpisivanje, korisničku podršku, LinkedIn, WhatsApp i stotine drugih.',
        '4.000+ dodatnih povezivanja putem Make.com, Zapier-a i n8n-a, uključujući ChatGPT, Facebook i Google.',
        'Dostupno je i povezivanje putem API-ja za prilagođene integracije.',
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
  es: spanishPipedrive as PipedriveDetailedCopy,
};
