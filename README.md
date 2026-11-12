# Portfolio — test du framework Astryx

Cette version du portfolio est un **test du design system [Astryx](https://github.com/meta/astryx) de Meta**.
Le framework a été appliqué par une **IA** sur la base du portfolio original : migration de Vue.js vers
**React 19 + Vite**, avec les composants, le thème et les tokens d'Astryx.

**⇨ Démo : [portfolio-astryx.alix-jdlm.fr](https://portfolio-astryx.alix-jdlm.fr)**

Le portfolio original (Vue.js) reste disponible sur [alix-jdlm.fr](https://alix-jdlm.fr).

## Contexte

Ce portfolio a été réalisé dans le cadre de ma 2ème et 3ème année de BUT Informatique.
Cette déclinaison React/Astryx sert de terrain d'essai pour le framework de Meta ; elle ne remplace
pas la version d'origine.

## Développement

Le code de l'application se trouve dans [`portfolio/`](./portfolio). Toutes les commandes npm s'exécutent depuis ce dossier :

```sh
cd portfolio
npm ci
npm run dev
```

Voir [`portfolio/README.md`](./portfolio/README.md) pour la structure du projet et les commandes de build.

## Déploiement

Le déploiement passe par Docker Compose, derrière Traefik, sur le domaine
`portfolio-astryx.alix-jdlm.fr` (port interne `8080`) :

```sh
docker compose up -d --build
```
