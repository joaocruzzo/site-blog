# Site Blog - Site.Set

Create your affiliate store in minutes.

Site.Blog is a landing page and blog for the Site.Set platform, enabling entrepreneurs to create their affiliate online stores quickly and easily.

## Features

- **Landing page** — institutional page with hero, features, support and testimonials sections
- **Blog with search** — post listing with real-time search
- **Markdown posts** — rich content with Markdown and GFM rendering
- **Responsive design** — dark theme interface optimized for all devices
- **Sharing** — social media sharing buttons on posts
- **SEO optimized** — meta tags and structure for search engines

## Tech Stack

- **Framework**: Next.js 13 with TypeScript
- **CSS**: Tailwind CSS with custom design system
- **Content**: Contentlayer2 for Markdown post management
- **UI Components**: Radix UI + Class Variance Authority
- **Icons**: Lucide React
- **Fonts**: Inter + PT Sans Caption (Google Fonts)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page (home)
│   └── blog/              # Blog pages
├── components/
│   ├── ui/                # shadcn/ui components (Button, Breadcrumb)
│   ├── layout/            # Layout, Header, Footer
│   └── blog/              # Blog-specific components
├── templates/
│   ├── landing-page/      # Landing page sections
│   └── blog/              # Blog templates (list, post page)
├── pages/                 # Pages Router (blog pages with SSG)
├── lib/                   # Utilities (cn, helpers)
└── styles/                # Global styles

posts/                     # Markdown content files
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## License

MIT
