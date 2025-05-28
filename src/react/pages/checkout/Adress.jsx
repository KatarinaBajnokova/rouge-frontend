import React, { useState, useEffect } from 'react';
import { Title, TextInput, Group, Select, Loader } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';
import { useUpdateUser } from '@/react/hooks/useUpdateUser';
import { useAuth } from '@/react/hooks/useAuth';
import FinalStepper from '../../components/stepper/Stepper';
import { BackIconButton } from '../../components/buttons/IconButtons';
import { BottomBarButton } from '../../components/buttons/RedButtons';
import styles from './Address.module.scss';

const STORAGE_KEY = 'shippingAddress';

export default function AddressPage() {
  const navigate = useNavigate();
  const { userId: firebaseUid } = useAuth();
  const { updateUser, loading } = useUpdateUser();

  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

  const [country, setCountry] = useState(saved.country || '');
  const [street, setStreet] = useState(saved.street || '');
  const [houseNumber, setHouseNumber] = useState(saved.houseNumber || '');
  const [postalCode, setPostalCode] = useState(saved.postalCode || '');
  const [phone, setPhone] = useState(saved.phone || '');
  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const [backendUserId, setBackendUserId] = useState(localStorage.getItem('backendUserId'));
  const [countryOptions, setCountryOptions] = useState([]);
  const [countriesLoading, setCountriesLoading] = useState(false);

  useEffect(() => {
    const address = { country, street, houseNumber, postalCode, phone };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(address));
  }, [country, street, houseNumber, postalCode, phone]);

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
        const names = data.map(c => c.name.common).sort((a, b) => a.localeCompare(b));
        setCountryOptions(names);
        sessionStorage.setItem('countries', JSON.stringify(names));
      })
      .catch(err => console.error('❌ Failed to fetch countries:', err))
      .finally(() => setCountriesLoading(false));
  }, []);

  useEffect(() => {
    if (!firebaseUid) return;

    const fetchBackendUserId = async () => {
      try {
        const res = await fetch(`/api/users/by-firebase-uid?uid=${firebaseUid}`);
        const user = await res.json();
        if (user?.id) {
          localStorage.setItem('backendUserId', user.id);
          setBackendUserId(user.id);
        }
      } catch (err) {
        console.error('❌ Failed to fetch backend user ID', err);
      }
    };

    fetchBackendUserId();
  }, [firebaseUid]);

  useEffect(() => {
    if (!backendUserId || backendUserId === 'undefined') {
      console.warn('⏳ Waiting for backendUserId...');
      return;
    }

    fetch(`http://localhost:8000/api/users/${backendUserId}/addresses`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          const primary = data.find(addr => addr.is_primary) || data[0];
          const [streetName, houseNo] = primary.address_1.split(/(?=\s\d)/);

          const autofilledAddress = {
            country: primary.country,
            street: streetName?.trim() || '',
            houseNumber: houseNo?.trim() || '',
            postalCode: primary.postal_code,
            phone: primary.phone,
          };

          setCountry(autofilledAddress.country);
          setStreet(autofilledAddress.street);
          setHouseNumber(autofilledAddress.houseNumber);
          setPostalCode(autofilledAddress.postalCode);
          setPhone(autofilledAddress.phone);
          setSelectedAddressId(primary.id);

          localStorage.setItem(STORAGE_KEY, JSON.stringify(autofilledAddress));
        }
      })
      .catch(err => console.error('❌ Failed to load addresses:', err));
  }, [backendUserId]);

  const handleConfirm = async () => {
    if (!backendUserId) {
      showNotification({
        title: 'Session Expired',
        message: 'Please log in again.',
        color: 'red',
        position: 'top-center',
      });
      navigate('/login');
      return;
    }

    if (!country || !street || !houseNumber || !postalCode || !phone) {
      showNotification({
        title: 'Missing Fields',
        message: 'Please complete all address fields.',
        color: 'red',
        position: 'top-center',
      });
      return;
    }

    try {
      let addressIdToAssign = selectedAddressId;

      if (!selectedAddressId) {
        const response = await fetch('http://localhost:8000/api/users/addresses/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({
            user_id: backendUserId,
            address_1: `${street} ${houseNumber}`,
            postal_code: postalCode,
            country,
            phone,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || 'Failed to save address');
        }

        const { address_id } = await response.json();
        if (!address_id) {
          throw new Error('Address creation failed: No ID returned');
        }

        addressIdToAssign = address_id;
      }

      const assignRes = await fetch('http://localhost:8000/api/orders/assign-address', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          user_id: backendUserId,
          address_id: addressIdToAssign,
        }),
      });

      if (!assignRes.ok) {
        const err = await assignRes.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to assign address to session');
      }

      navigate('/checkout/payment-method');
    } catch (error) {
      showNotification({
        title: 'Error',
        message: error.message || 'Could not save address. Try again.',
        color: 'red',
        position: 'top-center',
      });
    }
  };

  return (
    <div className={styles.addressPage}>
      <div className={styles.backIconButton}>
        <BackIconButton />
      </div>
      <FinalStepper active={1} />
      <div className={styles.personalForm}>
        <Title order={3}>Shipping Address</Title>

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
          required
        />

        <TextInput
          label='Street'
          placeholder='Enter street name'
          value={street}
          onChange={e => setStreet(e.currentTarget.value)}
          mt='md'
          required
        />

        <Group grow>
          <TextInput
            label='House Number'
            placeholder='e.g. 12A'
            value={houseNumber}
            onChange={e => setHouseNumber(e.currentTarget.value)}
            mt='md'
            required
          />
          <TextInput
            label='Postal Code'
            placeholder='e.g. 1000'
            value={postalCode}
            onChange={e => setPostalCode(e.currentTarget.value)}
            mt='md'
            required
          />
        </Group>

<TextInput
  label='Phone number'
  placeholder='Enter your phone number'
  value={phone}
  onChange={e => {
    const onlyNums = e.currentTarget.value.replace(/\D/g, '');
    if (onlyNums.length <= 10) setPhone(onlyNums);
  }}
  mt='md'
  required
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
