import { useState, useEffect } from 'react';
import { safeJsonFetch } from '@/react/utils/fetchUtils';

export function useReorderLooks() {
  const [looks, setLooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    let isCancelled = false;
 
    async function fetchReorders() {
      setLoading(true);

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

 
        if (!isCancelled) {
          setLooks(formatted);
          setError(null);

        }

      } catch (err) {
        console.error('❌ Reorder fetch failed:', err);
        if (!isCancelled) {
          setLooks([]);
          setError(err.message);
        }

      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    fetchReorders();

    return () => {
      isCancelled = true;
      setLooks([]);
      setError(null);
      setLoading(false);
    };
  }, []);

  return { looks, loading, error };
}