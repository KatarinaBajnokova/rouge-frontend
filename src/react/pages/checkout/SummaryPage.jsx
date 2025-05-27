import React, { useState, useEffect } from 'react';
import { Title, Text, Divider } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';
import { useAuth } from '@/react/hooks/useAuth';
import { safeJsonFetch } from '@/react/utils/fetchUtils';

import { BackIconButton } from '@/react/components/buttons/IconButtons';
import { BottomBarButton } from '@/react/components/buttons/RedButtons';

import ConfirmationOverlay from './ConfirmationOverlay';
import styles from './SummaryPage.module.scss';

export default function SummaryPage() {
  const navigate = useNavigate();
  const { userId: firebaseUid } = useAuth();

  const [showFinalScreen, setShowFinalScreen] = useState(false);
  const [backendUser, setBackendUser] = useState(null);
  const [basketItems, setBasketItems] = useState([]);
  const [basketTotal, setBasketTotal] = useState(0);
  const [buttonLoading, setButtonLoading] = useState(false);

  const savedPersonal = JSON.parse(localStorage.getItem('personalInfo') || '{}');
  const savedAddress = JSON.parse(localStorage.getItem('shippingAddress') || '{}');
  const savedPayment = JSON.parse(localStorage.getItem('paymentMethod') || '{}');

  const {
    firstName,
    lastName,
    email,
    companyName,
    vatNumber,
    addGiftWrap,
    addPersonalCard,
    friendName,
    friendEmail,
    personalNote,
  } = savedPersonal;

  const { country, street, houseNumber, postalCode, phone } = savedAddress;
  const { method, cardName, cardNumber } = savedPayment;

  const resolvedFirstName = firstName || backendUser?.firstName || '';
  const resolvedLastName = lastName || backendUser?.lastName || '';
  const resolvedEmail = email || backendUser?.email || '';

  const SHIPPING_COST = 5.0;
  const GIFT_WRAP_COST = addGiftWrap ? 3.99 : 0;
  const PERSONAL_CARD_COST = addPersonalCard ? 2.99 : 0;
  const finalTotal = (
    basketTotal +
    SHIPPING_COST +
    GIFT_WRAP_COST +
    PERSONAL_CARD_COST
  ).toFixed(2).replace('.', ',');

  const paymentLabels = {
    card: 'Credit / Debit card',
    paypal: 'PayPal',
    klarna: 'Klarna',
    applepay: 'Apple Pay',
  };

  useEffect(() => {
    safeJsonFetch('http://localhost:8000/api/basket')
      .then(data => {
        setBasketItems(data.items || []);
        setBasketTotal(data.total_price || 0);
      })
      .catch(err => console.error('Failed to fetch basket:', err));

    if (!savedPersonal.firstName && firebaseUid) {
      fetch(`/api/users/by-firebase-uid?uid=${firebaseUid}`)
        .then(res => res.json())
        .then(user => {
          if (user && user.first_name && user.last_name && user.email) {
            setBackendUser({
              firstName: user.first_name,
              lastName: user.last_name,
              email: user.email,
            });
            localStorage.setItem('personalInfo', JSON.stringify({
              firstName: user.first_name,
              lastName: user.last_name,
              email: user.email,
            }));
          }
        })
        .catch(err => console.error('Failed to fetch user info', err));
    }
  }, [firebaseUid]);

  const handleConfirm = async () => {
  if (!resolvedFirstName || !resolvedLastName || !resolvedEmail) {
    showNotification({
      title: 'Missing info',
      message: 'Personal info incomplete',
      color: 'red',
    });
    return;
  }

  if (!country || !street || !houseNumber || !postalCode || !phone) {
    showNotification({
      title: 'Missing info',
      message: 'Address incomplete',
      color: 'red',
    });
    return;
  }

  if (!method) {
    showNotification({
      title: 'Missing info',
      message: 'Payment method not selected',
      color: 'red',
    });
    return;
  }

  const items = basketItems.map(i => ({
    item_id: i.item_id,
    quantity: i.quantity,
    name: i.name,
    price: i.price,
  }));

  const payload = {
    full_name: `${resolvedFirstName} ${resolvedLastName}`,
    email: resolvedEmail,
    phone,
    company_name: companyName || '',
    vat_number: vatNumber || '',
    payment_method: method,
    is_gift: addGiftWrap ? 1 : 0,
    friend_name: friendName || null,
    friend_email: friendEmail || null,
    personal_note: personalNote || null,
    items,
    shipping_cost: SHIPPING_COST,
    gift_wrap_cost: GIFT_WRAP_COST,
    card_cost: PERSONAL_CARD_COST,
  };

  try {
    setButtonLoading(true);

    console.log('🚀 Submitting order payload:', payload);

    const res = await fetch('http://localhost:8000/api/orders/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('❌ Backend error response:', data);
      throw new Error(data.error || 'Order creation failed');
    }

    await fetch('http://localhost:8000/api/basket', {
      method: 'DELETE',
      credentials: 'include',
    });


    localStorage.removeItem('personalInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');

    setShowFinalScreen(true);
  } catch (err) {
    showNotification({
      title: 'Order failed',
      message: err.message || 'Could not submit order. Please try again.',
      color: 'red',
    });
  } finally {
    setButtonLoading(false);
  }
};


  if (showFinalScreen) return <ConfirmationOverlay />;

  return (
    <div className={styles.summaryPage}>
      <div className={styles.backIconButton}>
        <BackIconButton />
      </div>
      <div className={styles.summaryTop}>
        <h2>Review Your Order</h2>
        <p>Before finalizing the purchase check if your information is correct!</p>
      </div>

      <div className={styles.checkoutOverview}>
        {/* Personal Info */}
        <div className={styles.section}>
          <Title order={4}>Personal information</Title>
          <Text>{`${resolvedFirstName || '-'} ${resolvedLastName || '-'}`}</Text>
          <Text>{resolvedEmail || '-'}</Text>
        </div>

        {/* Gift Options */}
        <div className={styles.section}>
          <Title order={4}>Buying for a friend</Title>
          <div className='friend-additional'>
            <Text>{addGiftWrap ? '🎁 Gift wrapping added' : 'No gift wrapping'}</Text>
            <Text>{addPersonalCard ? '✉️ Personal card added' : 'No personal card'}</Text>
          </div>
          {(addGiftWrap || addPersonalCard) && (
            <>
              <Divider />
              <Text><span className={styles.subtitleText}>Name:</span> {friendName || '-'}</Text>
              <Text><span className={styles.subtitleText}>Email:</span> {friendEmail || '-'}</Text>
              {addPersonalCard && (
                <Text><span className={styles.subtitleText}>Note:</span> {personalNote || '-'}</Text>
              )}
            </>
          )}
        </div>

        {/* Shipping Info */}
        <div className={styles.section}>
          <Title order={4}>Shipping information</Title>
          <Text>
            <span className={styles.subtitleText}>Address:</span> {street} {houseNumber}, {postalCode}, {country}
          </Text>
          <Text>
            <span className={styles.subtitleText}>Phone:</span> {phone}
          </Text>

          <Divider />

          <Title order={4}>Payment method</Title>
          <Text>
            <span className={styles.subtitleText}>Method:</span> {paymentLabels[method] || '-'}
          </Text>
          {method === 'card' && (
            <>
              <Text><span className={styles.subtitleText}>Cardholder:</span> {cardName}</Text>
              <Text><span className={styles.subtitleText}>Card number:</span> **** **** **** {cardNumber?.slice(-4)}</Text>
            </>
          )}
        </div>

        {/* Order Summary */}
        <div className={styles.checkoutOrderInfo}>
          <Title order={4}>Order summary</Title>
          {basketItems.map(item => (
            <div className={styles.summaryLine} key={item.id}>
              <Text>{item.name} x{item.quantity}</Text>
              <Text>€{(item.price * item.quantity).toFixed(2).replace('.', ',')}</Text>
            </div>
          ))}

          <Divider my='sm' />

          <Title order={4}>Costs</Title>
          <div className={styles.summaryLine}>
            <Text>Shipping</Text>
            <Text>€{SHIPPING_COST.toFixed(2).replace('.', ',')}</Text>
          </div>
          {addGiftWrap && (
            <div className={styles.summaryLine}>
              <Text>🎁 Gift wrapping</Text>
              <Text>€{GIFT_WRAP_COST.toFixed(2).replace('.', ',')}</Text>
            </div>
          )}
          {addPersonalCard && (
            <div className={styles.summaryLine}>
              <Text>✉️ Personal card</Text>
              <Text>€{PERSONAL_CARD_COST.toFixed(2).replace('.', ',')}</Text>
            </div>
          )}
          <Divider my='sm' />
          <div className={styles.summaryLineTotal}>
            <Text className={styles.totalText}>Final total</Text>
            <Text className={styles.totalText}>€{finalTotal}</Text>
          </div>
        </div>

        <BottomBarButton
          fullWidth
          loading={buttonLoading}
          onClick={handleConfirm}
          text='Finalize purchase'
        />
      </div>
    </div>
  );
}
