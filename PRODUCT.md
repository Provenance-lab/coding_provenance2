# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: the participants of the Coding Provenance Workshop, Second Edition (December 1 to 4, 2026, Getty Research Institute, Los Angeles). They are provenance researchers, art historians and museum practitioners taking a first structured step into computational methods. Before and during the workshop they come here to find the agenda, the mandatory readings, and each session's materials.

Secondary, after the workshop: the wider provenance and digital humanities field, who find the materials as a lasting public record, reuse them under CC BY 4.0, and cite the workshop.

## Product Purpose

The materials website of the second edition. It holds what participants need for each step of a computational provenance workflow (structuring, preprocessing, analysing, visualising data), the online sessions, and a bibliography of readings, tutorials and tools. Success: a participant can find any session's materials in seconds, and an outsider understands what the workshop is and wants to use and cite it.

This site's front page is the workshop's home, to be served at https://codingprovenance.org/ (GitHub Pages). The earlier workshop site (https://barbararomero.github.io/codingprovenanceworkshop/) carried the team and alumni pages; the first edition's materials stay at https://provenance-lab.github.io/coding_provenance/ and are linked from the participant area's Editions menu.

Structure: a public front page (what the workshop is, the second edition's dates and venue, organisers, editions, and the Provenance Lab newsletter sign-up), a participant gate, and the participant area under `participants/` with the materials. The participant area is password protected by a v1 client-side gate (hashed password; not real security); proper protection is planned for v2.

## Positioning

A collaboration between the Provenance Lab (Leuphana University of Lüneburg) and the Getty Provenance Index. The workshop teaches "computational provenance": provenance research using statistics, network analysis, optical character recognition, large language models and natural language processing. It is taught by provenance researchers for provenance researchers, so methods are framed by the field's own records and questions, not by generic data science.

## Operating Context

- Built with Quarto (website project), published to GitHub Pages from the `gh-pages` branch at https://provenance-lab.github.io/coding_provenance2/.
- Content is authored in `.qmd` files by the organizers, who are not front-end developers; styling lives in one SCSS file. Pages are added and filled over time.
- The four workflow pages currently hold page templates commented out until content is ready.

## Capabilities and Constraints

- Static site; no forms, accounts or search (search is off).
- Pages: Home, Second Online Session, Structuring Data, Preprocessing Data, Analysing Data, Visualising Data, Bibliography & Resources.
- Content license: Creative Commons Attribution 4.0 International. Footer line: "Reuse is encouraged — we happily promote changes of custody. Just be sure to write a good provenance record and cite this workshop."
- Undecided: session dates and times, schedule, recordings and slides, whether participants apply or are selected.

## Brand Commitments

- Name: Coding Provenance Workshop, Second Edition. Short form in navigation: Coding Provenance.
- Organizers and instructors: Bárbara Romero Ferrón (Provenance Lab, Leuphana University of Lüneburg), Lynn Rother (Provenance Lab, Leuphana University of Lüneburg), Sandra van Ginhoven (Getty Provenance Index, Getty Research Institute).
- The playful custody voice of the footer line is the organizers' own and stays.
- No partner logos are on hand; do not imitate Getty or Leuphana branding.

## Evidence on Hand

- Mission text and organizer list, published on the main workshop site (team page).
- Bibliography: two mandatory readings, four Getty Provenance Index video tutorials, 25 bibliography entries, 12 other resources (`resources.qmd`).
- Four late 19th-century genre paintings of people at work, chosen by the organizers as page images (`images/`). Credits are incomplete and being researched; anything unverified is marked "to be confirmed".
- Absent, never to be fabricated: schedule, session content, participant names or numbers, testimonials, recordings, partner logos.

## Product Principles

1. Find it fast: the participant's path to a session's materials beats any atmosphere.
2. Practice what we teach: every image, quotation and resource carries a good provenance record.
3. The field's own material leads: provenance records, labels and archival evidence are the subject, not decoration.
4. Built to fill: pages must look intentional while content is still arriving, and stay easy for non-developers to extend in Quarto.

## Accessibility & Inclusion

WCAG 2.2 AA. International, multilingual audience (English site; names and titles in Spanish, German, Croatian and other languages must render correctly).
