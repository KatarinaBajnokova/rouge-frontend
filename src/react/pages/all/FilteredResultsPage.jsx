import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useItems } from '@/react/hooks/useItems';
import TrendingCard from '@/react/components/cards/TrendingCard';
import { BackIconButton } from '@/react/components/buttons/IconButtons';
import { Loader, Center, Text } from '@mantine/core';

export default function FilteredResultsPage() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const filters = {
    selectedOccasions:
      params.get('occasions')?.split(',').filter(Boolean) || [],
    selectedDetailed: params.get('detailed')?.split(',').filter(Boolean) || [],
    selectedDifficulties:
      params.get('difficulties')?.split(',').filter(Boolean) || [],
    priceRange: [
      Number(params.get('minPrice') ?? 0),
      Number(params.get('maxPrice') ?? 0),
    ],
  };

  const {
    data: items = [],
    isLoading,
    isError,
  } = useItems(undefined, undefined, filters);

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

  return (
    <div className='filtered-results-page' style={{ padding: 20 }}>
      <header
        style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}
      >
        <BackIconButton onClick={() => navigate(-1)} />
        <Text weight={600} size='xl' style={{ marginLeft: 12 }}>
          Filtered Results
        </Text>
      </header>

      {items.length === 0 ? (
        <Text>No items match your filter selection.</Text>
      ) : (
        <div
          className='items-grid'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))',
            gap: 16,
          }}
        >
          {items.map(item => (
            <TrendingCard key={item.id} look={item} showHeart={false} />
          ))}
        </div>
      )}
    </div>
  );
}
