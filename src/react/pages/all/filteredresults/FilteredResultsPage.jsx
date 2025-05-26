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
import FilterModal from '@/react/pages//all/filtermodal/FilterModal';
import SearchResults from '@/react/components/all/SearchResults';
import { useItems } from '@/react/hooks/useItems';

import styles from './FilteredResultsPage.module.scss';

export default function FilteredResultsPage() {
  const navigate = useNavigate();
  const { search: rawSearch, pathname } = useLocation();
  const params = useMemo(() => new URLSearchParams(rawSearch), [rawSearch]);

  const [isFilterOpen, setFilterOpen] = useState(false);
  const [search, setSearch] = useState(params.get('q') ?? '');

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

  const mappedItems = items.map(item => ({
    ...item,
    title: item.name || item.title || 'Untitled',
  }));

  const categories = useMemo(() => ['natural', 'classic', 'bold'], []);
  const grouped = useMemo(
    () =>
      categories.map(key => {
        const list = mappedItems.filter(i => i.category.toLowerCase() === key);
        return { key, label: key[0].toUpperCase() + key.slice(1), list };
      }),
    [mappedItems, categories]
  );

  const Header = () => (
    <div className={styles.headerWrapper}>
      <BackHeader text='Filter' />
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
              onChange={e => handleSearch(e.currentTarget.value)}
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
          onClick={() => setFilterOpen(true)}
        />
      </div>
    </>
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
      <div className={styles.page}>
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
    <div className={styles.page}>
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

      <div className={styles.itemsList}>
        {grouped.map(({ key, label, list }) =>
          list.length ? (
            <section className={styles.itemsSection} key={key}>
              <h3 className={styles.sectionTitle}>{label}</h3>
              <div className={styles.sectionList}>
                {list.map(item => (
                  <TrendingCard key={item.id} look={item} showHeart={true} />
                ))}
              </div>
            </section>
          ) : null
        )}
        {!items.length && (
          <div className={styles.noItems}>No items matched your filters.</div>
        )}
      </div>
    </div>
  );
}
