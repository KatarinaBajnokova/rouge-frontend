import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './react/components/LoadingSpinner';
import { CheckoutProvider } from './react/contexts/CheckoutContext';

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
const ProfilePage = lazy(() => import('./react/pages/ProfilePage'));

import PersonalInfoPage from './react/pages/PersonalInfoPage';
import AddressPage from './react/pages/checkout/Adress';
import PersonalInformation from './react/pages/checkout/PersonalInformation';
import PaymentMethodPage from './react/pages/checkout/PaymentMethod';
import BuyingForFriendPage from './react/pages/checkout/BuyingForFriendPage';
import SummaryPage from './react/pages/checkout/SummaryPage';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  return (
    <BrowserRouter>
      <CheckoutProvider>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path='/' element={<InitialPage />} />
            <Route path='/design-system' element={<DesignSystem />} />
            <Route path='/animation' element={<AnimationPage />} />
            <Route path='/homescreen' element={<HomeScreen />} />
            <Route path='/item/:id' element={<ProductDetail />} />
            <Route path='/basket' element={<BasketPage />} />

            <Route path='/checkout' element={<CheckoutPage />} />
            <Route
              path='/checkout/payment-method'
              element={<PaymentMethodPage />}
            />
            <Route
              path='/checkout/friend-info'
              element={<BuyingForFriendPage />}
            />
            <Route path='/checkout/address' element={<AddressPage />} />
            <Route path='/checkout/summary' element={<SummaryPage />} />
            <Route
              path='/checkout/personal-info'
              element={<PersonalInformation />}
            />

            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/personal-look' element={<PersonalLookPage />} />
            <Route path='/personal-info' element={<PersonalInfoPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
        </Suspense>
      </CheckoutProvider>
    </BrowserRouter>
  );
}

export default App;
