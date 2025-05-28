import React, { useEffect, useState } from 'react';
import {
  CheckoutButton,
  ConfirmPurchaseButton,
  LogInButton,
  WhiteLogInButton,
  SignUpButton,
  ContinueButton,
  MoreInfoButton,
  BottomBarButton,
} from '@/react/components/buttons/RedButtons';
import { BasketButton } from '@/react/components/buttons/BasketButton';
import {
  AddToBasketIconButton,
  SeeReviewsIconButton,
  FilterIconButton,
  LeaveAReviewIconButton,
  RepurchaseIconButton,
  ContinueWithFacebookIconButton,
  ContinueWithGoogleIconButton,
  ContinueWithAppleIconButton,
  SeeMoreButton,
} from '@/react/components/buttons/IconButtons';
import TrendingCard from '@/react/components/cards/TrendingCard';
import SimpleCarousel from '@/react/components/carousel/Carousel';
import OutlinedRating from '@/react/components/rating/Rating';
import FinalStepper from '@/react/components/stepper/Stepper';
import { safeJsonFetch } from '@/react/utils/fetchUtils';
import styles from './DesignSystem.module.scss'; 

export default function DesignSystem() {
  const [trending, setTrending] = useState([]);
  const [trendingLoading, setTrendingLoading] = useState(false)
  const [trendingError, setTrendingError] = useState(null)

  const [itemImages, setItemImages] = useState([]);
  const [imagesLoading, setImagesLoading] = useState(false);
  const [imagesError, setImagesError] = useState(null); 

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setTrendingLoading(true);
    setTrendingError(null);
    safeJsonFetch('/api/items?category_group=trending')
      .then(data => {
        const looks = Array.isArray(data.items) ? data.items : data;
        setTrending(looks);
      })
      .catch(err => setTrendingError(err.message))
      .finally(() => setTrendingLoading(false));
  }, []);

  const trendingItem =
    trending.length > 0
      ? trending[0]
      : {
          id: 1,
          name: 'Trendy Jacket',
          image_url: 'https://via.placeholder.com/200x250?text=Product+Image',
          category: 'Jackets',
          price: 59.99,
          level: 'Easy',
        };
 
  useEffect(() => {
    if (!trendingItem?.id) return;
    setImagesLoading(true);
    setImagesError(null);
    safeJsonFetch(`/api/items/${trendingItem.id}/images`)
      .then(data => setItemImages(Array.isArray(data) ? data : []))
      .catch(err => setImagesError(err.message))
      .finally(() => setImagesLoading(false));
  }, [trendingItem.id]);

  return (
    <div className={styles.designSystemContainer}>
      <h1 className={styles.pageTitle}>Design System</h1> 

      <section className={styles.sectionRedButtons}>
        <h2 className={styles.sectionTitle}>Simple Buttons</h2>
        <div className={styles.buttonRow}>
          <CheckoutButton />
          <ConfirmPurchaseButton />
          <LogInButton />
          <WhiteLogInButton />
          <SignUpButton />
          <ContinueButton />
          <MoreInfoButton />
        </div>
      </section>

      <section className={styles.sectionIconButtons}>
        <h2 className={styles.sectionTitle}>Icon Buttons</h2>
        <div className={styles.iconButtonRow}>
          <AddToBasketIconButton />
          <SeeReviewsIconButton />
          <FilterIconButton />
          <LeaveAReviewIconButton />
          <RepurchaseIconButton />
          <ContinueWithFacebookIconButton />
          <ContinueWithGoogleIconButton />
          <ContinueWithAppleIconButton />
          <SeeMoreButton />
        </div>
      </section>

      <section className={styles.sectionBasketButton}>
        <h2 className={styles.sectionTitle}>Basket Button</h2>
        <div className={styles.basketButtonInline}>
          <BasketButton />
        </div>
      </section>

      <section className={styles.sectionStepper}>
        <h2 className={styles.sectionTitle}>Stepper</h2>
        <div className={styles.stepperWrapper}>
          <FinalStepper active={1} />
        </div>
      </section>

      <section className={styles.sectionOutlinedRating}>
        <h2 className={styles.sectionTitle}>Rating</h2>
        <div className={styles.ratingWrapper}>
          <OutlinedRating
            value={3}
            readOnly
            fractions={10}
            size='lg'
            color='grape'
          />
        </div>
      </section>

      <section className={styles.sectionBottomBarButtons}>
        <h2 className={styles.sectionTitle}>Bottom Bar</h2>
        <div className={styles.bottomBarButtonWrapper}>
          <BottomBarButton />
        </div>
      </section>

      <section className={styles.sectionTrendingCards}>
        <h2 className={styles.sectionTitle}>Trending Cards</h2>
        {trendingLoading && (
          <p className={styles.statusLoading}>Loading trending items...</p>
        )}
        {trendingError && (
          <p className={styles.statusError}>Error: {trendingError}</p>
        )}
        {!trendingLoading && !trendingError && trending.length > 0 && (
          <div className={styles.trendingCardsGrid}>
            {trending.map(look => (
              <TrendingCard key={look.id} look={look} showHeart />
            ))}
          </div>
        )}
        {!trendingLoading && !trendingError && trending.length === 0 && (
          <p className={styles.statusNoItems}>No trending items found.</p>
        )}

      </section>

      <section className={styles.sectionSimpleCarousel}>
        <h2 className={styles.sectionTitle}>Simple Carousel</h2>
        <div className={styles.simpleCarouselWrapper}>
          <SimpleCarousel />
        </div>
      </section>
    </div>
  );
}