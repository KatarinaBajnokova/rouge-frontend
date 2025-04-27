import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './react/components/LoadingSpinner';

// lazy‐load your pages
const InitialPage = lazy(() => import('./react/pages/InitialPage'));
const DesignSystem = lazy(() => import('./react/pages/DesignSystem'));
const AnimationPage = lazy(() => import('./react/pages/AnimationPage'));
const HomeScreen = lazy(() => import('./react/pages/HomeScreen'));
const ProductDetail = lazy(() => import('./react/pages/ProductDetail'));
const BasketPage = lazy(() => import('./react/pages/BasketPage'));
const CheckoutPage = lazy(() => import('./react/pages/CheckoutPage'));
const SignUpPage = lazy(() => import('./react/pages/SignUpPage'));
const LoginPage = lazy(() => import('./react/pages/LoginPage'));
const PersonalLookPage = lazy(() => import('./react/pages/PersonalLookPage'));
const PersonalInfoPage = lazy(() => import('./react/pages/PersonalInfoPage'));
const ProfilePage = lazy(() => import('./react/pages/ProfilePage'));

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path='/' element={<InitialPage />} />
          <Route path='/design-system' element={<DesignSystem />} />
          <Route path='/animation' element={<AnimationPage />} />
          <Route path='/homescreen' element={<HomeScreen />} />
          <Route path='/item/:id' element={<ProductDetail />} />
          <Route path='/basket' element={<BasketPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/personal-look' element={<PersonalLookPage />} />
          <Route path='/personal-info' element={<PersonalInfoPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
