import { motion } from "framer-motion";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryButton?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  backgroundColor?: string;
  containerVariants?: any;
  itemVariants?: any;
  className?: string;
  theme?: "gradient" | "solid" | "glassmorphism";
}

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  backgroundColor = "#3671E9",
  containerVariants,
  itemVariants,
  className = "",
  theme = "gradient",
}: CTASectionProps) {
  const defaultContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const defaultItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const variants = containerVariants || defaultContainerVariants;
  const itemVars = itemVariants || defaultItemVariants;

  // Enhanced background patterns
  const BackgroundDecorations = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/5 rounded-full"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating elements */}
      <motion.div
        className="absolute top-8 right-16"
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-4 h-4 bg-white/20 rounded-full" />
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-16"
        animate={{
          y: [10, -10, 10],
          x: [5, -5, 5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-3 h-3 bg-white/15 rounded-full" />
      </motion.div>

      {/* Main decorative chart icon */}
      <motion.div
        className="absolute opacity-10"
        style={{ right: "80px", top: "40px" }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
          <circle cx="70" cy="70" r="70" fill="white" fillOpacity="0.1" />
          <path
            d="M40 80L55 65L70 75L85 55L100 45"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="55" cy="65" r="4" fill="white" fillOpacity="0.8" />
          <circle cx="70" cy="75" r="4" fill="white" fillOpacity="0.8" />
          <circle cx="85" cy="55" r="4" fill="white" fillOpacity="0.8" />
          <circle cx="100" cy="45" r="4" fill="white" fillOpacity="0.8" />
        </svg>
      </motion.div>
    </div>
  );

  const getBackgroundStyle = () => {
    switch (theme) {
      case "gradient":
        return {
          background: `linear-gradient(135deg, ${backgroundColor} 0%, ${backgroundColor}CC 50%, ${backgroundColor}AA 100%)`,
        };
      case "glassmorphism":
        return {
          background: `linear-gradient(135deg, ${backgroundColor}40 0%, ${backgroundColor}60 100%)`,
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        };
      default:
        return { backgroundColor };
    }
  };

  const ButtonComponent = ({
    button,
    variant,
  }: {
    button: any;
    variant: "primary" | "secondary";
  }) => {
    const isPrimary = variant === "primary";

    const content = (
      <motion.button
        className={`
          relative overflow-hidden group
          ${
            isPrimary
              ? "bg-white text-crypto-blue hover:bg-gray-50"
              : "border-2 border-white text-white hover:bg-white hover:text-crypto-blue"
          }
          px-8 py-4 rounded-4xl font-rubik font-medium text-lg
          transition-all duration-300
          shadow-lg hover:shadow-xl
          ${isPrimary ? "hover:shadow-white/20" : "hover:shadow-white/10"}
        `}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={button.onClick}
      >
        {/* Button shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />

        {/* Button content */}
        <span className="relative z-10 flex items-center gap-3">
          {button.text}
          {isPrimary && (
            <motion.div
              className="w-6 h-6 bg-crypto-blue rounded-full flex items-center justify-center"
              whileHover={{ rotate: 90, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M10.5 16.9999C10.3684 17.0007 10.2379 16.9755 10.1161 16.9257C9.99426 16.8759 9.88344 16.8026 9.79 16.7099C9.69627 16.617 9.62188 16.5064 9.57111 16.3845C9.52034 16.2626 9.4942 16.1319 9.4942 15.9999C9.4942 15.8679 9.52034 15.7372 9.57111 15.6154C9.62188 15.4935 9.69627 15.3829 9.79 15.2899L13.1 11.9999L9.92 8.68993C9.73375 8.50257 9.62921 8.24911 9.62921 7.98493C9.62921 7.72074 9.73375 7.46729 9.92 7.27993C10.013 7.1862 10.1236 7.11181 10.2454 7.06104C10.3673 7.01027 10.498 6.98413 10.63 6.98413C10.762 6.98413 10.8927 7.01027 11.0146 7.06104C11.1364 7.11181 11.247 7.1862 11.34 7.27993L15.2 11.2799C15.3832 11.4669 15.4859 11.7182 15.4859 11.9799C15.4859 12.2417 15.3832 12.493 15.2 12.6799L11.2 16.6799C11.1102 16.7769 11.0022 16.855 10.882 16.91C10.7619 16.9649 10.632 16.9955 10.5 16.9999Z"
                  fill="white"
                />
              </svg>
            </motion.div>
          )}
        </span>
      </motion.button>
    );

    if (button.href) {
      return (
        <a href={button.href} className="inline-block">
          {content}
        </a>
      );
    }

    return content;
  };

  return (
    <motion.section
      className={`relative py-16 lg:py-20 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      <motion.div
        className="max-w-[1000px] mx-auto relative rounded-3xl overflow-hidden shadow-2xl"
        style={getBackgroundStyle()}
        variants={itemVars}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <BackgroundDecorations />

        {/* Content */}
        <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-20 text-center">
          <motion.div className="mb-8" variants={itemVars}>
            {/* Enhanced title with better typography */}
            <motion.h3
              className="font-rubik font-bold text-4xl lg:text-5xl text-white mb-6 leading-tight"
              variants={itemVars}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {title}
            </motion.h3>

            {/* Enhanced description */}
            <motion.p
              className="font-rubik text-xl lg:text-2xl text-white/90 max-w-[700px] mx-auto leading-relaxed"
              variants={itemVars}
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Enhanced button container */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={itemVars}
          >
            <ButtonComponent button={primaryButton} variant="primary" />
            {secondaryButton && (
              <ButtonComponent button={secondaryButton} variant="secondary" />
            )}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 flex items-center justify-center gap-8 text-white/70"
            variants={itemVars}
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M10 3L4.5 8.5L2 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">Trusted by 10M+ users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 1L7.5 4.5L11 4.5L8.25 7L9.75 10.5L6 8.5L2.25 10.5L3.75 7L1 4.5L4.5 4.5L6 1Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-purple-400 rounded-full flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 1V6L9 9"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="5"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
