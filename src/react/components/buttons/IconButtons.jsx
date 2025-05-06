import React from 'react';
import { Button, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import '@/sass/components/buttons/_iconbuttons.scss';

import addToBasketIcon from '@/assets/icons/icon_basket_active.svg';
import seeReviewsIcon from '@/assets/icons/icon_see_reviews.svg';
import filterIcon from '@/assets/icons/icon_filter.svg';
import leaveReviewIcon from '@/assets/icons/icon_pen.svg';
import repurchaseIcon from '@/assets/icons/icon_basket_active.svg';
import continueWithFacebookIcon from '@/assets/icons/icon_facebook.svg';
import continueWithGoogleIcon from '@/assets/icons/icon_google.svg';
import continueWithAppleIcon from '@/assets/icons/icon_apple.svg';
import IconChevronLeft from '@tabler/icons-react/dist/esm/icons/iconChevronLeft';

export function AddToBasketIconButton({ onClick, ...props }) {
  return (
    <Button
      classNames={{ root: 'add-to-basket-icon-button' }}
      leftSection={
        <img
          src={addToBasketIcon}
          alt=''
          aria-hidden='true'
          width={16}
          height={16}
        />
      }
      onClick={onClick}
      {...props}
    >
      Add to basket
    </Button>
  );
}

export function SeeReviewsIconButton(props) {
  return (
    <Button
      classNames={{ root: 'see-reviews-icon-button' }}
      leftSection={
        <img
          src={seeReviewsIcon}
          alt=''
          aria-hidden='true'
          width={16}
          height={16}
        />
      }
      {...props}
    >
      See reviews
    </Button>
  );
}

export function FilterIconButton(props) {
  return (
    <Button
      classNames={{ root: 'filter-icon-button' }}
      leftSection={
        <img
          src={filterIcon}
          alt=''
          aria-hidden='true'
          width={25}
          height={25}
        />
      }
      {...props}
    >
      Filter
    </Button>
  );
}

export function LeaveAReviewIconButton(props) {
  return (
    <Button
      classNames={{ root: 'leave-a-review-icon-button' }}
      leftSection={
        <img
          src={leaveReviewIcon}
          alt=''
          aria-hidden='true'
          width={16}
          height={16}
        />
      }
      {...props}
    >
      Leave a review
    </Button>
  );
}

export function RepurchaseIconButton(props) {
  return (
    <Button
      classNames={{ root: 'repurchase-icon-button' }}
      leftSection={
        <img
          src={repurchaseIcon}
          alt=''
          aria-hidden='true'
          width={16}
          height={16}
        />
      }
      {...props}
    >
      Repurchase
    </Button>
  );
}

export function ContinueWithFacebookIconButton(props) {
  return (
    <Button
      classNames={{ root: 'continue-with-facebook-icon-button' }}
      leftSection={
        <img
          src={continueWithFacebookIcon}
          alt=''
          aria-hidden='true'
          width={16}
          height={16}
        />
      }
      {...props}
    >
      Continue with Facebook
    </Button>
  );
}

export function ContinueWithGoogleIconButton(props) {
  return (
    <Button
      classNames={{ root: 'continue-with-google-icon-button' }}
      leftSection={
        <img
          src={continueWithGoogleIcon}
          alt=''
          aria-hidden='true'
          width={16}
          height={16}
        />
      }
      {...props}
    >
      Continue with Google
    </Button>
  );
}

export function ContinueWithAppleIconButton(props) {
  return (
    <Button
      classNames={{ root: 'continue-with-apple-icon-button' }}
      leftSection={
        <img
          src={continueWithAppleIcon}
          alt=''
          aria-hidden='true'
          width={16}
          height={16}
        />
      }
      {...props}
    >
      Continue with Apple
    </Button>
  );
}

export function SeeMoreButton(props) {
  return (
    <Button classNames={{ root: 'see-more-button' }} {...props}>
      See more &gt;
    </Button>
  );
}

export function BackIconButton({ onClick, ...props }) {
  const navigate = useNavigate();

  const handleClick = e => {
    if (onClick) {
      onClick(e);
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      className='back-icon-button'
      onClick={handleClick}
      aria-label='Go back'
      {...props}
    >
      <IconChevronLeft size={20} stroke={2} />
    </button>
  );
}

export function BackHeader({ text, onBack, backButtonStyle }) {
  return (
    <div className='back-header'>
      <BackIconButton onClick={onBack} style={backButtonStyle} />
      <Title order={2}>{text}</Title>
    </div>
  );
}
