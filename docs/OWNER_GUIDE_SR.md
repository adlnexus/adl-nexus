# ADL Nexus — održavanje sajta glasom

Jezik: **Srpski** · [English](OWNER_GUIDE_EN.md)

Otvorite ADL Nexus projekat u Codexu i recite šta želite da promenite. Ne morate znati kod, Git komande ili nazive skillova. Uputstva putuju sa projektom; Codex ih nalazi kroz `AGENTS.md`.

## Prvi put

1. Na svom uređaju otvorite Codex i prijavite se svojim nalogom. Ako želite da radite glasom, koristite glasovni razgovor dostupan u svojoj aplikaciji.
2. Otvorite postojeći lokalni folder `adl-nexus`. Ako ga nemate, zatražite pristup privatnom GitHub repozitorijumu `technosapiens/adl-nexus`, pa recite: „Pomozi mi da preuzmem ADL Nexus projekat i otvorim pregled.”
3. Recite: „Proveri da li je projekat spreman za rad i pokaži lokalni sajt.” Codex proverava Node >=22.12.0, zavisnosti, Git stanje i pokreće preview. Lokalna adresa se prikazuje nakon pokretanja; port može biti drugačiji na drugom računaru.
4. Za objavljivanje je potreban vaš GitHub pristup sa pravom pisanja. Za pregled Cloudflare podešavanja i zaštićenih logova potreban je odgovarajući pristup postojećem Cloudflare projektu. Prijavite se kroz predviđeni ekran; ne šaljite lozinke ili tokene u razgovor.
5. Zajedno proverite stvarni javni URL projekta. Automatsko objavljivanje već postoji; nije potrebno praviti novi hosting nalog ili servis.

Ako više vlasnika radi na sajtu, na početku recite: „Proveri da li ima novih izmena drugih vlasnika.” Codex čuva vaš nezavršen rad i usklađuje ga pre objavljivanja; ne prepisuje tuđe izmene.

## Kratke komande

| Recite | Šta se radi |
| --- | --- |
| „Promeni naslov na srpskoj početnoj u … i pokaži mi.” | Lokalna izmena i pregled; bez objavljivanja. |
| „Pokaži mi izmene i kako izgledaju na telefonu.” | Pregled razlika i desktop/mobilnog prikaza. |
| „Sačuvaj izmene.” | Provere i lokalni commit nameravanih izmena. Javni sajt se ne menja; commit još nije kopija na GitHubu. |
| „Objavi sajt.” | Provere svih poslednjih nameravanih izmena, commit ako je potreban, pa običan push. GitHub push automatski pokreće objavljivanje. |
| „Vrati prethodnu verziju.” | Codex identifikuje verziju, pravi novi revert commit i pokazuje lokalni rezultat. Ne briše istoriju i ne objavljuje. |
| „Vrati promenu naslova od danas i objavi.” | Vraća određenu promenu, proverava rezultat i pushuje novu verziju. |
| „Da li je objavljeno?” | Provera GitHub/Cloudflare rezultata i javne stranice, bez novih izmena. |

Posle jasnog „Objavi sajt” nema dodatnog obaveznog pitanja za istu radnju. Codex ipak mora poštovati stvarna ograničenja pristupa i bezbednosna odobrenja aplikacije. Ako „prethodna verzija” može značiti više stvari, pitaće samo koju želite. Možete precizirati „pre poslednje promene naslova” ili navesti oznaku commita.

## Pregled pre objavljivanja

Najjednostavniji redosled je: „Promeni …”, „Pokaži na računaru i telefonu”, pa „Objavi sajt”. Možete reći i sve u jednoj jasnoj naredbi. Codex proverava build i SEO, veze i izmenjeni prikaz, pregleda sadržaj commita i uključuje potrebne slike i dokumentaciju. Tajne, generisani fajlovi i nepovezani rad ostaju izvan objave.

## Kako čitati rezultat

- **„Sačuvano lokalno”**: postoji verzija na vašem računaru; nije objavljeno ovom radnjom.
- **„Push uspešan; objavljivanje još nije potvrđeno”**: GitHub ima verziju, automatski proces još nije proveren/završen.
- **„Cloudflare check uspešan; javna stranica nije potvrđena”**: proces je prijavio uspeh, ali javni URL još nije potvrđen.
- **„Objavljeno i provereno na …”**: potvrđen je i prikaz na navedenoj javnoj adresi.

Potvrđeno je da push objavljuje kroz postojeći Cloudflare Workers projekat `adl-nexus`. U auditu 14. oktobra 2026. domen `adlnexus.com` nije prikazao očekivane Pipedrive rute. Zato još treba evidentirati stvarni javni URL i njegov odnos sa domenom. To ne zahteva novi servis, niti se DNS menja bez posebnog zahteva.

## Ako nešto ne uspe

- **Provera sajta ne prolazi:** Codex popravlja problem pre objave; vaš rad ostaje sačuvan u fajlovima.
- **Push ne prolazi:** lokalni commit ostaje. Codex proverava pristup ili novije izmene drugih vlasnika; ne koristi force push.
- **Cloudflare prijavi grešku:** tražite „Pogledaj grešku objavljivanja i pripremi popravku.” Codex proverava stvarno stanje javnog sajta; ne tvrdi unapred da je prethodna verzija ostala dostupna.
- **Želite povratak:** recite „Vrati poslednju objavljenu promenu i objavi.” Codex prvo utvrđuje tačnu prethodnu verziju i pravi novi commit. Ništa se ne briše iz istorije.

Pravila za Codex: [skill za čuvanje i objavljivanje](../.agents/skills/adl-site-release/SKILL.md). Tehnički target i dokazani status: [release referenca](../.agents/skills/adl-site-maintainer/references/release-and-cloudflare.md).
