import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight, Flame, Sparkles, Crown, BarChart3, Layers } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookCard from '../components/BookCard';
import PartnerLogoMarquee from '../components/PartnerLogoMarquee';
import UniverseCarousel from '../components/UniverseCarousel';
import { getTrendingBooks, getNewBooks, getAllGames, getAllBooks, getUniverseRows } from '../data/mockData';
import { useUser } from '../context/UserContext';
import { useRef } from 'react';

const HorizontalScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className="flex gap-4 overflow-x-auto pb-3 scroll-smooth" style={{ scrollbarWidth: 'none' }}>
      {children}
    </div>
  );
};

const Home: React.FC = () => {
  const { user, library } = useUser();
  const trending = getTrendingBooks().slice(0, 8);
  const newBooks = getNewBooks().slice(0, 8);
  const games = getAllGames().slice(0, 6);
  const allBooks = getAllBooks();
  const universeRows = getUniverseRows();

  const isConnected = user.role !== 'visitor';

  const recentBooks = [...library].reverse().slice(0, 3)
    .map(id => allBooks.find(b => b.id === id))
    .filter(Boolean) as typeof allBooks;

  if (!isConnected) {
    return (
      <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
        <Header />
        <main className="pt-24 pb-20">
          {/* Hero for visitor */}
          <section
            className="px-4 sm:px-6 lg:px-8 py-14"
            style={{ background: 'linear-gradient(to bottom, var(--bg-surface-alt), var(--bg-base))' }}
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F26A2E]/10 border border-[#F26A2E]/30 rounded-full text-[#F26A2E] text-xs font-semibold mb-5">
                  <Flame className="w-3 h-3" /> Bibliothèque JDR
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight" style={{ color: 'var(--text-primary)' }}>
                  Explorez la bibliothèque JDR la plus complète
                </h1>
                <p className="mb-8 leading-relaxed max-w-lg" style={{ color: 'var(--text-muted)' }}>
                  Aides de jeu, secrets de MJ, scénarios complets. Découvrez les offres PJ et MJ, avec 7 jours d'essai gratuit pour les nouveaux abonnés.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/pricing"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg font-bold hover:shadow-lg hover:shadow-[#F26A2E]/20 transition-all active:scale-95 hover:-translate-y-0.5"
                  >
                    7 jours d'essai gratuit <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/catalog"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all active:scale-95 border"
                    style={{ borderColor: 'var(--border-copper-hover)', color: 'var(--text-primary)' }}
                  >
                    <BookOpen className="w-4 h-4" /> Explorer
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 w-full md:w-72 flex-shrink-0">
                {games.map(game => (
                  <div key={game.id} className="aspect-video rounded-lg overflow-hidden border" style={{ borderColor: 'var(--border-copper)' }}>
                    <img src={game.cover} alt={game.name} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Teaser — trending */}
          <section className="px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-7xl mx-auto">
              <div className="mb-6">
                <Link
                  to="/trends"
                  className="group inline-flex items-center gap-2 transition-colors active:scale-95"
                  style={{ color: 'var(--text-primary)' }}
                  aria-label="Voir toutes les tendances"
                >
                  <Flame className="w-5 h-5 text-[#F26A2E]" />
                  <h2 className="text-xl font-bold group-hover:text-[#F2B441] transition-colors">Tendances</h2>
                  <ChevronRight className="w-4 h-4 text-[#F26A2E] transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
              <HorizontalScroll>
                {trending.map(book => (
                  <div key={book.id} className="flex-shrink-0 w-44 sm:w-52">
                    <BookCard book={book} />
                  </div>
                ))}
              </HorizontalScroll>
            </div>
          </section>

          {/* CTA strip */}
          <section className="px-4 sm:px-6 lg:px-8 py-10">
            <div
              className="max-w-5xl mx-auto border border-[#F26A2E] border-opacity-20 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6"
              style={{ background: 'linear-gradient(to right, var(--bg-surface-alt), var(--bg-surface))' }}
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Accédez à tout le contenu</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Abonnement PJ à 5,99 €/mois · MJ à 7,99 €/mois</p>
              </div>
              <Link
                to="/pricing"
                className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg font-bold hover:shadow-lg hover:shadow-[#F26A2E]/20 transition-all active:scale-95 hover:-translate-y-0.5"
              >
                Choisir mon abonnement
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
      <Header />
      <main className="pt-24 pb-20">

        {/* Welcome banner */}
        <section
          className="px-4 sm:px-6 lg:px-8 py-10"
          style={{ background: 'linear-gradient(to bottom, var(--bg-surface-alt), var(--bg-base))' }}
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
            <div>
              <p className="text-[#F26A2E] text-xs font-semibold uppercase tracking-wider mb-1">
                {user.plan === 'gm' ? 'MJ' : 'PJ'}
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Bienvenue, {user.name.split(' ')[0]}
              </h1>
              <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                {user.plan === 'gm' ? 'Accès complet · Secrets, scénarios, aides de jeu' : 'Accès PJ · Aides de jeu illimitées'}
              </p>
            </div>
            {user.role === 'publisher' ? (
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg font-bold text-sm hover:shadow-lg transition-all active:scale-95 flex-shrink-0"
              >
                <BarChart3 className="w-4 h-4" /> Dashboard éditeur
              </Link>
            ) : user.plan === 'player' ? (
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#F26A2E] border-opacity-40 text-[#F26A2E] rounded-lg font-semibold text-sm transition-all active:scale-95 flex-shrink-0 hover:bg-[#F26A2E]/10"
              >
                <Crown className="w-4 h-4" /> Passer MJ
              </Link>
            ) : null}
          </div>
        </section>

        {/* Catalog quick-access */}
        <section className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <Link
              to="/catalog"
              className="group flex items-center justify-between gap-6 rounded-xl px-6 py-5 transition-all hover:shadow-lg border hover:border-[#F26A2E] hover:border-opacity-50"
              style={{
                background: 'linear-gradient(to right, var(--bg-surface), var(--bg-surface-alt))',
                borderColor: 'var(--border-copper)',
              }}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-gradient-to-br from-[#F26A2E] to-[#F2B441] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Layers className="w-5 h-5 text-[#0D0D0F]" />
                </div>
                <div>
                  <p className="font-bold leading-snug" style={{ color: 'var(--text-primary)' }}>Parcourir tout le catalogue</p>
                  <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>Filtrez par univers, catégorie ou niveau d'abonnement</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[#F26A2E] font-semibold text-sm flex-shrink-0 group-hover:translate-x-1 transition-transform">
                Explorer <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>

        {/* Continue reading */}
        {recentBooks.length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#F2B441]" />
                  <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Reprendre la lecture</h2>
                </div>
                <Link to="/library" className="text-sm text-[#F26A2E] hover:text-[#F2B441] flex items-center gap-1 transition-colors active:scale-95">
                  Ma bibliothèque <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex gap-4 flex-wrap sm:flex-nowrap">
                {recentBooks.map(book => (
                  <Link
                    key={book.id}
                    to={`/reader/${book.id}`}
                    className="flex-shrink-0 w-56 rounded-lg overflow-hidden border transition-all active:scale-95 group hover:border-[#F26A2E] hover:border-opacity-40"
                    style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
                  >
                    <div className="h-32 relative overflow-hidden">
                      <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <div className="p-3">
                      <p className="text-xs text-[#F26A2E] font-medium truncate">{book.gameName}</p>
                      <p className="text-sm font-semibold group-hover:text-[#F2B441] transition-colors leading-snug mt-0.5" style={{ color: 'var(--text-primary)' }}>{book.title}</p>
                      <p className="text-xs mt-1.5" style={{ color: 'var(--text-muted)' }}>{book.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Trending */}
        <section className="px-4 sm:px-6 lg:px-8 py-8 border-t" style={{ borderColor: 'var(--border-copper)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-5">
              <Link
                to="/trends"
                className="group inline-flex items-center gap-2 transition-colors active:scale-95"
                style={{ color: 'var(--text-primary)' }}
                aria-label="Voir toutes les tendances"
              >
                <Flame className="w-5 h-5 text-[#F26A2E]" />
                <h2 className="text-lg font-bold group-hover:text-[#F2B441] transition-colors">Tendances</h2>
                <ChevronRight className="w-4 h-4 text-[#F26A2E] transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <HorizontalScroll>
              {trending.map(book => (
                <div key={book.id} className="flex-shrink-0 w-44 sm:w-52">
                  <BookCard book={book} />
                </div>
              ))}
            </HorizontalScroll>
          </div>
        </section>

        {/* New */}
        <section className="px-4 sm:px-6 lg:px-8 py-8 border-t" style={{ borderColor: 'var(--border-copper)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-5">
              <Link
                to="/new"
                className="group inline-flex items-center gap-2 transition-colors active:scale-95"
                style={{ color: 'var(--text-primary)' }}
                aria-label="Voir toutes les nouveautés"
              >
                <Sparkles className="w-5 h-5 text-[#F2B441]" />
                <h2 className="text-lg font-bold group-hover:text-[#F2B441] transition-colors">Nouveautés</h2>
                <ChevronRight className="w-4 h-4 text-[#F26A2E] transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <HorizontalScroll>
              {newBooks.map(book => (
                <div key={book.id} className="flex-shrink-0 w-44 sm:w-52">
                  <BookCard book={book} />
                </div>
              ))}
            </HorizontalScroll>
          </div>
        </section>

        {/* Explore by universe */}
        <section className="py-8 border-t" style={{ borderColor: 'var(--border-copper)' }}>
          <div className="px-4 sm:px-6 lg:px-8 mb-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#F26A2E]" />
                <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Explorer par univers</h2>
              </div>
            </div>
          </div>

          {universeRows.map(({ universe, games }) => (
            <UniverseCarousel
              key={universe.id}
              universe={universe}
              games={games}
              maxGames={8}
            />
          ))}
        </section>

        {/* Upgrade CTA */}
        {user.plan === 'player' && (
          <section className="px-4 sm:px-6 lg:px-8 py-8">
            <div
              className="max-w-5xl mx-auto border border-[#F26A2E] border-opacity-20 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-5"
              style={{ background: 'linear-gradient(to right, var(--bg-surface-alt), var(--bg-surface))' }}
            >
              <Crown className="w-10 h-10 text-[#F26A2E] flex-shrink-0" />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Passez Maître du Jeu</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Débloquez les Secrets et Scénarios avec l’abonnement MJ.</p>
              </div>
              <Link
                to="/pricing"
                className="flex-shrink-0 px-5 py-2.5 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg font-bold text-sm hover:shadow-lg transition-all active:scale-95 hover:-translate-y-0.5"
              >
                Passer à l’offre MJ
              </Link>
            </div>
          </section>
        )}
      </main>
      <PartnerLogoMarquee />
      <Footer />
    </div>
  );
};

export default Home;