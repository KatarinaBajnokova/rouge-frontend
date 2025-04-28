import React, { useState, useEffect } from 'react';
import { Title, TextInput, Group, Button, Select, Loader } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';

import FinalStepper from '../components/stepper/Stepper';
import { useUpdateUser } from '@/react/hooks/useUpdateUser';

import '@/sass/pages/_personal_info.scss';

export default function PersonalInfoPage() {
  const navigate = useNavigate();
  const { updateUser, loading } = useUpdateUser();

  // form state
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');

  // country select state
  const [countryOptions, setCountryOptions] = useState([]);
  const [countriesLoading, setCountriesLoading] = useState(false);

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

  const handleConfirm = () => {
    if (!country || !street || !houseNumber || !postalCode || !phone) {
      showNotification({
        title: 'Missing Fields',
        message: 'Please complete all required fields.',
        color: 'red',
        position: 'top-center',
      });
      return;
    }

    const address1 = `${street} ${houseNumber}, ${postalCode}, ${country}`;
    updateUser({
      address_1: address1,
      phone,
      birthdate: birthdate || null,
      country: country || null,
    });
  };

  return (
    <div className='personal-info-page'>
      <Group position='apart' mb='md'>
        <Button
          variant='subtle'
          leftSection={<IconArrowLeft size={20} />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
        <Title order={2}>Your Info</Title>
      </Group>

      <FinalStepper active={2} />

      <div className='personal-form' style={{ marginTop: '2rem' }}>
        <Title order={3} mb='sm'>
          Personal Information
        </Title>

        <Select
          label='Country'
          placeholder='Select your country'
          data={countryOptions}
          value={country}
          onChange={setCountry}
          searchable
          nothingFoundMessage='No country found'
          rightSection={countriesLoading ? <Loader size='xs' /> : null}
          required
          mt='md'
        />

        <TextInput
          label='Street'
          placeholder='Enter street name'
          value={street}
          onChange={e => setStreet(e.currentTarget.value)}
          required
          mt='md'
        />

        <Group grow>
          <TextInput
            label='House Number'
            placeholder='e.g. 12A'
            value={houseNumber}
            onChange={e => setHouseNumber(e.currentTarget.value)}
            required
            mt='md'
          />

          <TextInput
            label='Postal Code'
            placeholder='e.g. 1000'
            value={postalCode}
            onChange={e => setPostalCode(e.currentTarget.value)}
            required
            mt='md'
          />
        </Group>

        <TextInput
          label='Phone number'
          placeholder='Enter your phone number'
          value={phone}
          onChange={e => setPhone(e.currentTarget.value)}
          required
          mt='md'
        />

        <TextInput
          label='Date of Birth'
          type='date'
          value={birthdate}
          onChange={e => setBirthdate(e.currentTarget.value)}
          mt='md'
        />

        <Group mt='xl' position='center'>
          <Button
            onClick={handleConfirm}
            color='pink'
            radius='xl'
            loading={loading}
          >
            Confirm & Continue
          </Button>
        </Group>
      </div>
    </div>
  );
}
