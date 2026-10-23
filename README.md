# Coding Provenance Workshop 2. Materials Website

Built with [Quarto](https://quarto.org/).

- Preview locally: `quarto preview`
- Build: `quarto render`
- Publish to GitHub Pages: `quarto publish gh-pages`

Edit the `.qmd` files to update page content; the navigation menu is in `_quarto.yml`.

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
- `fonts/`: Archivo (SIL Open Font License, see `fonts/OFL.txt`)
- `images/plates/`: the paintings in WebP; the original JPEGs stay in `images/`
