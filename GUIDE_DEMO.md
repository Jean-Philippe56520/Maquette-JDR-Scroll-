# Guide Démonstration JDRscroll MVP

## Présentation en 5 minutes

### 🎯 Objectif produit
**JDRscroll** = Netflix des jeux de rôle

Une plateforme d'abonnement spécialisée permettant aux joueurs, maîtres du jeu et éditeurs de :
- Découvrir et lire des contenus JDR (guides, scénarios, ressources)
- Rémunérer les créateurs au prorata du temps de lecture
- Monétiser le catalogue de contenu déjà existant

### 💰 Modèle économique
- **Utilisateurs** : Abonnements Joueur (9,99€) et MJ (19,99€)
- **Éditeurs** : Rémunération % = leur temps de lecture / total temps de lecture
- **Avantage** : Alignement des intérêts (plus on lit, plus on gagne)

---

## Scénario de démonstration

### ⏱️ Timeline recommandée : 7-10 minutes

### **1. Landing Page (1 min)**
📍 Allez à : `/`

**À montrer :**
- Hero immersif avec tagline "La bibliothèque infinie de mondes à explorer"
- Valeur proposée pour 3 segments : Joueurs, MJ, Éditeurs
- Design premium (orange + noir sombre)
- CTA "Activer mon essai gratuit"

**Talking points :**
- "Immédiatement, on comprend qu'on n'est pas sur un outil générique"
- "Ambiance fantasy/grimoire numérique vs. interface SaaS froide"
- "3 USP clairs pour 3 segments de marché"

---

### **2. Changement de profil (20 sec)**
📍 Cliquez sur **"Changer de profil"** (en haut à droite)

**À montrer :**
- 4 profils testables en un clic
- Description simple pour chaque profil
- C'est un prototype investisseur, profils mockés

**Talking points :**
- "Chaque utilisateur voit une expérience différente"
- "Même pour les investisseurs, on peut tester chaque segment"

---

### **3. Profil Visiteur → Catalogue (1,5 min)**
📍 Sélectionnez **"Explorateur"** → allez à `/catalog`

**À montrer :**
- Vue Livres : 10 livres avec couvertures, tags, popularité
- Filtres : Univers, Catégorie, Recherche
- Boutons "verrouillés" pour les visiteurs
- CTA "Activer mon essai gratuit" sous chaque livre

**Cliquez sur Vue "Jeux"**
- 6 jeux de rôle populaires
- Cartes synthétiques : nom, univers, nombre de livres, tendance

**Talking points :**
- "Le visiteur voit tout le catalogue mais n'accède pas à la lecture"
- "On capture l'intérêt AVANT de demander l'argent"
- "Catalogue diversifié : D&D, Cthulhu, Pathfinder, Vampire, Cyberpunk..."

---

### **4. Fiche détail livre (2 min)**
📍 Cliquez sur un livre (ex: "Guide des Joueurs pour Débuter")

**À montrer :**
- Cover et métadonnées (auteur, éditeur, univers)
- Description longue et richement formatée
- Sommaire détaillé
- Tags pertinents
- Temps de lecture
- CTA verrouillé pour visiteurs

**Talking points :**
- "Contenu SEO-rich, indexable pour Google"
- "Fiches produit professionnelles"
- "Information complète AVANT abonnement"

---

### **5. Switch Profil → Joueur (20 sec)**
📍 Changez en **"Aventurier Valentin"** (Abonné Joueur)

**À montrer :**
- Accès aux "Aides de joueurs" débloqué
- Bouton "Commencer la lecture" devient cliquable
- Les "Secrets" et "Scénarios" restent verrouillés
- Badge "Réservé MJ" visible

**Talking points :**
- "Le joueur a accès à un segment du catalogue"
- "Suffisant pour être utile, insuffisant pour accéder à tout"
- "Invitation naturelle à upgrader en MJ"

---

### **6. Lecteur mocké (1 min)**
📍 Cliquez sur un livre accessible → **"Commencer la lecture"**

**À montrer :**
- Interface de lecture confortable
- Chapitre actuel dans le header
- Boutons Précédent/Suivant
- Contrôles de taille de texte (A- / A+)
- Barre de progression
- Mockup de contenu du livre

**Talking points :**
- "UX de lecture premium"
- "Mockup pour présenter l'expérience réelle"
- "Pas de PDF lourd, interface web optimisée"

---

### **7. Switch Profil → MJ (20 sec)**
📍 Changez en **"Maître Élodie"** (Abonné MJ)

📍 Allez à `/catalog` → cliquez sur "Secrets"

**À montrer :**
- "Les Secrets des Royaumes Oubliés" devient visible et lisible
- "Scénario : Le Butin du Dragon" devient visible et lisible
- Tous les contenus accessibles

**Talking points :**
- "MJ = accès complet, experience optimale pour préparer les parties"
- "Scénarios prêts à jouer, secrets du lore, ressources"

---

### **8. Pricing Page (1 min)**
📍 Allez à `/pricing`

**À montrer :**
- 3 niveaux d'offre présentés côte à côte
- "Essai gratuit" (7j) comme point d'entrée
- "Joueur" (9,99€) et "MJ" (19,99€) clairement différenciés
- Table de comparaison des accès

