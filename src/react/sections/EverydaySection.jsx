import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <h1>Everyday</h1>
      <p className='section-desc'>Your go‑to kit for everyday glam</p>

      {loading && <p>Loading cards…</p>}
      {error && <p className='error'>Error: {error}</p>}

      {!loading && !error && (
        <div className='card-scroll-wrapper'>
          {looks.map(look => (
            <Link key={look.id} to={`/item/${look.id}`} className='card-link'>
              <TrendingCard look={look} showHeart={false} />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default EverydaySection;
