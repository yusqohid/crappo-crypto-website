import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

// Product Card Component
interface ProductCardProps {
  product: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    buttonType: "primary" | "secondary";
    icon: React.ReactNode;
  };
  variants: any;
  index: number;
}

const ProductCard = ({ product, variants, index }: ProductCardProps) => {
  return (
    <motion.div
      className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center h-full"
      variants={variants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-8 relative">{product.icon}</div>

        <div className="mb-6">
          <h3 className="font-rubik font-bold text-3xl text-white mb-2">
            {product.title}
          </h3>
          <span className="font-rubik font-medium text-lg text-crypto-grey">
            {product.subtitle}
          </span>
        </div>

        <p className="font-rubik text-base text-crypto-grey mb-8 leading-7">
          {product.description}
        </p>

        {product.buttonType === "primary" ? (
          <motion.button
            className="inline-flex items-center gap-4 bg-crypto-blue hover:bg-blue-600 rounded-4xl px-6 py-4 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-rubik font-medium text-lg text-white">
              {product.buttonText}
            </span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M10.5 16.9999C10.3684 17.0007 10.2379 16.9755 10.1161 16.9257C9.99426 16.8759 9.88344 16.8026 9.79 16.7099C9.69627 16.617 9.62188 16.5064 9.57111 16.3845C9.52034 16.2626 9.4942 16.1319 9.4942 15.9999C9.4942 15.8679 9.52034 15.7372 9.57111 15.6154C9.62188 15.4935 9.69627 15.3829 9.79 15.2899L13.1 11.9999L9.92 8.68993C9.73375 8.50257 9.62921 8.24911 9.62921 7.98493C9.62921 7.72074 9.73375 7.46729 9.92 7.27993C10.013 7.1862 10.1236 7.11181 10.2454 7.06104C10.3673 7.01027 10.498 6.98413 10.63 6.98413C10.762 6.98413 10.8927 7.01027 11.0146 7.06104C11.1364 7.11181 11.247 7.1862 11.34 7.27993L15.2 11.2799C15.3832 11.4669 15.4859 11.7182 15.4859 11.9799C15.4859 12.2417 15.3832 12.493 15.2 12.6799L11.2 16.6799C11.1102 16.7769 11.0022 16.855 10.882 16.91C10.7619 16.9649 10.632 16.9955 10.5 16.9999Z"
                  fill="#3671E9"
                />
              </svg>
            </div>
          </motion.button>
        ) : (
          <div className="flex items-center text-crypto-blue">
            <span className="font-rubik text-sm font-medium mr-2">
              {product.buttonText}
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
};

export default function Products() {
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

  // Product Cards Data
  const productCards = [
    {
      id: "trading-platform",
      title: "Trading Platform",
      subtitle: "Advanced Trading",
      description:
        "Professional trading interface with advanced charting tools, real-time market data, and order management.",
      buttonText: "Start Trading",
      buttonType: "primary" as const,
      icon: (
        <motion.svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <circle cx="40" cy="40" r="40" fill="url(#tradingGradient)" />
          <path
            d="M25 45L35 35L45 40L55 25"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="35" cy="35" r="3" fill="white" />
          <circle cx="45" cy="40" r="3" fill="white" />
          <circle cx="55" cy="25" r="3" fill="white" />
          <defs>
            <linearGradient
              id="tradingGradient"
              x1="0"
              y1="0"
              x2="80"
              y2="80"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3671E9" />
              <stop offset="1" stopColor="#2563EB" />
            </linearGradient>
          </defs>
        </motion.svg>
      ),
    },
    {
      id: "secure-wallet",
      title: "Secure Wallet",
      subtitle: "Digital Asset Storage",
      description:
        "Military-grade security for storing your cryptocurrencies with multi-signature protection and cold storage options.",
      buttonText: "Learn More",
      buttonType: "secondary" as const,
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
          <rect x="20" y="25" width="40" height="30" rx="4" fill="white" />
          <rect x="24" y="29" width="32" height="2" fill="#1181E8" />
          <rect x="24" y="33" width="24" height="2" fill="#E5E7EB" />
          <rect x="24" y="37" width="16" height="2" fill="#E5E7EB" />
          <circle cx="50" cy="45" r="4" fill="#1181E8" />
        </motion.svg>
      ),
    },
    {
      id: "defi-services",
      title: "DeFi Services",
      subtitle: "Decentralized Finance",
      description:
        "Access lending, borrowing, yield farming, and liquidity mining opportunities in the DeFi ecosystem.",
      buttonText: "Explore DeFi",
      buttonType: "secondary" as const,
      icon: (
        <motion.svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <circle cx="40" cy="40" r="40" fill="#6B7280" />
          <circle cx="30" cy="35" r="8" fill="white" />
          <circle cx="50" cy="35" r="8" fill="white" />
          <circle cx="40" cy="50" r="8" fill="white" />
          <path
            d="M30 35L40 50L50 35"
            stroke="#6B7280"
            strokeWidth="2"
            fill="none"
          />
          <text
            x="30"
            y="39"
            textAnchor="middle"
            fill="#6B7280"
            fontSize="8"
            fontWeight="bold"
          >
            D
          </text>
          <text
            x="50"
            y="39"
            textAnchor="middle"
            fill="#6B7280"
            fontSize="8"
            fontWeight="bold"
          >
            F
          </text>
          <text
            x="40"
            y="54"
            textAnchor="middle"
            fill="#6B7280"
            fontSize="8"
            fontWeight="bold"
          >
            i
          </text>
        </motion.svg>
      ),
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
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-16 lg:py-24">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h1
            className="font-rubik font-bold text-4xl lg:text-6xl text-white mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.7,
              duration: 0.6,
              type: "spring",
              stiffness: 200,
            }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-crypto-blue to-blue-400 bg-clip-text text-transparent">
              Products
            </span>
          </motion.h1>

          <motion.p
            className="font-rubik text-lg text-crypto-grey mb-8 max-w-3xl mx-auto leading-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Discover our comprehensive suite of cryptocurrency trading and
            investment products designed to help you succeed in the digital
            asset revolution.
          </motion.p>
        </motion.div>

        {/* Featured Products Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {productCards.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              variants={itemVariants}
              index={index}
            />
          ))}
        </motion.div>

        {/* Market Analytics Section */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="font-rubik font-bold text-3xl lg:text-5xl text-white text-center mb-16 lg:mb-20 max-w-[800px] mx-auto leading-tight"
            variants={itemVariants}
          >
            Advanced Market{" "}
            <span className="bg-gradient-to-r from-crypto-blue to-blue-400 bg-clip-text text-transparent">
              Analytics
            </span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div className="space-y-6">
                <h3 className="font-rubik font-bold text-3xl lg:text-4xl text-white">
                  Real-time Market Insights
                </h3>
                <p className="font-rubik text-base lg:text-lg text-crypto-grey leading-7 max-w-[500px]">
                  Get comprehensive market insights with our professional-grade
                  analytics tools. Track price movements, analyze trends, and
                  make informed investment decisions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-crypto-blue rounded-full flex items-center justify-center">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="font-rubik text-base text-white">
                      Real-time market data
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-crypto-blue rounded-full flex items-center justify-center">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="font-rubik text-base text-white">
                      Technical indicators
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-crypto-blue rounded-full flex items-center justify-center">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="font-rubik text-base text-white">
                      Portfolio tracking
                    </span>
                  </div>
                </div>
                <motion.button
                  className="inline-flex items-center gap-4 bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-rubik font-medium text-lg text-white">
                    Try Analytics
                  </span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content - Analytics Dashboard */}
            <motion.div className="relative" variants={itemVariants}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(43, 7, 110, 0.9), rgba(34, 5, 89, 0.7))",
                }}
              >
                {/* Dashboard Header */}
                <div className="px-6 py-4 border-b border-white border-opacity-20">
                  <div className="flex items-center justify-between">
                    <h4 className="font-rubik font-semibold text-lg text-white">
                      Portfolio Dashboard
                    </h4>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Portfolio Stats */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="font-rubik font-bold text-2xl text-white mb-1">
                        $156,284
                      </div>
                      <div className="font-rubik text-sm text-green-400">
                        Total Portfolio
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-rubik font-bold text-2xl text-green-400 mb-1">
                        +18.45%
                      </div>
                      <div className="font-rubik text-sm text-crypto-grey">
                        24h Change
                      </div>
                    </div>
                  </div>

                  {/* Holdings */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">
                            ₿
                          </span>
                        </div>
                        <div>
                          <div className="font-rubik font-medium text-white">
                            Bitcoin
                          </div>
                          <div className="font-rubik text-xs text-crypto-grey">
                            2.45 BTC
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-rubik font-medium text-white">
                          $89,324
                        </div>
                        <div className="font-rubik text-xs text-green-400">
                          +12.4%
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">
                            Ξ
                          </span>
                        </div>
                        <div>
                          <div className="font-rubik font-medium text-white">
                            Ethereum
                          </div>
                          <div className="font-rubik text-xs text-crypto-grey">
                            15.8 ETH
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-rubik font-medium text-white">
                          $42,960
                        </div>
                        <div className="font-rubik text-xs text-green-400">
                          +8.7%
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">
                            Ł
                          </span>
                        </div>
                        <div>
                          <div className="font-rubik font-medium text-white">
                            Litecoin
                          </div>
                          <div className="font-rubik text-xs text-crypto-grey">
                            124 LTC
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-rubik font-medium text-white">
                          $24,000
                        </div>
                        <div className="font-rubik text-xs text-red-400">
                          -2.1%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <CTASection
          title="Ready to start your crypto journey?"
          description="Join millions of users who trust CRAPPO for their cryptocurrency trading and investment needs."
          primaryButton={{
            text: "Get Started",
            onClick: () => console.log("Get Started clicked"),
          }}
          secondaryButton={{
            text: "Learn More",
            onClick: () => console.log("Learn More clicked"),
          }}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
      </div>
      {/* Footer */}
      <Footer
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        pulseAnimation={pulseAnimation}
      />
    </div>
  );
}
