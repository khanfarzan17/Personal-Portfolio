import React, { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

/**
 * LazyImage component with fade-in animation
 * Loads images only when they're in the viewport
 */
const LazyImage = ({ src, alt, className, style, ...props }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      ref={ref}
      src={isVisible ? src : undefined}
      alt={alt}
      className={className}
      style={{
        ...style,
        opacity: isLoaded ? 1 : 0.7,
        transition: "opacity 0.4s ease-in-out",
      }}
      onLoad={() => setIsLoaded(true)}
      loading="lazy"
      {...props}
    />
  );
};

export default LazyImage;
