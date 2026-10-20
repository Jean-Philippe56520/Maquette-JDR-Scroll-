import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import GameCard from './GameCard';
import { Game, Universe } from '../data/mockData';

interface UniverseCarouselProps {
  universe: Universe;
  games: Game[];
  defaultCollapsed?: boolean;
  showDescription?: boolean;
  compact?: boolean;
  maxGames?: number;
}

const UniverseCarousel: React.FC<UniverseCarouselProps> = ({
  universe,
  games,
  defaultCollapsed = false,
  showDescription = false,
  compact = false,
  maxGames,
}) => {
  const [isOpen, setIsOpen] = useState(!defaultCollapsed);
  const ref = useRef<HTMLDivElement>(null);
  const visibleGames = maxGames ? games.slice(0, maxGames) : games;

  const scroll = (dir: 'left' | 'right') =>
    ref.current?.scrollBy({ left: dir === 'right' ? 420 : -420, behavior: 'smooth' });

  return (
    <section className={compact ? 'mb-4' : 'mb-12'}>
      <div className="px-4 sm:px-6 lg:px-8 mb-4">
        <div
          className={`max-w-7xl mx-auto rounded-xl border transition-all ${compact ? 'p-4' : 'p-5'}`}
          style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
        >
          <div className="flex min-w-0 items-start gap-3">
            <span className="mt-1 w-1 h-8 bg-gradient-to-b from-[#F26A2E] to-[#F2B441] rounded-full inline-block flex-shrink-0" />

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  to={`/univers/${universe.slug}`}
                  className="group inline-flex items-center gap-1.5 text-xl font-bold transition-colors active:scale-95 hover:text-[#F2B441]"
                  style={{ color: 'var(--text-primary)' }}
                  aria-label={`Voir tous les contenus de l'univers ${universe.name}`}
                >
                  {universe.name}
                  <ChevronRight className="w-4 h-4 text-[#F26A2E] transition-transform group-hover:translate-x-0.5" />
                </Link>
                <span className="text-sm font-normal" style={{ color: 'var(--text-muted)' }}>
                  · {games.length} jeu{games.length > 1 ? 'x' : ''}
                </span>
              </div>

              {showDescription && (
                <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {universe.shortDescription}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(value => !value)}
              className="mt-0.5 inline-flex w-9 h-9 flex-shrink-0 items-center justify-center rounded-lg border transition-all active:scale-95 hover:border-[#F26A2E] hover:border-opacity-50"
              style={{ borderColor: 'var(--border-copper-hover)', color: 'var(--text-muted)' }}
              aria-expanded={isOpen}
              aria-label={`${isOpen ? 'Replier' : 'Déplier'} la catégorie ${universe.name}`}
            >
              <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="relative group/row px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto relative">
            <button
              onClick={() => scroll('left')}
              className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 border rounded-full items-center justify-center hidden group-hover/row:flex transition-all active:scale-95 shadow-lg"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper-hover)' }}
              aria-label={`Faire défiler ${universe.name} vers la gauche`}
            >
              <ChevronLeft className="w-4 h-4" style={{ color: 'var(--text-primary)' }} />
            </button>

            <div
              ref={ref}
              className="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {visibleGames.map(game => (
                <GameCard key={game.id} game={game} variant="carousel" />
              ))}
            </div>

            <button
              onClick={() => scroll('right')}
              className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 border rounded-full items-center justify-center hidden group-hover/row:flex transition-all active:scale-95 shadow-lg"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper-hover)' }}
              aria-label={`Faire défiler ${universe.name} vers la droite`}
            >
              <ChevronRight className="w-4 h-4" style={{ color: 'var(--text-primary)' }} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default UniverseCarousel;