import { useState, useEffect } from 'react';

const defaultExamples = [
  'grep -i "kernel"',
  'grep -i "heap"',
  'grep -i "crypto"'
];

export function CliSearchBar({ value, onChange, placeholder, onClear }) {
  const [isFocused, setIsFocused] = useState(false);
  const [exampleIdx, setExampleIdx] = useState(0);
  const [typedPlaceholder, setTypedPlaceholder] = useState(placeholder || defaultExamples[0]);

  useEffect(() => {
    if (value || isFocused) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const targetText = placeholder || defaultExamples[exampleIdx];
    let charIdx = 0;
    let pauseTimer;

    const typeTimer = setInterval(() => {
      charIdx++;
      if (charIdx <= targetText.length) {
        setTypedPlaceholder(targetText.slice(0, charIdx));
      } else {
        clearInterval(typeTimer);
        pauseTimer = setTimeout(() => {
          setExampleIdx((prev) => (prev + 1) % defaultExamples.length);
        }, 2600);
      }
    }, 40);

    return () => {
      clearInterval(typeTimer);
      if (pauseTimer) clearTimeout(pauseTimer);
    };
  }, [value, isFocused, exampleIdx, placeholder]);

  return (
    <div className="relative min-w-[240px] md:min-w-[320px] font-mono text-xs">
      <div
        className={`absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold font-mono select-none transition-opacity ${
          isFocused ? 'text-[#4ade80] animate-pulse' : 'text-[#4ade80]'
        }`}
      >
        $&nbsp;
      </div>
      <input
        type="text"
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => onChange(e.target.value)}
        placeholder={isFocused || value ? (placeholder || 'grep -i "kernel"') : typedPlaceholder}
        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] focus:border-[#4ade80] rounded px-3 pl-8 pr-12 py-2 text-xs text-[#ffffff] font-mono placeholder-[#5a5a5a] focus:outline-none transition-colors"
      />
      {value && onClear && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#888888] hover:text-[#4ade80] text-[10px] uppercase font-bold font-mono px-1 py-0.5 rounded bg-[#1a1a1a] border border-[#2a2a2a]"
        >
          [ESC]
        </button>
      )}
    </div>
  );
}

export default CliSearchBar;
