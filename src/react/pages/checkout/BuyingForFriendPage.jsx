import React, { useState, useEffect } from 'react';
import { Title, Checkbox, TextInput, Divider } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { BackHeader } from '../../components/buttons/IconButtons';
import FinalStepper from '../../components/stepper/Stepper';
import { ContinueButton } from '../../components/buttons/RedButtons';
import { useCheckout } from '../../contexts/CheckoutContext';
import '@/sass/pages/_checkout_page.scss';

const STORAGE_KEY = 'personalInfo';

export default function BuyingForFriendPage() {
  const navigate = useNavigate();
  const { friendInfo, setFriendInfo } = useCheckout();

  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  const init = {
    addGiftWrap: saved.addGiftWrap ?? friendInfo.addGiftWrap ?? false,
    addPersonalCard:
      saved.addPersonalCard ?? friendInfo.addPersonalCard ?? false,
    friendName: saved.friendName ?? friendInfo.friendName ?? '',
    friendEmail: saved.friendEmail ?? friendInfo.friendEmail ?? '',
    personalNote: saved.personalNote ?? friendInfo.personalNote ?? '',
  };

  const [addGiftWrap, setAddGiftWrap] = useState(init.addGiftWrap);
  const [addPersonalCard, setAddPersonalCard] = useState(init.addPersonalCard);
  const [friendName, setFriendName] = useState(init.friendName);
  const [friendEmail, setFriendEmail] = useState(init.friendEmail);
  const [personalNote, setPersonalNote] = useState(init.personalNote);

  const GIFT_WRAP_COST = 3.99;
  const PERSONAL_CARD_COST = 2.99;

  useEffect(() => {
    const info = {
      addGiftWrap,
      addPersonalCard,
      friendName,
      friendEmail,
      personalNote,
    };
    setFriendInfo(info);

    const base = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...base, ...info }));
  }, [addGiftWrap, addPersonalCard, friendName, friendEmail, personalNote]);

  const handleContinue = () => {
    navigate('/checkout/address');
  };

  return (
    <div className='checkout-page'>
      <BackHeader text='Buying for a friend?' />
      <FinalStepper active={1} />

      <div className='checkout-summary' style={{ marginTop: '2rem' }}>
        <Title order={4}>Buying for a friend</Title>

        <Checkbox
          label={`🎁 Gift wrapping (€${GIFT_WRAP_COST.toFixed(2)})`}
          mt='sm'
          checked={addGiftWrap}
          onChange={e => setAddGiftWrap(e.currentTarget.checked)}
        />
        <Checkbox
          label={`✉️ Personal card (€${PERSONAL_CARD_COST.toFixed(2)})`}
          mt='sm'
          checked={addPersonalCard}
          onChange={e => setAddPersonalCard(e.currentTarget.checked)}
        />

        <TextInput
          label="Friend's Name"
          value={friendName}
          onChange={e => setFriendName(e.currentTarget.value)}
          mt='sm'
        />
        <TextInput
          label="Friend's Email"
          type='email'
          value={friendEmail}
          onChange={e => setFriendEmail(e.currentTarget.value)}
          mt='sm'
        />
        <TextInput
          label='Personal Note'
          placeholder='Write a message...'
          value={personalNote}
          onChange={e => setPersonalNote(e.currentTarget.value)}
          mt='sm'
        />

        <Divider my='md' />
        <ContinueButton
          fullWidth
          mt='xl'
          onClick={handleContinue}
          text='Continue to Address'
        />
      </div>
    </div>
  );
}
