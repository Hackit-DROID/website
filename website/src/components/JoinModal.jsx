import { useState, useEffect } from 'react';

export default function JoinModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    branch: '',
    year: '1st Year',
    interest: 'Cybersecurity'
  });

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

  const inputClasses = "w-full bg-background border border-border focus:border-accent px-4 py-3 text-sm text-text-primary outline-none font-sans rounded-[14px] transition-all duration-200 focus:ring-2 focus:ring-accent/15";
  const labelClasses = "block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2 pl-1";

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-surface border border-border text-text-primary overflow-hidden shadow-2xl rounded-[28px] max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-surface-secondary border-b border-border rounded-t-[28px]">
          <h2 className="font-sans text-base font-bold text-text-primary">
            Join HackIT SGGSIE&T
          </h2>
          <button 
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary text-sm p-1 hover:bg-surface rounded-full transition-colors w-7 h-7 flex items-center justify-center"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {!submitted ? (
            <>
              <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                Open to all SGGSIE&T students. Join our workshops, CTF practice sessions, and collaborative projects.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={labelClasses}>Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className={labelClasses}>Institute Email</label>
                  <input
                    type="email"
                    required
                    placeholder="student@sggs.ac.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClasses}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClasses}>Branch</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. CSE"
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Year</label>
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className={inputClasses}
                    >
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClasses}>Primary Interest</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className={inputClasses}
                  >
                    <option value="Cybersecurity">Cybersecurity &amp; Ethical Hacking</option>
                    <option value="Web Security">Web Security &amp; Pentesting</option>
                    <option value="Competitive Coding">Competitive Coding</option>
                    <option value="Open Source Projects">Open Source Projects</option>
                  </select>
                </div>

                <div className="pt-5 mt-6 border-t border-border flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 bg-surface-secondary hover:bg-border border border-border text-text-secondary hover:text-text-primary text-sm font-semibold rounded-[14px] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-accent hover:bg-accent-hover text-white text-sm font-bold rounded-[14px] transition-colors shadow-sm"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 bg-success text-white flex items-center justify-center mx-auto text-xl font-bold rounded-full">
                ✓
              </div>
              <h3 className="text-lg font-bold text-text-primary">Application Received</h3>
              <p className="text-sm text-text-secondary max-w-sm mx-auto leading-relaxed">
                Welcome, <span className="text-text-primary font-semibold">{formData.name}</span>. We have recorded your interest in the <strong className="text-text-primary">{formData.interest}</strong> track.
              </p>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="w-full py-3 bg-accent hover:bg-accent-hover text-white text-sm font-bold rounded-[14px] transition-colors shadow-sm mt-4"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
