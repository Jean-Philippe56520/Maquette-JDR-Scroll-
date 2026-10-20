export type UserRole = "visitor" | "player" | "gm" | "publisher";

export interface User {
  id: string;
  name: string;
  role: UserRole;
  plan?: "free_trial" | "player" | "gm";
  email?: string;
  birthYear?: string;
  phone?: string;
  region?: string;
}

export type BookCategory = "Aides de jeu" | "Secrets" | "Scénarios";

export interface Game {
  id: string;
  name: string;
  publisher: string;
  publisherId: string;
  universe: string;
  description: string;
  longDescription: string;
  tags: string[];
  mood: string;
  difficulty: "Débutant" | "Intermédiaire" | "Expert";
  playerCount: string;
  cover: string;
  bookCount: number;
  activeReaders: number;
  totalReadingTime: number;
  trend: number;
}

export interface Book {
  id: string;
  title: string;
  gameId: string;
  gameName: string;
  publisher: string;
  author: string;
  category: BookCategory;
  requiredPlan: "free" | "player" | "gm";
  universe: string;
  tags: string[];
  shortDescription: string;
  longDescription: string;
  whyRead: string;
  contents: string[];
  readingTime: number; // en minutes
  pageCount: number;
  releaseYear: number;
  cover: string;
  popularityScore: number;
  isTrending: boolean;
  isNew: boolean;
  progress: number; // 0-100
  lastAccessed?: Date;
}

export interface Publisher {
  id: string;
  name: string;
  slug: string;
  logo: string;
  cover: string;
  website: string;
  country: string;
  foundedYear: number;
  description: string;
  longDescription: string;
  specialties: string[];
  ownedGameIds: string[];
  ownedBookIds: string[];
  activeReaders: number;
  totalBooks: number;
}

export interface Universe {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroDescription: string;
  editorialTitle: string;
  editorialDescription: string;
}

export const universes: Universe[] = [
  {
    id: "fantasy",
    slug: "fantasy",
    name: "Fantasy",
    shortDescription:
      "Quêtes épiques, magie, donjons, tactique et grands récits d'aventure.",
    seoTitle: "Jeux de rôle Fantasy | JDRscroll",
    seoDescription:
      "Explorez les jeux de rôle fantasy disponibles sur JDRscroll : grandes aventures, campagnes épiques, aides de jeu et ressources pour maîtres du jeu.",
    heroTitle: "Jeux de rôle Fantasy",
    heroDescription:
      "Retrouvez les univers de magie, de royaumes anciens, de héros imparfaits et de campagnes épiques. Une porte d'entrée idéale pour découvrir ou approfondir les grands classiques du jeu de rôle.",
    editorialTitle: "Pourquoi explorer la Fantasy ?",
    editorialDescription:
      "La fantasy concentre les expériences les plus accessibles du jeu de rôle : progression de personnages, exploration, combats tactiques, lore abondant et scénarios immédiatement jouables.",
  },
  {
    id: "horreur",
    slug: "horreur",
    name: "Horreur",
    shortDescription:
      "Enquêtes inquiétantes, tension psychologique et menaces cosmiques.",
    seoTitle: "Jeux de rôle Horreur | JDRscroll",
    seoDescription:
      "Découvrez les jeux de rôle d'horreur sur JDRscroll : enquêtes, mystères, horreur cosmique, scénarios sombres et ressources pour créer la tension à table.",
    heroTitle: "Jeux de rôle Horreur",
    heroDescription:
      "Plongez dans des récits d'enquête, de peur lente et de révélations impossibles. Un univers pensé pour les joueurs qui recherchent l'ambiance, la tension et les conséquences narratives.",
    editorialTitle: "Une expérience centrée sur la tension",
    editorialDescription:
      "Les jeux d'horreur privilégient l'atmosphère, l'investigation et la montée progressive du danger. Ils conviennent aux tables qui aiment le doute, les indices et les choix difficiles.",
  },
  {
    id: "occulte",
    slug: "occulte",
    name: "Occulte",
    shortDescription:
      "Intrigues sombres, surnaturel, politique et récits urbains matures.",
    seoTitle: "Jeux de rôle Occulte | JDRscroll",
    seoDescription:
      "Explorez les jeux de rôle occultes et gothiques sur JDRscroll : intrigues politiques, surnaturel, clans, secrets et narration urbaine.",
    heroTitle: "Jeux de rôle Occulte",
    heroDescription:
      "Entrez dans des mondes où les pouvoirs cachés, les sociétés secrètes et les dilemmes moraux dictent le rythme des histoires.",
    editorialTitle: "Des récits plus politiques et introspectifs",
    editorialDescription:
      "L'occulte s'adresse aux tables qui aiment les personnages complexes, les alliances fragiles, la manipulation et les conflits internes.",
  },
  {
    id: "cyberpunk",
    slug: "cyberpunk",
    name: "Cyberpunk",
    shortDescription:
      "Futurs dystopiques, mégacorporations, hacking, action et technologie.",
    seoTitle: "Jeux de rôle Cyberpunk | JDRscroll",
    seoDescription:
      "Parcourez les jeux de rôle cyberpunk disponibles sur JDRscroll : univers dystopiques, hacking, mercenaires, mégacorporations et action urbaine.",
    heroTitle: "Jeux de rôle Cyberpunk",
    heroDescription:
      "Explorez des futurs brutaux où la technologie amplifie les inégalités, les conflits et les possibilités d'action.",
    editorialTitle: "Un focus sur l'action et le système",
    editorialDescription:
      "Le cyberpunk combine rythme rapide, équipement, infiltration, piratage et critique sociale. C'est un univers adapté aux tables qui veulent des objectifs clairs et une forte identité visuelle.",
  },
  {
    id: "medieval",
    slug: "medieval",
    name: "Médiéval",
    shortDescription:
      "Mondes rudes, conflits féodaux, danger permanent et dark fantasy.",
    seoTitle: "Jeux de rôle Médiéval | JDRscroll",
    seoDescription:
      "Découvrez les jeux de rôle médiévaux et dark fantasy sur JDRscroll : aventures dangereuses, conflits de pouvoir, survie et atmosphères sombres.",
    heroTitle: "Jeux de rôle Médiéval",
    heroDescription:
      "Retrouvez des mondes plus durs, plus dangereux, où les choix ont un prix et où l'héroïsme se gagne rarement sans cicatrices.",
    editorialTitle: "Une fantasy plus rude et plus concrète",
    editorialDescription:
      "Le médiéval sombre attire les joueurs qui veulent des campagnes périlleuses, un ton plus réaliste et des personnages confrontés à des dilemmes de survie.",
  },
  {
    id: "science-fiction",
    slug: "science-fiction",
    name: "Science-fiction",
    shortDescription:
      "Exploration spatiale, civilisations lointaines, IA, diplomatie et conflits stellaires.",
    seoTitle: "Jeux de rôle Science-fiction | JDRscroll",
    seoDescription:
      "Explorez les jeux de rôle de science-fiction sur JDRscroll : space opera, exploration spatiale, IA, colonies, diplomatie et conflits interstellaires.",
    heroTitle: "Jeux de rôle Science-fiction",
    heroDescription:
      "Partez vers les frontières de l'espace, les mégastructures oubliées, les civilisations inconnues et les dilemmes technologiques qui changent le destin des mondes.",
    editorialTitle: "Imaginer le futur par le jeu",
    editorialDescription:
      "La science-fiction permet de tester des campagnes d'exploration, de diplomatie, de survie en milieu hostile ou de conflits entre factions technologiques.",
  },
  {
    id: "post-apocalyptique",
    slug: "post-apocalyptique",
    name: "Post-apocalyptique",
    shortDescription:
      "Survie, communautés fragiles, ruines, ressources rares et reconstruction.",
    seoTitle: "Jeux de rôle Post-apocalyptiques | JDRscroll",
    seoDescription:
      "Découvrez les jeux de rôle post-apocalyptiques sur JDRscroll : survie, communautés, ruines, exploration et reconstruction après la chute du monde.",
    heroTitle: "Jeux de rôle Post-apocalyptiques",
    heroDescription:
      "Explorez des mondes brisés où chaque ressource compte, où les communautés doivent choisir entre survie immédiate et reconstruction durable.",
    editorialTitle: "Des récits de survie et de choix difficiles",
    editorialDescription:
      "Le post-apocalyptique met les joueurs face à la rareté, aux dilemmes moraux, à la gestion de groupe et à la création d'un nouvel ordre social.",
  },
  {
    id: "super-heros",
    slug: "super-heros",
    name: "Super-héros",
    shortDescription:
      "Identités secrètes, pouvoirs, responsabilités, équipes et menaces spectaculaires.",
    seoTitle: "Jeux de rôle Super-héros | JDRscroll",
    seoDescription:
      "Parcourez les jeux de rôle de super-héros sur JDRscroll : pouvoirs, équipes héroïques, dilemmes moraux, identités secrètes et menaces urbaines.",
    heroTitle: "Jeux de rôle Super-héros",
    heroDescription:
      "Incarnez des personnages puissants confrontés à des responsabilités publiques, des choix intimes et des adversaires à la hauteur de leurs pouvoirs.",
    editorialTitle: "Pouvoirs, responsabilités et drame collectif",
    editorialDescription:
      "Les jeux de super-héros mélangent action spectaculaire, conflits personnels et dynamique d'équipe. Ils conviennent aux tables qui aiment les scènes fortes et les arcs narratifs visibles.",
  },
  {
    id: "historique",
    slug: "historique",
    name: "Historique",
    shortDescription:
      "Intrigues de cour, conflits politiques, enquêtes d'époque et aventures réalistes.",
    seoTitle: "Jeux de rôle Historiques | JDRscroll",
    seoDescription:
      "Explorez les jeux de rôle historiques sur JDRscroll : intrigues d'époque, conflits politiques, aventures réalistes, enquêtes et reconstitutions narratives.",
    heroTitle: "Jeux de rôle Historiques",
    heroDescription:
      "Revisitez des périodes charnières à travers des personnages pris dans les tensions politiques, sociales et militaires de leur temps.",
    editorialTitle: "Le réel comme terrain d'aventure",
    editorialDescription:
      "L'historique permet de créer des campagnes plus ancrées, avec des enjeux politiques, sociaux et humains immédiatement lisibles.",
  },
];

