import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, ChevronRight } from 'lucide-react';
import { Game } from '../data/mockData';

interface GameCardProps {
  game: Game;
  variant?: 'grid' | 'carousel';
}

const GameCard: React.FC<GameCardProps> = ({ game, variant = 'grid' }) => {
  if (variant === 'carousel') {
    return (
      <Link
        to={`/game/${game.id}`}
        className="group flex-shrink-0 w-64 sm:w-72 block active:scale-95 transition-transform"
      >
        <div className="relative h-40 rounded-xl overflow-hidden border border-transparent group-hover:border-[#F26A2E] group-hover:border-opacity-50 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
          <img
            src={game.cover}
            alt={game.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#F26A2E] mb-1">{game.universe}</p>
            <h3 className="text-sm font-bold text-white leading-snug mb-2 group-hover:text-[#F2B441] transition-colors line-clamp-2">
              {game.name}
            </h3>
            <div className="flex items-center gap-3 text-[10px] text-white/60">
              <span className="flex items-center gap-1"><BookOpen className="w-2.5 h-2.5" />{game.bookCount} livres</span>
              <span>{game.difficulty}</span>
            </div>
          </div>

          <div className="absolute top-3 right-3 w-7 h-7 bg-[#F26A2E] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight className="w-4 h-4 text-[#0D0D0F]" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/game/${game.id}`} className="block h-full active:scale-95 transition-transform">
      <div
        className="group h-full rounded-lg overflow-hidden border hover:border-opacity-40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
      >
        <div className="relative h-36 overflow-hidden">
          <img
            src={game.cover}
            alt={game.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <p className="text-[10px] text-[#F26A2E] uppercase font-bold tracking-wider mb-0.5">{game.universe}</p>
            <h3 className="text-sm font-bold text-white group-hover:text-[#F2B441] transition-colors leading-tight line-clamp-2">
              {game.name}
            </h3>
          </div>
          <div className="absolute top-2 right-2">
            <span className="text-[10px] font-semibold px-2 py-0.5 bg-black/60 text-white/70 rounded-full">
              {game.difficulty}
            </span>
          </div>
        </div>

        <div className="p-4">
          <p className="text-xs mb-4 line-clamp-2 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {game.description}
          </p>

          <div className="flex items-center justify-between text-xs mb-3">
            <div className="flex items-center gap-1 text-[#F26A2E]">
              <BookOpen className="w-3 h-3" />
              <span>{game.bookCount} livres</span>
            </div>
            <div className="flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
              <Users className="w-3 h-3" />
              <span>{game.activeReaders.toLocaleString()} lecteurs</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {game.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full text-[#F2B441]" style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
