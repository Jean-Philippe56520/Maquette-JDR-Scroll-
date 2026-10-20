import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Crown,
  User,
  BookOpen,
  Scroll,
  Swords,
  HelpCircle,
  ShieldCheck,
  EyeOff,
  Sparkles,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const roleTerms = [
  {
    abbr: 'PJ',
    full: 'Joueur / Personnage Joueur',
    icon: <User className="w-7 h-7 text-blue-400" />,
    accent: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    description:
      "Un joueur incarne un personnage dans l'histoire. Il découvre les situations, prend des décisions et vit l'aventure sans connaître à l'avance les secrets préparés pour la table.",
    appUsage:
      "Sur JDRscroll, l'accès Joueur est pensé pour consulter les aides utiles à la création, aux règles et à la découverte d'un thème, sans révéler les secrets réservés au MJ.",
    examples: [
      'Je veux créer mon personnage ou mieux comprendre ses options.',
      'Je veux lire des aides utiles sans me gâcher une campagne.',
      'Je joue dans une table mais je ne prépare pas les scénarios.',
    ],
    ctaLabel: "Voir l'accès Joueur",
  },
  {
    abbr: 'MJ',
    full: 'Maître du Jeu',
    icon: <Crown className="w-7 h-7 text-amber-400" />,
    accent: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    description:
      "Le Maître du Jeu prépare et anime la partie. Il connaît les coulisses de l'histoire, les secrets du thème, les dangers à venir et les éléments nécessaires pour faire jouer le groupe.",
    appUsage:
      "Sur JDRscroll, l'accès MJ donne accès aux scénarios, aux secrets et aux aides de préparation. Ces contenus sont utiles pour animer une partie, mais peuvent révéler des éléments importants aux joueurs.",
    examples: [
      'Je prépare une séance pour mon groupe.',
      "J'ai besoin d'un scénario complet.",
      "Je veux consulter les secrets d'un thème ou d'une campagne.",
    ],
    ctaLabel: "Voir l'accès MJ",
  },
];

const contentTerms = [
  {
    title: 'Aides de jeu',
    icon: <BookOpen className="w-5 h-5 text-blue-400" />,
    access: 'Accès Joueur et MJ',
    description:
      "Des contenus conçus pour accompagner la pratique du jeu : création de personnage, règles utiles, options, conseils et découverte d'un thème sans révélation majeure.",
  },
  {
    title: 'Secrets',
    icon: <EyeOff className="w-5 h-5 text-amber-400" />,
    access: 'Accès MJ',
    description:
      "Des informations réservées à la préparation ou à l'animation : révélations, coulisses du thème, dangers cachés ou éléments que les joueurs doivent découvrir en partie.",
  },
  {
    title: 'Scénarios',
    icon: <Swords className="w-5 h-5 text-red-400" />,
    access: 'Accès MJ',
    description:
      "Des aventures prêtes à jouer ou à adapter. Elles contiennent la structure de l'histoire, les scènes importantes, les enjeux et les révélations.",
  },
];

const accessCards = [
  {
    title: 'Accès Joueur',
    subtitle: 'Pour jouer, découvrir et progresser sans révélation majeure',
    icon: <User className="w-6 h-6" />,
    points: [
      'Vous incarnez principalement un personnage.',
      'Vous voulez consulter les aides utiles aux joueurs.',
      'Vous souhaitez découvrir des univers sans spoiler.',
      'Vous ne souhaitez pas accéder aux scénarios ou secrets MJ.',
    ],
  },
  {
    title: 'Accès MJ',
    subtitle: 'Pour préparer, animer ou anticiper vos futures parties',
    icon: <Crown className="w-6 h-6" />,
    points: [
      'Vous êtes Maître du Jeu sur une ou plusieurs tables.',
      'Vous préparez une campagne ou un scénario.',
      'Vous comptez bientôt faire jouer un jeu.',
      'Vous acceptez de gérer les contenus sensibles selon vos tables.',
    ],
  },
];

