import React, { useState } from 'react';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import { useReorderLooks } from '@/react/hooks/useReorderLooks';
import TrendingCard from '@/react/components/cards/TrendingCard';
import { BasketButton } from '@/react/components/buttons/BasketButton';
import Navbar from '@/react/components/navbar/Navbar';

import styles from './MyLooksPage.module.scss';

const MyLooksPage = () => {
  const { looks = [], loading, error } = useReorderLooks();
  const [search, setSearch] = useState('');
  const mappedLooks = looks.map(look => ({
    ...look,
    title: look.title || look.name || 'Untitled',
  }));
  const filteredLooks = mappedLooks.filter(look =>
    look.title.toLowerCase().includes(search.toLowerCase())
  );

  const renderSearchBar = () => (
    <div className={styles.searchWrapper}>
      <div className={styles.searchRow}>
        <div className={styles.customSearchBar}>
          <IconSearch size={18} className={styles.searchIcon} />
          <TextInput
            value={search}
            onChange={e => setSearch(e.currentTarget.value)}
            placeholder='Search your looks…'
            variant='unstyled'
            className={styles.bareInput}
          />
        </div>
        <div className={styles.basketButton}>
          <BasketButton />
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.myLooksPage}>
      {renderSearchBar()}

      <h2>Your purchases</h2>

      {loading && <p className={styles.centered}>Loading your looks…</p>}
      {error && <p className={`${styles.centered} ${styles.error}`}>{error}</p>}
      {!loading && !error && filteredLooks.length === 0 && (
        <p className={styles.centered}>No looks match your search.</p>
      )}

      <div className={styles.looksGrid}>
        {filteredLooks.map(look => (
          <TrendingCard
            key={look.id}
            look={look}
            showHeart={true}
            variant='compact'
          />
        ))}
      </div>

      <Navbar />
    </div>
  );
};

export default MyLooksPage;
