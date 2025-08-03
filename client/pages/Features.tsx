import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

export default function Features() {
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

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const features = [
    {
      icon: "🔐",
      title: "Advanced Security",
      description:
        "Military-grade encryption and multi-layer security protocols to protect your digital assets with institutional-level protection.",
      highlights: [
        "256-bit encryption",
        "Multi-signature wallets",
        "Cold storage",
        "Biometric authentication",
      ],
    },
    {
      icon: "⚡",
      title: "Lightning Fast Trading",
      description:
        "Execute trades in milliseconds with our high-performance trading engine and advanced order matching algorithms.",
      highlights: [
        "Sub-second execution",
        "High-frequency trading",
        "Real-time data",
        "Smart order routing",
      ],
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description:
        "Professional-grade charts, technical indicators, and market analysis tools for informed trading decisions.",
      highlights: [
        "Real-time charts",
        "50+ indicators",
        "Market depth",
        "Historical data",
      ],
    },
    {
      icon: "🌐",
      title: "Multi-Chain Support",
      description:
        "Trade across multiple blockchain networks with seamless cross-chain functionality and unified portfolio management.",
      highlights: [
        "20+ blockchains",
        "Cross-chain swaps",
        "Unified portfolio",
        "Bridge integration",
      ],
    },
    {
      icon: "🤖",
      title: "AI-Powered Insights",
      description:
        "Leverage artificial intelligence for market predictions, sentiment analysis, and automated trading strategies.",
      highlights: [
        "Market predictions",
        "Sentiment analysis",
        "Auto-trading bots",
        "Risk management",
      ],
    },
    {
      icon: "📱",
      title: "Mobile First",
      description:
        "Full-featured mobile app with all desktop capabilities, ensuring you never miss trading opportunities.",
      highlights: [
        "iOS & Android",
        "Offline mode",
        "Push notifications",
        "Biometric login",
      ],
    },
  ];

  const tradingFeatures = [
    {
      title: "Spot Trading",
      description:
        "Buy and sell cryptocurrencies at current market prices with advanced order types.",
      icon: "💰",
    },
    {
      title: "Futures Trading",
      description:
        "Trade cryptocurrency futures with up to 100x leverage and advanced risk management.",
      icon: "📈",
    },
    {
      title: "Options Trading",
      description:
        "Sophisticated options trading with various strategies and risk profiles.",
      icon: "⚖️",
    },
    {
      title: "DeFi Integration",
      description:
        "Access decentralized finance protocols directly from the platform.",
      icon: "🔗",
    },
  ];

  return (
    <div className="min-h-screen bg-crypto-dark text-white">
      {/* Navigation */}
      <Navbar
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* Hero Section */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] pb-[60px] relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-10 w-32 h-32 bg-crypto-blue/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 left-20 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating icons */}
          <motion.div
            className="absolute top-32 right-32 text-2xl opacity-20"
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🚀
          </motion.div>
          <motion.div
            className="absolute top-60 left-40 text-xl opacity-15"
            animate={{
              y: [20, -20, 20],
              rotate: [0, -360, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ⚡
          </motion.div>
        </div>

        <motion.div
          className="text-center pt-20 relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Promotional badge */}
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-crypto-blue/20 to-purple-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-crypto-blue/30"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.6,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-crypto-blue to-purple-500 w-2 h-2 rounded-full mr-3 animate-pulse"></span>
            <span className="font-rubik text-sm font-medium text-white">
              ✨ New Features Available
            </span>
          </motion.div>

          <motion.h1
            className="font-rubik font-bold text-4xl md:text-5xl lg:text-[64px] lg:leading-[76px] text-white mb-6"
            variants={itemVariants}
          >
            Powerful Platform
            <br />
            <span className="bg-gradient-to-r from-crypto-blue via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Features
            </span>
          </motion.h1>
          <motion.p
            className="font-rubik text-base lg:text-lg text-crypto-grey leading-7 max-w-[500px] mx-auto mb-12"
            variants={itemVariants}
          >
            Discover cutting-edge tools and technologies designed to enhance
            your cryptocurrency trading experience with professional-grade
            features and institutional security.
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            variants={containerVariants}
          >
            {[
              "🔒 Bank-Grade Security",
              "⚡ Lightning Fast",
              "🤖 AI-Powered",
              "📱 Mobile First",
            ].map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-crypto-card/50 backdrop-blur-sm border border-crypto-border/50 rounded-full px-4 py-2"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className="font-rubik text-sm text-crypto-grey">
                  {highlight}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Main Features Grid */}
      <motion.section
        className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-16 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Section header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="font-rubik font-bold text-3xl lg:text-4xl text-white mb-4">
            Core
            <span className="bg-gradient-to-r from-crypto-blue to-purple-500 bg-clip-text text-transparent">
              {" "}
              Features
            </span>
          </h2>
          <p className="font-rubik text-lg text-crypto-grey max-w-2xl mx-auto">
            Professional-grade features designed for serious traders and
            investors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-crypto-blue/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Main card */}
              <div className="relative bg-crypto-card border border-crypto-border rounded-2xl p-8 hover:border-crypto-blue/50 transition-all duration-300 h-full">
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-crypto-blue/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </span>
                  </motion.div>
                </div>

                <h3 className="font-rubik font-bold text-2xl text-white mb-4 group-hover:text-crypto-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="font-rubik text-crypto-grey mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Enhanced highlights */}
                <ul className="space-y-3">
                  {feature.highlights.map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center text-sm text-crypto-grey group-hover:text-white transition-colors duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <motion.div
                        className="w-6 h-6 bg-gradient-to-r from-crypto-blue to-purple-500 rounded-full mr-3 flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.div>
                      {highlight}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover reveal button */}
                <motion.div
                  className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 10 }}
                  whileInView={{ y: 0 }}
                >
                  <button className="w-full bg-gradient-to-r from-crypto-blue to-purple-500 text-white py-3 rounded-xl font-rubik font-medium text-sm hover:shadow-lg transition-shadow duration-300">
                    Learn More
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Trading Features */}
      <motion.section
        className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-16 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-crypto-blue/5 via-transparent to-purple-500/5 rounded-3xl"></div>

        <motion.div
          className="text-center mb-16 relative z-10"
          variants={itemVariants}
        >
          <h2 className="font-rubik font-bold text-4xl lg:text-5xl text-white mb-6">
            Trading
            <span className="bg-gradient-to-r from-crypto-blue to-purple-500 bg-clip-text text-transparent">
              {" "}
              Solutions
            </span>
          </h2>
          <p className="font-rubik text-lg text-crypto-grey max-w-2xl mx-auto mb-8">
            Comprehensive trading solutions for every type of trader, from
            beginners to institutions.
          </p>

          {/* Stats row */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 text-center"
            variants={containerVariants}
          >
            {[
              { value: "100+", label: "Trading Pairs" },
              { value: "0.1%", label: "Trading Fees" },
              { value: "24/7", label: "Market Access" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="font-rubik font-bold text-2xl text-crypto-blue mb-1">
                  {stat.value}
                </div>
                <div className="font-rubik text-sm text-crypto-grey">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {tradingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-crypto-blue/30 via-purple-500/30 to-crypto-blue/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Main card */}
              <div className="relative bg-gradient-to-br from-crypto-card/80 to-crypto-dark/80 backdrop-blur-sm border border-crypto-border rounded-2xl p-6 hover:border-crypto-blue/50 transition-all duration-300 h-full">
                {/* Icon with enhanced styling */}
                <motion.div
                  className="relative mb-4"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-crypto-blue/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>

                  {/* Floating indicator */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-full h-full bg-white rounded-full scale-50"></div>
                  </motion.div>
                </motion.div>

                <h3 className="font-rubik font-bold text-xl text-white mb-3 group-hover:text-crypto-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="font-rubik text-crypto-grey text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Action indicator */}
                <motion.div
                  className="flex items-center text-crypto-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileInView={{ x: 0 }}
                >
                  <span className="font-rubik text-sm font-medium mr-2">
                    Explore
                  </span>
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Performance Stats */}
      <motion.section
        className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          className="relative bg-gradient-to-br from-crypto-blue/20 via-purple-500/10 to-crypto-blue/20 rounded-3xl p-8 lg:p-12 border border-crypto-blue/30 overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-4 right-8 w-20 h-20 bg-white/5 rounded-full"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-8 left-12 w-16 h-16 bg-crypto-blue/10 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-12 h-full">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="border-r border-white/20"></div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <motion.h2
                className="font-rubik font-bold text-3xl lg:text-4xl text-white mb-4"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                Platform Performance
              </motion.h2>
              <motion.p
                className="font-rubik text-crypto-grey"
                variants={itemVariants}
              >
                Industry-leading performance metrics that set us apart
              </motion.p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "99.9%", label: "Uptime", icon: "🔒" },
                { number: "<1ms", label: "Latency", icon: "⚡" },
                { number: "1M+", label: "Transactions/sec", icon: "📊" },
                { number: "24/7", label: "Support", icon: "🛟" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Number with enhanced styling */}
                  <motion.div
                    className="font-rubik font-bold text-3xl lg:text-4xl bg-gradient-to-r from-crypto-blue to-purple-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{
                      backgroundImage:
                        "linear-gradient(45deg, #3671E9, #8B5CF6, #3671E9)",
                    }}
                  >
                    {stat.number}
                  </motion.div>

                  {/* Label */}
                  <div className="font-rubik text-crypto-grey group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    className="w-full h-1 bg-gradient-to-r from-crypto-blue to-purple-500 rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Additional info section */}
            <motion.div
              className="mt-12 pt-8 border-t border-white/10"
              variants={itemVariants}
            >
              <div className="flex flex-wrap justify-center gap-6 text-center">
                {[
                  "🏆 Industry Leader",
                  "🌟 5-Star Rating",
                  "🔐 SOC 2 Certified",
                  "🌍 Global Coverage",
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="font-rubik text-sm text-crypto-grey">
                      {badge}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Experience These Features?"
        description="Join thousands of traders who trust our platform for their cryptocurrency trading needs."
        primaryButton={{
          text: "Get Started Now",
          onClick: () => console.log("Get Started clicked"),
        }}
        secondaryButton={{
          text: "Back to Home",
          href: "/",
        }}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        theme="gradient"
        className="max-w-[1440px] mx-auto px-6 lg:px-[120px]"
      />

      {/* Footer */}
      <Footer
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        pulseAnimation={pulseAnimation}
      />
    </div>
  );
}
