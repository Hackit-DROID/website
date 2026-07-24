import { useState, useEffect, useRef } from 'react';

export function StatCounter({ value, prefix = "", suffix = "", duration = 1.0, delay = 0 }) {
  const targetNum = parseInt(value, 10) || 0;
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let timeoutId;
    let animFrameId;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          observer.unobserve(el);

          if (prefersReducedMotion) {
            setCount(targetNum);
            return;
          }

          timeoutId = setTimeout(() => {
            let startTime = null;

            const animateCount = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const elapsed = (timestamp - startTime) / 1000;
              const progress = Math.min(elapsed / duration, 1);
              
              // Cubic ease-out: 1 - (1 - progress)^3
              const easeOutProgress = 1 - Math.pow(1 - progress, 3);
              const currentCount = Math.floor(easeOutProgress * targetNum);

              setCount(currentCount);

              if (progress < 1) {
                animFrameId = requestAnimationFrame(animateCount);
              } else {
                setCount(targetNum);
              }
            };

            animFrameId = requestAnimationFrame(animateCount);
          }, delay);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [targetNum, duration, delay]);

  return (
    <span ref={containerRef} className="stat-display font-mono tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

export default StatCounter;
