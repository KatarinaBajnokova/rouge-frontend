import React, { useState, useEffect } from 'react';
import { Carousel } from '@mantine/carousel';
import { Text } from '@mantine/core';
import { safeJsonFetch } from '@/react/utils/fetchUtils';
import styles from './DetailCarousel.module.scss';

export default function DetailCarousel({ itemId }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadedIndexes, setLoadedIndexes] = useState([]);

  useEffect(() => {
    safeJsonFetch(`/api/items/${itemId}`)
      .then(data => {
        const imageArray = Array.isArray(data.images) ? data.images : [];
        setImages(imageArray);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [itemId]);

  const handleImageLoad = index => {
    setLoadedIndexes(prev => [...prev, index]);
  };

  if (loading) return <Text>Loading images…</Text>;
  if (error) return <Text color='red'>Error: {error}</Text>;
  if (!images || images.length === 0) return <Text>No images available.</Text>;

  return (
    <Carousel
      withControls={false}
      height={300}
      slideSize='50%'
      slideGap={0}
      align='start'
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%' }]}
    >
      {images.map((image, idx) => (
        <Carousel.Slide key={image.id || idx}>
          <div className={styles.carouselImageWrapper}>
            {!loadedIndexes.includes(idx) && (
              <div className={styles.imageSkeleton} />
            )}
            <img
              src={image.url}
              alt={`Slide ${idx + 1}`}
              loading='lazy'
              onLoad={() => handleImageLoad(idx)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: loadedIndexes.includes(idx) ? 1 : 0,
                transition: 'opacity 0.3s ease',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            />
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
