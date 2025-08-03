import { useEffect, useState, useCallback } from "react";

export const usePerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && "performance" in window) {
      // Measure initial load time
      window.addEventListener("load", () => {
        const loadTime = performance.now();
        console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
      });

      // Monitor memory usage
      if ("memory" in performance) {
        const checkMemory = () => {
          // @ts-ignore
          const memory = performance.memory;
          if (memory) {
            console.log(
              `Memory usage: ${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`,
            );
          }
        };

        const interval = setInterval(checkMemory, 30000); // Check every 30 seconds
        return () => clearInterval(interval);
      }
    }
  }, []);
};

// Debounce function for performance
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Throttle function for scroll events
export const useThrottle = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number,
): T => {
  const [isThrottled, setIsThrottled] = useState(false);

  const throttledCallback = useCallback(
    (...args: Parameters<T>) => {
      if (!isThrottled) {
        callback(...args);
        setIsThrottled(true);
        setTimeout(() => setIsThrottled(false), delay);
      }
    },
    [callback, delay, isThrottled],
  ) as T;

  return throttledCallback;
};
