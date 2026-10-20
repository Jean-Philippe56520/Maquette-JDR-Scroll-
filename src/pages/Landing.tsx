import { Link } from 'react-router-dom';
import { Dice6, Scroll, BookOpen, Crown, TrendingUp, Shield, ChevronRight, Flame } from 'lucide-react';
import { getTrendingBooks, getNewBooks } from '../data/mockData';
import BookCard from '../components/BookCard';
import PartnerLogoMarquee from '../components/PartnerLogoMarquee';

const Landing: React.FC = () => {
  const trendingBooks = getTrendingBooks().slice(0, 4);
  const newBooks = getNewBooks().slice(0, 4);

  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm" style={{ backgroundColor: 'color-mix(in srgb, var(--bg-base) 95%, transparent)', borderColor: 'var(--border-copper)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-[#F26A2E] to-[#F2B441] rounded-lg flex items-center justify-center">
                <Scroll className="w-5 h-5 text-[#0D0D0F]" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-[#F26A2E] to-[#F2B441] bg-clip-text text-transparent">
                JDRscroll
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <Link to="/catalog" className="text-sm transition-colors hidden sm:inline" style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                Catalogue
              </Link>
              <Link to="/pricing" className="text-sm transition-colors hidden sm:inline" style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                Offres
              </Link>
              <Link
                to="/auth"
                className="px-4 py-2 text-sm font-semibold rounded-lg transition-all active:scale-95 border"
                style={{ color: 'var(--text-primary)', borderColor: 'var(--border-copper-hover)' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--bg-surface)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '')}
              >
                Se connecter
              </Link>
                          </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(ellipse at center, var(--bg-surface-alt) 0%, var(--bg-base) 70%)' }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F26A2E] opacity-5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#F26A2E] border-opacity-30 rounded-full text-[#F26A2E] text-xs font-semibold mb-6" style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
            <Flame className="w-3 h-3" />
            Nouvelle génération de bibliothèque JDR
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
            Votre bibliothèque<br />
            <span className="bg-gradient-to-r from-[#F26A2E] to-[#F2B441] bg-clip-text text-transparent">
              de jeux de rôle
            </span>
          </h1>

          <p className="text-lg mb-8 leading-relaxed mx-auto max-w-xl" style={{ color: 'var(--text-muted)' }}>
            Aides de jeu, secrets et scénarios complets. Tout le contenu éditorial du jeu de rôle en un seul endroit, lisible partout.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg font-bold text-base hover:shadow-xl hover:shadow-[#F26A2E]/25 transition-all active:scale-95 hover:-translate-y-0.5"
            >
              7 jours d'essai gratuit
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/catalog"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border rounded-lg font-semibold transition-all active:scale-95"
              style={{ borderColor: 'var(--border-copper-hover)', color: 'var(--text-primary)' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--bg-surface)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '')}
            >
              <BookOpen className="w-4 h-4" />
              Explorer le catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* Glossary nudge */}
      <section className="px-4 sm:px-6 lg:px-8 py-4" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-5 py-4 rounded-xl border" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#F26A2E] to-[#F2B441] text-[#0D0D0F]">
                <Dice6 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                  Vous êtes nouveau dans le <span className="text-[#F26A2E]">JDR</span> ?
                </p>
                <p className="text-xs mt-0.5 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  Découvrez le vocabulaire essentiel : JDR, MJ, PJ, campagne, scénario...<br className="hidden sm:block" />
                  Comprenez les termes du jeu de rôle en quelques minutes.
                </p>
              </div>
            </div>
            <Link
              to="/glossaire"
              className="flex-shrink-0 flex items-center gap-1.5 text-[#F26A2E] text-sm font-medium hover:text-[#F2B441] transition-colors whitespace-nowrap"
            >
              Consulter le glossaire <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y py-8 px-4 sm:px-6 lg:px-8" style={{ borderColor: 'var(--border-copper)', backgroundColor: 'var(--bg-surface)' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: '44', label: 'Ouvrages' },
            { value: '23', label: 'Jeux de rôle' },
            { value: '6 500+', label: 'Lecteurs actifs' },
            { value: '9 thèmes', label: 'Couverts' }
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#F26A2E] to-[#F2B441] bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tendances & Nouveautés */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Tendances */}
          <div>
            <div className="mb-6">
              <Link
                to="/trends"
                className="group inline-flex items-center gap-2 transition-colors active:scale-95"
                style={{ color: 'var(--text-primary)' }}
                aria-label="Voir toutes les tendances"
              >
                <Flame className="w-5 h-5 text-[#F26A2E]" />
                <h2 className="text-2xl sm:text-3xl font-bold group-hover:text-[#F2B441] transition-colors">Tendances</h2>
                <ChevronRight className="w-5 h-5 text-[#F26A2E] transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="flex sm:grid sm:grid-cols-4 gap-4 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 scroll-smooth" style={{ scrollbarWidth: 'none' }}>
              {trendingBooks.map(book => (
                <div key={book.id} className="flex-shrink-0 w-44 sm:w-auto">
                  <BookCard book={book} />
                </div>
              ))}
            </div>
          </div>

          {/* Nouveautés */}
          <div>
            <div className="mb-6">
              <Link
                to="/new"
                className="group inline-flex items-center gap-2 transition-colors active:scale-95"
                style={{ color: 'var(--text-primary)' }}
                aria-label="Voir toutes les nouveautés"
              >
                <span className="w-5 h-5 flex items-center justify-center rounded bg-[#F2B441] text-[#0D0D0F] text-[10px] font-bold">N</span>
                <h2 className="text-2xl sm:text-3xl font-bold group-hover:text-[#F2B441] transition-colors">Nouveautés</h2>
                <ChevronRight className="w-5 h-5 text-[#F26A2E] transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="flex sm:grid sm:grid-cols-4 gap-4 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 scroll-smooth" style={{ scrollbarWidth: 'none' }}>
              {newBooks.map(book => (
                <div key={book.id} className="flex-shrink-0 w-44 sm:w-auto">
                  <BookCard book={book} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Trust signals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { icon: <Shield className="w-6 h-6 text-[#F26A2E] mx-auto" />, title: '7 jours d\'essai gratuit', text: 'Réservé aux nouveaux abonnés. Le paiement intervient à la fin de la période d\'essai.' },
            { icon: <TrendingUp className="w-6 h-6 text-[#F26A2E] mx-auto" />, title: 'Contenu enrichi', text: 'Nouveaux livres chaque mois dans tous les thèmes.' },
            { icon: <Crown className="w-6 h-6 text-[#F26A2E] mx-auto" />, title: 'Qualité éditoriale', text: 'Contenu vérifié et validé par des experts JDR.' }
          ].map(item => (
            <div key={item.title} className="p-6 border rounded-xl" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
              <div className="mb-3">{item.icon}</div>
              <h4 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h4>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(to bottom, var(--bg-base), var(--bg-surface-alt))' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Prêt à explorer des mondes infinis ?
          </h2>
          <p className="mb-8 text-lg" style={{ color: 'var(--text-muted)' }}>
            Rejoignez plus de 6 500 lecteurs actifs. Votre prochaine session commence ici.
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-9 py-4 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#F26A2E]/30 transition-all active:scale-95 hover:-translate-y-1"
          >
            Choisir mon abonnement
            <ChevronRight className="w-5 h-5" />
          </Link>
          <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>7 jours d'essai gratuit · Annulable à tout moment</p>
        </div>
      </section>

      <PartnerLogoMarquee />

      {/* Footer */}
      <footer className="border-t py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border-copper)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Scroll className="w-4 h-4 text-[#F26A2E]" />
                <span className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>JDRscroll</span>
              </div>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>La bibliothèque infinie de mondes à explorer.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm" style={{ color: 'var(--text-primary)' }}>Produit</h4>
              <ul className="space-y-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                <li><Link to="/catalog" className="hover:text-[#F26A2E] transition-colors">Catalogue</Link></li>
                <li><Link to="/creators" className="hover:text-[#F26A2E] transition-colors">Créateurs</Link></li>
                <li><Link to="/partners" className="hover:text-[#F26A2E] transition-colors">Partenaires</Link></li>
                <li><Link to="/pricing" className="hover:text-[#F26A2E] transition-colors">Offres</Link></li>
                <li><Link to="/new" className="hover:text-[#F26A2E] transition-colors">Nouveautés</Link></li>
                <li><Link to="/glossaire" className="hover:text-[#F26A2E] transition-colors">Glossaire JDR</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm" style={{ color: 'var(--text-primary)' }}>Compte</h4>
              <ul className="space-y-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                <li><Link to="/auth" className="hover:text-[#F26A2E] transition-colors">Se connecter</Link></li>
                <li><Link to="/pricing" className="hover:text-[#F26A2E] transition-colors">Offres</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm" style={{ color: 'var(--text-primary)' }}>Légal</h4>
              <ul className="space-y-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                <li><span className="cursor-default" style={{ color: 'var(--text-muted)' }}>Conditions</span></li>
                <li><span className="cursor-default" style={{ color: 'var(--text-muted)' }}>Confidentialité</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-xs" style={{ borderColor: 'var(--border-copper)', color: 'var(--text-muted)' }}>
            © 2026 JDRscroll · Prototype investisseur
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
