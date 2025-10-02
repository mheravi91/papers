# DOI shortlinks & paper landing pages

This repository powers [papers.mheravi.ir](https://papers.mheravi.ir) and doubles as a reusable template for anyone who wants lightweight DOI landing pages on GitHub Pages.

## Features
- Friendly landing pages for selected DOIs with structured metadata and copy‑ready BibTeX.
- Automatic redirect for every other DOI path via `404.html → https://doi.org/<path>`.
- Pure static assets — no build step, works out of the box with GitHub Pages.

## Quick start
1. Fork or clone the repository.
2. Decide on the domain you want to serve from:
   - To reuse `papers.mheravi.ir`, keep the existing `CNAME` file and make sure your DNS points a CNAME record at `<YOUR_GITHUB_USERNAME>.github.io`.
   - To use a different domain (or the default `*.github.io` URL), edit or delete the `CNAME` file accordingly.
3. Push to your GitHub repository and enable **Settings → Pages → Deploy from main branch**. Enforce HTTPS once the certificate is issued.

## Add a paper landing page
Create a folder that matches the DOI path exactly and drop an `index.html` inside, for example:
```
10.1234/some.journal.2025.42/index.html
```
If no folder exists for a requested DOI, the visitor is redirected to the original record on doi.org automatically.

Each `index.html` can include:
- A short summary/abstract for the paper.
- Author list and publication venue.
- Links to the official DOI, PDF, preprint, slides, code, etc.
- Structured metadata (`application/ld+json`) to improve SEO and scholarly indexing.

## Repository structure
```
├── index.html                # Root landing page with examples
├── 404.html                  # DOI redirect fallback
├── CNAME                     # Custom domain (edit/remove if you change it)
├── static/style.css          # Shared styling
└── <DOI>/index.html          # Custom landing page for that DOI
```

## Contributing & license
Issues and pull requests are welcome for improvements or additional features.

Licensed under MIT — customize freely.
