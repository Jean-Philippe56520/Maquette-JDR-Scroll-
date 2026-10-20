import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ChevronRight, ExternalLink, Handshake, MapPin, Sparkles, Target, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllPartners, getPartnerBySlug } from '../data/mockData';

const PartnerDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const partner = slug ? getPartnerBySlug(slug) : undefined;
  const otherPartners = getAllPartners().filter(item => item.slug !== slug).slice(0, 3);

  if (!partner) {
    return <Navigate to="/partners" replace />;
  }

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
      <Header />

      <main className="pt-20 pb-20">
        <section className="relative h-[420px] sm:h-[480px] overflow-hidden">
          <img src={partner.cover} alt={partner.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />

          <div className="absolute top-6 left-4 sm:left-8">
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 text-sm text-white bg-black/60 hover:bg-black/80 px-3 py-1.5 rounded-lg backdrop-blur-sm transition-all active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" /> Partenaires
            </Link>
          </div>

          <div className="absolute bottom-8 left-4 sm:left-8 right-4 sm:right-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-end gap-6 justify-between">
                <div className="flex items-end gap-5">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-white/20 bg-white/10 backdrop-blur-sm flex-shrink-0 shadow-xl">
                    <img src={partner.logo} alt={`Logo ${partner.name}`} className="w-full h-full object-cover" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="text-[10px] font-bold text-[#F26A2E] uppercase tracking-wider bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full border border-[#F26A2E] border-opacity-30">
                        {partner.category}
                      </span>
                      {partner.city && (
                        <span className="flex items-center gap-1 text-xs text-white/70">
                          <MapPin className="w-3 h-3" /> {partner.city}
                        </span>
                      )}
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-3">{partner.name}</h1>
                    <p className="text-sm sm:text-base text-white/75 max-w-2xl leading-relaxed">{partner.shortDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <article className="rounded-2xl border p-6 sm:p-8" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <Handshake className="w-5 h-5 text-[#F26A2E]" />
                  <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Présentation</h2>
                </div>
                <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>{partner.description}</p>
              </article>

              <article className="rounded-2xl border p-6 sm:p-8" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-[#F26A2E]" />
                  <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Contribution à JDRscroll</h2>
                </div>
                <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>{partner.contribution}</p>
              </article>

              <article className="rounded-2xl border p-6 sm:p-8" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
                <div className="flex items-center gap-2 mb-5">
                  <Sparkles className="w-5 h-5 text-[#F26A2E]" />
                  <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Points forts</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {partner.highlights.map(highlight => (
                    <div key={highlight} className="rounded-xl p-4 border" style={{ backgroundColor: 'var(--bg-surface-alt)', borderColor: 'var(--border-copper)' }}>
                      <div className="text-sm font-semibold text-[#F2B441]">{highlight}</div>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <aside className="space-y-5">
              <div className="rounded-2xl border p-6" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
                <h2 className="text-sm font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Fiche partenaire</h2>
                <div className="space-y-4">
                  <InfoRow icon={<Handshake className="w-4 h-4" />} label="Catégorie" value={partner.category} />
                  <InfoRow icon={<Users className="w-4 h-4" />} label="Audience" value={partner.audience} />
                  {partner.city && <InfoRow icon={<MapPin className="w-4 h-4" />} label="Localisation" value={partner.city} />}
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border p-4 hover:border-[#F26A2E] hover:border-opacity-50 transition-all group"
                    style={{ backgroundColor: 'var(--bg-surface-alt)', borderColor: 'var(--border-copper)' }}
                  >
                    <div className="min-w-0">
                      <div className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>Site officiel</div>
                      <div className="text-sm font-semibold text-[#F26A2E] group-hover:text-[#F2B441] transition-colors">
                        Visiter le site officiel
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#F26A2E] flex-shrink-0" />
                  </a>
                </div>
              </div>

            </aside>
          </div>
        </section>

        {otherPartners.length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8 py-8 border-t" style={{ borderColor: 'var(--border-copper)' }}>
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Autres partenaires</h2>
                <Link to="/partners" className="text-sm text-[#F26A2E] hover:text-[#F2B441] flex items-center gap-1 transition-colors">
                  Tous les partenaires <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {otherPartners.map(item => (
                  <Link
                    key={item.id}
                    to={`/partner/${item.slug}`}
                    className="group rounded-xl overflow-hidden border hover:border-[#F26A2E] hover:border-opacity-50 transition-all hover:-translate-y-1"
                    style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
                  >
                    <div className="relative h-28 overflow-hidden">
                      <img src={item.cover} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="text-[10px] text-[#F26A2E] font-bold uppercase tracking-wide">{item.category}</div>
                        <div className="text-sm font-bold text-white group-hover:text-[#F2B441] transition-colors">{item.name}</div>
                      </div>
                    </div>
                  </Link>
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

const InfoRow: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-[#F26A2E] flex-shrink-0" style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
      {icon}
    </div>
    <div>
      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</div>
      <div className="text-sm font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>{value}</div>
    </div>
  </div>
);

export default PartnerDetail;