export const publishers: Publisher[] = [
  {
    id: "pub_wotc",
    name: "Wizards of the Coast",
    slug: "wizards-of-the-coast",
    logo: "https://images.pexels.com/photos/6333840/pexels-photo-6333840.jpeg?auto=compress&cs=tinysrgb&w=200",
    cover:
      "https://images.pexels.com/photos/6333840/pexels-photo-6333840.jpeg?auto=compress&cs=tinysrgb&w=1200",
    website: "https://www.dndbeyond.com",
    country: "États-Unis",
    foundedYear: 1990,
    description:
      "L'éditeur emblématique de Donjons & Dragons, franchise JDR la plus jouée au monde.",
    longDescription:
      "Wizards of the Coast est le studio derrière Donjons & Dragons 5e, le jeu de rôle le plus populaire de la planète. Depuis 1990, ils façonnent l'imaginaire fantasy avec des règles accessibles, un lore immense et une communauté mondiale de millions de joueurs. Leurs ouvrages sur JDRscroll couvrent tout le spectre : aides de jeu, secrets de MJ, campagnes complètes.",
    specialties: [
      "Fantasy heroïque",
      "Accessible",
      "Communauté mondiale",
      "Lore profond",
    ],
    ownedGameIds: ["dd5"],
    ownedBookIds: [
      "dnd-players-guide",
      "dnd-combat-tactics",
      "dnd-secrets-forgotten-realms",
      "dnd-scenario-dragon-heist",
    ],
    activeReaders: 2450,
    totalBooks: 4,
  },
  {
    id: "pub_chaosium",
    name: "Chaosium",
    slug: "chaosium",
    logo: "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=200",
    cover:
      "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1200",
    website: "https://www.chaosium.com",
    country: "États-Unis",
    foundedYear: 1975,
    description:
      "Pionniers du jeu de rôle, créateurs de l'Appel de Cthulhu et de l'univers lovecraftien.",
    longDescription:
      "Fondé en 1975, Chaosium est l'un des plus anciens éditeurs de jeux de rôle au monde. Leur chef-d'œuvre, L'Appel de Cthulhu, est une référence absolue du jeu d'enquête et d'horreur cosmique. Avec leur système BRP (Basic Role-Playing), ils ont influencé toute une génération de game designers. Leurs contenus sur JDRscroll plongent joueurs et maîtres du jeu dans les ténèbres de l'univers lovecraftien.",
    specialties: ["Horreur cosmique", "Enquête", "Système BRP", "Narratif"],
    ownedGameIds: ["cthulhu"],
    ownedBookIds: [
      "cthulhu-investigation-basics",
      "cthulhu-secrets-mythos",
      "cthulhu-scenario-lost-city",
    ],
    activeReaders: 1820,
    totalBooks: 3,
  },
  {
    id: "pub_renegade",
    name: "Renegade Game Studios",
    slug: "renegade-game-studios",
    logo: "https://images.pexels.com/photos/1707823/pexels-photo-1707823.jpeg?auto=compress&cs=tinysrgb&w=200",
    cover:
      "https://images.pexels.com/photos/1707823/pexels-photo-1707823.jpeg?auto=compress&cs=tinysrgb&w=1200",
    website: "https://renegadegamestudios.com",
    country: "États-Unis",
    foundedYear: 2014,
    description:
      "Éditeur moderne spécialisé dans les jeux narratifs complexes, dont Vampire : L'Âge des Ténèbres.",
    longDescription:
      "Renegade Game Studios s'est imposé comme un acteur majeur de l'édition JDR en reprenant la licence Vampire : La Mascarade et L'Âge des Ténèbres. Leur approche éditoriale privilégie les univers matures, politiquement nuancés et narrativement riches. Les contenus qu'ils publient sur JDRscroll sont conçus pour les joueurs expérimentés cherchant profondeur et immersion.",
    specialties: [
      "Narratif mature",
      "Urban fantasy",
      "Politique",
      "Complexité",
    ],
    ownedGameIds: ["vampire"],
    ownedBookIds: ["vampire-storytelling"],
    activeReaders: 945,
    totalBooks: 1,
  },
  {
    id: "pub_paizo",
    name: "Paizo",
    slug: "paizo",
    logo: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=200",
    cover:
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1200",
    website: "https://paizo.com",
    country: "États-Unis",
    foundedYear: 2002,
    description:
      "Créateurs de Pathfinder, le jeu de rôle fantasy tactique et richement détaillé.",
    longDescription:
      "Paizo a fondé Pathfinder en 2009 comme alternative tactique et plus complexe à D&D. Avec Pathfinder 2e, ils ont totalement repensé leur système pour offrir une profondeur de personnalisation inégalée. Reconnus pour leur qualité éditoriale, leurs publications sur JDRscroll permettent aux joueurs de maîtriser les arcanes d'un système riche et d'un univers foisonnant.",
    specialties: ["Tactique", "Fantasy épique", "Personnalisation", "Aventure"],
    ownedGameIds: ["pathfinder"],
    ownedBookIds: ["pathfinder-character-building"],
    activeReaders: 1650,
    totalBooks: 1,
  },
  {
    id: "pub_cdpr",
    name: "R. Talsorian Games",
    slug: "r-talsorian-games",
    logo: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=200",
    cover:
      "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1200",
    website: "https://rtalsoriangames.com",
    country: "États-Unis",
    foundedYear: 1987,
    description:
      "Créateurs originaux de Cyberpunk, l'univers dystopique qui a inspiré toute une culture.",
    longDescription:
      "R. Talsorian Games est le studio fondateur du jeu de rôle Cyberpunk, créé par Mike Pondsmith en 1988. Cyberpunk RED est la version actuelle de ce classique dystopique qui a influencé la culture populaire mondiale, notamment le jeu vidéo Cyberpunk 2077. Leurs contenus sur JDRscroll couvrent le hacking, le cyberware et les intrigues d'un futur sombre.",
    specialties: ["Science-fiction", "Cyberpunk", "Action", "Technologie"],
    ownedGameIds: ["cyberpunk"],
    ownedBookIds: ["cyberpunk-hacking"],
    activeReaders: 1320,
    totalBooks: 1,
  },
  {
    id: "pub_cubicle7",
    name: "Cubicle 7",
    slug: "cubicle-7",
    logo: "https://images.pexels.com/photos/1563177/pexels-photo-1563177.jpeg?auto=compress&cs=tinysrgb&w=200",
    cover:
      "https://images.pexels.com/photos/1563177/pexels-photo-1563177.jpeg?auto=compress&cs=tinysrgb&w=1200",
    website: "https://cubicle7games.com",
    country: "Royaume-Uni",
    foundedYear: 2005,
    description:
      "Éditeur britannique derrière Warhammer Fantasy Roleplay, maître du dark fantasy.",
    longDescription:
      "Cubicle 7 est un éditeur britannique spécialisé dans les jeux de niche exigeants. Leur travail sur Warhammer Fantasy Roleplay est salué par la communauté pour sa fidélité au lore Games Workshop et sa capacité à capturer l'atmosphère gritty et sombre du Vieux Monde. Leurs publications sur JDRscroll s'adressent aux rôlistes expérimentés qui aiment que les aventures soient dangereuses.",
    specialties: ["Dark fantasy", "Gritty", "Narratif", "Univers riche"],
    ownedGameIds: ["warhammer"],
    ownedBookIds: [],
    activeReaders: 1100,
    totalBooks: 0,
  },
  {
    id: "pub_placeholder_atlas",
    name: "Atelier Atlas Imaginaire",
    slug: "atelier-atlas-imaginaire",
    logo: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=200",
    cover:
      "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=1200",
    website: "https://example.org/atelier-atlas-imaginaire",
    country: "France",
    foundedYear: 2021,
    description:
      "Éditeur placeholder spécialisé dans les univers originaux pour tester le catalogue JDRscroll.",
    longDescription:
      "Atelier Atlas Imaginaire est un éditeur fictif utilisé pour enrichir la maquette JDRscroll avec des gammes variées, sans enjeu de droits ni contenu définitif.",
    specialties: ["Placeholder", "Univers originaux", "Tests UX", "Catalogue"],
    ownedGameIds: [
      "chroniques-astrelune",
      "royaumes-cendre",
      "couronne-fer",
      "terres-brume",
    ],
    ownedBookIds: [
      "chroniques-astrelune-guide-decouverte",
      "chroniques-astrelune-scenario-intro",
      "royaumes-cendre-guide-decouverte",
      "royaumes-cendre-scenario-intro",
      "couronne-fer-guide-decouverte",
      "couronne-fer-scenario-intro",
      "terres-brume-guide-decouverte",
      "terres-brume-scenario-intro",
    ],
    activeReaders: 860,
    totalBooks: 8,
  },
  {
    id: "pub_placeholder_orbital",
    name: "Orbital Fiction Lab",
    slug: "orbital-fiction-lab",
    logo: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=200",
    cover:
      "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=1200",
    website: "https://example.org/orbital-fiction-lab",
    country: "Belgique",
    foundedYear: 2022,
    description:
      "Studio placeholder dédié aux jeux de science-fiction et cyberpunk de la maquette.",
    longDescription:
      "Orbital Fiction Lab regroupe des gammes fictives utiles pour tester les pages univers, les filtres et les carrousels liés aux imaginaires technologiques.",
    specialties: ["Science-fiction", "Cyberpunk", "Exploration", "Technologie"],
    ownedGameIds: [
      "nebuleuse-delta",
      "frontieres-stellaires",
      "neon-district",
      "systeme-noir",
    ],
    ownedBookIds: [
      "nebuleuse-delta-guide-decouverte",
      "nebuleuse-delta-scenario-intro",
      "frontieres-stellaires-guide-decouverte",
      "frontieres-stellaires-scenario-intro",
      "neon-district-guide-decouverte",
      "neon-district-scenario-intro",
      "systeme-noir-guide-decouverte",
      "systeme-noir-scenario-intro",
    ],
    activeReaders: 720,
    totalBooks: 8,
  },
  {
    id: "pub_placeholder_nocturne",
    name: "Nocturne Studio",
    slug: "nocturne-studio",
    logo: "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=200",
    cover:
      "https://images.pexels.com/photos/2902440/pexels-photo-2902440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    website: "https://example.org/nocturne-studio",
    country: "Canada",
    foundedYear: 2020,
    description:
      "Éditeur placeholder orienté horreur, occulte et récits sombres.",
    longDescription:
      "Nocturne Studio sert à tester les contenus d'ambiance : enquêtes, maisons hantées, sociétés secrètes, pactes et conflits surnaturels.",
    specialties: ["Horreur", "Occulte", "Ambiance", "Enquête"],
    ownedGameIds: ["maison-sept-voix", "nuits-ivoire", "pactes-cendres"],
    ownedBookIds: [
      "maison-sept-voix-guide-decouverte",
      "maison-sept-voix-scenario-intro",
      "nuits-ivoire-guide-decouverte",
      "nuits-ivoire-scenario-intro",
      "pactes-cendres-guide-decouverte",
      "pactes-cendres-scenario-intro",
    ],
    activeReaders: 640,
    totalBooks: 6,
  },
  {
    id: "pub_placeholder_horizon",
    name: "Horizon Rouge Éditions",
    slug: "horizon-rouge-editions",
    logo: "https://images.pexels.com/photos/7648475/pexels-photo-7648475.jpeg?auto=compress&cs=tinysrgb&w=200",
    cover:
      "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1200",
    website: "https://example.org/horizon-rouge-editions",
    country: "France",
    foundedYear: 2019,
    description:
      "Éditeur placeholder pour les univers post-apocalyptiques, super-héroïques et historiques.",
    longDescription:
      "Horizon Rouge Éditions permet de tester les contenus transverses de JDRscroll : reconstruction, action héroïque et intrigue historique.",
    specialties: [
      "Post-apocalyptique",
      "Super-héros",
      "Historique",
      "Campagne",
    ],
    ownedGameIds: [
      "apres-orage",
      "cites-rouillees",
      "masques-metropole",
      "sentinelles-zero",
      "lames-royaume",
      "revolutions-1789",
    ],
    ownedBookIds: [
      "apres-orage-guide-decouverte",
      "apres-orage-scenario-intro",
      "cites-rouillees-guide-decouverte",
      "cites-rouillees-scenario-intro",
      "masques-metropole-guide-decouverte",
      "masques-metropole-scenario-intro",
      "sentinelles-zero-guide-decouverte",
      "sentinelles-zero-scenario-intro",
      "lames-royaume-guide-decouverte",
      "lames-royaume-scenario-intro",
      "revolutions-1789-guide-decouverte",
      "revolutions-1789-scenario-intro",
    ],
    activeReaders: 690,
    totalBooks: 12,
  },
];

export type PartnerCategory =
  | "Influenceur"
  | "Association"
  | "Média"
  | "Événement"
  | "Institution";

export interface Partner {
  id: string;
  name: string;
  slug: string;
  category: PartnerCategory;
  logo: string;
  cover: string;
  website: string;
  shortDescription: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  highlights: string[];
  audience: string;
  contribution: string;
  city?: string;
}

export const partners: Partner[] = [
  {
    id: "partner-des-rolistes",
    name: "La Table des Rôlistes",
    slug: "la-table-des-rolistes",
    category: "Association",
    logo: "https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=240",
    cover:
      "https://images.pexels.com/photos/7978802/pexels-photo-7978802.jpeg?auto=compress&cs=tinysrgb&w=1200",
    website: "https://example.org/la-table-des-rolistes",
    shortDescription:
      "Association active autour de la découverte et de la pratique du jeu de rôle.",
    description:
      "La Table des Rôlistes accompagne les nouveaux joueurs, organise des tables ouvertes et contribue à faire vivre le jeu de rôle sur le terrain. Son action renforce la transmission, l’accueil des débutants et la diversité des pratiques.",
    seoTitle: "La Table des Rôlistes — association partenaire JDRscroll",
    seoDescription:
      "Découvrez La Table des Rôlistes, association partenaire de JDRscroll engagée dans la découverte, la pratique et la transmission du jeu de rôle.",
    highlights: ["Tables ouvertes", "Initiation débutants", "Animation locale"],
    audience: "Joueurs, MJ débutants, familles et curieux",
    contribution:
      "Faire découvrir JDRscroll auprès des communautés locales et tester les parcours joueurs.",
    city: "Nantes",
  },
  {
    id: "partner-d100",
    name: "D100 Actual Play",
    slug: "d100-actual-play",
    category: "Influenceur",
    logo: "https://images.pexels.com/photos/7772201/pexels-photo-7772201.jpeg?auto=compress&cs=tinysrgb&w=240",
    cover:
      "https://images.pexels.com/photos/7772216/pexels-photo-7772216.jpeg?auto=compress&cs=tinysrgb&w=1200",
    website: "https://example.org/d100-actual-play",
    shortDescription:
      "Créateur de contenus vidéo et actual play autour des univers JDR.",
    description:
      "D100 Actual Play valorise les jeux de rôle par la vidéo, les parties commentées et les formats courts. Son approche rend les univers accessibles et donne envie de passer de la découverte à la lecture puis à la table.",
    seoTitle: "D100 Actual Play — influenceur JDR partenaire de JDRscroll",
    seoDescription:
      "Présentation de D100 Actual Play, créateur de contenu partenaire de JDRscroll autour des actual plays, critiques et découvertes JDR.",
    highlights: ["Actual play", "Découverte de jeux", "Formats vidéo"],
    audience: "Communauté YouTube, Twitch et réseaux sociaux",
    contribution:
      "Créer de la visibilité autour des contenus disponibles sur JDRscroll.",
  },
  {
    id: "partner-chroniques",
    name: "Chroniques du Dé",
    slug: "chroniques-du-de",
    category: "Média",
    logo: "https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&w=240",
    cover:
      "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1200",
    website: "https://example.org/chroniques-du-de",
    shortDescription:
      "Média spécialisé dans les critiques, interviews et dossiers sur le jeu de rôle.",
    description:
      "Chroniques du Dé couvre l’actualité du jeu de rôle, publie des dossiers de fond et met en avant les créateurs. Ce partenaire apporte un regard éditorial utile pour guider les lecteurs vers les bons jeux et les bons ouvrages.",
    seoTitle: "Chroniques du Dé — média JDR partenaire de JDRscroll",
    seoDescription:
      "Découvrez Chroniques du Dé, média partenaire de JDRscroll spécialisé dans les critiques, interviews et dossiers sur le jeu de rôle.",
    highlights: ["Critiques", "Interviews", "Dossiers éditoriaux"],
    audience: "Lecteurs passionnés et joueurs en recherche de recommandations",
    contribution:
      "Orienter les utilisateurs vers les jeux et ouvrages adaptés à leurs envies.",
  },
  {
    id: "partner-festival",
    name: "Festival Mondes en Dés",
    slug: "festival-mondes-en-des",
    category: "Événement",
    logo: "https://images.pexels.com/photos/7648475/pexels-photo-7648475.jpeg?auto=compress&cs=tinysrgb&w=240",
    cover:
      "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1200",
    website: "https://example.org/mondes-en-des",
    shortDescription:
      "Convention dédiée au jeu de rôle, aux tables découvertes et aux rencontres créateurs.",
    description:
      "Le Festival Mondes en Dés rassemble joueurs, meneurs, associations, auteurs et éditeurs. Il constitue un point de rencontre naturel pour présenter JDRscroll et recueillir les retours des communautés.",
    seoTitle: "Festival Mondes en Dés — événement partenaire JDRscroll",
    seoDescription:
      "Présentation du Festival Mondes en Dés, événement partenaire de JDRscroll dédié au jeu de rôle et aux communautés rôlistes.",
    highlights: [
      "Convention JDR",
      "Rencontres créateurs",
      "Tables découvertes",
    ],
    audience: "Public événementiel, associations et créateurs",
    contribution:
      "Servir de relais terrain pour les démonstrations et retours utilisateurs.",
    city: "Rennes",
  },
  {
    id: "partner-mediatheque",
    name: "Réseau Médiathèques Imaginaire",
    slug: "reseau-mediatheques-imaginaire",
    category: "Institution",
    logo: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=240",
    cover:
      "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=1200",
    website: "https://example.org/mediatheques-imaginaire",
    shortDescription:
      "Réseau culturel engagé dans la lecture, l’imaginaire et les usages collectifs.",
    description:
      "Le Réseau Médiathèques Imaginaire explore les usages culturels du jeu de rôle : lecture, oralité, création collective et médiation. Ce type de partenaire ouvre la voie à des usages publics et éducatifs de JDRscroll.",
    seoTitle:
      "Réseau Médiathèques Imaginaire — partenaire institutionnel JDRscroll",
    seoDescription:
      "Découvrez le Réseau Médiathèques Imaginaire, partenaire institutionnel de JDRscroll autour de la lecture et de la culture rôliste.",
    highlights: ["Lecture publique", "Médiation culturelle", "Ateliers JDR"],
    audience: "Médiathèques, familles, publics scolaires et culturels",
    contribution:
      "Expérimenter des usages collectifs et culturels de la plateforme.",
  },
];

