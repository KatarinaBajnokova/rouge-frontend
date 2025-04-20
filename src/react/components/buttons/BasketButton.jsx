// BasketButton.jsx
import React from 'react';
import basketIcon from '@/assets/icons/icon_basket_active.svg';
import '@/sass/components/buttons/_basketbutton.scss';

export function BasketButton() {
  return (
    <button type='button' className='basket-button' aria-label='Open basket'>
      <img
        src={basketIcon}
        alt='' // decorative, since the label covers semantics
        className='basket-button__icon'
      />
      <span className='basket-button__label'>Basket</span>
    </button>
  );
}
