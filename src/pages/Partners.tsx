import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Users, MapPin, ChevronRight, Handshake, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllPartners } from '../data/mockData';

const categoryLabels = ['Tous', 'Influenceur', 'Association', 'Média', 'Événement', 'Institution'];

const Partners: React.FC = () => {
  const partners = getAllPartners();

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
                <Handshake className="w-4 h-4 text-[#0D0D0F]" />
              </div>
              <span className="text-xs font-bold text-[#F26A2E] uppercase tracking-wider">Partenaires JDRscroll</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight" style={{ color: 'var(--text-primary)' }}>
              Ceux qui font rayonner la communauté rôliste
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              Associations, influenceurs, médias, événements et institutions : nos partenaires nous aident à faire connaître le jeu de rôle, à tester les usages et à connecter JDRscroll aux communautés.
            </p>

            <div className="flex flex-wrap gap-2">
              {categoryLabels.map(label => (
                <span
                  key={label}
                  className="px-3 py-1 rounded-full border text-xs font-semibold"
                  style={{ color: label === 'Tous' ? '#F26A2E' : 'var(--text-muted)', borderColor: 'var(--border-copper)', backgroundColor: 'var(--bg-surface)' }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {partners.map(partner => (
              <Link
                key={partner.id}
                to={`/partner/${partner.slug}`}
                className="group block rounded-2xl overflow-hidden border hover:border-[#F26A2E] hover:border-opacity-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={partner.cover} alt={partner.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                  <div className="absolute top-3 left-3 w-14 h-14 rounded-xl overflow-hidden border-2 border-white/20 bg-white/10 backdrop-blur-sm">
                    <img src={partner.logo} alt={`Logo ${partner.name}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 rounded-full text-[10px] text-white/80 font-semibold">
                    {partner.category}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-base font-bold text-white group-hover:text-[#F2B441] transition-colors leading-tight">{partner.name}</h3>
                    {partner.city && (
                      <div className="flex items-center gap-1 text-[10px] text-white/60 mt-0.5">
                        <MapPin className="w-2.5 h-2.5" /> {partner.city}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: 'var(--text-muted)' }}>
                    {partner.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {partner.highlights.slice(0, 3).map(highlight => (
                      <span key={highlight} className="text-[10px] px-2 py-0.5 rounded-full font-medium text-[#F2B441]" style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: 'var(--border-copper)' }}>
                    <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                      <Users className="w-3 h-3 text-[#F26A2E]" /> Partenaire communautaire
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#F26A2E] font-semibold group-hover:text-[#F2B441] transition-colors">
                      Découvrir <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-8">
          <div
            className="max-w-3xl mx-auto border border-[#F26A2E] border-opacity-20 rounded-2xl p-8 text-center"
            style={{ background: 'linear-gradient(to bottom right, var(--bg-surface-alt), var(--bg-surface))' }}
          >
            <Sparkles className="w-10 h-10 text-[#F26A2E] mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Vous animez une communauté JDR ?</h2>
            <p className="text-sm leading-relaxed mb-6 max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
              Associations, médias, influenceurs, événements ou institutions : devenez partenaire JDRscroll et gagnez en visibilité auprès des rôlistes.
            </p>
            <a
              href="mailto:partenaires@jdrscroll.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-[#F26A2E]/20 transition-all active:scale-95 hover:-translate-y-0.5"
            >
              Proposer un partenariat <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partners;
