# Maquette JDRscroll

Démo indépendante de l'application JDRscroll, conçue pour partager des propositions d'interface et de fonctionnalités avec l'équipe de développement.

## Lancer localement

- Node.js 22, npm
- `npm ci`
- `npm run dev`
- Pour le site statique : `npm run build` (fichiers dans `dist/`)

## Déploiement Netlify

Projet Netlify : https://app.netlify.com/projects/maquette-jdrscroll
Dépôt GitHub : https://github.com/Jean-Philippe56520/Maquette-JDR-Scroll-

Relier le dépôt à Netlify (branche `main`). La configuration est incluse dans `netlify.toml` : commande de construction, répertoire de publication et fallback SPA.

## Nature de la maquette

Les jeux, les ouvrages, les profils et les statistiques sont des données de démonstration. La navigation et les écrans servent à présenter un comportement visuel ; ce dépôt n'est pas l'application JDRscroll en production et n'implique aucune mise à jour de son back-office.

## Mise à jour

Les commits sur `main` publieront une nouvelle version **après** liaison du dépôt à Netlify.
