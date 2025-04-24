import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import InitialPage from './react/pages/InitialPage';
import DesignSystem from './react/pages/DesignSystem';
import AnimationPage from './react/pages/AnimationPage';
import HomeScreen from './react/pages/HomeScreen';
import ProductDetail from './react/pages/ProductDetail';
import BasketPage from './react/pages/BasketPage';
import CheckoutPage from './react/pages/CheckoutPage';
import SignUpPage from './react/pages/SignUpPage';
import LoginPage from './react/pages/LoginPage';
import PersonalLookPage from './react/pages/PersonalLookPage';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
