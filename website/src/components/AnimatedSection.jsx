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

export function AnimatedCard({ children, className = '', index = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  const staggerDelay = Math.min(index * 0.07, 0.35);

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.25,
        ease: 'easeOut',
        delay: shouldReduceMotion ? 0 : staggerDelay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
