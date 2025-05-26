import React, { useState } from 'react';
import { Title, Text } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import styles from './BoxProductsSection.module.scss';

export default function BoxProductsSection({ boxProducts }) {
  const [expanded, setExpanded] = useState(false);
  if (!boxProducts?.length) return null;

  const showItems = expanded ? boxProducts : boxProducts.slice(0, 2);

  return (
    <section className={styles.detailBoxProducts}>
      <Title className={styles.detailTitle} order={3}>
        Box products
      </Title>

      <div
        className={`${styles.boxProductsWrapper} ${expanded ? styles.expanded : ''}`}
      >
        <div className={styles.boxProductsList}>
          {showItems.map(box => (
            <div key={box.id} className={styles.boxProductCard}>
              <div className={styles.boxProductCardImgWrapper}>
                <img
                  src={box.image_url}
                  alt={box.description}
                  className={styles.boxProductCardImg}
                />
              </div>
              <div className={styles.boxProductCardBody}>
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
          className={styles.toggleBoxBtn}
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
