import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookCard from '../components/BookCard';
import { getTrendingBooks } from '../data/mockData';

const Trends: React.FC = () => {
  const trendingBooks = getTrendingBooks();

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Tendances</h1>
            <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
              Les ouvrages les plus consultés et mis en avant par la communauté
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Trends;
