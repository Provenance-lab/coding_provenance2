# Coding Provenance Workshop 2. Materials Website

Built with [Quarto](https://quarto.org/).

- Preview locally: `quarto preview`
- Build: `quarto render`
- Publish to https://codingprovenance.org/: see "Publishing" below

Edit the `.qmd` files to update page content; the navigation menu is in `_quarto.yml`.

## Publishing

https://codingprovenance.org/ is served by GitHub Pages from the `gh-pages` branch, which holds the built site (Settings → Pages: source `gh-pages`, `/`). The domain's DNS at Namecheap already points at GitHub, and the domain is verified for the repository.

To publish a change, build the site and replace the contents of `gh-pages` with `_site`, keeping its `CNAME` and `.nojekyll`:

```sh
quarto render
git fetch origin
git worktree add ../gh-pages gh-pages
cd ../gh-pages
git rm -rq . ':!CNAME' ':!.nojekyll'
cp -R ../coding_provenance2/_site/. .
git add -A && git commit -m "Publish site" && git push origin gh-pages
cd - && git worktree remove ../gh-pages
```

GitHub rebuilds the site within a minute or two of the push.

`site-url` in `_quarto.yml` is `https://codingprovenance.org/`, which the share card and the 404 page use.

### Publishing from GitHub Actions instead

`.github/workflows/publish.yml` builds and publishes the site without the `gh-pages` branch. It is manual-only. To switch to it: merge this branch into `main`, set **Settings → Pages → Source** to **GitHub Actions**, then run **Publish site** from the Actions tab straight away (the `gh-pages` site stops being served as soon as the source changes). Check that **Custom domain** still reads `codingprovenance.org`. To publish on every push to `main`, add `push: branches: [main]` under `on:` in the workflow.

## Site structure

- `index.qmd`: the public front page, in the Provenance Lab's style (statement on provenance timelines, the Lab's MailerLite newsletter form).
- `access.qmd`: the participant gate, between the front page and the materials.
- `participants/`: the materials site (the stock-book pages described below). The navbar brand links to `participants/index.html`.

### The participant password (v1)

The gate compares a hash of what is typed with the value of `window.CP_ACCESS` in `_includes/head.html`; every page under `participants/` checks the same value and sends visitors without it to the gate. This keeps casual visitors out. It is **not** security: the pages are still public files, and anyone who reads the source can get past it. Search engines are asked not to index the participant pages. Do it properly in v2 (for example Cloudflare Access in front of GitHub Pages, or StatiCrypt to encrypt the pages).

To change the password, compute the new hash and replace the value of `window.CP_ACCESS`:

```sh
python3 -c "import hashlib,getpass; print(hashlib.pbkdf2_hmac('sha256', getpass.getpass().encode(), b'coding-provenance-2026', 310000).hex())"
```

Participants who ticked "Keep me signed in" stay signed in until the value changes.

## How the pages are kept

The site is laid out like a dealer's stock book: every page is a numbered entry, numbers sit in the margin left of the red rule, and every painting carries its record and provenance. The design decisions are written down in `DESIGN.md`; product facts in `PRODUCT.md`.

### Page fields

Each page sets its entry in the front matter. The title block is drawn from these fields by `_partials/title-block.html`, so you never write that HTML by hand.

```yaml
---
title: "Structuring Data"
description: "How to organise provenance data into consistent, reusable structures."
entry: "002"                      # the number shown in the margin
part: "Workflow, step 1 of 4"
status: "To come"                 # "To come" draws an open square; "Entered" a filled one
status-note: "Materials for this step will be entered here as the workshop approaches."
---
```

When a page gets its content, change `status` to `"Entered"`, delete `status-note`, and write the page below the front matter as usual. Update the matching row in the Materials table on the home page (`index.qmd`) too.

### Paintings

A workflow page can carry one painting (`plate:` in the front matter). Everything shown in the record, and the provenance that switches between text and table, comes from these fields:

```yaml
plate:
  image: structuring            # files: images/plates/structuring-1600.webp and -960.webp
  width: 1600
  height: 945
  alt: "What the painting shows, for screen readers."
  artist: "Eduardo Chicharro Agüera"
  artist-life: "1873–1949"
  title: "*Las uveras* (Grape Sellers)"
  date: "1898"
  medium: "Oil on canvas, 240 × 400 cm"
  collection: "Museo Nacional Centro de Arte Reina Sofía, Madrid"
  number: "AS05614"
  rights: "Public domain."      # or the © line and "not covered by this site's licence"
  image-source: "Museo Nacional Centro de Arte Reina Sofía"
  source: "https://…"           # the museum's record
  source-name: "Museo Reina Sofía, Las uveras"
  provenance-text: "First owner, 1895; second owner; museum, 2022"
  provenance:                   # one row per clause of provenance-text, in the same order
    - date: "1895"
      event: "Acquisition"
      holder: "First owner"
      place: "City"
```

Separate the clauses of `provenance-text` with semicolons and give exactly one `provenance` row per clause: the page animates each clause into its row.

To prepare a new painting image (needs `cwebp`):

```sh
cwebp -q 80 -resize 1600 0 -metadata none original.jpg -o images/plates/NAME-1600.webp
cwebp -q 80 -resize 960 0 -metadata none original.jpg -o images/plates/NAME-960.webp
```

### Bibliography

On the Resources page, entries inside a `::: {.ledger-list}` block are numbered automatically in the margin. Mandatory readings use `::: {.ledger-list .required}`. Link lists use `::: {.link-list}`.

## Files

- `custom.scss`: all styling (colour, type and spacing tokens at the top)
- `_partials/title-block.html`: page heading, record line, painting and provenance
- `_includes/`: font preload, the design contract comment, and the provenance switch script
- `fonts/`: Archivo and Spectral (SIL Open Font License, see `fonts/OFL.txt` and `fonts/OFL-Spectral.txt`)
- `assets/public.js`: the timelines and the gate on the public pages
- `images/plates/`: the paintings in WebP; the original JPEGs stay in `images/`
