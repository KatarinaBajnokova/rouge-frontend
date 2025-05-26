import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import { BasketButton } from '@/react/components/buttons/BasketButton';
import {
  FilterIconButton,
  BackHeader,
} from '@/react/components/buttons/IconButtons';

import TrendingCard from '@/react/components/cards/TrendingCard';
import SearchResults from '@/react/components/all/SearchResults';
import FilterModal from '@/react/pages/all/filtermodal/FilterModal';
import { useItems } from '@/react/hooks/useItems';

import styles from './ItemsPage.module.scss';

export default function ItemsPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [search, setSearch] = useState('');

  const {
    categoryId,
    subcategoryId = undefined,
    categoryName = '',
    subcategoryName = '',
  } = state || {};
  const flatMode = subcategoryId == null;

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    selectedOccasions: [],
    selectedDetailed: [],
    selectedDifficulties: [],
    priceRange: [0, 100],
  });

  const {
    data: filteredItems = [],
    isLoading,
    isError,
  } = useItems(categoryId, flatMode ? undefined : subcategoryId, filters);

  const mappedItems = filteredItems.map(item => ({
    ...item,
    title: item.name || item.title || 'Untitled',
  }));

  if (isLoading) return <div className={styles.itemsPage}>Loading…</div>;
  if (isError)
    return <div className={styles.itemsPage}>Error loading items</div>;

  // Common header
  const Header = () => (
    <div className={styles.headerWithBasket}>
      <BackHeader text={flatMode ? categoryName : subcategoryName} />
      <BasketButton />
    </div>
  );

  const SearchRow = () => (
    <>
      <div className={styles.searchWrapper}>
        <div className={styles.searchRow}>
          <div className={styles.customSearchBar}>
            <IconSearch size={18} className={styles.searchIcon} />
            <TextInput
              value={search}
              onChange={e => setSearch(e.currentTarget.value)}
              placeholder='Search…'
              variant='unstyled'
              className={styles.bareInput}
            />
          </div>
        </div>
      </div>
      <div className={styles.filterRow}>
        <FilterIconButton
          className={styles.filterButton}
          onClick={() => setIsFilterOpen(true)}
        />
      </div>
    </>
  );

  if (search.trim() !== '') {
    return (
      <div className={styles.itemsPage}>
        <Header />
        <SearchRow />

        <SearchResults query={search.trim()} />

        <FilterModal
          opened={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          initialValues={filters}
          onApply={newFilters => {
            setFilters(newFilters);
            setIsFilterOpen(false);
          }}
        />
      </div>
    );
  }

  return (
    <div className={styles.itemsPage}>
      <Header />
      <SearchRow />

      <FilterModal
        opened={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        initialValues={filters}
        onApply={newFilters => {
          setFilters(newFilters);
          setIsFilterOpen(false);
        }}
      />

      <div className={styles.itemsList}>
        {['natural', 'classic', 'bold'].map(key => {
          const group = mappedItems.filter(
            i => i.category.toLowerCase() === key
          );
          if (!group.length) return null;
          const label = key.charAt(0).toUpperCase() + key.slice(1);
          return (
            <div className={styles.itemsSection} key={key}>
              <h3 className={styles.sectionTitle}>{label}</h3>
              <div className={styles.sectionList}>
                {group.map(item => (
                  <TrendingCard key={item.id} look={item} showHeart={true} />
                ))}
              </div>
            </div>
          );
        })}

        {mappedItems.length === 0 && (
          <div className={styles.noItems}>
            {flatMode
              ? `No items found in ${categoryName}.`
              : `No items found in ${subcategoryName}.`}
          </div>
        )}
      </div>
    </div>
  );
}
