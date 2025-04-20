import React from 'react';
import { Button } from '@mantine/core';
import '@/sass/components/buttons/_redbuttons.scss';

export function CheckoutButton(props) {
  return (
    <Button type='button' classNames={{ root: 'checkout-button' }} {...props}>
      Check-out
    </Button>
  );
}

export function ConfirmPurchaseButton(props) {
  return (
    <Button
      type='button'
      classNames={{ root: 'confirm-purchase-button' }}
      {...props}
    >
      Confirm Purchase
    </Button>
  );
}

export function LogInButton(props) {
  return (
    <Button type='button' classNames={{ root: 'log-in-button' }} {...props}>
      Log in
    </Button>
  );
}

export function WhiteLogInButton(props) {
  return (
    <Button
      type='button'
      classNames={{ root: 'white-log-in-button' }}
      {...props}
    >
      Log in
    </Button>
  );
}

export function SignUpButton(props) {
  return (
    <Button type='button' classNames={{ root: 'sign-up-button' }} {...props}>
      Sign up
    </Button>
  );
}

export function ContinueButton(props) {
  return (
    <Button type='button' classNames={{ root: 'continue-button' }} {...props}>
      Continue
    </Button>
  );
}

export function MoreInfoButton(props) {
  return (
    <Button type='button' classNames={{ root: 'more-info-button' }} {...props}>
      More info
    </Button>
  );
}
