import type { SiteLocale } from './localization';

// Privacy Policy copy. English follows ADL_Nexus_Privacy_Policy_Updated.docx (last updated 21 October 2026);
// Serbian (Latin) and Spanish (Spain) are translations of it and need native-speaker and legal review.
// Plain text only: the page turns privacy@adlnexus.com and https://adlnexus.com into links.

type Block =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'statement'; text: string }
  | { type: 'facts'; rows: [label: string, value: string][] }
  | { type: 'table'; head: [string, string]; rows: [purpose: string, basis: string][] }
  | { type: 'providers'; items: { name: string; text: string[]; link: { label: string; href: string } }[] }
  | { type: 'callout'; title: string; text: string[] }
  | { type: 'rights'; items: string[] };

export type PrivacySection = { id: string; toc: string; title: string; blocks: Block[] };

export type PrivacyPolicyCopy = {
  title: string;
  description: string;
  heading: [first: string, accent: string];
  tocLabel: string;
  sections: PrivacySection[];
};

const p = (text: string): Block => ({ type: 'p', text });
const companyName = 'ADL NEXUS DOO BEOGRAD (SAVSKI VENAC)';
const website = 'https://adlnexus.com';
const privacyEmail = 'privacy@adlnexus.com';
const cloudflarePolicy = 'https://www.cloudflare.com/policies/privacy/';
const googlePolicy = 'https://policies.google.com/privacy';