const Glossaire: React.FC = () => {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
      <Header />

      <main className="pt-24 pb-20">
        {/* Page hero */}
        <section className="px-4 sm:px-8 lg:px-16 pb-12 border-b" style={{ borderColor: 'var(--border-copper)' }}>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link
                to="/"
                className="text-xs transition-colors"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                Accueil
              </Link>
              <ChevronRight className="w-3 h-3" style={{ color: 'var(--text-muted)' }} />
              <span className="text-xs text-[#F26A2E]">Glossaire JDR</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#F26A2E] border-opacity-30 rounded-full text-[#F26A2E] text-xs font-semibold mb-5" style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
              <HelpCircle className="w-3 h-3" />
              Joueur ou MJ ?
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight" style={{ color: 'var(--text-primary)' }}>
              Comprendre le JDR{' '}
              <span className="bg-gradient-to-r from-[#F26A2E] to-[#F2B441] bg-clip-text text-transparent">
                et choisir son accès
              </span>
            </h1>

            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--text-muted)' }}>
              Retrouvez les notions essentielles du jeu de rôle et identifiez l'accès JDRscroll adapté à votre manière de jouer, sans risquer de révéler inutilement des secrets de scénario.
            </p>
          </div>
        </section>

        {/* What is JDR intro */}
        <section className="px-4 sm:px-8 lg:px-16 py-12 border-b" style={{ borderColor: 'var(--border-copper)', backgroundColor: 'var(--bg-surface)' }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
                <Scroll className="w-6 h-6 text-[#F26A2E]" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>C'est quoi le JDR ?</h2>
                <p className="leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>
                  Le JDR, ou jeu de rôle, est une activité où plusieurs personnes construisent une histoire ensemble. Les joueurs incarnent des personnages et prennent des décisions dans l'aventure, tandis qu'un Maître du Jeu prépare le cadre, décrit les situations, arbitre les règles et révèle progressivement l'intrigue.
                </p>
                <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  Sur JDRscroll, cette distinction est importante : certains contenus accompagnent les joueurs sans dévoiler les secrets, tandis que d'autres sont réservés aux Maîtres du Jeu pour préparer et faire vivre les parties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roles */}
        <section className="px-4 sm:px-8 lg:px-16 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Votre rôle autour de la table</h2>
              <p className="text-sm leading-relaxed max-w-3xl" style={{ color: 'var(--text-muted)' }}>
                Le bon accès dépend d'abord de votre usage réel : découvrir l'aventure comme joueur, préparer une partie comme MJ, ou alterner entre les deux selon les tables.
              </p>
            </div>

            <div className="space-y-8">
              {roleTerms.map((term) => (
                <article
                  key={term.abbr}
                  className="border rounded-2xl overflow-hidden"
                  style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
                >
                  <div className="flex items-start gap-5 p-6 sm:p-8 border-b" style={{ borderColor: 'var(--border-copper)' }}>
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center border ${term.accent}`} style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
                      {term.icon}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h2 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>{term.abbr}</h2>
                        <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>{term.full}</span>
                      </div>
                      <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>{term.description}</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: 'var(--border-copper)' }}>
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-2 mb-3">
                        <ShieldCheck className="w-4 h-4 text-[#F26A2E]" />
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#F26A2E]">Dans JDRscroll</h3>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{term.appUsage}</p>
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-[#F2B441]" />
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#F2B441]">Cas d'usage</h3>
                      </div>
                      <ul className="space-y-2">
                        {term.examples.map(example => (
                          <li key={example} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br from-[#F26A2E] to-[#F2B441]" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-6 sm:px-8 py-4 border-t flex items-center justify-between gap-4" style={{ borderColor: 'var(--border-copper)', backgroundColor: 'var(--bg-surface-alt)' }}>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      Le bon accès est celui qui correspond à votre rôle autour de la table, pas celui qui ouvre le plus de contenus.
                    </p>
                    <Link
                      to="/pricing"
                      className="flex-shrink-0 text-xs font-semibold flex items-center gap-1 text-[#F26A2E] hover:text-[#F2B441] transition-colors"
                    >
                      {term.ctaLabel} <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Content types */}
        <section className="px-4 sm:px-8 lg:px-16 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Comprendre les contenus JDRscroll</h2>
              <p className="text-sm leading-relaxed max-w-3xl" style={{ color: 'var(--text-muted)' }}>
                Chaque ouvrage est associé à un usage. Certains contenus aident à jouer, d'autres servent à préparer ou animer une partie.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {contentTerms.map(term => (
                <article
                  key={term.title}
                  className="border rounded-2xl p-6"
                  style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
                      {term.icon}
                    </div>
                    <div>
                      <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{term.title}</h3>
                      <p className="text-xs font-semibold text-[#F26A2E]">{term.access}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{term.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Mixed usage */}
        <section className="px-4 sm:px-8 lg:px-16 pb-16">
          <div className="max-w-5xl mx-auto border rounded-2xl p-6 sm:p-8" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
                <ShieldCheck className="w-6 h-6 text-[#F26A2E]" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Et si vous êtes parfois joueur, parfois MJ ?</h2>
                <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>
                  Beaucoup de rôlistes changent de rôle selon les tables : MJ sur une campagne, joueur sur une autre, ou futur MJ d'un jeu qu'ils découvrent encore. Dans ce cas, l'accès MJ peut être pertinent.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  Le bon réflexe rôliste consiste simplement à éviter les scénarios et secrets des jeux que vous souhaitez vivre comme joueur. JDRscroll ne vous interdit rien : la plateforme vous aide à identifier les contenus sensibles pour préserver le plaisir de votre table.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Access choice */}
        <section className="px-4 sm:px-8 lg:px-16 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Quel accès choisir ?</h2>
              <p className="text-sm leading-relaxed max-w-3xl" style={{ color: 'var(--text-muted)' }}>
                Le choix ne dépend pas d'un niveau meilleur ou moins bon. Il dépend de votre rôle réel autour de chaque table.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {accessCards.map(card => (
                <article
                  key={card.title}
                  className="border rounded-2xl p-6 sm:p-8"
                  style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 bg-gradient-to-br from-[#F26A2E] to-[#F2B441] rounded-xl flex items-center justify-center text-[#0D0D0F]">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{card.title}</h3>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{card.subtitle}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {card.points.map(point => (
                      <li key={point} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br from-[#F26A2E] to-[#F2B441]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/pricing"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#F26A2E] hover:text-[#F2B441] transition-colors"
                  >
                    Comparer les abonnements <ChevronRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final note */}
        <section className="px-4 sm:px-8 lg:px-16 pb-16">
          <div className="max-w-5xl mx-auto border rounded-2xl p-6 sm:p-8" style={{ backgroundColor: 'var(--bg-surface-alt)', borderColor: 'var(--border-copper)' }}>
            <div className="flex items-start gap-4">
              <Sparkles className="w-6 h-6 text-[#F2B441] flex-shrink-0 mt-1" />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Sur JDRscroll, les accès sont pensés pour respecter la manière dont chacun joue, prépare ou découvre une partie. Les contenus MJ ne sont pas seulement plus nombreux : ils contiennent des informations qui doivent parfois rester cachées pour que l'aventure garde toute sa force.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-8 lg:px-16 pb-8">
          <div className="max-w-5xl mx-auto border rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Vous savez maintenant quel accès vous correspond ?</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Comparez les accès Joueur et MJ, ou explorez le catalogue avant de commencer.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full sm:w-auto">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-[#F26A2E]/20 transition-all active:scale-95"
              >
                Comparer les accès
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                to="/catalog"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border rounded-lg font-bold text-sm transition-all active:scale-95 hover:-translate-y-0.5"
                style={{ borderColor: 'var(--border-copper)', color: 'var(--text-primary)' }}
              >
                Explorer le catalogue
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Glossaire;
