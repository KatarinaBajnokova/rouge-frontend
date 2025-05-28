import { useAuth } from './useAuth'; // <--- this is required!
import { useState, useEffect } from 'react';

export function useReorderLooks() {
  const { userId, loading: authLoading } = useAuth();
  const [looks, setLooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authLoading) return;
    if (!userId) {
      setLooks([]);
      setError('User not authenticated');
      setLoading(false);
      return;
    }

    const fetchReorders = async () => {
      try {
        const res = await fetch('/api/orders/reorder', {
          credentials: 'include',
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to fetch');
        setLooks(data.looks || []);
        setError(null);
      } catch (err) {
        setError(err.message);
        setLooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReorders();
  }, [authLoading, userId]);

  return { looks, loading, error };
}
