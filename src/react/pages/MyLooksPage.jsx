import React, { useState } from 'react';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import { useReorderLooks } from '@/react/hooks/useReorderLooks';
import TrendingCard from '@/react/components/cards/TrendingCard';
import { BasketButton } from '@/react/components/buttons/BasketButton';
import Navbar from '@/react/components/navbar/Navbar';

import '@/sass/pages/_my_looks_page.scss';

const MyLooksPage = () => {
  const { looks, loading, error } = useReorderLooks();
  const [search, setSearch] = useState('');

  const filteredLooks = looks.filter(look =>
    look.title.toLowerCase().includes(search.toLowerCase())
  );

  const renderSearchBar = () => (
    <div className='search-wrapper'>
      <div className='search-row'>
        <div className='custom-search-bar'>
          <IconSearch size={18} className='search-icon' />
          <TextInput
            value={search}
            onChange={e => setSearch(e.currentTarget.value)}
            placeholder='Search your looks…'
            variant='unstyled'
            className='bare-input'
          />
        </div>
        <BasketButton />
      </div>
    </div>
  );

  return (
    <div className='my-looks-page'>
      {renderSearchBar()}

    <h2>Your purchases</h2>

      {loading && <p className='centered'>Loading your looks…</p>}
      {error && <p className='centered error'>{error}</p>}
      {!loading && !error && filteredLooks.length === 0 && (
        <p className='centered'>No looks match your search.</p>
      )}


      <div className='looks-grid'>
        {filteredLooks.map(look => (
          <TrendingCard key={look.id} look={look} showHeart={false} />
        ))}
      </div>

      <Navbar />
    </div>
  );
};

export default MyLooksPage;
