# Pipedrive pregled pre objavljivanja

Ažurirano 14. oktobra 2026. Odobreni rad je commitovan i pushovan kao `058c329` 14. oktobra 2026. Cloudflare Workers Builds check je uspešan; stvarni javni URL/domen još treba povezati sa targetom za završnu javnu proveru. Nema ručnog deploymenta, DNS promena, novih servisa, slanja formi ili aktiviranja probnog naloga. Budući workflow je opisan u vlasničkim uputstvima na [srpskom](OWNER_GUIDE_SR.md) i [engleskom](OWNER_GUIDE_EN.md).

## Završeno

EN/SR imaju Pipedrive pregled, cenovnik, pipeline članak i implementaciju. Dvanaest industrijskih vodiča i radionica postoje na engleskom; SR veze jasno nose oznaku EN. Engleske rute ne oglašavaju nepostojeće prevode. ES sada koristi isti kompletan raspored i zajedničke komponente kao EN/SR, sa prirodno prilagođenim španskim tekstom. ES veze ka cenovniku, resursima, implementaciji, radionici i 12 vodiča vode na lokalne EN stranice i označene su kao engleske. Javni kontakt je info@adlnexus.com.

- Radionica je lokalno na `/solutions/pipedrive/workshop/`. Sve javne Hostinger destinacije zamenjene su lokalnim vezama. SEO provera sada odbija svaki preostali template href.
- Preneti su izvorni edukativni sadržaj, četiri teme agende, šest FAQ odgovora i šest ilustracija (pet novih lokalnih datoteka i jedna već postojeća). Video je obična YouTube veza, bez ugrađenog plejera.
- Pisani Word brief o besplatnoj radionici ima prednost nad screenshotom. Nisu preuzeti neodobreni dnevni raspored, obećanje jednog dana/dve poludnevne sesije, cena od 249 EUR, ograničenje dva učesnika ili nepoznata biografija predavača. Vlasnik je potvrdio besplatnu radionicu prema pisanom briefu. Uvod sada opisuje podešavanje korak po korak, funkcionalan pipeline, plan podešavanja i odgovore na pitanja, bez poruke da ponuda čeka potvrdu. CTA vodi na upit, ne na potvrđenu rezervaciju. Cenovna pitanja upućuju na lokalni cenovnik. Newsletter ostaje izostavljen.
- Ispravljeno je 15 copy/paste naslova u osam vodiča prema postojećim pasusima. Tačan spisak pre/posle nalazi se u `pipedrive-playbook-editorial-corrections.json`. Ostalih 564 izvornih tekstualnih blokova, uključujući 134 FAQ odgovora, ostaje očuvano uz te eksplicitne zamene.
- Homepage i Pipedrive dele novi topli header CTA gradijent. Najmanji kontrast belog teksta je 4,81:1 normalno i 6,16:1 na hover/focus. Fokus ostaje vidljiv, 3 px. Ovo važi za header CTA; svetlija dugmad u telu homepage-a nisu deo ovog zahvata.

## Završne provere

Posle potvrđenih odluka ponovljeni su build/SEO, kontrola EN/SR trial konteksta, disclaimer-a i četiri EUR cene, kao i desktop 1440 px / telefon 390 px pregled novog uvoda radionice: bez horizontalnog preliva. Provereno je odsustvo template cene/satnice i poruke da ponuda čeka potvrdu. Novi snimci: `workshop-confirmed-desktop.png` i `workshop-confirmed-mobile.png`.

- `npm run verify`: uspešan statički build 41 stranice (40 sadržajnih + 404), 37 sitemap stavki.
- Audit svih generisanih stranica: 1.310 internih veza i 310 referenci lokalnih slika, bez nepostojećih ruta, sidara ili datoteka; nula javnih Hostinger linkova.
- Automatsko poređenje 564 bloka sa sačuvanim izvorima prolazi uz evidentirane ispravke naslova.
- EN/SR homepage i Pipedrive pregled provereni na 1440, 600 i 390 px: bez horizontalnog preliva, jedan H1. Header CTA se i dalje skriva na 390 px prema postojećem breakpointu.
- Radionica pregledana na desktopu i telefonu; šest nativnih FAQ pitanja radi tastaturom. SR „Radionica EN” otvara ispravnu englesku stranicu. CTA i izvorne slike imaju lokalna/ispravna odredišta.
- Svih 12 vodiča i osam EN/SR Pipedrive ruta već su pregledani na 1440/390 px u prethodnoj fazi. Prethodno su provereni FAQ, kartice, kontakt izbor, carousel pauza/tastatura i reduced-motion ponašanje stvarne skripte.
- `git diff --check` i pregled konačnog diffa prolaze. Snimci, merenja i arhive izvora: `../adl-nexus-files/pipedrive-playbook-qa/`. Lokalni preview: http://127.0.0.1:4330/ .

