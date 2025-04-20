import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TrendingCard from '../components/cards/TrendingCard';
import '@/sass/sections/_trending_section.scss';

const TrendingSection = () => {
  const [looks, setLooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch('/api/items?category_group=trending');
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`HTTP ${res.status} — ${text}`);
        }
        const data = await res.json();
        setLooks(data);
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
    <section className='home-section section-two'>
      <h1>What's trending</h1>
      <p>Seasonal looks, holiday glam, and trending favorites!</p>

      {loading && <p>Loading cards...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && looks.length > 0 && (
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

      {!loading && !error && looks.length === 0 && (
        <p>No trending looks found.</p>
      )}
    </section>
  );
};

export default TrendingSection;
