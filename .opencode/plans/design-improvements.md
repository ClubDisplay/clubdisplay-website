# ClubDisplay Website - Design Verbeteringen Plan

## 1. Navigation.astro - Mega menu met dropdowns

Vervang het platte menu door een dropdown menu met de structuur:

```
Home | Expertises ▾ | Interactive TV ▾ | Narrowcasting ▾ | Over ons ▾ | Support
```

Elk dropdown item heeft sub-items:
- Expertises: Hospitality Soundbar, Etalageschermen, Digitale menuborden, Wayfinding, Draadloos presenteren, Public Proof Display, Instore Sales Kiosk
- Interactive TV: LG Pro:Centric, Google Chromecast, Hotel IPTV
- Narrowcasting: Narrowcasting Software, Digital Signage Hardware, Interne Communicatie
- Over ons: Over ClubDisplay, Cases, Blog, Contact, Gegevensbescherming
- Support: linkt direct naar /service-support/

CSS: hover op desktop, click/tap op mobiel. Dropdown met schaduw en afgeronde hoeken.

## 2. BaseLayout.astro - Design tokens & CSS

- Kleurenpalet handhaven: primary #1a56db, accent #06b6d4
- Google Fonts Inter toevoegen voor betere typografie
- CSS variabelen uitbreiden
- Consistente heading stijlen
- Focus states voor toegankelijkheid

## 3. index.astro - Homepage

- Hero: gradient (blauw->teal), grote titel, subtitel, 2 CTA's
- Expertises: 6 kaarten in grid met hover effect
- Recente cases: laatste 6 cases uit collectie tonen
- Segmenten grid
- Testimonials: 3 reviews in grid
- Partners: logo grid met partner namen
- CTA: donkerblauwe banner met contactgegevens

## 4. Case detail (project/[...slug].astro)

- Featured image full-width bovenaan
- Breadcrumbs
- Datum + categorie badges
- Content met goede typografie
- Link terug naar cases
- 3 gerelateerde cases onderaan

## 5. Blog detail (nieuws/[...slug].astro)

- Featured image bovenaan
- Breadcrumbs
- Auteur + datum
- Deel knoppen (LinkedIn, Twitter/X, email)

## 6. Overzichtspagina's (cases.astro, nieuws.astro)

- Grid layout met afbeeldingen
- Categorie filters
- Zoekfunctionaliteit
- Hover effects op kaarten
