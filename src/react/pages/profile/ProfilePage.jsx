// src/react/pages/profile/ProfilePage.jsx

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/react/hooks/useAuth.jsx';
import { getFirebaseAuth } from '@/getFirebaseAuth';
import { Title, Text, Loader } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import ProfileHeader from '@/react/components/profile/ProfileHeader/ProfileHeader';
import ProfileMenu from '@/react/components/profile/ProfileMenu/ProfileMenu';
import ProfileDrawer from '@/react/components/profile/ProfileDrawer/ProfileDrawer';
import Navbar from '@/react/components/navbar/Navbar';

import {
  sectionTitles,
  forYouItems as cfgForYou,
  settingsItems as cfgSettings,
} from './menuConfig';

import styles from './ProfilePage.module.scss';

export default function ProfilePage() {
  const navigate = useNavigate();
  const { userId: firebaseUid, loading: authLoading } = useAuth();

  // drawer state
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // profile data
  const [user, setUser] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [fetching, setFetching] = useState(true);

  // open a drawer section
  const openSection = key => {
    setActiveSection(key);
    setDrawerOpened(true);
  };

  // logout identical to old page (function remains in case used elsewhere)
  const logout = async () => {
    try {
      const { auth, signOut } = await getFirebaseAuth();
      await signOut(auth);
      localStorage.removeItem('firebaseUid');
      localStorage.removeItem('backendUserId');
      sessionStorage.clear();
      setUser(null);
      navigate('/login?from=profile', { replace: true });
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  // fetch profile & addresses, redirect if not authed
  useEffect(() => {
    const fetchAddresses = async userId => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/users/${userId}/addresses`
        );
        const json = await res.json();
        if (!res.ok) throw new Error(json.error);
        setAddresses(json);
      } catch (err) {
        console.error('❌ Failed to fetch addresses:', err.message);
      }
    };

    const fetchProfile = async () => {
      if (authLoading) return;
      const { auth } = await getFirebaseAuth();

      // ensure both firebaseUid and currentUser are present
      if (!firebaseUid || !auth.currentUser) {
        navigate('/login?from=profile', { replace: true });
        return;
      }

      try {
        const res = await fetch(
          `http://localhost:3000/api/users/by-firebase-uid?uid=${firebaseUid}`
        );
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || 'Failed to fetch profile');

        setUser(json);
        localStorage.setItem('backendUserId', json.id);
        await fetchAddresses(json.id);
      } catch (err) {
        console.error('❌ Failed to fetch profile:', err.message);
        navigate('/login?from=profile', { replace: true });
      } finally {
        setFetching(false);
      }
    };

    fetchProfile();
  }, [authLoading, firebaseUid, navigate]);

  // show loader while auth or profile is resolving
  if (authLoading || fetching) {
    return (
      <div className={styles.container}>
        <Loader size='xl' color='pink' />
      </div>
    );
  }

  if (!user) return null;

  // wire up menu config
  const forYouItems = cfgForYou.map(item => ({
    label: item.label,
    onClick: () => openSection(item.key),
  }));
  const settingsItems = cfgSettings.map(item => ({
    label: item.label,
    onClick: () => openSection(item.key),
  }));

  return (
    <div className={styles.container}>
      <ProfileHeader
        name={user.first_name}
        avatarUrl={user.profile_image}
        onBack={() => setDrawerOpened(false)}
        onBasket={() => navigate('/basket')}
        showBasket={!drawerOpened}
      />

      <main className={styles.main}>
        <ProfileMenu title={sectionTitles.forYou} items={forYouItems} />
        <ProfileMenu title={sectionTitles.settings} items={settingsItems} />
      </main>

      {!drawerOpened && <Navbar />}

      <ProfileDrawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        activeSection={activeSection}
        user={user}
        addresses={addresses}
      />
    </div>
  );
}
