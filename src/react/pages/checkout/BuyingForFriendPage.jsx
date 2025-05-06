import React, { useState, useEffect } from 'react';
import { Title, Checkbox, TextInput, Textarea } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { BackIconButton } from '../../components/buttons/IconButtons';
import FinalStepper from '../../components/stepper/Stepper';
import { BottomBarButton } from '../../components/buttons/RedButtons';
import { useCheckout } from '../../contexts/CheckoutContext';
import '@/sass/pages/checkout/_forfriend_page.scss';

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
    <div className='forfriend-page'>
      <BackIconButton />
      <FinalStepper active={0} />

      <div className='checkout-summary'>
        <h2>Buying for a friend</h2>
        <p>If you're buying for a friend fillout these.</p>

        <TextInput
          className='checkout-form'
          label='Name'
          placeholder="Friend's name..."
          value={friendName}
          onChange={e => setFriendName(e.currentTarget.value)}
          mt='sm'
        />
        <TextInput
          className='checkout-form'
          label='Email'
          placeholder="Friend's email..."
          type='email'
          value={friendEmail}
          onChange={e => setFriendEmail(e.currentTarget.value)}
          mt='sm'
        />
      </div>

      <div className='additional'>
        <div className='checkboxes-part'>
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
        </div>

        {addPersonalCard && (
          <Textarea
            className='my-custom-textarea'
            label='Personal Note'
            placeholder='Write a message...'
            value={personalNote}
            onChange={e => setPersonalNote(e.currentTarget.value)}
            minRows={3}
            autosize
            mt='sm'
          />
        )}
        <BottomBarButton onClick={handleContinue} />
      </div>
    </div>
  );
}
