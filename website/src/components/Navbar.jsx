import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Terminal, Menu, X, ChevronRight, Activity } from 'lucide-react';
import Button from './Button';

export function Navbar({ onOpenJoin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Resources', path: '/resources' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full h-[64px] bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2a2a] transition-all">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Wordmark */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] group-hover:border-[#4ade80] flex items-center justify-center text-[#4ade80] transition-all duration-300 shadow-[0_0_10px_rgba(74,222,128,0.1)] group-hover:shadow-[0_0_15px_rgba(74,222,128,0.3)]">
            <Terminal className="w-5 h-5 transition-transform group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-[#ffffff] group-hover:text-[#4ade80] transition-colors flex items-center gap-1">
              HACK<span className="text-[#4ade80]">IT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse"></span>
            </span>
            <span className="text-[10px] font-mono text-[#888888] tracking-widest uppercase hidden sm:inline-block">
              CYBERSECURITY CLUB
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#121212] px-3 py-1.5 rounded-full border border-[#2a2a2a]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#1a1a1a] text-[#4ade80] shadow-sm font-semibold'
                    : 'text-[#cccccc] hover:text-[#ffffff] hover:bg-[#1a1a1a]/50'
                }`}
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Right CTA Cluster */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#888888] px-3 py-1 bg-[#121212] rounded-md border border-[#2a2a2a]">
            <Activity className="w-3.5 h-3.5 text-[#4ade80] animate-pulse" />
            <span className="text-[#4ade80]">ONLINE</span>
          </div>

          <button
            onClick={onOpenJoin}
            className="text-sm font-medium text-[#cccccc] hover:text-[#4ade80] transition-colors px-2 py-1"
          >
            Sign in
          </button>

          <Button variant="primary" size="sm" onClick={onOpenJoin} className="gap-1.5">
            <span>Join Us</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button variant="primary" size="sm" onClick={onOpenJoin} className="text-xs py-1 px-3">
            Join Us
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#cccccc] hover:text-[#ffffff] bg-[#1a1a1a] border border-[#2a2a2a] rounded-md"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#2a2a2a] px-4 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 text-base font-medium rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#1a1a1a] text-[#4ade80] font-semibold border border-[#2a2a2a]'
                      : 'text-[#cccccc] hover:bg-[#121212]'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#5a5a5a]" />
              </NavLink>
            ))}
          </div>

          <div className="pt-4 border-t border-[#2a2a2a] flex flex-col gap-3">
            <Button variant="primary" onClick={() => { setMobileMenuOpen(false); onOpenJoin(); }} className="w-full justify-center">
              Apply to Join HackIT
            </Button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenJoin(); }}
              className="text-center text-sm font-medium text-[#888888] hover:text-[#ffffff] py-2"
            >
              Member Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
