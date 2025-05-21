// src/react/pages/all/FilteredResultsPage.jsx
import React, { useState, useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TextInput, Center, Loader, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import { BasketButton } from '@/react/components/buttons/BasketButton';
import {
  BackIconButton,
  FilterIconButton,
} from '@/react/components/buttons/IconButtons';
import TrendingCard from '@/react/components/cards/TrendingCard';
import FilterModal from '@/react/components/all/FilterModal';
import SearchResults from '@/react/components/all/SearchResults';
import { useItems } from '@/react/hooks/useItems';

import '@/sass/pages/all/_filtered_results.scss';

export default function FilteredResultsPage() {
  const navigate = useNavigate();
  const { search: rawSearch, pathname } = useLocation();
  const params = useMemo(() => new URLSearchParams(rawSearch), [rawSearch]);

  const [isFilterOpen, setFilterOpen] = useState(false);
  const initialFilters = useMemo(
    () => ({
      selectedOccasions:
        params.get('occasions')?.split(',').filter(Boolean) ?? [],
      selectedDetailed:
        params.get('detailed')?.split(',').filter(Boolean) ?? [],
      selectedDifficulties:
        params.get('difficulties')?.split(',').filter(Boolean) ?? [],
      priceRange: [
        Number(params.get('minPrice') ?? 0),
        Number(params.get('maxPrice') ?? 0),
      ],
    }),
    [params]
  );

  const [filters, setFilters] = useState(initialFilters);
  const [search, setSearch] = useState(params.get('q') ?? '');

  const handleSearch = useCallback(
    value => {
      setSearch(value);
      const qs = new URLSearchParams(params);
      value ? qs.set('q', value) : qs.delete('q');
      navigate(`${pathname}${qs.toString() ? `?${qs}` : ''}`);
    },
    [navigate, pathname, params]
  );

  const {
    data: items = [],
    isLoading,
    isError,
  } = useItems(undefined, undefined, filters);

  const categories = useMemo(() => ['natural', 'classic', 'bold'], []);
  const grouped = useMemo(
    () =>
      categories.map(key => {
        const list = items.filter(i => i.category.toLowerCase() === key);
        return { key, label: key[0].toUpperCase() + key.slice(1), list };
      }),
    [items, categories]
  );

  if (isLoading) {
    return (
      <Center style={{ height: 300 }}>
        <Loader size='lg' />
      </Center>
    );
  }

  if (isError) {
    return (
      <Center style={{ height: 300 }}>
        <Text color='red'>Error loading filtered results</Text>
      </Center>
    );
  }

  if (search.trim()) {
    return (
      <div className='filtered-results-page'>
        <header className='header-wrapper'>
          <BackIconButton onClick={() => navigate(-1)} />
          <h2 className='titles'>Filter</h2>
          <BasketButton />
        </header>

        <div className='search-wrapper'>
          <TextInput
            className='search-bar'
            placeholder='Search…'
            value={search}
            onChange={e => handleSearch(e.currentTarget.value)}
            leftSection={!search && <IconSearch size={18} />}
            radius='md'
            size='md'
          />
          <BasketButton />
        </div>

        <SearchResults query={search.trim()} />

        <FilterModal
          opened={isFilterOpen}
          onClose={() => setFilterOpen(false)}
          initialValues={filters}
          onApply={newFilters => {
            setFilters(newFilters);
            setFilterOpen(false);
          }}
        />
      </div>
    );
  }

  return (
    <div className='filtered-results-page'>
      <header className='header-wrapper'>
        <BackIconButton onClick={() => navigate(-1)} />
        <h2 className='titles'>Filter</h2>
        <BasketButton />
      </header>

      <div className='search-wrapper'>
        <TextInput
          className='search-bar'
          placeholder='Search…'
          value={search}
          onChange={e => handleSearch(e.currentTarget.value)}
          leftSection={!search && <IconSearch size={18} />}
          radius='md'
          size='md'
        />
        <BasketButton />
      </div>

      <div className='filter-row'>
        <FilterIconButton onClick={() => setFilterOpen(true)} />
      </div>

      <FilterModal
        opened={isFilterOpen}
        onClose={() => setFilterOpen(false)}
        initialValues={filters}
        onApply={newFilters => {
          setFilters(newFilters);
          setFilterOpen(false);
        }}
      />

      <div className='items-list'>
        {grouped.map(({ key, label, list }) =>
          list.length ? (
            <section className='items-section' key={key}>
              <h3 className='section-title'>{label}</h3>
              <div className='section-list'>
                {list.map(item => (
                  <TrendingCard key={item.id} look={item} showHeart={false} />
                ))}
              </div>
            </section>
          ) : null
        )}
        {!items.length && (
          <div className='no-items'>No items matched your filters.</div>
        )}
      </div>
    </div>
  );
}
