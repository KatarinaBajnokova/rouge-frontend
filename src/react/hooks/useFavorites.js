import { useState, useEffect, useCallback } from 'react';
import { useAuth } from './useAuth';

export function useFavorites() {
  // Assume useAuth provides userId and loading
  const { userId, loading } = useAuth();
  const [favorites, setFavorites] = useState([]);

  const isLoggedIn = !!userId;

  useEffect(() => {
    // Do not fetch while auth state is loading or if not logged in
    if (loading || !isLoggedIn) {
      setFavorites([]);
      return;
    }

    fetch('/api/favorites', {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        if (res.status === 401) {
          // Not logged in on backend—just clear favorites and don't log anything
          setFavorites([]);
          return { favorites: [] };
        }
        if (!res.ok) throw new Error(`Error ${res.status}`);
        return res.json();
      })
      .then(data => {
        setFavorites(Array.isArray(data.favorites) ? data.favorites : []);
      })
      .catch(err => {
        // Only log "real" errors, not 401s
        if (!String(err.message).includes('401')) {
          console.error('useFavorites fetch error:', err);
        }
      });
  }, [isLoggedIn, loading]);

  const toggleFavorite = useCallback(
    async itemId => {
      if (loading || !isLoggedIn) return;
      const isFav = favorites.includes(itemId);
      const method = isFav ? 'DELETE' : 'POST';
      const res = await fetch('/api/favorites', {
        method,
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item_id: itemId }),
      });
      if (!res.ok) {
        // Suppress 401 errors, only log others
        if (res.status !== 401) {
          console.error(`Failed to ${method} favorite:`, res.status);
        }
        return;
      }
      setFavorites(favs =>
        isFav ? favs.filter(x => x !== itemId) : [...favs, itemId]
      );
    },
    [isLoggedIn, loading, favorites]
  );

  const clearFavorites = useCallback(() => setFavorites([]), []);

  return { favorites, toggleFavorite, clearFavorites, isLoggedIn };
}
