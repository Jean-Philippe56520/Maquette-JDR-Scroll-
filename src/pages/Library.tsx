import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookCard from '../components/BookCard';
import { getAllBooks } from '../data/mockData';
import { useUser } from '../context/UserContext';

const Library: React.FC = () => {
  const { user, library } = useUser();
  const [searchTerm, setSearchTerm] = useState('');

  const allBooks = getAllBooks();
  const savedBooks = allBooks.filter(b => library.includes(b.id));

  const filtered = savedBooks.filter(b =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.gameName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (user.role === 'visitor') {
    return (
      <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
        <Header />
        <main className="pt-24 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center py-12">
            <p className="text-lg mb-4" style={{ color: 'var(--text-muted)' }}>
              La bibliothèque personnelle est réservée aux abonnés
            </p>
            <Link
              to="/pricing"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg font-bold hover:shadow-lg hover:shadow-[#F26A2E]/20 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Essayer gratuitement 15 jours
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
            <h1 className="text-3xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Ma bibliothèque</h1>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              {savedBooks.length} {savedBooks.length === 1 ? 'ouvrage sauvegardé' : 'ouvrages sauvegardés'}
            </p>
          </div>

          {savedBooks.length > 0 && (
            <div className="mb-6 relative">
              <Search className="absolute left-4 top-3 w-5 h-5" style={{ color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Rechercher dans ma bibliothèque..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
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
              <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Votre bibliothèque est vide</h2>
              <p className="mb-8 max-w-xs" style={{ color: 'var(--text-muted)' }}>
                Ajoutez des ouvrages depuis le catalogue en cliquant sur "Ajouter à ma bibliothèque".
              </p>
              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg font-bold hover:shadow-lg hover:shadow-[#F26A2E]/20 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <BookOpen className="w-4 h-4" />
                Explorer le catalogue
              </Link>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12">
              <p style={{ color: 'var(--text-muted)' }}>Aucun ouvrage ne correspond à cette recherche</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Library;
