import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookCard from '../components/BookCard';
import { getNewBooks } from '../data/mockData';

const New: React.FC = () => {
  const newBooks = getNewBooks();

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Nouveautés</h1>
            <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
              Les contenus récemment ajoutés à notre catalogue
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default New;
