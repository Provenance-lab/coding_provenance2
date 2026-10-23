---
name: Coding Provenance Workshop, Second Edition
description: The materials site of the second edition, kept like a dealer's stock book.
colors:
  red: "#b0241b"
  blue: "#1d4b8f"
  blue-deep: "#12346a"
  paper: "#f6f6f2"
  ink: "#1b1c19"
  ink-2: "#4a4d46"
  ink-3: "#63665e"
  rule: "#bccadb"
  rule-head: "#7f97b2"
  wash: "#e9eef4"
  code-ground: "#eef1f4"
  plate-ground: "#e4e2dc"
typography:
  display:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.75rem, 7.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 122"
  headline:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 118"
  title:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.75rem, 2.6vw, 2.125rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 112"
  entry:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 650
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 106"
  lede:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'kern'"
  small:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.07em"
    fontVariation: "'wdth' 75"
  figure:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontWeight: 600
    fontFeature: "'tnum', 'lnum'"
rounded:
  none: "0px"
  sm: "2px"
spacing:
  page: "80rem"
  gutter: "6.5rem"
  gap: "2.5rem"
  num-pad: "1rem"
  measure: "36rem"
components:
  margin-number:
    textColor: "{colors.red}"
    typography: "{typography.figure}"
  column-head:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
  record-line:
    textColor: "{colors.ink}"
    padding: "0.65rem 2.25rem 0.7rem 0"
  ledger-row:
    textColor: "{colors.ink}"
    padding: "1rem 1.5rem 1rem 0"
  ledger-row-hover:
    backgroundColor: "{colors.wash}"
  status-mark:
    textColor: "{colors.red}"
    size: "0.62em"
  link:
    textColor: "{colors.blue}"
  link-hover:
    textColor: "{colors.blue-deep}"
  nav-link:
    textColor: "{colors.ink}"
    height: "3.75rem"
    padding: "0 0.7rem"
  nav-link-hover:
    textColor: "{colors.blue}"
  nav-link-external:
    textColor: "{colors.blue}"
  prov-switch:
    rounded: "3px"
    padding: "3px"
  prov-switch-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.sm}"
    padding: "0 1.1rem"
    height: "2.75rem"
  prov-switch-button-hover:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.ink}"
  prov-switch-button-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  code-block:
    backgroundColor: "{colors.code-ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
  plate:
    backgroundColor: "{colors.plate-ground}"
  skip-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "0.6rem 1rem"
  footer:
    textColor: "{colors.ink-2}"
    typography: "{typography.small}"
    width: "36rem"
---

# Design System: Coding Provenance Workshop, Second Edition

## Overview

**Creative North Star: "The Dealer's Stock Book"**

The site is kept like a dealer's stock book. Every page is an entry with a number, every set of materials is a ruled row, and every picture comes with its record. The world is the ledger's grammar, not its costume: numbered entries, ruled rows, a red double margin rule with the numbers to its left, column heads in condensed capitals, and tabular figures. It is not a picture of an old book. There is no paper texture, tape, handwriting, stain or shadow; the paper is near-white and flat, and the ink is screen ink.

Density is that of a working register. Rows are compact (0.6 to 1rem of padding), labels are small and condensed, and type is large only where a page names itself. One sans family, Archivo, carries the whole book through its width axis: condensed capitals for column heads, normal width for reading, wide and heavy for titles. Colour is nearly absent. Ink and two weights of blue hairline make the structure. Red is kept for the margin and for the marks that belong to it, and blue for links.

The book is built to fill. Pages that hold no materials yet still look intentional: the page head, the record line with its open status square, a status note, and on workflow pages a painting with its full record and a provenance that turns from the museum's sentence into a table. That Text-to-Table morph is the one authored movement in the system.

**Key Characteristics:**
- A red double margin rule runs the full height of every page; the page numbers, row numbers and bibliography counters sit in the gutter to its left.
- Hairlines in two weights of blue, all running to one right edge; text is held to a 36rem measure inside them.
- Archivo only, with voices made by width (75% to 122%) and weight (400 to 800).
- Status shown by a mark, not a colour: an open square for "to come", a filled square for "entered".
- Flat paper, no shadows, square corners.
- Paintings in full colour, hung as plates, each with a full record, rights line and provenance.

## Colors

