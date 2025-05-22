import React from 'react';
import { Title, Text } from '@mantine/core';

export default function BoxProductsSection({ boxProducts }) {
  if (!boxProducts?.length) return null;

  return (
    <section className='detail-box-products'>
      <Title className='detail-title' order={3}>
        Box products
      </Title>
      <div className='box-products-list'>
        {boxProducts.map(box => (
          <div key={box.id} className='box-product-card'>
  <div className='box-product-card__img-wrapper'>
    <img
      src={box.image_url}
      alt={box.description}
      className='box-product-card__img'
    />
  </div>
  <div className='box-product-card__body'>
    <Text fw={700}>{box.title}</Text>
    <Text size='sm' color='dimmed' mt='xs'>
      {box.description}
    </Text>
  </div>
</div>

        ))}
      </div>
    </section>
  );
}
