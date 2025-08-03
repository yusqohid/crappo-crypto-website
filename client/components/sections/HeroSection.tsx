import { motion } from "framer-motion";
import {
  slideInLeft,
  slideInRight,
  floatingAnimation,
} from "../../lib/animations";

export default function HeroSection() {
  return (
    <section className="relative max-w-[1440px] mx-auto px-6 lg:px-[120px] pb-[60px] overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Radial Gradient Blurs */}
        <motion.div
          className="absolute top-20 left-10 w-[400px] h-[400px] bg-crypto-blue/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-40 right-20 w-[300px] h-[300px] bg-blue-400/15 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[500px] h-[200px] bg-gradient-to-r from-crypto-blue/10 to-purple-400/10 rounded-full blur-[80px]"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
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

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-32 left-1/4 w-20 h-20 border border-crypto-blue/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute top-60 right-1/3 w-12 h-12 bg-gradient-to-br from-crypto-blue/10 to-transparent rounded-lg rotate-45"
          animate={{
            rotate: [45, 225, 45],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-40 left-20 w-16 h-16 border-2 border-white/10 rotate-12"
          animate={{
            rotate: [12, 192, 12],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated Light Rays */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-40 bg-gradient-to-b from-crypto-blue/30 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute bottom-0 right-1/4 w-[2px] h-32 bg-gradient-to-t from-blue-400/20 to-transparent"
          animate={{
            opacity: [0, 0.8, 0],
            scaleY: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Particle Effects */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-crypto-blue/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Constellation Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <motion.linearGradient
              id="constellationGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
              animate={{
                x2: ["100%", "0%", "100%"],
                y2: ["100%", "0%", "100%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <stop offset="0%" stopColor="#3671E9" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3671E9" stopOpacity="0.1" />
            </motion.linearGradient>
          </defs>

          <motion.path
            d="M100,200 Q300,100 500,300 T900,200"
            stroke="url(#constellationGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
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
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </svg>

        {/* Corner Accent Lights */}
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-crypto-blue/20 to-transparent rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-400/15 to-transparent rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-6 lg:space-y-8 order-last lg:order-first"
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
            className="relative inline-flex items-center gap-6 bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl px-6 py-4 lg:px-8 lg:py-6 group overflow-hidden"
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
              className="w-full h-full object-contain relative z-10"
              animate={floatingAnimation}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            {/* Illustration Background Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-crypto-blue/20 via-transparent to-blue-400/20 rounded-full blur-3xl"
              animate={{
                scale: [0.8, 1.1, 0.8],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Enhanced Floating elements around illustration */}
            <motion.div
              className="absolute top-20 right-10 w-4 h-4 bg-crypto-blue rounded-full opacity-60 shadow-lg shadow-crypto-blue/50"
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 left-10 w-6 h-6 bg-white bg-opacity-20 rounded-full shadow-lg shadow-white/20"
              animate={{
                y: [20, -20, 20],
                x: [10, -10, 10],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Additional Floating Crypto Icons */}
            <motion.div
              className="absolute top-32 left-8 w-8 h-8 bg-gradient-to-br from-yellow-400/80 to-orange-500/80 rounded-full"
              animate={{
                y: [-15, 15, -15],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-32 right-8 w-6 h-6 bg-gradient-to-br from-purple-400/80 to-pink-500/80 rounded-lg rotate-45"
              animate={{
                y: [10, -10, 10],
                x: [-5, 5, -5],
                rotate: [45, 225, 45],
              }}
              transition={{
                duration: 8,
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
