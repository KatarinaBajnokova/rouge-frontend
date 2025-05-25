import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { safeJsonFetch } from '@/react/utils/fetchUtils';

import basketIcon from '@/assets/icons/icon_basket_active.svg';
import '@/sass/components/buttons/_basketbutton.scss';

export function BasketButton({ refresh }) {
  const navigate = useNavigate();
  const [itemCount, setItemCount] = useState(0);

  const fetchBasketCount = async () => {
    try {
const data = await safeJsonFetch('/api/basket');
      const count = Array.isArray(data.items)
        ? data.items.reduce((sum, item) => sum + (item.quantity || 0), 0)
        : 0;
      setItemCount(count);
    } catch (err) {
      console.error('❌ Failed to fetch basket count:', err);
    }
  };

  // Initial fetch or prop-driven refresh
  useEffect(() => {
    fetchBasketCount();
  }, [refresh]);

  // 🔁 Listen to localStorage 'basketRefresh' flag across tabs or reloads
  useEffect(() => {
    const onStorage = e => {
      if (e.key === 'basketRefresh') {
        fetchBasketCount();
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  return (
    <button
      type='button'
      className='basket-button'
      aria-label='Open basket'
      onClick={() => navigate('/basket')}
    >
      <img
        src={basketIcon}
        alt='' // decorative
        className='basket-button__icon'
      />
      <span className='basket-button__label'>Basket</span>

      {itemCount > 0 && (
        <span className='basket-button__count'>{itemCount}</span>
      )}
    </button>
  );
}
