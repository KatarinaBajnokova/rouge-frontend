import React from 'react';
import { MantineProvider, Group } from '@mantine/core';
import { Stepper } from '@mantine/core';

import {
  CheckoutButton,
  ConfirmPurchaseButton,
  LogInButton,
  SignUpButton,
  ContinueButton,
  MoreInfoButton,
  BottomBarButton,
} from '@/react/components/buttons/RedButtons';

import {
  BackIconButton,
  BackHeader,
  AddToBasketIconButton,
  SeeReviewsIconButton,
  FilterIconButton,
  LeaveAReviewIconButton,
  RepurchaseIconButton,
  ContinueWithFacebookIconButton,
  ContinueWithGoogleIconButton,
  ContinueWithAppleIconButton,
} from '@/react/components/buttons/IconButtons';
import { BasketButton } from '@/react/components/buttons/BasketButton';
import AllCategoryItem from '@/react/pages/all/categoryitem/AllCategoryItem';

const DesignSystem = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div style={{ padding: '2rem' }}>
        <h1>Design System</h1>

        <h2>Text Buttons</h2>
        <Group direction='column' spacing='md'>
          <CheckoutButton />
          <ConfirmPurchaseButton />
          <LogInButton />
          <SignUpButton />
          <ContinueButton />
          <MoreInfoButton />
        </Group>

        <h2>Icon Buttons</h2>
        <Group direction='column' spacing='md' mt='xl'>
          <AddToBasketIconButton />
          <SeeReviewsIconButton />
          <FilterIconButton />
          <LeaveAReviewIconButton />
          <RepurchaseIconButton />
          <ContinueWithFacebookIconButton />
          <ContinueWithGoogleIconButton />
          <ContinueWithAppleIconButton />
        </Group>

        <h2>Category component</h2>
        <AllCategoryItem
          label='Everyday'
          //onClick={() => navigate('/category/everyday')}
        />

        <h2>Basket Button</h2>
        <Group mt='xl'>
          <BasketButton />
        </Group>

        <h2>Stepper</h2>
        <Stepper />

        <h2>Back button</h2>
        <BackIconButton
          style={{
            position: 'relative',
            marginTop: '0px',
            marginBottom: '16px',
          }}
        />
        <BackHeader text='Section title' />

        <h2>Bottom bar</h2>
        <BottomBarButton />
      </div>
    </MantineProvider>
  );
};

export default DesignSystem;
