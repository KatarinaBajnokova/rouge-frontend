import React, { useState, useEffect } from 'react';
import { useAuth } from "../hooks/useAuth.jsx";
import { getFirebaseAuth } from '../../getFirebaseAuth';
import { Title, Text, Group, Avatar, Button, Loader } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { BasketButton } from '../components/buttons/BasketButton';
import Navbar from '../components/navbar/Navbar';
import headerShape from '@/assets/header-shape.png';
import '@/sass/pages/_profile_page.scss';

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [fetchingProfile, setFetchingProfile] = useState(true);
  const { userId: firebaseUid, loading: authLoading } = useAuth();

  const logout = async () => {
    const { auth, signOut } = await getFirebaseAuth();
    await signOut(auth);
    localStorage.clear();
    sessionStorage.clear();

    navigate('/login?from=profile', { replace: true });

    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (authLoading) return;
      if (!firebaseUid) {
        navigate('/login?from=profile', { replace: true });
        return;
      }

      console.log(`👉 Fetching user from /api/users/by-firebase-uid?uid=${firebaseUid}`);

      try {
        const res = await fetch(`http://localhost:3000/api/users/by-firebase-uid?uid=${firebaseUid}`);
        const text = await res.text();
        const json = JSON.parse(text);
        if (!res.ok) throw new Error(json.error || 'Failed to fetch profile');
        setUser(json);
        localStorage.setItem('backendUserId', json.id);

        await fetchAddresses(json.id);
      } catch (error) {
        console.error('❌ Failed to fetch profile:', error.message);
        navigate('/login?from=profile', { replace: true });
      } finally {
        setFetchingProfile(false);
      }
    };

    const fetchAddresses = async (userId) => {
      try {
        const res = await fetch(`http://localhost:3000/api/users/${userId}/addresses`);
        const text = await res.text();
        const json = JSON.parse(text);
        console.log('📦 Fetched addresses:', json);
        if (!res.ok) throw new Error(json.error || 'Failed to fetch addresses');
        setAddresses(json);
      } catch (error) {
        console.error('❌ Failed to fetch addresses:', error.message);
      }
    };

    fetchUserProfile();
  }, [navigate, firebaseUid, authLoading]);

  if (authLoading || fetchingProfile) {
    return (
      <div className="profile-page">
        <Loader size="xl" color="pink" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="profile-page">
      {/* HEADER */}
      <div className="profile-page__header">
        <img src={headerShape} alt="" aria-hidden="true" className="profile-page__header-bg" />
        <Group className="profile-page__header-content" position="apart" spacing="xl">
          <Button variant="subtle" onClick={() => navigate('/profile/edit')}>Edit Profile</Button>
          <BasketButton refresh={true} />
        </Group>
        <Title order={2} className="profile-page__header-name">{user.first_name}</Title>
      </div>

      {/* INFO */}
      <div className="profile-info">
        <Avatar
          src={user.profile_image || 'https://via.placeholder.com/150'}
          alt="Profile Picture"
          size="xl"
          radius="xl"
          mb="md"
        />

        <Title order={3} className="section-header">For you</Title>

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
            <Text>Phone (profile): {user.phone || 'N/A'}</Text>
            <Text>Birthday: {user.birthdate || 'N/A'}</Text>
            <Text>Country: {user.country || 'N/A'}</Text>

            <Title order={5} mt="md">Saved Addresses</Title>

            {user.address_1 && (
              <div style={{ marginBottom: '1rem' }}>
                <Text>Signup address: {user.address_1}</Text>
                <hr className="divider" />
              </div>
            )}

            {addresses.length > 0 ? (
              addresses.map((addr, idx) => (
                <div key={idx} style={{ marginBottom: '1rem' }}>
                  <Text>Address: {addr.address_1 || '-'}</Text>
                  <Text>Postal Code: {addr.postal_code || '-'}</Text>
                  <Text>Country: {addr.country || '-'}</Text>
                  {addr.phone && <Text>Phone (for this address): {addr.phone}</Text>}
                  <hr className="divider" />
                </div>
              ))
            ) : (
              <Text>No additional addresses saved yet.</Text>
            )}
          </>
        )}

        <hr className="divider" />

        <Button onClick={() => navigate('/profile/favorites')}>Favorites</Button>
        <hr className="divider" />

        <Title order={4} mt="xl" className="section-header">Settings</Title>
        <Button variant="subtle" onClick={() => navigate('/contact-support')}>Contact Support</Button>
        <hr className="divider" />
        <Button variant="subtle" onClick={() => navigate('/terms-of-service')}>Terms of Service</Button>
        <hr className="divider" />
        <Button variant="subtle" onClick={() => navigate('/faq')}>FAQ</Button>
        <hr className="divider" />

        <Button variant="light" onClick={logout} className="logout-button">Log Out</Button>
      </div>

      <Navbar />
    </div>
  );
}
