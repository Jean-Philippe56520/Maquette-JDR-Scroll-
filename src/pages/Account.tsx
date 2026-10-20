import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, LogOut, Settings, Pencil, Check, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useUser } from '../context/UserContext';
import { useTheme } from '../context/ThemeContext';

const REGIONS = [
  'Auvergne-Rhône-Alpes', 'Bourgogne-Franche-Comté', 'Bretagne', 'Centre-Val de Loire',
  'Corse', 'Grand Est', 'Hauts-de-France', 'Île-de-France', 'Normandie',
  'Nouvelle-Aquitaine', 'Occitanie', 'Pays de la Loire', "Provence-Alpes-Côte d'Azur",
  'Guadeloupe', 'Martinique', 'Guyane', 'La Réunion', 'Mayotte',
];

const Account: React.FC = () => {
  const { user, setUserRole, updateProfile } = useUser();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState({
    birthYear: user.birthYear ?? '',
    phone: user.phone ?? '',
    region: user.region ?? '',
  });

  const handleLogout = () => {
    setUserRole('visitor');
    navigate('/');
  };

  const handleEditStart = () => {
    setDraft({ birthYear: user.birthYear ?? '', phone: user.phone ?? '', region: user.region ?? '' });
    setEditing(true);
  };

  const handleSave = () => {
    updateProfile(draft);
    setEditing(false);
  };

  const planLabel = user.plan === 'player' ? 'PJ' : user.plan === 'gm' ? 'MJ' : null;

  const cardStyle = {
    backgroundColor: 'var(--bg-surface)',
    borderColor: 'var(--border-copper)',
  };

  const inputStyle = {
    backgroundColor: 'var(--bg-base)',
    borderColor: 'var(--border-copper)',
    color: 'var(--text-primary)',
  };

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Mon compte</h1>

          {/* Profile summary */}
          <div className="border rounded-xl p-8 mb-6" style={cardStyle}>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#F26A2E] to-[#F2B441] rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-10 h-10 text-[#0D0D0F]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{user.name}</h2>
                <p style={{ color: 'var(--text-muted)' }}>{user.email || 'user@jdrscroll.test'}</p>
                {planLabel && (
                  <p className="text-sm text-[#F26A2E] font-semibold mt-1">Abonnement {planLabel}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  label: 'Rôle',
                  value: user.role === 'visitor' ? 'Visiteur' : user.role === 'free' ? 'Compte gratuit' : user.role === 'player' ? 'Abonné PJ' : user.role === 'gm' ? 'Abonné MJ' : 'Éditeur/Ayant droit'
                },
                { label: 'Statut', value: user.plan ? 'Abonné' : user.role === 'free' ? 'Gratuit' : 'Sans abonnement' },
                { label: 'Membre depuis', value: 'Mai 2026' },
              ].map(item => (
                <div key={item.label} className="p-4 rounded-lg border" style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border-copper)' }}>
                  <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                  <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Personal info */}
          <div className="border rounded-xl p-8 mb-6" style={cardStyle}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Informations personnelles</h3>
              {!editing ? (
                <button
                  onClick={handleEditStart}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#F26A2E] border border-[#F26A2E] border-opacity-40 rounded-lg hover:bg-[#F26A2E]/10 transition-all active:scale-95"
                >
                  <Pencil className="w-3.5 h-3.5" /> Modifier
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg hover:shadow-md transition-all active:scale-95"
                  >
                    <Check className="w-3.5 h-3.5" /> Enregistrer
                  </button>
                  <button
                    onClick={() => setEditing(false)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border rounded-lg transition-all active:scale-95"
                    style={{ color: 'var(--text-muted)', borderColor: 'var(--border-copper)' }}
                  >
                    <X className="w-3.5 h-3.5" /> Annuler
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Birth year */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                  Année de naissance
                </label>
                {editing ? (
                  <input
                    type="number"
                    min={1920}
                    max={2010}
                    value={draft.birthYear}
                    onChange={e => setDraft(d => ({ ...d, birthYear: e.target.value }))}
                    placeholder="Ex : 1990"
                    className="w-full px-3 py-2.5 rounded-lg text-sm border focus:outline-none focus:border-[#F26A2E] transition-colors"
                    style={inputStyle}
                  />
                ) : (
                  <p className="px-3 py-2.5 rounded-lg text-sm border min-h-[42px] flex items-center" style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border-copper)' }}>
                    {user.birthYear ? (
                      <span style={{ color: 'var(--text-primary)' }}>{user.birthYear}</span>
                    ) : (
                      <span style={{ color: 'var(--text-subtle)' }}>Non renseigné</span>
                    )}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                  Téléphone mobile
                </label>
                {editing ? (
                  <input
                    type="tel"
                    value={draft.phone}
                    onChange={e => setDraft(d => ({ ...d, phone: e.target.value }))}
                    placeholder="06 12 34 56 78"
                    className="w-full px-3 py-2.5 rounded-lg text-sm border focus:outline-none focus:border-[#F26A2E] transition-colors"
                    style={inputStyle}
                  />
                ) : (
                  <p className="px-3 py-2.5 rounded-lg text-sm border min-h-[42px] flex items-center" style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border-copper)' }}>
                    {user.phone ? (
                      <span style={{ color: 'var(--text-primary)' }}>{user.phone}</span>
                    ) : (
                      <span style={{ color: 'var(--text-subtle)' }}>Non renseigné</span>
                    )}
                  </p>
                )}
              </div>

              {/* Region */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                  Région
                </label>
                {editing ? (
                  <select
                    value={draft.region}
                    onChange={e => setDraft(d => ({ ...d, region: e.target.value }))}
                    className="w-full px-3 py-2.5 rounded-lg text-sm border focus:outline-none focus:border-[#F26A2E] transition-colors"
                    style={inputStyle}
                  >
                    <option value="">Sélectionner...</option>
                    {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                ) : (
                  <p className="px-3 py-2.5 rounded-lg text-sm border min-h-[42px] flex items-center" style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border-copper)' }}>
                    {user.region ? (
                      <span style={{ color: 'var(--text-primary)' }}>{user.region}</span>
                    ) : (
                      <span style={{ color: 'var(--text-subtle)' }}>Non renseignée</span>
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="space-y-3 mb-6">
            <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Paramètres</h3>

            <div className="border rounded-xl p-5" style={cardStyle}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>Notifications par email</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>Recevez les mises à jour et nouveautés</p>
                </div>
                <button className="w-11 h-6 bg-[#F26A2E] rounded-full transition-all flex-shrink-0" />
              </div>
            </div>

            {/* Live theme toggle */}
            <div className="border rounded-xl p-5" style={cardStyle}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                    {theme === 'dark' ? 'Mode sombre' : 'Mode clair'}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    {theme === 'dark' ? 'Basculer en mode clair' : 'Basculer en mode sombre'}
                  </p>
                </div>
                <button
                  onClick={toggleTheme}
                  className={`relative w-11 h-6 rounded-full transition-all flex-shrink-0 ${theme === 'dark' ? 'bg-[#F26A2E]' : 'bg-[#A8A29E]'}`}
                >
                  <span
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0.5'}`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Actions</h3>

            {user.plan && (
              <Link
                to="/pricing"
                className="block w-full px-6 py-3 border rounded-xl font-semibold text-sm text-center transition-all hover:border-[#F26A2E]"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)', color: 'var(--text-primary)' }}
              >
                Gérer l'abonnement
              </Link>
            )}

            <button
              className="w-full px-6 py-3 border rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:border-[#F26A2E]"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)', color: 'var(--text-primary)' }}
            >
              <Settings className="w-4 h-4" />
              Paramètres du compte
            </button>

            <button
              onClick={handleLogout}
              className="w-full px-6 py-3 border border-[#F26A2E] border-opacity-40 text-[#F26A2E] rounded-xl hover:bg-[#F26A2E] hover:text-[#0D0D0F] transition-all font-semibold text-sm flex items-center justify-center gap-2 active:scale-95"
            >
              <LogOut className="w-4 h-4" />
              Se déconnecter
            </button>
          </div>

          {/* Legal */}
          <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--border-copper)' }}>
            <div className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <a href="#" className="block hover:text-[#F26A2E] transition-colors">Conditions d'utilisation</a>
              <a href="#" className="block hover:text-[#F26A2E] transition-colors">Politique de confidentialité</a>
              <a href="#" className="block hover:text-[#F26A2E] transition-colors">Paramètres des cookies</a>
              <a href="#" className="block hover:text-[#F26A2E] transition-colors">Mentions légales</a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Account;
