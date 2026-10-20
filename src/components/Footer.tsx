import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer
      className="mt-16 border-t transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border-copper)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-[#F26A2E]" />
              <span className="font-bold" style={{ color: 'var(--text-primary)' }}>JDRscroll</span>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              La bibliothèque infinie de mondes à explorer. Pour joueurs, maîtres du jeu et éditeurs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Produit</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <li><Link to="/catalog" className="hover:text-[#F26A2E] transition-colors">Catalogue</Link></li>
              <li><Link to="/pricing" className="hover:text-[#F26A2E] transition-colors">Offres</Link></li>
              <li><Link to="/new" className="hover:text-[#F26A2E] transition-colors">Nouveautés</Link></li>
              <li><Link to="/creators" className="hover:text-[#F26A2E] transition-colors">Créateurs</Link></li>
              <li><Link to="/partners" className="hover:text-[#F26A2E] transition-colors">Partenaires</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Entreprise</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <li><a href="#" className="hover:text-[#F26A2E] transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-[#F26A2E] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#F26A2E] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#F26A2E] transition-colors">Carrières</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Légal</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <li><a href="#" className="hover:text-[#F26A2E] transition-colors">Conditions</a></li>
              <li><a href="#" className="hover:text-[#F26A2E] transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-[#F26A2E] transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t" style={{ borderColor: 'var(--border-copper)' }}>
          <div className="flex items-center justify-between flex-col md:flex-row gap-4">
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              © 2026 JDRscroll. Tous droits réservés. • Prototype investisseur
            </p>
            <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-[#F26A2E]" />
              <span>pour les rôlistes</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
