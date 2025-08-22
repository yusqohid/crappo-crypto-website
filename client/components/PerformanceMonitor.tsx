import React, { useState, useEffect } from "react";
import {
  useFPSMonitor,
  useAdaptiveAnimations,
} from "../hooks/useAnimationOptimization";

interface PerformanceMonitorProps {
  show?: boolean;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  show = false,
  position = "top-right",
}) => {
  const { fps, isPerformanceGood } = useFPSMonitor();
  const { shouldReduceAnimations, shouldDisableAnimations } =
    useAdaptiveAnimations();
  const [memoryUsage, setMemoryUsage] = useState<number>(0);

  useEffect(() => {
    const updateMemoryUsage = () => {
      // @ts-ignore
      if (performance.memory) {
        // @ts-ignore
        const used = performance.memory.usedJSHeapSize / 1048576; // Convert to MB
        setMemoryUsage(Number(used.toFixed(1)));
      }
    };

    updateMemoryUsage();
    const interval = setInterval(updateMemoryUsage, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!show) return null;

  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  };

  return (
    <div
      className={`fixed ${positionClasses[position]} z-50 bg-black/80 backdrop-blur-sm text-white text-xs font-mono rounded-lg p-3 border border-white/20 max-w-[200px]`}
    >
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>FPS:</span>
          <span
            className={
              fps >= 45
                ? "text-green-400"
                : fps >= 30
                  ? "text-yellow-400"
                  : "text-red-400"
            }
          >
            {fps}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Memory:</span>
          <span
            className={
              memoryUsage < 100
                ? "text-green-400"
                : memoryUsage < 200
                  ? "text-yellow-400"
                  : "text-red-400"
            }
          >
            {memoryUsage}MB
          </span>
        </div>

        <div className="flex justify-between">
          <span>Performance:</span>
          <span
            className={isPerformanceGood ? "text-green-400" : "text-red-400"}
          >
            {isPerformanceGood ? "Good" : "Poor"}
          </span>
        </div>

        {shouldReduceAnimations && (
          <div className="text-yellow-400 text-[10px] mt-2">
            ⚡ Reduced animations
          </div>
        )}

        {shouldDisableAnimations && (
          <div className="text-red-400 text-[10px] mt-1">
            🔋 Battery save mode
          </div>
        )}
      </div>
    </div>
  );
};

// Development helper component
export const DevPerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle with Ctrl/Cmd + Shift + P
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "P") {
        e.preventDefault();
        setIsVisible((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV === "production") return null;

  return <PerformanceMonitor show={isVisible} position="top-right" />;
};
