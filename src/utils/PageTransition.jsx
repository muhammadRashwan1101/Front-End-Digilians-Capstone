import { motion } from "framer-motion";

export default function PageTransition({ children, className = "" }) {
  const MotionDiv = motion.div;
  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 12 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </MotionDiv>
  );
}
