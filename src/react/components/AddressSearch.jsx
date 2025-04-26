import React, { useState, useEffect } from 'react';
import { TextInput } from '@mantine/core';
import '@/sass/components/_address_search.scss';

const AddressSearch = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 3) {
        setSuggestions([]);
        return;
      }

      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setSuggestions(data);
    };

    const timeoutId = setTimeout(fetchSuggestions, 300); // debounce
    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleSelect = suggestion => {
    setQuery(suggestion.display_name);
    setSuggestions([]);
    if (onSelect) onSelect(suggestion);
  };

  return (
    <div className='address-search'>
      <TextInput
        placeholder='Your address...'
        value={query}
        onChange={e => setQuery(e.target.value)}
        radius='md'
      />
      {suggestions.length > 0 && (
        <ul className='suggestions'>
          {suggestions.map(s => (
            <li key={s.place_id} onClick={() => handleSelect(s)}>
              {s.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressSearch;
