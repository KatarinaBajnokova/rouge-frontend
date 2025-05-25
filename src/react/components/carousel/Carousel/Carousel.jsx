import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.scss';

import carousel1 from '../../../../assets/carousel/carousel1.svg';
import carousel2 from '../../../../assets/carousel/carousel2.svg';
import carousel3 from '../../../../assets/carousel/carousel3.svg';
import carousel4 from '../../../../assets/carousel/carousel4.svg';

const images = [carousel1, carousel2, carousel3, carousel4];

export default function SimpleCarousel({ height = 300, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className={styles.simpleCarousel} style={{ height }}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={styles.slide}
      />
    </div>
  );
}
