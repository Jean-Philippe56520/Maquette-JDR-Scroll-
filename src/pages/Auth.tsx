import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scroll, Eye, EyeOff, Crown, BookOpen, ArrowLeft } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Auth: React.FC = () => {
  const { setUserRole } = useUser();
  const navigate = useNavigate();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'player' | 'gm'>('free');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setUserRole(mode === 'login' ? 'gm' : selectedPlan);
      navigate('/home');
    }, 800);
  };

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      {/* Top bar */}
      <div className="px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group active:scale-95 transition-transform">
          <div className="w-8 h-8 bg-gradient-to-br from-[#F26A2E] to-[#F2B441] rounded-lg flex items-center justify-center">
            <Scroll className="w-4 h-4 text-[#0D0D0F]" />
          </div>
          <span className="text-base font-bold bg-gradient-to-r from-[#F26A2E] to-[#F2B441] bg-clip-text text-transparent">JDRscroll</span>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-1.5 text-sm transition-colors active:scale-95 hover:text-[#F26A2E]"
          style={{ color: 'var(--text-muted)' }}
        >
          <ArrowLeft className="w-4 h-4" /> Retour
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md space-y-4">

          {/* Auth card */}
          <div
            className="border rounded-2xl p-8"
            style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
          >
            <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
              {mode === 'login' ? 'Connexion' : 'Créer un compte'}
            </h1>
            <p className="text-sm mb-7" style={{ color: 'var(--text-muted)' }}>
              {mode === 'login' ? 'Accédez à vos favoris JDR' : 'Rejoignez la communauté JDRscroll'}
            </p>

            {/* Mode toggle */}
            <div
              className="flex rounded-lg p-1 mb-7"
              style={{ backgroundColor: 'var(--bg-base)' }}
            >
              <button
                onClick={() => setMode('login')}
                className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all active:scale-95 ${mode === 'login' ? 'bg-[#F26A2E] text-[#0D0D0F]' : ''}`}
                style={mode !== 'login' ? { color: 'var(--text-muted)' } : {}}
              >
                Connexion
              </button>
              <button
                onClick={() => setMode('register')}
                className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all active:scale-95 ${mode === 'register' ? 'bg-[#F26A2E] text-[#0D0D0F]' : ''}`}
                style={mode !== 'register' ? { color: 'var(--text-muted)' } : {}}
              >
                Inscription
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'register' && (
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                    Votre formule : compte gratuit ou abonnement
                  </label>
                  <button
                    type="button"
                    onClick={() => setSelectedPlan('free')}
                    className="w-full p-3 mb-3 rounded-lg border-2 transition-all active:scale-95 text-left"
                    style={{ borderColor: selectedPlan === 'free' ? '#F26A2E' : 'var(--border-copper)', backgroundColor: selectedPlan === 'free' ? 'var(--bg-surface-alt)' : 'transparent' }}
                  >
                    <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Compte gratuit — 0 €</div>
                    <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Accès au catalogue et aux favoris, sans abonnement de lecture.</div>
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedPlan('player')}
                      className={`p-3 rounded-lg border-2 transition-all active:scale-95 text-left ${selectedPlan === 'player' ? 'border-[#F26A2E]' : ''}`}
                      style={{
                        borderColor: selectedPlan === 'player' ? '#F26A2E' : 'var(--border-copper)',
                        backgroundColor: selectedPlan === 'player' ? 'var(--bg-surface-alt)' : 'transparent',
                      }}
                    >
                      <BookOpen className="w-4 h-4 text-[#F2B441] mb-1.5" />
                      <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>PJ</div>
                      <div className="text-xs text-[#F26A2E] font-semibold mb-1">5,99 €/mois</div>
                      <div className="text-[10px] leading-snug" style={{ color: 'var(--text-muted)' }}>Catalogue complet et aides de jeu PJ</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPlan('gm')}
                      className="p-3 rounded-lg border-2 transition-all active:scale-95 text-left"
                      style={{
                        borderColor: selectedPlan === 'gm' ? '#F26A2E' : 'var(--border-copper)',
                        backgroundColor: selectedPlan === 'gm' ? 'var(--bg-surface-alt)' : 'transparent',
                      }}
                    >
                      <Crown className="w-4 h-4 text-[#F2B441] mb-1.5" />
                      <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>MJ</div>
                      <div className="text-xs text-[#F26A2E] font-semibold mb-1">7,99 €/mois</div>
                      <div className="text-[10px] leading-snug" style={{ color: 'var(--text-muted)' }}>Tout le plan PJ + secrets MJ, scénarios complets</div>
                    </button>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-muted)' }}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="vous@exemple.com"
                  className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-[#F26A2E] transition-colors border"
                  style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border-copper)', color: 'var(--text-primary)' }}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-muted)' }}>Mot de passe</label>
                <div className="relative">
                  <input
                    type={showPw ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-[#F26A2E] transition-colors pr-10 border"
                    style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border-copper)', color: 'var(--text-primary)' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors active:scale-95 hover:text-[#F26A2E]"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg font-bold text-sm hover:shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 disabled:translate-y-0 mt-2"
              >
                {loading ? 'Connexion...' : mode === 'login' ? 'Se connecter' : 'Créer mon compte'}
              </button>
            </form>

            <p className="text-center text-xs mt-6" style={{ color: 'var(--text-muted)' }}>
              Pas encore abonné ?{' '}
              <Link to="/pricing" className="text-[#F26A2E] hover:text-[#F2B441] transition-colors font-semibold">
                Voir les offres
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
