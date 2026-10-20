import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookOpen, ChevronLeft, Compass, Layers, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameCard from '../components/GameCard';
import { getGamesByUniverse, getUniverseBySlug } from '../data/mockData';

const UniverseDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const universe = slug ? getUniverseBySlug(slug) : undefined;
  const games = universe ? getGamesByUniverse(universe.name) : [];

  useEffect(() => {
    if (!universe) return;

    document.title = universe.seoTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription?.setAttribute('content', universe.seoDescription);
  }, [universe]);

  if (!universe) {
    return (
      <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
        <Header />
        <main className="pt-24 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center py-20">
            <Compass className="w-12 h-12 opacity-20 mx-auto mb-4" style={{ color: 'var(--text-muted)' }} />
            <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Univers introuvable</h1>
            <p className="mb-6" style={{ color: 'var(--text-muted)' }}>Cet univers n'existe pas encore dans le catalogue.</p>
            <Link to="/catalog" className="inline-flex items-center gap-2 text-[#F26A2E] hover:text-[#F2B441] transition-colors">
              <ChevronLeft className="w-4 h-4" /> Retour au catalogue
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

      <main className="pt-24 pb-20">
        <section
          className="px-4 sm:px-6 lg:px-8 py-14 border-b"
          style={{
            background: 'linear-gradient(to bottom, var(--bg-surface-alt), var(--bg-base))',
            borderColor: 'var(--border-copper)',
          }}
        >
          <div className="max-w-7xl mx-auto">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 text-sm text-[#F26A2E] hover:text-[#F2B441] transition-colors active:scale-95 mb-8"
            >
              <ChevronLeft className="w-4 h-4" /> Catalogue
            </Link>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F26A2E]/10 border border-[#F26A2E]/30 rounded-full text-[#F26A2E] text-xs font-semibold mb-5">
                <Compass className="w-3 h-3" /> Univers JDR
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold mb-5 leading-tight" style={{ color: 'var(--text-primary)' }}>
                {universe.heroTitle}
              </h1>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {universe.heroDescription}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm" style={{ borderColor: 'var(--border-copper)', color: 'var(--text-primary)' }}>
                  <Layers className="w-4 h-4 text-[#F26A2E]" /> {games.length} jeu{games.length > 1 ? 'x' : ''}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm" style={{ borderColor: 'var(--border-copper)', color: 'var(--text-primary)' }}>
                  <BookOpen className="w-4 h-4 text-[#F2B441]" /> Catalogue filtré
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Jeux liés à cet univers</h2>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  Une sélection centrée sur {universe.name}, avec accès direct aux fiches jeux et ouvrages associés.
                </p>
              </div>
              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 text-sm text-[#F26A2E] hover:text-[#F2B441] transition-colors active:scale-95"
              >
                <Search className="w-4 h-4" /> Filtrer dans le catalogue
              </Link>
            </div>

            {games.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {games.map(game => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 border rounded-xl" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
                <BookOpen className="w-10 h-10 opacity-20 mx-auto mb-3" style={{ color: 'var(--text-muted)' }} />
                <p style={{ color: 'var(--text-muted)' }}>Aucun jeu n'est encore associé à cet univers.</p>
              </div>
            )}
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-8 border-t" style={{ borderColor: 'var(--border-copper)' }}>
          <div className="max-w-7xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
            <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{universe.editorialTitle}</h2>
            <div className="space-y-4">
              <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>{universe.editorialDescription}</p>
              <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Cette page sert de point d'entrée dédié : elle aide l'utilisateur à se concentrer sur un type d'expérience précis sans parcourir tout le catalogue.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UniverseDetail;
