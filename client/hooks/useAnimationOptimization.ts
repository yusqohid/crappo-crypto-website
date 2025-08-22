import { useEffect, useState, useCallback } from "react";

/**
 * Hook to detect user's motion preferences and device capabilities
 * Automatically adjusts animation performance based on device
 */
export const useAnimationOptimization = () => {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  const [isLowPerformanceDevice, setIsLowPerformanceDevice] = useState(false);
  const [animationQuality, setAnimationQuality] = useState<
    "high" | "medium" | "low"
  >("high");

  useEffect(() => {
    // Check user's motion preferences
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setShouldReduceMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setShouldReduceMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Detect device performance
    const detectPerformance = () => {
      // Check hardware concurrency (number of CPU cores)
      const cores = navigator.hardwareConcurrency || 2;

      // Check memory (if available)
      // @ts-ignore
      const memory = navigator.deviceMemory || 4;

      // Check connection (if available)
      // @ts-ignore
      const connection = navigator.connection;
      const effectiveType = connection?.effectiveType || "4g";

      // Determine if it's a low-performance device
      const isLowPerf =
        cores < 4 ||
        memory < 4 ||
        effectiveType === "slow-2g" ||
        effectiveType === "2g";
      setIsLowPerformanceDevice(isLowPerf);

      // Set animation quality based on device capabilities
      if (isLowPerf || shouldReduceMotion) {
        setAnimationQuality("low");
      } else if (cores < 8 || memory < 8) {
        setAnimationQuality("medium");
      } else {
        setAnimationQuality("high");
      }
    };

    detectPerformance();

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [shouldReduceMotion]);

  // Get optimized animation config based on device capabilities
  const getAnimationConfig = useCallback(() => {
    if (shouldReduceMotion) {
      return {
        duration: 0.1,
        ease: "easeOut",
        stagger: 0,
        enableComplexAnimations: false,
      };
    }

    switch (animationQuality) {
      case "low":
        return {
          duration: 0.3,
          ease: "easeOut",
          stagger: 0.05,
          enableComplexAnimations: false,
        };
      case "medium":
        return {
          duration: 0.5,
          ease: "easeOut",
          stagger: 0.1,
          enableComplexAnimations: false,
        };
      case "high":
      default:
        return {
          duration: 0.6,
          ease: "easeOut",
          stagger: 0.15,
          enableComplexAnimations: true,
        };
    }
  }, [shouldReduceMotion, animationQuality]);

  return {
    shouldReduceMotion,
    isLowPerformanceDevice,
    animationQuality,
    getAnimationConfig,
  };
};

/**
 * Hook to monitor FPS and adjust animations accordingly
 */
export const useFPSMonitor = () => {
  const [fps, setFps] = useState(60);
  const [isPerformanceGood, setIsPerformanceGood] = useState(true);

  useEffect(() => {
    let lastTime = performance.now();
    let frameCount = 0;
    let animationId: number;

    const measureFPS = (currentTime: number) => {
      frameCount++;

      if (currentTime - lastTime >= 1000) {
        const currentFPS = Math.round(
          (frameCount * 1000) / (currentTime - lastTime),
        );
        setFps(currentFPS);
        setIsPerformanceGood(currentFPS >= 45); // Consider 45+ FPS as good performance

        frameCount = 0;
        lastTime = currentTime;
      }

      animationId = requestAnimationFrame(measureFPS);
    };

    animationId = requestAnimationFrame(measureFPS);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return { fps, isPerformanceGood };
};

/**
 * Hook to apply will-change property for better performance
 */
export const useWillChange = (
  isAnimating: boolean,
  properties: string[] = ["transform", "opacity"],
) => {
  useEffect(() => {
    const style = properties.join(", ");

    return () => {
      // Cleanup will-change after animation
      if (!isAnimating) {
        const elements = document.querySelectorAll("[data-will-change]");
        elements.forEach((el) => {
          (el as HTMLElement).style.willChange = "auto";
        });
      }
    };
  }, [isAnimating, properties]);

  return {
    willChange: isAnimating ? properties.join(", ") : "auto",
    "data-will-change": true,
  };
};

/**
 * Hook to enable/disable animations based on battery level and performance
 */
export const useAdaptiveAnimations = () => {
  const [shouldDisableAnimations, setShouldDisableAnimations] = useState(false);
  const { isPerformanceGood } = useFPSMonitor();
  const { shouldReduceMotion } = useAnimationOptimization();

  useEffect(() => {
    // Check battery level if available
    // @ts-ignore
    if ("getBattery" in navigator) {
      // @ts-ignore
      navigator.getBattery().then((battery) => {
        const handleBatteryChange = () => {
          // Disable complex animations when battery is low
          setShouldDisableAnimations(battery.level < 0.2 && !battery.charging);
        };

        battery.addEventListener("levelchange", handleBatteryChange);
        battery.addEventListener("chargingchange", handleBatteryChange);
        handleBatteryChange();

        return () => {
          battery.removeEventListener("levelchange", handleBatteryChange);
          battery.removeEventListener("chargingchange", handleBatteryChange);
        };
      });
    }
  }, []);

  const shouldReduceAnimations =
    shouldReduceMotion || !isPerformanceGood || shouldDisableAnimations;

  return {
    shouldReduceAnimations,
    shouldDisableAnimations,
    isPerformanceGood,
  };
};
