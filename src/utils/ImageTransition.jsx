import { motion, AnimatePresence } from "framer-motion";

export default function ImageTranstion({ children, className = "" , selectedImage}) {
  const MotionImg = motion.img;

  return (
    <AnimatePresence mode="wait">
      <MotionImg
        key={selectedImage}
        src={selectedImage}
        className={className}
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -12 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </MotionImg>
    </AnimatePresence>
  );
}
