import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';

import HeroCarouselSection from '../sections/HeroCarouselSection';
import TrendingSection from '../sections/TrendingSection';
import EverydaySection from '../sections/EverydaySection';
import FormalSection from '../sections/FormalSection';
import ReorderSection from '../sections/ReorderSection';
import Navbar from '../components/navbar/Navbar';

import '@/sass/pages/_home_screen.scss';

export default function HomeScreen() {
  const [trendingLooks, setTrendingLooks] = useState([]);
  const [loadingTrending, setLoadingTrending] = useState(true);
  const [errorTrending, setErrorTrending] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    async function loadTrending() {
      try {
        const res = await fetch('/api/items?category_group=trending', {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error('Failed to fetch trending');
        }
        const data = await res.json();
        setTrendingLooks(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setErrorTrending(err.message);
        }
      } finally {
        setLoadingTrending(false);
      }
    }

    loadTrending();
    return () => controller.abort();
  }, []);

  const notifyWelcome = useCallback(() => {
    if (location.state?.newUser) {
      showNotification({
        title: '🎉 Welcome!',
        message: 'Your account was created successfully!',
        color: 'green',
      });
    }
  }, [location.state]);

  useEffect(() => {
    notifyWelcome();
  }, [notifyWelcome]);

  return (
    <div className='home-screen'>
      <HeroCarouselSection />

      <TrendingSection
        looks={trendingLooks}
        loading={loadingTrending}
        error={errorTrending}
      />

      <EverydaySection />
      <FormalSection />
      <ReorderSection />

      <Navbar />
    </div>
  );
}
