# ClubDisplay Website — Astro + Cloudflare Pages

## Commands

| Action | Command |
|--------|---------|
| Dev server | `npm run dev` (http://localhost:4321) |
| Build | `npm run build` (outputs `dist/`) |
| Preview | `npm run preview` |

No test, lint, or typecheck scripts are configured.

## Architecture

- **Framework**: Astro 5.x with TypeScript (strict mode), ESM (`"type": "module"`)
- **Hosting**: Cloudflare Pages (`_redirects` for 301 redirects from old WordPress slugs → `/nieuws/`)
- **Images**: `public/images/blog/` (38 files), `public/images/cases/` (87 files), `public/images/` (project images)
- **No formatter/linter** — `.prettierignore` exists but no prettier config

## Content Collections (`src/content/`)

Both use Markdown with frontmatter and Zod validation:

- **`blog`** (42 posts) — frontmatter: `title`, `description`, `pubDate`, `image?`, `author?`
- **`cases`** (95 cases) — frontmatter: `title`, `description`, `pubDate`, `image?`, `client?`, `category?`

Image paths in frontmatter are absolute (e.g., `/images/cases/foo.jpg`).

## Routing

- Static pages: `src/pages/*.astro` — 32 service/info pages
- Dynamic detail pages:
  - Blog: `src/pages/nieuws/[...slug].astro` — uses `getStaticPaths()` from `blog` collection
  - Cases: `src/pages/project/[...slug].astro` — uses `getStaticPaths()` from `cases` collection

## Navigation

`src/components/Navigation.astro` accepts `currentPath` prop for active state. The `btn-support` CSS class is used to style the "Support" nav item as a blue button.

## Layout

`src/layouts/BaseLayout.astro` provides:
- SEO meta tags, OG/Twitter cards, JSON-LD Organization schema
- Inter font via Google Fonts
- CSS custom properties (`--primary: #1a56db`, etc.)
- Responsive breakpoints at 768px and 900px

## Config

- `astro.config.mjs`: `trailingSlash: "always"`, `build.format: "directory"`, sitemap with weekly changefreq
- `tsconfig.json`: extends `astro/tsconfigs/strict`
