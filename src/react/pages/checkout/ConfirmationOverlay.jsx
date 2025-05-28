import React, { useEffect, useState } from 'react';
import { Title, Text, Button, Group, Loader } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { safeJsonFetch } from '@/react/utils/fetchUtils';
import styles from './ConfirmationOverlay.module.scss';

export default function ConfirmationOverlay() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    safeJsonFetch('/api/basket', { method: 'DELETE' })
      .catch(console.error)
      .then(() => {
        localStorage.removeItem('basket');
        localStorage.removeItem('personalInfo');
        localStorage.removeItem('shippingAddress');
        localStorage.removeItem('paymentMethod');
        localStorage.setItem('resetBasket', 'true');
        window.dispatchEvent(
          new StorageEvent('storage', { key: 'basket', newValue: null })
        );
      })
      .finally(() => setLoading(false));
  }, []);

  const handleContinue = () => {
    localStorage.setItem('basketRefresh', Date.now().toString());
    navigate('/homescreen', { replace: true });
    window.location.reload();
  };

  return (
    <div className={styles.orderConfirmationScreen}>
      <div className={styles.confirmationBubble}>
        {loading ? (
          <Group direction='column' align='center' spacing='md'>
            <Loader />
            <Text>Finalizing your order…</Text>
          </Group>
        ) : (
          <>
            <Title order={3}>Thank you for your order!</Title>
            <Text>
              Your order has been received and is currently being processed.
            </Text>
            <Text>
              You will receive an <strong>email confirmation</strong> with
              tracking information soon.
            </Text>
            <Button className={styles.continueButton} onClick={handleContinue}>
              Continue shopping
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
