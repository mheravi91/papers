# Mohammad Heravi — Research Website

Astro-based personal research hub deployed on GitHub Pages. The homepage at [papers.mheravi.ir](https://papers.mheravi.ir) presents a curated list of publications, highlights, and metadata-rich landing pages for each paper.

## Stack & features
- [Astro](https://astro.build) with content collections for paper entries and semantic SEO defaults.
- Responsive, typography-driven layout with polished hero, stats, and publication grid.
- Dedicated detail pages for every paper, complete with Schema.org `ScholarlyArticle` markup.
- Automatic sitemap and robots.txt for search engines, HTTPS-friendly custom domain via `public/CNAME`.

## Repository structure
```
├── astro.config.mjs          # Astro configuration (site URL, sitemap integration)
├── src/
│   ├── components/           # Header, footer, reusable card components
│   ├── content/
│   │   └── papers/           # Markdown sources for each publication
│   ├── layouts/              # Base layout + paper layout with SEO helpers
│   ├── pages/                # Homepage, paper routes, 404 page
│   └── styles/               # Global design tokens and CSS
├── public/                   # Static assets copied verbatim (CNAME, favicon, robots.txt)
└── package.json              # Astro scripts and dependencies
```

## Local development
1. Install dependencies (requires Node 18.17+):
   ```bash
   npm install
   ```
2. Launch the dev server with hot reload:
   ```bash
   npm run dev
   ```
3. Build the production bundle for GitHub Pages:
   ```bash
   npm run build
   ```
4. Preview the built site locally (optional):
   ```bash
   npm run preview
   ```

## Managing publications
- Add a new Markdown file in `src/content/papers/` named after the desired slug (e.g. `my-new-paper.md`).
- Frontmatter schema:
  ```yaml
  ---
  title: "Paper title"
  summary: "Short synopsis for cards and meta tags."
  venue: "Conference or journal"
  year: 2024
  authors:
    - First Author
    - Second Author
  tags: ["Category", "Discipline"]    # optional
  doi: "10.1234/example.2024.42"        # optional
  links:
    - label: "Official DOI"
      url: "https://doi.org/10.1234/example.2024.42"
  featured: true                         # optional — adds accent styling on the homepage
  highlight: "One-line impact sentence." # optional
  ---
  
  ## Abstract
  Main body content supports Markdown, code fences, lists, etc.
  ```
- The homepage automatically lists entries chronologically (newest first) and generates routes at `/papers/<slug>/`.

## Deployment notes
- GitHub Pages should build the Astro site via GitHub Actions or a custom workflow. Configure the action to run `npm install && npm run build` and publish the `dist/` directory.
- Keep `public/CNAME` in place to retain the custom domain configuration.
- The sitemap is generated during `astro build` (served at `/sitemap-index.xml`). Robots directives live in `public/robots.txt`.

## License
Released under the MIT License — see `LICENSE` for details.
