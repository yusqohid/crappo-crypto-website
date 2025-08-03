import { lazy } from "react";

// Lazy load animation variants to reduce initial bundle size
export const loadAnimations = () => import("./animations");

// Minimal animations for initial load
export const basicAnimations = {
  containerVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  },
  itemVariants: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

// Reduced motion variants for performance
export const reducedMotionVariants = {
  containerVariants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  itemVariants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  pulseAnimation: {},
};
