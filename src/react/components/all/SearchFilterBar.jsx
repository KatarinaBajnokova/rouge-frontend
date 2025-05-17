// src/react/components/SearchFilterBar.jsx
import React, { useEffect, useState } from 'react';
import { Autocomplete } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { BasketButton } from '@/react/components/buttons/BasketButton';
import { FilterIconButton } from '@/react/components/buttons/IconButtons';

import '@/sass/components/_search_filter_bar.scss';

export default function SearchFilterBar({
  value,
  onChange,
  onSearch,
  placeholder = 'Search…',
  showFilter = true,
  onFilterClick,
}) {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), 300);
    return () => clearTimeout(timer);
  }, [value]);

  useEffect(() => {
    if (debounced.trim().length < 1) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    fetch(`/api/item-suggestions?query=${encodeURIComponent(debounced)}`)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(data => {
        setSuggestions(data.map(item => item.name));
      })
      .catch(() => setSuggestions([]))
      .finally(() => setLoading(false));
  }, [debounced]);

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearch(value);
    }
  };

  const handleItemSubmit = item => onSearch(item);

  return (
    <div className='search-filter-wrapper'>
      <form
        className='search-form'
        onSubmit={e => {
          e.preventDefault();
          onSearch(value);
        }}
      >
        <Autocomplete
          className='search-bar'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          data={suggestions}
          nothingFound='No matches'
          loading={loading}
          radius='md'
          size='md'
          filter={() => true}
          leftSection={<IconSearch size={18} color='#888' />}
          openOnFocus
          onKeyDown={handleKeyDown}
          onItemSubmit={({ value: itemValue }) => handleItemSubmit(itemValue)}
        />
        <button type='submit' className='search-button'>
          <IconSearch size={20} />
        </button>
      </form>

      <BasketButton />

      {showFilter && (
        <FilterIconButton className='filter-button' onClick={onFilterClick} />
      )}
    </div>
  );
}
