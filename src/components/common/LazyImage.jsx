import React, { useState } from 'react';
import { Box, Skeleton } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = ({ src, alt, height, width, style, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(true);
  };

  // Fallback image for errors
  const fallbackImage = 'https://via.placeholder.com/300x200?text=Image+Not+Available';

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: height || 'auto',
        overflow: 'hidden',
        ...style,
      }}
      {...props}
    >
      {!isLoaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          width="100%"
          height={height || '100%'}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            borderRadius: 1,
          }}
        />
      )}
      
      <LazyLoadImage
        src={error ? fallbackImage : src}
        alt={alt}
        effect="blur"
        threshold={200}
        width="100%"
        height={height || '100%'}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          objectFit: 'cover',
          transition: 'opacity 0.3s',
          opacity: isLoaded ? 1 : 0,
        }}
      />
    </Box>
  );
};

export default LazyImage;

