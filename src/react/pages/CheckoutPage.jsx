import React, { useState, useEffect } from 'react';
import {
  Title,
  Text,
  TextInput,
  Group,
  Button,
  Checkbox,
  Divider,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import FinalStepper from '../components/stepper/Stepper';
import { ConfirmPurchaseButton, BottomBarButton, BottomBarConfirmPurchaseButton } from '../components/buttons/RedButtons';
import { BackHeader } from '../components/buttons/IconButtons';
import '@/sass/pages/_checkout_page.scss';

export default function CheckoutPage() {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(false);
  const [showFinalScreen, setShowFinalScreen] = useState(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [vatNumber, setVatNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvc, setCvc] = useState('');
  const [friendName, setFriendName] = useState('');
  const [friendEmail, setFriendEmail] = useState('');
  const [addGiftWrap, setAddGiftWrap] = useState(false);
  const [addPersonalCard, setAddPersonalCard] = useState(false);
  const [personalMessage, setPersonalMessage] = useState('');

  const [showSecondAddress, setShowSecondAddress] = useState(false);
  const [isCompany, setIsCompany] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [isBuyingForFriend, setIsBuyingForFriend] = useState(false);

  const [basketItems, setBasketItems] = useState([]);
  const [basketTotal, setBasketTotal] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8000/api/basket')
      .then(res => res.json())
      .then(data => {
        setBasketItems(data.items || []);
        setBasketTotal(data.total_price || 0);
      })
      .catch(err => console.error('Failed to fetch basket:', err));
  }, []);

  const GIFT_WRAP_COST = 3.99;
  const PERSONAL_CARD_COST = 2.99;
  const baseTotal = basketTotal;
  const extrasTotal =
    (addGiftWrap ? GIFT_WRAP_COST : 0) +
    (addPersonalCard ? PERSONAL_CARD_COST : 0);
  const finalTotal = (baseTotal + extrasTotal).toFixed(2).replace('.', ',');

  const goToPaymentStep = () => {
    if (!fullName || !email || !address1 || !phone) {
      alert('Please fill out all personal information.');
      return;
    }
    setActiveStep(1);
  };

  const handleConfirmPurchase = async () => {
    if (!cardName || !cardNumber || !cvc) {
      alert('Please complete all payment information.');
      return;
    }

    const payload = {
      full_name: fullName,
      email,
      phone,
      address_1: address1,
      address_2: showSecondAddress ? address2 : null,
      company_name: isCompany ? companyName : null,
      vat_number: isCompany ? vatNumber : null,
      payment_method: `${cardName} / ${cardNumber} / CVC: ${cvc}`,
      is_gift: isBuyingForFriend,
      friend_name: isBuyingForFriend ? friendName : null,
      friend_email: isBuyingForFriend ? friendEmail : null,
      gift_wrap: addGiftWrap,
      personal_card: addPersonalCard,
      card_message: addPersonalCard ? personalMessage : null,
    };

    try {
      const res = await fetch('http://localhost:8000/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        setShowLoadingOverlay(true);
        setTimeout(() => {
          setShowLoadingOverlay(false);
          setShowFinalScreen(true);
        }, 2000);
      } else {
        alert('⚠️ Failed to confirm: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      alert('❌ Error sending order: ' + err.message);
    }
  };

  return (
    <div className='checkout-page'>
      <BackHeader text="Checkout"/>

      <FinalStepper active={activeStep} />

      <div className='checkout-form' style={{ marginTop: '2rem' }}>
        {activeStep === 0 && (
          <>
            <Title order={3} mb='sm'>
              Personal information
            </Title>
            <TextInput
              label='Full name'
              value={fullName}
              onChange={e => setFullName(e.currentTarget.value)}
              required
            />
            <TextInput
              label='Email'
              type='email'
              value={email}
              onChange={e => setEmail(e.currentTarget.value)}
              required
              mt='sm'
            />
            <TextInput
              label='Address'
              value={address1}
              onChange={e => setAddress1(e.currentTarget.value)}
              required
              mt='sm'
            />
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
              onChange={e => {
                const input = e.currentTarget.value;
                if (/^\d*$/.test(input)) setPhone(input);
              }}
              required
              mt='md'
            />
            <Text
              size='sm'
              color='magenta'
              style={{ cursor: 'pointer' }}
              onClick={() => setIsCompany(prev => !prev)}
            >
              ▼ I’m a company account
            </Text>
            {isCompany && (
              <>
                <TextInput
                  label='Company name'
                  value={companyName}
                  onChange={e => setCompanyName(e.currentTarget.value)}
                  mt='xs'
                />
                <TextInput
                  label='VAT number'
                  value={vatNumber}
                  onChange={e => setVatNumber(e.currentTarget.value)}
                  mt='xs'
                />
              </>
            )}
            
            <BottomBarButton text="Continue to payment" onClick={goToPaymentStep} />
          </>
        )}

        {activeStep === 1 && (
          <>
            <Divider my='xl' />
            <Title order={3}>Payment method</Title>
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
                  required
                  mt='xs'
                />
                <TextInput
                  label='Card number'
                  value={cardNumber}
                  onChange={e => setCardNumber(e.currentTarget.value)}
                  required
                  mt='xs'
                />
                <TextInput
                  label='CVC'
                  value={cvc}
                  onChange={e => setCvc(e.currentTarget.value)}
                  required
                  mt='xs'
                />
              </>
            )}
            <Checkbox
              label='I’m buying for a friend'
              mt='xl'
              checked={isBuyingForFriend}
              onChange={e => setIsBuyingForFriend(e.currentTarget.checked)}
            />
            {isBuyingForFriend && (
              <>
                <TextInput
                  label='Friend’s name'
                  value={friendName}
                  onChange={e => setFriendName(e.currentTarget.value)}
                  mt='xs'
                />
                <TextInput
                  label='Friend’s email'
                  type='email'
                  value={friendEmail}
                  onChange={e => setFriendEmail(e.currentTarget.value)}
                  mt='xs'
                />
                <Checkbox
                  label='🎁 Add gift wrapping (€3,99)'
                  checked={addGiftWrap}
                  onChange={e => setAddGiftWrap(e.currentTarget.checked)}
                  mt='sm'
                />
                <Checkbox
                  label='✉️ Add personal card (€2,99)'
                  checked={addPersonalCard}
                  onChange={e => setAddPersonalCard(e.currentTarget.checked)}
                  mt='xs'
                />
                {addPersonalCard && (
                  <TextInput
                    label='Message on the card'
                    placeholder='Write your message here...'
                    value={personalMessage}
                    onChange={e => setPersonalMessage(e.currentTarget.value)}
                    mt='xs'
                  />
                )}
              </>
            )}
            <Divider my='lg' />
            <div className='order-summary'>
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
              {addGiftWrap && (
                <div className='summary-line'>
                  <Text>🎁 Gift wrapping</Text>
                  <Text>€{GIFT_WRAP_COST.toFixed(2).replace('.', ',')}</Text>
                </div>
              )}
              {addPersonalCard && (
                <div className='summary-line'>
                  <Text>✉️ Personal card</Text>
                  <Text>
                    €{PERSONAL_CARD_COST.toFixed(2).replace('.', ',')}
                  </Text>
                </div>
              )}
              <Divider my='xs' />
              <div className='summary-line total'>
                <Text fw={700}>Final total</Text>
                <Text fw={700}>€{finalTotal}</Text>
              </div>
            </div>
            <BottomBarConfirmPurchaseButton onClick={handleConfirmPurchase} />
          </>
        )}
      </div>

      {showLoadingOverlay && (
        <div className='order-loading-overlay'>
          <div className='spinner' />
        </div>
      )}

      {showFinalScreen && (
        <div className='order-confirmation-screen'>
          <div className='confirmation-bubble'>
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
              onClick={() => navigate('/homescreen')}
            >
              Continue shopping
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
