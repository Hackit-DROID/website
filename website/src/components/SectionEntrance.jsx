import { motion, useReducedMotion } from 'framer-motion';

export function SectionEntrance({ children, className = '', as = 'section', ...props }) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.section;

  return (
    <Component
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

export default SectionEntrance;
