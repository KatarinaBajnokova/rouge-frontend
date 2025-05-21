import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoadingSpinner from '@/react/components/ui/LoadingSpinner';
import { CheckoutProvider } from '@/react/contexts/CheckoutContext';
import { AuthProvider, useAuth } from '@/react/hooks/useAuth';

const InitialPage = lazy(() => import('@/react/pages/InitialPage'));
const DesignSystem = lazy(() => import('@/react/pages/DesignSystem'));
const AnimationPage = lazy(() => import('@/react/pages/AnimationPage'));
const HomeScreen = lazy(() => import('@/react/pages/HomeScreen'));
const ProductDetail = lazy(() => import('@/react/pages/ProductDetail'));
const ReviewsPage = lazy(
  () => import('@/react/pages/product_detail/ReviewsPage')
);
const BasketPage = lazy(() => import('@/react/pages/BasketPage'));

const SignUpPage = lazy(() => import('@/react/pages/signup/SignUpPage'));
const LoginPage = lazy(() => import('@/react/pages/LoginPage'));
const PersonalLookPage = lazy(
  () => import('@/react/pages/signup/PersonalLookPage')
);
const ProfilePage = lazy(() => import('@/react/pages/ProfilePage'));

const Categories = lazy(() => import('@/react/pages/all/Categories'));
const Subcategories = lazy(() => import('@/react/pages/all/Subcategories'));
const ItemsPage = lazy(() => import('@/react/pages/all/ItemsPage'));
const FilteredResultsPage = lazy(
  () => import('@/react/pages/all/FilteredResultsPage')
);

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

function ProtectedRoutes({ children, redirectTo = '/login' }) {
  const { userId, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <p>Checking authentication…</p>
      </div>
    );
  }
  if (!userId) {
    console.warn(`User not authenticated, redirecting to ${redirectTo}...`);
    return <Navigate to={redirectTo} replace />;
  }
  return children;
}

function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Core */}
        <Route path='/' element={<InitialPage />} />
        <Route path='/design-system' element={<DesignSystem />} />
        <Route path='/animation' element={<AnimationPage />} />
        <Route path='/homescreen' element={<HomeScreen />} />
        <Route path='/item/:id' element={<ProductDetail />} />
        <Route path='/item/:id/reviews' element={<ReviewsPage />} />

        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/basket' element={<BasketPage />} />
        <Route
          path='/checkout/personal-info'
          element={<PersonalInformation />}
        />

        {/* Protected Routes */}
        <Route
          path='/checkout/payment-method'
          element={
            <ProtectedRoutes>
              <PaymentMethodPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path='/checkout/friend-info'
          element={
            <ProtectedRoutes>
              <BuyingForFriendPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path='/checkout/address'
          element={
            <ProtectedRoutes>
              <AddressPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path='/checkout/summary'
          element={
            <ProtectedRoutes>
              <SummaryPage />
            </ProtectedRoutes>
          }
        />

        <Route
          path='/personal-look'
          element={
            <ProtectedRoutes>
              <PersonalLookPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path='/personal-info'
          element={
            <ProtectedRoutes>
              <PersonalInfoPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoutes redirectTo='/login?from=profile'>
              <ProfilePage />
            </ProtectedRoutes>
          }
        />

        {/* NEW: Filtered‐results */}
        <Route path='/filtered' element={<FilteredResultsPage />} />

        {/* Category listing */}
        <Route path='/all' element={<Categories />} />

        {/* Flat‐mode items */}
        <Route path='/categories/:categoryId/items' element={<ItemsPage />} />

        {/* Subcategories */}
        <Route path='/categories/:categoryId' element={<Subcategories />} />

        {/* Subcategory items */}
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
    <BrowserRouter>
      <AuthProvider>
        <CheckoutProvider>
          <AppRoutes />
        </CheckoutProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
