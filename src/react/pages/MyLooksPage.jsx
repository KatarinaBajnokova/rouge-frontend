import React from 'react';
import { useReorderLooks } from '@/react/hooks/useReorderLooks';
import TrendingCard from '@/react/components/cards/TrendingCard';
import '@/sass/pages/_my_looks_page.scss';
import Navbar from '../components/navbar/Navbar';

const MyLooksPage = () => {
  const { looks, loading, error } = useReorderLooks();

  if (loading) return <p className="centered">Loading your looks…</p>;
  if (error) return <p className="centered error">{error}</p>;
  if (looks.length === 0) return <p className="centered">No looks purchased yet.</p>;

  return (
    <div className="my-looks-page">
      <h1>My Looks</h1>
      <div className="looks-grid">
        {looks.map(look => (
          <TrendingCard key={look.id} look={look} showHeart={false} />
        ))}
      </div>

      <Navbar />
    </div>
    
  );
};

export default MyLooksPage;
