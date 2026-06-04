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
