import React, { useState, useEffect } from 'react';
import { Title, TextInput, Group, Select, Loader } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';
import { useUpdateUser } from '@/react/hooks/useUpdateUser';

import FinalStepper from '../../components/stepper/Stepper';
import { BackIconButton } from '../../components/buttons/IconButtons';
import { BottomBarButton } from '../../components/buttons/RedButtons';

import '@/sass/pages/checkout/_address.scss';

const STORAGE_KEY = 'shippingAddress';

export default function AddressPage() {
  const navigate = useNavigate();
  const { updateUser, loading } = useUpdateUser();

  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

  const [country, setCountry] = useState(saved.country || '');
  const [street, setStreet] = useState(saved.street || '');
  const [houseNumber, setHouseNumber] = useState(saved.houseNumber || '');
  const [postalCode, setPostalCode] = useState(saved.postalCode || '');
  const [phone, setPhone] = useState(saved.phone || '');

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
        const names = data
          .map(c => c.name.common)
          .sort((a, b) => a.localeCompare(b));
        setCountryOptions(names);
        sessionStorage.setItem('countries', JSON.stringify(names));
      })
      .catch(err => console.error('Failed to fetch countries', err))
      .finally(() => setCountriesLoading(false));
  }, []);

  const handleConfirm = async () => {
  if (!country || !street || !houseNumber || !postalCode || !phone) {
    showNotification({
      title: 'Missing Fields',
      message: 'Please complete all address fields.',
      color: 'red',
      position: 'top-center',
    });
    return;
  }

  const address1 = `${street} ${houseNumber}, ${postalCode}, ${country}`;

  try {
    await updateUser({
      address_1: address1,
      phone,
      country,
    });

    navigate('/checkout/payment-method');
  } catch (error) {
    console.error('❌ Failed to update address', error);
    showNotification({
      title: 'Error',
      message: 'Could not save address. Try again.',
      color: 'red',
      position: 'top-center',
    });
  }
};


  return (
    <div className='address-page'>
      <BackIconButton />
      <FinalStepper active={1} />
      <div className='personal-form'>
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
          onChange={e => setPhone(e.currentTarget.value)}
          mt='md'
          required
        />

        <BottomBarButton text="Confirm & Continue" onClick={handleConfirm} loading={loading} />

      </div>
    </div>
  );
}
