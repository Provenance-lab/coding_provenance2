# Coding Provenance Workshop site

A Quarto website for the second edition of the Coding Provenance Workshop (1–4 December 2026), live at https://codingprovenance.org/. GitHub Pages serves it from the `gh-pages` branch of `Provenance-lab/coding_provenance2`. The repository is public: everything committed is visible to anyone.

## Branches

- `design-audit`: the site's source. All work happens here.
- `gh-pages`: the built site that GitHub Pages serves. It changes only through the publish block below, which keeps its `CNAME` file (the file that ties the site to codingprovenance.org).
- `main`: the previous site's source, kept for reference. Publishing from it would bring the old site back.

## Updating the site

1. **Start.** Run `git switch design-audit && git pull --ff-only`, `quarto --version` and `git push --dry-run origin design-audit`. If Quarto is missing, install 1.10.19 or newer from https://quarto.org/docs/download/ (on a Mac without admin rights, the `.tar.gz` build unpacks anywhere and runs as `bin/quarto`). If the push is refused, the user signs in to a GitHub account with write access to the repository (`gh auth login`, then `gh auth setup-git`). Done when the branch is current, Quarto prints a version and the dry-run push succeeds.
2. **Edit.** Find the file in the map below.
3. **Preview.** Start `quarto preview --no-browser` in the background and give the user the URL it prints. Pages under `participants/` ask for the workshop password, which the user types into the browser. Done when the user has seen the change and approved it.
4. **Commit.** Commit to `design-audit` with a message that says what changed, then `git push origin design-audit`.
5. **Publish**, when the user asks for it: publishing changes the public site at once. From the repository root, run this block as a single command:

   ```sh
   set -e
   [ "$(git branch --show-current)" = design-audit ] || { echo "Switch to design-audit first"; exit 1; }
   git diff --quiet HEAD || { echo "Commit and push design-audit first"; exit 1; }
   ROOT=$(git rev-parse --show-toplevel)
   SHA=$(git rev-parse --short HEAD)
   OUT="$ROOT/../cp-gh-pages"
   git worktree remove --force "$OUT" 2>/dev/null || true
   quarto render
   git fetch origin gh-pages
   git worktree add --detach "$OUT" FETCH_HEAD
   cd "$OUT"
   git rm -rq . ':!CNAME' ':!.nojekyll'
   cp -R "$ROOT/_site/." .
   git add -A
   if git diff --cached --quiet; then echo "Nothing to publish"; else
     git commit -qm "Publish site from design-audit $SHA"
     git push origin HEAD:gh-pages
   fi
   cd "$ROOT"
   git worktree remove --force "$OUT"
   ```

6. **Verify.** GitHub rebuilds the site a minute or two after the push. Done when `curl -s "https://codingprovenance.org/PAGE?v=$RANDOM"` contains the new text (`PAGE` being e.g. `participants/resources.html`). The user's browser may show the old page for up to ten minutes; a hard reload fixes it.

To take a publish back, fix the source and publish again. If the live site has to return to the previous version at once, add a worktree as in the block, run `git revert --no-edit HEAD` in it, and `git push origin HEAD:gh-pages`.

## Where things are

| To change | Edit |
|---|---|
| Front page | `index.qmd` |
| Password page between the front page and the materials | `access.qmd` |
| A materials page | `participants/<page>.qmd` |
| Materials table and dates on the participants' home | `participants/index.qmd` |
| Navigation menu, order of the entries | `_quarto.yml` (`navbar`, `ledger-order`) |
| Colours, type, spacing | `custom.scss`, within the decisions in `DESIGN.md` |

- **Page fields, paintings, bibliography:** read README.md, "How the pages are kept", before changing an entry's front matter, adding a painting or editing the Resources lists.
- **A materials page gets its content:** set `status: "Entered"` in its front matter and delete `status-note`; in `participants/index.qmd`, set that page's row to `data-status="entered"` and `Entered`.
- **Code in the materials:** plain fences (```` ```python ````) show code. Executable cells (```` ```{python} ````) need Python and Jupyter on this machine and store their results in `_freeze/`, which is committed with the page.
- **Participant password:** the site stores only its hash, in `_includes/head.html`. The plaintext stays out of every file, commit and message. To change it, the user follows README.md, "The participant password".
