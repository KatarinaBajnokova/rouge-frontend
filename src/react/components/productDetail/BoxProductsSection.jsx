import React, { useState } from 'react';
import { Title, Text } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

export default function BoxProductsSection({ boxProducts }) {
  const [expanded, setExpanded] = useState(false);
  if (!boxProducts?.length) return null;

  const showItems = expanded ? boxProducts : boxProducts.slice(0, 2);

  return (
    <section className='detail-box-products'>
      <Title className='detail-title' order={3}>
        Box products
      </Title>

<div className={`box-products-wrapper ${expanded ? 'expanded' : ''}`}>
      <div className='box-products-list'>
        {showItems.map(box => (
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
      </div>

      {boxProducts.length > 2 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className='toggle-box-btn'
        >
          {expanded ? (
            <>
              <IconChevronUp size={20} />
              <span>Show less</span>
            </>
          ) : (
            <>
              <IconChevronDown size={20} />
              <span>Show more</span>
            </>
          )}
        </button>
      )}
    </section>
  );
}
