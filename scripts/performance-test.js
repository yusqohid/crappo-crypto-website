#!/usr/bin/env node

/**
 * Simple performance test script untuk mengukur improvement animasi
 * Usage: node scripts/performance-test.js
 */

import { performance } from "perf_hooks";

// Simulasi berbagai kondisi device
const deviceProfiles = {
  desktop: {
    cores: 8,
    memory: 16,
    connection: "4g",
    description: "High-end Desktop",
  },
  laptop: {
    cores: 4,
    memory: 8,
    connection: "4g",
    description: "Mid-range Laptop",
  },
  mobile: {
    cores: 2,
    memory: 4,
    connection: "3g",
    description: "Budget Mobile",
  },
  lowEnd: {
    cores: 2,
    memory: 2,
    connection: "2g",
    description: "Low-end Device",
  },
};

// Simulasi load animasi berdasarkan device
function simulateAnimationLoad(device) {
  const start = performance.now();

  // Simulasi CPU usage berdasarkan device capability
  const iterations = device.cores * 10000;
  let result = 0;

  for (let i = 0; i < iterations; i++) {
    result += Math.random() * Math.sin(i) * Math.cos(i);
  }

  const end = performance.now();
  return end - start;
}

// Simulasi memory usage
function simulateMemoryUsage(device) {
  const arrays = [];
  const arraySize = device.memory * 100; // Simulate memory usage

  for (let i = 0; i < 10; i++) {
    arrays.push(new Array(arraySize).fill(Math.random()));
  }

  return arrays.length * arraySize * 8; // Rough bytes calculation
}

// Determine optimal animation quality
function getOptimalAnimationQuality(device) {
  const score = device.cores * 2 + device.memory;

  if (score >= 12) return "high";
  if (score >= 8) return "medium";
  return "low";
}

// Get recommended settings
function getRecommendedSettings(device) {
  const quality = getOptimalAnimationQuality(device);

  const settings = {
    high: {
      enableBlur: true,
      maxBlurValue: 40,
      enableComplexAnimations: true,
      staggerDelay: 0.15,
      duration: 0.6,
      enableParticles: true,
      maxParticles: 10,
    },
    medium: {
      enableBlur: true,
      maxBlurValue: 20,
      enableComplexAnimations: false,
      staggerDelay: 0.1,
      duration: 0.4,
      enableParticles: true,
      maxParticles: 5,
    },
    low: {
      enableBlur: false,
      maxBlurValue: 0,
      enableComplexAnimations: false,
      staggerDelay: 0.05,
      duration: 0.3,
      enableParticles: false,
      maxParticles: 0,
    },
  };

  return { quality, ...settings[quality] };
}

// Estimasi FPS berdasarkan device
function estimateFPS(device, loadTime) {
  const baselineTime = 16.67; // 60fps = 16.67ms per frame
  const deviceMultiplier = (device.cores + device.memory / 4) / 4;
  const connectionMultiplier =
    device.connection === "4g" ? 1 : device.connection === "3g" ? 0.8 : 0.6;

  const expectedFrameTime =
    baselineTime + loadTime / deviceMultiplier / connectionMultiplier;
  return Math.round(1000 / expectedFrameTime);
}

// Run performance test
function runPerformanceTest() {
  console.log("\n🚀 Zenith Forge Animation Performance Test\n");
  console.log("=".repeat(60));

  Object.entries(deviceProfiles).forEach(([key, device]) => {
    console.log(`\n📱 ${device.description}`);
    console.log(
      `   CPU: ${device.cores} cores | RAM: ${device.memory}GB | Network: ${device.connection}`,
    );

    const loadTime = simulateAnimationLoad(device);
    const memoryUsage = simulateMemoryUsage(device);
    const estimatedFPS = estimateFPS(device, loadTime);
    const settings = getRecommendedSettings(device);

    console.log(`   Load Time: ${loadTime.toFixed(2)}ms`);
    console.log(`   Memory Usage: ${(memoryUsage / 1024 / 1024).toFixed(1)}MB`);
    console.log(`   Estimated FPS: ${estimatedFPS}`);
    console.log(`   Quality: ${settings.quality.toUpperCase()}`);

    // Performance status
    const status =
      estimatedFPS >= 45
        ? "✅ Excellent"
        : estimatedFPS >= 30
          ? "⚠️  Good"
          : "❌ Poor";
    console.log(`   Performance: ${status}`);

    // Recommendations
    console.log("   Settings:");
    console.log(
      `     - Blur Effects: ${settings.enableBlur ? `✅ (max ${settings.maxBlurValue}px)` : "❌"}`,
    );
    console.log(
      `     - Complex Animations: ${settings.enableComplexAnimations ? "✅" : "❌"}`,
    );
    console.log(
      `     - Particles: ${settings.enableParticles ? `✅ (max ${settings.maxParticles})` : "❌"}`,
    );
    console.log(`     - Animation Duration: ${settings.duration}s`);
    console.log(`     - Stagger Delay: ${settings.staggerDelay}s`);
  });

  console.log("\n" + "=".repeat(60));
  console.log("\n💡 Tips for Optimization:");
  console.log("   • Use GPU-accelerated properties (transform, opacity)");
  console.log("   • Implement will-change for better performance");
  console.log("   • Reduce blur values on mobile devices");
  console.log("   • Use memoization for heavy components");
  console.log("   • Respect prefers-reduced-motion settings");
  console.log("   • Monitor FPS with DevTools or PerformanceMonitor");

  console.log("\n🎯 Next Steps:");
  console.log("   • Test pada perangkat nyata untuk validation");
  console.log("   • Monitor dengan browser DevTools Performance");
  console.log("   • Gunakan Lighthouse untuk audit menyeluruh");
  console.log("   • Implementasi adaptive loading berdasarkan device");

  console.log("\n🔧 Debug dengan PerformanceMonitor:");
  console.log("   • Tekan Ctrl/Cmd + Shift + P dalam development mode");
  console.log("   • Monitor FPS, memory usage, dan performance status");
  console.log("   • Otomatis adapt animasi berdasarkan performa real-time\n");
}

// Export untuk digunakan dalam aplikasi
export {
  deviceProfiles,
  getOptimalAnimationQuality,
  getRecommendedSettings,
  estimateFPS,
};

// Run test
runPerformanceTest();
