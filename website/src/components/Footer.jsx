import { Link } from 'react-router-dom';

export function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Community', path: '/community' }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'Discord', url: 'https://discord.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' }
  ];

  return (
    <footer className="bg-surface-secondary/60 border-t border-border mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 bg-accent flex items-center justify-center text-white font-sans font-bold text-sm rounded-[10px]">
                H
              </span>
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
          <div>
            <h4 className="font-sans text-xs font-bold text-text-primary uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-accent transition-colors font-semibold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:contact@hackit-sggs.ac.in"
                  className="text-sm text-text-secondary hover:text-accent transition-colors font-semibold"
                >
                  contact@hackit-sggs.ac.in
                </a>
              </li>
            </ul>
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