A near-monochrome register in warm paper and ink, with blue-grey ruling, one red for the margin and one blue for links.

### Primary
- **Margin Red** (red): the red double margin rule; numbers in the gutter (page entry numbers, ledger row numbers, bibliography counters, provenance table rows); status squares; the active-page bar in the navbar; the semicolons that divide a provenance sentence; numeric literals in code; the labels of warning, important and caution callouts; the text caret. Contrast on paper 6.2:1.

### Secondary
- **Ledger Blue Ink** (blue): links, the external links at the right of the navbar, the focus ring, string literals in code, the checked copy icon. Contrast on paper 7.9:1.
- **Deep Blue Ink** (blue-deep): link hover only.

### Neutral
- **Stock-Book Paper** (paper): the page ground everywhere, including the navbar and footer, and the browser theme colour. Tables are transparent so the paper and the margin rule show through.
- **Ink** (ink): headings, body text, row entries, the pressed segment of the provenance switch, the skip link ground, and the footer's double rule. 15.8:1 on paper.
- **Second Ink** (ink-2): secondary text: descriptions, column heads, captions, the edition line, the Part and Status cells, the footer. 7.9:1.
- **Third Ink** (ink-3): tertiary text: table captions, the provenance source line, plate numbers and rights lines, code comments, the footer's licence note. 5.4:1.
- **Blue Ruling** (rule): the light hairline between rows and under every record. Decorative (1.5:1); never the only boundary of a control.
- **Column-Head Ruling** (rule-head): the heavier hairline under column heads and section headings and above every record line; also the frame of the provenance switch and the menu toggler, and the scrollbar thumb.
- **Wash** (wash): row hover and focus in the materials ledger, and hover on the provenance switch. The only tinted area in the system, and it only appears on interaction.
- **Code Ground** (code-ground): code blocks.
- **Plate Ground** (plate-ground): the placeholder behind a painting while it loads.

