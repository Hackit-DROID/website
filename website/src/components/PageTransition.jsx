import { motion, useReducedMotion } from 'framer-motion';

export function PageTransition({ children }) {
  const shouldReduceMotion = useReducedMotion();

  const pageVariants = {
    initial: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    exit: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: -10 }
  };

  const pageTransition = {
    duration: shouldReduceMotion ? 0 : 0.25,
    ease: 'easeOut'
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
