import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Index() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-crypto-dark text-white overflow-hidden">
      {/* Header */}
      <motion.header 
        className="relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-[60px]">
          {/* Top Navigation */}
          <motion.div 
            className="flex items-center justify-between mb-12 lg:mb-[183px]"
            variants={itemVariants}
          >
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center relative"
                animate={pulseAnimation}
              >
                <motion.svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 40 40" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <path d="M19.9999 40C31.0456 40 39.9999 31.0457 39.9999 20C39.9999 8.9543 31.0456 0 19.9999 0C8.95424 0 -6.10352e-05 8.9543 -6.10352e-05 20C-6.10352e-05 31.0457 8.95424 40 19.9999 40Z" fill="white" fillOpacity="0.1"/>
                  <path d="M18.8424 28.0463C14.9124 27.4707 11.8964 24.0828 11.8964 19.9891C11.8964 15.8954 14.9124 12.5075 18.8424 11.9322V7.69238C12.5855 8.29084 7.69232 13.5677 7.69232 19.9891C7.69232 26.4104 12.5855 31.687 18.8424 32.2858V28.0463Z" fill="white"/>
                  <path d="M26.9983 12L26.8891 12.3711V23.1393L26.9983 23.2483L31.9968 20.2937L26.9983 12Z" fill="white"/>
                  <path d="M26.9984 12L21.9999 20.2937L26.9984 23.2483V18.0217V12Z" fill="white"/>
                  <path d="M26.9986 24.8742L26.937 24.9492V28.7851L26.9986 28.9648L32 21.9211L26.9986 24.8742Z" fill="white"/>
                  <path d="M26.9984 28.9648V24.8742L21.9999 21.9211L26.9984 28.9648Z" fill="white"/>
                  <path d="M26.9984 23.2482L31.9968 20.2937L26.9984 18.0217V23.2482Z" fill="white"/>
                  <path d="M21.9999 20.2937L26.9983 23.2482V18.0217L21.9999 20.2937Z" fill="white"/>
                </motion.svg>
              </motion.div>
              <motion.span 
                className="font-inter font-semibold text-lg tracking-[0.72px]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                CRAPPO
              </motion.span>
            </motion.div>

            {/* Navigation */}
            <motion.nav 
              className="hidden lg:flex items-center gap-[32px]"
              variants={containerVariants}
            >
              {["Products", "Features", "About", "Contact"].map((item, index) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="font-rubik text-base text-white hover:text-crypto-grey transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Auth Buttons */}
            <motion.div 
              className="hidden lg:flex items-center gap-6"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to="/login" className="font-rubik font-medium text-base text-white hover:text-crypto-grey transition-colors">
                  Login
                </Link>
              </motion.div>
              <div className="w-px h-6 bg-white opacity-30"></div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  to="/register" 
                  className="px-8 py-[14px] bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl font-rubik font-medium text-base text-white"
                >
                  Register
                </Link>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button 
              className="lg:hidden p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-6 lg:space-y-8 order-last lg:order-first"
              initial="hidden"
              animate="visible"
              variants={slideInLeft}
            >
              {/* Promotional Badge */}
              <motion.div 
                className="inline-flex items-center bg-white bg-opacity-10 rounded-4xl p-1 max-w-fit"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="bg-white rounded-4xl px-4 py-1"
                  animate={{ 
                    boxShadow: ["0 0 0 0 rgba(255,255,255,0.3)", "0 0 0 10px rgba(255,255,255,0)", "0 0 0 0 rgba(255,255,255,0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="font-rubik font-medium text-base text-crypto-dark tracking-[0.64px] uppercase">75% SAVE</span>
                </motion.div>
                <span className="font-rubik text-base text-white px-4 py-2">For the Black Friday weekend</span>
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
                Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.
              </motion.p>

              {/* CTA Button */}
              <motion.button 
                className="inline-flex items-center gap-6 bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl px-6 py-4 lg:px-8 lg:py-6 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(54, 113, 233, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-rubik font-medium text-lg text-white">Try for FREE</span>
                <motion.div 
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 90
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 16.9999C10.3684 17.0007 10.2379 16.9755 10.1161 16.9257C9.99426 16.8759 9.88344 16.8026 9.79 16.7099C9.69627 16.617 9.62188 16.5064 9.57111 16.3845C9.52034 16.2626 9.4942 16.1319 9.4942 15.9999C9.4942 15.8679 9.52034 15.7372 9.57111 15.6154C9.62188 15.4935 9.69627 15.3829 9.79 15.2899L13.1 11.9999L9.92 8.68993C9.73375 8.50257 9.62921 8.24911 9.62921 7.98493C9.62921 7.72074 9.73375 7.46729 9.92 7.27993C10.013 7.1862 10.1236 7.11181 10.2454 7.06104C10.3673 7.01027 10.498 6.98413 10.63 6.98413C10.762 6.98413 10.8927 7.01027 11.0146 7.06104C11.1364 7.11181 11.247 7.1862 11.34 7.27993L15.2 11.2799C15.3832 11.4669 15.4859 11.7182 15.4859 11.9799C15.4859 12.2417 15.3832 12.493 15.2 12.6799L11.2 16.6799C11.1102 16.7769 11.0022 16.855 10.882 16.91C10.7619 16.9649 10.632 16.9955 10.5 16.9999Z" fill="#3671E9"/>
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
                  alt="Crypto Platform Illustration"
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
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                  <motion.div 
                    className="absolute top-1/2 right-1/4 w-[120px] h-[400px] opacity-20 transform rotate-60"
                    initial={{ opacity: 0, rotate: 60 }}
                    animate={{ opacity: 0.2, rotate: 60 }}
                    transition={{ delay: 3, duration: 1 }}
                    animate={{ rotate: [60, 70, 60] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
                    ease: "easeInOut"
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
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Why CRAPPO Section */}
      <motion.section
        className="relative py-20 lg:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          {/* Statistics */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 mb-20 lg:mb-32"
            variants={containerVariants}
          >
            {/* Stat 1 */}
            <motion.div
              className="text-center lg:text-left"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <motion.div
                  className="w-12 h-12 bg-crypto-blue bg-opacity-20 rounded-lg flex items-center justify-center"
                  animate={pulseAnimation}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 13H11L15 17L21 11" stroke="#3671E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 13V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V11" stroke="#3671E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
              <motion.h3
                className="font-rubik font-bold text-3xl lg:text-4xl text-white mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                $30B
              </motion.h3>
              <p className="font-rubik text-base text-crypto-grey">Digital Currency Exchanged</p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              className="text-center lg:text-left"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <motion.div
                  className="w-12 h-12 bg-crypto-blue bg-opacity-20 rounded-lg flex items-center justify-center"
                  animate={pulseAnimation}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#3671E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="#3671E9" strokeWidth="2"/>
                  </svg>
                </motion.div>
              </div>
              <motion.h3
                className="font-rubik font-bold text-3xl lg:text-4xl text-white mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                10M+
              </motion.h3>
              <p className="font-rubik text-base text-crypto-grey">Trusted Wallets Investor</p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              className="text-center lg:text-left"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <motion.div
                  className="w-12 h-12 bg-crypto-blue bg-opacity-20 rounded-lg flex items-center justify-center"
                  animate={pulseAnimation}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#3671E9" strokeWidth="2"/>
                    <path d="M2 12H6" stroke="#3671E9" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M18 12H22" stroke="#3671E9" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 2V6" stroke="#3671E9" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 18V22" stroke="#3671E9" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </motion.div>
              </div>
              <motion.h3
                className="font-rubik font-bold text-3xl lg:text-4xl text-white mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                195
              </motion.h3>
              <p className="font-rubik text-base text-crypto-grey">Countries Supported</p>
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
                    ease: "easeInOut"
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
                    ease: "easeInOut"
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
                Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.
              </motion.p>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <button className="inline-flex items-center gap-4 bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl px-8 py-4">
                  <span className="font-rubik font-medium text-lg text-white">Learn More</span>
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
              Let's check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.
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
                  <div className="flex-1">
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
                        <span className="font-rubik text-xl text-crypto-dark">TH/s</span>
                        <motion.svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                        >
                          <path d="M13.1313 4.6875H2.86876C2.56095 4.6875 2.38907 5.0125 2.5797 5.23438L7.71095 11.1844C7.85782 11.3547 8.14064 11.3547 8.28907 11.1844L13.4203 5.23438C13.6109 5.0125 13.4391 4.6875 13.1313 4.6875Z" fill="#BDBDBD"/>
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
                    Revenue will change based on mining difficulty and Ethereum price.
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
                className="bg-gradient-to-br from-purple-900 to-purple-700 rounded-2xl p-8 text-center relative overflow-hidden"
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
                      <circle cx="40" cy="40" r="40" fill="url(#bitcoinGradient)"/>
                      <path d="M59.0449 35.0159C59.8261 29.7034 55.7949 26.8284 50.2324 24.9222L52.0449 17.7034L47.6699 16.6097L45.9199 23.6409C44.7636 23.3597 43.5761 23.0784 42.3886 22.8284L44.1386 15.7659L39.7636 14.6722L37.9824 21.8597C37.0136 21.6409 36.0761 21.4222 35.1699 21.2034V21.1722L29.1074 19.6722L27.9511 24.3597C27.9511 24.3597 31.2011 25.1097 31.1386 25.1409C32.9199 25.5784 33.2324 26.7659 33.1699 27.7034L31.1074 35.9222C31.2324 35.9534 31.3886 35.9847 31.5761 36.0784C31.4199 36.0472 31.2636 36.0159 31.1074 35.9534L28.2324 47.4534C28.0136 47.9847 27.4511 48.7972 26.2324 48.4847C26.2636 48.5472 23.0449 47.7034 23.0449 47.7034L20.8574 52.7347L26.5761 54.1722C27.6386 54.4534 28.6699 54.7034 29.7011 54.9847L27.8886 62.2659L32.2636 63.3597L34.0761 56.1409C35.2636 56.4534 36.4511 56.7659 37.5761 57.0472L35.7949 64.2347L40.1699 65.3284L41.9824 58.0472C49.4824 59.4534 55.1074 58.8909 57.4511 52.1097C59.3574 46.6722 57.3574 43.5159 53.4199 41.4534C56.3261 40.7972 58.4824 38.8909 59.0449 35.0159ZM49.0136 49.0784C47.6699 54.5159 38.4824 51.5784 35.5136 50.8284L37.9199 41.1722C40.8886 41.9222 50.4511 43.3909 49.0136 49.0784ZM50.3886 34.9222C49.1386 39.8909 41.5136 37.3597 39.0449 36.7347L41.2324 27.9847C43.7011 28.6097 51.6699 29.7659 50.3886 34.9222Z" fill="white"/>
                      <defs>
                        <linearGradient id="bitcoinGradient" x1="40" y1="0" x2="40" y2="80" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#F9AA4B"/>
                          <stop offset="1" stopColor="#F7931A"/>
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-rubik font-bold text-3xl text-white mb-1">Bitcoin</h3>
                    <span className="font-rubik font-medium text-lg text-white opacity-70">BTC</span>
                  </div>

                  <p className="font-rubik text-base text-white mb-8 leading-7">
                    Digital currency in which a record of transactions is maintained.
                  </p>

                  <motion.button
                    className="inline-flex items-center gap-6 bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl px-6 py-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="font-rubik font-medium text-lg text-white">Start mining</span>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10.5 17C10.3684 17.0008 10.2379 16.9755 10.1161 16.9258C9.99426 16.876 9.88344 16.8027 9.79 16.71C9.69627 16.617 9.62188 16.5064 9.57111 16.3846C9.52034 16.2627 9.4942 16.132 9.4942 16C9.4942 15.868 9.52034 15.7373 9.57111 15.6154C9.62188 15.4936 9.69627 15.383 9.79 15.29L13.1 12L9.92 8.69C9.73375 8.50264 9.62921 8.24919 9.62921 7.985C9.62921 7.72081 9.73375 7.46736 9.92 7.28C10.013 7.18627 10.1236 7.11188 10.2454 7.06111C10.3673 7.01034 10.498 6.9842 10.63 6.9842C10.762 6.9842 10.8927 7.01034 11.0146 7.06111C11.1364 7.11188 11.247 7.18627 11.34 7.28L15.2 11.28C15.3832 11.4669 15.4859 11.7182 15.4859 11.98C15.4859 12.2418 15.3832 12.4931 15.2 12.68L11.2 16.68C11.1102 16.7769 11.0022 16.8551 10.882 16.91C10.7619 16.965 10.632 16.9955 10.5 17Z" fill="#3671E9"/>
                      </svg>
                    </div>
                  </motion.button>
                </div>
              </motion.div>

              {/* Ethereum Card */}
              <motion.div
                className="bg-white rounded-2xl p-8 text-center shadow-2xl"
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
                    <circle cx="40" cy="40" r="40" fill="#1181E8"/>
                    <path d="M39.89 59.9385L25.15552 51.243L39.881 72.0015L54.623 51.243L39.881 59.9385H39.89ZM40.109 24L25.38052 48.4455L40.109 57.156L54.8435 48.4545L40.109 24Z" fill="white"/>
                  </motion.svg>
                </div>

                <div className="mb-6">
                  <h3 className="font-rubik font-bold text-3xl text-crypto-dark mb-1">Ethereum</h3>
                  <span className="font-rubik font-medium text-lg text-gray-400">ETH</span>
                </div>

                <p className="font-rubik text-base text-gray-500 mb-8 leading-7">
                  Blockchain technology to create and run decentralized digital applications.
                </p>

                <motion.button
                  className="w-16 h-16 border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-crypto-blue transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:scale-110 transition-transform">
                    <path d="M10.5 17C10.3684 17.0008 10.2379 16.9755 10.1161 16.9258C9.99426 16.876 9.88344 16.8027 9.79 16.71C9.69627 16.617 9.62188 16.5064 9.57111 16.3846C9.52034 16.2627 9.4942 16.132 9.4942 16C9.4942 15.868 9.52034 15.7373 9.57111 15.6154C9.62188 15.4936 9.69627 15.383 9.79 15.29L13.1 12L9.92 8.69C9.73375 8.50264 9.62921 8.24919 9.62921 7.985C9.62921 7.72081 9.73375 7.46736 9.92 7.28C10.013 7.18627 10.1236 7.11188 10.2454 7.06111C10.3673 7.01034 10.498 6.9842 10.63 6.9842C10.762 6.9842 10.8927 7.01034 11.0146 7.06111C11.1364 7.11188 11.247 7.18627 11.34 7.28L15.2 11.28C15.3832 11.4669 15.4859 11.7182 15.4859 11.98C15.4859 12.2418 15.3832 12.4931 15.2 12.68L11.2 16.68C11.1102 16.7769 11.0022 16.8551 10.882 16.91C10.7619 16.965 10.632 16.9955 10.5 17Z" fill="#3671E9"/>
                  </svg>
                </motion.button>
              </motion.div>

              {/* Litecoin Card */}
              <motion.div
                className="bg-white rounded-2xl p-8 text-center shadow-2xl"
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
                    <circle cx="40" cy="40" r="40" fill="white"/>
                    <path d="M40 0C32.0888 0 24.3552 2.34596 17.7772 6.74121C11.1992 11.1365 6.07234 17.3836 3.04484 24.6927C0.0173314 32.0017 -0.774802 40.0444 0.768607 47.8036C2.31202 55.5628 6.12165 62.6902 11.7157 68.2843C17.3098 73.8784 24.4372 77.688 32.1964 79.2314C39.9556 80.7748 47.9983 79.9827 55.3074 76.9552C62.6164 73.9277 68.8635 68.8008 73.2588 62.2228C77.6541 55.6448 80 47.9112 80 40C80 29.3913 75.7857 19.2172 68.2843 11.7157C60.7828 4.21427 50.6087 0 40 0V0ZM39.1267 12.26H47.74C47.9162 12.2602 48.09 12.3012 48.2477 12.3796C48.4055 12.4581 48.543 12.5719 48.6495 12.7123C48.756 12.8527 48.8286 13.0158 48.8616 13.1888C48.8947 13.3619 48.8873 13.5403 48.84 13.71L42.0733 36.77L48.4234 34.83L47.0634 39.4467L40.65 41.3133L36.49 55.36H58.7433C58.9197 55.361 59.0935 55.4027 59.251 55.482C59.4086 55.5613 59.5457 55.6759 59.6515 55.817C59.7574 55.958 59.8292 56.1217 59.8613 56.2951C59.8935 56.4685 59.885 56.647 59.8367 56.8167L57.8967 63.4833C57.8038 63.8005 57.6107 64.079 57.3463 64.2773C57.082 64.4756 56.7605 64.583 56.43 64.5833H22.4433L28.1867 45.1767L21.8334 47.11L23.2333 42.5733L29.6 40.64L37.6734 13.3733C37.7619 13.0545 37.952 12.7733 38.2149 12.5723C38.4778 12.3714 38.7991 12.2617 39.13 12.26H39.1267Z" fill="#59C19C"/>
                  </motion.svg>
                </div>

                <div className="mb-6">
                  <h3 className="font-rubik font-bold text-3xl text-crypto-dark mb-1">Litecoin</h3>
                  <span className="font-rubik font-medium text-lg text-gray-400">LTC</span>
                </div>

                <p className="font-rubik text-base text-gray-500 mb-8 leading-7">
                  Cryptocurrency that enables instant payments to anyone in the world.
                </p>

                <motion.button
                  className="w-16 h-16 border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-crypto-blue transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:scale-110 transition-transform">
                    <path d="M10.5 17C10.3684 17.0008 10.2379 16.9755 10.1161 16.9258C9.99426 16.876 9.88344 16.8027 9.79 16.71C9.69627 16.617 9.62188 16.5064 9.57111 16.3846C9.52034 16.2627 9.4942 16.132 9.4942 16C9.4942 15.868 9.52034 15.7373 9.57111 15.6154C9.62188 15.4936 9.69627 15.383 9.79 15.29L13.1 12L9.92 8.69C9.73375 8.50264 9.62921 8.24919 9.62921 7.985C9.62921 7.72081 9.73375 7.46736 9.92 7.28C10.013 7.18627 10.1236 7.11188 10.2454 7.06111C10.3673 7.01034 10.498 6.9842 10.63 6.9842C10.762 6.9842 10.8927 7.01034 11.0146 7.06111C11.1364 7.11188 11.247 7.18627 11.34 7.28L15.2 11.28C15.3832 11.4669 15.4859 11.7182 15.4859 11.98C15.4859 12.2418 15.3832 12.4931 15.2 12.68L11.2 16.68C11.1102 16.7769 11.0022 16.8551 10.882 16.91C10.7619 16.965 10.632 16.9955 10.5 17Z" fill="#3671E9"/>
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
        style={{ background: 'linear-gradient(to bottom, #2B076E, #220559)' }}
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
            Market sentiments, portfolio, and run the infrastructure of your choice
          </motion.h2>

          {/* Invest Smart & Detailed Statistics */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-24">
            {/* Invest Smart Section */}
            <motion.div
              className="space-y-8"
              variants={slideInLeft}
            >
              <div className="space-y-6">
                <h3 className="font-rubik font-bold text-2xl lg:text-3xl text-white">
                  Invest Smart
                </h3>
                <p className="font-rubik text-base text-gray-300 leading-7 max-w-[408px]">
                  Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.
                </p>
                <motion.button
                  className="inline-flex items-center gap-4 bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-rubik font-medium text-lg text-white">Learn More</span>
                </motion.button>
              </div>

              {/* Chart Visualization */}
              <div className="relative rounded-2xl p-6 lg:p-8" style={{ background: 'linear-gradient(135deg, rgba(43, 7, 110, 0.9), rgba(34, 5, 89, 0.7))' }}>
                {/* Bitcoin Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">₿</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-inter font-bold text-xl text-white">Bitcoin</span>
                      <span className="font-inter text-sm text-gray-400">BTC</span>
                    </div>
                    <span className="font-inter text-sm text-gray-300">0.00080 BTC</span>
                  </div>
                  <div className="ml-auto text-right">
                    <span className="font-inter font-medium text-sm text-cyan-400">+125%</span>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="relative h-32 mb-6">
                  <svg className="w-full h-full" viewBox="0 0 400 120">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#6EDCB5" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="#6EDCB5" stopOpacity="0"/>
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
                    style={{ background: 'linear-gradient(135deg, rgba(62, 10, 140, 0.6), rgba(43, 7, 110, 0.4))' }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-inter font-semibold text-lg text-white mb-2">
                      Increase in Trade
                    </h4>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-inter font-bold text-xl text-white">+75%</span>
                      <svg width="16" height="16" className="text-red-400">
                        <path d="M8 2L14 8H10V14H6V8H2L8 2Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="font-inter text-sm text-gray-300">Sell option</span>
                  </motion.div>

                  <motion.div
                    className="rounded-xl p-4"
                    style={{ background: 'linear-gradient(135deg, rgba(62, 10, 140, 0.6), rgba(43, 7, 110, 0.4))' }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-center">
                      <span className="font-inter font-bold text-xl text-white">$15.32</span>
                      <p className="font-inter text-sm text-gray-300 mt-1">Price in dollar</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Detailed Statistics Section */}
            <motion.div
              className="space-y-8"
              variants={slideInRight}
            >
              <div className="space-y-6">
                <h3 className="font-rubik font-bold text-2xl lg:text-3xl text-white">
                  Detailed Statistics
                </h3>
                <p className="font-rubik text-base text-gray-300 leading-7 max-w-[408px]">
                  View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.
                </p>
                <motion.button
                  className="inline-flex items-center gap-4 bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-rubik font-medium text-lg text-white">Learn More</span>
                </motion.button>
              </div>

              {/* Trading Interface */}
              <div className="rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(43, 7, 110, 0.9), rgba(34, 5, 89, 0.7))' }}>
                {/* Header */}
                <div className="px-6 py-4" style={{ background: 'linear-gradient(135deg, rgba(62, 10, 140, 0.8), rgba(43, 7, 110, 0.9))' }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <svg width="16" height="16" className="text-cyan-400">
                          <circle cx="8" cy="8" r="6" fill="currentColor"/>
                        </svg>
                        <span className="font-rubik font-medium text-sm text-cyan-400">+7.3% (+$146)</span>
                      </div>
                      <span className="font-rubik text-sm text-gray-400">Trends</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                      <div>
                        <div className="font-rubik font-medium text-sm text-white">Andriy Lenin</div>
                        <div className="font-rubik text-xs text-green-400">VERIFIED</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="font-rubik font-medium text-sm text-white">$8256.00</div>
                      <div className="font-rubik text-xs text-gray-400">Total amount</div>
                    </div>
                    <div>
                      <div className="font-rubik font-medium text-sm text-white">$51234.31</div>
                      <div className="font-rubik text-xs text-gray-400">High</div>
                    </div>
                    <div>
                      <div className="font-rubik font-medium text-sm text-white">$1531.80</div>
                      <div className="font-rubik text-xs text-gray-400">Low</div>
                    </div>
                  </div>
                </div>

                {/* Trading Area */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-rubik font-bold text-sm text-white">USD/BTC</span>
                      <svg width="16" height="16" className="text-white">
                        <path d="M8 2L14 8H10V14H6V8H2L8 2Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">Buy</button>
                      <button className="px-3 py-1 bg-red-500 text-white text-xs rounded-full">Sell</button>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="h-40 rounded-lg mb-4 flex items-end justify-center gap-1 p-4" style={{ background: 'linear-gradient(180deg, rgba(79, 13, 153, 0.4), rgba(43, 7, 110, 0.2))' }}>
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 rounded-t ${Math.random() > 0.5 ? 'bg-green-400' : 'bg-red-400'}`}
                        style={{ height: `${Math.random() * 80 + 20}%` }}
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-6 gap-2 text-center text-xs text-gray-400">
                    {['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map(month => (
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
            <motion.div
              className="space-y-8"
              variants={slideInLeft}
            >
              <div className="space-y-6">
                <h3 className="font-rubik font-bold text-2xl lg:text-3xl text-white">
                  Grow your profit and track your investments
                </h3>
                <p className="font-rubik text-base text-gray-300 leading-7 max-w-[408px]">
                  Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.
                </p>
                <motion.button
                  className="inline-flex items-center gap-4 bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-rubik font-medium text-lg text-white">Learn More</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content - Crypto Table */}
            <motion.div
              className="space-y-4"
              variants={slideInRight}
            >
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
                  style={{ background: 'linear-gradient(135deg, rgba(43, 7, 110, 0.8), rgba(34, 5, 89, 0.6))' }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">₿</span>
                      </div>
                      <div>
                        <div className="font-inter font-bold text-white">BTC</div>
                        <div className="font-inter text-sm text-gray-300">Bitcoin</div>
                      </div>
                    </div>
                    <div className="font-inter text-white">$6750</div>
                    <div className="flex items-center gap-1">
                      <svg width="16" height="16" className="text-green-400">
                        <circle cx="8" cy="8" r="8" fill="currentColor" fillOpacity="0.1"/>
                        <path d="M8 4L12 8H9V12H7V8H4L8 4Z" fill="currentColor"/>
                      </svg>
                      <span className="font-inter text-green-400">+7.3%</span>
                    </div>
                    <div className="hidden md:block font-inter text-gray-300">$3420214</div>
                  </div>
                </motion.div>

                {/* Ethereum Row - Featured */}
                <motion.div
                  className="rounded-xl p-4"
                  style={{ background: 'linear-gradient(135deg, rgba(62, 10, 140, 0.9), rgba(43, 7, 110, 0.7))', border: '1px solid rgba(79, 13, 153, 0.5)' }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">Ξ</span>
                      </div>
                      <div>
                        <div className="font-inter font-bold text-white">ETH</div>
                        <div className="font-inter text-sm text-gray-300">Ethereum</div>
                      </div>
                    </div>
                    <div className="font-inter text-white">$156.83</div>
                    <div className="flex items-center gap-1">
                      <svg width="16" height="16" className="text-red-400">
                        <circle cx="8" cy="8" r="8" fill="currentColor" fillOpacity="0.1"/>
                        <path d="M8 12L4 8H7V4H9V8H12L8 12Z" fill="currentColor"/>
                      </svg>
                      <span className="font-inter text-red-400">-0.9%</span>
                    </div>
                    <div className="hidden md:block font-inter text-gray-300">$1812350</div>
                  </div>
                </motion.div>

                {/* Litecoin Row */}
                <motion.div
                  className="rounded-xl p-4"
                  style={{ background: 'linear-gradient(135deg, rgba(43, 7, 110, 0.8), rgba(34, 5, 89, 0.6))' }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">Ł</span>
                      </div>
                      <div>
                        <div className="font-inter font-bold text-white">LTC</div>
                        <div className="font-inter text-sm text-gray-300">Litecoin</div>
                      </div>
                    </div>
                    <div className="font-inter text-white">$8535</div>
                    <div className="flex items-center gap-1">
                      <svg width="16" height="16" className="text-green-400">
                        <circle cx="8" cy="8" r="8" fill="currentColor" fillOpacity="0.1"/>
                        <path d="M8 4L12 8H9V12H7V8H4L8 4Z" fill="currentColor"/>
                      </svg>
                      <span className="font-inter text-green-400">+8.2%</span>
                    </div>
                    <div className="hidden md:block font-inter text-gray-300">$5820399</div>
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
        style={{ background: 'linear-gradient(180deg, #2B076E 0%, #0D0D2B 100%)' }}
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
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 40.77%, rgba(255, 255, 255, 0.30) 186.22%)',
              transform: 'rotate(-45deg)',
              left: '395px',
              top: '-85px'
            }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 0.3, x: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="absolute w-[200px] h-[1000px] opacity-30"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 40.77%, rgba(255, 255, 255, 0.30) 186.22%)',
              transform: 'rotate(-45deg)',
              left: '35px',
              top: '-17px'
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
            style={{ backgroundColor: '#3671E9' }}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background crypto icons */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Bitcoin icon background */}
              <motion.div
                className="absolute opacity-10"
                style={{ right: '85px', top: '48px' }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <svg width="185" height="185" viewBox="0 0 185 185" fill="none">
                  <path d="M161.65 90.394C164.5 70.967 149.76 60.453 129.42 53.483L136.05 27.0848L120.05 23.0851L113.65 48.797C109.42 47.769 105.08 46.74 100.74 45.826L107.14 19.9997L91.14 16L84.62 42.284C81.08 41.484 77.65 40.684 74.34 39.884V39.769L52.17 34.2842L47.94 51.426C47.94 51.426 59.83 54.168 59.6 54.282C66.11 55.882 67.25 60.225 67.02 63.653L59.48 93.708C59.94 93.822 60.51 93.936 61.2 94.279C60.63 94.165 60.05 94.051 59.48 93.822L48.97 135.876C48.17 137.818 46.11 140.79 41.66 139.647C41.77 139.875 30 136.79 30 136.79L22 155.188L42.91 160.445C46.8 161.474 50.57 162.388 54.34 163.416L47.71 190.043L63.71 194.042L70.34 167.644C74.68 168.787 79.02 169.93 83.14 170.958L76.62 197.242L92.62 201.242L99.25 174.615C126.68 179.758 147.25 177.701 155.82 152.903C162.79 133.019 155.47 121.477 141.08 113.935C151.7 111.535 159.59 104.564 161.65 90.394ZM124.96 141.818C120.05 161.702 86.45 150.96 75.6 148.217L84.39 112.906C95.25 115.649 130.22 121.02 124.96 141.818ZM129.99 90.051C125.42 108.221 97.54 98.964 88.51 96.679L96.51 64.682C105.54 66.967 134.68 71.195 129.99 90.051Z" fill="white" fillOpacity="0.16"/>
                </svg>
              </motion.div>

              {/* Ethereum icon background */}
              <motion.div
                className="absolute opacity-10"
                style={{ left: '102px', top: '-38px' }}
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="181" height="259" viewBox="0 0 181 259" fill="none">
                  <path d="M101.41 155.686L22 108.823L101.361 220.698L180.812 108.823L101.361 155.686H101.41ZM102.59 -38L23.2126 93.7462L102.59 140.69L182 93.7946L102.59 -38Z" fill="white" fillOpacity="0.16"/>
                </svg>
              </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  className="space-y-6"
                  variants={slideInLeft}
                >
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
                    Join now with CRAPPO to get the latest news and start mining now
                  </motion.p>
                </motion.div>

                {/* Right Content - Email Subscription */}
                <motion.div
                  className="space-y-6"
                  variants={slideInRight}
                >
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-end">
                    <div className="flex-1 min-w-0">
                      <motion.div
                        className="relative"
                        variants={itemVariants}
                      >
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full bg-transparent text-white placeholder-white font-rubik text-base lg:text-lg focus:outline-none pb-2"
                        />
                        <div className="w-full h-px bg-white bg-opacity-40 mt-2"></div>
                      </motion.div>
                    </div>
                    <motion.button
                      className="inline-flex items-center justify-center bg-white hover:bg-gray-100 transition-colors rounded-4xl px-6 lg:px-8 py-3 lg:py-4 min-w-[152px]"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="font-rubik font-medium text-base lg:text-lg text-crypto-dark">
                        Subscribe
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-crypto-dark py-16 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16 mb-16">
            {/* Logo Section */}
            <motion.div
              className="space-y-6 lg:col-span-1"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center relative"
                  animate={pulseAnimation}
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M19.9999 40C31.0456 40 39.9999 31.0457 39.9999 20C39.9999 8.9543 31.0456 0 19.9999 0C8.95424 0 -6.10352e-05 8.9543 -6.10352e-05 20C-6.10352e-05 31.0457 8.95424 40 19.9999 40Z" fill="white" fillOpacity="0.1"/>
                    <path d="M18.8424 28.0463C14.9124 27.4707 11.8964 24.0828 11.8964 19.9891C11.8964 15.8954 14.9124 12.5075 18.8424 11.9322V7.69238C12.5855 8.29084 7.69232 13.5677 7.69232 19.9891C7.69232 26.4104 12.5855 31.687 18.8424 32.2858V28.0463Z" fill="white"/>
                    <path d="M26.9983 12L26.8891 12.3711V23.1393L26.9983 23.2483L31.9968 20.2937L26.9983 12Z" fill="white"/>
                    <path d="M26.9984 12L21.9999 20.2937L26.9984 23.2483V18.0217V12Z" fill="white"/>
                    <path d="M26.9986 24.8742L26.937 24.9492V28.7851L26.9986 28.9648L32 21.9211L26.9986 24.8742Z" fill="white"/>
                    <path d="M26.9984 28.9648V24.8742L21.9999 21.9211L26.9984 28.9648Z" fill="white"/>
                    <path d="M26.9984 23.2482L31.9968 20.2937L26.9984 18.0217V23.2482Z" fill="white"/>
                    <path d="M21.9999 20.2937L26.9983 23.2482V18.0217L21.9999 20.2937Z" fill="white"/>
                  </svg>
                </motion.div>
                <span className="font-inter font-semibold text-lg tracking-[0.72px] text-white">
                  CRAPPO
                </span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              <h3 className="font-rubik font-medium text-xl text-white">Quick Link</h3>
              <ul className="space-y-4">
                {["Home", "Products", "About", "Features", "Contact"].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="font-rubik text-base text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              <h3 className="font-rubik font-medium text-xl text-white">Resources</h3>
              <ul className="space-y-4">
                {[
                  "Download Whitepaper",
                  "Smart Token",
                  "Blockchain Explorer",
                  "Crypto API",
                  "Interest"
                ].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href="#"
                      className="font-rubik text-base text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Payment Systems */}
            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              <h3 className="font-rubik font-medium text-2xl lg:text-3xl text-white leading-tight">
                We accept following payment systems
              </h3>

              {/* Payment Icons */}
              <div className="grid grid-cols-3 gap-4">
                {/* Visa */}
                <motion.div
                  className="w-24 h-16 bg-gray-200 bg-opacity-5 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <g clipPath="url(#clip0_1_493)">
                      <path d="M34.8931 16.6551C33.7776 16.213 32.5985 15.9912 31.4112 16C27.5718 16 24.8602 18.1037 24.841 21.1236C24.817 23.3421 26.7679 24.5924 28.2437 25.3336C29.7579 26.0958 30.2642 26.576 30.2594 27.2573C30.2498 28.2935 29.05 28.7633 27.9341 28.7633C26.4008 28.7633 25.5633 28.531 24.2747 27.9489L23.7972 27.7062L23.2525 31.1828C24.1859 31.6056 25.8681 31.9684 27.6054 31.9998C31.6872 31.9998 34.3556 29.9091 34.3868 26.6961C34.4204 24.9238 33.3645 23.5849 31.1425 22.4782C29.7915 21.7604 28.954 21.2802 28.954 20.552C28.954 19.9073 29.6715 19.2182 31.1713 19.2182C32.1694 19.192 33.1614 19.3957 34.082 19.8159L34.442 19.9908L34.9867 16.6316L34.8931 16.6551ZM44.8564 16.2819H41.8569C40.9234 16.2819 40.2203 16.5612 39.8124 17.5687L34.0436 31.7831H38.1254L38.9413 29.4523L43.923 29.4575C44.0405 30.003 44.4005 31.7831 44.4005 31.7831H47.9999L44.8564 16.2819ZM19.3194 16.1514H23.2093L20.776 31.6604H16.891L19.3194 16.1462V16.1514ZM9.44492 24.6994L9.84806 26.8527L13.6491 16.2819H17.7693L11.6478 31.7622H7.53721L4.17771 18.6545C4.1233 18.4383 3.99552 18.2527 3.82017 18.135C2.60931 17.4547 1.32633 16.9384 -6.10352e-05 16.5977L0.0527309 16.2715H6.31339C7.16286 16.308 7.84676 16.5977 8.07473 17.5843L9.44252 24.7072V24.6994H9.44492ZM40.0571 26.2811L41.6073 21.9431C41.5881 21.9901 41.9265 21.0479 42.1232 20.4658L42.3896 21.8048L43.2894 26.2785H40.0547V26.2811H40.0571Z" fill="#E0E0E0"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_493">
                        <rect width="48" height="48" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </motion.div>

                {/* Mastercard */}
                <motion.div
                  className="w-24 h-16 bg-gray-200 bg-opacity-5 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg width="48" height="38" viewBox="0 0 48 38" fill="none">
                    <path d="M17.4935 7.22754H30.4592V30.9539H17.4935V7.22754Z" fill="#BDBDBD"/>
                    <path d="M18.3167 19.091C18.3167 14.2703 20.5393 9.99445 23.9556 7.22771C21.4449 5.21562 18.2756 4 14.8181 4C6.62681 4 0 10.7489 0 19.091C0 27.4328 6.62681 34.1819 14.8179 34.1819C18.2754 34.1819 21.4447 32.9663 23.9556 30.954C20.5393 28.2293 18.3167 23.9116 18.3167 19.091Z" fill="#828282"/>
                    <path d="M47.9524 19.091C47.9524 27.4328 41.3256 34.1819 33.1345 34.1819C29.677 34.1819 26.5076 32.9663 23.9968 30.954C27.4543 28.1875 29.6359 23.9116 29.6359 19.091C29.6359 14.2703 27.4131 9.99445 23.9968 7.22771C26.5075 5.21562 29.677 4 33.1345 4C41.3256 4 47.9526 10.7909 47.9526 19.091H47.9524Z" fill="#E0E0E0"/>
                  </svg>
                </motion.div>

                {/* Bitcoin */}
                <motion.div
                  className="w-24 h-16 bg-gray-200 bg-opacity-5 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <g clipPath="url(#clip0_1_482)">
                      <path d="M39.4018 24.8368C36.7296 35.5568 25.8685 42.0733 15.1638 39.401C4.44354 36.7288 -2.07302 25.8682 0.599319 15.1637C3.27151 4.44366 14.1168 -2.0729 24.8371 0.599443C35.5418 3.25601 42.0742 14.1166 39.4018 24.8368Z" fill="#E0E0E0"/>
                      <path d="M29.5231 17.5081C29.9138 14.8518 27.8981 13.4143 25.1169 12.4612L26.0231 8.85181L23.8356 8.30493L22.9606 11.8206C22.3825 11.6799 21.7888 11.5393 21.195 11.4143L22.07 7.88306L19.8825 7.33618L18.9919 10.9299C18.5075 10.8206 18.0388 10.7112 17.5856 10.6018V10.5862L14.5544 9.83618L13.9763 12.1799C13.9763 12.1799 15.6013 12.5549 15.57 12.5706C16.4606 12.7893 16.6169 13.3831 16.5856 13.8518L15.5544 17.9612C15.6169 17.9768 15.695 17.9924 15.7888 18.0393C15.7106 18.0237 15.6325 18.0081 15.5544 17.9768L14.1169 23.7268C14.0075 23.9924 13.7263 24.3987 13.1169 24.2424C13.1325 24.2737 11.5231 23.8518 11.5231 23.8518L10.4294 26.3674L13.2888 27.0862C13.82 27.2268 14.3356 27.3518 14.8513 27.4924L13.945 31.1331L16.1325 31.6799L17.0388 28.0706C17.6325 28.2268 18.2263 28.3831 18.7888 28.5237L17.8981 32.1174L20.0856 32.6643L20.9919 29.0237C24.7419 29.7268 27.5544 29.4456 28.7263 26.0549C29.6794 23.3362 28.6794 21.7581 26.7106 20.7268C28.1638 20.3987 29.2419 19.4456 29.5231 17.5081ZM24.5075 24.5393C23.8356 27.2581 19.2419 25.7893 17.7575 25.4143L18.9606 20.5862C20.445 20.9612 25.2263 21.6956 24.5075 24.5393ZM25.195 17.4612C24.57 19.9456 20.7575 18.6799 19.5231 18.3674L20.6169 13.9924C21.8513 14.3049 25.8356 14.8831 25.195 17.4612Z" fill="#0D0D2B"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_482">
                        <rect width="40" height="40" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-gray-600">
            {/* Copyright */}
            <motion.p
              className="font-rubik text-base text-white mb-6 lg:mb-0"
              variants={itemVariants}
            >
              ©2021 CRAPPO. All rights reserved
            </motion.p>

            {/* Social Media Links */}
            <motion.div
              className="flex items-center gap-6"
              variants={containerVariants}
            >
              {/* Facebook */}
              <motion.a
                href="#"
                className="w-6 h-6 text-white hover:text-crypto-blue transition-colors"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15.12 5.32003H17V2.14003C16.0897 2.04538 15.1751 1.99865 14.26 2.00003C11.54 2.00003 9.67999 3.66003 9.67999 6.70003V9.32003H6.60999V12.88H9.67999V22H13.36V12.88H16.42L16.88 9.32003H13.36V7.05003C13.36 6.00003 13.64 5.32003 15.12 5.32003Z" fill="currentColor"/>
                </svg>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="#"
                className="w-6 h-6 text-white hover:text-crypto-blue transition-colors"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9206 7.0503 21.7652 6.2294 21.48 5.45C21.2257 4.78313 20.83 4.17928 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78168 2.77665 4.17693 3.16956 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17693 20.8304 4.78168 21.2234 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.7652 17.7706 21.9206 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1327 16.6348 20.0178 17.2637 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7256 19.3405 18.3332 19.5964 17.9 19.76C17.3037 19.9778 16.6748 20.0927 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38089 20.1123 6.72459 20.0109 6.1 19.8C5.68578 19.6281 5.31136 19.3728 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01586 17.2952 3.88044 16.6519 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86448 7.35106 3.98295 6.70795 4.21 6.1C4.38605 5.67791 4.65627 5.30166 5 5C5.30381 4.65617 5.67929 4.3831 6.1 4.2C6.70955 3.98004 7.352 3.86508 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86728 17.2637 3.98225 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3777 5.30718 19.6338 5.68273 19.8 6.1C20.0223 6.70893 20.1373 7.35178 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z" fill="currentColor"/>
                </svg>
              </motion.a>

              {/* YouTube */}
              <motion.a
                href="#"
                className="w-6 h-6 text-white hover:text-crypto-blue transition-colors"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M23 9.70998C23.0495 8.27864 22.7365 6.858 22.09 5.57998C21.6514 5.05558 21.0427 4.70169 20.37 4.57998C17.5875 4.32751 14.7936 4.22403 12 4.26998C9.21667 4.22194 6.43274 4.32208 3.66003 4.56998C3.11185 4.6697 2.60454 4.92683 2.20003 5.30998C1.30003 6.13998 1.20003 7.55998 1.10003 8.75998C0.954939 10.9175 0.954939 13.0824 1.10003 15.24C1.12896 15.9154 1.22952 16.5858 1.40003 17.24C1.5206 17.745 1.76455 18.2123 2.11003 18.6C2.51729 19.0034 3.03641 19.2752 3.60003 19.38C5.75594 19.6461 7.92824 19.7564 10.1 19.71C13.6 19.76 16.67 19.71 20.3 19.43C20.8775 19.3316 21.4112 19.0595 21.83 18.65C22.11 18.3699 22.3191 18.0271 22.44 17.65C22.7977 16.5526 22.9733 15.4041 22.96 14.25C23 13.69 23 10.31 23 9.70998ZM9.74003 14.85V8.65998L15.66 11.77C14 12.69 11.81 13.73 9.74003 14.85Z" fill="currentColor"/>
                </svg>
              </motion.a>

              {/* Twitter */}
              <motion.a
                href="#"
                className="w-6 h-6 text-white hover:text-crypto-blue transition-colors"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22 5.79997C21.2483 6.12606 20.4534 6.34163 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98826 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90532 13.8938 4.33315C13.093 4.76099 12.4569 5.4425 12.0852 6.2708C11.7135 7.09911 11.6273 8.02736 11.84 8.90997C10.2094 8.82749 8.61444 8.40292 7.15865 7.66383C5.70287 6.92474 4.41885 5.88766 3.39 4.61997C3.02914 5.25013 2.83952 5.96379 2.84 6.68997C2.83872 7.36435 3.00422 8.02858 3.32176 8.62353C3.63929 9.21848 4.09902 9.72568 4.66 10.1C4.00798 10.0822 3.36989 9.90726 2.8 9.58997V9.63997C2.80489 10.5849 3.13599 11.4991 3.73731 12.2279C4.33864 12.9568 5.17326 13.4556 6.1 13.64C5.74326 13.7485 5.37287 13.8058 5 13.81C4.74189 13.807 4.48442 13.7835 4.23 13.74C4.49391 14.5528 5.00462 15.2631 5.69107 15.7721C6.37753 16.2811 7.20558 16.5635 8.06 16.58C6.6172 17.7152 4.83588 18.3348 3 18.34C2.66574 18.3411 2.33174 18.321 2 18.28C3.87443 19.4902 6.05881 20.1327 8.29 20.13C9.82969 20.146 11.3571 19.855 12.7831 19.274C14.2091 18.6931 15.505 17.8338 16.5952 16.7465C17.6854 15.6591 18.548 14.3654 19.1326 12.9409C19.7172 11.5164 20.012 9.98969 20 8.44997C20 8.27996 20 8.09997 20 7.91997C20.7847 7.33478 21.4615 6.61739 22 5.79997Z" fill="currentColor"/>
                </svg>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="#"
                className="w-6 h-6 text-white hover:text-crypto-blue transition-colors"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20.47 1.9999H3.53C3.33958 1.99725 3.1505 2.03214 2.97356 2.10258C2.79663 2.17302 2.6353 2.27762 2.4988 2.41041C2.36229 2.5432 2.25328 2.70158 2.17799 2.87651C2.1027 3.05143 2.06261 3.23947 2.06 3.4299V20.5699C2.06261 20.7603 2.1027 20.9484 2.17799 21.1233C2.25328 21.2982 2.36229 21.4566 2.4988 21.5894C2.6353 21.7222 2.79663 21.8268 2.97356 21.8972C3.1505 21.9676 3.33958 22.0025 3.53 21.9999H20.47C20.6604 22.0025 20.8495 21.9676 21.0264 21.8972C21.2034 21.8268 21.3647 21.7222 21.5012 21.5894C21.6377 21.4566 21.7467 21.2982 21.822 21.1233C21.8973 20.9484 21.9374 20.7603 21.94 20.5699V3.4299C21.9374 3.23947 21.8973 3.05143 21.822 2.87651C21.7467 2.70158 21.6377 2.5432 21.5012 2.41041C21.3647 2.27762 21.2034 2.17302 21.0264 2.10258C20.8495 2.03214 20.6604 1.99725 20.47 1.9999ZM8.09 18.7399H5.09V9.7399H8.09V18.7399ZM6.59 8.4799C6.17626 8.4799 5.77947 8.31554 5.48691 8.02298C5.19435 7.73043 5.03 7.33363 5.03 6.9199C5.03 6.50616 5.19435 6.10937 5.48691 5.81681C5.77947 5.52425 6.17626 5.3599 6.59 5.3599C6.80969 5.33498 7.03217 5.35675 7.24287 5.42378C7.45357 5.49081 7.64774 5.60159 7.81265 5.74886C7.97757 5.89613 8.10952 6.07657 8.19987 6.27838C8.29021 6.48018 8.33692 6.69879 8.33692 6.9199C8.33692 7.141 8.29021 7.35961 8.19987 7.56141C8.10952 7.76322 7.97757 7.94366 7.81265 8.09093C7.64774 8.23821 7.45357 8.34898 7.24287 8.41601C7.03217 8.48304 6.80969 8.50481 6.59 8.4799ZM18.91 18.7399H15.91V13.9099C15.91 12.6999 15.48 11.9099 14.39 11.9099C14.0527 11.9124 13.7242 12.0182 13.4488 12.2131C13.1735 12.408 12.9645 12.6826 12.85 12.9999C12.7717 13.2349 12.7378 13.4825 12.75 13.7299V18.7299H9.75C9.75 18.7299 9.75 10.5499 9.75 9.7299H12.75V10.9999C13.0225 10.527 13.4189 10.1374 13.8964 9.8731C14.374 9.60878 14.9146 9.47975 15.46 9.4999C17.46 9.4999 18.91 10.7899 18.91 13.5599V18.7399Z" fill="currentColor"/>
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
