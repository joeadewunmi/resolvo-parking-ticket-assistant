import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fetchPriority?: 'high' | 'low' | 'auto';
}

const Image: React.FC<ImageProps> = ({
  loading = 'lazy',
  fetchPriority = 'auto',
  ...props
}) => {
  if (process.env.NODE_ENV === 'development' && (!props.width || !props.height)) {
    console.warn(`Image component without explicit 'width' and 'height' props, src: ${props.src}`);
  }

  return (
    <img
      loading={loading}
      fetchPriority={fetchPriority}
      {...props}
    />
  );
};

export default Image; 