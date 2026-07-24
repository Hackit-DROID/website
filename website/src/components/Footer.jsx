import { Link } from 'react-router-dom';
import { Terminal, MessageSquare, ArrowUp } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from './SocialIcons';

export function Footer({ onOpenJoin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-[#2a2a2a] pt-16 pb-12 text-[#888888]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Brand Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-[#2a2a2a]">
          <div className="space-y-2">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#4ade80]">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-bold text-xl tracking-tight text-[#ffffff]">
                HACK<span className="text-[#4ade80]">IT</span>
              </span>
            </Link>
            <p className="text-sm text-[#cccccc] max-w-md leading-relaxed">
              The premier student & researcher cybersecurity collective. Building the next generation of security researchers, reverse engineers, and ethical hackers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full text-[#ffffff] hover:text-[#4ade80] hover:border-[#4ade80] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full text-[#ffffff] hover:text-[#4ade80] hover:border-[#4ade80] transition-colors"
              aria-label="Twitter / X"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full text-[#ffffff] hover:text-[#4ade80] hover:border-[#4ade80] transition-colors"
              aria-label="Discord"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full text-[#ffffff] hover:text-[#4ade80] hover:border-[#4ade80] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 4-Column Link Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-[#2a2a2a]">
          <div>
            <h4 className="text-xs font-semibold text-[#ffffff] uppercase tracking-wider mb-4 font-mono">
              // Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-[#4ade80] transition-colors">Home Page</Link></li>
              <li><Link to="/events" className="hover:text-[#4ade80] transition-colors">Upcoming Events</Link></li>
              <li><Link to="/team" className="hover:text-[#4ade80] transition-colors">Core Team & Leads</Link></li>
              <li><Link to="/resources" className="hover:text-[#4ade80] transition-colors">Writeups & Tools</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#ffffff] uppercase tracking-wider mb-4 font-mono">
              // Focus Areas
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><span className="hover:text-[#ffffff] transition-colors cursor-pointer">Binary Exploitation</span></li>
              <li><span className="hover:text-[#ffffff] transition-colors cursor-pointer">Web Application Security</span></li>
              <li><span className="hover:text-[#ffffff] transition-colors cursor-pointer">Reverse Engineering</span></li>
              <li><span className="hover:text-[#ffffff] transition-colors cursor-pointer">Applied Cryptography</span></li>
              <li><span className="hover:text-[#ffffff] transition-colors cursor-pointer">Cloud Security</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#ffffff] uppercase tracking-wider mb-4 font-mono">
              // Community
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={onOpenJoin} className="hover:text-[#4ade80] transition-colors text-left">Apply for Membership</button></li>
              <li><a href="https://ctftime.org" target="_blank" rel="noreferrer" className="hover:text-[#4ade80] transition-colors">CTFtime Profile</a></li>
              <li><a href="#" className="hover:text-[#4ade80] transition-colors">Bug Bounty Disclosure</a></li>
              <li><a href="#" className="hover:text-[#4ade80] transition-colors">Code of Conduct</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#ffffff] uppercase tracking-wider mb-4 font-mono">
              // System Health
            </h4>
            <div className="bg-[#121212] border border-[#2a2a2a] p-3 rounded-lg space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between text-[#4ade80]">
                <span>INFRASTRUCTURE</span>
                <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-ping"></span>
              </div>
              <p className="text-[#5a5a5a] text-[11px]">CTF Nodes: 12 Online</p>
              <p className="text-[#5a5a5a] text-[11px]">Lab Gateway: Operational</p>
              <div className="pt-2 border-t border-[#2a2a2a] text-[10px] text-[#888888]">
                Last Sync: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} HackIT Security Club. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#5a5a5a] font-mono">Build v1.0.4 (Release)</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#121212] hover:bg-[#1a1a1a] text-[#cccccc] hover:text-[#4ade80] border border-[#2a2a2a] rounded-md transition-colors font-mono"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
