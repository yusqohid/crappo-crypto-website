import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../lib/animations";

// Simplified animation variants for better mobile performance
const mobileOptimizedVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Mobile-optimized viewport settings
const mobileViewport = {
  once: true,
  amount: 0.1, // Trigger when 10% is visible (more sensitive for mobile)
  margin: "-100px 0px", // Start animation earlier
};

const cryptoData = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    description:
      "Digital currency in which a record of transactions is maintained.",
    hasButton: true,
    buttonText: "Start mining",
    icon: (
      <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
        <div className="text-white font-bold text-2xl">₿</div>
      </div>
    ),
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    description:
      "Blockchain technology to create and run decentralized digital applications.",
    hasButton: false,
    icon: (
      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
        <div className="text-white font-bold text-2xl">Ξ</div>
      </div>
    ),
  },
  {
    id: "litecoin",
    name: "Litecoin",
    symbol: "LTC",
    description:
      "Cryptocurrency that enables instant payments to anyone in the world.",
    hasButton: false,
    icon: (
      <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
        <div className="text-white font-bold text-2xl">Ł</div>
      </div>
    ),
  },
];

const calculatorData = {
  revenueEth: "0.055 130 59 ETH",
  revenueUsd: "$1,275.00",
  description:
    "Revenue will change based on mining difficulty and Ethereum price.",
  timeframes: [
    { period: "7 Days", amount: "$8,925.00" },
    { period: "30 Days", amount: "$38,250.00" },
    { period: "365 Days", amount: "$465,375.00" },
  ],
};

interface CryptoCardProps {
  crypto: (typeof cryptoData)[0];
}

function CryptoCard({ crypto }: CryptoCardProps) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={mobileViewport}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      {/* Crypto Icon */}
      <div className="w-20 h-20 mx-auto mb-8 relative">{crypto.icon}</div>

      <div className="mb-6">
        <h3 className="font-rubik font-bold text-3xl text-white mb-1">
          {crypto.name}
        </h3>
        <span className="font-rubik font-medium text-lg text-crypto-grey">
          {crypto.symbol}
        </span>
      </div>

      <p className="font-rubik text-base text-crypto-grey mb-8 leading-7">
        {crypto.description}
      </p>

      {crypto.hasButton ? (
        <motion.button
          className="inline-flex items-center gap-4 bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl px-6 py-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="font-rubik font-medium text-lg text-white">
            {crypto.buttonText}
          </span>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M10.5 17C10.3684 17.0008 10.2379 16.9755 10.1161 16.9258C9.99426 16.876 9.88344 16.8027 9.79 16.71C9.69627 16.617 9.62188 16.5064 9.57111 16.3846C9.52034 16.2627 9.4942 16.132 9.4942 16C9.4942 15.868 9.52034 15.7373 9.57111 15.6154C9.62188 15.4936 9.69627 15.383 9.79 15.29L13.1 12L9.92 8.69C9.73375 8.50264 9.62921 8.24919 9.62921 7.985C9.62921 7.72081 9.73375 7.46736 9.92 7.28C10.013 7.18627 10.1236 7.11188 10.2454 7.06111C10.3673 7.01034 10.498 6.9842 10.63 6.9842C10.762 6.9842 10.8927 7.01034 11.0146 7.06111C11.1364 7.11188 11.247 7.18627 11.34 7.28L15.2 11.28C15.3832 11.4669 15.4859 11.7182 15.4859 11.98C15.4859 12.2418 15.3832 12.4931 15.2 12.68L11.2 16.68C11.1102 16.7769 11.0022 16.8551 10.882 16.91C10.7619 16.965 10.632 16.9955 10.5 17Z"
                fill="#3671E9"
              />
            </svg>
          </div>
        </motion.button>
      ) : (
        <div className="flex items-center justify-center text-crypto-blue">
          <span className="font-rubik text-sm font-medium mr-2">
            Learn More
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </motion.div>
  );
}

