import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  variants?: any;
  animate?: any;
  whileHover?: any;
  transition?: any;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjM0Y3MkU5Ii8+PC9zdmc+",
  variants,
  animate,
  whileHover,
  transition,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={imgRef}
      className={className}
      variants={variants}
      animate={animate}
      whileHover={whileHover}
      transition={transition}
    >
      {isInView && (
        <>
          {/* Placeholder */}
          {!isLoaded && (
            <img
              src={placeholder}
              alt=""
              className="w-full h-full object-contain opacity-50 blur-sm"
            />
          )}

          {/* Actual Image */}
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-contain transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            decoding="async"
          />
        </>
      )}
    </motion.div>
  );
};
