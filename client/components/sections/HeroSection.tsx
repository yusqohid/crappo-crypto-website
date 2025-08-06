import React, { memo } from "react";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "../../lib/animations";

const HeroSection = memo(() => {
  return (
    <section className="relative max-w-[1440px] mx-auto px-6 lg:px-[120px] pb-[60px] overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Optimized Background Blurs - Reduced complexity */}
        <motion.div
          className="absolute top-20 left-5 lg:left-10 w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[300px] lg:h-[400px] bg-crypto-blue/20 rounded-full blur-[60px] md:blur-[80px] lg:blur-[120px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
        />

        <motion.div
          className="absolute top-40 right-5 lg:right-20 w-[150px] md:w-[200px] lg:w-[300px] h-[150px] md:h-[200px] lg:h-[300px] bg-blue-400/15 rounded-full blur-[50px] md:blur-[70px] lg:blur-[100px]"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{
            duration: 2.5,
            delay: 0.3,
            ease: "easeOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[300px] md:w-[400px] lg:w-[500px] h-[100px] md:h-[150px] lg:h-[200px] bg-gradient-to-r from-crypto-blue/10 to-purple-400/10 rounded-full blur-[40px] md:blur-[60px] lg:blur-[80px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{
            duration: 3,
            delay: 0.6,
            ease: "easeOut",
          }}
        />

        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Simplified Geometric Shapes - Static for performance */}
        <motion.div
          className="absolute top-32 left-1/4 w-20 h-20 border border-crypto-blue/20 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "easeOut",
          }}
        />

        <motion.div
          className="absolute top-60 right-1/3 w-12 h-12 bg-gradient-to-br from-crypto-blue/10 to-transparent rounded-lg rotate-45"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 45 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: "easeOut",
          }}
        />

        <motion.div
          className="absolute bottom-40 left-20 w-16 h-16 border-2 border-white/10 rotate-12"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 12 }}
          transition={{
            duration: 0.6,
            delay: 1.4,
            ease: "easeOut",
          }}
        />

        {/* Simplified Light Effects - Static for better performance */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-40 bg-gradient-to-b from-crypto-blue/30 to-transparent"
          initial={{ opacity: 0, scaleY: 0.5 }}
          animate={{ opacity: 0.6, scaleY: 1 }}
          transition={{
            duration: 1.5,
            delay: 2,
            ease: "easeOut",
          }}
        />

        <motion.div
          className="absolute bottom-0 right-1/4 w-[2px] h-32 bg-gradient-to-t from-blue-400/20 to-transparent"
          initial={{ opacity: 0, scaleY: 0.3 }}
          animate={{ opacity: 0.4, scaleY: 1 }}
          transition={{
            duration: 1.2,
            delay: 2.5,
            ease: "easeOut",
          }}
        />

        {/* Minimal Particle Effects - Only 3 particles for performance */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-crypto-blue/40 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 3 + i * 0.3,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Simplified Constellation Lines - Static for performance */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="constellationGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3671E9" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3671E9" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <motion.path
            d="M100,200 Q300,100 500,300 T900,200"
            stroke="url(#constellationGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 2,
              delay: 2,
              ease: "easeOut",
            }}
          />

          <motion.path
            d="M200,400 Q400,200 600,450 T1000,350"
            stroke="url(#constellationGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{
              duration: 2.5,
              delay: 2.5,
              ease: "easeOut",
            }}
          />
        </svg>

        {/* Simplified Corner Accent Lights - Static */}
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-crypto-blue/20 to-transparent rounded-full blur-xl"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 3,
            ease: "easeOut",
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-400/15 to-transparent rounded-full blur-xl"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{
            duration: 2,
            delay: 3.5,
            ease: "easeOut",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-6 lg:space-y-8 order-last lg:order-first px-2 sm:px-0"
          initial="hidden"
          animate="visible"
          variants={slideInLeft}
        >
          {/* ...existing code... */}
          {/* Promotional Badge */}
          <motion.div
            className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 max-w-fit mx-auto sm:mx-0 border border-white/20"
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
            className="font-rubik font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] lg:leading-[76px] text-white text-center sm:text-left"
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
            className="font-rubik text-sm sm:text-base lg:text-lg text-crypto-grey leading-6 lg:leading-7 max-w-[435px] text-center sm:text-left mx-auto sm:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center sm:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <motion.button
              className="relative inline-flex items-center gap-4 lg:gap-6 bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl px-6 py-3 lg:px-8 lg:py-6 group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(54, 113, 233, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              <span className="relative font-rubik font-medium text-lg text-white z-10">
                Try for FREE
              </span>
              <motion.div
                className="relative w-8 h-8 bg-white rounded-full flex items-center justify-center z-10"
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
        </motion.div>

        {/* Right Content - Illustration */}
        <motion.div
          className="relative flex justify-center lg:justify-end order-first lg:order-last px-4 sm:px-0"
          initial="hidden"
          animate="visible"
          variants={slideInRight}
        >
          <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[604px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[585px] mx-auto lg:mx-0">
            {/* Main Illustration */}
            <motion.img
              src="/image/hero-image.png"
              alt="Crypto trading platform illustration"
              className="w-full h-full object-contain relative z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            />

            {/* Illustration Background Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-crypto-blue/20 via-transparent to-blue-400/20 rounded-full blur-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.8,
                ease: "easeOut",
              }}
            />

            {/* Optimized Floating elements - Reduced animations for performance */}
            <motion.div
              className="absolute top-20 right-10 w-4 h-4 bg-crypto-blue rounded-full opacity-60"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 0.6,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: "easeOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 left-10 w-6 h-6 bg-white bg-opacity-20 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 0.2,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 1.4,
                ease: "easeOut",
              }}
            />

            {/* Simple Crypto Icons - Static for better performance */}
            <motion.div
              className="absolute top-32 left-8 w-8 h-8 bg-gradient-to-br from-yellow-400/80 to-orange-500/80 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 1.6,
                ease: "easeOut",
              }}
            />

            <motion.div
              className="absolute bottom-32 right-8 w-6 h-6 bg-gradient-to-br from-purple-400/80 to-pink-500/80 rounded-lg rotate-45"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 0.8, rotate: 45 }}
              transition={{
                duration: 0.6,
                delay: 1.8,
                ease: "easeOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
