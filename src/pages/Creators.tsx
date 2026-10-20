import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, ExternalLink, MapPin, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllPublishers } from '../data/mockData';

const Creators: React.FC = () => {
  const publishers = getAllPublishers();

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
      <Header />

      <main className="pt-24 pb-20">
        <section
          className="px-4 sm:px-6 lg:px-8 pt-10 pb-12"
          style={{ background: 'linear-gradient(to bottom, var(--bg-surface-alt), var(--bg-base))' }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#F26A2E] to-[#F2B441] rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-[#0D0D0F]" />
              </div>
              <span className="text-xs font-bold text-[#F26A2E] uppercase tracking-wider">Créateurs JDRscroll</span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight" style={{ color: 'var(--text-primary)' }}>
                Les éditeurs et ayants droit qui enrichissent la bibliothèque
              </h1>
              <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Retrouvez les créateurs de contenus disponibles sur JDRscroll : éditeurs, studios, ayants droit et catalogues qui donnent accès à leurs jeux, livres et univers.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {publishers.map(publisher => (
                <Link
                  key={publisher.id}
                  to={`/publisher/${publisher.slug}`}
                  className="group block rounded-2xl overflow-hidden border hover:border-[#F26A2E] hover:border-opacity-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={publisher.cover} alt={publisher.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                    <div className="absolute top-3 left-3 w-14 h-14 rounded-xl overflow-hidden border-2 border-white/20 bg-white/10 backdrop-blur-sm">
                      <img src={publisher.logo} alt={`Logo ${publisher.name}`} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 rounded-full text-[10px] text-white/80 font-semibold">
                      Créateur
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h2 className="text-lg font-bold text-white group-hover:text-[#F2B441] transition-colors leading-tight">{publisher.name}</h2>
                      <div className="flex items-center gap-3 mt-1 text-[10px] text-white/60 flex-wrap">
                        <span className="flex items-center gap-1"><MapPin className="w-2.5 h-2.5" /> {publisher.country}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-2.5 h-2.5" /> Depuis {publisher.foundedYear}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {publisher.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-8">
          <div
            className="max-w-3xl mx-auto border border-[#F26A2E] border-opacity-20 rounded-2xl p-8 text-center"
            style={{ background: 'linear-gradient(to bottom right, var(--bg-surface-alt), var(--bg-surface))' }}
          >
            <Sparkles className="w-10 h-10 text-[#F26A2E] mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Vous représentez un catalogue JDR ?</h2>
            <p className="text-sm leading-relaxed mb-6 max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
              JDRscroll peut valoriser vos jeux, mesurer leur consultation et donner une nouvelle visibilité à vos ouvrages auprès des joueurs et maîtres du jeu.
            </p>
            <a
              href="mailto:createurs@jdrscroll.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-[#F26A2E]/20 transition-all active:scale-95 hover:-translate-y-0.5"
            >
              Proposer un catalogue <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Creators;
