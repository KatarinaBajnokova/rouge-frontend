// src/react/pages/all/ItemsPage.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import { BasketButton } from '@/react/components/buttons/BasketButton';
import {
  FilterIconButton,
  BackIconButton,
} from '@/react/components/buttons/IconButtons';

import TrendingCard from '@/react/components/cards/TrendingCard';
import SearchResults from '@/react/components/all/SearchResults';
import FilterModal from '@/react/components/all/FilterModal';
import { useItems } from '@/react/hooks/useItems';

import '@/sass/pages/all/_items_page.scss';

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

  if (isLoading) return <div className='items-page'>Loading…</div>;
  if (isError) return <div className='items-page'>Error loading items</div>;

  // Common header
  const Header = () => (
    <div className='header-wrapper'>
      <BackIconButton onClick={() => navigate(-1)} />
      <div className='titles'>
        <h2>{flatMode ? categoryName : subcategoryName}</h2>
      </div>
      <BasketButton />
    </div>
  );

  // Common search + filter
  const SearchRow = () => (
    <>
      <div className='search-wrapper'>
        <TextInput
          className='search-bar'
          placeholder='Search…'
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
          leftSection={!search && <IconSearch size={18} />}
          radius='md'
          size='md'
        />
        <BasketButton />
      </div>
      <div className='filter-row'>
        <FilterIconButton
          className='filter-button'
          onClick={() => setIsFilterOpen(true)}
        />
      </div>
    </>
  );

  if (search.trim() !== '') {
    return (
      <div className='items-page'>
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

  // the “flat” / normal listing
  return (
    <div className='items-page'>
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

      <div className='items-list'>
        {['natural', 'classic', 'bold'].map(key => {
          const group = filteredItems.filter(
            i => i.category.toLowerCase() === key
          );
          if (!group.length) return null;
          const label = key.charAt(0).toUpperCase() + key.slice(1);
          return (
            <div className='items-section' key={key}>
              <h3 className='section-title'>{label}</h3>
              <div className='section-list'>
                {group.map(item => (
                  <TrendingCard key={item.id} look={item} showHeart={false} />
                ))}
              </div>
            </div>
          );
        })}

        {filteredItems.length === 0 && (
          <div className='no-items'>
            {flatMode
              ? `No items found in ${categoryName}.`
              : `No items found in ${subcategoryName}.`}
          </div>
        )}
      </div>
    </div>
  );
}
