import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextInput, PasswordInput, Divider } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { SignUpButton } from '@/react/components/buttons/RedButtons';
import FinalStepper from '@/react/components/stepper/Stepper';
import {
  ContinueWithFacebookIconButton,
  ContinueWithGoogleIconButton,
  BackIconButton,
} from '@/react/components/buttons/IconButtons';
import { getFirebaseAuth } from '@/getFirebaseAuth';

import { IconEye } from '@tabler/icons-react';
import { IconEyeOff } from '@tabler/icons-react';

import styles from '@/react/pages/signup/SignUpPage.module.scss';

const SignUpPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

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
      const { auth, createUserWithEmailAndPassword } = await getFirebaseAuth();
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = result.user;
      localStorage.setItem('firebaseUid', user.uid);

      const backendResponse = await fetch('http://localhost:3000/api/users', {
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

      let backendData;
      try {
        backendData = await backendResponse.json();
      } catch (parseError) {
        throw new Error('Invalid backend response');
      }

      if (!backendResponse.ok) {
        throw new Error(
          backendData.error || 'Failed to create user in backend.'
        );
      }

      showNotification({
        title: 'Signed up!',
        message: 'Continue personalizing your profile.',
        color: 'green',
      });

      navigate('/personal-look', {
        state: { newUser: true },
      });
    } catch (err) {
      if (err.message.includes('email-already-in-use')) {
        showNotification({
          title: 'Email already exists',
          message: 'Please use a different email or login instead.',
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

  const handleGoogleSignIn = async () => {
    try {
      const { auth, googleProvider, signInWithPopup } = await getFirebaseAuth();
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      showNotification({
        title: 'Logged in with Google',
        message: `Welcome ${user.displayName || 'back'}!`,
        color: 'green',
      });

      navigate('/personal-look');
    } catch (err) {
      showNotification({
        title: 'Google sign-in error',
        message: err.message,
        color: 'red',
      });
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const { auth, facebookProvider, signInWithPopup } =
        await getFirebaseAuth();
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;

      showNotification({
        title: 'Logged in with Facebook',
        message: `Welcome ${user.displayName || 'back'}!`,
        color: 'green',
      });

      navigate('/personal-look');
    } catch (err) {
      showNotification({
        title: 'Facebook sign-in error',
        message: err.message,
        color: 'red',
      });
    }
  };

  return (
    <div className={styles.signUpPage}>
      <BackIconButton className={styles.backIconButton} />

      <FinalStepper active={0} />

      <h2>Sign-up</h2>
      <p>Create a new account</p>

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
        onVisibilityChange={() => setPasswordVisible(!passwordVisible)}
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
        onClick={handleEmailSignUp}
        className={styles.signUpButton}
      >
        Sign up
      </SignUpButton>

      <div className={styles.socialRegisterSection}>
        <Divider
          className={styles.socialDivider}
          label='Or register with'
          labelPosition='center'
        />

        <div className={styles.socialButtons}>
          <ContinueWithFacebookIconButton
            fullWidth
            onClick={handleFacebookSignIn}
          />

          <ContinueWithGoogleIconButton
            fullWidth
            onClick={handleGoogleSignIn}
          />
        </div>

        <div className={styles.loginLink}>
          <Link to='/login'>Already have an account? Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
