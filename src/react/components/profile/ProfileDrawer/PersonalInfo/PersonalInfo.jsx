import React, { memo } from 'react';
import { Text, Title, Divider, Image, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { getFirebaseAuth } from '@/getFirebaseAuth';
import Look1 from '@/assets/yourlook/1look.png';
import Look2 from '@/assets/yourlook/2look.png';
import Look3 from '@/assets/yourlook/3look.png';
import Look4 from '@/assets/yourlook/4look.png';
import styles from './PersonalInfo.module.scss';

const lookMap = {
  1: { src: Look1, alt: 'Look 1' },
  2: { src: Look2, alt: 'Look 2' },
  3: { src: Look3, alt: 'Look 3' },
  4: { src: Look4, alt: 'Look 4' },
};

const InfoRow = memo(({ label, value }) => (
  <div className={styles.infoRow}>
    <span className={styles.label}>{label}</span>
    <span className={styles.value}>{value}</span>
  </div>
));

export function PersonalInfo({ user, addresses }) {
  const navigate = useNavigate();
  const chosenLook = lookMap[user.look_id];

  const handleLogout = async () => {
    try {
      const { auth, signOut } = await getFirebaseAuth();
      await signOut(auth);
      localStorage.removeItem('firebaseUid');
      localStorage.removeItem('backendUserId');
      sessionStorage.clear();
      navigate('/login?from=profile', { replace: true });
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <div className={styles.personalInfo}>
      <section className={styles.section}>
        <Title order={5} className={styles.sectionTitle}>
          Personal Information
        </Title>
        <div className={styles.sectionContent}>
          <InfoRow label='First Name:' value={user.first_name || 'N/A'} />
          <InfoRow label='Last Name:' value={user.last_name || 'N/A'} />
          <InfoRow label='Email:' value={user.email || 'N/A'} />
          <InfoRow label='Phone:' value={user.phone || 'N/A'} />
          <InfoRow label='Birthday:' value={user.birthdate || 'N/A'} />
          <InfoRow label='Country:' value={user.country || 'N/A'} />
        </div>
      </section>

      <Divider className={styles.divider} />

      <section className={styles.section}>
        <Title order={5} className={styles.sectionTitle}>
          Primary Address
        </Title>
        <div className={styles.sectionContent}>
          <InfoRow label='Address:' value={user.address_1 || 'N/A'} />
        </div>
      </section>

      <Divider className={styles.divider} />

      <section className={styles.section}>
        <Title order={5} className={styles.sectionTitle}>
          Shipping Address
        </Title>
        <div className={styles.sectionContent}>
          {addresses.length > 0 ? (
            addresses.map((addr, i) => (
              <div key={i} className={styles.addressBlock}>
                <InfoRow label='Address:' value={addr.address_1 || '-'} />
                <InfoRow label='Postal Code:' value={addr.postal_code || '-'} />
                <InfoRow label='Country:' value={addr.country || '-'} />
                {addr.phone && <InfoRow label='Phone:' value={addr.phone} />}
                {i < addresses.length - 1 && (
                  <Divider className={`${styles.divider} ${styles.small}`} />
                )}
              </div>
            ))
          ) : (
            <Text color='dimmed'>
              No additional shipping addresses saved yet.
            </Text>
          )}
        </div>
      </section>

      <Divider className={styles.divider} />

      <section className={`${styles.section} ${styles.lookSection}`}>
        <Title order={5} className={styles.sectionTitle}>
          Your Selected Look
        </Title>
        <div className={`${styles.sectionContent} ${styles.lookContent}`}>
          {chosenLook ? (
            <Image
              src={chosenLook.src}
              alt={chosenLook.alt}
              className={styles.lookImage}
              withPlaceholder
            />
          ) : (
            <Text color='dimmed'>No look selected.</Text>
          )}
        </div>
      </section>

      <div className={styles.logoutWrapper}>
        <Button
          variant='outline'
          fullWidth
          onClick={handleLogout}
          className={styles.logoutButton}
        >
          Log Out
        </Button>
      </div>
    </div>
  );
}

export default PersonalInfo;
