# JDRscroll - MVP Complet

## 🎲 La Plateforme d'Abonnement pour les Jeux de Rôle

**Tagline :** La bibliothèque infinie de mondes à explorer

Un prototype premium complètement fonctionnel d'une plateforme d'abonnement dédiée aux contenus de jeux de rôle. Testé et prêt pour une démonstration investisseurs.

---

## 🚀 Démarrer rapidement

### Installation
```bash
npm install
npm run dev
```

L'app s'ouvre sur `http://localhost:5173`

### Build pour production
```bash
npm run build
npm run preview
```

---

## 📋 Ce qui est inclus

### 🎯 Fonctionnalités complètes

✅ **Landing page** - Hero immersif avec CTA et sections SEO  
✅ **Catalogue** - Livres + Jeux avec filtres et recherche  
✅ **Fiches détail** - Jeux et livres avec contenu riche  
✅ **Lecteur mocké** - Interface de lecture premium  
✅ **Système d'accès** - Droits par profil, vérouillage intelligent  
✅ **Bibliothèque** - Personnelle avec favoris et progression  
✅ **Dashboard Éditeur** - Statistiques complètes avec graphiques  
✅ **Pricing** - 3 offres claires (essai, joueur, MJ)  
✅ **Compte utilisateur** - Profil et paramètres  
✅ **Tendances & Nouveautés** - Pages actualisées

### 👥 4 Profils testables

**Explorateur (Visiteur)**  
- Voit tout, n'accède à rien
- Voit les CTA d'essai gratuit

**Aventurier Valentin (Joueur)**  
- Accès Aides de joueurs
- Voir mais pas lire Secrets & Scénarios
- Invitation à upgrader MJ

**Maître Élodie (MJ)**  
- Accès complet : Aides, Secrets, Scénarios
- Expérience optimale pour préparer les parties

**Éditions D&D Premium (Éditeur)**  
- Dashboard professionnel complet
- Statistiques détaillées de temps de lecture
- Comparaisons temporelles (M-1, T-1, N-1)
- Prorata estimé de reversement

### 📚 Catalogue complet

**6 Jeux de rôle populaires :**
- Donjons & Dragons 5e
- L'Appel de Cthulhu
- Pathfinder 2e
- Vampire : L'Âge des Ténèbres
- Cyberpunk RED
- Warhammer Fantasy Roleplay

**10+ Livres** avec :
- Couvertures placeholder (images Pexels)
- Descriptions courtes et longues
- Sommaires détaillés
- 3 catégories : Aides de joueurs, Secrets, Scénarios
- Tags, univers, temps de lecture estimé
- Popularité et tendances

**12 Univers :**  
Fantasy, Horreur, Science-fiction, Cyberpunk, Post-apocalyptique, Médiéval, Contemporain, Enquête, Occulte, Super-héros, Mythes, Aventure

### 🎨 Design premium

**Palette orange mystique :**
- Noir profond : #0D0D0F
- Orange principal : #F26A2E
- Or doré : #F2B441
- Cuivre : #B87333
- Ivoire : #F4F1E8

**Ambiance grimoire numérique :**
- Interface sombre et accueillante
- Lueurs subtiles et bordures dorées discrètes
- Cartes élégantes avec hover states
- Animations fluides et micro-interactions
- 100% responsive (mobile-first)

### 📊 Dashboard Éditeur

**KPIs en temps réel :**
- Temps de lecture total
- Part relative de mes contenus
- Lecteurs actifs
- Prorata estimé de reversement

**Graphiques :**
- Évolution mensuelle (12 mois)
- Répartition par catégorie (pie chart)
- Comparaisons YoY (année sur année)

**Tableau détaillé :**
- Par jeu, livre, catégorie
- Temps de lecture vs variations temporelles
- Tendances positives/négatives

---

## 🏗️ Architecture

