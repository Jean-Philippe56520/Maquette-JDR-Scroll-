import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameCard from '../components/GameCard';
import UniverseCarousel from '../components/UniverseCarousel';
import { getAllBooks, getAllGames, getUniverseRows } from '../data/mockData';

const Catalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const allGames = getAllGames();
  const universeRows = getUniverseRows();
  const normalizedSearch = searchTerm.toLowerCase();

  const searchedGames = searchTerm.length >= 2
    ? allGames.filter(g =>
        g.name.toLowerCase().includes(normalizedSearch) ||
        g.universe.toLowerCase().includes(normalizedSearch) ||
        g.tags.some(t => t.toLowerCase().includes(normalizedSearch))
      )
    : [];

  const searchedBooks = searchTerm.length >= 2
    ? getAllBooks().filter(b =>
        b.title.toLowerCase().includes(normalizedSearch) ||
        b.gameName.toLowerCase().includes(normalizedSearch) ||
        b.universe.toLowerCase().includes(normalizedSearch) ||
        b.tags.some(t => t.toLowerCase().includes(normalizedSearch))
      )
    : [];

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
      <Header />

      <main className="pt-24 pb-20">
        <div className="px-4 sm:px-6 lg:px-8 mb-10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Catalogue</h1>
            <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
              Filtrez, ouvrez uniquement les univers qui vous intéressent et concentrez-vous sur votre prochaine table.
            </p>

            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Rechercher un jeu, un univers, un tag..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-10 py-3 border rounded-xl text-sm focus:outline-none focus:border-[#F26A2E] focus:border-opacity-50 transition-colors"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-copper)',
                  color: 'var(--text-primary)',
                }}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xl leading-none transition-colors"
                  style={{ color: 'var(--text-muted)' }}
                  aria-label="Effacer la recherche"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>

        {searchTerm.length >= 2 ? (
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-10">
              {searchedGames.length > 0 && (
                <div>
                  <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Jeux ({searchedGames.length})</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {searchedGames.map(game => (
                      <GameCard key={game.id} game={game} />
                    ))}
                  </div>
                </div>
              )}

              {searchedBooks.length > 0 && (
                <div>
                  <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Ouvrages ({searchedBooks.length})</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {searchedBooks.map(book => (
                      <Link
                        key={book.id}
                        to={`/book/${book.id}`}
                        className="group block border rounded-xl overflow-hidden hover:border-[#F26A2E] hover:border-opacity-40 transition-all hover:-translate-y-1 active:scale-95"
                        style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
                      >
                        <div className="relative h-36 overflow-hidden">
                          <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                        <div className="p-3">
                          <p className="text-[10px] text-[#F26A2E] font-semibold uppercase truncate mb-0.5">{book.gameName}</p>
                          <p className="text-xs font-bold line-clamp-2 group-hover:text-[#F2B441] transition-colors leading-snug" style={{ color: 'var(--text-primary)' }}>{book.title}</p>
                          <p className="text-[10px] mt-1" style={{ color: 'var(--text-muted)' }}>{book.category}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {searchedGames.length === 0 && searchedBooks.length === 0 && (
                <div className="text-center py-20">
                  <BookOpen className="w-12 h-12 opacity-20 mx-auto mb-4" style={{ color: 'var(--text-muted)' }} />
                  <p style={{ color: 'var(--text-muted)' }}>Aucun résultat pour "{searchTerm}"</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <div className="px-4 sm:px-6 lg:px-8 mb-5">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Univers</h2>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  Les univers sont repliés par défaut pour garder un catalogue lisible. Dépliez uniquement ceux qui vous intéressent.
                </p>
              </div>
            </div>

            {universeRows.map(({ universe, games }) => (
              <UniverseCarousel
                key={universe.id}
                universe={universe}
                games={games}
                defaultCollapsed
                compact
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
