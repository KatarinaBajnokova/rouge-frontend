import { useQuery } from '@tanstack/react-query';
import { safeJsonFetch } from '@/react/utils/fetchUtils';

async function fetchCategories(groupId) {
  return safeJsonFetch(`/api/categories?groupId=${groupId}`);
}

export function useCategories(groupId) {
  return useQuery({
    queryKey: ['categories', groupId],
    queryFn: () => fetchCategories(groupId),
    staleTime: 300_000,
    enabled: Boolean(groupId),
  });
}
