import React, { useState, useEffect } from 'react';
import TrendingCard from '@/react/components/cards/TrendingCard';
import { safeJsonFetch } from '@/react/utils/fetchUtils';
import styles from './EverydaySection.module.scss';

const EverydaySection = () => {
  const [looks, setLooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    safeJsonFetch('/api/items?category_group=everyday')
      .then(data => {
        const formatted = data.map(item => ({
          id: item.id,
          title: item.name,
          category: item.category,
          level: item.level,
          price: item.price,
          image_url: item.image_url,
        }));
        setLooks(formatted);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className={`homeSection ${styles.sectionEveryday}`}>
      <div className={styles.sectionHeader}>
        <h1>Everyday</h1>
        <p>Your go-to kit for everyday glam</p>
      </div>

      {loading && <p>Loading cards…</p>}
      {error && <p className='error'>Error: {error}</p>}

      {!loading && !error && (
        <div className='cardScrollWrapper'>
          {looks.map(look => (
            <TrendingCard key={look.id} look={look} showHeart={true} />
          ))}
        </div>
      )}
    </section>
  );
};

export default EverydaySection;
