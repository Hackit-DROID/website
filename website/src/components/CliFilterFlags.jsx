import { motion, useReducedMotion } from 'framer-motion';

export function CliFilterFlags({ options, activeValue, onChange, label = "FLAG:" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex items-center gap-2 font-mono text-xs overflow-x-auto pb-1 md:pb-0 select-none">
      {label && (
        <span className="text-[#5a5a5a] text-[11px] font-bold uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
          {label}
        </span>
      )}
      {options.map((opt) => {
        const isActive = activeValue === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`relative px-3 py-1.5 rounded text-xs font-mono font-semibold shrink-0 transition-colors duration-150 ${
              isActive
                ? 'text-[#0a0a0a] font-bold border border-[#4ade80]'
                : 'bg-[#1a1a1a] text-[#888888] hover:text-[#ffffff] border border-[#2a2a2a] hover:border-[#3a3a3a]'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId={shouldReduceMotion ? undefined : 'activeCliFlagBg'}
                className="absolute inset-0 bg-[#4ade80] rounded -z-0"
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.15, ease: 'easeOut' }}
              />
            )}
            <span className="relative z-10">{opt.flag}</span>
          </button>
        );
      })}
    </div>
  );
}

export default CliFilterFlags;
