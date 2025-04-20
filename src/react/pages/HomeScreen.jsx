import React, { useState, useEffect } from 'react';
import SimpleCarousel from '../components/carousel/Carousel';
import { BasketButton } from '../components/buttons/BasketButton';
import TrendingSection from '../sections/TrendingSection';
import EverydaySection from '../sections/EverydaySection';
import FormalSection from '../sections/FormalSection';
import ReorderSection from '../sections/ReorderSection';
import Navbar from '../components/navbar/Navbar';
import '@/sass/pages/_home_screen.scss';

const HomeScreen = () => {
  const [trendingLooks, setTrendingLooks] = useState([]);
  const [loadingTrending, setLoadingTrending] = useState(true);
  const [errorTrending, setErrorTrending] = useState(null);

  useEffect(() => {
    fetch('/api/items?category_group=trending')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch trending');
        return res.json();
      })
      .then(data => setTrendingLooks(data))
      .catch(err => setErrorTrending(err.message))
      .finally(() => setLoadingTrending(false));
  }, []);

  return (
    <div className='home-screen'>
      {/* Section 1: Carousel + Basket */}
      <section className='home-section section-carousel'>
        <div className='carousel-container'>
          <SimpleCarousel />
          <div className='basket-wrapper'>
            <BasketButton />
          </div>
        </div>
      </section>

      {/* Section 2: Trending */}
      <TrendingSection
        looks={trendingLooks}
        loading={loadingTrending}
        error={errorTrending}
      />

      {/* Section 3: Everyday */}
      <EverydaySection />

      {/* Section 4: Formal */}
      <FormalSection />

      {/* Section 5: Reorder */}
      <ReorderSection />

      <Navbar />
    </div>
  );
};

export default HomeScreen;
