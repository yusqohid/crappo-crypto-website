import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { usePerformanceMonitor } from "../hooks/usePerformance";
import {
  containerVariants,
  itemVariants,
  pulseAnimation,
} from "../lib/animations";

// Lazy load heavy sections
const HeroSection = lazy(() => import("../components/sections/HeroSection"));
const StatisticsSection = lazy(
  () => import("../components/sections/StatisticsSection-optimized"),
);
const CalculatorSection = lazy(
  () => import("../components/sections/CalculatorSection"),
);
const NewsletterSection = lazy(
  () => import("../components/sections/NewsletterSection"),
);

// Loading component for sections
const SectionLoader = () => (
  <div className="flex justify-center py-16">
    <div className="w-8 h-8 border-4 border-crypto-blue/20 border-t-crypto-blue rounded-full animate-spin"></div>
  </div>
);

export default function Index() {
  // Monitor performance
  usePerformanceMonitor();

  return (
    <div className="min-h-screen bg-crypto-dark text-white overflow-hidden">
      <Navbar
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <Suspense fallback={<SectionLoader />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <StatisticsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <CalculatorSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <NewsletterSection />
      </Suspense>

      <Footer
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        pulseAnimation={pulseAnimation}
      />
    </div>
  );
}
