# Review schema snippet voor ClubDisplay

Plak dit schema pas op de homepage (of een speciale reviews/testimonials pagina) zodra je minimaal 5–10 échte klantreviews hebt verzameld. Vervang de voorbeeldwaarden door de werkelijke scores, aantallen, auteur, datum en publicatiedatum.

## AggregateRating + Review schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ClubDisplay",
  "url": "https://clubdisplay.nl",
  "logo": "https://clubdisplay.nl/images/logo_club_Display.jpg",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "12"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Marc Rijnders"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Delivered a very successful Digital Signage solution at the Hotel Okura Amsterdam. Everybody is very happy with the new system.",
      "publisher": {
        "@type": "Organization",
        "name": "Hotel Okura Amsterdam"
      },
      "datePublished": "2024-03-15"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Donald de Vogel"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Na het eerste telefoongesprek was alles meteen duidelijk en snel geregeld. Het narrowcasting systeem is gemakkelijk in gebruik en als we iets niet begrijpen is de ondersteuning top.",
      "publisher": {
        "@type": "Organization",
        "name": "Karwei Bouwmarkt"
      },
      "datePublished": "2024-05-22"
    }
  ]
}
```

## Product-specifiek Review schema

Wil je reviews per dienst tonen, gebruik dan dit Product/Service-schema op de bijbehorende landingspagina:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hospitality TV & IPTV",
  "provider": {
    "@type": "Organization",
    "name": "ClubDisplay",
    "url": "https://clubdisplay.nl"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "reviewCount": "8"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Denni Wang" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "ClubDisplay heeft voor ons een succesvolle Chromecast oplossing en een digitale informatiekiosk opgeleverd. De support is snel en de communicatie verloopt altijd prima.",
      "publisher": { "@type": "Organization", "name": "171. Urban Design Hotel" },
      "datePublished": "2024-06-10"
    }
  ]
}
```

## Reviews verzamelen: actieplan

1. Maak een Google Bedrijfsprofiel aan voor ClubDisplay (als dat nog niet bestaat) en vraag tevreden klanten daar een review te plaatsen.
2. Stuur na oplevering van een project een korte e-mail met een directe link naar het Google-reviewformulier.
3. Vraag toestemming om 2–3 quotes van de best reviews ook op de website te plaatsen (met naam, functie en bedrijfsnaam).
4. Controleer of reviews echt zijn; nep-reviews zijn tegen de richtlijnen van Google en kunnen leiden tot een penalty.
5. Update daarna het Organization schema in `BaseLayout.astro` of plaats dit snippet als extra `<script type="application/ld+json">` blok op de homepage.
