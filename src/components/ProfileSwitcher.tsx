import React, { useState } from 'react';
import { ChevronDown, Users, Zap, Crown, Building2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { UserRole } from '../data/mockData';
import { useUser } from '../context/UserContext';

const ProfileSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUserRole } = useUser();

  const profiles: Array<{ role: UserRole; label: string; description: string; icon: LucideIcon }> = [
    { role: 'visitor', label: 'Explorateur', description: 'Accès en lecture seule', icon: Users },
    { role: 'player', label: 'Abonné Joueur', description: 'Aides de jeu', icon: Zap },
    { role: 'gm', label: 'Abonné MJ', description: 'Complet + Secrets & Scénarios', icon: Crown },
    { role: 'publisher', label: 'Éditeur/Ayant droit', description: 'Dashboard statistiques', icon: Building2 }
  ];

  const handleRoleChange = (role: UserRole) => {
    setUserRole(role);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg font-semibold hover:shadow-lg transition-all duration-200 text-sm"
      >
        <span>Changer de profil</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 w-72 rounded-lg shadow-xl z-50 overflow-hidden border"
          style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper-hover)' }}
        >
          <div className="p-4 border-b" style={{ borderColor: 'var(--border-copper)' }}>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Prototype investisseur — changez de profil pour voir les différents accès
            </p>
          </div>
          <div className="p-2">
            {profiles.map(profile => {
              const Icon = profile.icon;
              const isActive = user.role === profile.role;
              return (
                <button
                  key={profile.role}
                  onClick={() => handleRoleChange(profile.role)}
                  className={`w-full text-left px-3 py-3 rounded-lg mb-1 transition-all duration-200 flex items-start gap-3 border ${
                    isActive ? 'border-[#F26A2E] border-opacity-40' : 'border-transparent'
                  }`}
                  style={{
                    backgroundColor: isActive ? 'rgba(242, 106, 46, 0.12)' : 'transparent',
                  }}
                  onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-surface-alt)'; }}
                  onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
                >
                  <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isActive ? 'text-[#F26A2E]' : 'text-[#F2B441]'}`} />
                  <div className="flex-1">
                    <div className={`font-semibold text-sm ${isActive ? 'text-[#F26A2E]' : ''}`} style={isActive ? {} : { color: 'var(--text-primary)' }}>
                      {profile.label}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{profile.description}</div>
                  </div>
                  {isActive && <div className="text-[#F26A2E] text-lg">✓</div>}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSwitcher;
