import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, MapPin, Calendar, ChevronLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getPublisherBySlug } from '../data/mockData';

const PublisherDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const publisher = slug ? getPublisherBySlug(slug) : undefined;

  if (!publisher) {
    return (
      <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
        <Header />
        <main className="pt-24 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center pt-20">
            <p style={{ color: 'var(--text-muted)' }}>Éditeur introuvable.</p>
            <Link to="/creators" className="mt-4 inline-flex items-center gap-2 text-sm text-[#F26A2E] hover:text-[#F2B441] transition-colors">
              <ChevronLeft className="w-4 h-4" /> Retour aux créateurs
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

      <main className="pt-20 pb-20">

        {/* Hero banner */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img src={publisher.cover} alt={publisher.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute top-6 left-4 sm:left-8">
            <Link
              to="/creators"
              className="flex items-center gap-1.5 text-sm text-white bg-black/60 hover:bg-black/80 px-3 py-1.5 rounded-lg backdrop-blur-sm transition-all active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" /> Créateurs
            </Link>
          </div>

          <div className="absolute bottom-8 left-4 sm:left-8 right-4 sm:right-8">
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-[10px] font-bold text-[#F26A2E] uppercase tracking-wider bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full border border-[#F26A2E] border-opacity-30">
                    Éditeur partenaire
                  </span>
                  <span className="flex items-center gap-1 text-xs text-white/70">
                    <MapPin className="w-3 h-3" /> {publisher.country}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-white/70">
                    <Calendar className="w-3 h-3" /> Fondé en {publisher.foundedYear}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">{publisher.name}</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Description + sidebar */}
          <section className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>À propos</h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>{publisher.longDescription}</p>
            </div>

            {/* Sidebar */}
            <aside className="space-y-4">
              <a
                href={publisher.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-[#F26A2E] border-opacity-20 hover:border-opacity-40 transition-all group"
                style={{ backgroundColor: 'var(--bg-surface)' }}
              >
                <div>
                  <div className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>Site officiel</div>
                  <div className="text-sm font-semibold text-[#F26A2E] group-hover:text-[#F2B441] transition-colors">
                    Visiter le site officiel
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#F26A2E] group-hover:text-[#F2B441] transition-colors flex-shrink-0" />
              </a>
            </aside>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PublisherDetail;
