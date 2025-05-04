import React, { useState, useEffect } from 'react';
import {
  Title,
  Group,
  Text,
  Paper,
  Box,
  TextInput,
  Modal,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { BackHeader } from '../../components/buttons/IconButtons';
import FinalStepper from '../../components/stepper/Stepper';
import { ContinueButton } from '../../components/buttons/RedButtons';
import {
  IconCreditCard,
  IconBrandPaypal,
  IconBrandApple,
} from '@tabler/icons-react';
import '@/sass/pages/checkout/_payment_method.scss';

const STORAGE_KEY = 'paymentMethod';

export default function PaymentMethodPage() {
  const navigate = useNavigate();

  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

  const [method, setMethod] = useState(saved.method || '');
  const [cardName, setCardName] = useState(saved.cardName || '');
  const [cardNumber, setCardNumber] = useState(saved.cardNumber || '');
  const [cvc, setCvc] = useState(saved.cvc || '');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const paymentInfo = { method, cardName, cardNumber, cvc };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(paymentInfo));
  }, [method, cardName, cardNumber, cvc]);

  const options = [
    {
      value: 'card',
      label: 'Credit / Debit Card',
      icon: <IconCreditCard size={24} />,
    },
    { value: 'paypal', label: 'PayPal', icon: <IconBrandPaypal size={24} /> },
    { value: 'klarna', label: 'Klarna', icon: <IconCreditCard size={24} /> },
    {
      value: 'applepay',
      label: 'Apple Pay',
      icon: <IconBrandApple size={24} />,
    },
  ];

  const selectMethod = value => {
    if (value === 'card') {
      setShowModal(false);
      setMethod(prev => (prev === value ? '' : value));
    } else {
      setMethod(value);
      setShowModal(true);
    }
  };

  const handleAuthenticate = () => {
    setShowModal(false);
    navigate('/checkout/summary');
  };

  const handleProceed = () => {
    if (!method) return;
    if (method === 'card' && (!cardName || !cardNumber || !cvc)) return;
    navigate('/checkout/summary');
  };

  const modalTitleMap = {
    paypal: 'Pay with PayPal',
    klarna: 'Pay with Klarna',
    applepay: 'Pay with Apple Pay',
  };

  const modalTextMap = {
    paypal: 'You will be redirected to PayPal to complete your purchase.',
    klarna: 'Proceed with Klarna to complete your payment.',
    applepay: 'Use Face ID or Touch ID to complete the payment.',
  };

  return (
    <>
      <div className='payment-method-page'>
        <BackHeader text='Payment Method' />
        <FinalStepper active={2} />

        <Box className='payment-method-form' mt='2rem'>
          <Title order={3} mb='sm'>
            Choose your payment method
          </Title>

          <Group direction='column' spacing='sm'>
            {options.map(({ value, label, icon }) => (
              <Paper
                key={value}
                withBorder
                radius='md'
                className={`payment-option ${
                  method === value ? 'selected' : ''
                }`}
                p='sm'
                onClick={() => selectMethod(value)}
              >
                <Group align='center' spacing='sm'>
                  {icon}
                  <Text>{label}</Text>
                </Group>
              </Paper>
            ))}
          </Group>

          {method === 'card' && (
            <Box mt='md'>
              <TextInput
                label='Cardholder Name'
                placeholder='John Doe'
                value={cardName}
                onChange={e => setCardName(e.currentTarget.value)}
                mb='sm'
              />
              <TextInput
                label='Card Number'
                placeholder='1234 5678 9012 3456'
                value={cardNumber}
                onChange={e => setCardNumber(e.currentTarget.value)}
                mb='sm'
              />
              <TextInput
                label='CVC'
                placeholder='123'
                value={cvc}
                onChange={e => setCvc(e.currentTarget.value)}
                mb='sm'
              />
            </Box>
          )}

          <ContinueButton
            text='Continue'
            fullWidth
            mt='xl'
            disabled={
              !method ||
              (method === 'card' && (!cardName || !cardNumber || !cvc))
            }
            onClick={handleProceed}
          />
        </Box>
      </div>

      <Modal
        opened={showModal}
        onClose={() => setShowModal(false)}
        title={modalTitleMap[method] || ''}
      >
        <Text mb='md'>{modalTextMap[method] || ''}</Text>
        <ContinueButton
          fullWidth
          onClick={handleAuthenticate}
          text='Authenticate'
        />
      </Modal>
    </>
  );
}
