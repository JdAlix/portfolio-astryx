# AGENTS.md

Personal portfolio site. React 19 + Vite + the Astryx design system. All UI copy is in French — keep it that way.

## Layout

- `portfolio/` — the entire app (own `package.json`/lockfile). Run **all** npm commands from here, not the repo root.
- `docker/` — `Dockerfile` (multi-stage: Node 24 build → `nginx-unprivileged`) and `nginx.conf`.
- `docker-compose.yaml` — the only deploy path. Root has no app code.

## Commands (from `portfolio/`)

```sh
npm ci          # lockfileVersion 3
npm run dev     # Vite dev server
npm run build   # vite build --base=$BASE_URL — BASE_URL must be set (Dockerfile passes /)
npm run serve   # vite preview of dist/, NOT a dev server
npm run lint    # eslint --fix src — auto-fixes; only lints src/
npx astryx doctor --built dist   # validates the Astryx build
```

- No test suite, no typecheck, no CI (CI was deliberately removed). Verification = `npm run lint` + `npm run build` + `npx astryx doctor --built dist`.
- Astryx CLI is a dev dependency: `npx astryx component <Name>` for props, `npx astryx docs` for tokens/theme/layout. `portfolio/AGENTS.md` holds the generated Astryx component index.

## Conventions

- React function components + hooks. No Vue, no TypeScript, no `xstyle` (there is no StyleX compiler in this project).
- Astryx components come from the `@astryxdesign/core` barrel (`AppShell`, `TopNav`, `Card`, `Grid`, `Stack`, `Heading`, `Text`, `Button`, `Badge`, `Link`, `SegmentedControl`, …). Read props with `npx astryx component <Name>` before guessing.
- CSS order matters in `src/main.jsx`: `reset.css` → `astryx.css` → `portfolio.css` (generated theme) → `styles.css`.
- Providers live in `src/main.jsx` + `src/App.jsx`: `InternationalizationProvider locale="fr-FR"` (Astryx strings), `Theme` (custom theme), `LinkProvider` (router adapter).
- `RouterLinkAdapter` in `src/App.jsx` maps Astryx's `href` to React Router's `to` and lets `http(s):`/`mailto:` links bypass the router. Keep it when adding links.
- Theme = `defineTheme({extends: neutralTheme, …})` in `src/theme.js`. Change colors/radius/typography there, using `[light, dark]` tuples. Then run `npm run theme:build` — it regenerates the committed `src/portfolio.css` + `src/portfolio.js` that the app actually imports (`npm run theme:check` verifies they are in sync). Never hardcode hex values in components; use `var(--color-*)`, `var(--spacing-*)`, `var(--radius-*)`.
- Layout wrappers and finishing styles go in `src/styles.css` (plain CSS + tokens). Avoid inline `style={{}}` on raw elements.
- Routes are declared in `src/App.jsx`; the `*` route must stay last. History mode is fine because nginx has an SPA fallback.
- Portfolio content (profile, projects, skills, timeline) lives in `src/data/content.js`; add projects there rather than hardcoding markup. Project images live in `src/assets/projets/<project>/`.
- Project cards open every image in an Astryx `Lightbox` (gallery + zoom). `ProjectsView` preloads all project images on mount so switching years does not flicker — keep both behaviors when editing the projects UI. Use `imagePosition: 'top' | 'bottom'` on a project for tall screenshots that need a specific crop.
- The CV page displays `src/assets/CV.jpg` and downloads `src/assets/CV.pdf`; update **both** when the CV changes.
- Commit messages use a gitmoji prefix (`:bug:`, `:arrow_up:`, …), matching `git log`.

## Deploy / infra gotchas

- `docker compose up -d --build` at the repo root builds and serves on port 8080 behind Traefik (hosts `alix-jdlm.fr`, `www.alix-jdlm.fr`).
- The container runs `read_only: true` with `cap_drop: [ALL]` and only `/tmp` writable — don't add code that writes to the filesystem at runtime.
- `.dockerignore` excludes `portfolio/node_modules` and `portfolio/dist`; the Dockerfile copies `portfolio/package*.json` first for layer caching, so dependency changes require updating the lockfile.
- `docker/nginx.conf` intentionally returns 444 for scanner paths (`.php`, `.env`, `.git`, `wp-`, `phpmyadmin`) and sets security headers; preserve these when editing.
