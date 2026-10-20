import React, { createContext, useContext, useState } from 'react';
import { User, UserRole, mockProfiles } from '../data/mockData';

type Plan = 'player' | 'gm';

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
  library: string[];
  toggleLibrary: (bookId: string) => void;
  isInLibrary: (bookId: string) => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(mockProfiles.visitor);
  const [library, setLibrary] = useState<string[]>([]);

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

  const toggleLibrary = (bookId: string) => {
    setLibrary(prev =>
      prev.includes(bookId) ? prev.filter(id => id !== bookId) : [...prev, bookId]
    );
  };

  const isInLibrary = (bookId: string) => library.includes(bookId);

  return (
    <UserContext.Provider value={{ user, setUserRole, setPlan, updateProfile, library, toggleLibrary, isInLibrary }}>
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
