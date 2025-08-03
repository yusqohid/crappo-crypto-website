import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../lib/animations";

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
      <motion.svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <circle cx="40" cy="40" r="40" fill="url(#bitcoinGradient)" />
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
          d="M40 0C32.0888 0 24.3552 2.34596 17.7772 6.74121C11.1992 11.1365 6.07234 17.3836 3.04484 24.6927C0.0173314 32.0017 -0.774802 40.0444 0.768607 47.8036C2.31202 55.5628 6.12165 62.6902 11.7157 68.2843C17.3098 73.8784 24.4372 77.688 32.1964 79.2314C39.9556 80.7748 47.9983 79.9827 55.3074 76.9552C62.6164 73.9277 68.8635 68.8008 73.2588 62.2228C77.6541 55.6448 80 47.9112 80 40C80 29.3913 75.7857 19.2172 68.2843 11.7157C60.7828 4.21427 50.6087 0 40 0V0ZM39.1267 12.26H47.74C47.9162 12.2602 48.09 12.3012 48.2477 12.3796C48.4055 12.4581 48.543 12.5719 48.6495 12.7123C48.756 12.8527 48.8286 13.0158 48.8616 13.1888C48.8947 13.3619 48.8873 13.5403 48.84 13.71L42.0733 36.77L48.4234 34.83L47.0634 39.4467L40.65 41.3133L36.49 55.36H58.7433C58.9197 55.361 59.0935 55.4027 59.251 55.482C59.4086 55.5613 59.4557 55.6759 59.6515 55.817C59.7574 55.958 59.8292 56.1217 59.8613 56.2951C59.8935 56.4685 59.885 56.647 59.8367 56.8167L57.8967 63.4833C57.8038 63.8005 57.6107 64.079 57.3463 64.2773C57.082 64.4756 56.7605 64.583 56.43 64.5833H22.4433L28.1867 45.1767L21.8334 47.11L23.2333 42.5733L29.6 40.64L37.6734 13.3733C37.7619 13.0545 37.952 12.7733 38.2149 12.5723C38.4778 12.3714 38.7991 12.2617 39.13 12.26H39.1267Z"
          fill="#59C19C"
        />
      </motion.svg>
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
      variants={itemVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative z-10">
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
      </div>
    </motion.div>
  );
}

export default function CalculatorSection() {
  return (
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
            className="max-w-[1000px] mx-auto relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
                <div className="w-4 h-4 bg-crypto-blue/30 rounded-full" />
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
                <div className="w-3 h-3 bg-white/20 rounded-full" />
              </motion.div>

              {/* Chart icon decoration */}
              <motion.div
                className="absolute opacity-10"
                style={{ right: "60px", top: "30px" }}
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <circle
                    cx="50"
                    cy="50"
                    r="50"
                    fill="white"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M30 60L40 50L50 55L60 40L70 35"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="40"
                    cy="50"
                    r="3"
                    fill="white"
                    fillOpacity="0.8"
                  />
                  <circle
                    cx="50"
                    cy="55"
                    r="3"
                    fill="white"
                    fillOpacity="0.8"
                  />
                  <circle
                    cx="60"
                    cy="40"
                    r="3"
                    fill="white"
                    fillOpacity="0.8"
                  />
                  <circle
                    cx="70"
                    cy="35"
                    r="3"
                    fill="white"
                    fillOpacity="0.8"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 lg:p-12">
              {/* Input Section */}
              <motion.div className="mb-8" variants={itemVariants}>
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-end">
                  <motion.div className="flex-1 w-full" variants={itemVariants}>
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
                  </motion.div>

                  <motion.div
                    className="w-full lg:w-48"
                    variants={itemVariants}
                  >
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
                      <motion.div
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                        whileHover={{ scale: 1.1 }}
                      >
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
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.button
                    className="relative overflow-hidden group bg-crypto-blue hover:bg-blue-600 text-white font-rubik font-medium text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-crypto-blue/25 min-w-[140px]"
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

                    <span className="relative z-10 flex items-center gap-3">
                      Calculate
                      <motion.div
                        className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
                        whileHover={{ rotate: 90, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
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
                      </motion.div>
                    </span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Results Section */}
              <motion.div
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 lg:p-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <motion.span
                    className="inline-block px-4 py-2 bg-crypto-blue bg-opacity-20 rounded-full font-rubik font-medium text-sm text-white mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    ESTIMATED 24 HOUR REVENUE
                  </motion.span>

                  <motion.h3
                    className="font-rubik font-bold text-3xl lg:text-5xl text-white mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {calculatorData.revenueEth}{" "}
                    <span className="block lg:inline bg-gradient-to-r from-crypto-blue to-blue-400 bg-clip-text text-transparent">
                      ({calculatorData.revenueUsd})
                    </span>
                  </motion.h3>

                  <motion.p
                    className="font-rubik text-lg text-white/70 max-w-lg mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {calculatorData.description}
                  </motion.p>

                  {/* Additional stats */}
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {calculatorData.timeframes.map((timeframe, index) => (
                      <div key={index} className="text-center">
                        <div className="font-rubik font-bold text-xl text-white mb-1">
                          {timeframe.period}
                        </div>
                        <div className="font-rubik text-white/70">
                          {timeframe.amount}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Light Background Trading Section */}
      <div className="py-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          {/* Section Title */}
          <motion.h2
            className="font-rubik font-bold text-3xl lg:text-5xl text-white text-center mb-16 lg:mb-24 max-w-[741px] mx-auto leading-tight"
            variants={itemVariants}
          >
            Trade securely and market the high growth cryptocurrencies.
          </motion.h2>

          {/* Cryptocurrency Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {cryptoData.map((crypto) => (
              <CryptoCard key={crypto.id} crypto={crypto} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
