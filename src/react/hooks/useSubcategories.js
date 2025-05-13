import { useQuery } from '@tanstack/react-query';

async function fetchSubs(categoryId) {
  const res = await fetch(`/api/subcategories?categoryId=${categoryId}`);
  if (!res.ok) throw new Error('Failed to load subcategories');
  return res.json();
}

export function useSubcategories(categoryId) {
  return useQuery({
    queryKey: ['subcategories', categoryId],
    queryFn: () => fetchSubs(categoryId),
    enabled: Boolean(categoryId),
  });
}