export interface ReadingStats {
  totalReadingTime: number;
  relativeShare: number;
  activeReaders: number;
  top3Books: { bookId: string; bookTitle: string; readingTime: number }[];
  top3Games: { gameId: string; gameName: string; readingTime: number }[];
  byCategory: {
    "Aides de jeu": number;
    Secrets: number;
    Scénarios: number;
  };
  monthlyTrend: Array<{ month: string; value: number }>;
  quarterlyTrend: Array<{ quarter: string; value: number }>;
  yearlyTrend: Array<{ year: string; value: number }>;
}

// Games
export const games: Game[] = [
  {
    id: "dd5",
    name: "Donjons & Dragons 5e",
    publisher: "Wizards of the Coast",
    publisherId: "pub_wotc",
    universe: "Fantasy",
    description: "Le jeu de rôle le plus populaire au monde",
    longDescription:
      "Donjons & Dragons est le jeu de rôle fondateur du genre. Créez vos personnages, explorez des mondes fantasy détaillés et partez à l'aventure avec vos amis. La 5e édition est la plus accessible et la plus acclamée.",
    tags: ["Fantasy", "Classique", "Débutant-Friendly", "Aventure"],
    mood: "Heroïque et immersif",
    difficulty: "Intermédiaire",
    playerCount: "3-6 joueurs",
    cover:
      "https://images.pexels.com/photos/6333840/pexels-photo-6333840.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 12,
    activeReaders: 2450,
    totalReadingTime: 98500,
    trend: 8.5,
  },
  {
    id: "cthulhu",
    name: "L'Appel de Cthulhu",
    publisher: "Chaosium",
    publisherId: "pub_chaosium",
    universe: "Horreur",
    description: "Enquêtes horrifiques dans un univers de cosmic horror",
    longDescription:
      "L'Appel de Cthulhu plonge les joueurs dans un univers inspiré par H.P. Lovecraft. Menez des enquêtes contre les forces cosmiques et le surnaturel. Un jeu d'horreur psychologique et de santé mentale.",
    tags: ["Horreur", "Enquête", "Cosmic Horror", "Atmosphère"],
    mood: "Terrifiant et psychologique",
    difficulty: "Intermédiaire",
    playerCount: "2-5 joueurs",
    cover:
      "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 8,
    activeReaders: 1820,
    totalReadingTime: 72300,
    trend: 9.2,
  },
  {
    id: "vampire",
    name: "Vampire : L'Âge des Ténèbres",
    publisher: "Renegade Game Studios",
    publisherId: "pub_renegade",
    universe: "Occulte",
    description: "Jeu de rôle gothique urbain de politics vampirique",
    longDescription:
      "Incarnez les vampires de la Camarilla dans une lutte politique urbaine. Un jeu de rôle mûr, nuancé et complexe, parfait pour les joueurs recherchant des histoires narratives et moralement ambiguës.",
    tags: ["Urban Fantasy", "Politique", "Sombre", "Mature"],
    mood: "Intrigues et tensions",
    difficulty: "Expert",
    playerCount: "4-7 joueurs",
    cover:
      "https://images.pexels.com/photos/1707823/pexels-photo-1707823.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 6,
    activeReaders: 945,
    totalReadingTime: 45200,
    trend: 7.8,
  },
  {
    id: "pathfinder",
    name: "Pathfinder 2e",
    publisher: "Paizo",
    publisherId: "pub_paizo",
    universe: "Fantasy",
    description: "Jeu de rôle fantasy tactique et mechaniquement riche",
    longDescription:
      "Pathfinder 2e offre une expérience de jeu tactique et profonde. Créez des personnages complexes et participez à des combats stratégiques dans un univers fantasy détaillé.",
    tags: ["Fantasy", "Tactique", "Aventure", "Classique"],
    mood: "Tactique et épique",
    difficulty: "Expert",
    playerCount: "3-6 joueurs",
    cover:
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 10,
    activeReaders: 1650,
    totalReadingTime: 68900,
    trend: 8.1,
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk RED",
    publisher: "R. Talsorian Games",
    publisherId: "pub_cdpr",
    universe: "Cyberpunk",
    description: "Action et intrigue dans un futur dystopique",
    longDescription:
      "Jouez des mercenaires et pirates informatiques dans un monde cyberpunk dystopique. Cyberpunk RED combine l'action intense, les intrigues politiques et la technologie futuriste.",
    tags: ["Cyberpunk", "Science-fiction", "Action", "Futur"],
    mood: "Rapide et urbain",
    difficulty: "Intermédiaire",
    playerCount: "2-5 joueurs",
    cover:
      "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 7,
    activeReaders: 1320,
    totalReadingTime: 51800,
    trend: 8.9,
  },
  {
    id: "warhammer",
    name: "Warhammer Fantasy Roleplay",
    publisher: "Cubicle 7",
    publisherId: "pub_cubicle7",
    universe: "Médiéval",
    description: "Haut fantastique grittant et désespéré",
    longDescription:
      "Explorez le Vieux Monde de Warhammer Fantasy. Un univers sombre, gritty, où le héros n'est pas toujours possible. Parfait pour les aventures périlleuses et dramatiques.",
    tags: ["Fantasy", "Sombre", "Gritty", "Aventure"],
    mood: "Sombre et péril",
    difficulty: "Expert",
    playerCount: "3-6 joueurs",
    cover:
      "https://images.pexels.com/photos/1563177/pexels-photo-1563177.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 9,
    activeReaders: 1100,
    totalReadingTime: 44600,
    trend: 7.5,
  },
  {
    id: "chroniques-astrelune",
    name: "Chroniques d'Astrelune",
    publisher: "Atelier Atlas Imaginaire",
    publisherId: "pub_placeholder_atlas",
    universe: "Fantasy",
    description: "Quêtes lumineuses, guildes rivales et magie lunaire",
    longDescription:
      "Un jeu fantasy accessible centré sur l'exploration de royaumes traversés par des cycles lunaires magiques. Idéal pour tester des campagnes héroïques plus lumineuses.",
    tags: ["Fantasy", "Exploration", "Magie", "Débutant"],
    mood: "Merveilleux et aventureux",
    difficulty: "Débutant",
    playerCount: "3-5 joueurs",
    cover:
      "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 2,
    activeReaders: 740,
    totalReadingTime: 21100,
    trend: 8.4,
  },
  {
    id: "royaumes-cendre",
    name: "Les Royaumes de Cendre",
    publisher: "Atelier Atlas Imaginaire",
    publisherId: "pub_placeholder_atlas",
    universe: "Fantasy",
    description:
      "Dark fantasy de reconquête après la chute des anciens royaumes",
    longDescription:
      "Un monde de citadelles ruinées, de lignées déchues et de magie instable. Conçu pour tester les tons plus sombres de la fantasy sans basculer dans l'horreur.",
    tags: ["Fantasy", "Dark fantasy", "Politique", "Ruines"],
    mood: "Épique et mélancolique",
    difficulty: "Intermédiaire",
    playerCount: "3-6 joueurs",
    cover:
      "https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 2,
    activeReaders: 520,
    totalReadingTime: 16400,
    trend: 7.9,
  },
  {
    id: "maison-sept-voix",
    name: "La Maison aux Sept Voix",
    publisher: "Nocturne Studio",
    publisherId: "pub_placeholder_nocturne",
    universe: "Horreur",
    description:
      "Horreur domestique, secrets familiaux et phénomènes impossibles",
    longDescription:
      "Un jeu d'horreur intimiste où les joueurs enquêtent dans des lieux clos qui semblent modifier leurs souvenirs et leurs relations.",
    tags: ["Horreur", "Maison hantée", "Enquête", "Ambiance"],
    mood: "Oppressant et intime",
    difficulty: "Intermédiaire",
    playerCount: "2-5 joueurs",
    cover:
      "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 2,
    activeReaders: 610,
    totalReadingTime: 18900,
    trend: 8.7,
  },
  {
    id: "nuits-ivoire",
    name: "Les Nuits d'Ivoire",
    publisher: "Nocturne Studio",
    publisherId: "pub_placeholder_nocturne",
    universe: "Occulte",
    description: "Sociétés secrètes, pactes anciens et intrigues urbaines",
    longDescription:
      "Un jeu occulte contemporain où les personnages négocient avec des forces cachées pour protéger ou contrôler une ville fracturée.",
    tags: ["Occulte", "Urbain", "Sociétés secrètes", "Politique"],
    mood: "Élégant et dangereux",
    difficulty: "Expert",
    playerCount: "3-5 joueurs",
    cover:
      "https://images.pexels.com/photos/1707823/pexels-photo-1707823.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 2,
    activeReaders: 430,
    totalReadingTime: 14200,
    trend: 7.6,
  },
  {
    id: "pactes-cendres",
    name: "Pactes & Cendres",
    publisher: "Nocturne Studio",
    publisherId: "pub_placeholder_nocturne",
    universe: "Occulte",
    description: "Rituels interdits, dettes surnaturelles et héritages maudits",
    longDescription:
      "Une proposition plus sombre centrée sur les conséquences des pactes, les secrets de famille et les prix à payer pour obtenir du pouvoir.",
    tags: ["Occulte", "Rituel", "Drame", "Secrets"],
    mood: "Sombre et introspectif",
    difficulty: "Expert",
    playerCount: "3-5 joueurs",
    cover:
      "https://images.pexels.com/photos/2902440/pexels-photo-2902440.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 2,
    activeReaders: 390,
    totalReadingTime: 11900,
    trend: 7.3,
  },
  {
    id: "nebuleuse-delta",
    name: "Nébuleuse Delta",
    publisher: "Orbital Fiction Lab",
    publisherId: "pub_placeholder_orbital",
    universe: "Science-fiction",
    description: "Exploration spatiale et diplomatie aux frontières connues",
    longDescription:
      "Un jeu de science-fiction orienté équipage, découverte de systèmes inconnus, négociation avec des factions et gestion de crise à bord.",
    tags: ["Science-fiction", "Exploration", "Équipage", "Diplomatie"],
    mood: "Vaste et diplomatique",
    difficulty: "Intermédiaire",
    playerCount: "3-6 joueurs",
    cover:
      "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 2,
    activeReaders: 780,
    totalReadingTime: 23600,
    trend: 8.8,
  },
  {
    id: "frontieres-stellaires",
    name: "Frontières Stellaires",
    publisher: "Orbital Fiction Lab",
    publisherId: "pub_placeholder_orbital",
    universe: "Science-fiction",
    description: "Colonies lointaines, factions rivales et survie spatiale",
    longDescription:
      "Un jeu centré sur les colonies isolées, les routes commerciales dangereuses et les conflits d'influence entre puissances interstellaires.",
    tags: ["Science-fiction", "Colonies", "Survie", "Factions"],
    mood: "Tendu et stratégique",
    difficulty: "Intermédiaire",
    playerCount: "3-5 joueurs",
    cover:
      "https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 2,
    activeReaders: 560,
    totalReadingTime: 17200,
    trend: 8.1,
  },
  {
    id: "neon-district",
    name: "Neon District",
    publisher: "Orbital Fiction Lab",
    publisherId: "pub_placeholder_orbital",
    universe: "Cyberpunk",
    description: "Infiltration, gangs augmentés et mégacorporations",
    longDescription:
      "Un cyberpunk nerveux conçu pour des missions courtes, des choix risqués et une forte lisibilité des rôles à la table.",
    tags: ["Cyberpunk", "Infiltration", "Action", "Mégacorporations"],
    mood: "Nerveux et urbain",
    difficulty: "Débutant",
    playerCount: "2-5 joueurs",
    cover:
      "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 2,
    activeReaders: 690,
    totalReadingTime: 20400,
    trend: 8.6,
  },
  {
    id: "systeme-noir",
    name: "Système Noir",
    publisher: "Orbital Fiction Lab",
    publisherId: "pub_placeholder_orbital",
    universe: "Cyberpunk",
    description: "Noir technologique, IA opaques et enquêtes corporatistes",
    longDescription:
      "Un jeu d'enquête cyberpunk plus lent, centré sur les manipulations d'IA, les preuves numériques et les compromis moraux.",
    tags: ["Cyberpunk", "Noir", "IA", "Enquête"],
    mood: "Froid et paranoïaque",
    difficulty: "Expert",
    playerCount: "3-5 joueurs",
    cover:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 2,
    activeReaders: 410,
    totalReadingTime: 12600,
    trend: 7.4,
  },
  {
    id: "couronne-fer",
    name: "La Couronne de Fer",
    publisher: "Atelier Atlas Imaginaire",
    publisherId: "pub_placeholder_atlas",
    universe: "Médiéval",
    description:
      "Intrigues féodales, héritages contestés et guerres de succession",
    longDescription:
      "Un jeu médiéval politique où les maisons nobles, les serments et les dettes structurent chaque décision des personnages.",
    tags: ["Médiéval", "Politique", "Féodal", "Intrigue"],
    mood: "Dur et politique",
    difficulty: "Intermédiaire",
    playerCount: "3-6 joueurs",
    cover:
      "https://images.pexels.com/photos/1563177/pexels-photo-1563177.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 2,
    activeReaders: 570,
    totalReadingTime: 16300,
    trend: 7.8,
  },
  {
    id: "terres-brume",
    name: "Les Terres de Brume",
    publisher: "Atelier Atlas Imaginaire",
    publisherId: "pub_placeholder_atlas",
    universe: "Médiéval",
    description: "Voyage, folklore inquiétant et villages isolés",
    longDescription:
      "Un médiéval plus rural et mystérieux, parfait pour tester des contenus entre exploration, légendes locales et dangers diffus.",
    tags: ["Médiéval", "Folklore", "Exploration", "Mystère"],
    mood: "Rugueux et brumeux",
    difficulty: "Débutant",
    playerCount: "2-5 joueurs",
    cover:
      "https://images.pexels.com/photos/7978802/pexels-photo-7978802.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 2,
    activeReaders: 490,
    totalReadingTime: 15100,
    trend: 7.7,
  },
  {
    id: "apres-orage",
    name: "Après l'Orage",
    publisher: "Horizon Rouge Éditions",
    publisherId: "pub_placeholder_horizon",
    universe: "Post-apocalyptique",
    description: "Reconstruire une communauté après l'effondrement",
    longDescription:
      "Un jeu de reconstruction où les ressources, les tensions internes et les expéditions structurent la campagne.",
    tags: ["Post-apocalyptique", "Survie", "Communauté", "Reconstruction"],
    mood: "Fragile et humain",
    difficulty: "Débutant",
    playerCount: "3-5 joueurs",
    cover:
      "https://images.pexels.com/photos/7648475/pexels-photo-7648475.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 2,
    activeReaders: 620,
    totalReadingTime: 18100,
    trend: 8.2,
  },
  {
    id: "cites-rouillees",
    name: "Les Cités Rouillées",
    publisher: "Horizon Rouge Éditions",
    publisherId: "pub_placeholder_horizon",
    universe: "Post-apocalyptique",
    description: "Ruines industrielles, convois et factions de survivants",
    longDescription:
      "Un jeu plus action/survie où les personnages traversent des zones contaminées pour maintenir leur cité en vie.",
    tags: ["Post-apocalyptique", "Ruines", "Factions", "Action"],
    mood: "Brutal et tactique",
    difficulty: "Intermédiaire",
    playerCount: "3-6 joueurs",
    cover:
      "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 2,
    activeReaders: 510,
    totalReadingTime: 14800,
    trend: 7.9,
  },
  {
    id: "masques-metropole",
    name: "Masques de Métropole",
    publisher: "Horizon Rouge Éditions",
    publisherId: "pub_placeholder_horizon",
    universe: "Super-héros",
    description: "Jeunes héros, identité publique et drames d'équipe",
    longDescription:
      "Un jeu super-héroïque axé sur la croissance personnelle, les relations et les responsabilités liées au pouvoir.",
    tags: ["Super-héros", "Équipe", "Identité", "Narratif"],
    mood: "Dramatique et spectaculaire",
    difficulty: "Débutant",
    playerCount: "3-5 joueurs",
    cover:
      "https://images.pexels.com/photos/7772201/pexels-photo-7772201.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 2,
    activeReaders: 680,
    totalReadingTime: 19900,
    trend: 8.5,
  },
  {
    id: "sentinelles-zero",
    name: "Sentinelles Zéro",
    publisher: "Horizon Rouge Éditions",
    publisherId: "pub_placeholder_horizon",
    universe: "Super-héros",
    description: "Crises planétaires, menaces cosmiques et action tactique",
    longDescription:
      "Un jeu super-héroïque plus spectaculaire, pensé pour tester des campagnes à enjeux élevés et des scènes d'action lisibles.",
    tags: ["Super-héros", "Action", "Cosmique", "Tactique"],
    mood: "Épique et explosif",
    difficulty: "Intermédiaire",
    playerCount: "3-6 joueurs",
    cover:
      "https://images.pexels.com/photos/7772216/pexels-photo-7772216.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 2,
    activeReaders: 540,
    totalReadingTime: 16200,
    trend: 8.0,
  },
  {
    id: "lames-royaume",
    name: "Les Lames du Royaume",
    publisher: "Horizon Rouge Éditions",
    publisherId: "pub_placeholder_horizon",
    universe: "Historique",
    description: "Espionnage, duels et intrigues de cour",
    longDescription:
      "Un jeu historique d'aventure et d'espionnage dans lequel les personnages naviguent entre loyauté, ambition et secrets d'État.",
    tags: ["Historique", "Intrigue", "Duel", "Cour"],
    mood: "Élégant et politique",
    difficulty: "Intermédiaire",
    playerCount: "3-5 joueurs",
    cover:
      "https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 2,
    activeReaders: 460,
    totalReadingTime: 13500,
    trend: 7.6,
  },
  {
    id: "revolutions-1789",
    name: "Révolutions 1789",
    publisher: "Horizon Rouge Éditions",
    publisherId: "pub_placeholder_horizon",
    universe: "Historique",
    description: "Tensions populaires, complots et bascule politique",
    longDescription:
      "Un jeu historique centré sur les choix d'engagement, les réseaux d'influence et les conséquences d'une société en mutation.",
    tags: ["Historique", "Révolution", "Politique", "Enquête"],
    mood: "Tendu et engagé",
    difficulty: "Expert",
    playerCount: "3-6 joueurs",
    cover:
      "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=800",
    bookCount: 2,
    activeReaders: 380,
    totalReadingTime: 11200,
    trend: 7.2,
  },
];

