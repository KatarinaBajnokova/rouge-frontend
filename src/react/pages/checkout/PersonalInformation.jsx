import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth.jsx";
import { TextInput, Divider, PasswordInput, Loader } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { SignUpButton } from '../../components/buttons/RedButtons';
import { ContinueWithFacebookIconButton, ContinueWithGoogleIconButton, BackIconButton } from '../../components/buttons/IconButtons';
import { getFirebaseAuth } from '../../../getFirebaseAuth';
import { useCheckout } from '../../contexts/CheckoutContext';

import '@/sass/pages/checkout/_personal_information.scss';
import '@/sass/components/buttons/_redbuttons.scss';

import IconEye from '@tabler/icons-react/dist/esm/icons/iconEye';
import IconEyeOff from '@tabler/icons-react/dist/esm/icons/iconEyeOff';

const STORAGE_KEY = 'personalInfo';

export default function PersonalInfoCheckout() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [vatNumber, setVatNumber] = useState('');
  const [addGiftWrap, setAddGiftWrap] = useState(false);
  const [addPersonalCard, setAddPersonalCard] = useState(false);
  const [friendName, setFriendName] = useState('');
  const [friendEmail, setFriendEmail] = useState('');
  const [personalNote, setPersonalNote] = useState('');

  const navigate = useNavigate();
  const { userId, loading: authLoading } = useAuth();
  const { setPersonalInfo } = useCheckout();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (saved.firstName) setFirstName(saved.firstName);
    if (saved.lastName) setLastName(saved.lastName);
    if (saved.email) setEmail(saved.email);
    if (saved.companyName) setCompanyName(saved.companyName);
    if (saved.vatNumber) setVatNumber(saved.vatNumber);
    if (saved.addGiftWrap != null) setAddGiftWrap(saved.addGiftWrap);
    if (saved.addPersonalCard != null) setAddPersonalCard(saved.addPersonalCard);
    if (saved.friendName) setFriendName(saved.friendName);
    if (saved.friendEmail) setFriendEmail(saved.friendEmail);
    if (saved.personalNote) setPersonalNote(saved.personalNote);
  }, []);

  if (authLoading) {
    return (
      <div className="checkout-auth-loading">
        <Loader size="lg" color="pink" />
      </div>
    );
  }

  const persistAndContinue = (info) => {
    setPersonalInfo(info);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
  };

  const handleEmailContinue = async (e) => {
    e.preventDefault(); // 🔥 prevent navigation on error

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      showNotification({ title: 'Missing Fields', message: 'Please fill out all fields.', color: 'red', position: 'top-center' });
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      showNotification({ title: 'Invalid Email', message: 'Please enter a valid email address.', color: 'red', position: 'top-center' });
      return;
    }

    if (password.length < 6) {
      showNotification({ title: 'Weak Password', message: 'Password must be at least 6 characters.', color: 'red', position: 'top-center' });
      return;
    }

    if (password !== confirmPassword) {
      showNotification({ title: 'Password Mismatch', message: 'Passwords do not match.', color: 'red', position: 'top-center' });
      return;
    }

    try {
      const { auth, createUserWithEmailAndPassword } = await getFirebaseAuth();
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;

      showNotification({ title: 'Signed up!', message: `Welcome ${user.displayName || firstName}!`, color: 'green', position: 'top-center' });

      try {
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

              let backendData;
try {
  backendData = await backendResponse.json();
} catch (parseError) {
  console.error('❌ Failed to parse backend response as JSON');
  throw new Error('Invalid backend response');
}


        if (backendResponse.ok && backendData.user_id) {
          localStorage.setItem('userId', backendData.user_id);
          console.log('✅ Backend user created:', backendData.user_id);

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

          navigate('/checkout/friend-info');
        } else {
          console.error('❌ Backend signup failed:', backendData.error || 'No ID');
          showNotification({ title: 'Backend error', message: 'Could not create profile on server.', color: 'red', position: 'top-center' });
        }
      } catch (backendErr) {
        console.error('❌ Backend error during signup', backendErr);
      }

    } catch (err) {
      showNotification({ title: 'Sign-up error', message: err.message, color: 'red', position: 'top-center' });
    }
  };

  const handleSocialSignIn = async (providerName, label) => {
    try {
      const { auth, signInWithPopup, googleProvider, facebookProvider } = await getFirebaseAuth();
      const provider = providerName === 'Google' ? googleProvider : facebookProvider;
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      showNotification({
        title: `Logged in with ${label}`,
        message: `Welcome ${user.displayName || 'back'}!`,
        color: 'green',
        position: 'top-center',
      });

      persistAndContinue({
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
      });

      navigate('/checkout/friend-info');
    } catch (err) {
      showNotification({ title: `${label} sign-in error`, message: err.message, color: 'red', position: 'top-center' });
    }
  };

  return (
    <div className="signup-page">
      <BackIconButton />
      <h2>Account</h2>
      <div className="step-description">
        <p style={{ color: 'red', fontWeight: 'bold' }}>Before proceeding!</p>
        <p>Seems like you don't have an account or aren't logged in!</p>
      </div>

      {/* 🔥 FORM WRAP */}
      <form onSubmit={handleEmailContinue}>
        <TextInput label="First Name" placeholder="Your first name" value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)} className="input-field" required />
        <TextInput label="Last Name" placeholder="Your last name" value={lastName} onChange={(e) => setLastName(e.currentTarget.value)} className="input-field" required />
        <TextInput label="Email" placeholder="Your email..." value={email} onChange={(e) => setEmail(e.currentTarget.value)} className="input-field" required />

        <PasswordInput
          label="Password"
          placeholder="Enter your password..."
          visible={passwordVisible}
          onVisibilityChange={() => setPasswordVisible((v) => !v)}
          visibilityToggleIcon={({ reveal }) => reveal ? <IconEyeOff size={16} /> : <IconEye size={16} />}
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          className="input-field"
          required
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.currentTarget.value)}
          className="input-field"
          required
        />

        {/* 🔥 Make button type=submit */}
        <SignUpButton fullWidth type="submit">
          Continue
        </SignUpButton>
      </form>

      <div className="social-register-section">
        <Divider className="social-divider" label="Or log in with" labelPosition="center" />
        <div className="social-buttons">
          <ContinueWithFacebookIconButton fullWidth onClick={() => handleSocialSignIn('Facebook', 'Facebook')} />
          <ContinueWithGoogleIconButton fullWidth onClick={() => handleSocialSignIn('Google', 'Google')} />

          <div className="login-link">
            <Link to="/login">Already have an account? Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
