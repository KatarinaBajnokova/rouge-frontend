import { useQuery } from '@tanstack/react-query';

async function fetchItems({ queryKey }) {
  const [_key, { categoryId, subcategoryId }] = queryKey;
  const params = new URLSearchParams();

  if (categoryId) {
    params.set('categoryId', categoryId);
  }
  if (subcategoryId) {
    params.set('subcategoryId', subcategoryId);
  }

  const res = await fetch(`/api/item-filters?${params.toString()}`);
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

export function useItems(categoryId, subcategoryId) {
  return useQuery({
    queryKey: ['items', { categoryId, subcategoryId }],
    queryFn: fetchItems,
    enabled: Boolean(categoryId),
    staleTime: 300_000,
  });
}
