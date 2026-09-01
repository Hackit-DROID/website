import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Community', path: '/community' }
  ];

  const ThemeToggleButton = () => (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary/80 border border-border/80 transition-colors flex items-center justify-center rounded-full active:scale-95"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="material-symbols-outlined text-sm"
      >
        {theme === 'dark' ? 'light_mode' : 'dark_mode'}
      </motion.span>
    </motion.button>
  );

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
      <nav
        className={`max-w-4xl mx-auto glass-capsule rounded-full py-2 px-4 sm:px-6 pointer-events-auto flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'shadow-md border-border py-1.5' : 'shadow-soft border-border/70'
        }`}
      >
        {/* Brand */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 group outline-none focus:outline-none"
        >
          <motion.img 
            whileHover={{ rotate: 5, scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 400 }}
            src="/fevicon.png" 
            alt="HackIT Logo" 
            className="w-7 h-7 object-contain rounded-lg" 
          />
          <div className="flex flex-col">
            <span className="font-mono font-bold tracking-tight text-text-primary text-xs leading-none">
              HackIT<span className="text-accent ml-0.5">_</span>
            </span>
            <span className="text-[9px] text-text-secondary font-mono tracking-widest uppercase mt-0.5">
              SGGSIE&T
            </span>
          </div>
        </Link>

        {/* Desktop Links + Theme Toggle */}
        <div className="hidden md:flex items-center gap-1.5">
          <div className="flex items-center gap-1 bg-surface-secondary/60 p-1 rounded-full border border-border/50 relative">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive: linkActive }) =>
                    `relative px-4 py-1.5 font-sans text-xs font-bold rounded-full transition-colors z-10 ${
                      linkActive
                        ? 'text-accent'
                        : 'text-text-secondary hover:text-text-primary'
                    }`
                  }
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbarActivePill"
                      className="absolute inset-0 bg-surface rounded-full shadow-sm -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-secondary hover:text-text-primary bg-surface-secondary/80 border border-border/80 transition-colors flex items-center justify-center rounded-full active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-sm">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-4xl mx-auto mt-2 glass-capsule shadow-soft px-4 py-3 space-y-1 rounded-2xl pointer-events-auto"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 text-xs font-sans font-bold transition-colors rounded-xl ${
                    isActive
                      ? 'text-accent bg-accent-subtle'
                      : 'text-text-secondary hover:bg-surface-secondary/80 hover:text-text-primary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
