import { Link } from 'react-router-dom';
import { Github, Linkedin, Discord, Mail } from './SocialIcons';

export function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Community', path: '/community' }
  ];

  return (
    <footer className="bg-surface-secondary/60 border-t border-border mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/fevicon.png" alt="HackIT Logo" className="w-8 h-8 object-contain rounded-[10px]" />
              <span className="font-sans font-bold text-text-primary text-base">HackIT</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
              The official cybersecurity and technology community at SGGSIE&T, Nanded. Building hands-on skills in defense, competitive coding, systems, and open source development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs font-bold text-text-primary uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-text-secondary hover:text-accent transition-colors font-semibold"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-bold text-text-primary uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="HackIT GitHub Organization"
              >
                <Github size={18} />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="HackIT Discord Server"
              >
                <Discord size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="HackIT LinkedIn Page"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:contact@hackit-sggs.ac.in"
                className="social-icon-btn"
                aria-label="Email HackIT"
              >
                <Mail size={18} />
              </a>
            </div>
            <div className="pt-1">
              <a
                href="mailto:contact@hackit-sggs.ac.in"
                className="text-xs text-text-secondary hover:text-accent font-semibold transition-colors flex items-center gap-1.5"
              >
                <Mail size={12} />
                <span>contact@hackit-sggs.ac.in</span>
              </a>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xs text-text-secondary font-medium">
            © {new Date().getFullYear()} HackIT Club, SGGSIE&T Nanded. All rights reserved.
          </span>
          <span className="text-xs text-text-secondary font-semibold uppercase tracking-wider">
            Student-Led Community
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
