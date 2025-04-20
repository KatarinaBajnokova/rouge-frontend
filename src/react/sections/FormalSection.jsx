import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TrendingCard from '../components/cards/TrendingCard';
import '@/sass/components/cards/_trending_cards.scss'; // for .card-scroll-wrapper
import '@/sass/sections/_everyday_section.scss'; // reuse section styles

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
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className='home-section section-formal'>
      <h1>Formal</h1>
      <p>Elegant taste for any formal setting</p>

      {loading && <p>Loading cards...</p>}
      {error && <p className='error'>Error: {error}</p>}

      {!loading && !error && (
        <div className='card-scroll-wrapper'>
          {looks.map(look => (
            <Link
              to={`/item/${look.id}`}
              key={look.id}
              className='card-link'
              style={{ textDecoration: 'none' }}
            >
              <TrendingCard look={look} showHeart={false} />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default FormalSection;
