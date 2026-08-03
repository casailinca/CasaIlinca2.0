# Casa Ilinca 2.0 — Project Context

## What this is
A React + Vite website for Casa Ilinca, a Romanian vacation rental in Izvoru Muntelui, Neamț.
Live at: https://casailinca.github.io/CasaIlinca2.0/

## Repo structure
Source code lives in CasaIlinca2source/ subfolder. GitHub Actions uses working-directory: CasaIlinca2source.

## Stack
- React 19 + Vite 8 + React Router 7 (HashRouter — required for GitHub Pages)
- No backend — static site only
- Images/videos are NOT in this repo — loaded from https://casailinca.github.io/Welcome/ via src/media.js

## Routes (src/App.jsx)
/ /description /destinations /spaces /exterior /interior /camere /camera/:id /living /bai /location /contact /rezervare

## Nav (src/components/Nav.jsx)
- Gold pill "Rezervă" button always visible bottom-right → links to /rezervare
- Hamburger toggle opens vertical icon menu above it

## Booking page (/rezervare)
- Check-in / check-out date pickers, auto-calculates nights
- Name + phone fields
- On submit: opens WhatsApp (wa.me/40793681421) with pre-filled booking message in Romanian

## CSS variables (src/index.css)
--primary: #1d1d1f / --accent: #8e8e93 / --gold: #d4af37 / --bg: #f5f5f7 / --radius: 30px

## Owner contact
Phone / WhatsApp: +40793681421
Address: Str. Izvorul Muntelui Nr. 48A, Neamț

## Deployment
Push to main → GitHub Actions builds automatically.
Workflow at .github/workflows/deploy.yml uses working-directory: CasaIlinca2source and path: CasaIlinca2source/dist

## Floor Plan page (/floorplan) — src/pages/FloorPlan.jsx
- Added alongside existing /spaces route so both coexist. Nav icon: `fas fa-vector-square`, labelKey `floorplan`.
- Floor selector (Parter / Etaj 1 cards) → SVG blueprint of that level.
- SVG blueprints are hand-tuned to match the owner's sketches of the real floor plan (90° CW rotation applied from original sketch orientation: original left column → top strip, original top → right side).
- Rooms are clickable `<g>` elements with gold hover highlight (`GOLD = #d4af37`), same styling for the stairs (also clickable/highlightable, no decorative tread lines — just a plain room block with the label "Scări").
- Clicking a room opens an action panel below the SVG with two buttons: "Fotografii/Photos" (navigates to that room's existing route, e.g. /camera/1, /bai, /living, /exterior) and "Adaugă Foto/Upload Photo" (gold button, opens `https://github.com/casailinca/Welcome/upload/main/` in a new tab so the owner can upload new photos directly to the media repo).
- Level 0 (Ground Floor) SVG (viewBox 390×560): Scări top strip → Baie 1 (full height, adjacent to Centrală) → Centrală top-right. Living Room is an L-shaped `<path>` that wraps around under the stairs. Terasă is a dashed rect on the right.
- Level 1 SVG (viewBox 440×560): Left block = Scări (top) → Camera 1 → Camera 4. Right column = Baie 2 → Camera 2 → Camera 3. Hallway (Hol) strip between them, no divider between stairs and hallway.
- Room proportions follow owner's real-world sizing rules: Camera 1 = original + 45% of Camera 4's excess; Camera 4 max 20% bigger than Camera 1; same 20% ratio for Camera 2/Camera 3.
- `LivingRoom`/`LShape` hover CSS must target both `rect.c` and `path.c` — the Living Room is a `<path>`, not a `<rect>`, so hover rules need `.r:hover path.c` too or the highlight silently fails.

## Home page reviews section
- Was removed, then the owner wanted it restored with REAL Google Maps reviews (not placeholder text) — owner sent screenshots of the actual Google Maps listing reviews.
- Real reviewers used: Denisa Elena, Maria Puscasu, hirjeu ioan, elenus zoitica (5★ each, RO text translated to EN for reviewsEn array).
- As of the last session, the owner asked to remove the reviews section again — currently Home.jsx has NO reviews section (removed in commit "Remove reviews section from Home page"). If the owner wants it back, the real review text is preserved in git history (commit 77b6356 "Restore reviews section with real Google Maps reviews") — reuse that instead of placeholder reviews.

## Known environment issue: git push 403
- This session hit a persistent 403 error when running `git push -u origin HEAD:main`, from the LOCAL git relay (`http://127.0.0.1:<port>/git/...`), not from GitHub itself or the general HTTPS proxy.
- Per the environment's own guidance (`/root/.ccr/README.md`), 403s from this relay are treated as an organization policy denial, not a transient error — retrying repeatedly does not help.
- Several commits were made successfully but could NOT be pushed to origin/main during that session: they exist only on the local branch `claude/great-darwin-1pRxL`. Check `git log` and `git status` at the start of any new session to see if there are unpushed local commits before assuming the live site matches the latest local work.
- If push 403s again in a new session, don't loop retrying — report it and suggest checking the GitHub connection for the environment, or starting a fresh environment.

## Stop hook (~/.claude/stop-hook-git-check.sh)
- Environment-level hook (registered in ~/.claude/launcher-settings.json, not part of this repo) that fires after every turn, warning about "Unverified" commits (missing noreply@anthropic.com signature/email).
- It is purely informational — never blocks tool calls or actions.
- It can be temporarily disabled by renaming the script (`mv ~/.claude/stop-hook-git-check.sh ~/.claude/stop-hook-git-check.sh.disabled`), but it gets restored by the environment at some point (exact trigger unclear) — don't rely on it staying off, and don't spend time trying to permanently disable it from inside a session; it's not project/user configurable from here.