Two further literals are set once each and are not tokens: the selection tint (#f1d5d0, a pale red) and the inline-code ground (#e9ece6).

### Named Rules
**The Margin Red Rule.** Red belongs to the margin and its marks: the rule, the numbers left of it, status squares, the active-page bar, provenance separators. It is never a fill, a button, a heading colour or a background.

**The Two-Weight Ruling Rule.** Hairlines come in two blues: column-head ruling under heads and above records, light ruling between rows and below records. Ink is used for a rule only at the footer, where the book is ruled off with a double line.

**The Status Is a Mark Rule.** An open red square means to come; a filled red square means entered. Status is never encoded by hue alone, and no green, amber or other signal colour exists.

## Typography

**Display Font:** Archivo, self-hosted variable (weight 100 to 900, width 62 to 125%), with Helvetica Neue and Arial as fallbacks
**Body Font:** Archivo (same family)
**Label/Mono Font:** labels are Archivo at 75% width; code uses the browser's default monospace stack (not themed)

**Character:** A grotesque that works like a ledger's printed headings. Wide and heavy, it names the book; condensed capitals label its columns; normal width carries the reading. Width is set with `font-stretch`, which drives Archivo's width axis.

### Hierarchy
- **Display** (800, clamp(2.75rem, 7.4vw, 6rem), line-height 0.92, width 122%, tracking -0.03em): the landing cover title only, set as two lines ("Coding Provenance / Workshop"). On phones (520px and below) it drops to clamp(2.1rem, 11vw, 2.75rem) at 104% width. Under it, the edition line ("Second Edition") is set at 400 weight, clamp(1.4rem, 2.6vw, 2.1rem), 112% width, in second ink.
- **Headline** (800, clamp(2.5rem, 6vw, 4.75rem), line-height 0.98, width 118%, tracking -0.025em): the page title of each entry. On phones it drops to clamp(1.75rem, 9vw, 2.5rem) at 100% width and breaks long words.
- **Title** (700, clamp(1.75rem, 2.6vw, 2.125rem), line-height 1.1, width 112%, tracking -0.015em): section headings, ruled underneath in column-head ruling. They sit 4.5rem below the previous section (3.5rem on phones) and 1.25rem above their content.
- **Entry** (650, 1.3125rem, width 106%, tracking -0.01em): third-level headings ("Provenance") and the entry names in the materials ledger (1.15rem on phones).
- **Lede** (400, clamp(1.125rem, 1.5vw, 1.25rem), line-height 1.45): the description under a page title, in second ink, up to 38rem wide. The landing's summary paragraph is a close sibling: full ink, clamp(1.0625rem, 1.4vw, 1.1875rem), line-height 1.55, held to the measure.
- **Body** (400, 1.0625rem, line-height 1.6): all reading text, held to a 36rem measure (about 70 characters). Strong is 650, never 700 or more. Paragraphs and list items use `text-wrap: pretty`, headings `balance`.
- **Small** (400, 0.9375rem): captions, plate captions, the footer, bibliography URLs, the affiliations of the people named. Navbar links use this size at 500 weight.
- **Label** (600, 0.8125rem, width 75%, tracking 0.07em, uppercase, second ink): the column-head voice. Used for every field label in the book: record-line labels, table column heads, the painting record, the "Brought forward / Carried forward" labels, callout titles. The provenance switch uses the same voice at 0.875rem.
- **Figure** (600, tabular lining figures, red): numbers in the gutter. The page entry number is set at 1rem (0.875rem on phones); row and bibliography numbers inherit body size. Bibliography counters are padded to three digits (001, 002, ...).

### Named Rules
**The One Family Rule.** Archivo is the only text face. Voices come from the width axis (75% for labels, 100% for reading, 106 to 122% for headings) and from weight, never from a second family.

**The Column-Head Voice Rule.** Every label in the book speaks in one voice: condensed capitals, 0.8125rem, 600, 0.07em tracking, second ink. A label names a field of data. It is never a kicker or eyebrow above a heading.

**The Tabular Figures Rule.** Numbers that sit in rows, records, dates and the gutter use tabular lining figures so that columns of numbers align.

## Layout

The page is a stock-book spread laid on one grid. A page width of 80rem is centred, with a minimum side edge of 1rem. From the left edge of the page, a gutter (6.5rem) leads to the red double margin rule, then a gap (2.5rem) leads to the content column, which runs to the right edge. The navbar, every page's content and the footer all start at that same content line and stop at that same right edge. The margin rule is drawn on the body, so it runs the full height of every page, from the navbar's hairline to the bottom of the footer.

The gutter holds only numbers and the required-reading square. Numbers are right-aligned and sit a number pad (1rem) short of the rule. Row hairlines are made transparent on the gutter cells, so the gutter stays clear.

Wide things (record lines, tables, the painting record grid, link lists, plates) run the full content column. Prose (paragraphs, lists, blockquotes, code cells, callouts, status notes, the provenance sentence) is held to the 36rem measure. Ruled rows that contain prose keep the hairline at full width and pad their right side so the text stays within the measure.

Spacing rhythm: page heads sit 3.5rem below the navbar and 3rem above the content (2.25rem and 2rem on phones). Sections are 4.5rem apart. Rows are padded 0.6 to 1rem vertically. The brought-forward and carried-forward links sit 5rem below the content, and the footer is padded 1.25rem above and 3rem below.

Responsive steps:
- **Up to 1100px:** gutter 4.5rem, gap 1.75rem.
- **Below 1200px:** the navbar collapses to a menu button; the open menu is a stack of ruled rows. Between 1200 and 1400px the desktop links tighten.
- **Up to 900px:** the landing record line becomes two columns (partners on their own row); the about section stacks its prose above the record of people.
- **Up to 720px:** gutter 2.5rem, gap 0.875rem, number pad 0.5rem. The margin rule and gutter numbers stay. Tables restack: column heads are hidden, each row becomes a small grid with its number still in the gutter, and the painting record grid becomes one column. Plates and link lists stack.
- **Up to 520px:** the landing record line becomes label and value rows; the cover title and page titles step down.

Landing order: cover title, edition line and summary; the record line (dates, venue, partners); the materials ledger; about the workshop (a reading column with the record of people beside it, 4rem apart); the plates, hung two to a row at one height, with widths in proportion to each painting.

### Named Rules
**The Gutter Rule.** The gutter, left of the red rule, carries only numbers (and the filled square of a required reading). No text, labels or hairlines go there.

**The One Right Edge Rule.** Every hairline runs to the content column's right edge. Width for reading is controlled inside the row (36rem measure), never by shortening the rule.

**The Restack Rule.** On phones a table becomes label and value rows, and its number stays in the gutter. The margin rule is never dropped.

## Elevation & Depth

The book is flat. No element has a shadow, and the build removes the framework's default shadows from tables, callouts and the menu button's focus. Depth and hierarchy come from ruling: column-head ruling (heavier blue) marks the top of a record and the underline of a head; light ruling separates rows; the footer's 3px double ink rule closes the page. Stacking is used only to keep the navbar and content above the margin rule. The one tinted surface, the wash, appears only on hover or focus.

### Named Rules
**The Flat Book Rule.** No shadows, gradients, textures or raised surfaces. Hierarchy is the weight of a rule, the weight of a type, or a number.

## Shapes

The form language is square. Records, rows, tables, callouts, plates and the navbar have no corner radius. Small controls take a 2px radius (the menu button, the provenance switch's segments, code blocks, inline code); the provenance switch's outer frame is 3px so its corners nest around the 2px segments. The focus ring has a 1px radius.

The recurring marks are the ledger's own. The margin rule is two 1px red lines, 2px apart (a 4px strip). The status mark is a 0.62em square with a 1.5px red stroke, filled when the entry is entered. The required-reading mark is the same square, filled, in the gutter. The footer's rule is a 3px double line in ink. Two icons exist, both thin line drawings masked in the current text colour: the external-link arrow after the navbar's outbound links, and the copy and check marks on code blocks.

## Components

### Navigation
Plain words on the paper, ruled off below.
- **Bar:** paper ground, one light-blue hairline below, 3.75rem tall, aligned to the content column. Brand: "Coding Provenance" at 1.125rem, 800 weight, 118% width.
- **Links:** small size (0.9375rem) at 500 weight, ink; hover turns blue. Outbound links ("First edition", "Workshop home") sit at the right in blue, each followed by a small external arrow.
- **Current page:** marked rather than recoloured: 650 weight plus a 3px red bar on the navbar's bottom hairline.
- **Phones and tablets (below 1200px):** a square-cornered menu button (1px column-head ruling, 2px radius) opens a stack of ruled rows (2.75rem high). The current page is marked with a short red double rule at its left, a miniature of the margin rule.

### Page Head (signature)
Every entry opens the same way: the entry number in red in the gutter, level with the title; the headline-size title; the lede; and a record line with Entry ("No. 003"), Part and Status. A status note in second ink can follow, saying what will arrive. Authors set all of this in the page's front matter (`title`, `description`, `entry`, `part`, `status`, `status-note`).

### Record Line
Labelled fields ruled top and bottom: column-head ruling above, light ruling below. Fields sit side by side, each a column-head label over a 500-weight value with tabular figures, 2.25rem apart. On the landing this line carries Dates, Venue and Partners; on phones it becomes label and value rows, with a 5.5rem label column.

### Status Mark
The open or filled red square before a status word ("To come", "Entered", "To be announced", "Not in this book"). The square carries the meaning and the text stays ink, so the mark never depends on colour.

### Materials Ledger (landing)
The book's index as a ruled table: No. in the gutter (red, 600), then Entry (entry-size name in ink with a description beneath in second ink), Part and Status. Column heads use the column-head voice over a column-head rule that stops at the margin. The whole row is the link. On hover or focus the row's content cells take the wash and the entry name turns blue and underlined; the gutter cell stays clear. Feedback transitions take 160ms. On phones the row restacks under its number.

### Plate and Record of the Painting
On each workflow page a painting is hung below the page head, at full colour, uncropped, never taller than 82vh (or 52rem), with a small second-ink caption (artist, title, date, collection). A "Record of the painting" section follows: a two-column grid of ruled label and value rows (artist with life dates, title, date, medium, collection, number, rights, image source), with a 7.5rem label column. Works in copyright carry a © line in their rights field, and the footer notes that the site's licence does not cover the reproductions. On the landing the four plates are hung two to a row at one height, each captioned with its entry number, workflow step, artist, title, date and, where it applies, its © line.

### Provenance Switch (signature)
A two-segment control, Text and Table, at the right of the "Provenance" head.
- **Shape:** a 1px column-head-ruled frame (3px radius, 3px inner padding) holding two square-ish segments (2px radius, at least 2.75rem high and 5rem wide).
- **Type:** the column-head voice at 0.875rem.
- **States:** at rest, second ink on paper; on hover, ink on wash; when pressed, paper on ink. Pressed state is exposed to assistive technology. The switch is hidden when scripting is off, and both views print.
- **Text view:** the museum's provenance sentence, held to the measure at line-height 1.65, with each semicolon in bold red, marking where the sentence will split.
- **Table view:** the same provenance one event per row (Date, Event, Holder, Place), with row numbers in the gutter and the date column in second ink. A small caption sits above and a source line below ("Translated from the holding museum's record").
- **Motion:** the one authored movement. Each clause and its table row share a view-transition name, so where the browser supports it the clause travels into its row (520ms, ease-out `cubic-bezier(0.16, 1, 0.3, 1)`). With reduced motion, or without view-transition support, the views swap instantly.

### Bibliography Ledger List
References as numbered entries: each entry is a ruled row (about 0.85rem padding), its counter in the gutter in red, padded to three digits. Text stays within the measure, and URLs are set small and break anywhere. Mandatory readings use the same rows with a filled red square in the gutter in place of a number. Authors write these as fenced divs in the page.

### Link List
Tutorials and other resources as a two-column list of ruled rows (one column on phones). Each row is a 500-weight blue link with no bullet.

### Brought Forward / Carried Forward
At the foot of each entry, a ruled pair of links to the previous and next entries in the book's order: a column-head label ("Brought forward", "Carried forward") over the entry's red number and name. The next entry is aligned right. On hover the name turns blue and underlined. On phones the pair stacks. The order comes from one list in the site configuration.

### Callouts
Ruled notes, not boxes: a column-head rule above and a light rule below, transparent ground, no icon, no radius, held to the measure. The title is in the column-head voice, in second ink, or red for warning, important and caution notes.

### Code
Code blocks sit on the pale code ground with a 2px radius and no border. Tokens use the ledger's inks: strings in blue, keywords and functions in ink at 600, comments in third ink italic, numbers and constants in red, operators and variables in second ink. The copy button is a thin line icon in second ink that turns to a blue check.

### Links and Focus
Links are blue with a thin underline (1px, 35% strength, offset 0.2em). On hover they go deep blue with a full-strength 2px underline. Focus is a 2px solid blue outline, offset 3px, on every focusable element. A skip link (ink ground, paper text) appears at the content line when focused.

### Footer
The book ruled off: a 3px double ink line at the content column, then three lines of small second-ink text held to 36rem: the CC BY 4.0 licence, the organisers' custody line, and, in third ink, the note that the painting reproductions are not covered by the licence.

## Do's and Don'ts

### Do:
- **Do** give every new page the entry grammar: a three-digit entry number, Part, Status and, where a step has one, a painting with its full record. Add the page to the book's order and to the landing ledger.
- **Do** put numbers in the gutter, right-aligned a number pad (1rem, 0.5rem on phones) short of the red rule, in red, 600, tabular figures.
- **Do** run every hairline to the content column's right edge, and hold prose inside it to the 36rem measure.
- **Do** use column-head ruling (rule-head) under heads and above records, and light ruling (rule) between rows and below records.
- **Do** show status with the square: open for to come, filled for entered.
- **Do** label fields in the column-head voice: condensed capitals, 0.8125rem, 600, 0.07em tracking, second ink.
- **Do** hang paintings at full colour and uncropped, with a record, a rights line and, for works in copyright, a © line.
- **Do** keep interaction feedback to colour, wash and underline changes of 160 to 200ms on the ease-out curve, and honour reduced motion.

### Don't:
- **Don't** add paper textures, tape, stains, handwriting or script fonts, drop shadows or other skeuomorphic costume. The book is its grammar, not its look.
- **Don't** box content in cards or tinted panels; group it with ruled rows. The wash is for hover and focus only.
- **Don't** put text, labels or hairlines in the gutter, and don't run rules across the red margin rule.
- **Don't** use red for fills, buttons, headings or large areas, and don't add signal colours (green, amber) for status.
- **Don't** crop, tint or duotone a painting, set text over it, or use it as a banner or background.
- **Don't** add a second text face or fall back to a system display face. Archivo's widths and weights do the work.
- **Don't** round structural shapes; small controls take 2px at most (3px for the switch's outer frame), and nothing is a pill.
- **Don't** use the column-head label as a kicker or eyebrow above a heading.
- **Don't** add motion beyond feedback transitions. The provenance morph is the system's one authored movement.
