import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, UserRole, mockProfiles } from '../data/mockData';

type Plan = 'player' | 'gm';
type FavoritesByUser = Record<string, string[]>;

interface ProfileUpdate {
  birthYear?: string;
  phone?: string;
  region?: string;
}

interface UserContextType {
  user: User;
  setUserRole: (role: UserRole) => void;
  setPlan: (plan: Plan) => void;
  updateProfile: (fields: ProfileUpdate) => void;
  favorites: string[];
  toggleFavorite: (bookId: string) => void;
  isFavorite: (bookId: string) => boolean;
}

const STORAGE_KEY = 'jdrscroll-maquette-favorites-v1';
const USER_KEY = 'jdrscroll-maquette-demo-role-v1';
const loadUser = (): User => {
  try {
    const role = window.localStorage.getItem(USER_KEY);
    if (role === 'free' || role === 'player' || role === 'gm' || role === 'publisher') return mockProfiles[role];
  } catch {
    // The demo can function without browser storage.
  }
  return mockProfiles.visitor;
};
const loadFavorites = (): FavoritesByUser => {
  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}');
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
    return Object.fromEntries(
      Object.entries(parsed).filter(([, ids]) =>
        Array.isArray(ids) && ids.every(id => typeof id === 'string')
      )
    ) as FavoritesByUser;
  } catch {
    return {};
  }
};
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(loadUser);
  const [favoritesByUser, setFavoritesByUser] = useState<FavoritesByUser>(loadFavorites);
  const favorites = user.role === 'visitor' ? [] : (favoritesByUser[user.id] ?? []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favoritesByUser));
    } catch {
      // Storage is optional for this local-only demo.
    }
  }, [favoritesByUser]);

  useEffect(() => {
    try {
      window.localStorage.setItem(USER_KEY, user.role);
    } catch {
      // The mock user still works without persistence.
    }
  }, [user.role]);

  const setUserRole = (role: UserRole) => {
    setUser(mockProfiles[role]);
  };

  const setPlan = (plan: Plan) => {
    setUser(prev => ({
      ...prev,
      role: plan === 'gm' ? 'gm' : 'player',
      plan,
    }));
  };

  const updateProfile = (fields: ProfileUpdate) => {
    setUser(prev => ({ ...prev, ...fields }));
  };

  const toggleFavorite = (bookId: string) => {
    if (user.role === 'visitor') return;
    setFavoritesByUser(prev => {
      const current = prev[user.id] ?? [];
      return {
        ...prev,
        [user.id]: current.includes(bookId)
          ? current.filter(id => id !== bookId)
          : [...current, bookId],
      };
    });
  };

  const isFavorite = (bookId: string) => favorites.includes(bookId);

  return (
    <UserContext.Provider value={{ user, setUserRole, setPlan, updateProfile, favorites, toggleFavorite, isFavorite }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
