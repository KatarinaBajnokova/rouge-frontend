import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';

export function useReorderLooks() {
  const { userId, loading: authLoading } = useAuth();
  const [looks, setLooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authLoading) return;

    if (!userId) {
      console.info('ℹ️ Reorder not fetched because user is logged out');
      setLoading(false);
      setLooks([]);
      setError('User not authenticated');
      return;
    }

    const fetchReorders = async () => {
      try {
        const res = await fetch('/api/orders/reorder', {
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
        });

        if (res.status === 401) {
          console.info('ℹ️ Reorder fetch skipped: user not authenticated');
          setError('User not authenticated');
          setLooks([]);
          return;
        }

        if (!res.ok) {
          const errText = await res.text();
          throw new Error(`HTTP ${res.status} — ${errText}`);
        }

        const data = await res.json();

        const formatted = Array.isArray(data)
          ? data.map(item => ({
              id: item.id,
              title: item.name, // ← important fix
              category: item.category,
              level: item.level,
              price: item.price,
              image_url: item.image_url,
            }))
          : [];

        setLooks(formatted);
        setError(null);
      } catch (err) {
        console.error('❌ Unexpected reorder fetch error:', err);
        setError(err.message || 'Failed to fetch reorder data');
        setLooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReorders();
  }, [authLoading, userId]);

  return { looks, loading, error };
}