export default function CalculatorSection() {
  return (
    <section className="relative bg-crypto-dark">
      {/* Dark Background Top Section */}
      <div className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] text-center">
          <motion.span
            className="inline-block px-4 py-2 bg-crypto-blue bg-opacity-20 rounded-full font-rubik font-medium text-sm text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={mobileViewport}
          >
            EARNING CALCULATOR
          </motion.span>
          <motion.h2
            className="font-rubik font-bold text-3xl lg:text-5xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={mobileViewport}
          >
            Check how much you can earn
          </motion.h2>
          <motion.p
            className="font-rubik text-base lg:text-lg text-crypto-grey leading-7 max-w-[622px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={mobileViewport}
          >
            Let's check your hash rate to see how much you will earn today,
            Exercitation veniam consequat sunt nostrud amet.
          </motion.p>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <motion.div
            className="max-w-[1000px] mx-auto relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={mobileViewport}
          >
            {/* Minimal background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
              <div className="absolute top-8 right-16 w-4 h-4 bg-crypto-blue/30 rounded-full" />
              <div className="absolute bottom-8 left-16 w-3 h-3 bg-white/20 rounded-full" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 lg:p-12">
              {/* Input Section */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={mobileViewport}
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-end">
                  <div className="flex-1 w-full">
                    <label className="font-rubik text-lg text-white/90 mb-4 block font-medium">
                      Hash Rate
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/50 font-rubik text-lg focus:outline-none focus:border-crypto-blue focus:bg-white/15 transition-all duration-300"
                        placeholder="Enter your hash rate"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-48">
                    <label className="font-rubik text-lg text-white/90 mb-4 block font-medium">
                      Unit
                    </label>
                    <div className="relative">
                      <select className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-white font-rubik text-lg focus:outline-none focus:border-crypto-blue focus:bg-white/15 transition-all duration-300 appearance-none cursor-pointer">
                        <option
                          value="TH/s"
                          className="bg-crypto-dark text-white"
                        >
                          TH/s
                        </option>
                        <option
                          value="GH/s"
                          className="bg-crypto-dark text-white"
                        >
                          GH/s
                        </option>
                        <option
                          value="MH/s"
                          className="bg-crypto-dark text-white"
                        >
                          MH/s
                        </option>
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M13.1313 4.6875H2.86876C2.56095 4.6875 2.38907 5.0125 2.5797 5.23438L7.71095 11.1844C7.85782 11.3547 8.14064 11.3547 8.28907 11.1844L13.4203 5.23438C13.6109 5.0125 13.4391 4.6875 13.1313 4.6875Z"
                            fill="rgba(255, 255, 255, 0.7)"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    className="bg-crypto-blue hover:bg-blue-600 text-white font-rubik font-medium text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl min-w-[140px]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center gap-3">
                      Calculate
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.5 16.9999C10.3684 17.0007 10.2379 16.9755 10.1161 16.9257C9.99426 16.8759 9.88344 16.8026 9.79 16.7099C9.69627 16.617 9.62188 16.5064 9.57111 16.3845C9.52034 16.2626 9.4942 16.1319 9.4942 15.9999C9.4942 15.8679 9.52034 15.7372 9.57111 15.6154C9.62188 15.4935 9.69627 15.3829 9.79 15.2899L13.1 11.9999L9.92 8.68993C9.73375 8.50257 9.62921 8.24911 9.62921 7.98493C9.62921 7.72074 9.73375 7.46729 9.92 7.27993C10.013 7.1862 10.1236 7.11181 10.2454 7.06104C10.3673 7.01027 10.498 6.98413 10.63 6.98413C10.762 6.98413 10.8927 7.01027 11.0146 7.06104C11.1364 7.11181 11.247 7.1862 11.34 7.27993L15.2 11.2799C15.3832 11.4669 15.4859 11.7182 15.4859 11.9799C15.4859 12.2417 15.3832 12.493 15.2 12.6799L11.2 16.6799C11.1102 16.7769 11.0022 16.855 10.882 16.91C10.7619 16.9649 10.632 16.9955 10.5 16.9999Z"
                            fill="#3671E9"
                          />
                        </svg>
                      </div>
                    </span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Results Section */}
              <motion.div
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 lg:p-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={mobileViewport}
              >
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-crypto-blue bg-opacity-20 rounded-full font-rubik font-medium text-sm text-white mb-6">
                    ESTIMATED 24 HOUR REVENUE
                  </span>

                  <h3 className="font-rubik font-bold text-3xl lg:text-5xl text-white mb-4">
                    {calculatorData.revenueEth}{" "}
                    <span className="block lg:inline bg-gradient-to-r from-crypto-blue to-blue-400 bg-clip-text text-transparent">
                      ({calculatorData.revenueUsd})
                    </span>
                  </h3>

                  <p className="font-rubik text-lg text-white/70 max-w-lg mx-auto">
                    {calculatorData.description}
                  </p>

                  {/* Additional stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
                    {calculatorData.timeframes.map((timeframe, index) => (
                      <motion.div
                        key={index}
                        className="text-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        viewport={mobileViewport}
                      >
                        <div className="font-rubik font-bold text-xl text-white mb-1">
                          {timeframe.period}
                        </div>
                        <div className="font-rubik text-white/70">
                          {timeframe.amount}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trading Section */}
      <div className="py-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          {/* Section Title */}
          <motion.h2
            className="font-rubik font-bold text-3xl lg:text-5xl text-white text-center mb-16 lg:mb-24 max-w-[741px] mx-auto leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={mobileViewport}
          >
            Trade securely and market the high growth cryptocurrencies.
          </motion.h2>

          {/* Cryptocurrency Cards */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={mobileViewport}
            variants={staggerContainer}
          >
            {cryptoData.map((crypto) => (
              <CryptoCard key={crypto.id} crypto={crypto} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
