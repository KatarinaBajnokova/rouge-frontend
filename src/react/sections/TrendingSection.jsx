import React, { useEffect, useState } from 'react';
import TrendingCard from '@/react/components/cards/TrendingCard';
import { safeJsonFetch } from '@/react/utils/fetchUtils';
import styles from './TrendingSection.module.scss';

const TrendingSection = () => {
  const [looks, setLooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await safeJsonFetch('/api/items?category_group=trending');
        const formatted = data.map(item => ({
          id: item.id,
          title: item.name,
          category: item.category,
          level: item.level,
          price: item.price,
          image_url: item.image_url,
        }));
        setLooks(formatted);
      } catch (err) {
        console.error('fetchTrending error →', err);
        setError(`Failed to fetch trending looks (${err.message})`);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return (
    <section className={`home-section ${styles.sectionTwo}`}>
      <div className={styles.sectionHeader}>
        <h1>What's trending</h1>
        <p className='section-desc'>
          Seasonal looks, holiday glam, and trending favorites!
        </p>
      </div>

      {loading && <p>Loading cards...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && looks.length > 0 && (
        <div className='card-scroll-wrapper'>
          {looks.map(look => (
            <TrendingCard key={look.id} look={look} showHeart={true} />
          ))}
        </div>
      )}

      {!loading && !error && looks.length === 0 && (
        <p>No trending looks found.</p>
      )}
    </section>
  );
};

export default TrendingSection;
