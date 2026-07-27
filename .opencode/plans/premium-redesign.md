# ClubDisplay Premium Redesign Plan

## Inspiratie: firstimpression.com/nl

## 1. Kleurenpalet (ClubDisplay branding, premium stijl)

| Rol | Hex | Gebruik |
|-----|-----|---------|
| Primary | `#1a56db` | Knoppen, accenten, hover states |
| Primary dark | `#0f3b9e` | Button hover, diepe accenten |
| Primary light | `#e8effd` | Subtiele achtergronden, badges |
| Text primary | `#111827` | Hoofdtekst (near-black) |
| Text secondary | `#6b7280` | Body text, paragrafen |
| Text muted | `#9ca3af` | Meta info, dates |
| Background | `#ffffff` | Witte achtergrond |
| Background alt | `#f9fafb` | Section alternates |
| Background dark | `#111827` | Footer |
| Border | `#e5e7eb` | Kaarten, dividers |
| Success/accent | `#059669` | Indicatoren |

## 2. Typografie

- **Headings:** DM Sans (bold/black weights, 700-900)
- **Body:** Inter (regular 400, medium 500)
- **Font sizes:**
  - h1: 3rem (48px) desktop, 2rem (32px) mobiel
  - h2: 2rem (32px) desktop, 1.5rem (24px) mobiel
  - h3: 1.25rem (20px)
  - Body: 1rem (16px)
  - Small: 0.875rem (14px)
  - Meta: 0.813rem (13px)

## 3. Navigatie (vanaf First Impression geïnspireerd)

- Witte achtergrond, dunne bottom border
- Logo links, menu rechts
- Dropdown: witte achtergrond, border-radius 10px, box-shadow, fade+slide animatie
- Hover: primary blue kleur
- Chevron indicator voor dropdowns
- Mobiel: hamburger menu met slide-in overlay

## 4. Homepage layout

### Hero
- Witte/lichte hero (geen gradient, of subtiele gradient)
- Grote h1 met primary blue accent woord
- Korte beschrijving
- 2 CTA knoppen (primary outline, primary filled)
- Grote case/hero afbeelding rechts (of full-width)

### Secties (alternerend wit/grijs)
1. **Expertises** - 3x2 grid met kaarten, iconen
2. **Recente projecten** - 3 kolommen, grote afbeeldingen, hover effects
3. **Segmenten** - 6 items met iconen
4. **Testimonials** - 3 kaarten met quotes
5. **Partners** - Logo grid
6. **CTA** - Donkere banner met contactgegevens

## 5. Componenten

### Kaarten (Cards)
- Border: 1px solid #e5e7eb
- Border-radius: 12px
- Schaduw: subtiel op hover
- Image: 16:9 ratio, object-fit cover
- Padding: 1.5rem
- Hover: translateY(-4px), shadow toename

### Knoppen
- Border-radius: 8px
- Padding: 0.75rem 1.5rem
- Font-weight: 600
- Transition: all 0.2s

### Formulieren
- Input: border 1px, border-radius 8px, padding 0.75rem 1rem
- Focus: primary blue ring

## 6. Bestanden om te wijzigen

| Bestand | Wat verandert |
|---------|---------------|
| `src/layouts/BaseLayout.astro` | Nieuwe design tokens, Google Fonts (DM Sans + Inter), global CSS |
| `src/components/Navigation.astro` | Verfijnd menu: subtieler, betere dropdown, mobiele overlay |
| `src/components/Footer.astro` | Footer redesign met meer kolommen, socials |
| `src/pages/index.astro` | Nieuwe hero layout, strakkere secties |
| `src/pages/project/[...slug].astro` | Verbeterde case detail pagina |
| `src/pages/nieuws/[...slug].astro` | Verbeterde blog detail pagina |
| `src/pages/cases.astro` | Cleaner grid |
| `src/pages/nieuws.astro` | Cleaner grid |

## 7. Uitvoeringsvolgorde

1. BaseLayout.astro (fonts, tokens, global CSS heroverwegen)
2. Navigation.astro (verfijnd naar FI-stijl)
3. Footer.astro (cleaner, socials toevoegen)
4. index.astro (hero + secties)
5. project/[...slug].astro (case detail)
6. nieuws/[...slug].astro (blog detail)
7. cases.astro / nieuws.astro (overzichten)
8. Build + deploy + commit + push
