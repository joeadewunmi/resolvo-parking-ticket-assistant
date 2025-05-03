import React from 'react';

// Define the props for the LazyImage component
// It accepts all standard HTML image attributes plus loading should ideally not be overridden
interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  // We explicitly don't include 'loading' here to enforce 'lazy'
  // but standard attributes like src, alt, width, height, className are inherited
}

/**
 * Renders an image with native browser lazy loading enabled.
 * IMPORTANT: Always provide `width` and `height` attributes to prevent layout shifts (CLS).
 */
const LazyImage: React.FC<LazyImageProps> = ({ ...props }) => {
  // Check if width and height are provided - log a warning if not in development
  if (process.env.NODE_ENV === 'development' && (props.width === undefined || props.height === undefined)) {
    console.warn(`LazyImage component used without explicit 'width' and 'height' props. This can cause layout shifts. Please add them to the image with src: ${props.src}`);
  }

  return (
    <img
      {...props} // Spread all passed props (src, alt, className, width, height, etc.)
      loading="lazy" // Enforce lazy loading
    />
  );
};

export default LazyImage; 