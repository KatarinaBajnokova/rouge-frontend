import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextInput, PasswordInput, Divider, Button } from '@mantine/core';
import IconEye from '@tabler/icons-react/dist/esm/icons/iconEye';
import IconEyeOff from '@tabler/icons-react/dist/esm/icons/iconEyeOff';
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

  // 🔥 Helper function: after successful login, fetch user ID
  const fetchUserId = async email => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/users/by-email?email=${encodeURIComponent(email)}`
      );
      if (!response.ok) {
        throw new Error('User not found in backend.');
      }
      const data = await response.json();
      console.log('✅ Fetched userId:', data.user_id);

      localStorage.setItem('userId', data.user_id);
      showNotification({
        title: 'Welcome!',
        message: 'You are now logged in.',
        color: 'green',
      });

      navigate('/homescreen'); // Change if needed
    } catch (error) {
      console.error('❌ Error fetching user ID:', error.message);
      showNotification({
        title: 'Login error',
        message: 'Failed to fetch user profile.',
        color: 'red',
      });
    }
  };

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

      await fetchUserId(email); // 🚀 Fetch user ID after Firebase login
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

      await fetchUserId(user.email); // 🚀 Fetch user ID
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

      await fetchUserId(user.email); // 🚀 Fetch user ID
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