### Stack technologique
- **Frontend** : React 18.3 + TypeScript
- **Routage** : React Router v6
- **Styling** : Tailwind CSS 3.4
- **Graphiques** : Recharts 2.12
- **Icônes** : Lucide React
- **Build** : Vite 5.4
- **État** : Context API

### Structure des fichiers
```
src/
├── components/          # Composants réutilisables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── BookCard.tsx      # Carte livre
│   ├── GameCard.tsx      # Carte jeu
│   ├── AccessBadge.tsx   # Badge d'accès
│   └── ProfileSwitcher.tsx
├── context/
│   └── UserContext.tsx   # Gestion profils
├── data/
│   └── mockData.ts       # Données mockées complètes
├── pages/               # Pages principales
│   ├── Landing.tsx      # Page d'accueil
│   ├── Home.tsx         # Accueil connectée
│   ├── Catalog.tsx      # Catalogue (livres + jeux)
│   ├── BookDetail.tsx   # Fiche livre
│   ├── GameDetail.tsx   # Fiche jeu
│   ├── Reader.tsx       # Lecteur mocké
│   ├── Library.tsx      # Bibliothèque personnelle
│   ├── Pricing.tsx      # Offres d'abonnement
│   ├── Dashboard.tsx    # Dashboard éditeur
│   ├── Account.tsx      # Compte utilisateur
│   ├── Trends.tsx       # Tendances
│   └── New.tsx          # Nouveautés
├── App.tsx              # Router principal
├── main.tsx
└── index.css            # Styles globaux
```

### Données mockées (`src/data/mockData.ts`)

**Interfaces principales :**
- `Game` : Jeu de rôle avec stats
- `Book` : Livre avec métadonnées complètes
- `User` : Profil utilisateur (4 types)
- `Publisher` : Éditeur avec droits
- `ReadingStats` : Statistiques de lecture

**Données fournies :**
- 6 jeux avec descriptions et stats
- 10 livres avec contenu riche
- 4 profils testables
- 2 éditeurs avec données complètes
- Statistiques mensuelles, trimestrielles, annuelles

---

## 🔐 Système d'accès

### Règles d'accès par profil

| Contenu | Visiteur | Joueur | MJ | Éditeur |
|---------|----------|--------|----|---------| 
| Voir catalogue | ✅ | ✅ | ✅ | ✅ |
| Voir fiches jeux | ✅ | ✅ | ✅ | ✅ |
| Voir fiches livres | ✅ | ✅ | ✅ | ✅ |
| Lire Aides joueurs | ❌ | ✅ | ✅ | ✅ |
| Lire Secrets | ❌ | ❌ | ✅ | ✅ |
| Lire Scénarios | ❌ | ❌ | ✅ | ✅ |
| Bibliothèque perso | ❌ | ✅ | ✅ | ✅ |
| Dashboard stats | ❌ | ❌ | ❌ | ✅ |

### Composants d'accès
- `AccessBadge` : Affiche l'accès ou le verrou
- `ProfileSwitcher` : Change de profil en un clic
- Logique de verrouillage dans chaque page de lecteur

---

## 🛣️ Routes disponibles

| Route | Décription |
|-------|-----------|
| `/` | Landing page publique |
| `/home` | Accueil connectée (personnalisée par profil) |
| `/catalog` | Catalogue (Livres + Jeux) |
| `/book/:bookId` | Fiche détail livre |
| `/game/:gameId` | Fiche détail jeu |
| `/reader/:bookId` | Lecteur mocké |
| `/library` | Bibliothèque personnelle |
| `/pricing` | Offres d'abonnement |
| `/dashboard` | Dashboard éditeur |
| `/account` | Compte utilisateur |
| `/trends` | Tendances |
| `/new` | Nouveautés |

---

## 🎬 Guide démonstration

