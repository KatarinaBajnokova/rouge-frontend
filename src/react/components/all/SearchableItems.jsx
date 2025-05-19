import React, { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';

export default function SearchableItems({ group = '' }) {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!debouncedQuery) {
      setItems([]);
      return;
    }

    setLoading(true);

    let url = `/api/search?query=${encodeURIComponent(debouncedQuery)}`;
    if (group) url += `&group=${encodeURIComponent(group)}`;

    fetch(url)
      .then(r => r.json())
      .then(json => setItems(json))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [debouncedQuery, group]);

  return (
    <div>
      <div style={{ position: 'relative', marginBottom: 16 }}>
        <input
          type='search'
          placeholder='Search looks…'
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ width: '100%', padding: '8px 32px 8px 8px' }}
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            style={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            ×
          </button>
        )}
      </div>

      {loading && <p>Searching…</p>}
      {!loading && debouncedQuery && items.length === 0 && (
        <p>No items match “{debouncedQuery}.”</p>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: 12,
        }}
      >
        {items.map(item => (
          <div
            key={item.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: 4,
              overflow: 'hidden',
            }}
          >
            <img
              src={item.thumbnail_url}
              alt={item.title}
              style={{ width: '100%', height: 100, objectFit: 'cover' }}
            />
            <div style={{ padding: '8px' }}>
              <h4 style={{ margin: '0 0 4px' }}>{item.title}</h4>
              <small>
                {item.category} · {item.difficulty} · €{item.price.toFixed(2)}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
