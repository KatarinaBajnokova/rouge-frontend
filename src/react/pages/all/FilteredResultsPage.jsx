// src/react/pages/all/FilteredResultsPage.jsx
import React, { useState, useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TextInput, Center, Loader, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import { BasketButton } from '@/react/components/buttons/BasketButton';
import {
  BackHeader,
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
  const [search, setSearch] = useState(params.get('q') ?? '');

  const initialFilters = useMemo(() => ({
    selectedOccasions: params.get('occasions')?.split(',').filter(Boolean) ?? [],
    selectedDetailed: params.get('detailed')?.split(',').filter(Boolean) ?? [],
    selectedDifficulties: params.get('difficulties')?.split(',').filter(Boolean) ?? [],
    priceRange: [
      Number(params.get('minPrice') ?? 0),
      Number(params.get('maxPrice') ?? 0),
    ],
  }), [params]);

  const [filters, setFilters] = useState(initialFilters);

  const handleSearch = useCallback(value => {
    setSearch(value);
    const qs = new URLSearchParams(params);
    value ? qs.set('q', value) : qs.delete('q');
    navigate(`${pathname}${qs.toString() ? `?${qs}` : ''}`);
  }, [navigate, pathname, params]);

  const { data: items = [], isLoading, isError } = useItems(undefined, undefined, filters);

  const mappedItems = items.map(item => ({
  ...item,
  title: item.name || item.title || 'Untitled',
}));


  const categories = useMemo(() => ['natural', 'classic', 'bold'], []);
const grouped = useMemo(() =>
  categories.map(key => {
    const list = mappedItems.filter(i => i.category.toLowerCase() === key);
    return { key, label: key[0].toUpperCase() + key.slice(1), list };
  }), [mappedItems, categories]);


  const Header = () => (
    <div className="header-with-basket">
      <BackHeader text="Filter" />
      <BasketButton />
    </div>
  );

  const SearchRow = () => (
    <>
      <div className="search-wrapper">
        <div className="search-row">
          <div className="custom-search-bar">
            <IconSearch size={18} className="search-icon" />
            <TextInput
              value={search}
              onChange={e => handleSearch(e.currentTarget.value)}
              placeholder="Search…"
              variant="unstyled"
              className="bare-input"
            />
          </div>
        </div>
      </div>
      <div className="filter-row">
        <FilterIconButton
          className="filter-button"
          onClick={() => setFilterOpen(true)}
        />
      </div>
    </>
  );

  if (isLoading) {
    return (
      <Center style={{ height: 300 }}>
        <Loader size="lg" />
      </Center>
    );
  }

  if (isError) {
    return (
      <Center style={{ height: 300 }}>
        <Text color="red">Error loading filtered results</Text>
      </Center>
    );
  }

  if (search.trim()) {
    return (
      <div className="filtered-results-page">
        <Header />
        <SearchRow />
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
    <div className="filtered-results-page">
      <Header />
      <SearchRow />
      <FilterModal
        opened={isFilterOpen}
        onClose={() => setFilterOpen(false)}
        initialValues={filters}
        onApply={newFilters => {
          setFilters(newFilters);
          setFilterOpen(false);
        }}
      />

      <div className="items-list">
        {grouped.map(({ key, label, list }) =>
          list.length ? (
            <section className="items-section" key={key}>
              <h3 className="section-title">{label}</h3>
              <div className="section-list">
                {list.map(item => (
                  <TrendingCard key={item.id} look={item} showHeart={false} />
                ))}
              </div>
            </section>
          ) : null
        )}
        {!items.length && (
          <div className="no-items">No items matched your filters.</div>
        )}
      </div>
    </div>
  );
}