### Pour un pitch court (5 min)
1. **Landing** (/) - Vision produit
2. **Profil Visiteur + Catalogue** - Découverte
3. **Profil Joueur** - Accès limité
4. **Profil MJ** - Accès complet
5. **Dashboard** - Modèle économique
6. **Pricing** - Monétisation claire

### Pour un pitch long (15 min)
Ajoutez :
- Fiches détail (jeu + livre)
- Lecteur mocké
- Home connectée
- Bibliothèque
- Tendances/Nouveautés
- Questions & réponses

### Changement rapide de profil
Cliquez sur **"Changer de profil"** en haut à droite pour tester immédiatement chaque expérience utilisateur.

---

## 📱 Responsive design

✅ **Mobile** (320px - 640px) - Navigation en bas, grilles 1 colonne  
✅ **Tablet** (640px - 1024px) - Grilles 2 colonnes  
✅ **Desktop** (1024px+) - Grilles 4 colonnes, sidebar optionnel  

Testé et optimisé pour tous les appareils.

---

## 🔍 SEO

✅ Landing page avec H1 et H2 structurés  
✅ Fiches jeux et livres avec contenu riche et indexable  
✅ Mots-clés JDR intégrés naturellement  
✅ Meta descriptions pertinentes  
✅ Structure sémantique propre  

---

## 📊 Données réalistes

Tous les nombres et statistiques sont :
- Crédibles pour le TAM JDR
- Cohérents entre les pages
- Réalistes pour démonstration

Exemples :
- 2450 lecteurs actifs D&D
- 12 480 min de lecture mensuel
- 14.2% part de marché pour l'éditeur principal
- Trending up +22% M/M

---

## 🚀 Prochaines étapes (post-MVP)

### Court terme (v1.0)
- Authentification Supabase
- Base de données réelle
- Paiement Stripe
- Notifications utilisateurs

### Moyen terme (v2.0)
- Lecture PDF réelle
- Système de recommandations
- Communauté & forums
- Mobile app native

### Long terme (v3.0)
- Analytics avancée
- API publique pour éditeurs
- Intégrations tiers
- Partenariats stratégiques

---

## 💡 Points forts pour les investisseurs

### 🎯 Produit
- Niche précis (JDR) vs. général
- Valeur claire pour 3 segments
- Modèle économique transparent

### 📈 Business
- TAM : 20M+ joueurs JDR
- Revenue : Abonnements + % éditeurs
- Moat : Bibliothèque de contenu

### 👨‍💻 Tech
- Stack moderne et scalable
- Code propre et maintenable
- Prêt pour Supabase + Stripe

### 🎨 Design
- Premium et immersif
- Différenciation visuelle forte
- UX fluide et intuitive

---

## 📝 Documentation

- `PROTOTYPE.md` - Vue d'ensemble complète du prototype
- `GUIDE_DEMO.md` - Scénario de démonstration détaillé (7-10 min)
- `README_MVP.md` - Ce fichier

---

## 🙋 Questions fréquentes

**Q: Les données sont-elles réelles ?**  
A: Non, tout est mocké. Prêt pour intégration Supabase en v1.0.

**Q: Peut-on tester la lecture PDF ?**  
A: Non, lecteur mockup seulement. PDFs réels en v1.0.

**Q: Comment changer de profil ?**  
A: Cliquez "Changer de profil" en haut à droite.

**Q: Ça marchera sur mobile ?**  
A: Oui, 100% responsive. Testé sur tous les appareils.

**Q: Peut-on payer réellement ?**  
A: Non, paiement Stripe non intégré. Mockup seulement.

---

## 📄 Licence

Prototype interne pour démonstration. Droits réservés.

---

## 👨‍💼 Crédits

**MVP créé pour :** Démonstration investisseurs  
**Date :** Mai 2026  
**État :** Complet et testé  
**Prochaine étape :** Validation produit-marché

---

**Prêt à explorer des mondes infinis ? 🎲✨**

Visitez `/` pour commencer, puis changez de profil pour tester chaque expérience utilisateur.
