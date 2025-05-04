import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutButton } from '../components/buttons/RedButtons';
import { BackHeader } from '../components/buttons/IconButtons';
import '@/sass/pages/_basket_page.scss';
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

export default function BasketPage() {
  const [basketItems, setBasketItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const LOCAL_KEY = 'basket';

  const fetchBasket = () => {
    setLoading(true);
    fetch('/api/basket')
      .then(res => res.json())
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
    const cached = JSON.parse(localStorage.getItem(LOCAL_KEY) || 'null');
    if (cached) {
      setBasketItems(cached);
      setTotalPrice(cached.reduce((sum, i) => sum + i.price * i.quantity, 0));
      setLoading(false);
    }
    fetchBasket();

    const onStorage = e => {
      if (e.key === LOCAL_KEY) {
        const newVal = e.newValue;
        if (!newVal) {
          // basket cleared
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

  return (
    <div className='basket-page'>
      <BackHeader text='Shopping Basket' />

      <Text fw={700} mt='md' mb='xs'>
        Your items
      </Text>

      <Stack spacing='sm'>
        {basketItems.map(item => (
          <div className='basket-card' key={item.id}>
            <Image src={item.image_url} width={90} radius='md' />
            <div className='basket-card__info'>
              <Group position='apart'>
                <div>
                  <Text fw={700}>{item.name}</Text>
                  <Text size='sm' c='dimmed'>
                    {item.category}
                  </Text>
                  <Text size='xs' c='green'>
                    {item.level}
                  </Text>
                </div>
                <ActionIcon onClick={() => removeItem(item.id)}>
                  <IconTrash size={18} />
                </ActionIcon>
              </Group>

              <Group position='apart' mt='xs'>
                <Text fw={700}>
                  €{(item.price * item.quantity).toFixed(2).replace('.', ',')}
                </Text>
                <Group spacing={6}>
                  <ActionIcon
                    variant='default'
                    radius='xl'
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <IconMinus size={14} />
                  </ActionIcon>
                  <Text fw={500}>{item.quantity}</Text>
                  <ActionIcon
                    variant='default'
                    radius='xl'
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    disabled={item.quantity >= 10}
                  >
                    <IconPlus size={14} />
                  </ActionIcon>
                </Group>
              </Group>
            </div>
          </div>
        ))}
      </Stack>

      <Group className='basket-footer' position='apart' align='flex-end'>
        <div className='basket-footer__left'>
          <Text size='sm' fw={500}>
            Shipping:
          </Text>
          <Text size='sm' c='dimmed'>
            €{shipping.toFixed(2).replace('.', ',')}
          </Text>
          <Text mt='xs' fw={700}>
            Total:
          </Text>
          <Title order={2} mt={-6}>
            €{totalWithShipping}
          </Title>
        </div>
        <CheckoutButton
          onClick={() => {
            localStorage.removeItem(LOCAL_KEY);
            window.dispatchEvent(
              new StorageEvent('storage', {
                key: LOCAL_KEY,
                oldValue: JSON.stringify(basketItems),
                newValue: null,
              })
            );
            navigate('/checkout/personal-info');
          }}
        />
      </Group>
    </div>
  );
}
