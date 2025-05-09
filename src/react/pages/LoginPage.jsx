import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
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

import { getFirebaseAuth } from '../../getFirebaseAuth';

import '@/sass/pages/_login_page.scss';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const cameFromProfile = new URLSearchParams(location.search).get('from') === 'profile';


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
      const { auth, signInWithEmailAndPassword } = await getFirebaseAuth();
      await signInWithEmailAndPassword(auth, email, password);
      await loginWithBackend(email, password);
    } catch (err) {
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
      const { auth, googleProvider, signInWithPopup } = await getFirebaseAuth();
      const result = await signInWithPopup(auth, googleProvider);
      navigate('/homescreen');
    } catch (err) {
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
      const { auth, facebookProvider, signInWithPopup } =
        await getFirebaseAuth();
      const result = await signInWithPopup(auth, facebookProvider);
      navigate('/homescreen');
    } catch (err) {
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
      <BackIconButton onClick={() => {
  if (cameFromProfile) {
    navigate('/homescreen');
  } else {
    navigate(-1);
  }
}} />


      <FinalStepper active={0} />

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

      <LogInButton onClick={handleEmailLogin} loading={loading} />

      <div className='social-register-section'>
        <Divider
          className='social-divider'
          label='Or continue with'
          labelPosition='center'
        />

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
    </div>
  );
};

export default LoginPage;