// Books
export const books: Book[] = [
  {
    id: "dnd-players-guide",
    title: "Guide des Joueurs pour Débuter",
    gameId: "dd5",
    gameName: "Donjons & Dragons 5e",
    publisher: "Wizards of the Coast",
    author: "Jeremy Crawford",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Fantasy",
    tags: ["Création de personnage", "Débutant", "Règles", "Équipement"],
    shortDescription:
      "Un guide complet pour créer vos premiers personnages et comprendre les bases du jeu.",
    longDescription:
      "Entrez dans l’univers de Donjons & Dragons 5e à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Guide des Joueurs pour DÃ©buter présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Tout nouveau joueur D&D doit lire ce guide pour bien débuter et comprendre les fondamentaux du jeu.",
    contents: [
      "Introduction à D&D",
      "Races jouables",
      "Classes et archétypes",
      "Équipement",
      "Alignement et personnalité",
      "Compétences de base",
    ],
    readingTime: 240,
    pageCount: 85,
    releaseYear: 2014,
    cover:
      "https://images.pexels.com/photos/6333840/pexels-photo-6333840.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 9.4,
    isTrending: true,
    isNew: false,
    progress: 45,
  },
  {
    id: "dnd-combat-tactics",
    title: "Tactiques de Combat : L'Art de la Stratégie",
    gameId: "dd5",
    gameName: "Donjons & Dragons 5e",
    publisher: "Wizards of the Coast",
    author: "Mike Mearls",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Fantasy",
    tags: ["Combat", "Tactique", "Stratégie", "Avancé"],
    shortDescription:
      "Maîtrisez les combats en connaissant les vraies tactiques gagnantes.",
    longDescription:
      "Entrez dans l’univers de Donjons & Dragons 5e à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Tactiques de Combat : L'Art de la StratÃ©gie présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Améliore significativement vos performances en combat en comprenant les mécaniques tactiques profondes.",
    contents: [
      "Positionnement et mouvements",
      "Actions et réactions optimales",
      "Utilisation de l'environnement",
      "Pièges et obstacles",
      "Combat de groupe",
      "Guerres en grande échelle",
    ],
    readingTime: 185,
    pageCount: 62,
    releaseYear: 2014,
    cover:
      "https://images.pexels.com/photos/4038150/pexels-photo-4038150.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.7,
    isTrending: false,
    isNew: false,
    progress: 0,
  },
  {
    id: "dnd-secrets-forgotten-realms",
    title: "Les Secrets des Royaumes Oubliés",
    gameId: "dd5",
    gameName: "Donjons & Dragons 5e",
    publisher: "Wizards of the Coast",
    author: "Chris Perkins",
    category: "Secrets",
    requiredPlan: "gm",
    universe: "Fantasy",
    tags: ["Lore caché", "PNJ", "Mystères", "Révélations"],
    shortDescription:
      "Révélations et secrets du maître du jeu sur les Royaumes Oubliés.",
    longDescription:
      "Explorez les zones d’ombre de Donjons & Dragons 5e avec un ouvrage pensé pour enrichir la maîtrise, densifier les intrigues et révéler ce qui reste habituellement hors champ. Les Secrets des Royaumes OubliÃ©s rassemble secrets, tensions cachées et pistes narratives prêtes à nourrir une campagne plus profonde. C’est une lecture conçue pour donner au meneur de jeu des leviers concrets, de nouvelles idées de scènes et l’envie de transformer chaque révélation en moment fort à la table.",
    whyRead:
      "Essentiel pour les maîtres du jeu qui veulent enrichir leurs campagnes avec des éléments lore profonds et des révélations impactantes.",
    contents: [
      "Factions secrètes",
      "Prophéties cachées",
      "Artefacts majeurs",
      "Événements mondiaux",
      "Personnages clés",
      "Implications cosmiques",
    ],
    readingTime: 320,
    pageCount: 105,
    releaseYear: 2014,
    cover:
      "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 9.1,
    isTrending: true,
    isNew: false,
    progress: 0,
  },
  {
    id: "dnd-scenario-dragon-heist",
    title: "Scénario : Le Butin du Dragon",
    gameId: "dd5",
    gameName: "Donjons & Dragons 5e",
    publisher: "Wizards of the Coast",
    author: "Christopher Perkins",
    category: "Scénarios",
    requiredPlan: "gm",
    universe: "Fantasy",
    tags: ["Aventure", "Campagne", "Trésor", "Dragon"],
    shortDescription:
      "Campagne complète : les joueurs doivent récupérer le trésor d'un dragon ancien.",
    longDescription:
      "Entrez dans l’univers de Donjons & Dragons 5e à travers un guide pensé pour transformer la découverte en véritable envie de jouer. ScÃ©nario : Le Butin du Dragon présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Campagne prête à jouer avec tous les détails nécessaires pour une expérience immédiate et satisfaisante.",
    contents: [
      "Acte I : Les indices",
      "Acte II : Les alliances",
      "Acte III : L'assaut",
      "Cartes détaillées",
      "PNJ et statistiques",
      "Tableaux de trésor",
    ],
    readingTime: 450,
    pageCount: 145,
    releaseYear: 2014,
    cover:
      "https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.9,
    isTrending: false,
    isNew: false,
    progress: 0,
  },
  {
    id: "cthulhu-investigation-basics",
    title: "Guide des Investigations Terrifiantes",
    gameId: "cthulhu",
    gameName: "L'Appel de Cthulhu",
    publisher: "Chaosium",
    author: "Keith Herber",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Horreur",
    tags: ["Enquête", "Investigation", "Horreur", "Santé mentale"],
    shortDescription:
      "Comment mener une bonne enquête d'horreur et gérer la folie.",
    longDescription:
      "Entrez dans l’univers de L'Appel de Cthulhu à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Guide des Investigations Terrifiantes présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Aucune enquête n'est efficace sans comprendre les mécaniques d'horreur psychologique. Ce guide est indispensable.",
    contents: [
      "Créer l'ambiance d'horreur",
      "Les clues et indices",
      "La folie et la santé mentale",
      "Phobies et manies",
      "Personnages investigateurs",
      "Escalade de l'horreur",
    ],
    readingTime: 210,
    pageCount: 70,
    releaseYear: 1981,
    cover:
      "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 9.2,
    isTrending: true,
    isNew: false,
    progress: 62,
  },
  {
    id: "cthulhu-secrets-mythos",
    title: "Les Secrets du Mythe de Cthulhu",
    gameId: "cthulhu",
    gameName: "L'Appel de Cthulhu",
    publisher: "Chaosium",
    author: "Sandy Petersen",
    category: "Secrets",
    requiredPlan: "gm",
    universe: "Horreur",
    tags: ["Cosmic Horror", "Mythes anciens", "Entités", "Cultes"],
    shortDescription:
      "Révélations sur les dieux anciens et les entités cosmiques.",
    longDescription:
      "Explorez les zones d’ombre de L'Appel de Cthulhu avec un ouvrage pensé pour enrichir la maîtrise, densifier les intrigues et révéler ce qui reste habituellement hors champ. Les Secrets du Mythe de Cthulhu rassemble secrets, tensions cachées et pistes narratives prêtes à nourrir une campagne plus profonde. C’est une lecture conçue pour donner au meneur de jeu des leviers concrets, de nouvelles idées de scènes et l’envie de transformer chaque révélation en moment fort à la table.",
    whyRead:
      "Révèle les vraies horreurs de l'univers et permet aux MJ de construire des campagnes vraiment terrifiantes.",
    contents: [
      "Les Grands Anciens",
      "Les Dieux Extérieurs",
      "Cultes majeurs",
      "Rituels anciens",
      "Les Autres dimensions",
      "La vérité cosmique",
    ],
    readingTime: 380,
    pageCount: 130,
    releaseYear: 1981,
    cover:
      "https://images.pexels.com/photos/2902440/pexels-photo-2902440.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.8,
    isTrending: false,
    isNew: false,
    progress: 0,
  },
  {
    id: "cthulhu-scenario-lost-city",
    title: "Scénario : La Cité Perdue de Khothoga",
    gameId: "cthulhu",
    gameName: "L'Appel de Cthulhu",
    publisher: "Chaosium",
    author: "Geoff Gillan",
    category: "Scénarios",
    requiredPlan: "gm",
    universe: "Horreur",
    tags: ["Exploration", "Découverte", "Horreur", "Campagne"],
    shortDescription:
      "Expédition dans une cité souterraine peuplée d'horreurs anciennes.",
    longDescription:
      "Entrez dans l’univers de L'Appel de Cthulhu à travers un guide pensé pour transformer la découverte en véritable envie de jouer. ScÃ©nario : La CitÃ© Perdue de Khothoga présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Campagne complète et terrifiante pour des investigateurs de niveau intermédiaire.",
    contents: [
      "L'énigme de la cité",
      "Descente souterraine",
      "La cité elle-même",
      "Créatures et gardiens",
      "Secrets enfouis",
      "Conclusion horrifique",
    ],
    readingTime: 480,
    pageCount: 155,
    releaseYear: 1981,
    cover:
      "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.5,
    isTrending: false,
    isNew: true,
    progress: 0,
  },
  {
    id: "pathfinder-character-building",
    title: "Création de Personnages Avancée",
    gameId: "pathfinder",
    gameName: "Pathfinder 2e",
    publisher: "Paizo",
    author: "Logan Bonner",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Fantasy",
    tags: ["Création", "Archétypes", "Optimisation", "Builds"],
    shortDescription:
      "Créez des personnages Pathfinder optimisés et mémorisables.",
    longDescription:
      "Entrez dans l’univers de Pathfinder 2e à travers un guide pensé pour transformer la découverte en véritable envie de jouer. CrÃ©ation de Personnages AvancÃ©e présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Pathfinder 2e offre d'infinies possibilités. Ce guide vous aide à naviguer et créer le personnage parfait.",
    contents: [
      "Ancestries et héritages",
      "Classes et archétypes",
      "Traits et dons",
      "Sélections d'sorts",
      "Stratégies de combat",
      "Roleplay et concepts",
    ],
    readingTime: 290,
    pageCount: 98,
    releaseYear: 2019,
    cover:
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.9,
    isTrending: false,
    isNew: false,
    progress: 28,
  },
  {
    id: "vampire-storytelling",
    title: "L'Art du Storytelling Urbain",
    gameId: "vampire",
    gameName: "Vampire : L'Âge des Ténèbres",
    publisher: "Renegade Game Studios",
    author: "Matthew Dawkins",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Occulte",
    tags: ["Narration", "Immersion", "Personnages", "Émotions"],
    shortDescription: "Guide pour incarner des vampires politiques et nuancés.",
    longDescription:
      "Entrez dans l’univers de Vampire : L'Ãge des TÃ©nÃ¨bres à travers un guide pensé pour transformer la découverte en véritable envie de jouer. L'Art du Storytelling Urbain présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Vampire est un jeu de rôle narratif complexe. Ce guide vous aide à créer et incarner des personnages mémorables.",
    contents: [
      "Concepts de personnages",
      "Politique vampirique",
      "Clans et sectes",
      "Ambitions et motivations",
      "Tensions sociales",
      "Développement de personnage",
    ],
    readingTime: 255,
    pageCount: 85,
    releaseYear: 2002,
    cover:
      "https://images.pexels.com/photos/1707823/pexels-photo-1707823.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.3,
    isTrending: false,
    isNew: false,
    progress: 0,
  },
  {
    id: "cyberpunk-hacking",
    title: "Piratage Informatique et Cyberware",
    gameId: "cyberpunk",
    gameName: "Cyberpunk RED",
    publisher: "CD Projekt Red",
    author: "Cody Pondsmith",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Cyberpunk",
    tags: ["Hacking", "Technologie", "Combat", "Netrunner"],
    shortDescription: "Maîtrisez le piratage et les technologies cyberpunk.",
    longDescription:
      "Entrez dans l’univers de Cyberpunk RED à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Piratage Informatique et Cyberware présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Le hacking est complexe mais puissant. Ce guide rend ce système accessible et amusant.",
    contents: [
      "Comprendre le Net",
      "Programmes et ICE",
      "Attaques informatiques",
      "Cyberware courant",
      "Implants et modifications",
      "Risques et dégâts",
    ],
    readingTime: 220,
    pageCount: 74,
    releaseYear: 2020,
    cover:
      "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.6,
    isTrending: true,
    isNew: false,
    progress: 0,
  },
  {
    id: "chroniques-astrelune-guide-decouverte",
    title: "Guide de découverte — Chroniques d'Astrelune",
    gameId: "chroniques-astrelune",
    gameName: "Chroniques d'Astrelune",
    publisher: "Atelier Atlas Imaginaire",
    author: "Équipe éditoriale JDRscroll",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Fantasy",
    tags: ["Fantasy", "Placeholder", "Test UX", "Débuter"],
    shortDescription:
      "Présentation rapide de Chroniques d'Astrelune pour comprendre le ton, les rôles et les premières mécaniques.",
    longDescription:
      "Entrez dans l’univers de Chroniques d'Astrelune à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Guide de dÃ©couverte â Chroniques d'Astrelune présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Utile pour tester les fiches ouvrages accessibles aux joueurs et la découverte rapide d'un nouveau jeu.",
    contents: [
      "Pitch de l'univers",
      "Types de personnages",
      "Première scène",
      "Conseils de table",
      "Lexique rapide",
      "Prochaines lectures",
    ],
    readingTime: 95,
    pageCount: 36,
    releaseYear: 2026,
    cover:
      "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 7.1,
    isTrending: true,
    isNew: true,
    progress: 0,
  },
  {
    id: "chroniques-astrelune-scenario-intro",
    title: "Scénario d'introduction — Chroniques d'Astrelune",
    gameId: "chroniques-astrelune",
    gameName: "Chroniques d'Astrelune",
    publisher: "Atelier Atlas Imaginaire",
    author: "Équipe éditoriale JDRscroll",
    category: "Scénarios",
    requiredPlan: "gm",
    universe: "Fantasy",
    tags: ["Fantasy", "Placeholder", "Test UX", "Scénario", "MJ"],
    shortDescription:
      "Un scénario court pour tester rapidement une table autour de Chroniques d'Astrelune.",
    longDescription:
      "Entrez dans l’univers de Chroniques d'Astrelune à travers un guide pensé pour transformer la découverte en véritable envie de jouer. ScÃ©nario d'introduction â Chroniques d'Astrelune présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Permet de tester les droits MJ, les carrousels de contenus liés et la densité des pages jeu.",
    contents: [
      "Synopsis",
      "Accroche",
      "PNJ principaux",
      "Lieux clés",
      "Complications",
      "Conclusion ouverte",
    ],
    readingTime: 130,
    pageCount: 48,
    releaseYear: 2026,
    cover:
      "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 7.0,
    isTrending: true,
    isNew: true,
    progress: 0,
  },
  {
    id: "royaumes-cendre-guide-decouverte",
    title: "Guide de découverte — Les Royaumes de Cendre",
    gameId: "royaumes-cendre",
    gameName: "Les Royaumes de Cendre",
    publisher: "Atelier Atlas Imaginaire",
    author: "Équipe éditoriale JDRscroll",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Fantasy",
    tags: ["Fantasy", "Placeholder", "Test UX", "Débuter"],
    shortDescription:
      "Présentation rapide de Les Royaumes de Cendre pour comprendre le ton, les rôles et les premières mécaniques.",
    longDescription:
      "Entrez dans l’univers de Les Royaumes de Cendre à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Guide de dÃ©couverte â Les Royaumes de Cendre présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Utile pour tester les fiches ouvrages accessibles aux joueurs et la découverte rapide d'un nouveau jeu.",
    contents: [
      "Pitch de l'univers",
      "Types de personnages",
      "Première scène",
      "Conseils de table",
      "Lexique rapide",
      "Prochaines lectures",
    ],
    readingTime: 115,
    pageCount: 44,
    releaseYear: 2026,
    cover:
      "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 7.3,
    isTrending: false,
    isNew: false,
    progress: 0,
  },
  {
    id: "royaumes-cendre-scenario-intro",
    title: "Scénario d'introduction — Les Royaumes de Cendre",
    gameId: "royaumes-cendre",
    gameName: "Les Royaumes de Cendre",
    publisher: "Atelier Atlas Imaginaire",
    author: "Équipe éditoriale JDRscroll",
    category: "Scénarios",
    requiredPlan: "gm",
    universe: "Fantasy",
    tags: ["Fantasy", "Placeholder", "Test UX", "Scénario", "MJ"],
    shortDescription:
      "Un scénario court pour tester rapidement une table autour de Les Royaumes de Cendre.",
    longDescription:
      "Entrez dans l’univers de Les Royaumes de Cendre à travers un guide pensé pour transformer la découverte en véritable envie de jouer. ScÃ©nario d'introduction â Les Royaumes de Cendre présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Permet de tester les droits MJ, les carrousels de contenus liés et la densité des pages jeu.",
    contents: [
      "Synopsis",
      "Accroche",
      "PNJ principaux",
      "Lieux clés",
      "Complications",
      "Conclusion ouverte",
    ],
    readingTime: 155,
    pageCount: 57,
    releaseYear: 2026,
    cover:
      "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 7.3,
    isTrending: false,
    isNew: false,
    progress: 0,
  },
  {
    id: "maison-sept-voix-guide-decouverte",
    title: "Guide de découverte — La Maison aux Sept Voix",
    gameId: "maison-sept-voix",
    gameName: "La Maison aux Sept Voix",
    publisher: "Nocturne Studio",
    author: "Équipe éditoriale JDRscroll",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Horreur",
    tags: ["Horreur", "Placeholder", "Test UX", "Débuter"],
    shortDescription:
      "Présentation rapide de La Maison aux Sept Voix pour comprendre le ton, les rôles et les premières mécaniques.",
    longDescription:
      "Entrez dans l’univers de La Maison aux Sept Voix à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Guide de dÃ©couverte â La Maison aux Sept Voix présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Utile pour tester les fiches ouvrages accessibles aux joueurs et la découverte rapide d'un nouveau jeu.",
    contents: [
      "Pitch de l'univers",
      "Types de personnages",
      "Première scène",
      "Conseils de table",
      "Lexique rapide",
      "Prochaines lectures",
    ],
    readingTime: 135,
    pageCount: 52,
    releaseYear: 2026,
    cover:
      "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 7.6,
    isTrending: false,
    isNew: false,
    progress: 0,
  },
  {
    id: "maison-sept-voix-scenario-intro",
    title: "Scénario d'introduction — La Maison aux Sept Voix",
    gameId: "maison-sept-voix",
    gameName: "La Maison aux Sept Voix",
    publisher: "Nocturne Studio",
    author: "Équipe éditoriale JDRscroll",
    category: "Scénarios",
    requiredPlan: "gm",
    universe: "Horreur",
    tags: ["Horreur", "Placeholder", "Test UX", "Scénario", "MJ"],
    shortDescription:
      "Un scénario court pour tester rapidement une table autour de La Maison aux Sept Voix.",
    longDescription:
      "Entrez dans l’univers de La Maison aux Sept Voix à travers un guide pensé pour transformer la découverte en véritable envie de jouer. ScÃ©nario d'introduction â La Maison aux Sept Voix présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Permet de tester les droits MJ, les carrousels de contenus liés et la densité des pages jeu.",
    contents: [
      "Synopsis",
      "Accroche",
      "PNJ principaux",
      "Lieux clés",
      "Complications",
      "Conclusion ouverte",
    ],
    readingTime: 180,
    pageCount: 66,
    releaseYear: 2026,
    cover:
      "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 7.6,
    isTrending: false,
    isNew: true,
    progress: 0,
  },
  {
    id: "nuits-ivoire-guide-decouverte",
    title: "Guide de découverte — Les Nuits d'Ivoire",
    gameId: "nuits-ivoire",
    gameName: "Les Nuits d'Ivoire",
    publisher: "Nocturne Studio",
    author: "Équipe éditoriale JDRscroll",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Occulte",
    tags: ["Occulte", "Placeholder", "Test UX", "Débuter"],
    shortDescription:
      "Présentation rapide de Les Nuits d'Ivoire pour comprendre le ton, les rôles et les premières mécaniques.",
    longDescription:
      "Entrez dans l’univers de Les Nuits d'Ivoire à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Guide de dÃ©couverte â Les Nuits d'Ivoire présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Utile pour tester les fiches ouvrages accessibles aux joueurs et la découverte rapide d'un nouveau jeu.",
    contents: [
      "Pitch de l'univers",
      "Types de personnages",
      "Première scène",
      "Conseils de table",
      "Lexique rapide",
      "Prochaines lectures",
    ],
    readingTime: 155,
    pageCount: 60,
    releaseYear: 2025,
    cover:
      "https://images.pexels.com/photos/2902440/pexels-photo-2902440.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 7.8,
    isTrending: false,
    isNew: true,
    progress: 0,
  },
  {
    id: "nuits-ivoire-scenario-intro",
    title: "Scénario d'introduction — Les Nuits d'Ivoire",
    gameId: "nuits-ivoire",
    gameName: "Les Nuits d'Ivoire",
    publisher: "Nocturne Studio",
    author: "Équipe éditoriale JDRscroll",
    category: "Scénarios",
    requiredPlan: "gm",
    universe: "Occulte",
    tags: ["Occulte", "Placeholder", "Test UX", "Scénario", "MJ"],
    shortDescription:
      "Un scénario court pour tester rapidement une table autour de Les Nuits d'Ivoire.",
    longDescription:
      "Entrez dans l’univers de Les Nuits d'Ivoire à travers un guide pensé pour transformer la découverte en véritable envie de jouer. ScÃ©nario d'introduction â Les Nuits d'Ivoire présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Permet de tester les droits MJ, les carrousels de contenus liés et la densité des pages jeu.",
    contents: [
      "Synopsis",
      "Accroche",
      "PNJ principaux",
      "Lieux clés",
      "Complications",
      "Conclusion ouverte",
    ],
    readingTime: 205,
    pageCount: 75,
    releaseYear: 2025,
    cover:
      "https://images.pexels.com/photos/2902440/pexels-photo-2902440.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 7.9,
    isTrending: false,
    isNew: false,
    progress: 0,
  },
  {
    id: "pactes-cendres-guide-decouverte",
    title: "Guide de découverte — Pactes & Cendres",
    gameId: "pactes-cendres",
    gameName: "Pactes & Cendres",
    publisher: "Nocturne Studio",
    author: "Équipe éditoriale JDRscroll",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Occulte",
    tags: ["Occulte", "Placeholder", "Test UX", "Débuter"],
    shortDescription:
      "Présentation rapide de Pactes & Cendres pour comprendre le ton, les rôles et les premières mécaniques.",
    longDescription:
      "Entrez dans l’univers de Pactes & Cendres à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Guide de dÃ©couverte â Pactes & Cendres présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Utile pour tester les fiches ouvrages accessibles aux joueurs et la découverte rapide d'un nouveau jeu.",
    contents: [
      "Pitch de l'univers",
      "Types de personnages",
      "Première scène",
      "Conseils de table",
      "Lexique rapide",
      "Prochaines lectures",
    ],
    readingTime: 175,
    pageCount: 68,
    releaseYear: 2025,
    cover:
      "https://images.pexels.com/photos/2902440/pexels-photo-2902440.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.1,
    isTrending: true,
    isNew: false,
    progress: 0,
  },
  {
    id: "pactes-cendres-scenario-intro",
    title: "Scénario d'introduction — Pactes & Cendres",
    gameId: "pactes-cendres",
    gameName: "Pactes & Cendres",
    publisher: "Nocturne Studio",
    author: "Équipe éditoriale JDRscroll",
    category: "Scénarios",
    requiredPlan: "gm",
    universe: "Occulte",
    tags: ["Occulte", "Placeholder", "Test UX", "Scénario", "MJ"],
    shortDescription:
      "Un scénario court pour tester rapidement une table autour de Pactes & Cendres.",
    longDescription:
      "Entrez dans l’univers de Pactes & Cendres à travers un guide pensé pour transformer la découverte en véritable envie de jouer. ScÃ©nario d'introduction â Pactes & Cendres présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Permet de tester les droits MJ, les carrousels de contenus liés et la densité des pages jeu.",
    contents: [
      "Synopsis",
      "Accroche",
      "PNJ principaux",
      "Lieux clés",
      "Complications",
      "Conclusion ouverte",
    ],
    readingTime: 230,
    pageCount: 84,
    releaseYear: 2025,
    cover:
      "https://images.pexels.com/photos/2902440/pexels-photo-2902440.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.2,
    isTrending: false,
    isNew: true,
    progress: 0,
  },
  {
    id: "nebuleuse-delta-guide-decouverte",
    title: "Guide de découverte — Nébuleuse Delta",
    gameId: "nebuleuse-delta",
    gameName: "Nébuleuse Delta",
    publisher: "Orbital Fiction Lab",
    author: "Équipe éditoriale JDRscroll",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Science-fiction",
    tags: ["Science-fiction", "Placeholder", "Test UX", "Débuter"],
    shortDescription:
      "Présentation rapide de Nébuleuse Delta pour comprendre le ton, les rôles et les premières mécaniques.",
    longDescription:
      "Entrez dans l’univers de NÃ©buleuse Delta à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Guide de dÃ©couverte â NÃ©buleuse Delta présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Utile pour tester les fiches ouvrages accessibles aux joueurs et la découverte rapide d'un nouveau jeu.",
    contents: [
      "Pitch de l'univers",
      "Types de personnages",
      "Première scène",
      "Conseils de table",
      "Lexique rapide",
      "Prochaines lectures",
    ],
    readingTime: 95,
    pageCount: 76,
    releaseYear: 2026,
    cover:
      "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.3,
    isTrending: false,
    isNew: false,
    progress: 0,
  },
  {
    id: "nebuleuse-delta-scenario-intro",
    title: "Scénario d'introduction — Nébuleuse Delta",
    gameId: "nebuleuse-delta",
    gameName: "Nébuleuse Delta",
    publisher: "Orbital Fiction Lab",
    author: "Équipe éditoriale JDRscroll",
    category: "Scénarios",
    requiredPlan: "gm",
    universe: "Science-fiction",
    tags: ["Science-fiction", "Placeholder", "Test UX", "Scénario", "MJ"],
    shortDescription:
      "Un scénario court pour tester rapidement une table autour de Nébuleuse Delta.",
    longDescription:
      "Entrez dans l’univers de NÃ©buleuse Delta à travers un guide pensé pour transformer la découverte en véritable envie de jouer. ScÃ©nario d'introduction â NÃ©buleuse Delta présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Permet de tester les droits MJ, les carrousels de contenus liés et la densité des pages jeu.",
    contents: [
      "Synopsis",
      "Accroche",
      "PNJ principaux",
      "Lieux clés",
      "Complications",
      "Conclusion ouverte",
    ],
    readingTime: 130,
    pageCount: 93,
    releaseYear: 2026,
    cover:
      "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.5,
    isTrending: true,
    isNew: false,
    progress: 0,
  },
  {
    id: "frontieres-stellaires-guide-decouverte",
    title: "Guide de découverte — Frontières Stellaires",
    gameId: "frontieres-stellaires",
    gameName: "Frontières Stellaires",
    publisher: "Orbital Fiction Lab",
    author: "Équipe éditoriale JDRscroll",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Science-fiction",
    tags: ["Science-fiction", "Placeholder", "Test UX", "Débuter"],
    shortDescription:
      "Présentation rapide de Frontières Stellaires pour comprendre le ton, les rôles et les premières mécaniques.",
    longDescription:
      "Entrez dans l’univers de FrontiÃ¨res Stellaires à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Guide de dÃ©couverte â FrontiÃ¨res Stellaires présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Utile pour tester les fiches ouvrages accessibles aux joueurs et la découverte rapide d'un nouveau jeu.",
    contents: [
      "Pitch de l'univers",
      "Types de personnages",
      "Première scène",
      "Conseils de table",
      "Lexique rapide",
      "Prochaines lectures",
    ],
    readingTime: 115,
    pageCount: 36,
    releaseYear: 2025,
    cover:
      "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.6,
    isTrending: false,
    isNew: true,
    progress: 0,
  },
  {
    id: "frontieres-stellaires-scenario-intro",
    title: "Scénario d'introduction — Frontières Stellaires",
    gameId: "frontieres-stellaires",
    gameName: "Frontières Stellaires",
    publisher: "Orbital Fiction Lab",
    author: "Équipe éditoriale JDRscroll",
    category: "Scénarios",
    requiredPlan: "gm",
    universe: "Science-fiction",
    tags: ["Science-fiction", "Placeholder", "Test UX", "Scénario", "MJ"],
    shortDescription:
      "Un scénario court pour tester rapidement une table autour de Frontières Stellaires.",
    longDescription:
      "Entrez dans l’univers de FrontiÃ¨res Stellaires à travers un guide pensé pour transformer la découverte en véritable envie de jouer. ScÃ©nario d'introduction â FrontiÃ¨res Stellaires présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Permet de tester les droits MJ, les carrousels de contenus liés et la densité des pages jeu.",
    contents: [
      "Synopsis",
      "Accroche",
      "PNJ principaux",
      "Lieux clés",
      "Complications",
      "Conclusion ouverte",
    ],
    readingTime: 155,
    pageCount: 102,
    releaseYear: 2025,
    cover:
      "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.8,
    isTrending: false,
    isNew: true,
    progress: 0,
  },
  {
    id: "neon-district-guide-decouverte",
    title: "Guide de découverte — Neon District",
    gameId: "neon-district",
    gameName: "Neon District",
    publisher: "Orbital Fiction Lab",
    author: "Équipe éditoriale JDRscroll",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Cyberpunk",
    tags: ["Cyberpunk", "Placeholder", "Test UX", "Débuter"],
    shortDescription:
      "Présentation rapide de Neon District pour comprendre le ton, les rôles et les premières mécaniques.",
    longDescription:
      "Entrez dans l’univers de Neon District à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Guide de dÃ©couverte â Neon District présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Utile pour tester les fiches ouvrages accessibles aux joueurs et la découverte rapide d'un nouveau jeu.",
    contents: [
      "Pitch de l'univers",
      "Types de personnages",
      "Première scène",
      "Conseils de table",
      "Lexique rapide",
      "Prochaines lectures",
    ],
    readingTime: 135,
    pageCount: 44,
    releaseYear: 2026,
    cover:
      "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.8,
    isTrending: false,
    isNew: false,
    progress: 0,
  },
  {
    id: "neon-district-scenario-intro",
    title: "Scénario d'introduction — Neon District",
    gameId: "neon-district",
    gameName: "Neon District",
    publisher: "Orbital Fiction Lab",
    author: "Équipe éditoriale JDRscroll",
    category: "Scénarios",
    requiredPlan: "gm",
    universe: "Cyberpunk",
    tags: ["Cyberpunk", "Placeholder", "Test UX", "Scénario", "MJ"],
    shortDescription:
      "Un scénario court pour tester rapidement une table autour de Neon District.",
    longDescription:
      "Entrez dans l’univers de Neon District à travers un guide pensé pour transformer la découverte en véritable envie de jouer. ScÃ©nario d'introduction â Neon District présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Permet de tester les droits MJ, les carrousels de contenus liés et la densité des pages jeu.",
    contents: [
      "Synopsis",
      "Accroche",
      "PNJ principaux",
      "Lieux clés",
      "Complications",
      "Conclusion ouverte",
    ],
    readingTime: 180,
    pageCount: 48,
    releaseYear: 2026,
    cover:
      "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 7.0,
    isTrending: false,
    isNew: false,
    progress: 0,
  },
  {
    id: "systeme-noir-guide-decouverte",
    title: "Guide de découverte — Système Noir",
    gameId: "systeme-noir",
    gameName: "Système Noir",
    publisher: "Orbital Fiction Lab",
    author: "Équipe éditoriale JDRscroll",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Cyberpunk",
    tags: ["Cyberpunk", "Placeholder", "Test UX", "Débuter"],
    shortDescription:
      "Présentation rapide de Système Noir pour comprendre le ton, les rôles et les premières mécaniques.",
    longDescription:
      "Entrez dans l’univers de SystÃ¨me Noir à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Guide de dÃ©couverte â SystÃ¨me Noir présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Utile pour tester les fiches ouvrages accessibles aux joueurs et la découverte rapide d'un nouveau jeu.",
    contents: [
      "Pitch de l'univers",
      "Types de personnages",
      "Première scène",
      "Conseils de table",
      "Lexique rapide",
      "Prochaines lectures",
    ],
    readingTime: 155,
    pageCount: 52,
    releaseYear: 2025,
    cover:
      "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 7.1,
    isTrending: true,
    isNew: false,
    progress: 0,
  },
  {
    id: "systeme-noir-scenario-intro",
    title: "Scénario d'introduction — Système Noir",
    gameId: "systeme-noir",
    gameName: "Système Noir",
    publisher: "Orbital Fiction Lab",
    author: "Équipe éditoriale JDRscroll",
    category: "Scénarios",
    requiredPlan: "gm",
    universe: "Cyberpunk",
    tags: ["Cyberpunk", "Placeholder", "Test UX", "Scénario", "MJ"],
    shortDescription:
      "Un scénario court pour tester rapidement une table autour de Système Noir.",
    longDescription:
      "Entrez dans l’univers de SystÃ¨me Noir à travers un guide pensé pour transformer la découverte en véritable envie de jouer. ScÃ©nario d'introduction â SystÃ¨me Noir présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Permet de tester les droits MJ, les carrousels de contenus liés et la densité des pages jeu.",
    contents: [
      "Synopsis",
      "Accroche",
      "PNJ principaux",
      "Lieux clés",
      "Complications",
      "Conclusion ouverte",
    ],
    readingTime: 205,
    pageCount: 57,
    releaseYear: 2025,
    cover:
      "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 7.3,
    isTrending: false,
    isNew: true,
    progress: 0,
  },
  {
    id: "couronne-fer-guide-decouverte",
    title: "Guide de découverte — La Couronne de Fer",
    gameId: "couronne-fer",
    gameName: "La Couronne de Fer",
    publisher: "Atelier Atlas Imaginaire",
    author: "Équipe éditoriale JDRscroll",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Médiéval",
    tags: ["Médiéval", "Placeholder", "Test UX", "Débuter"],
    shortDescription:
      "Présentation rapide de La Couronne de Fer pour comprendre le ton, les rôles et les premières mécaniques.",
    longDescription:
      "Entrez dans l’univers de La Couronne de Fer à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Guide de dÃ©couverte â La Couronne de Fer présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Utile pour tester les fiches ouvrages accessibles aux joueurs et la découverte rapide d'un nouveau jeu.",
    contents: [
      "Pitch de l'univers",
      "Types de personnages",
      "Première scène",
      "Conseils de table",
      "Lexique rapide",
      "Prochaines lectures",
    ],
    readingTime: 175,
    pageCount: 60,
    releaseYear: 2025,
    cover:
      "https://images.pexels.com/photos/1563177/pexels-photo-1563177.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 7.3,
    isTrending: false,
    isNew: true,
    progress: 0,
  },
  {
    id: "couronne-fer-scenario-intro",
    title: "Scénario d'introduction — La Couronne de Fer",
    gameId: "couronne-fer",
    gameName: "La Couronne de Fer",
    publisher: "Atelier Atlas Imaginaire",
    author: "Équipe éditoriale JDRscroll",
    category: "Scénarios",
    requiredPlan: "gm",
    universe: "Médiéval",
    tags: ["Médiéval", "Placeholder", "Test UX", "Scénario", "MJ"],
    shortDescription:
      "Un scénario court pour tester rapidement une table autour de La Couronne de Fer.",
    longDescription:
      "Entrez dans l’univers de La Couronne de Fer à travers un guide pensé pour transformer la découverte en véritable envie de jouer. ScÃ©nario d'introduction â La Couronne de Fer présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Permet de tester les droits MJ, les carrousels de contenus liés et la densité des pages jeu.",
    contents: [
      "Synopsis",
      "Accroche",
      "PNJ principaux",
      "Lieux clés",
      "Complications",
      "Conclusion ouverte",
    ],
    readingTime: 230,
    pageCount: 66,
    releaseYear: 2025,
    cover:
      "https://images.pexels.com/photos/1563177/pexels-photo-1563177.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 7.6,
    isTrending: false,
    isNew: false,
    progress: 0,
  },
  {
    id: "terres-brume-guide-decouverte",
    title: "Guide de découverte — Les Terres de Brume",
    gameId: "terres-brume",
    gameName: "Les Terres de Brume",
    publisher: "Atelier Atlas Imaginaire",
    author: "Équipe éditoriale JDRscroll",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Médiéval",
    tags: ["Médiéval", "Placeholder", "Test UX", "Débuter"],
    shortDescription:
      "Présentation rapide de Les Terres de Brume pour comprendre le ton, les rôles et les premières mécaniques.",
    longDescription:
      "Entrez dans l’univers de Les Terres de Brume à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Guide de dÃ©couverte â Les Terres de Brume présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Utile pour tester les fiches ouvrages accessibles aux joueurs et la découverte rapide d'un nouveau jeu.",
    contents: [
      "Pitch de l'univers",
      "Types de personnages",
      "Première scène",
      "Conseils de table",
      "Lexique rapide",
      "Prochaines lectures",
    ],
    readingTime: 95,
    pageCount: 68,
    releaseYear: 2026,
    cover:
      "https://images.pexels.com/photos/1563177/pexels-photo-1563177.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 7.6,
    isTrending: false,
    isNew: false,
    progress: 0,
  },
  {
    id: "terres-brume-scenario-intro",
    title: "Scénario d'introduction — Les Terres de Brume",
    gameId: "terres-brume",
    gameName: "Les Terres de Brume",
    publisher: "Atelier Atlas Imaginaire",
    author: "Équipe éditoriale JDRscroll",
    category: "Scénarios",
    requiredPlan: "gm",
    universe: "Médiéval",
    tags: ["Médiéval", "Placeholder", "Test UX", "Scénario", "MJ"],
    shortDescription:
      "Un scénario court pour tester rapidement une table autour de Les Terres de Brume.",
    longDescription:
      "Entrez dans l’univers de Les Terres de Brume à travers un guide pensé pour transformer la découverte en véritable envie de jouer. ScÃ©nario d'introduction â Les Terres de Brume présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Permet de tester les droits MJ, les carrousels de contenus liés et la densité des pages jeu.",
    contents: [
      "Synopsis",
      "Accroche",
      "PNJ principaux",
      "Lieux clés",
      "Complications",
      "Conclusion ouverte",
    ],
    readingTime: 130,
    pageCount: 75,
    releaseYear: 2026,
    cover:
      "https://images.pexels.com/photos/1563177/pexels-photo-1563177.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 7.9,
    isTrending: true,
    isNew: true,
    progress: 0,
  },
  {
    id: "apres-orage-guide-decouverte",
    title: "Guide de découverte — Après l'Orage",
    gameId: "apres-orage",
    gameName: "Après l'Orage",
    publisher: "Horizon Rouge Éditions",
    author: "Équipe éditoriale JDRscroll",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Post-apocalyptique",
    tags: ["Post-apocalyptique", "Placeholder", "Test UX", "Débuter"],
    shortDescription:
      "Présentation rapide de Après l'Orage pour comprendre le ton, les rôles et les premières mécaniques.",
    longDescription:
      "Entrez dans l’univers de AprÃ¨s l'Orage à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Guide de dÃ©couverte â AprÃ¨s l'Orage présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Utile pour tester les fiches ouvrages accessibles aux joueurs et la découverte rapide d'un nouveau jeu.",
    contents: [
      "Pitch de l'univers",
      "Types de personnages",
      "Première scène",
      "Conseils de table",
      "Lexique rapide",
      "Prochaines lectures",
    ],
    readingTime: 115,
    pageCount: 76,
    releaseYear: 2026,
    cover:
      "https://images.pexels.com/photos/7648475/pexels-photo-7648475.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 7.8,
    isTrending: false,
    isNew: false,
    progress: 0,
  },
  {
    id: "apres-orage-scenario-intro",
    title: "Scénario d'introduction — Après l'Orage",
    gameId: "apres-orage",
    gameName: "Après l'Orage",
    publisher: "Horizon Rouge Éditions",
    author: "Équipe éditoriale JDRscroll",
    category: "Scénarios",
    requiredPlan: "gm",
    universe: "Post-apocalyptique",
    tags: ["Post-apocalyptique", "Placeholder", "Test UX", "Scénario", "MJ"],
    shortDescription:
      "Un scénario court pour tester rapidement une table autour de Après l'Orage.",
    longDescription:
      "Entrez dans l’univers de AprÃ¨s l'Orage à travers un guide pensé pour transformer la découverte en véritable envie de jouer. ScÃ©nario d'introduction â AprÃ¨s l'Orage présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Permet de tester les droits MJ, les carrousels de contenus liés et la densité des pages jeu.",
    contents: [
      "Synopsis",
      "Accroche",
      "PNJ principaux",
      "Lieux clés",
      "Complications",
      "Conclusion ouverte",
    ],
    readingTime: 155,
    pageCount: 84,
    releaseYear: 2026,
    cover:
      "https://images.pexels.com/photos/7648475/pexels-photo-7648475.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.2,
    isTrending: false,
    isNew: false,
    progress: 0,
  },
  {
    id: "cites-rouillees-guide-decouverte",
    title: "Guide de découverte — Les Cités Rouillées",
    gameId: "cites-rouillees",
    gameName: "Les Cités Rouillées",
    publisher: "Horizon Rouge Éditions",
    author: "Équipe éditoriale JDRscroll",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Post-apocalyptique",
    tags: ["Post-apocalyptique", "Placeholder", "Test UX", "Débuter"],
    shortDescription:
      "Présentation rapide de Les Cités Rouillées pour comprendre le ton, les rôles et les premières mécaniques.",
    longDescription:
      "Entrez dans l’univers de Les CitÃ©s RouillÃ©es à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Guide de dÃ©couverte â Les CitÃ©s RouillÃ©es présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Utile pour tester les fiches ouvrages accessibles aux joueurs et la découverte rapide d'un nouveau jeu.",
    contents: [
      "Pitch de l'univers",
      "Types de personnages",
      "Première scène",
      "Conseils de table",
      "Lexique rapide",
      "Prochaines lectures",
    ],
    readingTime: 135,
    pageCount: 36,
    releaseYear: 2025,
    cover:
      "https://images.pexels.com/photos/7648475/pexels-photo-7648475.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.1,
    isTrending: true,
    isNew: true,
    progress: 0,
  },
  {
    id: "cites-rouillees-scenario-intro",
    title: "Scénario d'introduction — Les Cités Rouillées",
    gameId: "cites-rouillees",
    gameName: "Les Cités Rouillées",
    publisher: "Horizon Rouge Éditions",
    author: "Équipe éditoriale JDRscroll",
    category: "Scénarios",
    requiredPlan: "gm",
    universe: "Post-apocalyptique",
    tags: ["Post-apocalyptique", "Placeholder", "Test UX", "Scénario", "MJ"],
    shortDescription:
      "Un scénario court pour tester rapidement une table autour de Les Cités Rouillées.",
    longDescription:
      "Entrez dans l’univers de Les CitÃ©s RouillÃ©es à travers un guide pensé pour transformer la découverte en véritable envie de jouer. ScÃ©nario d'introduction â Les CitÃ©s RouillÃ©es présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Permet de tester les droits MJ, les carrousels de contenus liés et la densité des pages jeu.",
    contents: [
      "Synopsis",
      "Accroche",
      "PNJ principaux",
      "Lieux clés",
      "Complications",
      "Conclusion ouverte",
    ],
    readingTime: 180,
    pageCount: 93,
    releaseYear: 2025,
    cover:
      "https://images.pexels.com/photos/7648475/pexels-photo-7648475.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.5,
    isTrending: false,
    isNew: true,
    progress: 0,
  },
  {
    id: "masques-metropole-guide-decouverte",
    title: "Guide de découverte — Masques de Métropole",
    gameId: "masques-metropole",
    gameName: "Masques de Métropole",
    publisher: "Horizon Rouge Éditions",
    author: "Équipe éditoriale JDRscroll",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Super-héros",
    tags: ["Super-héros", "Placeholder", "Test UX", "Débuter"],
    shortDescription:
      "Présentation rapide de Masques de Métropole pour comprendre le ton, les rôles et les premières mécaniques.",
    longDescription:
      "Entrez dans l’univers de Masques de MÃ©tropole à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Guide de dÃ©couverte â Masques de MÃ©tropole présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Utile pour tester les fiches ouvrages accessibles aux joueurs et la découverte rapide d'un nouveau jeu.",
    contents: [
      "Pitch de l'univers",
      "Types de personnages",
      "Première scène",
      "Conseils de table",
      "Lexique rapide",
      "Prochaines lectures",
    ],
    readingTime: 155,
    pageCount: 44,
    releaseYear: 2026,
    cover:
      "https://images.pexels.com/photos/7772201/pexels-photo-7772201.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.3,
    isTrending: false,
    isNew: false,
    progress: 0,
  },
  {
    id: "masques-metropole-scenario-intro",
    title: "Scénario d'introduction — Masques de Métropole",
    gameId: "masques-metropole",
    gameName: "Masques de Métropole",
    publisher: "Horizon Rouge Éditions",
    author: "Équipe éditoriale JDRscroll",
    category: "Scénarios",
    requiredPlan: "gm",
    universe: "Super-héros",
    tags: ["Super-héros", "Placeholder", "Test UX", "Scénario", "MJ"],
    shortDescription:
      "Un scénario court pour tester rapidement une table autour de Masques de Métropole.",
    longDescription:
      "Entrez dans l’univers de Masques de MÃ©tropole à travers un guide pensé pour transformer la découverte en véritable envie de jouer. ScÃ©nario d'introduction â Masques de MÃ©tropole présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Permet de tester les droits MJ, les carrousels de contenus liés et la densité des pages jeu.",
    contents: [
      "Synopsis",
      "Accroche",
      "PNJ principaux",
      "Lieux clés",
      "Complications",
      "Conclusion ouverte",
    ],
    readingTime: 205,
    pageCount: 102,
    releaseYear: 2026,
    cover:
      "https://images.pexels.com/photos/7772201/pexels-photo-7772201.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.8,
    isTrending: false,
    isNew: false,
    progress: 0,
  },
  {
    id: "sentinelles-zero-guide-decouverte",
    title: "Guide de découverte — Sentinelles Zéro",
    gameId: "sentinelles-zero",
    gameName: "Sentinelles Zéro",
    publisher: "Horizon Rouge Éditions",
    author: "Équipe éditoriale JDRscroll",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Super-héros",
    tags: ["Super-héros", "Placeholder", "Test UX", "Débuter"],
    shortDescription:
      "Présentation rapide de Sentinelles Zéro pour comprendre le ton, les rôles et les premières mécaniques.",
    longDescription:
      "Entrez dans l’univers de Sentinelles ZÃ©ro à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Guide de dÃ©couverte â Sentinelles ZÃ©ro présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Utile pour tester les fiches ouvrages accessibles aux joueurs et la découverte rapide d'un nouveau jeu.",
    contents: [
      "Pitch de l'univers",
      "Types de personnages",
      "Première scène",
      "Conseils de table",
      "Lexique rapide",
      "Prochaines lectures",
    ],
    readingTime: 175,
    pageCount: 52,
    releaseYear: 2025,
    cover:
      "https://images.pexels.com/photos/7772201/pexels-photo-7772201.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.6,
    isTrending: false,
    isNew: false,
    progress: 0,
  },
  {
    id: "sentinelles-zero-scenario-intro",
    title: "Scénario d'introduction — Sentinelles Zéro",
    gameId: "sentinelles-zero",
    gameName: "Sentinelles Zéro",
    publisher: "Horizon Rouge Éditions",
    author: "Équipe éditoriale JDRscroll",
    category: "Scénarios",
    requiredPlan: "gm",
    universe: "Super-héros",
    tags: ["Super-héros", "Placeholder", "Test UX", "Scénario", "MJ"],
    shortDescription:
      "Un scénario court pour tester rapidement une table autour de Sentinelles Zéro.",
    longDescription:
      "Entrez dans l’univers de Sentinelles ZÃ©ro à travers un guide pensé pour transformer la découverte en véritable envie de jouer. ScÃ©nario d'introduction â Sentinelles ZÃ©ro présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Permet de tester les droits MJ, les carrousels de contenus liés et la densité des pages jeu.",
    contents: [
      "Synopsis",
      "Accroche",
      "PNJ principaux",
      "Lieux clés",
      "Complications",
      "Conclusion ouverte",
    ],
    readingTime: 230,
    pageCount: 48,
    releaseYear: 2025,
    cover:
      "https://images.pexels.com/photos/7772201/pexels-photo-7772201.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 7.0,
    isTrending: false,
    isNew: true,
    progress: 0,
  },
  {
    id: "lames-royaume-guide-decouverte",
    title: "Guide de découverte — Les Lames du Royaume",
    gameId: "lames-royaume",
    gameName: "Les Lames du Royaume",
    publisher: "Horizon Rouge Éditions",
    author: "Équipe éditoriale JDRscroll",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Historique",
    tags: ["Historique", "Placeholder", "Test UX", "Débuter"],
    shortDescription:
      "Présentation rapide de Les Lames du Royaume pour comprendre le ton, les rôles et les premières mécaniques.",
    longDescription:
      "Entrez dans l’univers de Les Lames du Royaume à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Guide de dÃ©couverte â Les Lames du Royaume présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Utile pour tester les fiches ouvrages accessibles aux joueurs et la découverte rapide d'un nouveau jeu.",
    contents: [
      "Pitch de l'univers",
      "Types de personnages",
      "Première scène",
      "Conseils de table",
      "Lexique rapide",
      "Prochaines lectures",
    ],
    readingTime: 95,
    pageCount: 60,
    releaseYear: 2026,
    cover:
      "https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 8.8,
    isTrending: false,
    isNew: true,
    progress: 0,
  },
  {
    id: "lames-royaume-scenario-intro",
    title: "Scénario d'introduction — Les Lames du Royaume",
    gameId: "lames-royaume",
    gameName: "Les Lames du Royaume",
    publisher: "Horizon Rouge Éditions",
    author: "Équipe éditoriale JDRscroll",
    category: "Scénarios",
    requiredPlan: "gm",
    universe: "Historique",
    tags: ["Historique", "Placeholder", "Test UX", "Scénario", "MJ"],
    shortDescription:
      "Un scénario court pour tester rapidement une table autour de Les Lames du Royaume.",
    longDescription:
      "Entrez dans l’univers de Les Lames du Royaume à travers un guide pensé pour transformer la découverte en véritable envie de jouer. ScÃ©nario d'introduction â Les Lames du Royaume présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Permet de tester les droits MJ, les carrousels de contenus liés et la densité des pages jeu.",
    contents: [
      "Synopsis",
      "Accroche",
      "PNJ principaux",
      "Lieux clés",
      "Complications",
      "Conclusion ouverte",
    ],
    readingTime: 130,
    pageCount: 57,
    releaseYear: 2026,
    cover:
      "https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 7.3,
    isTrending: true,
    isNew: false,
    progress: 0,
  },
  {
    id: "revolutions-1789-guide-decouverte",
    title: "Guide de découverte — Révolutions 1789",
    gameId: "revolutions-1789",
    gameName: "Révolutions 1789",
    publisher: "Horizon Rouge Éditions",
    author: "Équipe éditoriale JDRscroll",
    category: "Aides de jeu",
    requiredPlan: "free",
    universe: "Historique",
    tags: ["Historique", "Placeholder", "Test UX", "Débuter"],
    shortDescription:
      "Présentation rapide de Révolutions 1789 pour comprendre le ton, les rôles et les premières mécaniques.",
    longDescription:
      "Entrez dans l’univers de RÃ©volutions 1789 à travers un guide pensé pour transformer la découverte en véritable envie de jouer. Guide de dÃ©couverte â RÃ©volutions 1789 présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Utile pour tester les fiches ouvrages accessibles aux joueurs et la découverte rapide d'un nouveau jeu.",
    contents: [
      "Pitch de l'univers",
      "Types de personnages",
      "Première scène",
      "Conseils de table",
      "Lexique rapide",
      "Prochaines lectures",
    ],
    readingTime: 115,
    pageCount: 68,
    releaseYear: 2025,
    cover:
      "https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 7.1,
    isTrending: true,
    isNew: false,
    progress: 0,
  },
  {
    id: "revolutions-1789-scenario-intro",
    title: "Scénario d'introduction — Révolutions 1789",
    gameId: "revolutions-1789",
    gameName: "Révolutions 1789",
    publisher: "Horizon Rouge Éditions",
    author: "Équipe éditoriale JDRscroll",
    category: "Scénarios",
    requiredPlan: "gm",
    universe: "Historique",
    tags: ["Historique", "Placeholder", "Test UX", "Scénario", "MJ"],
    shortDescription:
      "Un scénario court pour tester rapidement une table autour de Révolutions 1789.",
    longDescription:
      "Entrez dans l’univers de RÃ©volutions 1789 à travers un guide pensé pour transformer la découverte en véritable envie de jouer. ScÃ©nario d'introduction â RÃ©volutions 1789 présente les repères essentiels, les choix importants et les promesses de jeu qui donnent sa personnalité à cette gamme. Accessible sans être superficiel, il accompagne le lecteur pas à pas et lui permet de comprendre ce qu’il peut vivre à la table, avant même de lancer sa première partie.",
    whyRead:
      "Permet de tester les droits MJ, les carrousels de contenus liés et la densité des pages jeu.",
    contents: [
      "Synopsis",
      "Accroche",
      "PNJ principaux",
      "Lieux clés",
      "Complications",
      "Conclusion ouverte",
    ],
    readingTime: 155,
    pageCount: 66,
    releaseYear: 2025,
    cover:
      "https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&w=600",
    popularityScore: 7.6,
    isTrending: false,
    isNew: true,
    progress: 0,
  },
];

