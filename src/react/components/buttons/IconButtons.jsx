import { Button, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import '@/sass/styles.scss';

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
      classNames={{ root: 'addToBasketIconButton' }}
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

export function SeeReviewsIconButton({ onClick, ...props }) {
  return (
    <Button
      classNames={{ root: 'seeReviewsIconButton' }}
      leftSection={
        <img
          src={seeReviewsIcon}
          alt=''
          aria-hidden='true'
          width={16}
          height={16}
        />
      }
      onClick={onClick}
      {...props}
    >
      See reviews
    </Button>
  );
}

export function FilterIconButton({ onClick, ...props }) {
  return (
    <Button
      classNames={{ root: 'filterIconButton' }}
      leftSection={
        <img
          src={filterIcon}
          alt=''
          aria-hidden='true'
          width={25}
          height={25}
        />
      }
      onClick={onClick}
      {...props}
    >
      Filter
    </Button>
  );
}

export function LeaveAReviewIconButton({ onClick, ...props }) {
  return (
    <div className='leaveReviewWrapper'>
      <Button
        classNames={{ root: 'leaveAReviewIconButton' }}
        leftSection={
          <img
            src={leaveReviewIcon}
            alt=''
            aria-hidden='true'
            width={16}
            height={16}
          />
        }
        onClick={onClick}
        {...props}
      >
        Leave a review
      </Button>
    </div>
  );
}

export function RepurchaseIconButton({ onClick, ...props }) {
  return (
    <Button
      classNames={{ root: 'repurchaseIconButton' }}
      leftSection={
        <img
          src={repurchaseIcon}
          alt=''
          aria-hidden='true'
          width={16}
          height={16}
        />
      }
      onClick={onClick}
      {...props}
    >
      Repurchase
    </Button>
  );
}

export function ContinueWithFacebookIconButton({ onClick, ...props }) {
  return (
    <Button
      classNames={{ root: 'continueWithFacebookIconButton' }}
      leftSection={
        <img
          src={continueWithFacebookIcon}
          alt=''
          aria-hidden='true'
          width={16}
          height={16}
        />
      }
      onClick={onClick}
      {...props}
    >
      Continue with Facebook
    </Button>
  );
}

export function ContinueWithGoogleIconButton({ onClick, ...props }) {
  return (
    <Button
      classNames={{ root: 'continueWithGoogleIconButton' }}
      leftSection={
        <img
          src={continueWithGoogleIcon}
          alt=''
          aria-hidden='true'
          width={16}
          height={16}
        />
      }
      onClick={onClick}
      {...props}
    >
      Continue with Google
    </Button>
  );
}

export function ContinueWithAppleIconButton({ onClick, ...props }) {
  return (
    <Button
      classNames={{ root: 'continueWithAppleIconButton' }}
      leftSection={
        <img
          src={continueWithAppleIcon}
          alt=''
          aria-hidden='true'
          width={16}
          height={16}
        />
      }
      onClick={onClick}
      {...props}
    >
      Continue with Apple
    </Button>
  );
}

export function SeeMoreButton({ onClick, ...props }) {
  return (
    <Button classNames={{ root: 'seeMoreButton' }} onClick={onClick} {...props}>
      See more &gt;
    </Button>
  );
}

export function BackIconButton({ onClick, className = '', ...props }) {
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
      className={`backIconButton ${className}`.trim()}
      onClick={handleClick}
      aria-label='Go back'
      {...props}
    >
      <IconChevronLeft size={33} stroke={2} />
    </button>
  );
}


export function BackHeader({ text, onBack, backButtonStyle, className = '' }) {
  return (
    <div className={`backHeader ${className}`.trim()}>
      <BackIconButton onClick={onBack} style={backButtonStyle} />
      <Title order={2}>{text}</Title>
    </div>
  );
}

