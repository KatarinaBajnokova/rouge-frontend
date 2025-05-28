import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { TextInput, PasswordInput, Divider } from '@mantine/core';
import { IconEye } from '@tabler/icons-react';
import { IconEyeOff } from '@tabler/icons-react';
import { showNotification } from '@mantine/notifications';

import { BackIconButton } from '@/react/components/buttons/IconButtons';
import { LogInButton } from '@/react/components/buttons/RedButtons';
import FinalStepper from '@/react/components/stepper/Stepper';
import {
  ContinueWithFacebookIconButton,
  ContinueWithGoogleIconButton,
} from '@/react/components/buttons/IconButtons';

import { getFirebaseAuth } from '@/getFirebaseAuth';

import '@/react/pages/login/LoginPage.module.scss';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const cameFromProfile = params.get('from') === 'profile';
  const cameFromCheckout = params.get('from') === 'checkout';
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

    setLoading(true);
    try {
      const { auth, signInWithEmailAndPassword } = await getFirebaseAuth();
      await signInWithEmailAndPassword(auth, email, password);

      const phpRes = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      if (!phpRes.ok) {
        const errorData = await phpRes.json();
        throw new Error(errorData.error || 'Failed to log in to backend');
      }

      showNotification({
        title: 'Welcome back!',
        message: 'You are now logged in.',
        color: 'green',
      });

      if (cameFromProfile) {
        navigate('/homescreen');
      } else if (cameFromCheckout) {
        navigate('/checkout/friend-info');
      } else {
        navigate('/homescreen');
      }
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
      await signInWithPopup(auth, googleProvider);
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
      await signInWithPopup(auth, facebookProvider);
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
    <div className='loginPage'>
      <BackIconButton
        onClick={() => {
          if (cameFromProfile) {
            navigate('/homescreen');
          } else if (cameFromCheckout) {
            navigate('/basket');
          } else {
            navigate(-1);
          }
        }}
      />

      <FinalStepper active={0} />

      <h2>Log in</h2>
      <p>Welcome back</p>

      <TextInput
        label='Email'
        placeholder='Your email...'
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
        className='inputField'
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
        className='inputField'
      />

      <LogInButton onClick={handleEmailLogin} loading={loading} />

      <div className='socialRegisterSection'>
        <Divider
          className='socialDivider'
          label='Or continue with'
          labelPosition='center'
        />

        <div className='socialButtons'>
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

        <div className='loginLink'>
          <Link to='/signup'>Don't have an account? Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
