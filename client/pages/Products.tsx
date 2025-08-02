import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Products() {
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

  return (
    <div className="min-h-screen bg-crypto-dark text-white">
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
            className="flex items-center justify-between"
            variants={itemVariants}
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to="/" className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center relative">
                  <motion.svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 40 40" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.6 }}
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
                </div>
                <span className="font-inter font-semibold text-lg tracking-[0.72px]">CRAPPO</span>
              </Link>
            </motion.div>

            {/* Navigation */}
            <motion.nav 
              className="hidden lg:flex items-center gap-[32px]"
              variants={containerVariants}
            >
              {[
                { name: "Products", path: "/products", active: true },
                { name: "Features", path: "/features", active: false },
                { name: "About", path: "/about", active: false },
                { name: "Contact", path: "/contact", active: false }
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={item.path} 
                    className={`font-rubik text-base transition-colors ${
                      item.active ? 'text-crypto-blue' : 'text-white hover:text-crypto-grey'
                    }`}
                  >
                    {item.name}
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
          </motion.div>
        </div>
      </motion.header>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-16">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h1 
            className="font-rubik font-bold text-4xl lg:text-6xl text-white mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6, type: "spring", stiffness: 200 }}
          >
            <span className="bg-gradient-to-r from-crypto-blue to-blue-400 bg-clip-text text-transparent">
              Products
            </span>
          </motion.h1>
          
          <motion.p 
            className="font-rubik text-lg text-crypto-grey mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            This page is a placeholder. Continue prompting to add content for the Products page.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-4 bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl px-8 py-4"
            >
              <span className="font-rubik font-medium text-lg text-white">Back to Home</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
