# JDRscroll - MVP Investisseur Premium

## Vue d'ensemble

JDRscroll est un prototype premium d'une plateforme d'abonnement dédiée aux contenus de jeux de rôle. Cette application démontre une vision complète du produit avec tous les profils utilisateurs, les droits d'accès, et un modèle économique transparent.

**Tagline:** La bibliothèque infinie de mondes à explorer

## Caractéristiques principales

### 1. Design Premium & Immersif
- **Charte graphique orange mystique** : Noir profond (#0D0D0F), Orange principal (#F26A2E), Or (#F2B441)
- **Ambiance grimoire numérique** : Interface sombre, lueurs subtiles, bordures dorées discrètes
- **Animations fluides** : Transitions douces, hover states élégants, pas d'excès
- **100% Responsive** : Mobile-first design, parfait sur tous les appareils

### 2. Profils utilisateurs mockés
Testez le prototype avec 4 profils différents via le sélecteur de profil :

**Visiteur** - Accès en lecture seule
- Voit le catalogue complet et les fiches jeux/livres
- Ne peut pas lire les contenus
- Voit des CTA pour activer l'essai gratuit

**Abonné Joueur** - Accès limité
- Peut lire les "Aides de joueurs"
- Voit les fiches "Secrets" et "Scénarios" mais ne peut pas les lire
- Invite à passer à l'abonnement MJ

**Abonné Maître du Jeu** - Accès complet
- Peut lire tous les contenus : Aides, Secrets, Scénarios
- Expérience complète de préparation de partie
- Accès à la bibliothèque personnelle

**Éditeur/Ayant droit** - Dashboard spécialisé
- Accès à un dashboard professionnel avec statistiques
- Visualisation du temps de lecture de ses contenus
- Comparaisons YoY (Année sur Année)
- Répartition par jeu, livre, catégorie
- Prorata estimé de reversement basé sur le temps de lecture

### 3. Catégories de livres (3 catégories fonctionnelles)
- **Aides de joueurs** : Accessibles aux Joueurs et MJ
- **Secrets** : Réservés aux Maîtres du Jeu
- **Scénarios** : Réservés aux Maîtres du Jeu

### 4. Pages principales

#### Landing Page
- Hero immersif avec call-to-action
- Présentation des bénéfices par profil (Joueur, MJ, Éditeur)
- Catalogue de jeux de rôle populaires
- SEO-friendly avec contenu riche et mots-clés naturels

#### Catalogue & Jeux
- **Vue Livres** : Filtres par univers, catégorie, recherche
- **Vue Jeux** : Cartes de jeux avec statistiques (lecteurs, tendance, nombre de livres)
- Navigation fluide entre jeux et leurs livres associés

#### Fiches de détail
- **Fiches jeux** : Univers, description SEO-riche, stats, livres associés
- **Fiches livres** : Cover, description, sommaire, pourquoi lire, tags, boutons d'accès adapté

#### Lecteur mocké
- Interface de lecture confortable
- Navigation par chapitre
- Contrôles de taille de texte
- Barre de progression
- Accès verrouillé avec message clair selon le profil

#### Bibliothèque personnelle
- Recherche et filtres
- Onglets : Tous, En cours, Favoris, par catégorie
- Progression de lecture visible
- Réservée aux abonnés

#### Home connectée
- Accueil personnalisé selon le profil
- Stats de lecture
- Recommandations et tendances
- CTA approprié au statut d'abonnement

#### Page Offres/Pricing
- Comparaison claire des 3 offres
- Essai gratuit (7j)
- Abonnement Joueur (9,99€/mois)
- Abonnement MJ (19,99€/mois)
- Tableau comparatif des accès
- FAQ informative

#### Dashboard Éditeur/Ayant droit
- KPI cards : Temps de lecture, part relative, lecteurs, prorata
- Graphiques : Évolution mensuelle, répartition par catégorie
- Comparaisons : M-1, T-1, N-1
- Tableau détaillé par livre avec tendances
- Interface professionnelle mais cohérente avec la charte

#### Pages secondaires
- Tendances & Nouveautés
- Compte utilisateur
- Paramètres

## Données mockées

### Jeux disponibles
- Donjons & Dragons 5e
- L'Appel de Cthulhu
- Pathfinder 2e
- Vampire : L'Âge des Ténèbres
- Cyberpunk RED
- Warhammer Fantasy Roleplay

### Univers représentés
Fantasy, Horreur, Science-fiction, Cyberpunk, Post-apocalyptique, Médiéval, Contemporain, Enquête, Occulte, Super-héros, Mythes, Aventure

### Livres
~10 livres avec détails complets :
- Titre et auteur
- Description courte et longue
- Sommaire détaillé
- Catégorie (Aides, Secrets, Scénarios)
- Tags et univers
- Temps de lecture estimé
- Couvertures placeholder (images Pexels)

### Éditeurs/Ayants droit
- Dashboard avec données complètes
- Statistiques de lecture détaillées
- Comparaisons temporelles réalistes

## Architecture

### Stack technologique
- **Frontend** : React 18.3 + TypeScript
- **Routage** : React Router v6
- **Styling** : Tailwind CSS 3.4 avec config personnalisée
- **Graphiques** : Recharts (pour le dashboard)
- **Icônes** : Lucide React
- **Build** : Vite 5.4
- **Gestion d'état** : Context API (UserContext pour les profils)

### Structure des fichiers
```
src/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── BookCard.tsx
│   ├── GameCard.tsx
│   ├── AccessBadge.tsx
│   └── ProfileSwitcher.tsx
├── context/
│   └── UserContext.tsx
├── data/
│   └── mockData.ts
├── pages/
│   ├── Landing.tsx
│   ├── Home.tsx
│   ├── Catalog.tsx
│   ├── BookDetail.tsx
│   ├── GameDetail.tsx
│   ├── Reader.tsx
│   ├── Library.tsx
│   ├── Pricing.tsx
│   ├── Dashboard.tsx
│   ├── Account.tsx
│   ├── Trends.tsx
│   └── New.tsx
├── App.tsx
├── main.tsx
└── index.css
```

### Données mockées (mockData.ts)
- `games` : Array de 6 jeux avec stats détaillées
- `books` : Array de 10 livres avec descriptions complètes
- `mockProfiles` : 4 profils utilisateur testables
- `publisherData` : Éditeurs avec droits d'accès
- `publisherReadingStats` : Statistiques complètes pour dashboard

## Fonctionnalités démontrées

### Gestion des droits d'accès
✅ Système cohérent de contrôle d'accès par profil
✅ Vérrouillage intelligent des contenus
✅ CTA contextuels (essai, upgrade, déblocage)
✅ Messages clairs expliquant les restrictions

### Logique métier
✅ Modèle d'abonnement clair et progressif
✅ Rémunération basée sur le temps de lecture (dashboard)
✅ Statistiques réalistes et comparables
✅ Profils éditeurs avec données de leurs propres contenus

### UX/Design
✅ Navigation fluide et intuitive
✅ Recherche et filtres efficaces
✅ Charte graphique cohérente et premium
✅ Responsive mobile-first
✅ Animations et micro-interactions subtiles

### SEO & Contenu
✅ Landing page avec H1 et H2 structurés
✅ Descriptions riches avec mots-clés JDR naturels
✅ Fiches jeux et livres indexables
✅ Contenu sémantique sur tous les univers

## Comment utiliser le prototype

### 1. Démarrer
```bash
npm install
npm run dev
```

### 2. Tester les profils
Cliquez sur **"Changer de profil"** en haut à droite pour passer entre :
- Explorateur (Visiteur)
- Aventurier Valentin (Joueur)
- Maître Élodie (MJ)
- Éditions D&D Premium (Éditeur)

### 3. Parcourir
- **Landing** (/) : Découvrez la promesse produit
- **Catalogue** (/catalog) : Explorez jeux et livres
- **Fiches** (/book/*, /game/*) : Accédez aux détails
- **Lecteur** (/reader/*) : Essayez la lecture mockée
- **Bibliothèque** (/library) : Pour les abonnés
- **Dashboard** (/dashboard) : Profil éditeur
- **Pricing** (/pricing) : Comparez les offres

### 4. Observer les variations
Chaque profil voit l'app différemment :
- **Visiteur** : Catalogue + CTA essai
- **Joueur** : Aides de joueurs + invitation MJ
- **MJ** : Accès complet
- **Éditeur** : Dashboard spécialisé

## Points forts du prototype

### Investisseurs apprécieront
1. **Vision claire** : Une plateforme spécialisée JDR avec unicité
2. **Modèle économique** : Abonnement + rémunération au prorata du temps
3. **Données exploitables** : Dashboard éditeur démontre la capacité à mesurer la consommation
4. **UX premium** : Design soigné donnant confiance
5. **Complétude** : Landing, catalogue, contenu, lecteur, facturation, analytics
6. **Viabilité technique** : Stack moderne, scalable
7. **Segmentation** : 3 profils clients distincts avec valeurs claires

### Pourquoi JDRscroll réussit
- Niche dédiée (JDR) = passion + monétisation
- Contenus réutilisables = marge intéressante
- Éditeurs motivés = croissance organique du catalogue
- Lectures longues = données de consommation précises
- Multi-profils = capture de plusieurs segments

## Prochaines étapes (post-MVP)
- Authentification réelle (Supabase Auth)
- Base de données Supabase
- Paiement Stripe
- Lecture PDF réelle
- Notifications utilisateurs
- Recommandations ML
- Analytics avancée
- Mobile app native

---

**Prototype créé pour démonstration investisseurs**
**Mai 2026 - Entièrement mocké, prêt pour présentation**
