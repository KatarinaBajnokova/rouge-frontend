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
  BackIconButton
} from '../components/buttons/IconButtons';

import {
  auth,
  googleProvider,
  facebookProvider,
  signInWithPopup,
} from '@/firebase';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import '@/sass/pages/_signup_page.scss';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleEmailSignUp = async () => {
    if (!email.includes('@') || !email.includes('.')) {
      showNotification({
        title: 'Invalid Email',
        message: 'Please enter a valid email address.',
        color: 'red',
      });
      return;
    }

    if (password.length < 6) {
      showNotification({
        title: 'Weak Password',
        message: 'Password must be at least 6 characters.',
        color: 'red',
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
      console.log('✅ Email/password sign-up success:', user);

      showNotification({
        title: 'Signed up!',
        message: 'Your account was created successfully.',
        color: 'green',
      });

      navigate('/personal-look');
    } catch (err) {
      console.error('❌ Email/password sign-up error:', err.message);
      showNotification({
        title: 'Sign-up error',
        message: err.message,
        color: 'red',
      });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('✅ Google sign-in success:', user);

      showNotification({
        title: 'Logged in with Google',
        message: `Welcome ${user.displayName || 'back'}!`,
        color: 'green',
      });

      navigate('/personal-look');
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
      console.log('✅ Facebook sign-in success:', user);

      showNotification({
        title: 'Logged in with Facebook',
        message: `Welcome ${user.displayName || 'back'}!`,
        color: 'green',
      });

      navigate('/personal-look');
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
      <BackIconButton onClick={() => navigate(-1)} />

      <FinalStepper active={0} />

      <h2>Sign-up</h2>
      <p>Create a new account</p>

      <TextInput
        label='Email'
        placeholder='Your email...'
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
        className='input-field'
      />

      <PasswordInput
        label='Password'
        placeholder='Enter your password...'
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
        onClick={handleEmailSignUp}
      >
        Sign up
      </Button>

      <Divider label='Or register with' labelPosition='center' my='lg' />

      <div className='social-buttons'>
        <ContinueWithFacebookIconButton
          fullWidth
          onClick={handleFacebookSignIn}
        />
        <ContinueWithGoogleIconButton fullWidth onClick={handleGoogleSignIn} />
      </div>

      <div className='login-link'>
        <Link to='/login'>Have a profile? Log in</Link>
      </div>
    </div>
  );
};

export default SignUpPage;
