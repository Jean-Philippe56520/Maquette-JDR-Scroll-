import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, BookmarkPlus, BookmarkCheck, Building2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getBookById, getBooksByGameId, getPublisherByGameId } from '../data/mockData';
import { useUser } from '../context/UserContext';
import BookCard from '../components/BookCard';

const BookDetail: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const book = bookId ? getBookById(bookId) : undefined;
  const { user, toggleLibrary, isInLibrary } = useUser();
  const inLibrary = book ? isInLibrary(book.id) : false;

  if (!book) {
    return (
      <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
        <Header />
        <main className="pt-24 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <p style={{ color: 'var(--text-muted)' }}>Livre non trouvé</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const publisher = getPublisherByGameId(book.gameId);
  const hasAccess = () => user.role !== 'visitor';
  const relatedBooks = getBooksByGameId(book.gameId).filter(b => b.id !== book.id).slice(0, 4);

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
      <Header />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section
          className="border-b transition-colors duration-300"
          style={{
            background: 'linear-gradient(to bottom, var(--bg-surface-alt), var(--bg-base))',
            borderColor: 'var(--border-copper)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-8 flex-wrap" aria-label="Fil d'ariane">
              <Link to="/catalog" className="flex items-center gap-1 transition-colors hover:text-[#F26A2E]" style={{ color: 'var(--text-muted)' }}>
                <ChevronLeft className="w-4 h-4" />
                Catalogue
              </Link>
              <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--text-muted)' }} />
              <Link to={`/game/${book.gameId}`} className="transition-colors hover:text-[#F26A2E] truncate max-w-[160px]" style={{ color: 'var(--text-muted)' }}>
                {book.gameName}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--text-muted)' }} />
              <span className="truncate max-w-[200px] font-medium" style={{ color: 'var(--text-primary)' }}>{book.title}</span>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Cover */}
              <div className="md:col-span-1">
                <div className="aspect-video rounded-lg overflow-hidden border" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Info */}
              <div className="md:col-span-2">
                {/* Meta links */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Link
                    to={`/game/${book.gameId}`}
                    className="text-sm font-semibold text-[#F26A2E] hover:text-[#F2B441] transition-colors uppercase tracking-wide"
                  >
                    {book.gameName}
                  </Link>
                  <span style={{ color: 'var(--border-copper-hover)' }}>·</span>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{book.category}</span>
                  {publisher && (
                    <>
                      <span style={{ color: 'var(--border-copper-hover)' }}>·</span>
                      <Link
                        to={`/publisher/${publisher.slug}`}
                        className="flex items-center gap-1 text-sm transition-colors hover:text-[#F26A2E]"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <Building2 className="w-3.5 h-3.5" />
                        {publisher.name}
                      </Link>
                    </>
                  )}
                </div>

                <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{book.title}</h1>

                <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {book.shortDescription}
                </p>

                <div className="flex gap-4 flex-wrap">
                  {hasAccess() ? (
                    <Link
                      to={`/reader/${book.id}`}
                      className="px-6 py-3 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg font-bold hover:shadow-lg transition-all hover:-translate-y-1 active:scale-95"
                    >
                      {book.progress > 0 ? 'Reprendre la lecture' : 'Commencer la lecture'}
                    </Link>
                  ) : (
                    <Link
                      to="/auth"
                      className="px-6 py-3 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg font-bold hover:shadow-lg transition-all hover:-translate-y-1 active:scale-95"
                    >
                      Se connecter pour lire
                    </Link>
                  )}
                  {user.role !== 'visitor' && (
                    <button
                      onClick={() => toggleLibrary(book.id)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all active:scale-95 border ${
                        inLibrary
                          ? 'bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] hover:shadow-lg hover:shadow-[#F26A2E]/20 hover:-translate-y-0.5 border-transparent'
                          : ''
                      }`}
                      style={!inLibrary ? { borderColor: 'var(--border-copper-hover)', color: 'var(--text-primary)' } : {}}
                    >
                      {inLibrary ? (
                        <><BookmarkCheck className="w-5 h-5" /> Retirer de ma bibliothèque</>
                      ) : (
                        <><BookmarkPlus className="w-5 h-5" /> Ajouter à ma bibliothèque</>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Description</h2>
                <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>{book.longDescription}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {book.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-sm text-[#F2B441]" style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="border rounded-lg p-6" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Informations</h3>
                <div className="space-y-4 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <div>
                    <p className="font-semibold mb-0.5" style={{ color: 'var(--text-primary)' }}>Auteur</p>
                    <p>{book.author}</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-0.5" style={{ color: 'var(--text-primary)' }}>Jeu</p>
                    <Link to={`/game/${book.gameId}`} className="text-[#F26A2E] hover:text-[#F2B441] transition-colors">
                      {book.gameName}
                    </Link>
                  </div>
                  {publisher && (
                    <div>
                      <p className="font-semibold mb-0.5" style={{ color: 'var(--text-primary)' }}>Éditeur</p>
                      <Link to={`/publisher/${publisher.slug}`} className="flex items-center gap-1.5 text-[#F26A2E] hover:text-[#F2B441] transition-colors">
                        <Building2 className="w-3.5 h-3.5" />
                        {publisher.name}
                      </Link>
                    </div>
                  )}
                  <div>
                    <p className="font-semibold mb-0.5" style={{ color: 'var(--text-primary)' }}>Année de sortie</p>
                    <p>{book.releaseYear}</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-0.5" style={{ color: 'var(--text-primary)' }}>Univers</p>
                    <p>{book.universe}</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-0.5" style={{ color: 'var(--text-primary)' }}>Catégorie</p>
                    <p>{book.category}</p>
                  </div>
                </div>
              </div>

              {/* Back to game */}
              <Link
                to={`/game/${book.gameId}`}
                className="mt-4 flex items-center justify-between p-4 rounded-lg border hover:border-[#F26A2E] hover:border-opacity-40 transition-all group"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
              >
                <span className="text-sm font-semibold group-hover:text-[#F2B441] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  Voir tous les ouvrages de {book.gameName}
                </span>
                <ChevronRight className="w-4 h-4 text-[#F26A2E] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8 py-12 border-t" style={{ borderColor: 'var(--border-copper)' }}>
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Autres livres de {book.gameName}</h2>
                <Link to={`/game/${book.gameId}`} className="text-sm text-[#F26A2E] hover:text-[#F2B441] flex items-center gap-1 transition-colors">
                  Voir tous <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedBooks.map(relatedBook => (
                  <BookCard key={relatedBook.id} book={relatedBook} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BookDetail;
