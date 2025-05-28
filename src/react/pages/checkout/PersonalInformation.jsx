import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/react/hooks/useAuth.jsx';
import { TextInput, Divider, PasswordInput, Loader } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { SignUpButton } from '@/react/components/buttons/RedButtons';
import {
  ContinueWithFacebookIconButton,
  ContinueWithGoogleIconButton,
  BackIconButton,
} from '@/react/components/buttons/IconButtons';
import { getFirebaseAuth } from '@/getFirebaseAuth';
import { useCheckout } from '@/react/contexts/CheckoutContext';

import styles from './PersonalInformation.module.scss';

import { IconEye } from '@tabler/icons-react';
import { IconEyeOff } from '@tabler/icons-react';

const saveBackendUserId = id => localStorage.setItem('backendUserId', id);
const clearBackendUserId = () => localStorage.removeItem('backendUserId');

const STORAGE_KEY = 'personalInfo';

export default function PersonalInfoCheckout() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();
  const { loading: authLoading } = useAuth();
  const { setPersonalInfo } = useCheckout();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (saved.firstName) setFirstName(saved.firstName);
    if (saved.lastName) setLastName(saved.lastName);
    if (saved.email) setEmail(saved.email);
  }, []);

  if (authLoading) {
    return (
      <div className='checkout-auth-loading'>
        <Loader size='lg' color='pink' />
      </div>
    );
  }

  const validateInputs = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      showNotification({
        title: 'Missing Fields',
        message: 'Please fill out all fields.',
        color: 'red',
        position: 'top-center',
      });
      return false;
    }
    if (!email.includes('@') || !email.includes('.')) {
      showNotification({
        title: 'Invalid Email',
        message: 'Please enter a valid email address.',
        color: 'red',
        position: 'top-center',
      });
      return false;
    }
    if (password.length < 6) {
      showNotification({
        title: 'Weak Password',
        message: 'Password must be at least 6 characters.',
        color: 'red',
        position: 'top-center',
      });
      return false;
    }
    if (password !== confirmPassword) {
      showNotification({
        title: 'Password Mismatch',
        message: 'Passwords do not match.',
        color: 'red',
        position: 'top-center',
      });
      return false;
    }
    return true;
  };

  const handleEmailContinue = async () => {
    if (!validateInputs()) {
      return;
    }

    try {
      const { auth, createUserWithEmailAndPassword, signOut } =
        await getFirebaseAuth();
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;

      await auth.currentUser.reload();
      await auth.currentUser.getIdToken(true);

      showNotification({
        title: 'Signed up!',
        message: `Welcome ${user.displayName || firstName}!`,
        color: 'green',
        position: 'top-center',
      });

      const backendResponse = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          firebase_uid: user.uid,
        }),
      });

      const backendData = await backendResponse.json();
      if (backendResponse.ok && backendData.user_id) {
        saveBackendUserId(backendData.user_id);

        setPersonalInfo({
          firstName,
          lastName,
          email,
        });

        navigate('/checkout/friend-info');
      } else {
        throw new Error(
          backendData.error || 'Failed to create user on server.'
        );
      }
    } catch (err) {
      showNotification({
        title: 'Sign-up error',
        message: err.message,
        color: 'red',
        position: 'top-center',
      });

      try {
        const { auth, signOut } = await getFirebaseAuth();
        await signOut(auth);
        clearBackendUserId();
      } catch (signOutError) {}
    }
  };

  const handleSocialSignIn = async (providerName, label) => {
    try {
      const { auth, signInWithPopup, googleProvider, facebookProvider } =
        await getFirebaseAuth();
      const provider =
        providerName === 'Google' ? googleProvider : facebookProvider;
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      showNotification({
        title: `Logged in with ${label}`,
        message: `Welcome ${user.displayName || 'back'}!`,
        color: 'green',
        position: 'top-center',
      });

      setPersonalInfo({
        firstName: user.displayName || '',
        lastName: '',
        email: user.email || '',
      });

      navigate('/checkout/friend-info');
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
    <div className={styles.signupPage}>
      <div className={styles.backIconButton}>
        <BackIconButton />
      </div>
      <h2>Account</h2>
      <div className={styles.stepDescription}>
        <p style={{ color: 'red', fontWeight: 'bold' }}>Before proceeding!</p>
        <p>Seems like you don't have an account or aren't logged in!</p>
      </div>

      <div className={styles.formWrapper}>
        <TextInput
          label='First Name'
          placeholder='Your first name'
          value={firstName}
          onChange={e => setFirstName(e.currentTarget.value)}
          className={styles.inputField}
          required
        />
        <TextInput
          label='Last Name'
          placeholder='Your last name'
          value={lastName}
          onChange={e => setLastName(e.currentTarget.value)}
          className={styles.inputField}
          required
        />
        <TextInput
          label='Email'
          placeholder='Your email...'
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
          className={styles.inputField}
          required
        />

        <PasswordInput
          label='Password'
          placeholder='Enter your password...'
          visible={passwordVisible}
          onVisibilityChange={() => setPasswordVisible(v => !v)}
          visibilityToggleIcon={({ reveal }) =>
            reveal ? <IconEyeOff size={16} /> : <IconEye size={16} />
          }
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
          className={styles.inputField}
          required
        />

        <PasswordInput
          label='Confirm Password'
          placeholder='Confirm your password'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.currentTarget.value)}
          className={styles.inputField}
          required
        />

        <SignUpButton
          fullWidth
          onClick={handleEmailContinue}
          className={styles.signUpButton}
        >
          Continue
        </SignUpButton>
      </div>

      <div className={styles.socialRegisterSection}>
        <Divider
          className={styles.socialDivider}
          label='Or log in with'
          labelPosition='center'
        />
        <div className={styles.socialButtons}>
          <ContinueWithFacebookIconButton
            fullWidth
            onClick={() => handleSocialSignIn('Facebook', 'Facebook')}
          />
          <ContinueWithGoogleIconButton
            fullWidth
            onClick={() => handleSocialSignIn('Google', 'Google')}
          />
          <div className={styles.loginLink}>
            <Link to='/login'>Already have an account? Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
