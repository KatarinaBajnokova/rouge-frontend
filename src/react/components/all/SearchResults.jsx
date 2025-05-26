import { useQuery } from '@tanstack/react-query';
import TrendingCard from '@/react/components/cards/TrendingCard';

import '@/sass/styles.scss';

async function fetchSearchResults(query) {
  const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

export default function SearchResults({ query }) {
  const {
    data: items = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['search', query],
    queryFn: () => fetchSearchResults(query),
    enabled: Boolean(query),
    staleTime: 300_000,
  });

  if (isLoading) return <p className='searchLoading'>Searching…</p>;
  if (isError) return <p className='searchError'>Error while searching</p>;
  if (items.length === 0)
    return <p className='searchNone'>No looks found for “{query}”</p>;

  return (
    <div className='searchResultsGrid'>
      {items.map(item => {
        const look = {
          id: item.id,
          image_url: item.thumbnail_url,
          title: item.title,
          category: item.category,
          level: item.difficulty,
          price: item.price,
          description: item.description,
          tutorial_url: item.tutorial_url,
        };
        return (
          <TrendingCard
            key={item.id}
            look={look}
            showHeart={true}
            variant='compact'
          />
        );
      })}
    </div>
  );
}
