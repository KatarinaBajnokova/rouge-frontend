import React, { useState, useEffect } from 'react';
import TrendingCard from '../components/cards/TrendingCard';
import styles from './FormalSection.module.scss';

const FormalSection = () => {
  const [looks, setLooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/items?category_group=formal')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch formal looks');
        return res.json();
      })
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
    <section className={`home-section ${styles.sectionFormal}`}>
      <div className={styles.sectionHeader}>
        <h1>Formal</h1>
        <p className='section-desc'>Elegant taste for any formal setting</p>
      </div>

      {loading && <p>Loading cards…</p>}
      {error && <p className='error'>Error: {error}</p>}

      {!loading && !error && (
        <div className='card-scroll-wrapper'>
          {looks.map(look => (
            <TrendingCard key={look.id} look={look} showHeart={true} />
          ))}
        </div>
      )}
    </section>
  );
};

export default FormalSection;
