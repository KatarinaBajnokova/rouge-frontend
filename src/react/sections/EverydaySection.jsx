import React, { useState, useEffect } from 'react';
import TrendingCard from '../components/cards/TrendingCard';
import '@/sass/components/cards/_trending_cards.scss';
import '@/sass/sections/_everyday_section.scss';

const EverydaySection = () => {
  const [looks, setLooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/items?category_group=everyday')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch everyday looks');
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
    <section className='home-section section-everyday'>
      <div className='section-header'>
        <h1>Everyday</h1>
        <p>Your go-to kit for everyday glam</p>
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

export default EverydaySection;
