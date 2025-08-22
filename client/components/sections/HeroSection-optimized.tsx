import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import {
  optimizedSlideInLeft,
  optimizedSlideInRight,
  optimizedFadeIn,
  optimizedScaleIn,
  optimizedButtonHover,
  optimizedButtonTap,
  gpuOptimizedStyles,
  transitionPresets,
} from "../../lib/optimizedAnimations";

const HeroSectionOptimized = memo(() => {
  // Memoize heavy calculations
  const backgroundElements = useMemo(
    () => (
      <>
        {/* Reduced Background Blurs - Only 2 instead of 3 */}
        <motion.div
          className="absolute top-20 left-5 lg:left-10 w-[200px] md:w-[300px] lg:w-[350px] h-[200px] md:h-[300px] lg:h-[350px] bg-crypto-blue/15 rounded-full"
          style={{
            ...gpuOptimizedStyles,
            filter: "blur(80px)",
          }}
          variants={optimizedFadeIn}
          initial="hidden"
          animate="visible"
        />

        <motion.div
          className="absolute top-40 right-5 lg:right-20 w-[150px] md:w-[200px] lg:w-[250px] h-[150px] md:h-[200px] lg:h-[250px] bg-blue-400/10 rounded-full"
          style={{
            ...gpuOptimizedStyles,
            filter: "blur(60px)",
          }}
          variants={optimizedFadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        />

        {/* Simplified Grid Pattern - CSS only, no animations */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Minimal Geometric Shapes - Only 2 instead of multiple */}
        <motion.div
          className="absolute top-32 left-1/4 w-16 h-16 border border-crypto-blue/15 rounded-full"
          style={gpuOptimizedStyles}
          variants={optimizedScaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        />

        <motion.div
          className="absolute top-60 right-1/3 w-10 h-10 bg-gradient-to-br from-crypto-blue/8 to-transparent rounded-lg"
          style={{
            ...gpuOptimizedStyles,
            transform: "rotate(45deg)",
          }}
          variants={optimizedScaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        />
      </>
    ),
    [],
  );

  const ctaButton = useMemo(
    () => (
      <motion.button
        className="relative inline-flex items-center gap-4 lg:gap-6 bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl px-6 py-3 lg:px-8 lg:py-6 group overflow-hidden"
        style={gpuOptimizedStyles}
        variants={optimizedScaleIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.8 }}
        whileHover={optimizedButtonHover}
        whileTap={optimizedButtonTap}
      >
        {/* Simplified Button Glow - CSS only */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <span className="relative font-rubik font-medium text-lg text-white z-10">
          Try for FREE
        </span>
        <motion.div
          className="relative w-8 h-8 bg-white rounded-full flex items-center justify-center z-10"
          whileHover={{ rotate: 15 }}
          transition={transitionPresets.fast}
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
    ),
    [],
  );

  return (
    <section className="relative max-w-[1440px] mx-auto px-6 lg:px-[120px] pb-[60px] overflow-hidden">
      {/* Optimized Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundElements}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-6 lg:space-y-8 order-last lg:order-first px-2 sm:px-0"
          style={gpuOptimizedStyles}
          variants={optimizedSlideInLeft}
          initial="hidden"
          animate="visible"
        >
          {/* Simplified Promotional Badge */}
          <motion.div
            className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 max-w-fit mx-auto sm:mx-0 border border-white/20"
            style={gpuOptimizedStyles}
            variants={optimizedScaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Badge Section - Removed complex pulsing animation */}
            <div className="bg-white rounded-full px-3 py-1 shadow-md">
              <span className="font-rubik font-semibold text-sm sm:text-base text-crypto-dark tracking-wide uppercase">
                75% OFF
              </span>
            </div>

            <span className="mx-3 font-rubik text-sm sm:text-base text-white whitespace-nowrap">
              Black Friday Weekend Deal
            </span>
          </motion.div>

          {/* Optimized Main Heading */}
          <motion.h1
            className="font-rubik font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] lg:leading-[76px] text-white text-center sm:text-left"
            style={gpuOptimizedStyles}
            variants={optimizedFadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <span>Fastest & secure</span>
            <br />
            <span>platform to invest</span>
            <br />
            <span className="bg-gradient-to-r from-crypto-blue to-blue-400 bg-clip-text text-transparent">
              in crypto
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="font-rubik text-sm sm:text-base lg:text-lg text-crypto-grey leading-6 lg:leading-7 max-w-[435px] text-center sm:text-left mx-auto sm:mx-0"
            style={gpuOptimizedStyles}
            variants={optimizedFadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center sm:justify-start"
            variants={optimizedFadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            {ctaButton}
          </motion.div>
        </motion.div>

        {/* Right Content - Optimized Illustration */}
        <motion.div
          className="relative flex justify-center lg:justify-end order-first lg:order-last px-4 sm:px-0"
          style={gpuOptimizedStyles}
          variants={optimizedSlideInRight}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[604px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[585px] mx-auto lg:mx-0">
            {/* Main Illustration */}
            <motion.img
              src="/image/hero-image.png"
              alt="Crypto trading platform illustration"
              className="w-full h-full object-contain relative z-10"
              style={gpuOptimizedStyles}
              variants={optimizedScaleIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              whileHover={{
                scale: 1.01,
                transition: transitionPresets.fast,
              }}
            />

            {/* Simplified Background Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-crypto-blue/15 via-transparent to-blue-400/15 rounded-full"
              style={{
                ...gpuOptimizedStyles,
                filter: "blur(40px)",
              }}
              variants={optimizedFadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            />

            {/* Minimal Floating Elements - Only 2 instead of multiple */}
            <motion.div
              className="absolute top-20 right-10 w-3 h-3 bg-crypto-blue rounded-full opacity-60"
              style={gpuOptimizedStyles}
              variants={optimizedScaleIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
            />
            <motion.div
              className="absolute bottom-20 left-10 w-4 h-4 bg-white bg-opacity-15 rounded-full"
              style={gpuOptimizedStyles}
              variants={optimizedScaleIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
            />

            {/* Simplified Crypto Icons - Static, no complex animations */}
            <motion.div
              className="absolute top-32 left-8 w-6 h-6 bg-gradient-to-br from-yellow-400/60 to-orange-500/60 rounded-full"
              style={gpuOptimizedStyles}
              variants={optimizedScaleIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.4 }}
            />

            <motion.div
              className="absolute bottom-32 right-8 w-5 h-5 bg-gradient-to-br from-purple-400/60 to-pink-500/60 rounded-lg"
              style={{
                ...gpuOptimizedStyles,
                transform: "rotate(45deg)",
              }}
              variants={optimizedScaleIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.6 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
});

HeroSectionOptimized.displayName = "HeroSectionOptimized";

export default HeroSectionOptimized;
