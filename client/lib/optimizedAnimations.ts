/**
 * Highly optimized animation configurations for smooth performance
 * Focus on GPU-accelerated transforms and minimal repaints
 */

// GPU-optimized animation variants
export const optimizedContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.05, // Reduced stagger for faster loading
      ease: "easeOut",
    },
  },
};

export const optimizedItemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4, // Reduced duration
      ease: "easeOut",
    },
  },
};

// High-performance slide animations using only transforms
export const optimizedSlideInLeft = {
  hidden: {
    opacity: 0,
    x: -50, // Reduced distance for smoother animation
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smoother feel
    },
  },
};

export const optimizedSlideInRight = {
  hidden: {
    opacity: 0,
    x: 50,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Minimal fade animations for heavy elements
export const optimizedFadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Performance-focused scale animation
export const optimizedScaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Lightweight floating animation (reduced intensity)
export const lightFloatingAnimation = {
  y: [-3, 3, -3],
  transition: {
    duration: 6, // Slower for less CPU usage
    repeat: Infinity,
    ease: "easeInOut",
    repeatType: "reverse" as const,
  },
};

// Minimal pulse animation
export const subtlePulseAnimation = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 4, // Slower pulse
    repeat: Infinity,
    ease: "easeInOut",
    repeatType: "reverse" as const,
  },
};

// Optimized button hover states
export const optimizedButtonHover = {
  scale: 1.02,
  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};

export const optimizedButtonTap = {
  scale: 0.98,
  transition: {
    duration: 0.1,
  },
};

// High-performance viewport settings
export const optimizedViewport = {
  once: true,
  amount: 0.15,
  margin: "-50px 0px",
};

// Reduced motion alternatives
export const reducedMotionVariants = {
  containerVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  },
  itemVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  },
};

// CSS properties that trigger GPU acceleration
export const gpuOptimizedStyles = {
  willChange: "transform, opacity",
  backfaceVisibility: "hidden" as const,
  perspective: 1000,
  transformStyle: "preserve-3d" as const,
};

// Performance-focused transition presets
export const transitionPresets = {
  fast: { duration: 0.2, ease: "easeOut" },
  medium: { duration: 0.4, ease: "easeOut" },
  slow: { duration: 0.6, ease: "easeOut" },
  spring: { type: "spring" as const, stiffness: 200, damping: 20 },
  bounce: { type: "spring" as const, stiffness: 400, damping: 10 },
};
