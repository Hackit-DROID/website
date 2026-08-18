import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Community', path: '/community' }
  ];

  const ThemeToggleButton = () => (
    <button
      onClick={toggleTheme}
      className="p-2.5 text-text-secondary hover:text-text-primary hover:bg-surface-secondary border border-border hover:border-border-hover transition-colors flex items-center justify-center rounded-[12px]"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className="material-symbols-outlined text-base">
        {theme === 'dark' ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border py-1">
      <div className="flex justify-between items-center w-full px-4 sm:px-8 py-3 max-w-6xl mx-auto">
        {/* Brand */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group outline-none focus:outline-none"
        >
          <span className="w-8.5 h-8.5 bg-accent flex items-center justify-center text-white font-sans font-bold text-sm rounded-[10px]">
            H
          </span>
          <div className="flex flex-col">
            <span className="font-sans font-bold tracking-tight text-text-primary text-sm leading-none mb-0.5">
              HackIT
            </span>
            <span className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider">
              SGGSIE&T
            </span>
          </div>
        </Link>

        {/* Desktop Links + Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 mr-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={
                    isActive
                      ? "px-4.5 py-2 text-accent bg-accent-subtle font-sans text-sm font-semibold rounded-[12px] transition-all duration-200"
                      : "px-4.5 py-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary font-sans text-sm font-semibold rounded-[12px] transition-all duration-200"
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </div>
          <ThemeToggleButton />
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggleButton />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-text-secondary hover:text-text-primary font-sans text-sm font-semibold border border-border bg-surface-secondary hover:bg-surface px-4 py-2 rounded-[12px] transition-colors duration-200"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-border px-4 py-4 space-y-1.5 rounded-b-[20px]">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 text-sm font-sans font-semibold transition-colors duration-200 rounded-[12px] ${
                  isActive
                    ? 'text-accent bg-accent-subtle'
                    : 'text-text-secondary hover:bg-surface-secondary hover:text-text-primary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
