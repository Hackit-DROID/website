import { useState, useEffect } from 'react';
import { X, Terminal, Check, Copy, Shield, Send } from 'lucide-react';
import Button from './Button';

export function JoinModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discord: '',
    track: 'Red Team / Binary Exploit',
    experience: 'Beginner / Curious'
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

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

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const cliCommand = `npx hackit-cli join --email="${formData.email || 'user@domain.com'}" --track=${formData.track.split(' ')[0].toLowerCase()}`;

  const copyCli = () => {
    navigator.clipboard.writeText(cliCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0a]/80 backdrop-blur-md transition-all duration-300">
      <div 
        className="relative w-full max-w-xl bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl shadow-2xl overflow-hidden text-[#ffffff]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#121212] border-b border-[#2a2a2a]">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]/80 inline-block cursor-pointer" onClick={onClose}></span>
            <span className="w-3 h-3 rounded-full bg-[#f59e0b]/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#4ade80]/80 inline-block"></span>
            <span className="ml-3 text-xs font-mono text-[#888888] flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#4ade80]" />
              hackit://membership-challenge
            </span>
          </div>
          <button 
            onClick={onClose}
            className="text-[#888888] hover:text-[#ffffff] transition-colors p-1 rounded-md hover:bg-[#242424]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[85vh] overflow-y-auto">
          {!submitted ? (
            <>
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-2 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20 text-[#4ade80] text-xs font-mono">
                  <Shield className="w-3.5 h-3.5" />
                  MEMBERSHIP APPLICATION 2026
                </div>
                <h2 className="text-2xl font-bold text-[#ffffff] tracking-tight">
                  Join the HackIT Collective
                </h2>
                <p className="text-sm text-[#cccccc] mt-1">
                  Access weekly private CTFs, kernel vulnerability labs, and direct mentorship from industry security engineers.
                </p>
              </div>

              {/* CLI Command Box */}
              <div className="mb-6 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-3 font-mono text-xs text-[#888888]">
                <div className="flex items-center justify-between mb-1.5 text-[11px] uppercase tracking-wider text-[#5a5a5a]">
                  <span>Fast Track via CLI</span>
                  <span>Terminal mode</span>
                </div>
                <div className="flex items-center justify-between text-[#4ade80] bg-[#121212] p-2 rounded border border-[#2a2a2a]/60">
                  <span className="truncate pr-2">$ {cliCommand}</span>
                  <button
                    onClick={copyCli}
                    className="flex items-center gap-1 px-2 py-1 bg-[#1a1a1a] hover:bg-[#242424] border border-[#2a2a2a] rounded text-[11px] text-[#ffffff] transition-colors"
                  >
                    {copied ? <Check className="w-3 h-3 text-[#4ade80]" /> : <Copy className="w-3 h-3" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#e6e6e6] uppercase tracking-wider mb-1.5">
                    Full Name / Handle *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Vance (@root)"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#121212] border border-[#2a2a2a] focus:border-[#4ade80] rounded-md px-3.5 py-2.5 text-sm text-[#ffffff] placeholder-[#5a5a5a] focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#e6e6e6] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="hacker@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#121212] border border-[#2a2a2a] focus:border-[#4ade80] rounded-md px-3.5 py-2.5 text-sm text-[#ffffff] placeholder-[#5a5a5a] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#e6e6e6] uppercase tracking-wider mb-1.5">
                      Discord Handle
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. alex_vance#1337"
                      value={formData.discord}
                      onChange={(e) => setFormData({ ...formData, discord: e.target.value })}
                      className="w-full bg-[#121212] border border-[#2a2a2a] focus:border-[#4ade80] rounded-md px-3.5 py-2.5 text-sm text-[#ffffff] placeholder-[#5a5a5a] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#e6e6e6] uppercase tracking-wider mb-1.5">
                    Primary Interest Track
                  </label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full bg-[#121212] border border-[#2a2a2a] focus:border-[#4ade80] rounded-md px-3.5 py-2.5 text-sm text-[#ffffff] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Red Team / Binary Exploit">Red Team / Binary Exploitation (Pwn)</option>
                    <option value="Web Security & Cloud">Web Security & Cloud Auditing</option>
                    <option value="Reverse Engineering">Reverse Engineering & Malware Analysis</option>
                    <option value="Applied Cryptography">Applied Cryptography & Math</option>
                    <option value="Blue Team & Defense">Blue Team & Incident Response</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#e6e6e6] uppercase tracking-wider mb-1.5">
                    Experience Level
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Beginner / Curious', 'Intermediate', 'CTF Veteran'].map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => setFormData({ ...formData, experience: lvl })}
                        className={`py-2 px-3 text-xs rounded-md border font-medium transition-all text-center ${
                          formData.experience === lvl
                            ? 'bg-[#4ade80]/15 border-[#4ade80] text-[#4ade80]'
                            : 'bg-[#121212] border-[#2a2a2a] text-[#888888] hover:border-[#3a3a3a] hover:text-[#ffffff]'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <Button variant="secondary" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button variant="primary" type="submit" className="gap-2">
                    <Send className="w-4 h-4" />
                    Submit Application
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-[#4ade80]/10 border border-[#4ade80] rounded-full flex items-center justify-center mx-auto text-[#4ade80]">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#ffffff]">Application Received!</h3>
              <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-4 font-mono text-left text-xs text-[#4ade80] space-y-1">
                <p>[✓] Payload delivered: {formData.name}</p>
                <p>[✓] Target track: {formData.track}</p>
                <p>[✓] Discord invite link sent to {formData.email}</p>
                <p className="text-[#888888] pt-2">// Welcome to HackIT. Prepare your terminal.</p>
              </div>
              <Button variant="primary" onClick={() => { setSubmitted(false); onClose(); }} className="w-full mt-4">
                Done & Return
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default JoinModal;
