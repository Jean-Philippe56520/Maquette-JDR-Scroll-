import { Link, useNavigate } from 'react-router-dom';
import { Flame, Lock, Heart } from 'lucide-react';
import { Book } from '../data/mockData';
import { useUser } from '../context/UserContext';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { user, toggleFavorite, isFavorite } = useUser();
  const navigate = useNavigate();
  const favorite = isFavorite(book.id);
  const handleFavorite = () => {
    if (user.role === 'visitor') navigate('/auth');
    else toggleFavorite(book.id);
  };

  const hasAccess = () => {
    if (book.requiredPlan === 'free') return user.role !== 'visitor';
    if (!user.plan) return false;
    if (book.requiredPlan === 'player') return user.plan === 'player' || user.plan === 'gm';
    if (book.requiredPlan === 'gm') return user.plan === 'gm';
    return false;
  };

  const locked = !hasAccess();

  return (
    <div className="relative h-full">
      <Link to={`/book/${book.id}`} className="block h-full active:scale-95 transition-transform" aria-label={`Voir la fiche de ${book.title}`}>
      <div
        className="group h-full rounded-lg overflow-hidden hover:border-opacity-40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border"
        style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
      >
        {/* Cover */}
        <div className="relative h-40 overflow-hidden" style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Badges */}
          <div className="absolute top-2 right-2 flex gap-1">
            {book.isTrending && (
              <div className="flex items-center gap-1 px-1.5 py-0.5 bg-[#F26A2E] rounded text-[10px] font-bold text-[#0D0D0F]">
                <Flame className="w-2.5 h-2.5" /> Tendance
              </div>
            )}
            {book.isNew && (
              <div className="px-1.5 py-0.5 bg-[#F2B441] rounded text-[10px] font-bold text-[#0D0D0F]">
                Nouveau
              </div>
            )}
          </div>

          {/* Lock overlay */}
          {locked && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Lock className="w-6 h-6 text-[#F26A2E]" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-3">
          <div className="text-[10px] text-[#F26A2E] font-semibold uppercase tracking-wider mb-0.5 truncate">{book.gameName}</div>
          <h3
            className="text-xs font-bold mb-1.5 line-clamp-2 group-hover:text-[#F2B441] transition-colors leading-snug"
            style={{ color: 'var(--text-primary)' }}
          >
            {book.title}
          </h3>
          <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
            book.category === 'Aides de jeu' ? 'bg-blue-500/10 text-blue-400' :
            book.category === 'Secrets' ? 'bg-red-500/10 text-red-400' :
            'bg-green-500/10 text-green-400'
          }`}>
            {book.category}
          </span>
        </div>
      </div>
      </Link>
      <button
        type="button"
        onClick={handleFavorite}
        aria-pressed={favorite}
        aria-label={(favorite ? 'Retirer des favoris : ' : 'Ajouter aux favoris : ') + book.title}
        title={user.role === 'visitor' ? 'Se connecter pour ajouter un favori' : (favorite ? 'Retirer des favoris' : 'Ajouter aux favoris')}
        className={"absolute z-10 top-2 left-2 w-9 h-9 flex items-center justify-center rounded-full border border-white/20 shadow-lg transition-all hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F2B441] " + (favorite ? 'bg-[#F26A2E] text-white' : 'bg-black/75 text-white hover:bg-[#F26A2E]')}
      >
        <Heart className="w-5 h-5" fill={favorite ? 'currentColor' : 'none'} />
      </button>
    </div>
  );
};

export default BookCard;
