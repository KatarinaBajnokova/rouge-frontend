import React from 'react';
import { Text, Title } from '@mantine/core';
import { AddToBasketIconButton } from '../buttons/IconButtons';

export default function PurchaseBanner({ item, handleAddToBasket }) {
  return (
    <div className='purchase-banner'>
      <div className='purchase-banner__content'>
        <div className='purchase-banner__price'>
          <Text  fw={700}>
            Price:
          </Text>
          <Title order={2} mt={-6}>
            €{item.price.toFixed(2).replace('.', ',')}
          </Title>
        </div>

        <AddToBasketIconButton onClick={handleAddToBasket} />
      </div>
    </div>
  );
}
