import React, { useState, useEffect } from 'react';
import { Title, Checkbox, TextInput, Textarea } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { BackIconButton } from '@/react/components/buttons/IconButtons';
import FinalStepper from '@/react/components/stepper/Stepper';
import { BottomBarButton } from '@/react/components/buttons/RedButtons';
import { useCheckout } from '@/react/contexts/CheckoutContext';
import styles from './BuyingForFriendPage.module.scss';
import { useAuth } from '@/react/hooks/useAuth.jsx';

const STORAGE_KEY = 'personalInfo';

export default function BuyingForFriendPage() {
  const navigate = useNavigate();
  const { friendInfo, setFriendInfo } = useCheckout();
  const { userId } = useAuth();

  useEffect(() => {
    const fetchBackendUserId = async () => {
      if (!userId) return;

      try {
        const res = await fetch(`/api/users/by-firebase-uid?uid=${userId}`);
        const data = await res.json();

        if (res.ok && data.id) {
          localStorage.setItem('userId', data.id);
        }
      } catch (err) {}
    };

    fetchBackendUserId();
  }, [userId]);

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
    <div className={styles.forfriendPage}>
      <div className={styles.headerRow}>
        <div className={styles.backIconButton}>
          <BackIconButton />
        </div>
        <div className={styles.headerCenter}>
          <FinalStepper active={0} />
        </div>
      </div>

      <div className={styles.checkoutSummary}>
        <h2>Buying for a friend</h2>
        <p>If you're buying for a friend fillout these.</p>

        <div className={styles.checkoutForm}>
          <TextInput
            label='Name'
            placeholder="Friend's name..."
            value={friendName}
            onChange={e => setFriendName(e.currentTarget.value)}
            mt='sm'
          />
          <TextInput
            label='Email'
            placeholder="Friend's email..."
            type='email'
            value={friendEmail}
            onChange={e => setFriendEmail(e.currentTarget.value)}
            mt='sm'
          />
        </div>
      </div>

      <div className={styles.additional}>
        <h3>Additional</h3>
        <div className={styles.checkboxesPart}>
          <Checkbox
            label={`🎁 Gift wrapping (€${GIFT_WRAP_COST.toFixed(2)})`}
            mt='md'
            checked={addGiftWrap}
            onChange={e => setAddGiftWrap(e.currentTarget.checked)}
          />
          <Checkbox
            label={`✉️ Personal card (€${PERSONAL_CARD_COST.toFixed(2)})`}
            mt='md'
            checked={addPersonalCard}
            onChange={e => setAddPersonalCard(e.currentTarget.checked)}
          />
        </div>

        {addPersonalCard && (
          <div className={styles.myCustomTextarea}>
            <Textarea
              label='Personal Note'
              placeholder='Write a message...'
              value={personalNote}
              onChange={e => setPersonalNote(e.currentTarget.value)}
              minRows={3}
              autosize
              mt='sm'
            />
          </div>
        )}
        <BottomBarButton onClick={handleContinue} />
      </div>
    </div>
  );
}
