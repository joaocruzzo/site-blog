# Site.Blog (Site.Set)

Site.Blog is a lightweight Next.js 13 + TypeScript landing page and blog template built for Site.Set — a small platform for creating affiliate storefront landing pages with blog support. It provides a responsive landing page, SEO-friendly metadata, and a Markdown-first blog (Contentlayer2) with client-side search and a simple design system using Tailwind CSS.

Key use cases:
- Launch an affiliate storefront landing page quickly.
- Publish marketing / blog posts in Markdown and render them with GFM support.
- Ship a responsive, SEO-friendly site with shareable post pages.

---

## Features
- Landing page template with hero, features, testimonials and footer.
- Blog powered by Markdown posts (posts/ directory) and Contentlayer2.
- Search UI for posts (real-time/instant search UI included).
- SEO-friendly metadata and Open Graph configuration.
- Tailwind CSS-based design system and reusable UI primitives (Radix + C.V.A).
- Simple build & deployment flow (works well on Vercel).

---

## Tech stack
- Framework: Next.js 13 (App Router)
- Language: TypeScript
- Content: Contentlayer2 (next-contentlayer2) for Markdown -> document nodes
- Styling: Tailwind CSS (+ tailwind-merge, tailwindcss-animate)
- UI primitives: Radix UI, Class Variance Authority, Lucide React icons
- Markdown rendering: react-markdown + remark-gfm

---

## Repository structure (top-level)
```
posts/                     # Markdown posts (contentlayer source)
src/
├── app/                   # Next.js App Router pages and route files (landing + blog)
│   ├── blog/              #  blog routes (listing / post pages)
|   ├── page.tsx           # landing page entry (renders LandingPage template)
│   └── layout.tsx         # root layout and metadata
|
├── components/            # UI components and small reusable bits
│   └── ui/                # shadcn/ui primitives components (Button, Breadcrumb...)
|
├── hooks/                 # custom React hooks (use clipboard, use share)
|
├── lib/                   # helper utilities (cn, helpers)
|
├── pages/                 # Pages Router (blog pages with SSG)
|
├── styles/                # Global styles
|
└── templates/             # composed templates (landing page, blog templates)
    ├── landing-page/      # Landing page sections
    └── blog/              # Blog templates (list, post page)
```

How it fits together:
- Markdown files in posts/ are read by Contentlayer2 (configured in contentlayer.config.ts) and exposed to Next.js pages.
- The App Router (src/app) renders the landing page and blog routes using templates in src/templates and components in src/components.
- Styling is done with Tailwind CSS; components use CVA for variant management.

---

## Content model (Contentlayer)
Contentlayer is configured in contentlayer.config.ts. Each Markdown file under posts/ should include the following frontmatter fields:

- title: string (required)
- date: date (required) — use YYYY-MM-DD format
- description: string (required)
- image: string (required) — path or full URL to featured image
- author: object with:
  - name: string (required)
  - avatar: string (required) — path or URL to author avatar

A slug is computed automatically from the filename (filename without `.md`).

Example post frontmatter:
```md
---
title: "My Post Title"
date: "2024-07-01"
description: "Short summary shown in listings."
image: "/images/featured.jpg"
author:
  name: "Author Name"
  avatar: "/images/authors/author.jpg"
---
```

Put the file at posts/my-post.md → slug becomes `my-post`.

---

## Development (local)
Prerequisites:
- Node.js 18+
- npm (or yarn)

Install and run:
```bash
# install dependencies
npm install

# run dev server
npm run dev

# build for production
npm run build

# run built app locally
npm run start

# lint
npm run lint
```

Open http://localhost:3000 to view the site in development.

Notes:
- Contentlayer runs at build/dev time to generate typed document nodes from Markdown. When adding posts, the dev server will pick up changes automatically.
- No repository-level env vars are required for the base site. If you add analytics, image-hosting, or CMS, add those values to .env.local and update next.config or the related code.

---

## How to add content
1. Create a new Markdown file in posts/ with the required frontmatter shown above.
2. Use standard Markdown and GFM (tables, task lists) — react-markdown + remark-gfm render these features.
3. Images referenced with relative paths should be placed under public/ and referenced from frontmatter or Markdown.
4. Build or restart dev server — Contentlayer will expose the new post to the blog routes.

---

## License
MIT

---
