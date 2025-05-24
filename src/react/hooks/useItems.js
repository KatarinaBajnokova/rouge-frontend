import { useQuery } from '@tanstack/react-query';
import { safeJsonFetch } from '@/react/utils/fetchUtils';

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

  return safeJsonFetch(`/api/item-filters?${params.toString()}`);
}
