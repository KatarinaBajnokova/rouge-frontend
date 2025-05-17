import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import SearchResults from '@/react/components/all/SearchResults';
import { useCategories } from '@/react/hooks/useCategories';
import { BasketButton } from '@/react/components/buttons/BasketButton';
import { FilterIconButton } from '@/react/components/buttons/IconButtons';
import Navbar from '@/react/components/navbar/Navbar';
import AllCategoryItem from '@/react/components/all/AllCategoryItem';

import '@/sass/pages/_all_page.scss';

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
  const [search, setSearch] = useState('');

  const {
    data: groups = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['categoryGroups'],
    queryFn: fetchGroups,
    staleTime: 300_000,
  });

  if (isLoading) return <div className='categories-page'>Loading…</div>;
  if (isError)
    return <div className='categories-page'>Error loading groups</div>;

  if (search.trim() !== '') {
    return (
      <div className='categories-page'>
        <div className='search-wrapper'>
          <TextInput
            className='search-bar'
            placeholder='Search…'
            value={search}
            onChange={e => setSearch(e.currentTarget.value)}
            leftSection={<IconSearch size={18} />}
            radius='md'
            size='md'
          />
          <BasketButton />
        </div>

        <SearchResults query={search.trim()} />

        <Navbar />
      </div>
    );
  }

  return (
    <div className='categories-page'>
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

      <FilterIconButton />

      {groups.map(group => (
        <CategoryGroup key={group.id} group={group} search={search} />
      ))}

      <Navbar />
    </div>
  );
}
