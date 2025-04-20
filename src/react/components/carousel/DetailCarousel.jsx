import React, { useState, useEffect } from 'react';
import { Carousel } from '@mantine/carousel';
import { Text } from '@mantine/core';
import '@/sass/components/carousel/_detail_carousel.scss';

export default function DetailCarousel({ itemId }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/items/${itemId}`)
      .then(res => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        return res.json();
      })
      .then(data => setImages(data.images || []))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <Text>Loading images…</Text>;
  if (error) return <Text color='red'>Error: {error}</Text>;
  if (!images.length) return <Text>No images available.</Text>;

  return (
    <Carousel
      /* keep dots, but hide arrows */
      withControls={false}
      height={300}
      slideSize='50%'
      slideGap={0}
      align='start'
      breakpoints={[
        { maxWidth: 'sm', slideSize: '100%' }, // one slide on small screens
      ]}
    >
      {images.map((url, idx) => (
        <Carousel.Slide key={idx}>
          <img
            src={url}
            alt={`Slide ${idx + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
