import { motion, useReducedMotion } from 'framer-motion';

export function AnimatedSection({ children, className = '', delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.3,
        ease: 'easeOut',
        delay: shouldReduceMotion ? 0 : delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCard({ children, className = '', index = 0, layout = false }) {
  const shouldReduceMotion = useReducedMotion();
  const staggerDelay = Math.min(index * 0.07, 0.35);

  return (
    <motion.div
      layout={layout ? true : undefined}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        layout: { type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.25 },
        y: { duration: 0.25, delay: shouldReduceMotion ? 0 : staggerDelay }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
