import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutButton } from '../components/buttons/RedButtons';
import { BackHeader } from '../components/buttons/IconButtons';
import emptyBasketIcon from '@/assets/icons/IMG_empty_basket.svg';
import '@/sass/pages/_basket_page.scss';
import { useAuth } from '@/react/hooks/useAuth';
import { getFirebaseAuth } from '../../getFirebaseAuth';
import { safeJsonFetch } from '@/react/utils/fetchUtils';


import {
  Title,
  Text,
  Group,
  Stack,
  Image,
  ActionIcon,
  Loader,
} from '@mantine/core';
import { IconTrash, IconMinus, IconPlus } from '@tabler/icons-react';

// ✅ Define this function at the top
async function syncBackendUserId() {
  const { auth } = await getFirebaseAuth();
  const firebaseUser = auth.currentUser;

  if (firebaseUser) {
    try {
      const res = await fetch(
        `/api/users/by-firebase-uid?uid=${firebaseUser.uid}`
      );
      const data = await res.json();

      if (!res.ok)
        throw new Error(data.error || 'Failed fetching backend user');

      console.log('✅ Synced backendUserId:', data.user_id);
      localStorage.setItem('backendUserId', data.user_id);
    } catch (err) {
      console.error('❌ Error syncing backend user ID', err.message);
    }
  } else {
    console.warn('No Firebase user found while syncing backendUserId');
  }
}

export default function BasketPage() {
  const [basketItems, setBasketItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const { userId, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const LOCAL_KEY = 'basket';

  const fetchBasket = () => {
    const resetFlag = localStorage.getItem('resetBasket');
    if (resetFlag === 'true') return;

    setLoading(true);
    safeJsonFetch('/api/basket')
      .then(data => {
        const items = data.items || [];
        setBasketItems(items);
        setTotalPrice(data.total_price || 0);
        localStorage.setItem(LOCAL_KEY, JSON.stringify(items));
      })
      .catch(err => console.error('Failed to fetch basket:', err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const resetFlag = localStorage.getItem('resetBasket');
    if (resetFlag === 'true') {
      localStorage.removeItem(LOCAL_KEY);
      setBasketItems([]);
      setTotalPrice(0);
      localStorage.removeItem('resetBasket');
    } else {
      const cached = JSON.parse(localStorage.getItem(LOCAL_KEY) || 'null');
      if (cached) {
        setBasketItems(cached);
        setTotalPrice(cached.reduce((sum, i) => sum + i.price * i.quantity, 0));
      }
    }

    fetchBasket();

    const onStorage = e => {
      if (e.key === LOCAL_KEY) {
        const newVal = e.newValue;
        if (!newVal) {
          setBasketItems([]);
          setTotalPrice(0);
        } else {
          fetchBasket();
        }
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // ✅ Add another useEffect ONLY for syncing backendUserId
  useEffect(() => {
    if (!authLoading) {
      syncBackendUserId();
    }
  }, [authLoading]);

  const removeItem = async basketId => {
    await fetch(`/api/basket/${basketId}`, { method: 'DELETE' });
    fetchBasket();
  };

  const updateQuantity = async (basketId, newQty) => {
    if (newQty < 1 || newQty > 10) return;
    await fetch(`/api/basket/${basketId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity: newQty }),
    });
    fetchBasket();
  };

  const shipping = 4.99;
  const totalWithShipping = (totalPrice + shipping)
    .toFixed(2)
    .replace('.', ',');

  if (loading) {
    return (
      <Group position='center' mt='lg'>
        <Loader />
        <Text>Loading basket…</Text>
      </Group>
    );
  }

  const handleCheckout = async () => {
    if (authLoading) return; // wait

    console.log('Checking checkout logic. Firebase UID:', userId);

    if (!userId) {
      console.log('❌ No firebase user detected, navigate to personal info.');
      navigate('/checkout/personal-info');
      return;
    }

    try {
      const res = await fetch(`/api/users/by-firebase-uid?uid=${userId}`);
      if (res.ok) {
        console.log('✅ Backend user exists, navigating to friend info');
        navigate('/checkout/friend-info');
      } else {
        console.log('❌ Backend user not found, navigating to personal info');
        navigate('/checkout/personal-info');
      }
    } catch (err) {
      console.error('❌ Error verifying user in backend:', err);
      navigate('/checkout/personal-info'); // fallback
    }
  };

  return (
    <div className='basket-page'>
      <BackHeader text='Shopping Basket' />

      {basketItems.length === 0 ? (
        <div className='empty-basket'>
          <img src={emptyBasketIcon} alt='Empty basket' />
          <p>Your basket is empty.</p>
        </div>
      ) : (
        <>
          <Text fw={700} mt='md' mb='xs'>
            Your items
          </Text>

          <Stack spacing='sm'>
            {basketItems.map(item => (
              <div className='basket-card' key={item.id}>
                <Image src={item.image_url} radius='md' />
                <div className='basket-card__info'>
                  <div className='basket-card__text'>
                    <Text fw={700}>{item.name}</Text>
                    <Text size='sm' c='dimmed'>
                      {item.category}
                    </Text>
<Text size='xs' className={item.level?.toLowerCase()}>
  ✦ {item.level}
</Text>

                  </div>

                  <ActionIcon
                    className='trash-icon'
                    onClick={() => removeItem(item.id)}
                  >
                    <IconTrash size={18} />
                  </ActionIcon>

                  <div className='basket-card__buttons'>
                    <div className='basket-card__price'>
                      <Text fw={700}>
                        €
                        {(item.price * item.quantity)
                          .toFixed(2)
                          .replace('.', ',')}
                      </Text>
                    </div>
                    <div className='basket-card__quantity'>
                      <Group spacing={6}>
                        <ActionIcon
                          variant='default'
                          radius='xl'
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          <IconMinus size={14} />
                        </ActionIcon>
                        <Text fw={500}>{item.quantity}</Text>
                        <ActionIcon
                          variant='default'
                          radius='xl'
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          disabled={item.quantity >= 10}
                        >
                          <IconPlus size={14} />
                        </ActionIcon>
                      </Group>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Stack>

          <Group className='basket-footer' position='apart' align='flex-end'>
            <div className='basket-footer__left'>
              <Text size='16px' fw={500}>
                Shipping:
              </Text>
              <Text size='20px' mt='xs' c='dimmed'>
                €{shipping.toFixed(2).replace('.', ',')}
              </Text>
              <Text mt='xs' fw={700}>
                Total:
              </Text>
              <Title order={2} mt={-6}>
                €{totalWithShipping}
              </Title>
            </div>

            <CheckoutButton disabled={authLoading} onClick={handleCheckout}>
              {authLoading ? <Loader size='xs' color='white' /> : 'Checkout'}
            </CheckoutButton>
          </Group>
        </>
      )}
    </div>
  );
}
