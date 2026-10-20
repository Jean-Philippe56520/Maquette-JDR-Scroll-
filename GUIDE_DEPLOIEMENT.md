# Mise en ligne de la maquette JDRscroll

L'espace Netlify a été créé mais le dépôt GitHub doit contenir les fichiers, et il faut effectuer la liaison GitHub -> Netlify une première fois.

## 1. Envoyer le code dans GitHub

1. Ouvrir https://github.com/Jean-Philippe56520/Maquette-JDR-Scroll-
2. Si besoin, télécharger l'archive `maquette-jdrscroll-netlify.zip` puis la décompresser sur l'ordinateur.
3. Depuis le dépôt GitHub, cliquer sur **Add file > Upload files** et transférer **le contenu décompressé** (pas le ZIP lui-même), notamment `package.json`, `package-lock.json`, `netlify.toml`, `index.html` et le dossier `src/`.
4. Valider sur la branche `main`.

Ne pas importer `node_modules`, `dist`, `.env` ou `.bolt`.

## 2. Connecter le projet Netlify

1. Ouvrir https://app.netlify.com/projects/maquette-jdrscroll
2. Dans le projet vierge, choisir la liaison avec un dépôt Git (GitHub), ou **Project configuration > Build & deploy > Continuous deployment** selon l'interface.
3. Autoriser l'accès au dépôt `Jean-Philippe56520/Maquette-JDR-Scroll-` si Netlify le demande.
4. Choisir la branche `main` et confirmer. Les réglages figurent déjà dans `netlify.toml`.

## 3. Contrôler la publication

Ouvrir `https://maquette-jdrscroll.netlify.app` quand le premier déploiement est au statut **Published / Ready**. Tester ` /catalog`, `/pricing`, `/dashboard` et une fiche de livre en accès direct ; le fallback SPA est déjà configuré.

Le site est une maquette publique basée sur des données fictives ; ne jamais y intégrer de données personnelles ou de secrets d'accès.