export const privacyPolicyCopy: Record<SiteLocale, PrivacyPolicyCopy> = {
  en: {
    title: 'Privacy Policy — ADL Nexus',
    description: 'How ADL Nexus collects, uses, stores and protects personal data when you visit our website, contact us or interact with our business.',
    heading: ['Privacy', 'Policy'],
    tocLabel: 'On this page',
    sections: [
      { id: 'introduction', toc: 'Introduction', title: 'Introduction', blocks: [
        p(`${companyName} (“ADL Nexus”, “we”, “us” or “our”) respects your privacy and is committed to protecting your personal data.`),
        p(`This Privacy Policy explains how personal data is collected, used, stored and protected when you visit our website, ${website}, contact us or interact with our business.`),
        p('We process personal data in accordance with the Law on Personal Data Protection of the Republic of Serbia and, where applicable, the European Union General Data Protection Regulation (GDPR).'),
      ] },
      { id: 'who-we-are', toc: 'Who we are', title: 'Who we are', blocks: [
        { type: 'facts', rows: [['Legal name', companyName], ['Registration number', '22339842'], ['Registered office', 'Kneza Miloša 99, Belgrade, Serbia'], ['Website', website], ['Privacy contact', privacyEmail]] },
        p('ADL Nexus acts as the data controller for personal data processed for its own business purposes.'),
      ] },
      { id: 'personal-data', toc: 'Personal data we process', title: 'Personal data we process', blocks: [
        { type: 'h3', text: 'Information you provide' },
        p('When you contact ADL Nexus by email, we may process:'),
        { type: 'list', items: ['Your name and email address.', 'Your company name, job title and professional contact information, where provided.', 'The content of your enquiry or correspondence.', 'Other information you voluntarily share with us.'] },
        p('Our website’s contact functionality prepares an email using your email application. The website does not independently submit or store the contents of the enquiry.'),
        p('If you choose to send the email, your information is processed through our business email services.'),
        { type: 'h3', text: 'Technical website information' },
        p('When you visit our website, our website infrastructure and security providers may process technical information, including:'),
        { type: 'list', items: ['IP addresses.', 'Browser and device information.', 'Dates and times of website requests.', 'Requested pages and technical request information.', 'Security and diagnostic information.'] },
        p('Such processing supports website delivery, security, prevention of malicious activity and reliable operation.'),
      ] },
      { id: 'legal-bases', toc: 'Purposes and legal bases', title: 'Purposes and legal bases for processing', blocks: [
        { type: 'table', head: ['Purpose', 'Legal basis'], rows: [
          ['Responding to general business enquiries', 'Legitimate interests in communicating with people who contact us.'],
          ['Taking steps requested by an individual before entering into a contract', 'Pre-contractual necessity.'],
          ['Managing business relationships and professional correspondence', 'Legitimate interests or contractual necessity, depending on the circumstances.'],
          ['Operating, maintaining and protecting our website', 'Legitimate interests in maintaining a secure and functional website.'],
          ['Complying with applicable legal requirements', 'Legal obligation.'],
          ['Establishing, exercising or defending legal claims', 'Legitimate interests, where applicable.'],
        ] },
        p('Our legitimate interests include responding to enquiries, maintaining professional relationships, protecting our infrastructure and conducting our business responsibly.'),
        p('Where processing requires consent under applicable law, we will obtain it before carrying out that processing.'),
      ] },
      { id: 'service-providers', toc: 'Infrastructure and service providers', title: 'Website infrastructure and service providers', blocks: [
        { type: 'providers', items: [
          { name: 'Cloudflare', text: ['Our website uses Cloudflare for infrastructure, content delivery and security-related services.', 'In providing these services, Cloudflare may process technical information, including IP addresses, request information and security-related data.'], link: { label: 'Cloudflare privacy policy', href: cloudflarePolicy } },
          { name: 'Google Workspace', text: ['We use Google Workspace to manage business email and related communications.', 'When you send an email to ADL Nexus, your message and associated personal information may be processed and stored through Google Workspace.'], link: { label: 'Google privacy policy', href: googlePolicy } },
        ] },
        p('We use service providers in accordance with applicable data protection requirements.'),
      ] },
      { id: 'third-party-links', toc: 'Third-party websites and partner links', title: 'Third-party websites and partner links', blocks: [
        p('Our website contains links to third-party software providers, including Pipedrive.'),
        p('When you click a free trial, subscription or other external offer, you may be redirected to the relevant provider’s website.'),
        p('Certain links contain partner or referral identifiers that enable the provider to attribute referrals to ADL Nexus.'),
        p('The use of a referral identifier does not, by itself, mean that ADL Nexus collects the personal information you subsequently enter on the provider’s website.'),
        p('Third-party providers are responsible for explaining their own independent processing of personal data through their respective privacy policies.'),
        p('We encourage you to review the relevant provider’s privacy policy before submitting information on an external website.'),
        { type: 'callout', title: 'Partner referrals and lead information', text: [
          'When you register for a free trial or purchase a subscription through an ADL Nexus partner link, the relevant software provider may share certain information about your registration or subscription with ADL Nexus.',
          'Depending on the provider’s partner programme, this information may include your name, business contact details, company name, registration status and subscription information.',
          'Where such information is shared with us, we may process it for the purposes of managing partner referrals, maintaining business relationships, responding to enquiries and providing relevant customer support or related services.',
          'Such processing is based on our legitimate interests in managing partner relationships and business operations, where applicable and subject to relevant data protection requirements.',
        ] },
      ] },
      { id: 'cookies', toc: 'Cookies and similar technologies', title: 'Cookies and similar technologies', blocks: [
        p('Our website may use cookies or similar technologies necessary for security, website delivery and essential functionality.'),
        p('Our current Privacy Policy does not identify Google Analytics, Meta Pixel or other advertising tracking technologies as active on the website.'),
        p('If we introduce additional analytics or marketing technologies, we will update our privacy information and implement appropriate consent controls where required by applicable law.'),
        p('For technologies requiring prior consent, we will obtain that consent before activating them.'),
      ] },
      { id: 'sharing', toc: 'Sharing of personal data', title: 'Sharing of personal data', blocks: [
        { type: 'statement', text: 'We do not sell personal data.' },
        p('We may disclose personal data to:'),
        { type: 'list', items: ['Technology providers supporting our website, security and business communications.', 'Professional advisers where reasonably necessary.', 'Competent authorities where disclosure is required by law.', 'Other recipients where disclosure is necessary to establish, exercise or defend legal claims.'] },
        p('We limit disclosures to what is appropriate for the relevant purpose and applicable legal requirements.'),
      ] },
      { id: 'international-transfers', toc: 'International data transfers', title: 'International data transfers', blocks: [
        p('ADL Nexus is established in Serbia and uses international technology providers, including Cloudflare and Google Workspace.'),
        p('As a result, certain personal data may be processed or accessed outside Serbia, including in jurisdictions where these providers or their authorised service providers operate.'),
        p('International transfers are subject to applicable data protection requirements. Where required, transfers must be supported by a legally recognised transfer basis and appropriate safeguards.'),
        p(`You may contact us at ${privacyEmail} to request further information about safeguards relevant to the processing of your personal data.`),
      ] },
      { id: 'retention', toc: 'Data retention', title: 'Data retention', blocks: [
        p('We retain personal data only for as long as necessary for the purposes for which it is processed.'),
        p('Business enquiries and correspondence are retained for as long as reasonably necessary to respond, manage any resulting business relationship and maintain appropriate records.'),
        p('Information may be retained for longer where required by law or where reasonably necessary for the establishment, exercise or defence of legal claims.'),
        p('Technical data processed by our infrastructure providers is subject to the applicable service arrangements and retention practices.'),
        p('When personal data is no longer required, we take appropriate steps to delete it or otherwise handle it in accordance with applicable law.'),
      ] },
      { id: 'your-rights', toc: 'Your data protection rights', title: 'Your data protection rights', blocks: [
        p('Subject to applicable law and relevant conditions, you may have the right to:'),
        { type: 'rights', items: ['Request access to your personal data.', 'Request correction of inaccurate or incomplete data.', 'Request deletion of your personal data.', 'Request restriction of processing.', 'Object to processing based on legitimate interests.', 'Request data portability where applicable.', 'Withdraw consent where processing is based on consent.', 'Lodge a complaint with the competent data protection authority.'] },
        p(`To exercise your rights, contact ${privacyEmail}.`),
        p('We may request information reasonably necessary to verify your identity before responding.'),
        p('We will respond in accordance with applicable legal requirements.'),
        p('You may lodge a complaint with the Commissioner for Information of Public Importance and Personal Data Protection of the Republic of Serbia.'),
        p('Where the GDPR applies, you may also have the right to lodge a complaint with a competent supervisory authority in the European Economic Area.'),
      ] },
      { id: 'security', toc: 'Data security', title: 'Data security', blocks: [
        p('We implement reasonable technical and organisational measures designed to protect personal data against unauthorised access, alteration, disclosure, loss and misuse.'),
        p('These measures are intended to maintain an appropriate level of security having regard to the nature of the processing and associated risks.'),
        p('No internet-based service or electronic communication method can be guaranteed to be completely secure.'),
      ] },
      { id: 'children', toc: 'Children’s privacy', title: 'Children’s privacy', blocks: [
        p('Our website and services are intended for business and professional audiences and are not directed at children.'),
        p('We do not knowingly seek to collect personal data from children through our website.'),
      ] },
      { id: 'changes', toc: 'Changes to this policy', title: 'Changes to this Privacy Policy', blocks: [
        p('We may update this Privacy Policy to reflect changes to our website, business activities, technology providers or applicable legal requirements.'),
        p('Any revised version will be published on this page with an updated date.'),
      ] },
    ],
  },

  sr: {
    title: 'Politika privatnosti — ADL Nexus',
    description: 'Kako ADL Nexus prikuplja, koristi, čuva i štiti podatke o ličnosti kada posetite naš veb-sajt, kontaktirate nas ili poslujete sa nama.',
    heading: ['Politika', 'privatnosti'],
    tocLabel: 'Na ovoj stranici',
    sections: [
      { id: 'introduction', toc: 'Uvod', title: 'Uvod', blocks: [
        p(`${companyName} („ADL Nexus”, „mi”, „nas” ili „naš”) poštuje vašu privatnost i posvećen je zaštiti vaših podataka o ličnosti.`),
        p(`Ova Politika privatnosti objašnjava kako se podaci o ličnosti prikupljaju, koriste, čuvaju i štite kada posetite naš veb-sajt, ${website}, kontaktirate nas ili na drugi način poslujete sa nama.`),
        p('Podatke o ličnosti obrađujemo u skladu sa Zakonom o zaštiti podataka o ličnosti Republike Srbije i, kada je primenljivo, Opštom uredbom Evropske unije o zaštiti podataka (GDPR).'),
      ] },
      { id: 'who-we-are', toc: 'Ko smo mi', title: 'Ko smo mi', blocks: [
        { type: 'facts', rows: [['Poslovno ime', companyName], ['Matični broj', '22339842'], ['Sedište', 'Kneza Miloša 99, Beograd, Srbija'], ['Veb-sajt', website], ['Kontakt za privatnost', privacyEmail]] },
        p('ADL Nexus je rukovalac podacima o ličnosti koji se obrađuju za njegove sopstvene poslovne svrhe.'),
      ] },
      { id: 'personal-data', toc: 'Podaci o ličnosti koje obrađujemo', title: 'Podaci o ličnosti koje obrađujemo', blocks: [
        { type: 'h3', text: 'Podaci koje nam dostavljate' },
        p('Kada kontaktirate ADL Nexus putem e-pošte, možemo obrađivati:'),
        { type: 'list', items: ['Vaše ime i adresu e-pošte.', 'Naziv vaše kompanije, radno mesto i poslovne kontakt podatke, ako ih navedete.', 'Sadržaj vašeg upita ili prepiske.', 'Druge podatke koje nam dobrovoljno dostavite.'] },
        p('Kontakt funkcija na našem veb-sajtu priprema poruku e-pošte u vašoj aplikaciji za e-poštu. Veb-sajt samostalno ne šalje niti čuva sadržaj upita.'),
        p('Ako odlučite da pošaljete poruku, vaši podaci se obrađuju putem naših poslovnih servisa za e-poštu.'),
        { type: 'h3', text: 'Tehnički podaci o korišćenju veb-sajta' },
        p('Kada posetite naš veb-sajt, pružaoci usluga infrastrukture i bezbednosti našeg veb-sajta mogu obrađivati tehničke podatke, uključujući:'),
        { type: 'list', items: ['IP adrese.', 'Podatke o pregledaču i uređaju.', 'Datume i vreme zahteva upućenih veb-sajtu.', 'Tražene stranice i tehničke podatke o zahtevima.', 'Bezbednosne i dijagnostičke podatke.'] },
        p('Takva obrada služi za isporuku veb-sajta, bezbednost, sprečavanje zlonamernih aktivnosti i pouzdan rad.'),
      ] },
      { id: 'legal-bases', toc: 'Svrhe i pravni osnovi', title: 'Svrhe i pravni osnovi obrade', blocks: [
        { type: 'table', head: ['Svrha', 'Pravni osnov'], rows: [
          ['Odgovaranje na opšte poslovne upite', 'Legitimni interes za komunikaciju sa licima koja nas kontaktiraju.'],
          ['Preduzimanje radnji na zahtev lica pre zaključenja ugovora', 'Neophodnost obrade pre zaključenja ugovora.'],
          ['Upravljanje poslovnim odnosima i profesionalnom prepiskom', 'Legitimni interes ili izvršenje ugovora, u zavisnosti od okolnosti.'],
          ['Rad, održavanje i zaštita našeg veb-sajta', 'Legitimni interes za održavanje bezbednog i funkcionalnog veb-sajta.'],
          ['Poštovanje primenljivih zakonskih zahteva', 'Zakonska obaveza.'],
          ['Utvrđivanje, ostvarivanje ili odbrana pravnih zahteva', 'Legitimni interes, kada je primenljivo.'],
        ] },
        p('Naši legitimni interesi obuhvataju odgovaranje na upite, održavanje profesionalnih odnosa, zaštitu naše infrastrukture i odgovorno poslovanje.'),
        p('Kada je za obradu prema primenljivim propisima potreban pristanak, pribavićemo ga pre početka te obrade.'),
      ] },
      { id: 'service-providers', toc: 'Infrastruktura i pružaoci usluga', title: 'Infrastruktura veb-sajta i pružaoci usluga', blocks: [
        { type: 'providers', items: [
          { name: 'Cloudflare', text: ['Naš veb-sajt koristi Cloudflare za infrastrukturu, isporuku sadržaja i usluge povezane sa bezbednošću.', 'U pružanju ovih usluga Cloudflare može obrađivati tehničke podatke, uključujući IP adrese, podatke o zahtevima i podatke povezane sa bezbednošću.'], link: { label: 'Politika privatnosti kompanije Cloudflare', href: cloudflarePolicy } },
          { name: 'Google Workspace', text: ['Google Workspace koristimo za upravljanje poslovnom e-poštom i povezanom komunikacijom.', 'Kada pošaljete poruku e-pošte kompaniji ADL Nexus, vaša poruka i povezani podaci o ličnosti mogu se obrađivati i čuvati putem usluge Google Workspace.'], link: { label: 'Politika privatnosti kompanije Google', href: googlePolicy } },
        ] },
        p('Pružaoce usluga angažujemo u skladu sa primenljivim zahtevima zaštite podataka.'),
      ] },
      { id: 'third-party-links', toc: 'Veb-sajtovi trećih strana i partnerski linkovi', title: 'Veb-sajtovi trećih strana i partnerski linkovi', blocks: [
        p('Naš veb-sajt sadrži linkove ka pružaocima softvera trećih strana, uključujući Pipedrive.'),
        p('Kada kliknete na besplatnu probnu verziju, pretplatu ili drugu spoljnu ponudu, možete biti preusmereni na veb-sajt odgovarajućeg pružaoca.'),
        p('Određeni linkovi sadrže partnerske ili referalne identifikatore koji pružaocu omogućavaju da preporuke pripiše kompaniji ADL Nexus.'),
        p('Korišćenje referalnog identifikatora samo po sebi ne znači da ADL Nexus prikuplja podatke o ličnosti koje naknadno unesete na veb-sajtu pružaoca.'),
        p('Pružaoci trećih strana odgovorni su da u svojim politikama privatnosti objasne sopstvenu, nezavisnu obradu podataka o ličnosti.'),
        p('Preporučujemo da pre unošenja podataka na spoljnom veb-sajtu pročitate politiku privatnosti odgovarajućeg pružaoca.'),
        { type: 'callout', title: 'Partnerske preporuke i podaci o potencijalnim klijentima', text: [
          'Kada se registrujete za besplatnu probnu verziju ili kupite pretplatu putem partnerskog linka kompanije ADL Nexus, odgovarajući pružalac softvera može sa kompanijom ADL Nexus podeliti određene podatke o vašoj registraciji ili pretplati.',
          'U zavisnosti od partnerskog programa pružaoca, ti podaci mogu obuhvatati vaše ime, poslovne kontakt podatke, naziv kompanije, status registracije i podatke o pretplati.',
          'Kada se takvi podaci podele sa nama, možemo ih obrađivati u svrhu upravljanja partnerskim preporukama, održavanja poslovnih odnosa, odgovaranja na upite i pružanja odgovarajuće korisničke podrške ili povezanih usluga.',
          'Takva obrada zasniva se na našem legitimnom interesu za upravljanje partnerskim odnosima i poslovanjem, kada je primenljivo i u skladu sa relevantnim zahtevima zaštite podataka.',
        ] },
      ] },
      { id: 'cookies', toc: 'Kolačići i slične tehnologije', title: 'Kolačići i slične tehnologije', blocks: [
        p('Naš veb-sajt može koristiti kolačiće ili slične tehnologije neophodne za bezbednost, isporuku veb-sajta i osnovnu funkcionalnost.'),
        p('Naša aktuelna Politika privatnosti ne navodi Google Analytics, Meta Pixel ili druge tehnologije za oglašivačko praćenje kao aktivne na veb-sajtu.'),
        p('Ako uvedemo dodatne analitičke ili marketinške tehnologije, ažuriraćemo informacije o privatnosti i primeniti odgovarajuće mehanizme pristanka kada to zahtevaju primenljivi propisi.'),
        p('Za tehnologije koje zahtevaju prethodni pristanak, pribavićemo taj pristanak pre njihovog aktiviranja.'),
      ] },
      { id: 'sharing', toc: 'Deljenje podataka o ličnosti', title: 'Deljenje podataka o ličnosti', blocks: [
        { type: 'statement', text: 'Ne prodajemo podatke o ličnosti.' },
        p('Podatke o ličnosti možemo otkriti:'),
        { type: 'list', items: ['Pružaocima tehnoloških usluga koji podržavaju naš veb-sajt, bezbednost i poslovnu komunikaciju.', 'Profesionalnim savetnicima, kada je to razumno neophodno.', 'Nadležnim organima, kada je otkrivanje propisano zakonom.', 'Drugim primaocima, kada je otkrivanje neophodno radi utvrđivanja, ostvarivanja ili odbrane pravnih zahteva.'] },
        p('Otkrivanje ograničavamo na ono što je primereno relevantnoj svrsi i primenljivim zakonskim zahtevima.'),
      ] },
      { id: 'international-transfers', toc: 'Međunarodni prenos podataka', title: 'Međunarodni prenos podataka', blocks: [
        p('ADL Nexus je osnovan u Srbiji i koristi međunarodne pružaoce tehnoloških usluga, uključujući Cloudflare i Google Workspace.'),
        p('Zbog toga se određeni podaci o ličnosti mogu obrađivati ili im se može pristupati van Srbije, uključujući jurisdikcije u kojima posluju ovi pružaoci ili njihovi ovlašćeni pružaoci usluga.'),
        p('Međunarodni prenos podleže primenljivim zahtevima zaštite podataka. Kada je to potrebno, prenos mora biti zasnovan na zakonski priznatom osnovu za prenos i praćen odgovarajućim merama zaštite.'),
        p(`Možete nas kontaktirati na ${privacyEmail} kako biste zatražili dodatne informacije o merama zaštite koje se odnose na obradu vaših podataka o ličnosti.`),
      ] },
      { id: 'retention', toc: 'Čuvanje podataka', title: 'Čuvanje podataka', blocks: [
        p('Podatke o ličnosti čuvamo samo onoliko dugo koliko je potrebno za svrhe u koje se obrađuju.'),
        p('Poslovni upiti i prepiska čuvaju se onoliko dugo koliko je razumno potrebno da bismo odgovorili, upravljali poslovnim odnosom koji iz njih eventualno proistekne i vodili odgovarajuću evidenciju.'),
        p('Podaci se mogu čuvati i duže kada to zahteva zakon ili kada je to razumno neophodno radi utvrđivanja, ostvarivanja ili odbrane pravnih zahteva.'),
        p('Na tehničke podatke koje obrađuju naši pružaoci infrastrukturnih usluga primenjuju se odgovarajući ugovori o pružanju usluga i njihove prakse čuvanja podataka.'),
        p('Kada podaci o ličnosti više nisu potrebni, preduzimamo odgovarajuće korake da ih obrišemo ili sa njima na drugi način postupimo u skladu sa primenljivim propisima.'),
      ] },
      { id: 'your-rights', toc: 'Vaša prava', title: 'Vaša prava u vezi sa zaštitom podataka', blocks: [
        p('U skladu sa primenljivim propisima i relevantnim uslovima, možete imati pravo da:'),
        { type: 'rights', items: ['Zatražite pristup svojim podacima o ličnosti.', 'Zatražite ispravku netačnih ili nepotpunih podataka.', 'Zatražite brisanje svojih podataka o ličnosti.', 'Zatražite ograničenje obrade.', 'Uložite prigovor na obradu zasnovanu na legitimnom interesu.', 'Zatražite prenosivost podataka, kada je primenljivo.', 'Opozovete pristanak kada se obrada zasniva na pristanku.', 'Podnesete pritužbu nadležnom organu za zaštitu podataka.'] },
        p(`Da biste ostvarili svoja prava, pišite nam na ${privacyEmail}.`),
        p('Pre nego što odgovorimo, možemo zatražiti podatke koji su razumno neophodni za potvrdu vašeg identiteta.'),
        p('Odgovorićemo u skladu sa primenljivim zakonskim zahtevima.'),
        p('Pritužbu možete podneti Povereniku za informacije od javnog značaja i zaštitu podataka o ličnosti Republike Srbije.'),
        p('Kada se primenjuje GDPR, možete imati i pravo da podnesete pritužbu nadležnom nadzornom organu u Evropskom ekonomskom prostoru.'),
      ] },
      { id: 'security', toc: 'Bezbednost podataka', title: 'Bezbednost podataka', blocks: [
        p('Primenjujemo razumne tehničke i organizacione mere osmišljene da zaštite podatke o ličnosti od neovlašćenog pristupa, izmene, otkrivanja, gubitka i zloupotrebe.'),
        p('Cilj ovih mera je održavanje odgovarajućeg nivoa bezbednosti, uzimajući u obzir prirodu obrade i povezane rizike.'),
        p('Nijedna internet usluga ili metod elektronske komunikacije ne može garantovati potpunu bezbednost.'),
      ] },
      { id: 'children', toc: 'Privatnost dece', title: 'Privatnost dece', blocks: [
        p('Naš veb-sajt i usluge namenjeni su poslovnoj i profesionalnoj publici i nisu usmereni na decu.'),
        p('Putem našeg veb-sajta ne prikupljamo svesno podatke o ličnosti dece.'),
      ] },
      { id: 'changes', toc: 'Izmene ove politike', title: 'Izmene ove Politike privatnosti', blocks: [
        p('Ovu Politiku privatnosti možemo ažurirati kako bismo odrazili promene na našem veb-sajtu, u poslovnim aktivnostima, kod pružalaca tehnoloških usluga ili u primenljivim zakonskim zahtevima.'),
        p('Svaka izmenjena verzija biće objavljena na ovoj stranici sa ažuriranim datumom.'),
      ] },
    ],
  },

  es: {
    title: 'Política de privacidad — ADL Nexus',
    description: 'Cómo ADL Nexus recoge, utiliza, conserva y protege los datos personales cuando visita nuestro sitio web, se pone en contacto con nosotros o interactúa con nuestra empresa.',
    heading: ['Política de', 'privacidad'],
    tocLabel: 'En esta página',
    sections: [
      { id: 'introduction', toc: 'Introducción', title: 'Introducción', blocks: [
        p(`${companyName} («ADL Nexus», «nosotros» o «nuestro») respeta su privacidad y se compromete a proteger sus datos personales.`),
        p(`Esta Política de privacidad explica cómo se recogen, utilizan, conservan y protegen los datos personales cuando visita nuestro sitio web, ${website}, se pone en contacto con nosotros o interactúa con nuestra empresa.`),
        p('Tratamos los datos personales de conformidad con la Ley de Protección de Datos Personales de la República de Serbia y, cuando proceda, con el Reglamento General de Protección de Datos de la Unión Europea (RGPD).'),
      ] },
      { id: 'who-we-are', toc: 'Quiénes somos', title: 'Quiénes somos', blocks: [
        { type: 'facts', rows: [['Denominación social', companyName], ['Número de registro', '22339842'], ['Domicilio social', 'Kneza Miloša 99, Belgrado, Serbia'], ['Sitio web', website], ['Contacto de privacidad', privacyEmail]] },
        p('ADL Nexus actúa como responsable del tratamiento de los datos personales que trata para sus propios fines empresariales.'),
      ] },
      { id: 'personal-data', toc: 'Datos personales que tratamos', title: 'Datos personales que tratamos', blocks: [
        { type: 'h3', text: 'Información que usted nos facilita' },
        p('Cuando se pone en contacto con ADL Nexus por correo electrónico, podemos tratar:'),
        { type: 'list', items: ['Su nombre y su dirección de correo electrónico.', 'El nombre de su empresa, su cargo y sus datos de contacto profesionales, si nos los facilita.', 'El contenido de su consulta o correspondencia.', 'Cualquier otra información que comparta voluntariamente con nosotros.'] },
        p('La función de contacto de nuestro sitio web prepara un correo electrónico en su aplicación de correo. El sitio web no envía ni almacena por sí mismo el contenido de la consulta.'),
        p('Si decide enviar el correo electrónico, su información se trata a través de nuestros servicios de correo electrónico corporativo.'),
        { type: 'h3', text: 'Información técnica del sitio web' },
        p('Cuando visita nuestro sitio web, nuestros proveedores de infraestructura y seguridad pueden tratar información técnica, como:'),
        { type: 'list', items: ['Direcciones IP.', 'Información sobre el navegador y el dispositivo.', 'Fecha y hora de las solicitudes al sitio web.', 'Páginas solicitadas e información técnica de las solicitudes.', 'Información de seguridad y diagnóstico.'] },
        p('Este tratamiento permite el funcionamiento del sitio web, su seguridad, la prevención de actividades maliciosas y un servicio fiable.'),
      ] },
      { id: 'legal-bases', toc: 'Finalidades y bases jurídicas', title: 'Finalidades y bases jurídicas del tratamiento', blocks: [
        { type: 'table', head: ['Finalidad', 'Base jurídica'], rows: [
          ['Responder a consultas comerciales generales', 'Interés legítimo en comunicarnos con las personas que se ponen en contacto con nosotros.'],
          ['Aplicar medidas precontractuales a petición del interesado', 'Necesidad para la aplicación de medidas precontractuales.'],
          ['Gestionar relaciones comerciales y correspondencia profesional', 'Interés legítimo o ejecución de un contrato, según las circunstancias.'],
          ['Gestionar, mantener y proteger nuestro sitio web', 'Interés legítimo en mantener un sitio web seguro y funcional.'],
          ['Cumplir los requisitos legales aplicables', 'Obligación legal.'],
          ['Formular, ejercer o defender reclamaciones', 'Interés legítimo, cuando proceda.'],
        ] },
        p('Nuestros intereses legítimos incluyen responder a consultas, mantener relaciones profesionales, proteger nuestra infraestructura y desarrollar nuestra actividad de forma responsable.'),
        p('Cuando la legislación aplicable exija el consentimiento para un tratamiento, lo obtendremos antes de llevarlo a cabo.'),
      ] },
      { id: 'service-providers', toc: 'Infraestructura y proveedores de servicios', title: 'Infraestructura del sitio web y proveedores de servicios', blocks: [
        { type: 'providers', items: [
          { name: 'Cloudflare', text: ['Nuestro sitio web utiliza Cloudflare para servicios de infraestructura, distribución de contenidos y seguridad.', 'Al prestar estos servicios, Cloudflare puede tratar información técnica, como direcciones IP, datos de las solicitudes y datos relacionados con la seguridad.'], link: { label: 'Política de privacidad de Cloudflare', href: cloudflarePolicy } },
          { name: 'Google Workspace', text: ['Utilizamos Google Workspace para gestionar el correo electrónico corporativo y las comunicaciones relacionadas.', 'Cuando envía un correo electrónico a ADL Nexus, su mensaje y los datos personales asociados pueden tratarse y almacenarse a través de Google Workspace.'], link: { label: 'Política de privacidad de Google', href: googlePolicy } },
        ] },
        p('Recurrimos a proveedores de servicios de conformidad con los requisitos de protección de datos aplicables.'),
      ] },
      { id: 'third-party-links', toc: 'Sitios web de terceros y enlaces de socios', title: 'Sitios web de terceros y enlaces de socios', blocks: [
        p('Nuestro sitio web contiene enlaces a proveedores de software de terceros, como Pipedrive.'),
        p('Al hacer clic en una prueba gratuita, una suscripción u otra oferta externa, es posible que se le redirija al sitio web del proveedor correspondiente.'),
        p('Algunos enlaces contienen identificadores de socio o de referido que permiten al proveedor atribuir las recomendaciones a ADL Nexus.'),
        p('El uso de un identificador de referido no implica, por sí solo, que ADL Nexus recoja los datos personales que usted introduzca posteriormente en el sitio web del proveedor.'),
        p('Los proveedores externos son responsables de explicar, en sus respectivas políticas de privacidad, el tratamiento independiente que realizan de los datos personales.'),
        p('Le recomendamos que consulte la política de privacidad del proveedor correspondiente antes de facilitar información en un sitio web externo.'),
        { type: 'callout', title: 'Recomendaciones de socios e información sobre clientes potenciales', text: [
          'Cuando se registra en una prueba gratuita o contrata una suscripción a través de un enlace de socio de ADL Nexus, el proveedor de software correspondiente puede compartir con ADL Nexus determinada información sobre su registro o suscripción.',
          'Según el programa de socios del proveedor, esta información puede incluir su nombre, sus datos de contacto profesionales, el nombre de su empresa, el estado del registro y la información de la suscripción.',
          'Cuando se nos comunique dicha información, podemos tratarla para gestionar las recomendaciones de socios, mantener relaciones comerciales, responder a consultas y prestar la asistencia al cliente correspondiente u otros servicios relacionados.',
          'Este tratamiento se basa en nuestro interés legítimo en gestionar las relaciones con socios y nuestras operaciones comerciales, cuando proceda y con sujeción a los requisitos de protección de datos aplicables.',
        ] },
      ] },
      { id: 'cookies', toc: 'Cookies y tecnologías similares', title: 'Cookies y tecnologías similares', blocks: [
        p('Nuestro sitio web puede utilizar cookies o tecnologías similares necesarias para la seguridad, el funcionamiento del sitio web y sus funciones esenciales.'),
        p('Nuestra Política de privacidad actual no identifica Google Analytics, Meta Pixel ni otras tecnologías de seguimiento publicitario como activas en el sitio web.'),
        p('Si incorporamos tecnologías adicionales de analítica o marketing, actualizaremos nuestra información de privacidad e implantaremos los mecanismos de consentimiento adecuados cuando lo exija la legislación aplicable.'),
        p('En el caso de las tecnologías que requieran consentimiento previo, lo obtendremos antes de activarlas.'),
      ] },
      { id: 'sharing', toc: 'Comunicación de datos personales', title: 'Comunicación de datos personales', blocks: [
        { type: 'statement', text: 'No vendemos datos personales.' },
        p('Podemos comunicar datos personales a:'),
        { type: 'list', items: ['Proveedores tecnológicos que dan soporte a nuestro sitio web, a la seguridad y a las comunicaciones empresariales.', 'Asesores profesionales, cuando sea razonablemente necesario.', 'Autoridades competentes, cuando la ley exija la comunicación.', 'Otros destinatarios, cuando la comunicación sea necesaria para formular, ejercer o defender reclamaciones.'] },
        p('Limitamos las comunicaciones a lo que resulte adecuado para la finalidad correspondiente y los requisitos legales aplicables.'),
      ] },
      { id: 'international-transfers', toc: 'Transferencias internacionales de datos', title: 'Transferencias internacionales de datos', blocks: [
        p('ADL Nexus está establecida en Serbia y utiliza proveedores tecnológicos internacionales, como Cloudflare y Google Workspace.'),
        p('Por ello, determinados datos personales pueden tratarse o consultarse fuera de Serbia, incluso en jurisdicciones en las que operan estos proveedores o sus proveedores de servicios autorizados.'),
        p('Las transferencias internacionales están sujetas a los requisitos de protección de datos aplicables. Cuando sea necesario, deben basarse en un fundamento de transferencia legalmente reconocido y en garantías adecuadas.'),
        p(`Puede escribirnos a ${privacyEmail} para solicitar más información sobre las garantías aplicables al tratamiento de sus datos personales.`),
      ] },
      { id: 'retention', toc: 'Conservación de los datos', title: 'Conservación de los datos', blocks: [
        p('Conservamos los datos personales únicamente durante el tiempo necesario para las finalidades para las que se tratan.'),
        p('Las consultas comerciales y la correspondencia se conservan durante el tiempo razonablemente necesario para responder, gestionar la relación comercial que pueda derivarse de ellas y mantener los registros adecuados.'),
        p('La información puede conservarse durante más tiempo cuando lo exija la ley o cuando sea razonablemente necesario para formular, ejercer o defender reclamaciones.'),
        p('Los datos técnicos tratados por nuestros proveedores de infraestructura están sujetos a los acuerdos de servicio y a las prácticas de conservación aplicables.'),
        p('Cuando los datos personales dejan de ser necesarios, adoptamos las medidas oportunas para suprimirlos o tratarlos de otro modo conforme a la legislación aplicable.'),
      ] },
      { id: 'your-rights', toc: 'Sus derechos', title: 'Sus derechos en materia de protección de datos', blocks: [
        p('Con sujeción a la legislación aplicable y a las condiciones correspondientes, usted puede tener derecho a:'),
        { type: 'rights', items: ['Solicitar el acceso a sus datos personales.', 'Solicitar la rectificación de datos inexactos o incompletos.', 'Solicitar la supresión de sus datos personales.', 'Solicitar la limitación del tratamiento.', 'Oponerse al tratamiento basado en intereses legítimos.', 'Solicitar la portabilidad de los datos, cuando proceda.', 'Retirar su consentimiento cuando el tratamiento se base en él.', 'Presentar una reclamación ante la autoridad de protección de datos competente.'] },
        p(`Para ejercer sus derechos, escríbanos a ${privacyEmail}.`),
        p('Antes de responder, podemos solicitarle la información razonablemente necesaria para verificar su identidad.'),
        p('Responderemos de conformidad con los requisitos legales aplicables.'),
        p('Puede presentar una reclamación ante el Comisionado de Información de Importancia Pública y Protección de Datos Personales de la República de Serbia.'),
        p('Cuando se aplique el RGPD, también puede tener derecho a presentar una reclamación ante una autoridad de control competente del Espacio Económico Europeo.'),
      ] },
      { id: 'security', toc: 'Seguridad de los datos', title: 'Seguridad de los datos', blocks: [
        p('Aplicamos medidas técnicas y organizativas razonables destinadas a proteger los datos personales frente al acceso no autorizado, la alteración, la divulgación, la pérdida y el uso indebido.'),
        p('Estas medidas tienen por objeto mantener un nivel de seguridad adecuado, teniendo en cuenta la naturaleza del tratamiento y los riesgos asociados.'),
        p('Ningún servicio en internet ni método de comunicación electrónica puede garantizar una seguridad absoluta.'),
      ] },
      { id: 'children', toc: 'Privacidad de los menores', title: 'Privacidad de los menores', blocks: [
        p('Nuestro sitio web y nuestros servicios están dirigidos a un público empresarial y profesional, y no a menores.'),
        p('No recogemos de forma consciente datos personales de menores a través de nuestro sitio web.'),
      ] },
      { id: 'changes', toc: 'Cambios en esta política', title: 'Cambios en esta Política de privacidad', blocks: [
        p('Podemos actualizar esta Política de privacidad para reflejar cambios en nuestro sitio web, nuestras actividades empresariales, nuestros proveedores tecnológicos o los requisitos legales aplicables.'),
        p('Cualquier versión revisada se publicará en esta página con la fecha actualizada.'),
      ] },
    ],
  },
};
