import React, { useState } from 'react';
import { TextInput } from '@mantine/core';
import countryMap from '@/react/data/countryMap'; // ✨ Correct import

export default function AddressSearch({ onSelect, selectedCountry }) {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddressSearch = async query => {
    if (!query) return;
    setLoading(true);

    try {
      const params = new URLSearchParams({
        q: query,
        format: 'json',
        addressdetails: 1,
        limit: 5,
      });

      const countryCode = countryMap[selectedCountry];
      if (countryCode) {
        params.append('countrycodes', countryCode);
      }

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?${params.toString()}`,
        {
          headers: {
            'Accept-Language': 'en',
          },
        }
      );

      const results = await response.json();
      console.log('🌍 Search results:', results);

      if (Array.isArray(results) && results.length > 0) {
        onSelect(results[0]);
      } else {
        console.warn('⚠️ No address results found');
        onSelect(null);
      }
    } catch (error) {
      console.error('❌ Error fetching address:', error.message);
      onSelect(null);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = e => {
    const value = e.target.value;
    setSearch(value);

    if (value.length >= 3) {
      handleAddressSearch(value);
    } else {
      onSelect(null); // 🧠 If user deletes input, clear selected address
    }
  };

  return (
    <TextInput
      label='Address'
      placeholder='Type your address...'
      value={search}
      onChange={handleInputChange}
      // Mantine expects loading={true} or loading={false}, not just loading
      loading={loading ? true : false}
      required
    />
  );
}
