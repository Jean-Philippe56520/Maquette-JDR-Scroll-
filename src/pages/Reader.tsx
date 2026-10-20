import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getBookById } from '../data/mockData';
import { useUser } from '../context/UserContext';

const Reader: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const book = bookId ? getBookById(bookId) : undefined;
  const { user } = useUser();
  const [fontSize, setFontSize] = useState('base');
  const [currentChapter, setCurrentChapter] = useState(0);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
        <p style={{ color: 'var(--text-muted)' }}>Livre non trouvé</p>
      </div>
    );
  }

  if (user.role === 'visitor') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Connexion requise</h1>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>Créez un compte ou connectez-vous pour accéder à la lecture.</p>
          <button
            onClick={() => navigate('/auth')}
            className="px-6 py-3 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg font-bold hover:shadow-glow-orange transition-all"
          >
            Se connecter
          </button>
        </div>
      </div>
    );
  }

  const fontSizeMap: Record<string, string> = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };
  const fontSizeClass = fontSizeMap[fontSize] || 'text-base';

  const mockContent = `
    Chapitre ${currentChapter + 1}: ${book.contents[currentChapter]}

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
    ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.

    Cet exemple montre comment le contenu s'affiche en fonction de votre profil utilisateur.
    Vous pouvez maintenant lire, explorer et progresser dans votre bibliothèque personnelle.
  `;

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
      {/* Header */}
      <div
        className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300"
        style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4 min-w-0 flex-1">
            <button
              onClick={() => navigate(-1)}
              className="transition-colors flex-shrink-0 hover:text-[#F26A2E]"
              style={{ color: 'var(--text-muted)' }}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="min-w-0">
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{book.gameName}</p>
              <h1 className="font-bold truncate" style={{ color: 'var(--text-primary)' }}>{book.title}</h1>
            </div>
          </div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{book.progress}%</div>
        </div>
      </div>

      {/* Reader */}
      <div className="pt-20 pb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content */}
        <div className={`max-w-none ${fontSizeClass}`}>
          <div
            className="leading-relaxed whitespace-pre-wrap p-8 rounded-lg border transition-colors duration-300"
            style={{
              color: 'var(--text-primary)',
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-copper)',
              lineHeight: 1.9,
            }}
          >
            {mockContent}
          </div>
        </div>

        {/* Progress */}
        <div
          className="mt-8 w-full rounded-lg overflow-hidden border"
          style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
        >
          <div
            className="bg-gradient-to-r from-[#F26A2E] to-[#F2B441] h-1 transition-all duration-300"
            style={{ width: `${book.progress}%` }}
          />
        </div>
      </div>

      {/* Footer Controls */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 border-t transition-colors duration-300"
        style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFontSize(fontSize === 'sm' ? 'sm' : (fontSize === 'base' ? 'sm' : fontSize === 'lg' ? 'base' : 'lg'))}
                className="px-3 py-2 rounded text-xs transition-colors"
                style={{ backgroundColor: 'var(--bg-surface-alt)', color: 'var(--text-primary)' }}
              >
                A−
              </button>
              <button
                onClick={() => setFontSize(fontSize === 'sm' ? 'base' : fontSize === 'base' ? 'lg' : fontSize === 'lg' ? 'xl' : 'xl')}
                className="px-3 py-2 rounded text-xs transition-colors"
                style={{ backgroundColor: 'var(--bg-surface-alt)', color: 'var(--text-primary)' }}
              >
                A+
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
                disabled={currentChapter === 0}
                className="flex items-center gap-2 px-4 py-2 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: 'var(--bg-surface-alt)', color: 'var(--text-primary)' }}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="text-sm">Précédent</span>
              </button>

              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Chapitre {currentChapter + 1}/{book.contents.length}
              </div>

              <button
                onClick={() => setCurrentChapter(Math.min(book.contents.length - 1, currentChapter + 1))}
                disabled={currentChapter === book.contents.length - 1}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded hover:shadow-glow-orange transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-sm font-semibold">Suivant</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reader;
