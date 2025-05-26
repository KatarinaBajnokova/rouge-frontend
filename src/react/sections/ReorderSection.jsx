import React from 'react';
import { useReorderLooks } from '@/react/hooks/useReorderLooks';

import TrendingCard from '@/react/components/cards/TrendingCard.jsx';

import '@/sass/sections/_reorder_section.scss';

const ReorderSection = () => {
  const { looks, loading, error } = useReorderLooks();

  const renderContent = () => {
    if (loading) return <p>Loading your past looks…</p>;
    if (
      typeof error === 'string' &&
      (error.toLowerCase().includes('not authenticated') ||
        error.includes('401'))
    ) {
      return (
        <p className='reorder-empty-msg'>
          You need to log in to see your past purchases!
        </p>
      );
    }

    if (looks.length === 0) {
      return (
        <p className='reorder-empty-msg'>
          You haven’t purchased any looks yet.
        </p>
      );
    }

    return (
      <div className='card-scroll-wrapper'>
        {looks.map(look => (
          <TrendingCard key={look.id} look={look} showHeart={true} />
        ))}
      </div>
    );
  };

  return (
    <section className='home-section section-reorder'>
      <div className='section-header'>
        <h1>Reorder</h1>
        <p className='section-desc'>Rediscover your past looks</p>
      </div>
      {renderContent()}
    </section>
  );
};

export default ReorderSection;
