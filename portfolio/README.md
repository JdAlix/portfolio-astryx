# Portfolio

Site personnel d'Alix JEUDI — React 19, Vite et le design system [Astryx](https://github.com/meta/astryx).

## Stack

- **React 19** + **React Router 7** (SPA, `BrowserRouter`)
- **Astryx** (`@astryxdesign/core` + thème `neutral` étendu dans `src/theme.js`)
- **Vite 8** (`@vitejs/plugin-react`)
- CSS complémentaire dans `src/styles.css` (tokens Astryx uniquement)

## Commandes

```sh
npm ci
npm run dev          # serveur de développement Vite
npm run build        # BASE_URL=/ requis (le Dockerfile le fournit)
npm run serve        # prévisualisation du build
npm run lint         # eslint --fix src
npm run theme:build  # régénère src/portfolio.{css,js} depuis src/theme.js
npm run theme:check  # vérifie que le thème généré est à jour
```

## Structure

```
src/
  App.jsx              routes, navigation, thème clair/sombre
  main.jsx             imports CSS Astryx + providers
  theme.js             source du thème (defineTheme, extends neutralTheme)
  portfolio.css/.js    thème compilé, généré par `npm run theme:build`
  data/content.js      contenu du portfolio (profil, projets, compétences)
  components/          Page, SectionHeading, ProjectCard, footer
  views/               Home, About, CV, Projects, NotFound
  styles.css           layout et finitions (tokens Astryx)
  assets/              images, CV, favicons
```

## Astryx

Le CLI est installé en dépendance de développement :

```sh
npx astryx component Button   # API d'un composant
npx astryx docs theme         # thème, tokens, dark mode
npx astryx doctor --built dist
```

Les composants sont importés depuis `@astryxdesign/core`. Le projet n'utilise
pas le compilateur StyleX : les surcharges visuelles passent par `className` et
`src/styles.css`, avec les variables CSS du thème.
