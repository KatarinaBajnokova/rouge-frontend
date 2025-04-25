import React, { useEffect, useState } from 'react';
import { Title, Text, Avatar, Button } from '@mantine/core';
import { IconPencil, IconShoppingBag } from '@tabler/icons-react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';
import Navbar from '../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import '@/sass/pages/_profile.scss';

export default function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        try {
          const res = await fetch(
            `http://localhost:8000/api/users/get.php?uid=${user.uid}`
          );
          const data = await res.json();
          setUserData(data);
        } catch (err) {
          console.error('❌ Failed to fetch user profile:', err);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  if (!userData) {
    return (
      <div className='profile-page'>
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className='profile-page'>
      <div className='profile-header'>
        <Button
          variant='subtle'
          leftIcon={<IconPencil size={16} />}
          className='edit-button'
        >
          Edit profile
        </Button>

        <Button
          variant='subtle'
          rightIcon={<IconShoppingBag size={18} />}
          className='basket-button'
        >
          Basket
        </Button>

        <div className='profile-user-wrapper'>
          <Avatar
            src='https://randomuser.me/api/portraits/women/68.jpg'
            size={80}
            radius='xl'
          />
          <div className='nickname-wrapper'>
            <Title order={3} className='profile-name'>
              {userData.nickname}
            </Title>
          </div>
        </div>
      </div>

      <div className='profile-sections'>
        <section>
          <Text fw={600} size='lg' className='section-title'>
            For you
          </Text>
          <div
            className='section-item'
            onClick={() => navigate('/personal-info')}
            style={{ cursor: 'pointer' }}
          >
            <Text>Personal info</Text>
            <span>&#8250;</span>
          </div>
          <div className='section-item'>
            <Text>Favorites</Text>
            <span>&#8250;</span>
          </div>
        </section>

        <section>
          <Text fw={600} size='lg' className='section-title'>
            Settings
          </Text>
          <div className='section-item'>
            <Text>Contact support</Text>
            <span>&#8250;</span>
          </div>
          <div className='section-item'>
            <Text>Terms of service</Text>
            <span>&#8250;</span>
          </div>
          <div className='section-item'>
            <Text>FAQ</Text>
            <span>&#8250;</span>
          </div>
        </section>
      </div>

      <Navbar />
    </div>
  );
}