// Mock user profiles
export const mockProfiles: Record<UserRole, User> = {
  visitor: { id: "v1", name: "Explorateur", role: "visitor" },
  player: {
    id: "p1",
    name: "Aventurier Valentin",
    role: "player",
    plan: "player",
    email: "player@jdrscroll.test",
  },
  gm: {
    id: "gm1",
    name: "Maître Élodie",
    role: "gm",
    plan: "gm",
    email: "gm@jdrscroll.test",
  },
  publisher: {
    id: "pub1",
    name: "Éditions D&D Premium",
    role: "publisher",
    email: "pub@jdrscroll.test",
  },
};

// Publisher data for dashboard
export type DashboardPublisher = Pick<
  Publisher,
  "id" | "name" | "ownedGameIds" | "ownedBookIds"
>;

export const publisherData: Record<string, DashboardPublisher> = {
  pub_dd: {
    id: "pub_dd",
    name: "Éditions Donjons & Dragons",
    ownedGameIds: ["dd5"],
    ownedBookIds: [
      "dnd-players-guide",
      "dnd-combat-tactics",
      "dnd-secrets-forgotten-realms",
      "dnd-scenario-dragon-heist",
    ],
  },
  pub_cthulhu: {
    id: "pub_cthulhu",
    name: "Chaosium Productions",
    ownedGameIds: ["cthulhu"],
    ownedBookIds: [
      "cthulhu-investigation-basics",
      "cthulhu-secrets-mythos",
      "cthulhu-scenario-lost-city",
    ],
  },
};

