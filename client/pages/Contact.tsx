import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
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

  return (
    <div className="min-h-screen bg-crypto-dark text-white">
      {/* Navigation */}
      <Navbar
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* Hero Section */}
      <motion.section
        className="py-20 lg:py-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <div className="text-center mb-16">
            <motion.h1
              className="font-rubik font-bold text-4xl lg:text-6xl text-white mb-6"
              variants={itemVariants}
            >
              Get in{" "}
              <span className="bg-gradient-to-r from-crypto-blue to-blue-400 bg-clip-text text-transparent">
                Touch
              </span>
            </motion.h1>
            <motion.p
              className="font-rubik text-lg text-crypto-grey max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Have questions about our platform? We're here to help you start
              your crypto journey.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Content */}
      <motion.section
        className="pb-20 lg:pb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-[120px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div>
                <h2 className="font-rubik font-bold text-2xl lg:text-3xl text-white mb-6">
                  Contact Information
                </h2>
                <p className="font-rubik text-base text-crypto-grey leading-7 mb-8">
                  Reach out to us through any of the following channels. Our
                  team is available 24/7 to assist you.
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-crypto-blue" />
                  </div>
                  <div>
                    <h3 className="font-rubik font-semibold text-lg text-white mb-1">
                      Email
                    </h3>
                    <p className="font-rubik text-base text-crypto-grey">
                      support@zenithforge.com
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-crypto-blue" />
                  </div>
                  <div>
                    <h3 className="font-rubik font-semibold text-lg text-white mb-1">
                      Phone
                    </h3>
                    <p className="font-rubik text-base text-crypto-grey">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-crypto-blue" />
                  </div>
                  <div>
                    <h3 className="font-rubik font-semibold text-lg text-white mb-1">
                      Office
                    </h3>
                    <p className="font-rubik text-base text-crypto-grey">
                      123 Crypto Street, Blockchain City, BC 12345
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              variants={itemVariants}
            >
              <h2 className="font-rubik font-bold text-2xl lg:text-3xl text-white mb-6">
                Send us a Message
              </h2>

              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block font-rubik font-medium text-sm text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 font-rubik text-white placeholder-crypto-grey focus:outline-none focus:ring-2 focus:ring-crypto-blue focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-rubik font-medium text-sm text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 font-rubik text-white placeholder-crypto-grey focus:outline-none focus:ring-2 focus:ring-crypto-blue focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block font-rubik font-medium text-sm text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 font-rubik text-white placeholder-crypto-grey focus:outline-none focus:ring-2 focus:ring-crypto-blue focus:border-transparent transition-all duration-300"
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-rubik font-medium text-sm text-white mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 font-rubik text-white placeholder-crypto-grey focus:outline-none focus:ring-2 focus:ring-crypto-blue focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-crypto-blue hover:bg-blue-600 text-white font-rubik font-medium text-lg px-8 py-4 rounded-4xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        pulseAnimation={pulseAnimation}
      />
    </div>
  );
}
