import { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Award, Check, UserCheck } from 'lucide-react';
import Button from './Button';

export function EventModal({ event, isOpen, onClose }) {
  const [registered, setRegistered] = useState(false);
  const [email, setEmail] = useState('');
  const [ticketType, setTicketType] = useState('In-Person Seat');
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0a]/80 backdrop-blur-md transition-all duration-300">
      <div 
        className="relative w-full max-w-xl bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl shadow-2xl overflow-hidden text-[#ffffff]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Band */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#121212] border-b border-[#2a2a2a]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#4ade80]/15 text-[#4ade80] border border-[#4ade80]/30 text-xs font-mono font-semibold uppercase tracking-wider">
              {event.type}
            </span>
            <span className="text-xs text-[#888888] font-mono">• {event.difficulty}</span>
          </div>
          <button 
            onClick={onClose}
            className="text-[#888888] hover:text-[#ffffff] transition-colors p-1 rounded-md hover:bg-[#242424]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[85vh] overflow-y-auto">
          {!registered ? (
            <>
              <h2 className="text-2xl font-bold text-[#ffffff] leading-tight mb-3">
                {event.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-xs mb-5">
                <div className="flex items-center gap-2 text-[#cccccc]">
                  <Calendar className="w-4 h-4 text-[#4ade80]" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-[#cccccc]">
                  <MapPin className="w-4 h-4 text-[#4ade80]" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-[#cccccc]">
                  <Award className="w-4 h-4 text-[#4ade80]" />
                  <span>{event.prizes}</span>
                </div>
                <div className="flex items-center gap-2 text-[#cccccc]">
                  <UserCheck className="w-4 h-4 text-[#4ade80]" />
                  <span>Host: {event.organizer}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-semibold text-[#e6e6e6] uppercase tracking-wider mb-2">
                  Event Overview
                </h4>
                <p className="text-sm text-[#cccccc] leading-relaxed">
                  {event.description}
                </p>
              </div>

              {event.registrationOpen ? (
                <form onSubmit={handleRegister} className="space-y-4 pt-2 border-t border-[#2a2a2a]">
                  <div>
                    <label className="block text-xs font-semibold text-[#e6e6e6] uppercase tracking-wider mb-1.5">
                      Confirm Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="hacker@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#121212] border border-[#2a2a2a] focus:border-[#4ade80] rounded-md px-3.5 py-2.5 text-sm text-[#ffffff] placeholder-[#5a5a5a] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#e6e6e6] uppercase tracking-wider mb-1.5">
                      Ticket Mode
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['In-Person Seat', 'Virtual Discord Stream'].map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setTicketType(mode)}
                          className={`py-2 px-3 text-xs rounded-md border font-medium transition-all text-center ${
                            ticketType === mode
                              ? 'bg-[#4ade80]/15 border-[#4ade80] text-[#4ade80]'
                              : 'bg-[#121212] border-[#2a2a2a] text-[#888888] hover:border-[#3a3a3a] hover:text-[#ffffff]'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <Button variant="secondary" onClick={onClose}>
                      Close
                    </Button>
                    <Button variant="primary" type="submit">
                      Confirm Registration
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="p-4 bg-[#121212] border border-[#2a2a2a] rounded-lg text-center text-sm text-[#888888]">
                  Registration is currently closed for this event. Check out upcoming workshops!
                </div>
              )}
            </>
          ) : (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-[#4ade80]/10 border border-[#4ade80] rounded-full flex items-center justify-center mx-auto text-[#4ade80]">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#ffffff]">Registration Confirmed!</h3>
              <p className="text-sm text-[#cccccc]">
                We've reserved your slot for <strong className="text-[#ffffff]">{event.title}</strong>. A calendar invite and venue access key have been dispatched to <span className="text-[#4ade80] font-mono">{email}</span>.
              </p>
              <div className="p-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-md font-mono text-xs text-[#888888] text-left space-y-1">
                <p>TICKET_ID: {ticketId}</p>
                <p>MODE: {ticketType}</p>
                <p>STATUS: CONFIRMED</p>
              </div>
              <Button variant="primary" onClick={() => { setRegistered(false); onClose(); }} className="w-full">
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
