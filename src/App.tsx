import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import BookDetail from './pages/BookDetail';
import GameDetail from './pages/GameDetail';
import Reader from './pages/Reader';
import Library from './pages/Library';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Trends from './pages/Trends';
import New from './pages/New';
import Auth from './pages/Auth';
import Partners from './pages/Partners';
import Creators from './pages/Creators';
import PublisherDetail from './pages/PublisherDetail';
import PartnerDetail from './pages/PartnerDetail';
import Glossaire from './pages/Glossaire';
import UniverseDetail from './pages/UniverseDetail';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  return (
    <UserProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/univers/:slug" element={<UniverseDetail />} />
          <Route path="/book/:bookId" element={<BookDetail />} />
          <Route path="/game/:gameId" element={<GameDetail />} />
          <Route path="/reader/:bookId" element={<Reader />} />
          <Route path="/favoris" element={<Library />} />
          <Route path="/library" element={<Navigate to="/favoris" replace />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/new" element={<New />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/publisher/:slug" element={<PublisherDetail />} />
          <Route path="/partner/:slug" element={<PartnerDetail />} />
          <Route path="/glossaire" element={<Glossaire />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
