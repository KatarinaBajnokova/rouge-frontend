import { useQuery } from '@tanstack/react-query';
import { safeJsonFetch } from '@/react/utils/fetchUtils';

export function useFilterOptions() {
  return useQuery({
    queryKey: ['filterOptions'],
    queryFn: () => safeJsonFetch('/api/filter-options'),
    staleTime: 10 * 60 * 1000,
  });
}
