import React, { useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Lock, Flame, Building2, Tags, Heart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getGameById, getBooksByGameId, getUniverseByName, getPublisherByGameId } from '../data/mockData';
import { Book, BookCategory } from '../data/mockData';
import { useUser } from '../context/UserContext';

const CATEGORIES: BookCategory[] = ['Aides de jeu', 'Secrets', 'Scénarios'];

const CATEGORY_META: Record<BookCategory, { label: string; description: string }> = {
  'Aides de jeu': {
    label: 'Aides de jeu',
    description: 'Guides, règles et ressources pour accompagner la découverte et la pratique du jeu',
  },
  Secrets: {
    label: 'Secrets',
    description: 'Contenus de préparation, révélations et éléments sensibles réservés au Maître du Jeu',
  },
  Scénarios: {
    label: 'Scénarios',
    description: 'Aventures, intrigues et structures de parties prêtes à jouer',
  },
};

const BookSlide: React.FC<{ book: Book }> = ({ book }) => {
  const { user, toggleFavorite, isFavorite } = useUser();
  const navigate = useNavigate();
  const favorite = isFavorite(book.id);

  const hasAccess = () => {
    if (book.requiredPlan === 'free') return user.role !== 'visitor';
    if (!user.plan) return false;
    if (book.requiredPlan === 'player') return user.plan === 'player' || user.plan === 'gm';
    if (book.requiredPlan === 'gm') return user.plan === 'gm';
    return false;
  };

  const locked = !hasAccess();

  return (
    <div className="relative group flex-shrink-0 w-44 sm:w-52">
      <Link to={`/book/${book.id}`} className="block active:scale-95 transition-transform" aria-label={`Voir la fiche de ${book.title}`}>
      <div className="border rounded-xl overflow-hidden hover:border-[#F26A2E] hover:border-opacity-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
        <div className="relative h-44 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, var(--bg-surface-alt), var(--bg-base))' }}>
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {book.isTrending && (
              <div className="flex items-center gap-1 px-1.5 py-0.5 bg-[#F26A2E] rounded text-[10px] font-bold text-[#0D0D0F]">
                <Flame className="w-2.5 h-2.5" /> Tendance
              </div>
            )}
            {book.isNew && (
              <div className="px-1.5 py-0.5 bg-[#F2B441] rounded text-[10px] font-bold text-[#0D0D0F]">
                Nouveau
              </div>
            )}
          </div>

          {locked && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex flex-col items-center gap-1.5">
                <Lock className="w-6 h-6 text-[#F26A2E]" />
                <span className="text-[10px] text-white font-semibold">Abonnement requis</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-3">
          <h4 className="text-xs font-bold line-clamp-2 group-hover:text-[#F2B441] transition-colors leading-snug mb-2" style={{ color: 'var(--text-primary)' }}>
            {book.title}
          </h4>
          <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{book.readingTime} min</span>
        </div>
      </div>
      </Link>
      <button
        type="button"
        onClick={() => user.role === 'visitor' ? navigate('/auth') : toggleFavorite(book.id)}
        aria-pressed={favorite}
        aria-label={(favorite ? 'Retirer des favoris : ' : 'Ajouter aux favoris : ') + book.title}
        title={user.role === 'visitor' ? 'Se connecter pour ajouter un favori' : (favorite ? 'Retirer des favoris' : 'Ajouter aux favoris')}
        className={"absolute z-10 top-2 right-2 w-9 h-9 flex items-center justify-center rounded-full border border-white/20 shadow-lg transition-all hover:scale-110 " + (favorite ? 'bg-[#F26A2E] text-white' : 'bg-black/75 text-white hover:bg-[#F26A2E]')}
      >
        <Heart className="w-5 h-5" fill={favorite ? 'currentColor' : 'none'} />
      </button>
    </div>
  );
};

const BookCarousel: React.FC<{ books: Book[] }> = ({ books }) => {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 'left' | 'right') =>
    ref.current?.scrollBy({ left: dir === 'right' ? 380 : -380, behavior: 'smooth' });

  if (books.length === 0) {
    return (
      <div className="flex items-center justify-center py-16 border rounded-xl" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Aucun ouvrage dans cette catégorie</p>
      </div>
    );
  }

  return (
    <div className="relative group/carousel">
      <button
        onClick={() => scroll('left')}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 border rounded-full items-center justify-center hidden group-hover/carousel:flex transition-all active:scale-95 shadow-lg"
        style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper-hover)' }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--bg-surface-alt)')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--bg-surface)')}
      >
        <ChevronLeft className="w-4 h-4" style={{ color: 'var(--text-primary)' }} />
      </button>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {books.map(book => (
          <BookSlide key={book.id} book={book} />
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 border rounded-full items-center justify-center hidden group-hover/carousel:flex transition-all active:scale-95 shadow-lg"
        style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper-hover)' }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--bg-surface-alt)')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--bg-surface)')}
      >
        <ChevronRight className="w-4 h-4" style={{ color: 'var(--text-primary)' }} />
      </button>
    </div>
  );
};

