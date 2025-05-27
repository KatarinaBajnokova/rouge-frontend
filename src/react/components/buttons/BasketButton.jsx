import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import basketIcon from '@/assets/icons/icon_basket_active.svg';
import '@/sass/styles.scss';

export function BasketButton({ refresh, className = '', ...props }) {
  const navigate = useNavigate();
  const [itemCount, setItemCount] = useState(0);

  const getBasketCount = () => {
    try {
      const items = JSON.parse(localStorage.getItem('basketItems')) || [];
      return items.reduce((sum, item) => sum + (item.quantity || 0), 0);
    } catch {
      return 0;
    }
  };

  const updateCount = () => setItemCount(getBasketCount());

  useEffect(() => {
    const onStorage = e => {
      if (e.key === 'basketItems' || e.key === 'basketRefresh') {
        updateCount();
      }
      if (
        e.key === 'firebaseUid' &&
        (e.newValue === null || e.newValue === '')
      ) {
        setItemCount(0);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  useEffect(() => {
    const uid = window.localStorage.getItem('firebaseUid');
    if (!uid) {
      setItemCount(0);
    } else {
      updateCount();
    }
  }, []);

  useEffect(() => {
    updateCount();
  }, [refresh]);

  return (
    <button
      type='button'
      className={`basketButton ${className}`.trim()}
      aria-label='Open basket'
      onClick={() => navigate('/basket')}
      {...props}
    >
      <img src={basketIcon} alt='' className='icon' />
      <span className='label'>Basket</span>
      {itemCount > 0 && <span className='count'>{itemCount}</span>}
    </button>
  );
}
