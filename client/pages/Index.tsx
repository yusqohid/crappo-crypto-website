import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Index() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-screen bg-crypto-dark text-white overflow-hidden">
      {/* Header */}
      <Navbar
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* Hero Section */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] pb-[60px]">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6 lg:space-y-8 order-last lg:order-first"
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
          >
            {/* Promotional Badge */}
            <motion.div
              className="inline-flex items-center bg-white/10 rounded-full px-2 py-1 max-w-fit mx-auto sm:mx-0"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.6,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Badge Section */}
              <motion.div
                className="bg-white rounded-full px-3 py-1 shadow-md"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(255,255,255,0.3)",
                    "0 0 0 8px rgba(255,255,255,0)",
                    "0 0 0 0 rgba(255,255,255,0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="font-rubik font-semibold text-sm sm:text-base text-crypto-dark tracking-wide uppercase">
                  75% OFF
                </span>
              </motion.div>

              {/* Description Text */}
              <span className="mx-3 font-rubik text-sm sm:text-base text-white whitespace-nowrap">
                Black Friday Weekend Deal
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="font-rubik font-bold text-4xl md:text-5xl lg:text-[64px] lg:leading-[76px] text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                Fastest & secure
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                platform to invest
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="bg-gradient-to-r from-crypto-blue to-blue-400 bg-clip-text text-transparent"
              >
                in crypto
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="font-rubik text-base lg:text-lg text-crypto-grey leading-7 max-w-[435px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              Buy and sell cryptocurrencies, trusted by 10M wallets with over
              $30 billion in transactions.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              className="inline-flex items-center gap-6 bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl px-6 py-4 lg:px-8 lg:py-6 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(54, 113, 233, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-rubik font-medium text-lg text-white">
                Try for FREE
              </span>
              <motion.div
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                whileHover={{
                  scale: 1.2,
                  rotate: 90,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 16.9999C10.3684 17.0007 10.2379 16.9755 10.1161 16.9257C9.99426 16.8759 9.88344 16.8026 9.79 16.7099C9.69627 16.617 9.62188 16.5064 9.57111 16.3845C9.52034 16.2626 9.4942 16.1319 9.4942 15.9999C9.4942 15.8679 9.52034 15.7372 9.57111 15.6154C9.62188 15.4935 9.69627 15.3829 9.79 15.2899L13.1 11.9999L9.92 8.68993C9.73375 8.50257 9.62921 8.24911 9.62921 7.98493C9.62921 7.72074 9.73375 7.46729 9.92 7.27993C10.013 7.1862 10.1236 7.11181 10.2454 7.06104C10.3673 7.01027 10.498 6.98413 10.63 6.98413C10.762 6.98413 10.8927 7.01027 11.0146 7.06104C11.1364 7.11181 11.247 7.1862 11.34 7.27993L15.2 11.2799C15.3832 11.4669 15.4859 11.7182 15.4859 11.9799C15.4859 12.2417 15.3832 12.493 15.2 12.6799L11.2 16.6799C11.1102 16.7769 11.0022 16.855 10.882 16.91C10.7619 16.9649 10.632 16.9955 10.5 16.9999Z"
                    fill="#3671E9"
                  />
                </svg>
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            className="relative flex justify-center lg:justify-end order-first lg:order-last"
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            <div className="relative w-full max-w-[604px] h-[300px] md:h-[400px] lg:h-[585px]">
              {/* Main Illustration */}
              <motion.img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6a568ddf4d23ad9ba50ed984314961184dbb430b?width=1208"
                alt=""
                className="w-full h-full object-contain"
                animate={floatingAnimation}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

              {/* Background decorative elements */}
              <div className="absolute inset-0 -z-10 hidden lg:block">
                {/* Decorative lines */}
                <motion.div
                  className="absolute top-1/2 left-1/4 w-[120px] h-[400px] opacity-20"
                  initial={{ opacity: 0, rotate: -120 }}
                  animate={{ opacity: 0.2, rotate: -120 }}
                  transition={{ delay: 2.5, duration: 1 }}
                >
                  <motion.img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/625ce806043f844d7dafb6d866384465af38e111?width=240"
                    alt=""
                    className="w-full h-full object-contain transform -rotate-[120deg]"
                    animate={{ rotate: [-120, -110, -120] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <motion.div
                  className="absolute top-1/2 right-1/4 w-[120px] h-[400px] opacity-20 transform rotate-60"
                  initial={{ opacity: 0, rotate: 60 }}
                  animate={{ opacity: 0.2, rotate: 60 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              </div>

              {/* Floating elements around illustration */}
              <motion.div
                className="absolute top-20 right-10 w-4 h-4 bg-crypto-blue rounded-full opacity-60"
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-20 left-10 w-6 h-6 bg-white bg-opacity-20 rounded-full"
                animate={{
                  y: [20, -20, 20],
                  x: [10, -10, 10],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why CRAPPO Section */}
      <motion.section
        className="relative py-20 lg:py-32 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-crypto-blue bg-opacity-5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white bg-opacity-5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] relative z-10">
          {/* Statistics Header */}
          <motion.div
            className="text-center mb-16 lg:mb-20"
            variants={itemVariants}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-crypto-blue bg-opacity-20 rounded-full font-rubik font-medium text-sm text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              GLOBAL STATISTICS
            </motion.span>
            <motion.h2
              className="font-rubik font-bold text-3xl lg:text-5xl text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Trusted by millions{" "}
              <span className="bg-gradient-to-r from-crypto-blue to-blue-400 bg-clip-text text-transparent">
                worldwide
              </span>
            </motion.h2>
            <motion.p
              className="font-rubik text-lg text-crypto-grey max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Join our growing community of investors and traders from around
              the globe
            </motion.p>
          </motion.div>

          {/* Enhanced Statistics Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20 lg:mb-32"
            variants={containerVariants}
          >
            {/* Stat 1 - Enhanced */}
            <motion.div
              className="relative group"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <pattern
                        id="grid1"
                        width="10"
                        height="10"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 10 0 L 0 0 0 10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid1)" />
                  </svg>
                </div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <motion.div
                    className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-crypto-blue to-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                    animate={{
                      boxShadow: [
                        "0 4px 20px rgba(54, 113, 233, 0.3)",
                        "0 8px 30px rgba(54, 113, 233, 0.5)",
                        "0 4px 20px rgba(54, 113, 233, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 13H11L15 17L21 11"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 13V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V11"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>

                  {/* Counter Animation */}
                  <motion.h3
                    className="font-rubik font-bold text-4xl lg:text-5xl text-white mb-3"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.3,
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100,
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      viewport={{ once: true }}
                    >
                      $30B+
                    </motion.span>
                  </motion.h3>

                  <p className="font-rubik text-base text-crypto-grey mb-4">
                    Digital Currency Exchanged
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                    <motion.div
                      className="bg-gradient-to-r from-crypto-blue to-blue-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ delay: 0.8, duration: 1.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-xs text-crypto-grey">
                    85% Growth YoY
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Stat 2 - Enhanced */}
            <motion.div
              className="relative group"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <pattern
                        id="grid2"
                        width="8"
                        height="8"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle
                          cx="4"
                          cy="4"
                          r="1"
                          fill="currentColor"
                          opacity="0.3"
                        />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid2)" />
                  </svg>
                </div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <motion.div
                    className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg"
                    animate={{
                      boxShadow: [
                        "0 4px 20px rgba(16, 185, 129, 0.3)",
                        "0 8px 30px rgba(16, 185, 129, 0.5)",
                        "0 4px 20px rgba(16, 185, 129, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="7"
                        r="4"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </motion.div>

                  {/* Counter Animation */}
                  <motion.h3
                    className="font-rubik font-bold text-4xl lg:text-5xl text-white mb-3"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.5,
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100,
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.7, duration: 1 }}
                      viewport={{ once: true }}
                    >
                      10M+
                    </motion.span>
                  </motion.h3>

                  <p className="font-rubik text-base text-crypto-grey mb-4">
                    Trusted Wallets Investor
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                    <motion.div
                      className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "92%" }}
                      transition={{ delay: 1, duration: 1.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-xs text-crypto-grey">
                    92% Active Users
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Stat 3 - Enhanced */}
            <motion.div
              className="relative group"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <pattern
                        id="grid1"
                        width="10"
                        height="10"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 10 0 L 0 0 0 10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid1)" />
                  </svg>
                </div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <motion.div
                    className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg"
                    animate={{
                      boxShadow: [
                        "0 4px 20px rgba(147, 51, 234, 0.3)",
                        "0 8px 30px rgba(147, 51, 234, 0.5)",
                        "0 4px 20px rgba(147, 51, 234, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <path
                        d="M2 12H6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 12H22"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 2V6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 18V22"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>

                  {/* Counter Animation */}
                  <motion.h3
                    className="font-rubik font-bold text-4xl lg:text-5xl text-white mb-3"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.7,
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100,
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.9, duration: 1 }}
                      viewport={{ once: true }}
                    >
                      195+
                    </motion.span>
                  </motion.h3>

                  <p className="font-rubik text-base text-crypto-grey mb-4">
                    Countries Supported
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                    <motion.div
                      className="bg-gradient-to-r from-purple-500 to-indigo-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "78%" }}
                      transition={{ delay: 1.2, duration: 1.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-xs text-crypto-grey">
                    78% Global Coverage
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Why Choose CRAPPO Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content - Illustration */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
            >
              <div className="relative w-full max-w-[500px] mx-auto lg:mx-0">
                {/* Main Illustration */}
                <motion.img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9da17c4b43ee4d6e817795d2e5a07623%2F06df7c98800c41588ee4f32c576af0ef?format=webp&width=800"
                  alt="Why CRAPPO Illustration"
                  className="w-full h-auto object-contain"
                  animate={floatingAnimation}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating accent elements */}
                <motion.div
                  className="absolute top-10 right-10 w-3 h-3 bg-crypto-blue rounded-full opacity-70"
                  animate={{
                    y: [-15, 15, -15],
                    x: [-8, 8, -8],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-16 left-8 w-4 h-4 bg-white bg-opacity-30 rounded-full"
                  animate={{
                    y: [15, -15, 15],
                    x: [8, -8, 8],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            {/* Right Content - Text */}
            <motion.div
              className="space-y-8 order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
            >
              <motion.span
                className="inline-block px-4 py-2 bg-crypto-blue bg-opacity-20 rounded-full font-rubik font-medium text-sm text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                WHY CHOOSE US
              </motion.span>
              <motion.h2
                className="font-rubik font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
                variants={itemVariants}
              >
                Why you should choose{" "}
                <span className="bg-gradient-to-r from-crypto-blue to-blue-400 bg-clip-text text-transparent">
                  CRAPPO
                </span>
              </motion.h2>

              <motion.p
                className="font-rubik text-base lg:text-lg text-crypto-grey leading-7 max-w-[500px]"
                variants={itemVariants}
              >
                Experience the next generation cryptocurrency platform. No
                financial borders, extra fees, and fake reviews.
              </motion.p>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <button className="inline-flex items-center gap-4 bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl px-8 py-4">
                  <span className="font-rubik font-medium text-lg text-white">
                    Learn More
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Check how much you can earn Section */}
      <motion.section
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Dark Background Top Section */}
        <div className="bg-crypto-dark py-16 lg:py-24">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] text-center">
            <motion.span
              className="inline-block px-4 py-2 bg-crypto-blue bg-opacity-20 rounded-full font-rubik font-medium text-sm text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              EARNING CALCULATOR
            </motion.span>
            <motion.h2
              className="font-rubik font-bold text-3xl lg:text-5xl text-white mb-6"
              variants={itemVariants}
            >
              Check how much you can earn
            </motion.h2>
            <motion.p
              className="font-rubik text-base lg:text-lg text-crypto-grey leading-7 max-w-[622px] mx-auto"
              variants={itemVariants}
            >
              Let's check your hash rate to see how much you will earn today,
              Exercitation veniam consequat sunt nostrud amet.
            </motion.p>
          </div>
        </div>

        {/* Calculator Section */}
        <div className="bg-crypto-dark pb-16 lg:pb-24">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
            <motion.div
              className="max-w-[942px] mx-auto"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Input Section */}
              <div className="bg-gray-50 rounded-t-2xl p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-end">
                  <div className="flex-1 w-full">
                    <label className="font-rubik text-xl text-crypto-dark mb-2 block">
                      Enter your hash rate
                    </label>
                    <div className="border-b-2 border-crypto-grey pb-2">
                      <input
                        type="text"
                        className="w-full bg-transparent text-xl text-crypto-dark font-rubik focus:outline-none"
                        placeholder="Enter hash rate"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-48">
                    <div className="relative">
                      <div className="border-b-2 border-crypto-grey pb-2 flex items-center justify-between">
                        <span className="font-rubik text-xl text-crypto-dark">
                          TH/s
                        </span>
                        <motion.svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                        >
                          <path
                            d="M13.1313 4.6875H2.86876C2.56095 4.6875 2.38907 5.0125 2.5797 5.23438L7.71095 11.1844C7.85782 11.3547 8.14064 11.3547 8.28907 11.1844L13.4203 5.23438C13.6109 5.0125 13.4391 4.6875 13.1313 4.6875Z"
                            fill="#BDBDBD"
                          />
                        </motion.svg>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    className="bg-crypto-blue hover:bg-blue-600 text-white font-rubik font-medium text-lg px-8 py-4 rounded-4xl transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Calculate
                  </motion.button>
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-white rounded-b-2xl p-8 lg:p-12 shadow-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="font-rubik font-medium text-base text-crypto-blue uppercase tracking-wider mb-4">
                    ESTIMATED 24 HOUR REVENUE:
                  </p>
                  <h3 className="font-rubik font-bold text-2xl lg:text-4xl text-crypto-dark mb-4">
                    0.055 130 59 ETH{" "}
                    <span className="text-crypto-blue">($1275)</span>
                  </h3>
                  <p className="font-rubik text-base text-gray-500">
                    Revenue will change based on mining difficulty and Ethereum
                    price.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Light Background Trading Section */}
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 lg:py-24">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
            {/* Section Title */}
            <motion.h2
              className="font-rubik font-bold text-3xl lg:text-5xl text-crypto-dark text-center mb-16 lg:mb-24 max-w-[741px] mx-auto leading-tight"
              variants={itemVariants}
            >
              Trade securely and market the high growth cryptocurrencies.
            </motion.h2>

            {/* Cryptocurrency Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Bitcoin Card */}
              <motion.div
                className="bg-[#2B076E] rounded-2xl p-8 text-center relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="relative z-10">
                  {/* Bitcoin Icon */}
                  <div className="w-20 h-20 mx-auto mb-8 relative">
                    <motion.svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <circle
                        cx="40"
                        cy="40"
                        r="40"
                        fill="url(#bitcoinGradient)"
                      />
                      <path
                        d="M59.0449 35.0159C59.8261 29.7034 55.7949 26.8284 50.2324 24.9222L52.0449 17.7034L47.6699 16.6097L45.9199 23.6409C44.7636 23.3597 43.5761 23.0784 42.3886 22.8284L44.1386 15.7659L39.7636 14.6722L37.9824 21.8597C37.0136 21.6409 36.0761 21.4222 35.1699 21.2034V21.1722L29.1074 19.6722L27.9511 24.3597C27.9511 24.3597 31.2011 25.1097 31.1386 25.1409C32.9199 25.5784 33.2324 26.7659 33.1699 27.7034L31.1074 35.9222C31.2324 35.9534 31.3886 35.9847 31.5761 36.0784C31.4199 36.0472 31.2636 36.0159 31.1074 35.9534L28.2324 47.4534C28.0136 47.9847 27.4511 48.7972 26.2324 48.4847C26.2636 48.5472 23.0449 47.7034 23.0449 47.7034L20.8574 52.7347L26.5761 54.1722C27.6386 54.4534 28.6699 54.7034 29.7011 54.9847L27.8886 62.2659L32.2636 63.3597L34.0761 56.1409C35.2636 56.4534 36.4511 56.7659 37.5761 57.0472L35.7949 64.2347L40.1699 65.3284L41.9824 58.0472C49.4824 59.4534 55.1074 58.8909 57.4511 52.1097C59.3574 46.6722 57.3574 43.5159 53.4199 41.4534C56.3261 40.7972 58.4824 38.8909 59.0449 35.0159ZM49.0136 49.0784C47.6699 54.5159 38.4824 51.5784 35.5136 50.8284L37.9199 41.1722C40.8886 41.9222 50.4511 43.3909 49.0136 49.0784ZM50.3886 34.9222C49.1386 39.8909 41.5136 37.3597 39.0449 36.7347L41.2324 27.9847C43.7011 28.6097 51.6699 29.7659 50.3886 34.9222Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="bitcoinGradient"
                          x1="40"
                          y1="0"
                          x2="40"
                          y2="80"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F9AA4B" />
                          <stop offset="1" stopColor="#F7931A" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-rubik font-bold text-3xl text-white mb-1">
                      Bitcoin
                    </h3>
                    <span className="font-rubik font-medium text-lg text-white opacity-70">
                      BTC
                    </span>
                  </div>

                  <p className="font-rubik text-base text-white mb-8 leading-7">
                    Digital currency in which a record of transactions is
                    maintained.
                  </p>

                  <motion.button
                    className="inline-flex items-center gap-6 bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl px-6 py-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="font-rubik font-medium text-lg text-white">
                      Start mining
                    </span>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10.5 17C10.3684 17.0008 10.2379 16.9755 10.1161 16.9258C9.99426 16.876 9.88344 16.8027 9.79 16.71C9.69627 16.617 9.62188 16.5064 9.57111 16.3846C9.52034 16.2627 9.4942 16.132 9.4942 16C9.4942 15.868 9.52034 15.7373 9.57111 15.6154C9.62188 15.4936 9.69627 15.383 9.79 15.29L13.1 12L9.92 8.69C9.73375 8.50264 9.62921 8.24919 9.62921 7.985C9.62921 7.72081 9.73375 7.46736 9.92 7.28C10.013 7.18627 10.1236 7.11188 10.2454 7.06111C10.3673 7.01034 10.498 6.9842 10.63 6.9842C10.762 6.9842 10.8927 7.01034 11.0146 7.06111C11.1364 7.11188 11.247 7.18627 11.34 7.28L15.2 11.28C15.3832 11.4669 15.4859 11.7182 15.4859 11.98C15.4859 12.2418 15.3832 12.4931 15.2 12.68L11.2 16.68C11.1102 16.7769 11.0022 16.8551 10.882 16.91C10.7619 16.965 10.632 16.9955 10.5 17Z"
                          fill="#3671E9"
                        />
                      </svg>
                    </div>
                  </motion.button>
                </div>
              </motion.div>

              {/* Ethereum Card */}
              <motion.div
                className="bg-white rounded-2xl p-8 text-center shadow-2xl shadow-gray-500/10"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {/* Ethereum Icon */}
                <div className="w-20 h-20 mx-auto mb-8">
                  <motion.svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    <circle cx="40" cy="40" r="40" fill="#1181E8" />
                    <path
                      d="M39.89 59.9385L25.15552 51.243L39.881 72.0015L54.623 51.243L39.881 59.9385H39.89ZM40.109 24L25.38052 48.4455L40.109 57.156L54.8435 48.4545L40.109 24Z"
                      fill="white"
                    />
                  </motion.svg>
                </div>

                <div className="mb-6">
                  <h3 className="font-rubik font-bold text-3xl text-crypto-dark mb-1">
                    Ethereum
                  </h3>
                  <span className="font-rubik font-medium text-lg text-gray-400">
                    ETH
                  </span>
                </div>

                <p className="font-rubik text-base text-gray-500 mb-8 leading-7">
                  Blockchain technology to create and run decentralized digital
                  applications.
                </p>

                <motion.button
                  className="w-16 h-16 border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-crypto-blue transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="group-hover:scale-110 transition-transform"
                  >
                    <path
                      d="M10.5 17C10.3684 17.0008 10.2379 16.9755 10.1161 16.9258C9.99426 16.876 9.88344 16.8027 9.79 16.71C9.69627 16.617 9.62188 16.5064 9.57111 16.3846C9.52034 16.2627 9.4942 16.132 9.4942 16C9.4942 15.868 9.52034 15.7373 9.57111 15.6154C9.62188 15.4936 9.69627 15.383 9.79 15.29L13.1 12L9.92 8.69C9.73375 8.50264 9.62921 8.24919 9.62921 7.985C9.62921 7.72081 9.73375 7.46736 9.92 7.28C10.013 7.18627 10.1236 7.11188 10.2454 7.06111C10.3673 7.01034 10.498 6.9842 10.63 6.9842C10.762 6.9842 10.8927 7.01034 11.0146 7.06111C11.1364 7.11188 11.247 7.18627 11.34 7.28L15.2 11.28C15.3832 11.4669 15.4859 11.7182 15.4859 11.98C15.4859 12.2418 15.3832 12.4931 15.2 12.68L11.2 16.68C11.1102 16.7769 11.0022 16.8551 10.882 16.91C10.7619 16.965 10.632 16.9955 10.5 17Z"
                      fill="#3671E9"
                    />
                  </svg>
                </motion.button>
              </motion.div>

              {/* Litecoin Card */}
              <motion.div
                className="bg-white rounded-2xl p-8 text-center shadow-2xl shadow-gray-500/10"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {/* Litecoin Icon */}
                <div className="w-20 h-20 mx-auto mb-8">
                  <motion.svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    <circle cx="40" cy="40" r="40" fill="white" />
                    <path
                      d="M40 0C32.0888 0 24.3552 2.34596 17.7772 6.74121C11.1992 11.1365 6.07234 17.3836 3.04484 24.6927C0.0173314 32.0017 -0.774802 40.0444 0.768607 47.8036C2.31202 55.5628 6.12165 62.6902 11.7157 68.2843C17.3098 73.8784 24.4372 77.688 32.1964 79.2314C39.9556 80.7748 47.9983 79.9827 55.3074 76.9552C62.6164 73.9277 68.8635 68.8008 73.2588 62.2228C77.6541 55.6448 80 47.9112 80 40C80 29.3913 75.7857 19.2172 68.2843 11.7157C60.7828 4.21427 50.6087 0 40 0V0ZM39.1267 12.26H47.74C47.9162 12.2602 48.09 12.3012 48.2477 12.3796C48.4055 12.4581 48.543 12.5719 48.6495 12.7123C48.756 12.8527 48.8286 13.0158 48.8616 13.1888C48.8947 13.3619 48.8873 13.5403 48.84 13.71L42.0733 36.77L48.4234 34.83L47.0634 39.4467L40.65 41.3133L36.49 55.36H58.7433C58.9197 55.361 59.0935 55.4027 59.251 55.482C59.4086 55.5613 59.5457 55.6759 59.6515 55.817C59.7574 55.958 59.8292 56.1217 59.8613 56.2951C59.8935 56.4685 59.885 56.647 59.8367 56.8167L57.8967 63.4833C57.8038 63.8005 57.6107 64.079 57.3463 64.2773C57.082 64.4756 56.7605 64.583 56.43 64.5833H22.4433L28.1867 45.1767L21.8334 47.11L23.2333 42.5733L29.6 40.64L37.6734 13.3733C37.7619 13.0545 37.952 12.7733 38.2149 12.5723C38.4778 12.3714 38.7991 12.2617 39.13 12.26H39.1267Z"
                      fill="#59C19C"
                    />
                  </motion.svg>
                </div>

                <div className="mb-6">
                  <h3 className="font-rubik font-bold text-3xl text-crypto-dark mb-1">
                    Litecoin
                  </h3>
                  <span className="font-rubik font-medium text-lg text-gray-400">
                    LTC
                  </span>
                </div>

                <p className="font-rubik text-base text-gray-500 mb-8 leading-7">
                  Cryptocurrency that enables instant payments to anyone in the
                  world.
                </p>

                <motion.button
                  className="w-16 h-16 border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-crypto-blue transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="group-hover:scale-110 transition-transform"
                  >
                    <path
                      d="M10.5 17C10.3684 17.0008 10.2379 16.9755 10.1161 16.9258C9.99426 16.876 9.88344 16.8027 9.79 16.71C9.69627 16.617 9.62188 16.5064 9.57111 16.3846C9.52034 16.2627 9.4942 16.132 9.4942 16C9.4942 15.868 9.52034 15.7373 9.57111 15.6154C9.62188 15.4936 9.69627 15.383 9.79 15.29L13.1 12L9.92 8.69C9.73375 8.50264 9.62921 8.24919 9.62921 7.985C9.62921 7.72081 9.73375 7.46736 9.92 7.28C10.013 7.18627 10.1236 7.11188 10.2454 7.06111C10.3673 7.01034 10.498 6.9842 10.63 6.9842C10.762 6.9842 10.8927 7.01034 11.0146 7.06111C11.1364 7.11188 11.247 7.18627 11.34 7.28L15.2 11.28C15.3832 11.4669 15.4859 11.7182 15.4859 11.98C15.4859 12.2418 15.3832 12.4931 15.2 12.68L11.2 16.68C11.1102 16.7769 11.0022 16.8551 10.882 16.91C10.7619 16.965 10.632 16.9955 10.5 17Z"
                      fill="#3671E9"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Market Sentiments & Features Section */}
      <motion.section
        className="relative py-16 lg:py-24 overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #2B076E, #220559)" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white bg-opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white bg-opacity-5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] relative z-10">
          {/* Section Title */}
          <motion.h2
            className="font-rubik font-bold text-3xl lg:text-5xl text-white text-center mb-16 lg:mb-24 max-w-[758px] mx-auto leading-tight"
            variants={itemVariants}
          >
            Market sentiments, portfolio, and run the infrastructure of your
            choice
          </motion.h2>

          {/* Invest Smart & Detailed Statistics */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-24">
            {/* Invest Smart Section */}
            <motion.div className="space-y-8" variants={slideInLeft}>
              <div className="space-y-6">
                <h3 className="font-rubik font-bold text-2xl lg:text-3xl text-white">
                  Invest Smart
                </h3>
                <p className="font-rubik text-base text-gray-300 leading-7 max-w-[408px]">
                  Get full statistic information about the behaviour of buyers
                  and sellers will help you to make the decision.
                </p>
                <motion.button
                  className="inline-flex items-center gap-4 bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-rubik font-medium text-lg text-white">
                    Learn More
                  </span>
                </motion.button>
              </div>

              {/* Chart Visualization */}
              <div
                className="relative rounded-2xl p-6 lg:p-8"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(43, 7, 110, 0.9), rgba(34, 5, 89, 0.7))",
                }}
              >
                {/* Bitcoin Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">₿</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-inter font-bold text-xl text-white">
                        Bitcoin
                      </span>
                      <span className="font-inter text-sm text-gray-400">
                        BTC
                      </span>
                    </div>
                    <span className="font-inter text-sm text-gray-300">
                      0.00080 BTC
                    </span>
                  </div>
                  <div className="ml-auto text-right">
                    <span className="font-inter font-medium text-sm text-cyan-400">
                      +125%
                    </span>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="relative h-32 mb-6">
                  <svg className="w-full h-full" viewBox="0 0 400 120">
                    <defs>
                      <linearGradient
                        id="chartGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#6EDCB5"
                          stopOpacity="0.4"
                        />
                        <stop
                          offset="100%"
                          stopColor="#6EDCB5"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,80 Q50,70 100,60 T200,50 T300,45 T400,40"
                      stroke="#6EDCB5"
                      strokeWidth="3"
                      fill="none"
                    />
                    <path
                      d="M0,80 Q50,70 100,60 T200,50 T300,45 T400,40 L400,120 L0,120 Z"
                      fill="url(#chartGradient)"
                    />
                  </svg>
                </div>

                {/* Trading Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    className="rounded-xl p-4"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(62, 10, 140, 0.6), rgba(43, 7, 110, 0.4))",
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-inter font-semibold text-lg text-white mb-2">
                      Increase in Trade
                    </h4>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-inter font-bold text-xl text-white">
                        +75%
                      </span>
                      <svg width="16" height="16" className="text-red-400">
                        <path
                          d="M8 2L14 8H10V14H6V8H2L8 2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <span className="font-inter text-sm text-gray-300">
                      Sell option
                    </span>
                  </motion.div>

                  <motion.div
                    className="rounded-xl p-4"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(62, 10, 140, 0.6), rgba(43, 7, 110, 0.4))",
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-center">
                      <span className="font-inter font-bold text-xl text-white">
                        $15.32
                      </span>
                      <p className="font-inter text-sm text-gray-300 mt-1">
                        Price in dollar
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Detailed Statistics Section */}
            <motion.div className="space-y-8" variants={slideInRight}>
              <div className="space-y-6">
                <h3 className="font-rubik font-bold text-2xl lg:text-3xl text-white">
                  Detailed Statistics
                </h3>
                <p className="font-rubik text-base text-gray-300 leading-7 max-w-[408px]">
                  View all mining related information in realtime, at any point
                  at any location and decide which polls you want to mine in.
                </p>
                <motion.button
                  className="inline-flex items-center gap-4 bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-rubik font-medium text-lg text-white">
                    Learn More
                  </span>
                </motion.button>
              </div>

              {/* Trading Interface */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(43, 7, 110, 0.9), rgba(34, 5, 89, 0.7))",
                }}
              >
                {/* Header */}
                <div
                  className="px-6 py-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62, 10, 140, 0.8), rgba(43, 7, 110, 0.9))",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <svg width="16" height="16" className="text-cyan-400">
                          <circle cx="8" cy="8" r="6" fill="currentColor" />
                        </svg>
                        <span className="font-rubik font-medium text-sm text-cyan-400">
                          +7.3% (+$146)
                        </span>
                      </div>
                      <span className="font-rubik text-sm text-gray-400">
                        Trends
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                      <div>
                        <div className="font-rubik font-medium text-sm text-white">
                          Andriy Lenin
                        </div>
                        <div className="font-rubik text-xs text-green-400">
                          VERIFIED
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="font-rubik font-medium text-sm text-white">
                        $8256.00
                      </div>
                      <div className="font-rubik text-xs text-gray-400">
                        Total amount
                      </div>
                    </div>
                    <div>
                      <div className="font-rubik font-medium text-sm text-white">
                        $51234.31
                      </div>
                      <div className="font-rubik text-xs text-gray-400">
                        High
                      </div>
                    </div>
                    <div>
                      <div className="font-rubik font-medium text-sm text-white">
                        $1531.80
                      </div>
                      <div className="font-rubik text-xs text-gray-400">
                        Low
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trading Area */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-rubik font-bold text-sm text-white">
                        USD/BTC
                      </span>
                      <svg width="16" height="16" className="text-white">
                        <path
                          d="M8 2L14 8H10V14H6V8H2L8 2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">
                        Buy
                      </button>
                      <button className="px-3 py-1 bg-red-500 text-white text-xs rounded-full">
                        Sell
                      </button>
                    </div>
                  </div>

                  {/* Chart */}
                  <div
                    className="h-40 rounded-lg mb-4 flex items-end justify-center gap-1 p-4"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(79, 13, 153, 0.4), rgba(43, 7, 110, 0.2))",
                    }}
                  >
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 rounded-t ${Math.random() > 0.5 ? "bg-green-400" : "bg-red-400"}`}
                        style={{ height: `${Math.random() * 80 + 20}%` }}
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-6 gap-2 text-center text-xs text-gray-400">
                    {["May", "Jun", "Jul", "Aug", "Sep", "Oct"].map((month) => (
                      <span key={month}>{month}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Grow your profit section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Content */}
            <motion.div className="space-y-8" variants={slideInLeft}>
              <div className="space-y-6">
                <h3 className="font-rubik font-bold text-2xl lg:text-3xl text-white">
                  Grow your profit and track your investments
                </h3>
                <p className="font-rubik text-base text-gray-300 leading-7 max-w-[408px]">
                  Use advanced analytical tools. Clear TradingView charts let
                  you track current and historical profit investments.
                </p>
                <motion.button
                  className="inline-flex items-center gap-4 bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-rubik font-medium text-lg text-white">
                    Learn More
                  </span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content - Crypto Table */}
            <motion.div className="space-y-4" variants={slideInRight}>
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 px-4 py-2 text-sm font-inter font-semibold text-white">
                <span>Asset</span>
                <span>Price</span>
                <span>Change</span>
                <span className="hidden md:block">Volume (24h)</span>
              </div>

              {/* Table Rows */}
              <div className="space-y-2">
                {/* Bitcoin Row */}
                <motion.div
                  className="rounded-xl p-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(43, 7, 110, 0.8), rgba(34, 5, 89, 0.6))",
                  }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">₿</span>
                      </div>
                      <div>
                        <div className="font-inter font-bold text-white">
                          BTC
                        </div>
                        <div className="font-inter text-sm text-gray-300">
                          Bitcoin
                        </div>
                      </div>
                    </div>
                    <div className="font-inter text-white">$6750</div>
                    <div className="flex items-center gap-1">
                      <svg width="16" height="16" className="text-green-400">
                        <circle
                          cx="8"
                          cy="8"
                          r="8"
                          fill="currentColor"
                          fillOpacity="0.1"
                        />
                        <path
                          d="M8 4L12 8H9V12H7V8H4L8 4Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="font-inter text-green-400">+7.3%</span>
                    </div>
                    <div className="hidden md:block font-inter text-gray-300">
                      $3420214
                    </div>
                  </div>
                </motion.div>

                {/* Ethereum Row - Featured */}
                <motion.div
                  className="rounded-xl p-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62, 10, 140, 0.9), rgba(43, 7, 110, 0.7))",
                    border: "1px solid rgba(79, 13, 153, 0.5)",
                  }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">Ξ</span>
                      </div>
                      <div>
                        <div className="font-inter font-bold text-white">
                          ETH
                        </div>
                        <div className="font-inter text-sm text-gray-300">
                          Ethereum
                        </div>
                      </div>
                    </div>
                    <div className="font-inter text-white">$156.83</div>
                    <div className="flex items-center gap-1">
                      <svg width="16" height="16" className="text-red-400">
                        <circle
                          cx="8"
                          cy="8"
                          r="8"
                          fill="currentColor"
                          fillOpacity="0.1"
                        />
                        <path
                          d="M8 12L4 8H7V4H9V8H12L8 12Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="font-inter text-red-400">-0.9%</span>
                    </div>
                    <div className="hidden md:block font-inter text-gray-300">
                      $1812350
                    </div>
                  </div>
                </motion.div>

                {/* Litecoin Row */}
                <motion.div
                  className="rounded-xl p-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(43, 7, 110, 0.8), rgba(34, 5, 89, 0.6))",
                  }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">Ł</span>
                      </div>
                      <div>
                        <div className="font-inter font-bold text-white">
                          LTC
                        </div>
                        <div className="font-inter text-sm text-gray-300">
                          Litecoin
                        </div>
                      </div>
                    </div>
                    <div className="font-inter text-white">$8535</div>
                    <div className="flex items-center gap-1">
                      <svg width="16" height="16" className="text-green-400">
                        <circle
                          cx="8"
                          cy="8"
                          r="8"
                          fill="currentColor"
                          fillOpacity="0.1"
                        />
                        <path
                          d="M8 4L12 8H9V12H7V8H4L8 4Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="font-inter text-green-400">+8.2%</span>
                    </div>
                    <div className="hidden md:block font-inter text-gray-300">
                      $5820399
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
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
        <div className="absolute inset-0 overflow-hidden">
          {/* Diagonal light streaks */}
          <motion.div
            className="absolute w-[200px] h-[1000px] opacity-30"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 40.77%, rgba(255, 255, 255, 0.30) 186.22%)",
              transform: "rotate(-45deg)",
              left: "395px",
              top: "-85px",
            }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 0.3, x: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="absolute w-[200px] h-[1000px] opacity-30"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 40.77%, rgba(255, 255, 255, 0.30) 186.22%)",
              transform: "rotate(-45deg)",
              left: "35px",
              top: "-17px",
            }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 0.3, x: 0 }}
            transition={{ delay: 0.7, duration: 1.5 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] relative z-10">
          <motion.div
            className="max-w-[1200px] mx-auto relative rounded-2xl overflow-hidden"
            style={{ backgroundColor: "#3671E9" }}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background crypto icons */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Bitcoin icon background */}
              <motion.div
                className="absolute opacity-10"
                style={{ right: "85px", top: "48px" }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <svg width="185" height="185" viewBox="0 0 185 185" fill="none">
                  <path
                    d="M161.65 90.394C164.5 70.967 149.76 60.453 129.42 53.483L136.05 27.0848L120.05 23.0851L113.65 48.797C109.42 47.769 105.08 46.74 100.74 45.826L107.14 19.9997L91.14 16L84.62 42.284C81.08 41.484 77.65 40.684 74.34 39.884V39.769L52.17 34.2842L47.94 51.426C47.94 51.426 59.83 54.168 59.6 54.282C66.11 55.882 67.25 60.225 67.02 63.653L59.48 93.708C59.94 93.822 60.51 93.936 61.2 94.279C60.63 94.165 60.05 94.051 59.48 93.822L48.97 135.876C48.17 137.818 46.11 140.79 41.66 139.647C41.77 139.875 30 136.79 30 136.79L22 155.188L42.91 160.445C46.8 161.474 50.57 162.388 54.34 163.416L47.71 190.043L63.71 194.042L70.34 167.644C74.68 168.787 79.02 169.93 83.14 170.958L76.62 197.242L92.62 201.242L99.25 174.615C126.68 179.758 147.25 177.701 155.82 152.903C162.79 133.019 155.47 121.477 141.08 113.935C151.7 111.535 159.59 104.564 161.65 90.394ZM124.96 141.818C120.05 161.702 86.45 150.96 75.6 148.217L84.39 112.906C95.25 115.649 130.22 121.02 124.96 141.818ZM129.99 90.051C125.42 108.221 97.54 98.964 88.51 96.679L96.51 64.682C105.54 66.967 134.68 71.195 129.99 90.051Z"
                    fill="white"
                    fillOpacity="0.16"
                  />
                </svg>
              </motion.div>

              {/* Ethereum icon background */}
              <motion.div
                className="absolute opacity-10"
                style={{ left: "102px", top: "-38px" }}
                animate={{ y: [-20, 20, -20] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg width="181" height="259" viewBox="0 0 181 259" fill="none">
                  <path
                    d="M101.41 155.686L22 108.823L101.361 220.698L180.812 108.823L101.361 155.686H101.41ZM102.59 -38L23.2126 93.7462L102.59 140.69L182 93.7946L102.59 -38Z"
                    fill="white"
                    fillOpacity="0.16"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Content */}
                <motion.div className="space-y-6" variants={slideInLeft}>
                  <motion.h2
                    className="font-rubik font-bold text-2xl lg:text-4xl text-white"
                    variants={itemVariants}
                  >
                    Start mining now
                  </motion.h2>
                  <motion.p
                    className="font-rubik text-base text-white leading-7 max-w-[348px]"
                    variants={itemVariants}
                  >
                    Join now with CRAPPO to get the latest news and start mining
                    now
                  </motion.p>
                </motion.div>

                {/* Right Content - Email Subscription */}
                <motion.div
                  className="px-4 sm:px-6 md:px-0 space-y-6"
                  variants={slideInRight}
                >
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-end w-full max-w-lg mx-auto">
                    {/* Email Input */}
                    <div className="flex-1 min-w-0">
                      <motion.div className="relative" variants={itemVariants}>
                        <label htmlFor="newsletter-email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="newsletter-email"
                          type="email"
                          placeholder="Enter your email"
                          className="w-full bg-transparent text-white placeholder-white font-rubik text-sm sm:text-base focus:outline-none border-b border-white/40 py-2"
                        />
                      </motion.div>
                    </div>

                    {/* Subscribe Button */}
                    <motion.button
                      type="submit"
                      className="bg-white hover:bg-gray-100 transition-colors rounded-3xl px-5 sm:px-6 py-2.5 sm:py-3 font-rubik font-medium text-sm sm:text-base text-crypto-dark min-w-[120px] sm:min-w-[152px]"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Subscribe
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        pulseAnimation={pulseAnimation}
      />
    </div>
  );
}
