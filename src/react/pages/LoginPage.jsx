import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextInput, PasswordInput, Divider, Button } from '@mantine/core';
import IconEye from '@tabler/icons-react/dist/esm/icons/iconEye';
import IconEyeOff from '@tabler/icons-react/dist/esm/icons/iconEyeOff';
import { showNotification } from '@mantine/notifications';
import { BackIconButton } from '../components/buttons/IconButtons';
import { LogInButton } from '../components/buttons/RedButtons';


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

import '@/sass/pages/_login_page.scss';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // New helper: authenticate against backend
  const loginWithBackend = async (email, password) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');

      localStorage.setItem('userId', data.user_id);
      showNotification({
        title: 'Welcome back!',
        message: 'You are now logged in.',
        color: 'green',
      });
      navigate('/homescreen');
    } catch (err) {
      console.error('❌ Backend login error:', err.message);
      showNotification({
        title: 'Login error',
        message: err.message,
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
    setLoading(true);
    try {
      // Optionally keep Firebase authentication:
      await signInWithEmailAndPassword(auth, email, password);
      // Then login against your backend
      await loginWithBackend(email, password);
    } catch (err) {
      console.error('❌ Email/password login error:', err.message);
      showNotification({
        title: 'Login error',
        message: err.message,
        color: 'red',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('✅ Google login success:', user);
      // Store ID token or fallback to homescreen
      navigate('/homescreen');
    } catch (err) {
      console.error('❌ Google sign-in error:', err.message);
      showNotification({
        title: 'Google sign-in error',
        message: err.message,
        color: 'red',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFacebookSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      console.log('✅ Facebook login success:', user);
      navigate('/homescreen');
    } catch (err) {
      console.error('❌ Facebook sign-in error:', err.message);
      showNotification({
        title: 'Facebook sign-in error',
        message: err.message,
        color: 'red',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='login-page'>
      <BackIconButton onClick={() => navigate(-1)} />

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

      <LogInButton
        onClick={handleEmailLogin}
        loading={loading}
      />

      <Divider label='Or continue with' labelPosition='center' my='lg' />

      <div className='social-buttons'>
        <ContinueWithFacebookIconButton
          fullWidth
          onClick={handleFacebookSignIn}
          loading={loading}
        />
        <ContinueWithGoogleIconButton
          fullWidth
          onClick={handleGoogleSignIn}
          loading={loading}
        />
      </div>

      <div className='login-link'>
        <Link to='/signup'>Don't have an account? Sign up</Link>
      </div>
    </div>
  );
};

export default LoginPage;
