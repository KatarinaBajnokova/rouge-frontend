import React from 'react';
import Carousel from '../components/carousel/Carousel';
import { BasketButton } from '../components/buttons/BasketButton';
import '@/sass/sections/_hero_carousel_section.scss';

const HeroCarouselSection = () => {
  return (
    <section className='home-section section-carousel'>
      <div className='carousel-container'>
        <Carousel />
        <div className='basket-wrapper'>
          <BasketButton />
        </div>
      </div>
    </section>
  );
};

export default HeroCarouselSection;
