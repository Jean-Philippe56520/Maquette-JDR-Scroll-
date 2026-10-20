import React from 'react';
import { Lock, Check } from 'lucide-react';
import { BookCategory } from '../data/mockData';
import { useUser } from '../context/UserContext';

interface AccessBadgeProps {
  requiredPlan: 'free' | 'player' | 'gm';
  category?: BookCategory;
  compact?: boolean;
}

const AccessBadge: React.FC<AccessBadgeProps> = ({ requiredPlan, category, compact = false }) => {
  const { user } = useUser();

  const hasAccess = () => {
    if (requiredPlan === 'free') return true;
    if (!user.plan) return false;
    if (requiredPlan === 'player') return user.plan === 'player' || user.plan === 'gm';
    if (requiredPlan === 'gm') return user.plan === 'gm';
    return false;
  };

  if (hasAccess()) {
    return (
      <div className={`flex items-center gap-1 ${compact ? 'text-xs' : 'text-sm'} text-green-400`}>
        <Check className={`w-${compact ? '3' : '4'} h-${compact ? '3' : '4'}`} />
        <span>Accès</span>
      </div>
    );
  }

  const labels: Record<BookCategory, string> = {
    'Aides de jeu': 'Aides de jeu',
    'Secrets': 'Secrets',
    'Scénarios': 'Scénarios'
  };

  return (
    <div className={`flex items-center gap-1 ${compact ? 'text-xs px-2 py-1 rounded-full bg-[#F26A2E] bg-opacity-10 text-[#F26A2E]' : 'text-sm text-[#F26A2E]'}`}>
      <Lock className={`w-${compact ? '3' : '4'} h-${compact ? '3' : '4'}`} />
      <span>{category ? labels[category] : 'Verrouillé'}</span>
    </div>
  );
};

export default AccessBadge;
