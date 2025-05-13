import { useQuery } from '@tanstack/react-query';

async function fetchCategories(groupId) {
  const res = await fetch(`/api/categories?groupId=${groupId}`);
  if (!res.ok) throw new Error('Failed to load categories');
  return res.json();
}

export function useCategories(groupId) {
  return useQuery({
    queryKey: ['categories', groupId],
    queryFn: () => fetchCategories(groupId),
    staleTime: 300_000,
    enabled: Boolean(groupId),
  });
}
