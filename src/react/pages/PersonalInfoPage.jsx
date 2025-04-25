import React, { useState } from 'react';
import { Title, Text, TextInput, Group, Button, Divider } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

import FinalStepper from '../components/stepper/Stepper';
import AddressSearch from '../components/AddressSearch';
import '@/sass/pages/_personal_info.scss';

export default function PersonalInfoPage() {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);

  const [address1, setAddress1] = useState(null);
  const [address2, setAddress2] = useState('');
  const [phone, setPhone] = useState('');
  const [showSecondAddress, setShowSecondAddress] = useState(false);

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvc, setCvc] = useState('');
  const [showPayment, setShowPayment] = useState(false);

  const goToPaymentStep = () => {
    if (!address1 || !phone) {
      alert('Please fill out all required information.');
      return;
    }
    setActiveStep(1);
  };

  const handleConfirm = () => {
    const hasPayment = cardName && cardNumber && cvc;
    const payload = {
      address_1: address1,
      address_2: showSecondAddress ? address2 : null,
      phone,
      payment: hasPayment
        ? `${cardName} / ${cardNumber} / CVC: ${cvc}`
        : 'No payment method provided',
    };

    console.log('Submitted info:', payload);
    alert('✅ Personal information submitted!');
    navigate('/profile');
  };

  return (
    <div className='personal-info-page'>
      <Group position='apart' mb='md'>
        <Button
          variant='subtle'
          leftIcon={<IconArrowLeft size={20} />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
        <Title order={2}>Your Info</Title>
      </Group>

      <FinalStepper active={activeStep} />

      <div className='personal-form' style={{ marginTop: '2rem' }}>
        {activeStep === 0 && (
          <>
            <Title order={3} mb='sm'>
              Personal information
            </Title>

            <Text size='sm' fw={600} mb='xs'>
              Address
            </Text>
            <AddressSearch onSelect={addr => setAddress1(addr.display_name)} />
            {!showSecondAddress && (
              <Text
                size='sm'
                c='dimmed'
                style={{ cursor: 'pointer' }}
                onClick={() => setShowSecondAddress(true)}
              >
                + Add another address
              </Text>
            )}
            {showSecondAddress && (
              <TextInput
                label='Second address'
                value={address2}
                onChange={e => setAddress2(e.currentTarget.value)}
                mt='xs'
              />
            )}

            <TextInput
              label='Phone number'
              value={phone}
              onChange={e => setPhone(e.currentTarget.value)}
              required
              mt='md'
            />

            <Group mt='xl' position='center'>
              <Button onClick={goToPaymentStep} color='grape' radius='xl'>
                Continue to payment
              </Button>
            </Group>
          </>
        )}

        {activeStep === 1 && (
          <>
            <Divider my='xl' />
            <Title order={3}>Payment method (optional)</Title>

            {!showPayment ? (
              <Text
                size='sm'
                c='dimmed'
                style={{ cursor: 'pointer' }}
                onClick={() => setShowPayment(true)}
              >
                + Add payment method
              </Text>
            ) : (
              <>
                <TextInput
                  label='Cardholder name'
                  value={cardName}
                  onChange={e => setCardName(e.currentTarget.value)}
                  mt='xs'
                />
                <TextInput
                  label='Card number'
                  value={cardNumber}
                  onChange={e => setCardNumber(e.currentTarget.value)}
                  mt='xs'
                />
                <TextInput
                  label='CVC'
                  value={cvc}
                  onChange={e => setCvc(e.currentTarget.value)}
                  mt='xs'
                />
              </>
            )}

            <Group mt='xl' position='center'>
              <Button onClick={handleConfirm} color='pink' radius='xl'>
                Confirm & Continue
              </Button>
            </Group>
          </>
        )}
      </div>
    </div>
  );
}
