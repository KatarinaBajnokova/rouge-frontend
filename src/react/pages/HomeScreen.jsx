import React, { useState, useEffect } from 'react';
import HeroCarouselSection from '../sections/HeroCarouselSection';
import { BasketButton } from '../components/buttons/BasketButton';
import TrendingSection from '../sections/TrendingSection';
import EverydaySection from '../sections/EverydaySection';
import FormalSection from '../sections/FormalSection';
import ReorderSection from '../sections/ReorderSection';
import Navbar from '../components/navbar/Navbar';
import '@/sass/pages/_home_screen.scss';

import { useLocation } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';

const HomeScreen = () => {
  const [trendingLooks, setTrendingLooks] = useState([]);
  const [loadingTrending, setLoadingTrending] = useState(true);
  const [errorTrending, setErrorTrending] = useState(null);
  const location = useLocation();

  // 🔄 Fetch trending items
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

  // ✅ Show welcome message once after redirect
  useEffect(() => {
    if (location.state?.newUser) {
      showNotification({
        title: '🎉 Welcome!',
        message: 'Your account was created successfully!',
        color: 'green',
      });
    }
  }, [location.state]);

  return (
    <div className='home-screen'>
      <HeroCarouselSection />
      <TrendingSection />
      <EverydaySection />
      <FormalSection />
      <ReorderSection />
      <Navbar />
    </div>
  );
};

export default HomeScreen;
