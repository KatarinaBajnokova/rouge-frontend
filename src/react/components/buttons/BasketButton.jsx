import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import basketIcon from '@/assets/icons/icon_basket_active.svg';
import '@/sass/components/buttons/_basketbutton.scss';

export function BasketButton({ refresh }) {
  const navigate = useNavigate();
  const [itemCount, setItemCount] = useState(0);

  const fetchBasketCount = async () => {
    try {
      const res = await fetch('/api/basket');
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const data = await res.json();
      const count = Array.isArray(data.items)
        ? data.items.reduce((sum, item) => sum + (item.quantity || 0), 0)
        : 0;
      setItemCount(count);
    } catch (err) {
      console.error('❌ Failed to fetch basket count:', err);
    }
  };

  useEffect(() => {
    fetchBasketCount();
  }, [refresh]);

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
