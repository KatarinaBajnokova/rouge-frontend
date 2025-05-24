import React, { useState, useEffect } from 'react';
import TrendingCard from '../components/cards/TrendingCard';
import { safeJsonFetch } from '@/react/utils/fetchUtils';

import '@/sass/components/cards/_trending_cards.scss';
import '@/sass/sections/_formal_section.scss';

const FormalSection = () => {
  const [looks, setLooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  safeJsonFetch('/api/items?category_group=formal')
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
    <section className='home-section section-formal'>
      <div className='section-header'>
        <h1>Formal</h1>
        <p className='section-desc'>Elegant taste for any formal setting</p>
      </div>

      {loading && <p>Loading cards…</p>}
      {error && <p className='error'>Error: {error}</p>}

      {!loading && !error && (
        <div className='card-scroll-wrapper'>
          {looks.map(look => (
            <TrendingCard key={look.id} look={look} showHeart={false} />
          ))}
        </div>
      )}
    </section>
  );
};

export default FormalSection;
