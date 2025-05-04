import React, { useState, useEffect } from 'react';
import { Title, Text, Divider, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';

import FinalStepper from '../../components/stepper/Stepper';
import { BackHeader } from '../../components/buttons/IconButtons';
import { ContinueButton } from '../../components/buttons/RedButtons';

import ConfirmationOverlay from '../../components/checkout/ConfirmationOverlay';
import '@/sass/pages/_checkout_page.scss';
import '@/sass/pages/checkout/_last_popup.scss';

export default function CheckoutOverviewPage() {
  const navigate = useNavigate();
  const [showFinalScreen, setShowFinalScreen] = useState(false);

  const savedPersonal = JSON.parse(
    localStorage.getItem('personalInfo') || '{}'
  );
  const savedAddress = JSON.parse(
    localStorage.getItem('shippingAddress') || '{}'
  );
  const savedPayment = JSON.parse(
    localStorage.getItem('paymentMethod') || '{}'
  );

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

  const [basketItems, setBasketItems] = useState([]);
  const [basketTotal, setBasketTotal] = useState(0);

  const SHIPPING_COST = 5.0;
  const GIFT_WRAP_COST = addGiftWrap ? 3.99 : 0;
  const PERSONAL_CARD_COST = addPersonalCard ? 2.99 : 0;
  const finalTotal = (
    basketTotal +
    SHIPPING_COST +
    GIFT_WRAP_COST +
    PERSONAL_CARD_COST
  )
    .toFixed(2)
    .replace('.', ',');

  useEffect(() => {
    fetch('http://localhost:8000/api/basket')
      .then(res => res.json())
      .then(data => {
        setBasketItems(data.items || []);
        setBasketTotal(data.total_price || 0);
      })
      .catch(err => console.error('Failed to fetch basket:', err));
  }, []);

  const paymentLabels = {
    card: 'Credit / Debit Card',
    paypal: 'PayPal',
    klarna: 'Klarna',
    applepay: 'Apple Pay',
  };

  const handleConfirm = async () => {
    if (!firstName || !lastName || !email) {
      showNotification({
        title: 'Missing Info',
        message: 'Personal info incomplete',
        color: 'red',
      });
      return;
    }
    if (!country || !street || !houseNumber || !postalCode || !phone) {
      showNotification({
        title: 'Missing Info',
        message: 'Address incomplete',
        color: 'red',
      });
      return;
    }
    if (!method) {
      showNotification({
        title: 'Missing Info',
        message: 'Payment method not selected',
        color: 'red',
      });
      return;
    }

    const items = basketItems.map(i => ({
      id: i.id,
      name: i.name,
      quantity: i.quantity,
      price: i.price,
    }));
    const payload = {
      full_name: `${firstName} ${lastName}`,
      email,
      phone,
      address_1: `${street} ${houseNumber}`,
      address_2: '',
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
      const res = await fetch('http://localhost:8000/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Server responded ${res.status}`);

      localStorage.removeItem('personalInfo');
      localStorage.removeItem('shippingAddress');
      localStorage.removeItem('paymentMethod');

      setShowFinalScreen(true);
    } catch (err) {
      console.error(err);
      showNotification({
        title: 'Order Failed',
        message: 'Could not submit order. Please try again.',
        color: 'red',
      });
    }
  };

  if (showFinalScreen) {
    return <ConfirmationOverlay />;
  }

  return (
    <div className='checkout-page'>
      <BackHeader text='Review Your Order' />
      <FinalStepper active={3} />
      <div className='checkout-overview' style={{ marginTop: '2rem' }}>
        <Title order={4}>Personal Information</Title>
        <Text>
          {firstName} {lastName}
        </Text>
        <Text>{email}</Text>
        <Divider my='sm' />
        <Title order={4}>Buying for a Friend</Title>
        <Text>
          {addGiftWrap ? '🎁 Gift wrapping added' : 'No gift wrapping'}
        </Text>
        <Text>
          {addPersonalCard ? '✉️ Personal card added' : 'No personal card'}
        </Text>
        {(addGiftWrap || addPersonalCard) && (
          <>
            <Text>Name: {friendName || '-'}</Text>
            <Text>Email: {friendEmail || '-'}</Text>
            {addPersonalCard && <Text>Note: {personalNote || '-'}</Text>}
          </>
        )}
        <Divider my='sm' />
        <Title order={4}>Shipping Address</Title>
        <Text>
          {street} {houseNumber}, {postalCode}, {country}
        </Text>
        <Text>Phone: {phone}</Text>
        <Divider my='sm' />
        <Title order={4}>Payment Method</Title>
        <Text>{paymentLabels[method] || '-'}</Text>
        {method === 'card' && (
          <>
            <Text>Cardholder: {cardName}</Text>
            <Text>Card Number: **** **** **** {cardNumber.slice(-4)}</Text>
          </>
        )}
        <Divider my='sm' />
        <Title order={4}>Order Summary</Title>
        {basketItems.map(item => (
          <div className='summary-line' key={item.id}>
            <Text>
              {item.name} x{item.quantity}
            </Text>
            <Text>
              €{(item.price * item.quantity).toFixed(2).replace('.', ',')}
            </Text>
          </div>
        ))}
        <Divider my='xs' />
        <div className='summary-line'>
          <Text>Shipping</Text>
          <Text>€{SHIPPING_COST.toFixed(2).replace('.', ',')}</Text>
        </div>
        {addGiftWrap && (
          <div className='summary-line'>
            <Text>🎁 Gift wrapping</Text>
            <Text>€{GIFT_WRAP_COST.toFixed(2).replace('.', ',')}</Text>
          </div>
        )}
        {addPersonalCard && (
          <div className='summary-line'>
            <Text>✉️ Personal card</Text>
            <Text>€{PERSONAL_CARD_COST.toFixed(2).replace('.', ',')}</Text>
          </div>
        )}
        <Divider my='xs' />
        <div className='summary-line total'>
          <Text fw={700}>Final Total</Text>
          <Text fw={700}>€{finalTotal}</Text>
        </div>
        <ContinueButton
          fullWidth
          mt='xl'
          onClick={handleConfirm}
          text='Confirm & Pay'
        />
      </div>
    </div>
  );
}
