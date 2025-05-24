import React, { useState, useEffect } from 'react';
import { safeJsonFetch } from '@/react/utils/fetchUtils';

import TrendingCard from '../components/cards/TrendingCard';
import '@/sass/components/cards/_trending_cards.scss';
import '@/sass/sections/_reorder_section.scss';

const ReorderSection = () => {
  const [looks, setLooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchReorders = async () => {
    try {
const data = await safeJsonFetch('/api/orders/reorder', {
  credentials: 'include',
});


      console.log('Fetched reorder items:', data);

      if (!Array.isArray(data)) {
        throw new Error(data?.error || 'Unexpected response');
      }

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
      console.error('❌ Reorder fetch failed:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchReorders();
}, []);

  const renderContent = () => {
    if (loading) return <p>Loading your past looks…</p>;
if (error?.toLowerCase()?.includes('not authenticated')) {
  return <p className="reorder-empty-msg">You need to log in to see your past purchases!</p>;
}
    if (looks.length === 0) {
      return <p className="reorder-empty-msg">You haven’t purchased any looks yet.</p>;
    }
    return (
      <div className="card-scroll-wrapper">
        {looks.map(look => (
          <TrendingCard key={look.id} look={look} showHeart={false} />
        ))}
      </div>
    );
  };

  return (
    <section className="home-section section-reorder">
      <div className="section-header">
        <h1>Reorder</h1>
        <p className="section-desc">Rediscover your past looks</p>
      </div>
      {renderContent()}
    </section>
  );
};

export default ReorderSection;
