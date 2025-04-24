import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TextInput, PasswordInput, Divider, Button } from '@mantine/core';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { showNotification } from '@mantine/notifications';

import FinalStepper from '../components/stepper/Stepper';
import {
  ContinueWithFacebookIconButton,
  ContinueWithGoogleIconButton,
} from '../components/buttons/IconButtons';

import {
  auth,
  googleProvider,
  facebookProvider,
  signInWithPopup,
} from '@/firebase';

import { signInWithEmailAndPassword } from 'firebase/auth';
import '@/sass/pages/_signup_page.scss';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleEmailLogin = async () => {
    if (!email || !password) {
      showNotification({
        title: 'Missing credentials',
        message: 'Please enter both email and password.',
        color: 'red',
      });
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      console.log('✅ Email/password login success:', user);

      showNotification({
        title: 'Logged in!',
        message: 'Welcome back!',
        color: 'green',
      });

      // navigate('/homescreen');
    } catch (err) {
      console.error('❌ Email/password login error:', err.message);
      showNotification({
        title: 'Login error',
        message: err.message,
        color: 'red',
      });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('✅ Google login success:', user);

      showNotification({
        title: 'Logged in with Google',
        message: `Welcome ${user.displayName || 'back'}!`,
        color: 'green',
      });

      // navigate('/homescreen');
    } catch (err) {
      console.error('❌ Google sign-in error:', err.message);
      showNotification({
        title: 'Google sign-in error',
        message: err.message,
        color: 'red',
      });
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      console.log('✅ Facebook login success:', user);

      showNotification({
        title: 'Logged in with Facebook',
        message: `Welcome ${user.displayName || 'back'}!`,
        color: 'green',
      });

      // navigate('/homescreen');
    } catch (err) {
      console.error('❌ Facebook sign-in error:', err.message);
      showNotification({
        title: 'Facebook sign-in error',
        message: err.message,
        color: 'red',
      });
    }
  };

  return (
    <div className='signup-page'>
      <button className='back-button' onClick={() => navigate(-1)}>
        ←
      </button>

      <FinalStepper active={1} />

      <h2>Log in</h2>
      <p>Welcome back</p>

      <TextInput
        label='Email'
        placeholder='Your email...'
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
        className='input-field'
      />

      <PasswordInput
        label='Password'
        placeholder='Your password...'
        visible={passwordVisible}
        onVisibilityChange={() => setPasswordVisible(!passwordVisible)}
        visibilityToggleIcon={({ reveal }) =>
          reveal ? <IconEyeOff size={16} /> : <IconEye size={16} />
        }
        value={password}
        onChange={e => setPassword(e.currentTarget.value)}
        className='input-field'
      />

      <Button
        fullWidth
        className='sign-up-button'
        radius='md'
        size='md'
        onClick={handleEmailLogin}
      >
        Log in
      </Button>

      <Divider label='Or continue with' labelPosition='center' my='lg' />

      <div className='social-buttons'>
        <ContinueWithFacebookIconButton
          fullWidth
          onClick={handleFacebookSignIn}
        />
        <ContinueWithGoogleIconButton fullWidth onClick={handleGoogleSignIn} />
      </div>

      <div className='login-link'>
        <Link to='/signup'>Don't have an account? Sign up</Link>
      </div>
    </div>
  );
};

export default LoginPage;
