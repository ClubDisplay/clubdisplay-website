# Website Audit — ClubDisplay

## Samenvatting

De site heeft een bruikbare technische basis: Astro, contentcollecties voor nieuws en cases, veel bestaande projectbeelden, SEO-metadata en redirects. De grootste winst zit niet in een nieuw framework, maar in focus: betere homepage, consequente URL-structuur, minder generieke tekst en meer zichtbaar bewijs uit echte projecten.

## Sterke basis

- Astro-project is overzichtelijk opgezet met losse componenten voor homepage, navigatie, footer, CTA, cases en content.
- Er zijn veel cases en blogposts aanwezig, waardoor bewijs en SEO-inhoud al beschikbaar zijn.
- `SEO-PLAN.md` bevat een goede richting voor toekomstige landingspagina's en redirects.
- Layout bevat al SEO-tags, social metadata en Organization structured data.
- Beeldmateriaal is ruim aanwezig in `public/images/`.

## Belangrijkste aandachtspunten

- De oorspronkelijke homepage voelde generiek: veel brede claims, weinig concrete keuzehulp en te weinig echt projectbeeld boven de vouw.
- Diverse links verwezen naar gewenste SEO-URL's die nog niet als pagina bestaan, zoals `/hospitality-tv/`, `/coffeeshop-signage/` en `/wayfinding-room-signage/`.
- Sommige pagina's overlappen inhoudelijk, vooral rond hospitality TV, IPTV, LG Pro:Centric en hoteloplossingen.
- De navigatie en footer lopen nog niet helemaal gelijk met de gewenste SEO-structuur.
- Er is geen lint-, test- of typecheckscript. Voor Cloudflare wordt `npm run build` daarom de belangrijkste kwaliteitscontrole.
- De visuele stijl is netjes, maar nog vrij standaard SaaS-achtig. Meer eigen projectbeelden, sterkere typografie en betere sectieritmes maken de site geloofwaardiger.

## Eerste uitgevoerde verbeteringen

- Homepage-hero vervangen door een concretere propositie met echte projectbeelden.
- Oplossingskaarten aangescherpt richting concrete toepassingen.
- Interne homepage- en footerlinks gecorrigeerd naar bestaande routes.
- Homepage title opgeschoond zodat `ClubDisplay` niet dubbel in de title verschijnt.

## Aanbevolen volgorde

1. Homepage verder verfijnen en visueel controleren op desktop en mobiel.
2. Dode of toekomstige URL's inventariseren en kiezen: pagina aanmaken of redirecten.
3. Hospitality-, menuborden- en narrowcastingpagina's inhoudelijk herschrijven als belangrijkste commerciële landingspagina's.
4. Cases cureren: niet alleen meest recent tonen, maar de beste en meest herkenbare projecten uitlichten.
5. GitHub-repo klaarmaken, buildproces valideren en Cloudflare Pages koppelen.
