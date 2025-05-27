import SimpleCarousel from '@/react/components/carousel/Carousel';
import { BasketButton } from '@/react/components/buttons/BasketButton';
import styles from './HeroCarouselSection.module.scss';

const HeroCarouselSection = () => (
  <section className={`homeSection noPaddingBottom ${styles.sectionCarousel}`}>
    <div className={styles.carouselContainer}>
      <SimpleCarousel height='auto' />
      <div className={styles.basketWrapper}>
        <BasketButton />
      </div>
    </div>
  </section>
);

export default HeroCarouselSection;
