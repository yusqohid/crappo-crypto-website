import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../lib/animations";

const trustIndicators = [
  {
    icon: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M10 3L4.5 8.5L2 6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    bgColor: "bg-green-400",
    text: "Trusted by 10M+ users",
  },
  {
    icon: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M6 1L7.5 4.5L11 4.5L8.25 7L9.75 10.5L6 8.5L2.25 10.5L3.75 7L1 4.5L4.5 4.5L6 1Z"
          fill="white"
        />
      </svg>
    ),
    bgColor: "bg-blue-400",
    text: "4.9/5 Rating",
  },
  {
    icon: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M6 1V6L9 9"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
    bgColor: "bg-purple-400",
    text: "24/7 Support",
  },
];

interface NewsletterSectionProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
}

export default function NewsletterSection({
  title = "Start mining now",
  description = "Join now with CRAPPO to get the latest news and start mining now",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
}: NewsletterSectionProps) {
  return (
    <motion.section
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #2B076E 0%, #0D0D2B 100%)",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-crypto-blue bg-opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white bg-opacity-8 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 right-32"
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
          className="absolute bottom-20 left-32"
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
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] relative z-10">
        <motion.div
          className="max-w-[1000px] mx-auto relative rounded-3xl overflow-hidden shadow-2xl"
          style={{
            background:
              "linear-gradient(135deg, #3671E9 0%, #3671E9CC 50%, #3671E9AA 100%)",
          }}
          variants={itemVariants}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

            {/* Crypto icons background */}
            <motion.div
              className="absolute opacity-8"
              style={{ left: "60px", top: "60px" }}
              animate={{ y: [-20, 20, -20] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="50" fill="white" fillOpacity="0.1" />
                <path
                  d="M50 20L45 35L30 35L40 45L35 60L50 50L65 60L60 45L70 35L55 35L50 20Z"
                  fill="white"
                  fillOpacity="0.15"
                />
              </svg>
            </motion.div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-20 text-center">
            <motion.div className="mb-8" variants={itemVariants}>
              {/* Enhanced title with better typography */}
              <motion.h3
                className="font-rubik font-bold text-4xl lg:text-5xl text-white mb-6 leading-tight"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {title}
              </motion.h3>

              {/* Enhanced description */}
              <motion.p
                className="font-rubik text-xl lg:text-2xl text-white/90 max-w-[700px] mx-auto leading-relaxed"
                variants={itemVariants}
              >
                {description}
              </motion.p>
            </motion.div>

            {/* Email subscription form */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-lg mx-auto mb-12"
              variants={itemVariants}
            >
              {/* Email Input */}
              <motion.div className="flex-1 w-full" variants={itemVariants}>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder={placeholder}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/70 font-rubik text-lg focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                />
              </motion.div>

              {/* Subscribe Button */}
              <motion.button
                type="submit"
                className="relative overflow-hidden group bg-white text-crypto-blue hover:bg-gray-50 px-8 py-4 rounded-2xl font-rubik font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/20 min-w-[152px]"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
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
                  {buttonText}
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
                </span>
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 text-white/70"
              variants={itemVariants}
            >
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className={`w-5 h-5 ${indicator.bgColor} rounded-full flex items-center justify-center`}
                  >
                    {indicator.icon}
                  </div>
                  <span className="text-sm font-medium">{indicator.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
