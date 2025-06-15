import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fetchPriority?: 'high' | 'low' | 'auto';
}

const Image: React.FC<ImageProps> = ({
  width,
  height,
  style,
  ...props
}) => {
  const aspectRatio = width && height ? Number(width) / Number(height) : undefined;

  return (
    <div
      style={{
        width,
        height,
        aspectRatio,
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      <img
        width={width}
        height={height}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        {...props}
      />
    </div>
  );
};

export default Image; 