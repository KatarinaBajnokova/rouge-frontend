import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextInput, PasswordInput, Divider } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { SignUpButton } from '../../components/buttons/RedButtons';
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
import { createUserWithEmailAndPassword } from 'firebase/auth';
import IconEye from '@tabler/icons-react/dist/esm/icons/iconEye';
import IconEyeOff from '@tabler/icons-react/dist/esm/icons/iconEyeOff';

import { useSignUpData } from '../../hooks/useSignUpData';
import '@/sass/pages/_signup_page.scss';

const SignUpPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { save } = useSignUpData();
  const navigate = useNavigate();

  const handleEmailSignUp = async () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      showNotification({
        title: 'Missing Fields',
        message: 'Please fill out all fields.',
        color: 'red',
        position: 'top-center',
      });
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      showNotification({
        title: 'Invalid Email',
        message: 'Please enter a valid email address.',
        color: 'red',
        position: 'top-center',
      });
      return;
    }
    if (password.length < 6) {
      showNotification({
        title: 'Weak Password',
        message: 'Password must be at least 6 characters.',
        color: 'red',
        position: 'top-center',
      });
      return;
    }
    if (password !== confirmPassword) {
      showNotification({
        title: 'Password Mismatch',
        message: 'Passwords do not match.',
        color: 'red',
        position: 'top-center',
      });
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;
      console.log('✅ Firebase sign-up success:', user);

      save({
        firstName,
        lastName,
        email,
        password,
        firebaseUid: user.uid,
      });

      showNotification({
        title: 'Onward!',
        message: 'Let’s keep personalizing your profile…',
        color: 'green',
      });
      navigate('/personal-look');
    } catch (err) {
      console.error('❌ Sign-up error:', err.message);
      if (err.message.includes('email-already-in-use')) {
        showNotification({
          title: 'Email already exists',
          message: 'Use a different email or log in.',
          color: 'red',
        });
      } else {
        showNotification({
          title: 'Sign-up error',
          message: err.message,
          color: 'red',
        });
      }
    }
  };

  const handleSocialSignIn = async providerName => {
    try {
      let provider =
        providerName === 'google' ? googleProvider : facebookProvider;
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(`✅ ${providerName} sign-in success:`, user);

      const [first, ...rest] = (user.displayName || '').split(' ');
      save({
        firstName: first || '',
        lastName: rest.join(' ') || '',
        email: user.email || '',
        firebaseUid: user.uid,
        provider: providerName,
      });

      showNotification({
        title: `Logged in with ${providerName}`,
        message: `Welcome ${first || 'back'}!`,
        color: 'green',
      });
      navigate('/personal-look');
    } catch (err) {
      console.error(`❌ ${providerName} sign-in error:`, err.message);
      showNotification({
        title: `${providerName} sign-in error`,
        message: err.message,
        color: 'red',
      });
    }
  };

  return (
    <div className='signup-page'>
      <BackIconButton />
      <FinalStepper active={0} />

      <h2>Sign-up</h2>
      <p>Create a new account</p>

      <TextInput
        label='First Name'
        placeholder='Your first name'
        value={firstName}
        onChange={e => setFirstName(e.currentTarget.value)}
        className='input-field'
        required
      />

      <TextInput
        label='Last Name'
        placeholder='Your last name'
        value={lastName}
        onChange={e => setLastName(e.currentTarget.value)}
        className='input-field'
        required
      />

      <TextInput
        label='Email'
        placeholder='Your email...'
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
        className='input-field'
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
        className='input-field'
        required
      />

      <PasswordInput
        label='Confirm Password'
        placeholder='Confirm your password'
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.currentTarget.value)}
        className='input-field'
        required
      />

      <SignUpButton fullWidth onClick={handleEmailSignUp} />

      <div className='social-register-section'>
        <Divider label='Or register with' labelPosition='center' />

        <div className='social-buttons'>
          <ContinueWithFacebookIconButton
            fullWidth
            onClick={() => handleSocialSignIn('facebook')}
          />
          <ContinueWithGoogleIconButton
            fullWidth
            onClick={() => handleSocialSignIn('google')}
          />
        </div>

        <div className='login-link'>
          <Link to='/login'>Already have an account? Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
