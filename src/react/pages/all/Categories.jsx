import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import SearchResults from '@/react/components/all/SearchResults';
import FilterModal from '@/react/components/all/FilterModal';
import { useCategories } from '@/react/hooks/useCategories';
import { BasketButton } from '@/react/components/buttons/basketbutton/BasketButton';
import { FilterIconButton } from '@/react/components/buttons/IconButtons';
import Navbar from '@/react/components/navbar/Navbar';
import AllCategoryItem from '@/react/components/all/AllCategoryItem';

import '@/sass/pages/all/_categories.scss';

async function fetchGroups() {
  const res = await fetch('/api/category-groups');
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

function CategoryGroup({ group, search }) {
  const nav = useNavigate();
  const { data: cats = [], isLoading, isError } = useCategories(group.id);

  if (isLoading) return <div>Loading {group.name}…</div>;
  if (isError) return <div>Error loading {group.name}</div>;

  const filtered = cats.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );
  if (!filtered.length) return null;

  return (
    <div className='category-section'>
      <h2>{group.name}</h2>
      <div className='category-list'>
        {filtered.map(cat => (
          <AllCategoryItem
            key={cat.id}
            iconUrl={cat.icon_url}
            label={cat.name}
            onClick={() =>
              nav(`/categories/${cat.id}`, {
                state: { categoryName: cat.name },
              })
            }
          />
        ))}
      </div>
    </div>
  );
}

export default function CategoriesPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    selectedOccasions: [],
    selectedDetailed: [],
    selectedDifficulties: [],
    priceRange: [0, 100],
  });

  const {
    data: groups = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['categoryGroups'],
    queryFn: fetchGroups,
    staleTime: 300_000,
  });

  const renderSearchBar = () => (
    <div className='custom-search-bar'>
      <IconSearch size={18} className='search-icon' />
      <TextInput
        value={search}
        onChange={e => setSearch(e.currentTarget.value)}
        placeholder='Search…'
        variant='unstyled'
        className='bare-input'
      />
    </div>
  );

  if (isLoading) return <div className='categories-page'>Loading…</div>;
  if (isError)
    return <div className='categories-page'>Error loading groups</div>;

  // ─── Search Mode ────────────────────────────────────────────────
  if (search.trim() !== '') {
    return (
      <div className='categories-page'>
        <div className='search-wrapper'>
          <div className='search-row'>
            {renderSearchBar()}
            {!isFilterOpen && <BasketButton />}
          </div>
          {!isFilterOpen && (
            <FilterIconButton
              className='filter-button'
              onClick={() => setIsFilterOpen(true)}
            />
          )}
        </div>

        <SearchResults query={search.trim()} />
        {!isFilterOpen && <Navbar />}

        <FilterModal
          opened={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          initialValues={filters}
          onApply={newFilters => {
            setFilters(newFilters);
            setIsFilterOpen(false);
            const qs = new URLSearchParams({
              occasions: newFilters.selectedOccasions.join(','),
              detailed: newFilters.selectedDetailed.join(','),
              difficulties: newFilters.selectedDifficulties.join(','),
              minPrice: newFilters.priceRange[0],
              maxPrice: newFilters.priceRange[1],
            }).toString();
            navigate(`/filtered?${qs}`);
          }}
        />
      </div>
    );
  }

  // ─── Default Grid View ──────────────────────────────────────────
  return (
    <div className='categories-page'>
      <div className='search-wrapper'>
        <div className='search-row'>
          {renderSearchBar()}
          {!isFilterOpen && <BasketButton />}
        </div>
        {!isFilterOpen && (
          <FilterIconButton
            className='filter-button'
            onClick={() => setIsFilterOpen(true)}
          />
        )}
      </div>

      {groups.map(group => (
        <CategoryGroup key={group.id} group={group} search={search} />
      ))}

      {!isFilterOpen && <Navbar />}

      <FilterModal
        opened={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        initialValues={filters}
        onApply={newFilters => {
          setFilters(newFilters);
          setIsFilterOpen(false);
          const qs = new URLSearchParams({
            occasions: newFilters.selectedOccasions.join(','),
            detailed: newFilters.selectedDetailed.join(','),
            difficulties: newFilters.selectedDifficulties.join(','),
            minPrice: newFilters.priceRange[0],
            maxPrice: newFilters.priceRange[1],
          }).toString();
          navigate(`/filtered?${qs}`);
        }}
      />
    </div>
  );
}