## Cene, probni period i limiti — provereno 14. oktobra 2026.

[Zvanični cenovnik](https://www.pipedrive.com/en/pricing) u EUR prikazu potvrđuje postojeće cene po korisniku mesečno uz godišnju naplatu, bez PDV-a:

| Paket | EUR/mesečno | Godišnja naplata po korisniku |
| --- | ---: | ---: |
| Lite | 14 | 168 |
| Growth | 39 | 468 |
| Premium | 59 | 708 |
| Ultimate | 79 | 948 |

Browser prikaz i druga varijanta URL-a daju USD; valuta zavisi od prikaza. EUR vrednosti su potvrđene u zvaničnom EUR odgovoru, nisu izvedene konverzijom. Odluka vlasnika: zadržati postojeće EUR iznose i godišnje obračunavanje/PDV napomenu, bez konverzije. Mesečno obračunate EUR tarife nisu proverene niti dodate.

Javni trial traje 14 dana. Otvaranje tačnog odobrenog partnerskog linka iz `src/data/pipedrive.ts` u browseru prikazalo je **30 dana**, bez kreditne kartice. Sačuvan je snimak `partner-trial-confirmation.png`; nijedan podatak nije unet i nalog nije kreiran. Odobreni partnerski CTA od 30 dana i affiliate URL ostaju neizmenjeni. Ova provera uklanja raniju neizvesnost oko 30 dana; javnih 14 dana nije ista ponuda.

[Zvanični limiti](https://support.pipedrive.com/en/article/usage-limits-in-pipedrive), ažurirani 12. oktobra 2026, za nove Lite/Growth/Premium/Ultimate pakete navode:

| Limit | Lite | Growth | Premium | Ultimate |
| --- | ---: | ---: | ---: | ---: |
| Leads + deals po korisničkom mestu | 2.500 | 5.000 | 15.000 | 20.000 |
| Custom fields po kompaniji | 30 | 100 | 300 | 500 |
| Insights izveštaji po korisniku | 15 | 50 | 250 | 500 |
| Automatizacije po kompaniji | — | 50 | 150 | 250 |
| Sekvence po kompaniji | — | 5 | 25 | 50 |
| Lični email nalozi po korisniku | — | 1 | 3 | 5 |
| Shared inbox po kompaniji | — | — | 1 | 5 |

Zbirni leads/deals limit je ograničen na 300.000 po kompaniji. Kontakti su neograničeni, ali drugi resursi nisu. Vlasnik je 14. oktobra izričito potvrdio da **„Unlimited access / Neograničen pristup” ostaje** i označava pun pristup tokom trial perioda, ne neograničene plaćene pakete. Raniji predlog zamene je zatvoren i nije primenjen. Na EN/SR cenovniku kontekst ostaje probni period od 30 dana, trial CTA i postojeća napomena o cenama, limitima i dodatnim naknadama. Nisu dodate nove marketinške tvrdnje.

Ranije provereni izvori za podršku i bezbednost ostaju: [kontakt podrške](https://support.pipedrive.com/en/contact-us), [bezbednost podataka](https://support.pipedrive.com/en/article/how-secure-is-my-data-in-pipedrive), [Trust Center](https://trustcenter.pipedrive.com/). Nema novih tvrdnji o neograničenoj podršci ili apsolutnoj bezbednosti.

## Potvrđene odluke i preostali pregled

- Radionica je besplatna prema pisanom briefu. Cena, trajanje, dnevna satnica, broj sesija i uslovi iz template-a nisu dodati. Nema otvorene odluke o besplatnosti; konkretni termini nisu objavljeni niti izmišljeni.
- Newsletter je odložen: ostaje izostavljen, bez forme ili servisa. Dostavljeni tekst ostaje sačuvan u izvornim podacima za kasniju odluku; ovo nije blokada sadašnje implementacije.
- „Unlimited access / Neograničen pristup” je odobren u trial kontekstu, uz postojeći disclaimer. EUR cene i godišnji obračun ostaju.
- **Preostaje jezički/urednički pregled EN adaptacija i SR prevoda**, uključujući raniju biografsku adaptaciju implementacije. Vlasnik nije potvrdio da je taj pregled završen. Za punu SR radionicu potreban je odobren prevod; do tada SR link ostaje EN.
- Statistike i tvrdnje u izvornim industrijskim člancima nisu sve pojedinačno ponovo istražene. Tekstualne reference „company website / case study” bez izvornog URL-a nisu pretvorene u izmišljene linkove.

## Industrijski vodiči

### Svih 12 lokalnih ruta

- [Wholesale & Distribution Sales CRM](http://127.0.0.1:4330/solutions/pipedrive/knowledge-base/wholesale-and-distribution-sales-crm/)
- [B2B Manufacturing Sales CRM playbook](http://127.0.0.1:4330/solutions/pipedrive/knowledge-base/b2b-manufacturing-sales-crm-playbook/)
- [Machinery & Industrial Equipment Sales CRM Playbook](http://127.0.0.1:4330/solutions/pipedrive/knowledge-base/machinery-and-industrial-equipment-sales-crm-playbook/)
- [Real Estate & Mortgage Broker Sales CRM](http://127.0.0.1:4330/solutions/pipedrive/knowledge-base/real-estate-and-mortgage-broker-sales-crm/)
- [IT Services & Software Sales CRM playbook](http://127.0.0.1:4330/solutions/pipedrive/knowledge-base/it-services-and-software-sales-crm-playbook/)
- [Construction Services Sales CRM playbook](http://127.0.0.1:4330/solutions/pipedrive/knowledge-base/construction-services-sales-crm-playbook/)
- [Insurance Sales CRM](http://127.0.0.1:4330/solutions/pipedrive/knowledge-base/insurance-sales-crm/)
- [Marketing & Digital Agency Sales CRM playbook](http://127.0.0.1:4330/solutions/pipedrive/knowledge-base/marketing-and-digital-agency-sales-crm-playbook/)
- [Private Clinics & Dental Practices CRM](http://127.0.0.1:4330/solutions/pipedrive/knowledge-base/private-clinics-and-dental-practices-crm/)
- [Recruitment & HR Consulting Sales CRM playbook](http://127.0.0.1:4330/solutions/pipedrive/knowledge-base/recruitment-and-hr-consulting-sales-crm-playbook/)
- [Business Consulting Sales CRM playbook](http://127.0.0.1:4330/solutions/pipedrive/knowledge-base/business-consulting-sales-crm-playbook/)
- [HVAC & Field Services CRM](http://127.0.0.1:4330/solutions/pipedrive/knowledge-base/hvac-and-field-services-crm/)

## ES landing — 14. oktobar 2026.

Kompletna adaptacija EN rasporeda: trust, poređenje problema/rešenja, Why ADL, workflow, 12 industrija, integracije, 12 funkcija, tri načina početka, šest iskustava, FAQ i partner footer. Španski tekst i meta podaci su pregledani radi doslednosti; ovo nije potvrda izvornog govornika. Cenovnik, resursi, implementacija, radionica i industrijski vodiči ostaju EN destinacije sa jasnom oznakom jezika.

Provere: `npm run verify` (41 HTML, 37 sitemap ruta); 1.328 lokalnih linkova i 326 referenci slika bez grešaka; EN/SR landing tekst, linkovi, slike i kontrole identični sačuvanom početnom buildu. ES pregled na 1440 × 900 i 390 × 844 bez horizontalnog preliva; tastatura menja comparison, industry, feature i stories karusele, ručna stories navigacija pauzira autoplay, FAQ se otvara tasterom Enter. Reduced-motion grane postojećih zajedničkih skripti ostale su neizmenjene i pregledane; OS emulacija reduced-motion nije ponovljena. Snimci `es-desktop.png` i `es-mobile.png` su u sibling QA direktorijumu.

## Nova hero/nav referenca — 14. oktobar 2026.

Implementirana u glavnom checkout-u; vlasnik je naknadno izričito odobrio čuvanje i objavljivanje ovog kruga. Originalni laptop/telefon i Premier Partner PNG, krem hero, tačni EN CTA tekstovi, lokalizacije SR/ES, namenski gornji meni na svih 22 Pipedrive ruta i trust traka. Preview: `http://127.0.0.1:4331/solutions/pipedrive/` (nova dev instanca zbog stale CSS-a prethodne instance).

Verifikovano: desktop 1600/1440 i telefon 390; EN/SR/ES bez horizontalnog preliva; mobilni meni Enter/Escape i vidljiv focus; ES Knowledge base veza otvara postojeću EN stranicu; navigacioni redosled i odsustvo duplog/globalnog headera provereni na svih 22 ruta. Build/SEO prolaze; 1.223 lokalna linka i 266 image referenci bez greške; sadržaj 12 vodiča i homepage očuvani. Brojač vizuelno radi na desktopu; source-script test proverava EN/SR/ES, punu vidljivost, disconnect, 2s easing i reduced-motion/static fallback. CTA kontrast: desktop oker/bela ≥3,72:1 uz najmanje 19,2px bold (large text), telefon 5,19:1, zeleni header 7,92:1. Nije menjano podešavanje reduced-motion operativnog sistema.

Razlika prema screenshotu: odobreni ADL logo zamenjuje template placeholder, originalni laptop PNG ima drugačije demo podatke i proporcije od mockupa na slici, trust talasi su statičan CSS približan prikaz jer original tog backgrounda nije nađen. Snimci su u sibling `pipedrive-playbook-qa` direktorijumu (`pipedrive-reference-desktop.png`, `pipedrive-reference-es-mobile.png`).