// Mock reading stats for publishers
export const publisherReadingStats: Record<string, ReadingStats> = {
  pub_dd: {
    totalReadingTime: 98500,
    relativeShare: 14.2,
    activeReaders: 2450,
    top3Books: [
      {
        bookId: "dnd-secrets-forgotten-realms",
        bookTitle: "Les Secrets des Royaumes Oubliés",
        readingTime: 32800,
      },
      {
        bookId: "dnd-scenario-dragon-heist",
        bookTitle: "Scénario : Le Butin du Dragon",
        readingTime: 28600,
      },
      {
        bookId: "dnd-players-guide",
        bookTitle: "Guide des Joueurs pour Débuter",
        readingTime: 21300,
      },
    ],
    top3Games: [
      { gameId: "dd5", gameName: "Donjons & Dragons 5e", readingTime: 98500 },
    ],
    byCategory: { "Aides de jeu": 42300, Secrets: 32800, Scénarios: 28600 },
    monthlyTrend: [
      { month: "Janvier", value: 8200 },
      { month: "Février", value: 7900 },
      { month: "Mars", value: 8600 },
      { month: "Avril", value: 9100 },
      { month: "Mai", value: 10200 },
    ],
    quarterlyTrend: [
      { quarter: "Q1 2026", value: 24700 },
      { quarter: "Q2 2026", value: 38800 },
    ],
    yearlyTrend: [
      { year: "2024", value: 145600 },
      { year: "2025", value: 234500 },
      { year: "2026 (6m)", value: 98500 },
    ],
  },
  pub_cthulhu: {
    totalReadingTime: 72300,
    relativeShare: 10.4,
    activeReaders: 1820,
    top3Books: [
      {
        bookId: "cthulhu-investigation-basics",
        bookTitle: "Guide des Investigations Terrifiantes",
        readingTime: 24600,
      },
      {
        bookId: "cthulhu-scenario-lost-city",
        bookTitle: "Scénario : La Cité Perdue de Khothoga",
        readingTime: 22400,
      },
      {
        bookId: "cthulhu-secrets-mythos",
        bookTitle: "Les Secrets du Mythe de Cthulhu",
        readingTime: 19800,
      },
    ],
    top3Games: [
      { gameId: "cthulhu", gameName: "L'Appel de Cthulhu", readingTime: 72300 },
    ],
    byCategory: { "Aides de jeu": 32100, Secrets: 19800, Scénarios: 22400 },
    monthlyTrend: [
      { month: "Janvier", value: 5800 },
      { month: "Février", value: 5600 },
      { month: "Mars", value: 6200 },
      { month: "Avril", value: 6700 },
      { month: "Mai", value: 7400 },
    ],
    quarterlyTrend: [
      { quarter: "Q1 2026", value: 17600 },
      { quarter: "Q2 2026", value: 28100 },
    ],
    yearlyTrend: [
      { year: "2024", value: 98200 },
      { year: "2025", value: 156700 },
      { year: "2026 (6m)", value: 72300 },
    ],
  },
};

