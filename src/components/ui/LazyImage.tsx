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
  // Enforce width and height in both development and production
  if (props.width === undefined || props.height === undefined) {
    console.error(`LazyImage component used without explicit 'width' and 'height' props. This will cause layout shifts. Please add them to the image with src: ${props.src}`);
    // Provide fallback dimensions to prevent extreme CLS
    props.width = props.width || 800;
    props.height = props.height || 600;
  }

  return (
    <div 
      style={{ 
        width: props.width, 
        height: props.height,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <img
        {...props}
        loading="lazy"
        style={{
          ...props.style,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
    </div>
  );
};

export default LazyImage; 