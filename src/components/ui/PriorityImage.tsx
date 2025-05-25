import React from 'react';

// Define the props for the PriorityImage component
interface PriorityImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  // Standard attributes like src, alt, width, height, className are inherited
}

/**
 * Renders an image with eager loading for above-the-fold content.
 * IMPORTANT: Always provide `width` and `height` attributes to prevent layout shifts (CLS).
 */
const PriorityImage: React.FC<PriorityImageProps> = ({ ...props }) => {
  // Check if width and height are provided - log a warning if not in development
  if (process.env.NODE_ENV === 'development' && (props.width === undefined || props.height === undefined)) {
    console.warn(`PriorityImage component used without explicit 'width' and 'height' props. This can cause layout shifts. Please add them to the image with src: ${props.src}`);
  }

  return (
    <img
      {...props} // Spread all passed props (src, alt, className, width, height, etc.)
      loading="eager" // Force eager loading for above-the-fold content
      fetchPriority="high" // Explicitly set high priority fetching
    />
  );
};

export default PriorityImage; 