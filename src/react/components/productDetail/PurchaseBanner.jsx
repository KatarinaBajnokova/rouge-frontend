import React from 'react';
import { Text } from '@mantine/core';
import { AddToBasketIconButton } from '../buttons/IconButtons';

export default function PurchaseBanner({ item, handleAddToBasket }) {
  return (
    <div className='purchase-banner'>
      <div className='purchase-banner__content'>
        <div className='purchase-banner__price'>
          <Text fw={500} size='sm'>
            Price:
          </Text>
          <Text fw={900} size='lg'>
            €{item.price.toFixed(2).replace('.', ',')}
          </Text>
        </div>
        <AddToBasketIconButton onClick={handleAddToBasket} />
      </div>
    </div>
  );
}
