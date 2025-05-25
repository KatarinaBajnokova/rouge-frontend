import React from 'react';
import SimpleCarousel from '../components/carousel/Carousel/Carousel';
import { BasketButton } from '../components/buttons/basketbutton/BasketButton';
import '@/sass/sections/_hero_carousel_section.scss';

const HeroCarouselSection = () => (
  <section className='home-section section-carousel'>
    <div className='carousel-container'>
      <SimpleCarousel height='auto' />
      <div className='basket-wrapper'>
        <BasketButton />
      </div>
    </div>
  </section>
);

export default HeroCarouselSection;
