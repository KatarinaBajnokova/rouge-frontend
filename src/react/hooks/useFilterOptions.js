import { useQuery } from '@tanstack/react-query';

export function useFilterOptions() {
  return useQuery({
    queryKey: ['filterOptions'],
    queryFn: async () => {
      const res = await fetch('/api/filter-options');
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    },
    staleTime: 10 * 60 * 1000,
  });
}
