import React, { useEffect, useState } from 'react';
import { Title, Text, Button, Group, Loader } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import '@/sass/pages/checkout/_last_popup.scss';

export default function ConfirmationOverlay() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. clear server-side basket
    fetch('/api/basket', { method: 'DELETE' })
      .catch(console.error)
      .then(() => {
        // 2. clear client-side cache
        localStorage.removeItem('basket');
        localStorage.removeItem('personalInfo');
        localStorage.removeItem('shippingAddress');
        localStorage.removeItem('paymentMethod');
        // 3. notify other tabs/components to refresh
        window.dispatchEvent(
          new StorageEvent('storage', { key: 'basket', newValue: null })
        );
      })
      .finally(() => setLoading(false));
  }, []);

  const handleContinue = () => {
    navigate('/homescreen');
  };

  return (
    <div className='order-confirmation-screen'>
      <div className='confirmation-bubble'>
        {loading ? (
          <Group direction='column' align='center' spacing='md'>
            <Loader />
            <Text>Finalizing your order…</Text>
          </Group>
        ) : (
          <>
            <Title order={3}>Thank you for your order!</Title>
            <Text mt='sm'>
              Your order has been received and is currently being processed.
            </Text>
            <Text mt='xs'>
              You will receive an <strong>email confirmation</strong> with
              tracking information soon.
            </Text>
            <Button
              className='continue-button'
              radius='xl'
              size='md'
              mt='xl'
              onClick={handleContinue}
            >
              Continue shopping
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