const GameDetail: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const game = gameId ? getGameById(gameId) : undefined;
  const [activeCategory, setActiveCategory] = useState<BookCategory>('Aides de jeu');

  if (!game) {
    return (
      <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
        <Header />
        <main className="pt-24 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center py-20">
            <p style={{ color: 'var(--text-muted)' }}>Jeu non trouvé</p>
            <Link to="/catalog" className="mt-4 inline-block text-[#F26A2E] hover:text-[#F2B441] transition-colors">
              Retour au catalogue
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const allBooks = getBooksByGameId(game.id);
  const booksByCategory = (cat: BookCategory) => allBooks.filter(b => b.category === cat);
  const theme = getUniverseByName(game.universe);
  const publisher = getPublisherByGameId(game.id);

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
      <Header />

      {/* Hero — full bleed image with dark overlay, always readable */}
      <section className="relative h-[60vh] min-h-[480px] overflow-hidden">
        <img
          src={game.cover}
          alt={game.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

        <div className="absolute top-24 left-4 sm:left-8 lg:left-16">
          <Link
            to="/catalog"
            className="flex items-center gap-2 text-white/70 hover:text-[#F26A2E] transition-colors text-sm active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
            Catalogue
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 lg:px-16 pb-12">
          {theme ? (
            <Link
              to={`/univers/${theme.slug}`}
              className="inline-flex text-[#F26A2E] hover:text-[#F2B441] text-xs font-bold uppercase tracking-widest mb-2 transition-colors"
              aria-label={`Thème : ${game.universe}`}
            >
              {game.universe}
            </Link>
          ) : (
            <p className="text-[#F26A2E] text-xs font-bold uppercase tracking-widest mb-2">{game.universe}</p>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            {game.name}
          </h1>

          <div className="flex flex-wrap gap-3 mt-6">
            {theme ? (
              <Link
                to={`/univers/${theme.slug}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold text-white/90 hover:text-[#F2B441] transition-colors"
                style={{ backgroundColor: 'rgba(13, 13, 15, 0.72)', borderColor: 'rgba(242, 106, 46, 0.45)' }}
                aria-label={`Thème : ${game.universe}`}
              >
                <Tags className="w-3.5 h-3.5 text-[#F26A2E]" />
                <span>Thème : {game.universe}</span>
              </Link>
            ) : (
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold text-white/90"
                style={{ backgroundColor: 'rgba(13, 13, 15, 0.72)', borderColor: 'rgba(242, 106, 46, 0.45)' }}
              >
                <Tags className="w-3.5 h-3.5 text-[#F26A2E]" />
                Thème : {game.universe}
              </span>
            )}

            {publisher ? (
              <Link
                to={`/publisher/${publisher.slug}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold text-white/90 hover:text-[#F2B441] transition-colors"
                style={{ backgroundColor: 'rgba(13, 13, 15, 0.72)', borderColor: 'rgba(242, 106, 46, 0.45)' }}
                aria-label={`Éditeur : ${publisher.name}`}
              >
                <Building2 className="w-3.5 h-3.5 text-[#F26A2E]" />
                <span>Éditeur : {publisher.name}</span>
              </Link>
            ) : (
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold text-white/90"
                style={{ backgroundColor: 'rgba(13, 13, 15, 0.72)', borderColor: 'rgba(242, 106, 46, 0.45)' }}
              >
                <Building2 className="w-3.5 h-3.5 text-[#F26A2E]" />
                Éditeur : {game.publisher}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Body */}
      <main className="pb-20">
        {game.longDescription && (
          <section className="px-4 sm:px-8 lg:px-16 py-10 border-b" style={{ borderColor: 'var(--border-copper)' }}>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Description</h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>{game.longDescription}</p>
            </div>
          </section>
        )}

        <section className="px-4 sm:px-8 lg:px-16 pt-10">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Ouvrages disponibles</h2>

          {/* Category tabs */}
          <div className="flex gap-3 mb-6 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
            {CATEGORIES.map(cat => {
              const count = booksByCategory(cat).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all active:scale-95 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] shadow-lg shadow-[#F26A2E]/20'
                      : 'border'
                  }`}
                  style={!isActive ? { backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)', color: 'var(--text-muted)' } : {}}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-primary)'; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-muted)'; }}
                >
                  <span>{CATEGORY_META[cat].label}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-black/20 text-[#0D0D0F]' : ''
                  }`}
                  style={!isActive ? { backgroundColor: 'var(--bg-surface-alt)', color: 'var(--text-muted)' } : {}}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>{CATEGORY_META[activeCategory].description}</p>

          <BookCarousel books={booksByCategory(activeCategory)} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GameDetail;
