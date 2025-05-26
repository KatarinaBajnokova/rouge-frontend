import React from 'react';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

import '@/sass/styles.scss';

export function CheckoutButton(props) {
  return (
    <Button type='button' classNames={{ root: 'checkoutButton' }} {...props}>
      Check-out
    </Button>
  );
}

export function ConfirmPurchaseButton(props) {
  return (
    <Button
      type='button'
      classNames={{ root: 'confirmPurchaseButton' }}
      {...props}
    >
      Confirm Purchase
    </Button>
  );
}

export function LogInButton(props) {
  return (
    <Button type='button' classNames={{ root: 'logInButton' }} {...props}>
      Log in
    </Button>
  );
}

export function WhiteLogInButton(props) {
  return (
    <Button type='button' classNames={{ root: 'whiteLogInButton' }} {...props}>
      Log in
    </Button>
  );
}

export function SignUpButton(props) {
  return (
    <Button classNames={{ root: 'signUpButton' }} {...props}>
      {props.children || 'Sign up'}
    </Button>
  );
}

export function ContinueButton({ text = 'Continue', ...props }) {
  return (
    <Button type='button' classNames={{ root: 'continueButton' }} {...props}>
      {text}
    </Button>
  );
}

export function MoreInfoButton(props) {
  return (
    <Button type='button' classNames={{ root: 'moreInfoButton' }} {...props}>
      More info
    </Button>
  );
}

export function BottomBarButton(props) {
  return (
    <div className='bottomBar'>
      <ContinueButton {...props} />
    </div>
  );
}

export function BottomBarConfirmPurchaseButton(props) {
  return (
    <div className='bottomBar'>
      <ConfirmPurchaseButton {...props} />
    </div>
  );
}
