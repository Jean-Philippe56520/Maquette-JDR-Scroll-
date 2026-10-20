import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Heart, ChevronDown, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookCard from '../components/BookCard';
import { getAllBooks, getGameById } from '../data/mockData';
import type { Book } from '../data/mockData';
import { useUser } from '../context/UserContext';

type FavoriteGroup = { gameId: string; name: string; cover?: string; books: Book[] };
const collator = new Intl.Collator('fr', { sensitivity: 'base', numeric: true });

const Library: React.FC = () => {
  const { user, favorites } = useUser();
  const [searchTerm, setSearchTerm] = useState('');
  const [collapsedGames, setCollapsedGames] = useState<string[]>([]);

  const savedBooks = getAllBooks().filter(book => favorites.includes(book.id));
  const byGame = new Map<string, FavoriteGroup>();
  savedBooks.forEach(book => {
    const group = byGame.get(book.gameId);
    if (group) group.books.push(book);
    else {
      const game = getGameById(book.gameId);
      byGame.set(book.gameId, {
        gameId: book.gameId,
        name: game?.name ?? book.gameName,
        cover: game?.cover,
        books: [book]
      });
    }
  });
  const groups = [...byGame.values()]
    .map(group => ({ ...group, books: group.books.sort((a, b) => collator.compare(a.title, b.title)) }))
    .sort((a, b) => collator.compare(a.name, b.name));

  const query = searchTerm.trim().toLocaleLowerCase('fr');
  const filteredGroups = !query ? groups : groups
    .map(group => ({
      ...group,
      books: group.name.toLocaleLowerCase('fr').includes(query)
        ? group.books
        : group.books.filter(book => book.title.toLocaleLowerCase('fr').includes(query)),
    }))
    .filter(group => group.books.length > 0);

  const toggleGroup = (id: string) => {
    setCollapsedGames(current =>
      current.includes(id) ? current.filter(item => item !== id) : [...current, id]
    );
  };

  const changeSearch = (value: string) => {
    setSearchTerm(value);
    if (value.trim()) setCollapsedGames([]);
  };

  if (user.role === 'visitor') {
    return (
      <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
        <Header />
        <main className="pt-24 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center py-12">
            <p className="text-lg mb-4" style={{ color: 'var(--text-muted)' }}>
              Les favoris sont accessibles à tous les utilisateurs connectés, même sans abonnement.
            </p>
            <Link
              to="/auth"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg font-bold hover:shadow-lg hover:shadow-[#F26A2E]/20 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Se connecter ou créer un compte
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-1 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}><Heart className="w-7 h-7 text-[#F26A2E]" /> Mes favoris</h1>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              {savedBooks.length} {savedBooks.length === 1 ? 'ouvrage' : 'ouvrages'} dans {groups.length} {groups.length === 1 ? 'jeu' : 'jeux'}
            </p>
            {groups.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                <button type="button" onClick={() => setCollapsedGames([])} className="px-4 py-2 text-sm rounded-lg border hover:border-[#F26A2E] transition-colors" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-copper)' }}>Tout déplier</button>
                <button type="button" onClick={() => setCollapsedGames(groups.map(group => group.gameId))} className="px-4 py-2 text-sm rounded-lg border hover:border-[#F26A2E] transition-colors" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-copper)' }}>Tout replier</button>
              </div>
            )}
          </div>

          {savedBooks.length > 0 && (
            <div className="mb-6 relative">
              <Search className="absolute left-4 top-3 w-5 h-5" style={{ color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Rechercher un jeu ou un ouvrage..."
                value={searchTerm}
                onChange={e => changeSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none focus:border-[#F26A2E] transition-colors text-sm"
                style={{
                  backgroundColor: 'var(--input-bg)',
                  borderColor: 'var(--border-copper)',
                  color: 'var(--text-primary)',
                }}
              />
            </div>
          )}

          {savedBooks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div
                className="w-16 h-16 border rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
              >
                <BookOpen className="w-8 h-8" style={{ color: 'var(--text-muted)' }} />
              </div>
              <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Aucun favori pour le moment</h2>
              <p className="mb-8 max-w-xs" style={{ color: 'var(--text-muted)' }}>
                Cliquez sur le cœur d'un ouvrage pour l'ajouter aux favoris. Les ouvrages sont ensuite regroupés par jeu.
              </p>
              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg font-bold hover:shadow-lg hover:shadow-[#F26A2E]/20 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <BookOpen className="w-4 h-4" />
                Explorer le catalogue
              </Link>
            </div>
          ) : filteredGroups.length === 0 ? (
            <div className="text-center py-12">
              <p style={{ color: 'var(--text-muted)' }}>Aucun favori ne correspond à cette recherche</p>
            </div>
          ) : (
            <div className="space-y-5">
              {filteredGroups.map(group => {
                const collapsed = collapsedGames.includes(group.gameId);
                const panelId = 'favoris-jeu-' + group.gameId;
                return (
                  <section key={group.gameId} className="rounded-xl border overflow-hidden" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
                    <div className="flex items-center gap-4 px-4 sm:px-5 py-4" style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
                      {group.cover && <img src={group.cover} alt="" className="w-14 h-12 sm:w-20 sm:h-14 rounded-lg object-cover flex-shrink-0" />}
                      <div className="min-w-0 flex-1">
                        <Link to={'/game/' + group.gameId} className="inline-flex max-w-full gap-1 items-center text-base sm:text-xl font-bold hover:text-[#F26A2E] transition-colors" style={{ color: 'var(--text-primary)' }}>
                          <span className="truncate">{group.name}</span>
                          <ChevronRight className="w-4 h-4 flex-shrink-0 text-[#F26A2E]" />
                        </Link>
                        <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                          {group.books.length} {group.books.length === 1 ? 'ouvrage favori' : 'ouvrages favoris'}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleGroup(group.gameId)}
                        aria-expanded={!collapsed}
                        aria-controls={panelId}
                        aria-label={(collapsed ? 'Déplier' : 'Replier') + ' les ouvrages de ' + group.name}
                        className="flex-shrink-0 flex items-center gap-2 px-3 sm:px-4 py-2.5 border rounded-lg hover:border-[#F26A2E] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F2B441]"
                        style={{ borderColor: 'var(--border-copper)', color: 'var(--text-primary)' }}
                      >
                        <span className="hidden sm:inline text-xs font-semibold">{collapsed ? 'Déplier' : 'Replier'}</span>
                        <ChevronDown className={'w-5 h-5 transition-transform ' + (collapsed ? '-rotate-90' : '')} />
                      </button>
                    </div>
                    {!collapsed && (
                      <div id={panelId} className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {group.books.map(book => <BookCard key={book.id} book={book} />)}
                      </div>
                    )}
                  </section>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Library;
