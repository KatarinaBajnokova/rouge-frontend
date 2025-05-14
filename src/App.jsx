import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingSpinner from '@/react/components/ui/LoadingSpinner';
import { CheckoutProvider } from '@/react/contexts/CheckoutContext';
import { AuthProvider, useAuth } from '@/react/hooks/useAuth';

const InitialPage = lazy(() => import('@/react/pages/InitialPage'));
const DesignSystem = lazy(() => import('@/react/pages/DesignSystem'));
const AnimationPage = lazy(() => import('@/react/pages/AnimationPage'));
const HomeScreen = lazy(() => import('@/react/pages/HomeScreen'));
const ProductDetail = lazy(() => import('@/react/pages/ProductDetail'));
const BasketPage = lazy(() => import('@/react/pages/BasketPage'));

const SignUpPage = lazy(() => import('@/react/pages/signup/SignUpPage'));
const LoginPage = lazy(() => import('@/react/pages/LoginPage'));
const PersonalLookPage = lazy(() => import('@/react/pages/signup/PersonalLookPage'));
const ProfilePage = lazy(() => import('@/react/pages/ProfilePage'));

const Categories = lazy(() => import('@/react/pages/all/Categories'));
const Subcategories = lazy(() => import('@/react/pages/all/Subcategories'));
const ItemsPage = lazy(() => import('@/react/pages/all/ItemsPage'));

import PersonalInfoPage from '@/react/pages/signup/PersonalInfoPage';
import AddressPage from '@/react/pages/checkout/Adress';
import PersonalInformation from '@/react/pages/checkout/PersonalInformation';
import PaymentMethodPage from '@/react/pages/checkout/PaymentMethod';
import BuyingForFriendPage from '@/react/pages/checkout/BuyingForFriendPage';
import SummaryPage from '@/react/pages/checkout/SummaryPage';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function AppRoutes() {
  const { loading } = useAuth(); // ✅ Loading handling

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Core */}
        <Route path='/' element={<InitialPage />} />
        <Route path='/design-system' element={<DesignSystem />} />
        <Route path='/animation' element={<AnimationPage />} />
        <Route path='/homescreen' element={<HomeScreen />} />
        <Route path='/item/:id' element={<ProductDetail />} />
        <Route path='/basket' element={<BasketPage />} />

        {/* Checkout */}
        <Route path='/checkout/payment-method' element={<PaymentMethodPage />} />
        <Route path='/checkout/friend-info' element={<BuyingForFriendPage />} />
        <Route path='/checkout/address' element={<AddressPage />} />
        <Route path='/checkout/summary' element={<SummaryPage />} />
        <Route path='/checkout/personal-info' element={<PersonalInformation />} />

        {/* Auth & Profile */}
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/personal-look' element={<PersonalLookPage />} />
        <Route path='/personal-info' element={<PersonalInfoPage />} />
        <Route path='/profile' element={<ProfilePage />} />

            {/* Category listing */}
            <Route path='/all' element={<Categories />} />

            {/* ─── Spotlight / flat categories ─── */}
            {/* Flat items for categories with no subcategories */}
            <Route
              path='/categories/:categoryId/items'
              element={<ItemsPage />}
            />

            {/* Drill-down into subcategories */}
            <Route path='/categories/:categoryId' element={<Subcategories />} />

            {/* Items within a real subcategory */}
            <Route
              path='/categories/:categoryId/subcategories/:subcategoryId/items'
              element={<ItemsPage />}
            />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <CheckoutProvider>
          <AppRoutes />
        </CheckoutProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
