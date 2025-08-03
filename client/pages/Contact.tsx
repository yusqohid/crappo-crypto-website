import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-16">
        <div className="text-center">
          <h1 className="font-rubik font-bold text-4xl lg:text-6xl text-white mb-8">
            Contact
          </h1>
          <p className="font-rubik text-lg text-crypto-grey mb-8 max-w-2xl mx-auto">
            This page is a placeholder. Continue prompting to add content for
            the contact page.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-4 bg-crypto-blue hover:bg-blue-600 transition-colors rounded-4xl px-8 py-4"
          >
            <span className="font-rubik font-medium text-lg text-white">
              Back to Home
            </span>
          </Link>
        </div>
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
