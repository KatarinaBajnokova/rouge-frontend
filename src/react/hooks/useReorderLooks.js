import { useState, useEffect } from 'react';
import { safeJsonFetch } from '@/react/utils/fetchUtils';

export function useReorderLooks() {
  const [looks, setLooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReorders() {
      try {
        const data = await safeJsonFetch('/api/orders/reorder', {
          credentials: 'include',
        });

        if (!Array.isArray(data)) {
          throw new Error(data?.error || 'Unexpected response');
        }

        const formatted = data.map(item => ({
          id: item.id,
          title: item.name,
          category: item.category,
          level: item.level,
          price: item.price,
          image_url: item.image_url,
        }));

        setLooks(formatted);
      } catch (err) {
        setError(err.message);
        console.error('❌ Reorder fetch failed:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchReorders();
  }, []);

  return { looks, loading, error };
}