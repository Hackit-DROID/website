import { useState, useEffect } from 'react';
import Button from './Button';

export function EventModal({ event, isOpen, onClose }) {
  const [registered, setRegistered] = useState(false);
  const [email, setEmail] = useState('');
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !event) return null;

  const handleRegister = (e) => {
    e.preventDefault();
    setTicketId(`HKIT-${Math.floor(100000 + Math.random() * 900000)}`);
    setRegistered(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-surface border border-border overflow-hidden text-text-primary shadow-2xl rounded-[28px] max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-surface-secondary border-b border-border rounded-t-[28px]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
              {event.category || 'Event'}
            </span>
            <span className="text-xs font-semibold text-text-secondary">{event.date || 'Upcoming'}</span>
          </div>
          <button 
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary text-sm p-1 hover:bg-surface rounded-full transition-colors w-7 h-7 flex items-center justify-center"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {!registered ? (
            <>
              <h2 className="text-xl font-bold text-text-primary mb-4 leading-snug">
                {event.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-background border border-border text-sm mb-6 rounded-[20px]">
                <div>
                  <span className="text-xs text-text-secondary uppercase font-bold block mb-1">Location</span>
                  <span className="text-text-primary font-medium">{event.venue || event.location}</span>
                </div>
                <div>
                  <span className="text-xs text-text-secondary uppercase font-bold block mb-1">Date &amp; Time</span>
                  <span className="text-text-primary font-medium">{event.time || event.date}</span>
                </div>
              </div>

              {event.description && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2.5">
                    Overview
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {event.description || event.summary}
                  </p>
                </div>
              )}

              {event.highlights && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2.5">
                    Highlights
                  </h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    {event.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-accent mt-0.5 text-base leading-none">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <form onSubmit={handleRegister} className="space-y-4 pt-5 border-t border-border">
                <div>
                  <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2 pl-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@sggs.ac.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-background border border-border focus:border-accent px-4 py-3 text-sm text-text-primary outline-none rounded-[14px] transition-all duration-200 focus:ring-2 focus:ring-accent/15"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-5 border-t border-border">
                  <Button variant="secondary" onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="primary" type="submit">
                    Register
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 bg-success text-white flex items-center justify-center mx-auto text-xl font-bold rounded-full">
                ✓
              </div>
              <h3 className="text-lg font-bold text-text-primary">Registration Confirmed</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Registered for <strong className="text-text-primary">{event.title}</strong>. Confirmation sent to <span className="text-accent font-semibold">{email}</span>.
              </p>
              <div className="p-4 bg-background border border-border text-left text-xs text-text-secondary space-y-1.5 rounded-[16px] font-mono">
                <p>Ticket: {ticketId}</p>
                <p>Status: Confirmed</p>
              </div>
              <Button variant="primary" onClick={() => { setRegistered(false); onClose(); }} className="w-full mt-4">
                Done
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventModal;
