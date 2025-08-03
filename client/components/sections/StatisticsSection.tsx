import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  slideInLeft,
  slideInRight,
  floatingAnimation,
} from "../../lib/animations";

const statisticsData = [
  {
    id: "grid1",
    icon: (
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
    ),
    gradient: "from-crypto-blue to-blue-600",
    shadowColor: "rgba(54, 113, 233, 0.3)",
    shadowColorHover: "rgba(54, 113, 233, 0.5)",
    value: "$30B+",
    label: "Digital Currency Exchanged",
    progressWidth: "85%",
    progressGradient: "from-crypto-blue to-blue-400",
    growthLabel: "85% Growth YoY",
    delay: 0.3,
    animationDelay: 0,
  },
  {
    id: "grid2",
    icon: (
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
        <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-600",
    shadowColor: "rgba(16, 185, 129, 0.3)",
    shadowColorHover: "rgba(16, 185, 129, 0.5)",
    value: "10M+",
    label: "Trusted Wallets Investor",
    progressWidth: "92%",
    progressGradient: "from-emerald-500 to-teal-400",
    growthLabel: "92% Active Users",
    delay: 0.5,
    animationDelay: 1,
  },
  {
    id: "grid3",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
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
    ),
    gradient: "from-purple-500 to-indigo-600",
    shadowColor: "rgba(147, 51, 234, 0.3)",
    shadowColorHover: "rgba(147, 51, 234, 0.5)",
    value: "195+",
    label: "Countries Supported",
    progressWidth: "78%",
    progressGradient: "from-purple-500 to-indigo-400",
    growthLabel: "78% Global Coverage",
    delay: 0.7,
    animationDelay: 2,
  },
];

interface StatCardProps {
  stat: (typeof statisticsData)[0];
  index: number;
}

function StatCard({ stat, index }: StatCardProps) {
  const getPattern = (id: string) => {
    if (id === "grid2") {
      return (
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id={id} width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="1" fill="currentColor" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill={`url(#${id})`} />
        </svg>
      );
    }

    return (
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <defs>
          <pattern id={id} width="10" height="10" patternUnits="userSpaceOnUse">
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill={`url(#${id})`} />
      </svg>
    );
  };

  return (
    <motion.div
      className="relative group"
      variants={itemVariants}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">{getPattern(stat.id)}</div>

        <div className="relative z-10">
          {/* Icon Container */}
          <motion.div
            className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
            animate={{
              boxShadow: [
                `0 4px 20px ${stat.shadowColor}`,
                `0 8px 30px ${stat.shadowColorHover}`,
                `0 4px 20px ${stat.shadowColor}`,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: stat.animationDelay,
            }}
          >
            {stat.icon}
          </motion.div>

          {/* Counter Animation */}
          <motion.h3
            className="font-rubik font-bold text-4xl lg:text-5xl text-white mb-3"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: stat.delay,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: stat.delay + 0.2, duration: 1 }}
              viewport={{ once: true }}
            >
              {stat.value}
            </motion.span>
          </motion.h3>

          <p className="font-rubik text-base text-crypto-grey mb-4">
            {stat.label}
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-white/10 rounded-full h-2 mb-2">
            <motion.div
              className={`bg-gradient-to-r ${stat.progressGradient} h-2 rounded-full`}
              initial={{ width: 0 }}
              whileInView={{ width: stat.progressWidth }}
              transition={{ delay: stat.delay + 0.5, duration: 1.5 }}
              viewport={{ once: true }}
            />
          </div>
          <span className="text-xs text-crypto-grey">{stat.growthLabel}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function StatisticsSection() {
  return (
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
            Join our growing community of investors and traders from around the
            globe
          </motion.p>
        </motion.div>

        {/* Enhanced Statistics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20 lg:mb-32"
          variants={containerVariants}
        >
          {statisticsData.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
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
  );
}
