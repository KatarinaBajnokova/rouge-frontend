import { useState, useEffect, useCallback } from 'react';
import { useAuth } from './useAuth';

export function useFavorites() {
  const { userId, loading } = useAuth();
  const [favorites, setFavorites] = useState([]);

  const isLoggedIn = !!userId;

  useEffect(() => {
    if (loading || !isLoggedIn) {
      setFavorites([]);
      return;
    }

    fetch('/api/favorites', {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        if (res.status === 401 || res.status === 404) {
          setFavorites([]);
          return { favorites: [] };
        }
        if (!res.ok) throw new Error(`Error ${res.status}`);
        return res.json();
      })
.then(data => {

  const ids = Array.isArray(data) ? data.map(item => item.id) : [];
  setFavorites(ids);
})

      .catch(err => {
        if (
          !String(err.message).includes('401') &&
          !String(err.message).includes('404')
        ) {
          console.error('useFavorites fetch error:', err);
        }
      });
  }, [isLoggedIn, loading]);

  const toggleFavorite = useCallback(
  async itemId => {
    if (loading || !isLoggedIn || !userId) {
      console.warn('Skipping favorite toggle: not logged in');
      return;
    }

    const isFav = favorites.includes(itemId);
    const method = isFav ? 'DELETE' : 'POST';
    const res = await fetch('/api/favorites', {
      method,
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: itemId }),
    });
    if (!res.ok) {
      if (res.status !== 401) {
        console.error(`Failed to ${method} favorite:`, res.status);
      }
      return;
    }

    fetch('/api/favorites', {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
.then(res => res.ok ? res.json() : Promise.reject(res))
.then(data => {
  const ids = Array.isArray(data) ? data.map(item => item.id) : [];
  setFavorites(ids);
})
.catch(err => {
  console.error('Failed to refresh favorites after toggle', err);
});

  },
  [isLoggedIn, loading, favorites, userId]
);


  const clearFavorites = useCallback(() => setFavorites([]), []);

  return { favorites, toggleFavorite, clearFavorites, isLoggedIn };
}
