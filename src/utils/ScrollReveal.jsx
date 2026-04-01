import { motion } from "framer-motion";

export default function ScrollReveal({ children, className = "" }) {
    const MotionDiv = motion.div;
  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </MotionDiv>
  );
}