export const getAllGames = (): Game[] => games;
export const getAllBooks = (): Book[] => books;
export const getGameById = (id: string): Game | undefined =>
  games.find((g) => g.id === id);
export const getBookById = (id: string): Book | undefined =>
  books.find((b) => b.id === id);
export const getBooksByGameId = (gameId: string): Book[] =>
  books.filter((b) => b.gameId === gameId);
export const getUniverses = (): string[] =>
  [...new Set(games.map((g) => g.universe))].sort();
export const getAllUniverses = (): Universe[] => universes;
export const getUniverseBySlug = (slug: string): Universe | undefined =>
  universes.find((u) => u.slug === slug);
export const getUniverseByName = (name: string): Universe | undefined =>
  universes.find((u) => u.name === name);
export const getUniverseSlugByName = (name: string): string =>
  getUniverseByName(name)?.slug ??
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
export const getGamesByUniverse = (universeName: string): Game[] =>
  games.filter((g) => g.universe === universeName);
export const getUniverseRows = (): Array<{
  universe: Universe;
  games: Game[];
}> =>
  universes
    .map((universe) => ({ universe, games: getGamesByUniverse(universe.name) }))
    .filter((row) => row.games.length > 0);
export const getTrendingBooks = (): Book[] =>
  books
    .filter((b) => b.isTrending)
    .sort((a, b) => b.popularityScore - a.popularityScore)
    .slice(0, 8);
export const getNewBooks = (): Book[] =>
  books
    .filter((b) => b.isNew)
    .sort((a, b) => b.popularityScore - a.popularityScore)
    .slice(0, 8);
export const getUserLibrary = (): Book[] =>
  books
    .filter((b) => b.progress > 0)
    .sort((a, b) => b.popularityScore - a.popularityScore);
export const getRecentBooks = (): Book[] =>
  [...books].sort((a, b) => b.popularityScore - a.popularityScore).slice(0, 12);
export { publisherReadingStats as publisherStats };
export const getAllPublishers = (): Publisher[] => publishers;
export const getAllPartners = (): Partner[] => partners;
export const getPublisherById = (id: string): Publisher | undefined =>
  publishers.find((p) => p.id === id);
export const getPublisherBySlug = (slug: string): Publisher | undefined =>
  publishers.find((p) => p.slug === slug);
export const getPartnerBySlug = (slug: string): Partner | undefined =>
  partners.find((p) => p.slug === slug);
export const getPublisherByGameId = (gameId: string): Publisher | undefined =>
  publishers.find((p) => p.ownedGameIds.includes(gameId));
