import { useQuery } from '@tanstack/react-query';

async function fetchItems({ queryKey }) {
  const [_key, { categoryId, subcategoryId, filters }] = queryKey;
  const params = new URLSearchParams();

  if (categoryId) params.set('categoryId', categoryId);
  if (subcategoryId) params.set('subcategoryId', subcategoryId);

  if (filters) {
    const {
      selectedOccasions = [],
      selectedDetailed = [],
      selectedDifficulties = [],
      priceRange = [],
    } = filters;

    if (selectedOccasions.length)
      params.set('occasions', selectedOccasions.join(','));
    if (selectedDetailed.length)
      params.set('detailed', selectedDetailed.join(','));
    if (selectedDifficulties.length)
      params.set('difficulties', selectedDifficulties.join(','));

    if (priceRange.length === 2) {
      params.set('minPrice', priceRange[0]);
      params.set('maxPrice', priceRange[1]);
    }
  }

  const res = await fetch(`/api/item-filters?${params.toString()}`);
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

export function useItems(categoryId, subcategoryId, filters) {
  return useQuery({
    queryKey: ['items', { categoryId, subcategoryId, filters }],
    queryFn: fetchItems,
    enabled: true,
    staleTime: 300_000,
  });
}
