import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  HeroSection,
  StatisticsSection,
  CalculatorSection,
  NewsletterSection,
} from "../components/sections";
import {
  containerVariants,
  itemVariants,
  pulseAnimation,
} from "../lib/animations";

export default function Index() {
  return (
    <div className="min-h-screen bg-crypto-dark text-white overflow-hidden">
      <Navbar
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <HeroSection />
      <StatisticsSection />
      <CalculatorSection />
      <NewsletterSection />

      <Footer
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        pulseAnimation={pulseAnimation}
      />
    </div>
  );
}
