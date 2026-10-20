import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Scroll, Menu, X, LogOut, Sun, Moon } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { user, setUserRole } = useUser();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/home', label: 'Accueil' },
    { path: '/catalog', label: 'Catalogue' },
    { path: '/library', label: 'Bibliothèque' },
    { path: '/creators', label: 'Créateurs' },
    { path: '/dashboard', label: 'Dashboard' },
  ];

  const handleLogout = () => {
    setUserRole('visitor');
    navigate('/');
    setMobileOpen(false);
  };

  const planLabel = user.plan === 'gm' ? 'MJ' : user.plan === 'player' ? 'PJ' : user.role === 'publisher' ? 'Éditeur' : 'Visiteur';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-colors duration-300"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--bg-base) 95%, transparent)',
        borderColor: 'var(--border-copper)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to={user.role === 'visitor' ? '/' : '/home'} className="flex items-center gap-2 group active:scale-95 transition-transform">
            <div className="w-9 h-9 bg-gradient-to-br from-[#F26A2E] to-[#F2B441] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Scroll className="w-5 h-5 text-[#0D0D0F]" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-[#F26A2E] to-[#F2B441] bg-clip-text text-transparent hidden sm:inline">
              JDRscroll
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {user.role === 'visitor' ? (
              <>
                <NavLink to="/catalog" label="Catalogue" active={isActive('/catalog')} />
                <NavLink to="/creators" label="Créateurs" active={isActive('/creators')} />
                <NavLink to="/pricing" label="Offres" active={isActive('/pricing')} />
              </>
            ) : (
              navLinks.map(link => (
                <NavLink key={link.path} to={link.path} label={link.label} active={isActive(link.path)} />
              ))
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
              className="w-9 h-9 flex items-center justify-center rounded-lg transition-all active:scale-95 hover:bg-[#F26A2E]/10"
              style={{ color: 'var(--text-muted)' }}
            >
              {theme === 'dark'
                ? <Sun className="w-4 h-4 hover:text-[#F2B441] transition-colors" />
                : <Moon className="w-4 h-4 hover:text-[#F26A2E] transition-colors" />
              }
            </button>

            {user.role === 'visitor' ? (
              <Link
                to="/auth"
                className="hidden sm:inline text-sm font-medium transition-colors active:scale-95 hover:text-[#F26A2E]"
                style={{ color: 'var(--text-muted)' }}
              >
                Se connecter
              </Link>
            ) : (
              <div className="hidden sm:flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>{user.name}</div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{planLabel}</div>
                </div>
                <Link to="/account" className="w-9 h-9 bg-gradient-to-br from-[#F26A2E] to-[#B87333] rounded-full flex items-center justify-center hover:from-[#F2B441] hover:to-[#F26A2E] transition-all active:scale-95">
                  <span className="text-[#0D0D0F] font-bold text-sm">{user.name[0]}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  title="Se déconnecter"
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all active:scale-95 hover:text-red-400"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 transition-colors active:scale-95"
              style={{ color: 'var(--text-muted)' }}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden border-t transition-colors duration-300"
          style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
        >
          <div className="px-4 py-4 space-y-1">
            {user.role === 'visitor' ? (
              <>
                <MobileLink to="/catalog" label="Catalogue" onClick={() => setMobileOpen(false)} active={isActive('/catalog')} />
                <MobileLink to="/creators" label="Créateurs" onClick={() => setMobileOpen(false)} active={isActive('/creators')} />
                <MobileLink to="/pricing" label="Offres" onClick={() => setMobileOpen(false)} active={isActive('/pricing')} />
                <MobileLink to="/auth" label="Se connecter" onClick={() => setMobileOpen(false)} active={isActive('/auth')} />
              </>
            ) : (
              <>
                {navLinks.map(link => (
                  <MobileLink key={link.path} to={link.path} label={link.label} onClick={() => setMobileOpen(false)} active={isActive(link.path)} />
                ))}
                <MobileLink to="/account" label="Mon compte" onClick={() => setMobileOpen(false)} active={isActive('/account')} />
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full px-3 py-2.5 text-sm transition-colors rounded-lg hover:text-red-400"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <LogOut className="w-4 h-4" /> Se déconnecter
                </button>
              </>
            )}

            <button
              onClick={() => { toggleTheme(); setMobileOpen(false); }}
              className="flex items-center gap-2 w-full px-3 py-2.5 text-sm transition-colors rounded-lg"
              style={{ color: 'var(--text-muted)' }}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink: React.FC<{ to: string; label: string; active: boolean }> = ({ to, label, active }) => (
  <Link
    to={to}
    className="text-sm font-medium transition-colors active:scale-95"
    style={{ color: active ? '#F26A2E' : 'var(--text-muted)' }}
    onMouseEnter={e => { if (!active) (e.target as HTMLElement).style.color = 'var(--text-primary)'; }}
    onMouseLeave={e => { if (!active) (e.target as HTMLElement).style.color = 'var(--text-muted)'; }}
  >
    {label}
  </Link>
);

const MobileLink: React.FC<{ to: string; label: string; onClick: () => void; active: boolean }> = ({ to, label, onClick, active }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors active:scale-95"
    style={{
      color: active ? '#F26A2E' : 'var(--text-muted)',
      backgroundColor: active ? 'var(--bg-surface-alt)' : 'transparent',
    }}
  >
    {label}
  </Link>
);

export default Header;
