import React, { useState, useEffect } from 'react';
import { Title, TextInput, Group, Select, Loader } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import FinalStepper from '../../components/stepper/Stepper';
import { useUpdateUser } from '@/react/hooks/useUpdateUser';
import { BackIconButton } from '../../components/buttons/IconButtons';
import { BottomBarButton } from '../../components/buttons/RedButtons';
import { useAuth } from '@/react/hooks/useAuth'; // ✨ import useAuth

import '@/sass/pages/_personal_info.scss';

export default function PersonalInfoPage() {
  const navigate = useNavigate();
  const { updateUser, loading } = useUpdateUser();
  const { userId: firebaseUid, loading: authLoading } = useAuth(); // ✨ get firebaseUid

  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const [countryOptions, setCountryOptions] = useState([]);
  const [countriesLoading, setCountriesLoading] = useState(false);

  // 🛠️ Auto-fetch backendUserId if missing
  useEffect(() => {
    const fetchBackendUserId = async () => {
      const storedBackendId = localStorage.getItem('backendUserId');
      if (storedBackendId) return; // already exists ✅

      if (!firebaseUid) return; // still waiting for firebase

      console.log(
        `🔗 Fetching backend user ID using Firebase UID: ${firebaseUid}`
      );
      try {
        const res = await fetch(
          `http://localhost:3000/api/users/by-firebase-uid?uid=${firebaseUid}`
        );
        const data = await res.json();
        if (res.ok && data.id) {
          localStorage.setItem('backendUserId', data.id);
          console.log('✅ Stored backend user_id in localStorage:', data.id);
        } else {
          console.error(
            '❌ Failed to fetch backend user ID:',
            data.error || 'No ID'
          );
          navigate('/login');
        }
      } catch (error) {
        console.error('❌ Error fetching backend user ID:', error);
        navigate('/login');
      }
    };

    fetchBackendUserId();
  }, [firebaseUid, navigate]);

  useEffect(() => {
    const cached = sessionStorage.getItem('countries');
    if (cached) {
      setCountryOptions(JSON.parse(cached));
      return;
    }

    setCountriesLoading(true);
    fetch('https://restcountries.com/v3.1/all?fields=name')
      .then(res => res.json())
      .then(data => {
        const names = data
          .map(c => c.name.common)
          .sort((a, b) => a.localeCompare(b));
        setCountryOptions(names);
        sessionStorage.setItem('countries', JSON.stringify(names));
      })
      .catch(err => {
        console.error('Failed to fetch countries', err);
      })
      .finally(() => {
        setCountriesLoading(false);
      });
  }, []);

  // ✨ Corrected handleConfirm
  const handleConfirm = async () => {
    const backendUserId = localStorage.getItem('backendUserId');
    if (!backendUserId) {
      alert('User session expired. Please log in again.');
      navigate('/login');
      return;
    }

    const address1 = `${street.trim()} ${houseNumber.trim()}, ${postalCode.trim()}, ${country.trim()}`;

    if (
      !street &&
      !houseNumber &&
      !postalCode &&
      !phone &&
      !birthdate &&
      !country
    ) {
      navigate('/homescreen');
      return;
    }

    try {
      await updateUser({
        address_1: address1,
        phone: phone.trim(),
        birthdate: birthdate || null,
        country: country || null,
      });
      // 🚀 navigation happens inside updateUser, no need to navigate here
    } catch (error) {
      console.error('Failed to update user', error);
      alert('Something went wrong updating your profile.');
    }
  };

  if (authLoading) {
    return (
      <div className='personal-info-page'>
        <Loader size='xl' color='pink' />
      </div>
    );
  }

  return (
    <div className='personal-info-page'>
      <BackIconButton />
      <FinalStepper active={2} />
      <div className='personal-form' style={{ marginTop: '2rem' }}>
        <h2>Personal information</h2>
        <div className='step-description'>
          <p>Press "Confirm & Continue" if you wish to skip this part.</p>
          <p>Your addresses can always be edited in the profile settings.</p>
        </div>

        <Select
          label='Country'
          placeholder='Select your country'
          data={countryOptions}
          value={country}
          onChange={setCountry}
          searchable
          nothingFoundMessage='No country found'
          rightSection={countriesLoading ? <Loader size='xs' /> : null}
          mt='md'
        />

        <TextInput
          label='Street'
          placeholder='Enter street name'
          value={street}
          onChange={e => setStreet(e.currentTarget.value)}
          mt='md'
        />

        <Group grow>
          <TextInput
            label='House Number'
            placeholder='e.g. 12A'
            value={houseNumber}
            onChange={e => setHouseNumber(e.currentTarget.value)}
            mt='md'
          />

          <TextInput
            label='Postal Code'
            placeholder='e.g. 1000'
            value={postalCode}
            onChange={e => setPostalCode(e.currentTarget.value)}
            mt='md'
          />
        </Group>

        <TextInput
          label='Phone number'
          placeholder='Enter your phone number'
          value={phone}
          onChange={e => setPhone(e.currentTarget.value)}
          mt='md'
        />

        <TextInput
          label='Date of Birth'
          type='date'
          value={birthdate}
          onChange={e => setBirthdate(e.currentTarget.value)}
          mt='md'
        />

        <BottomBarButton
          text='Confirm & Continue'
          onClick={handleConfirm}
          loading={loading}
        />
      </div>
    </div>
  );
}
