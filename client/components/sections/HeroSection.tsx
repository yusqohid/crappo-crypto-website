import { motion } from "framer-motion";
import {
  slideInLeft,
  slideInRight,
  floatingAnimation,
} from "../../lib/animations";

export default function HeroSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-[120px] pb-[60px]">
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
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
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
              alt="Crypto trading platform illustration"
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
              />
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
    </section>
  );
}
