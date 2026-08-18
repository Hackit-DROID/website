import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from './SocialIcons';

// Helper to extract initials from placeholder names like [President Name]
const getInitials = (name) => {
  if (!name) return "";
  const cleanName = name.replace(/[\[\]]/g, "");
  const parts = cleanName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

export function ExpandableMemberCard({ member, isSelected, onClick, isLeadership = false }) {
  if (!member) return null;

  const cardRef = useRef(null);
  const initials = getInitials(member.name);

  // Smooth scroll into view to keep focus on the expanded card
  useEffect(() => {
    if (isSelected && cardRef.current) {
      const timer = setTimeout(() => {
        cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isSelected]);

  const customTransition = {
    layout: { type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <motion.div
      layout
      ref={cardRef}
      onClick={onClick}
      className={`bg-surface border rounded-[24px] shadow-soft flex flex-col sm:flex-row cursor-pointer overflow-hidden h-full w-full no-layout-transition
        ${isSelected 
          ? 'border-accent/40 ring-1 ring-accent/10 shadow-md p-6' 
          : 'border-border hover:border-border-hover p-5'
        }`}
      transition={customTransition}
    >
      {/* LEFT COLUMN: The exact same compact card in both states */}
      <motion.div 
        layout="position"
        className="w-full sm:w-[220px] flex flex-col justify-between shrink-0 h-full"
        transition={customTransition}
      >
        <div>
          {/* Profile Photo / Initials Fallback */}
          <motion.div 
            layout="position"
            className="w-full aspect-square bg-surface-secondary border border-border flex items-center justify-center overflow-hidden rounded-[20px]"
            transition={customTransition}
          >
            {member.image ? (
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-accent-subtle/50 text-accent flex items-center justify-center font-mono font-extrabold text-3xl tracking-wider select-none">
                {initials}
              </div>
            )}
          </motion.div>

          {/* Position/Role Badge */}
          {isLeadership && (
            <motion.span 
              layout="position"
              className="inline-block mt-4 px-2.5 py-0.5 bg-accent-subtle text-accent text-[9px] font-bold rounded uppercase tracking-wider"
              transition={customTransition}
            >
              {member.role}
            </motion.span>
          )}

          {/* Full Name */}
          <motion.h3 
            layout="position"
            className={`font-sans font-bold text-text-primary leading-snug mt-3 ${isLeadership ? 'text-base' : 'text-sm'}`}
            transition={customTransition}
          >
            {member.name}
          </motion.h3>

          {/* Short Specialization/Domain */}
          <motion.p 
            layout="position"
            className="text-xs text-text-secondary mt-1 font-medium leading-relaxed"
            transition={customTransition}
          >
            {member.domain}
          </motion.p>
        </div>

        {/* Small Social Icon Links for the Compact Card */}
        <motion.div 
          layout="position"
          className="pt-4 mt-5 border-t border-surface-secondary flex items-center gap-2.5" 
          onClick={(e) => e.stopPropagation()}
          transition={customTransition}
        >
          {member.linkedin && (
            <a 
              href={member.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn w-8 h-8"
              aria-label={`${member.name}'s LinkedIn Profile`}
            >
              <Linkedin size={14} />
            </a>
          )}
          {member.github && (
            <a 
              href={member.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn w-8 h-8"
              aria-label={`${member.name}'s GitHub Profile`}
            >
              <Github size={14} />
            </a>
          )}
        </motion.div>
      </motion.div>

      {/* RIGHT COLUMN: The Detail Panel (Revealed smoothly on the right) */}
      <motion.div 
        layout="position"
        initial={false}
        animate={{
          maxWidth: isSelected ? 500 : 0,
          maxHeight: isSelected ? 800 : 0,
          opacity: isSelected ? 1 : 0,
        }}
        transition={{
          maxWidth: { type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] },
          maxHeight: { type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] },
          opacity: { type: 'tween', duration: 0.3, delay: isSelected ? 0.05 : 0, ease: 'easeInOut' }
        }}
        className={`overflow-hidden flex flex-col justify-between
          ${isSelected 
            ? 'sm:ml-6 mt-6 sm:mt-0 sm:pl-6 sm:border-l border-border/60 flex-grow' 
            : 'pointer-events-none'
          }`}
      >
        <motion.div 
          layout="position"
          initial={false}
          animate={{
            opacity: isSelected ? 1 : 0,
            y: isSelected ? 0 : 8
          }}
          transition={{
            layout: customTransition.layout,
            opacity: { type: 'tween', duration: 0.25, delay: isSelected ? 0.15 : 0, ease: 'easeOut' },
            y: { type: 'tween', duration: 0.3, delay: isSelected ? 0.15 : 0, ease: [0.22, 1, 0.36, 1] }
          }}
          className="w-[280px] sm:w-[500px] flex flex-col h-full justify-between"
        >
          <div className="space-y-5">
            {/* Technical Focus tag pills */}
            {member.domains && member.domains.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest block">Technical Focus</span>
                <div className="flex flex-wrap gap-1.5">
                  {member.domains.map((dom) => (
                    <span 
                      key={dom}
                      className="px-2.5 py-1 bg-surface-secondary text-text-secondary hover:text-accent font-mono text-[10px] font-bold rounded-[6px] border border-border transition-colors duration-200"
                    >
                      #{dom.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Biography */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest block">Biography</span>
              <p className="text-xs text-text-secondary leading-relaxed font-sans">
                {member.bio || `HackIT active contributor specializing in ${member.domain.toLowerCase()}.`}
              </p>
            </div>
          </div>

          {/* Social Links (Additional Action Buttons) & Collapse trigger */}
          <div className="pt-5 mt-6 border-t border-border/60 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
              {member.linkedin && (
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn"
                  aria-label={`${member.name}'s LinkedIn Profile`}
                >
                  <Linkedin size={18} />
                </a>
              )}
              {member.github && (
                <a 
                  href={member.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn"
                  aria-label={`${member.name}'s GitHub Profile`}
                >
                  <Github size={18} />
                </a>
              )}
            </div>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                onClick(); // triggers toggle collapse
              }}
              className="text-[10px] font-bold uppercase tracking-wider text-text-secondary hover:text-accent flex items-center gap-1 cursor-pointer"
            >
              Collapse
              <span className="material-symbols-outlined text-xs">keyboard_double_arrow_left</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ExpandableMemberCard;
