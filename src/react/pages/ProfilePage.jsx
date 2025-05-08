import React, { useState, useEffect } from 'react';
import { Title, Text, Group, Avatar, Button, Loader } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { BasketButton } from '../components/buttons/BasketButton';
import Navbar from '../components/navbar/Navbar';
import headerShape from '@/assets/header-shape.png';
import '@/sass/pages/_profile_page.scss';

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!userId) {
        navigate('/login');
        return;
      }
      try {
        const res = await fetch(`http://localhost:3000/api/users/${userId}`);
        const text = await res.text();
        const json = JSON.parse(text);
        if (!res.ok) throw new Error(json.error || 'Failed to fetch profile');
        setUser(json);
      } catch {
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, [navigate, userId]);

  if (loading) {
    return (
      <div className='profile-page'>
        <Loader size='xl' color='pink' />
      </div>
    );
  }
  if (!user) {
    return (
      <div className='profile-page'>
        <Text color='red'>❌ Failed to load profile.</Text>
      </div>
    );
  }

  return (
    <div className='profile-page'>
      {/* HEADER WITH BACKGROUND SHAPE */}
      <div className='profile-page__header'>
        <img
          src={headerShape}
          alt=''
          aria-hidden='true'
          className='profile-page__header-bg'
        />

        {/* Left + Right controls */}
        <Group
          className='profile-page__header-content'
          position='apart'
          spacing='xl'
        >
          <Button
            className='edit-profile-btn'
            variant='subtle'
            onClick={() => navigate('/profile/edit')}
          >
            Edit Profile
          </Button>
          <BasketButton refresh={true} />
        </Group>

        {/* CENTERED USER NAME */}
        <Title order={2} className='profile-page__header-name'>
          {user.first_name}
        </Title>
      </div>

      {/* PROFILE INFO CARD */}
      <div className='profile-info'>
        <Avatar
          src={user.profile_image || 'https://via.placeholder.com/150'}
          alt='Profile Picture'
          size='xl'
          radius='xl'
          mb='md'
        />

        {/* For You */}
        <Title order={3} className='section-header'>
          For you
        </Title>

        <Title
          order={4}
          style={{ cursor: 'pointer', color: '#4e7bff' }}
          onClick={() => setShowPersonalInfo(p => !p)}
        >
          Personal Info
        </Title>
        {showPersonalInfo && (
          <>
            <Text>Email: {user.email || 'N/A'}</Text>
            <Text>Phone: {user.phone || 'N/A'}</Text>
            <Text>Address: {user.address_1 || 'N/A'}</Text>
            <Text>Birthday: {user.birthdate || 'N/A'}</Text>
            <Text>Country: {user.country || 'N/A'}</Text>
          </>
        )}
        <hr className='divider' />
        <Button onClick={() => navigate('/profile/favorites')}>
          Favorites
        </Button>
        <hr className='divider' />

        {/* Settings */}
        <Title order={4} mt='xl' className='section-header'>
          Settings
        </Title>

        <Button variant='subtle' onClick={() => navigate('/contact-support')}>
          Contact Support
        </Button>
        <hr className='divider' />
        <Button variant='subtle' onClick={() => navigate('/terms-of-service')}>
          Terms of Service
        </Button>
        <hr className='divider' />
        <Button variant='subtle' onClick={() => navigate('/faq')}>
          FAQ
        </Button>
        <hr className='divider' />
      </div>

      <Navbar />
    </div>
  );
}
