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
import { useItems } from '@/react/hooks/useItems';

import '@/sass/pages/_items_page.scss';

export default function ItemsPage() {
  const nav = useNavigate();
  const { state } = useLocation();
  const [search, setSearch] = useState('');

  const {
    categoryId,
    subcategoryId = undefined,
    categoryName = '',
    subcategoryName = '',
  } = state || {};

  const flatMode = subcategoryId == null;

  const {
    data: items = [],
    isLoading,
    isError,
  } = useItems(categoryId, flatMode ? undefined : subcategoryId);

  if (isLoading) return <div className='items-page'>Loading…</div>;
  if (isError) return <div className='items-page'>Error loading items</div>;

  if (search.trim() !== '') {
    return (
      <div className='items-page'>
        <div className='header-wrapper'>
          <BackIconButton onClick={() => nav(-1)} />
          <div className='titles'>
            <h2>{flatMode ? categoryName : subcategoryName}</h2>
          </div>
          <BasketButton />
        </div>

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
      </div>
    );
  }

  const title = flatMode ? categoryName : subcategoryName;

  return (
    <div className='items-page'>
      <div className='header-wrapper'>
        <BackIconButton onClick={() => nav(-1)} />
        <div className='titles'>
          <h2>{title}</h2>
        </div>
        <BasketButton />
      </div>

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

      <div className='items-list'>
        {items.filter(item => item.category.toLowerCase() === 'natural')
          .length > 0 && (
          <div className='items-section'>
            <h3 className='section-title'>Natural</h3>
            <div className='section-list'>
              {items
                .filter(item => item.category.toLowerCase() === 'natural')
                .map(item => (
                  <TrendingCard key={item.id} look={item} showHeart={false} />
                ))}
            </div>
          </div>
        )}

        {items.filter(item => item.category.toLowerCase() === 'classic')
          .length > 0 && (
          <div className='items-section'>
            <h3 className='section-title'>Classic</h3>
            <div className='section-list'>
              {items
                .filter(item => item.category.toLowerCase() === 'classic')
                .map(item => (
                  <TrendingCard key={item.id} look={item} showHeart={false} />
                ))}
            </div>
          </div>
        )}

        {items.filter(item => item.category.toLowerCase() === 'bold').length >
          0 && (
          <div className='items-section'>
            <h3 className='section-title'>Bold</h3>
            <div className='section-list'>
              {items
                .filter(item => item.category.toLowerCase() === 'bold')
                .map(item => (
                  <TrendingCard key={item.id} look={item} showHeart={false} />
                ))}
            </div>
          </div>
        )}

        {items.length === 0 && (
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
