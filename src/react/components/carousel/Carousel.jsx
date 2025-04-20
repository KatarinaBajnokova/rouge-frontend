import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '@/sass/components/carousel/_carousel.scss';

import carousel1 from '@/assets/carousel/carousel1.svg';
import carousel2 from '@/assets/carousel/carousel2.svg';
import carousel3 from '@/assets/carousel/carousel3.svg';

const images = [carousel1, carousel2, carousel3];

const Carousel = ({ interval = 5000 }) => {
  const [current, setCurrent] = useState(0);
  const count = images.length;
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrent(prev => (prev + 1) % count),
      interval
    );
    return () => resetTimeout();
  }, [current, count, interval]);

  return (
    <div className='carousel'>
      <div
        className='carousel__track'
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div className='carousel__slide' key={idx}>
            <img src={src} alt={`Slide ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  interval: PropTypes.number,
};

export default Carousel;
