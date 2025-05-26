import React from 'react';
import SimpleCarousel from '../components/carousel/Carousel/Carousel';
import { BasketButton } from '../components/buttons/basketbutton/BasketButton';
import styles from './HeroCarouselSection.module.scss';

const HeroCarouselSection = () => (
  <section className={`home-section ${styles.sectionCarousel}`}>
    <div className={styles.carouselContainer}>
      <SimpleCarousel height='auto' />
      <div className={styles.basketWrapper}>
        <BasketButton />
      </div>
    </div>
  </section>
);

export default HeroCarouselSection;
