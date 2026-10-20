import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Handshake, ChevronRight } from 'lucide-react';
import { getAllPartners } from '../data/mockData';

const PartnerLogoMarquee: React.FC = () => {
  const partners = getAllPartners();
  const logos = [...partners, ...partners];
  const navigate = useNavigate();

  if (partners.length === 0) {
    return null;
  }

  return (
    <section
      className="px-4 sm:px-6 lg:px-8 py-8 border-y"
      style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
    >
      <div className="max-w-7xl mx-auto">
        <Link
          to="/partners"
          className="inline-flex items-center gap-2 mb-4 group"
        >
          <Handshake className="w-4 h-4 text-[#F26A2E]" />
          <span className="text-xs font-bold text-[#F26A2E] uppercase tracking-wider group-hover:text-[#F2B441] transition-colors">
            Nos partenaires
          </span>
          <ChevronRight className="w-3 h-3 text-[#F26A2E] group-hover:translate-x-0.5 group-hover:text-[#F2B441] transition-all" />
        </Link>

        <div
          className="rounded-2xl border overflow-hidden cursor-pointer transition-all hover:border-[#F26A2E]/40"
          style={{ background: 'linear-gradient(to right, var(--bg-surface-alt), var(--bg-surface))', borderColor: 'var(--border-copper)' }}
          onClick={() => navigate('/partners')}
        >
          <div className="relative overflow-hidden py-4 px-2">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(to right, var(--bg-surface-alt), transparent)' }} />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(to left, var(--bg-surface), transparent)' }} />
            <div className="partner-marquee flex items-center gap-4 w-max">
              {logos.map((partner, index) => (
                <Link
                  key={`${partner.id}-${index}`}
                  to={`/partner/${partner.slug}`}
                  onClick={e => e.stopPropagation()}
                  className="flex items-center gap-3 px-4 py-2 rounded-xl border min-w-max transition-all hover:border-[#F26A2E] hover:-translate-y-0.5 active:scale-95"
                  style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
                  aria-label={`Voir la fiche partenaire ${partner.name}`}
                >
                  <img src={partner.logo} alt={`Logo ${partner.name}`} className="w-10 h-10 rounded-lg object-cover" />
                  <div className="hidden sm:block">
                    <div className="text-sm font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>{partner.name}</div>
                    <div className="text-[10px] uppercase tracking-wide text-[#F26A2E]">{partner.category}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogoMarquee;