**Talking points :**
- "Modèle clair et transparent"
- "Pas de caché, comparaison directe"
- "Progression naturelle : essai → joueur → MJ"

---

### **9. Dashboard Éditeur (2,5 min)**
📍 Changez en **"Éditions D&D Premium"** → allez à `/dashboard`

**À montrer :**

**KPI Cards (haut de page):**
- Temps de lecture total : 98.5k min (~ 1640h)
- Part relative : 14.2% du total plateforme
- Lecteurs actifs : 2450
- Prorata estimé : 7.8%

**Graphiques:**
- Évolution mensuelle sur 12 mois (line chart)
- Répartition par catégorie (pie chart)

**Tableau détaillé:**
- Jeu | Livre | Catégorie | Temps lu | Var M-1 | Lecteurs | Part | Prorata

**Comparaisons:**
- "Mois courant vs Mois -1" : +14.2%
- "Trimestre courant vs Trimestre -1" : +8.7%
- "Année actuelle vs Année -1" : +38.6%

**Talking points :**
- "CECI EST LA CLÉ pour les éditeurs"
- "Transparence totale sur où vient l'argent"
- "Temps de lecture = métrique fiable et objective"
- "Pas d'arbitraire, pas de black box"
- "Comparaisons temporelles pour suivi de croissance"
- "Dashboard B2B crédible et professional"

---

### **10. Home et Bibliothèque (1 min)**
📍 Allez à `/home` (MJ)

**À montrer :**
- Home personnalisée : "Bienvenue Maître Élodie"
- Stats : livres en lecture, favoris, temps de lecture
- Recommandations et tendances

📍 Allez à `/library`

**À montrer :**
- Bibliothèque personnelle
- Onglets : Tous, En cours, Favoris
- Recherche et filtres
- Progression de lecture visible

**Talking points :**
- "Expérience utilisateur fluide"
- "Chaque utilisateur a son espace personnalisé"

---

## Points clés à souligner lors de la démo

### Pour les investisseurs tech

| Aspect | Point clé |
|--------|-----------|
| **Stack** | React + TS + Tailwind + Vite = moderne, scalable, maintenable |
| **Architecture** | Composants réutilisables, Context API, routing propre |
| **Data** | Mockée mais réaliste, prête pour Supabase |
| **UX** | Premium, responsive, performant |
| **SEO** | Landing et fiches indexables pour croissance organique |

### Pour les investisseurs business

| Aspect | Point clé |
|--------|-----------|
| **Marché** | JDR = niche + passion = vraie traction |
| **CAC** | Contenu SEO gratuit = acquisition organique |
| **LTV** | Abonnements résurrents + rémunération éditeurs |
| **Network** | Plus de contenu = plus d'utilisateurs = plus de revenus |
| **Moat** | Bibliothèque = avantage cumulatif |
| **Modèle** | Revenue share avec éditeurs = croissance accélérée |

### Pour les utilisateurs potentiels

| Profil | Value |
|--------|-------|
| **Joueur** | Guides, aide de jeu, ressources pour s'améliorer |
| **MJ** | Scénarios prêts à jouer, secrets lore, préparation facile |
| **Éditeur** | Monétisation juste, audience large, royalties transparentes |

---

## Variantes de présentation

### Pour pitch court (3-5 min)
1. Landing page
2. Changement profil
3. Catalogue (jeux + livres)
4. Pricing
5. Dashboard éditeur

### Pour pitch long (15 min avec Q&A)
1. Tous les points ci-dessus
2. Détail des 3 fiches (jeu, livre, scénario)
3. Lecteur
4. Home & Bibliothèque
5. Questions sur la monetization, la croissance, le timing

### Pour partenaires éditeurs
1. Pricing
2. Dashboard (focus sur analytics)
3. Modèle de rémunération
4. Visibilité du catalogue

---

## Réponses aux questions courantes

**Q: "Qui va créer le contenu ?"**
A: Les éditeurs existants du JDR (Wizards of the Coast, Chaosium, Paizo, etc). Ils rémunérisent du contenu déjà créé. Win-win.

**Q: "Comment on compense pour Supabase/serveurs ?"**
A: À l'échelle, très faible (15-20% des revenus). SaaS standard.

**Q: "Pourquoi pas une appli mobile d'abord ?"**
A: Web d'abord = accès rapide, cross-platform. Mobile native = phase 2.

**Q: "Quel est le TAM (Total Addressable Market) ?"**
A: 20M+ joueurs JDR en France, EU, US. TAM = +$500M globalement.

**Q: "Comment on différencie de Kindle/Scribd ?"**
A: Niche JDR + éditeurs rémunérés équitablement + communauté dédiée.

---

## Résumé pour emporter

✅ **Produit** : Plateforme d'abonnement JDR premium avec dashboard éditeur  
✅ **Design** : Orange mystique, immersif, professionnel  
✅ **Technique** : Stack moderne, prêt pour production  
✅ **Business** : 3 segments, modèle clair, rémunération équitable  
✅ **Démo** : Testez 4 profils différents, accès aux contenus verrouillés  
✅ **Ambition** : Devenir le Netflix du JDR avec une communauté de créateurs

---

**Bon pitch ! 🎲✨**
