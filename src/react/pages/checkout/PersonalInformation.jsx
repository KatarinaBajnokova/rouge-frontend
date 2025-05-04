import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput, Divider } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import {
  BottomBarButton,
  LogInButton,
} from '../../components/buttons/RedButtons';
import FinalStepper from '../../components/stepper/Stepper';
import {
  ContinueWithFacebookIconButton,
  ContinueWithGoogleIconButton,
  BackIconButton,
} from '../../components/buttons/IconButtons';

import {
  auth,
  googleProvider,
  facebookProvider,
  signInWithPopup,
} from '@/firebase';
import { useCheckout } from '../../contexts/CheckoutContext';

import '@/sass/pages/checkout/_personal_information.scss';
import '@/sass/components/buttons/_redbuttons.scss';

const STORAGE_KEY = 'personalInfo';

export default function PersonalInfoCheckout() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [vatNumber, setVatNumber] = useState('');
  const [addGiftWrap, setAddGiftWrap] = useState(false);
  const [addPersonalCard, setAddPersonalCard] = useState(false);
  const [friendName, setFriendName] = useState('');
  const [friendEmail, setFriendEmail] = useState('');
  const [personalNote, setPersonalNote] = useState('');

  const navigate = useNavigate();
  const { setPersonalInfo } = useCheckout();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (saved.firstName) setFirstName(saved.firstName);
    if (saved.lastName) setLastName(saved.lastName);
    if (saved.email) setEmail(saved.email);
    if (saved.companyName) setCompanyName(saved.companyName);
    if (saved.vatNumber) setVatNumber(saved.vatNumber);
    if (saved.addGiftWrap != null) setAddGiftWrap(saved.addGiftWrap);
    if (saved.addPersonalCard != null)
      setAddPersonalCard(saved.addPersonalCard);
    if (saved.friendName) setFriendName(saved.friendName);
    if (saved.friendEmail) setFriendEmail(saved.friendEmail);
    if (saved.personalNote) setPersonalNote(saved.personalNote);
  }, []);

  const persistAndContinue = info => {
    setPersonalInfo(info);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(info));

    navigate('/checkout/friend-info');
  };

  const handleEmailContinue = () => {
    if (!firstName || !lastName || !email) {
      showNotification({
        title: 'Missing Fields',
        message: 'Please fill out first name, last name, and email.',
        color: 'red',
        position: 'top-center',
      });
      return;
    }
    persistAndContinue({
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
    });
  };

  const handleSocialSignIn = async (provider, label) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const info = {
        firstName: user.displayName || '',
        lastName: '',
        email: user.email || '',
        companyName: '',
        vatNumber: '',
        addGiftWrap: false,
        addPersonalCard: false,
        friendName: '',
        friendEmail: '',
        personalNote: '',
      };
      showNotification({
        title: `Logged in with ${label}`,
        message: `Welcome ${user.displayName || 'back'}!`,
        color: 'green',
        position: 'top-center',
      });
      persistAndContinue(info);
    } catch (err) {
      showNotification({
        title: `${label} sign-in error`,
        message: err.message,
        color: 'red',
        position: 'top-center',
      });
    }
  };

  return (
    <div className='signup-page'>
      <div className='page-header'>
        <BackIconButton />
        <h2>Personal Information</h2>
      </div>

      <FinalStepper active={0} />

      <TextInput
        label='First Name'
        placeholder='Your first name'
        value={firstName}
        onChange={e => setFirstName(e.currentTarget.value)}
        required
      />
      <TextInput
        label='Last Name'
        placeholder='Your last name'
        value={lastName}
        onChange={e => setLastName(e.currentTarget.value)}
        required
        mt='sm'
      />
      <TextInput
        label='Email'
        placeholder='Your email...'
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
        required
        mt='sm'
      />

      <Divider label='or log in with' labelPosition='center' mt='lg' mb='sm' />
      <div className='social-buttons'>
        <ContinueWithFacebookIconButton
          fullWidth
          onClick={() => handleSocialSignIn(facebookProvider, 'Facebook')}
        />
        <ContinueWithGoogleIconButton
          fullWidth
          onClick={() => handleSocialSignIn(googleProvider, 'Google')}
        />
        <LogInButton fullWidth onClick={() => navigate('/login')}>
          Log in
        </LogInButton>
      </div>

      <BottomBarButton text='Continue' onClick={handleEmailContinue} mt='lg' />
    </div>
  );
}
