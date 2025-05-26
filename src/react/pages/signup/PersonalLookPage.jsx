import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackIconButton } from '@/react/components/buttons/IconButtons';
import { BottomBarButton } from '@/react/components/buttons/RedButtons';
import FinalStepper from '@/react/components/stepper/Stepper';
import { useAuth } from '@/react/hooks/useAuth';

import Look1 from '@/assets/yourlook/1look.png';
import Look2 from '@/assets/yourlook/2look.png';
import Look3 from '@/assets/yourlook/3look.png';
import Look4 from '@/assets/yourlook/4look.png';

import styles from '@/react/pages/signup/PersonalLookPage.module.scss';

const images = [
  { id: 1, src: Look1, alt: 'Look 1' },
  { id: 2, src: Look2, alt: 'Look 2' },
  { id: 3, src: Look3, alt: 'Look 3' },
  { id: 4, src: Look4, alt: 'Look 4' },
];

export default function PersonalLookPage() {
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { loading: authLoading } = useAuth();

  useEffect(() => {
    import('./PersonalInfoPage').then(() => {}).catch(() => {});
  }, []);

  const handleSelect = id => setSelected(id);

  useEffect(() => {
    const fetchBackendUserId = async () => {
      const firebaseUid = localStorage.getItem('firebaseUid');
      if (!firebaseUid) {
        navigate('/login');
        return;
      }
      try {
        const res = await fetch(
          `http://localhost:3000/api/users/by-firebase-uid?uid=${firebaseUid}`
        );
        const data = await res.json();
        if (res.ok && data.id) {
          localStorage.setItem('backendUserId', data.id);
        } else {
          navigate('/login');
        }
      } catch {
        navigate('/login');
      }
    };
    fetchBackendUserId();
  }, [navigate]);

  const handleContinue = async () => {
    if (!selected) {
      alert('Please select a look before continuing.');
      return;
    }

    const backendUserId = localStorage.getItem('backendUserId');
    if (!backendUserId) {
      alert('User ID not found. Please log in again.');
      navigate('/login');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/users/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: backendUserId, look_id: selected }),
      });

      if (!res.ok) {
        let errorMessage = 'Failed to update look.';
        try {
          const errorData = await res.json();
          errorMessage = errorData.error || errorMessage;
        } catch {}
        throw new Error(errorMessage);
      }
      navigate('/personal-info');
    } catch (error) {
      alert('Failed to update look. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) return <div>Loading...</div>;

  return (
    <div className={styles.personalLookPage}>
      <BackIconButton className={styles.backIconButton} />
      <FinalStepper active={1} />

      <h2>Select a picture that resembles you</h2>
      <p>This will help us show products that match your appearance.</p>

      <div className={styles.imageGrid}>
        {images.map(img => (
          <div
            key={img.id}
            className={`${styles.imageBox} ${selected === img.id ? styles.selected : ''}`}
            onClick={() => handleSelect(img.id)}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      <BottomBarButton
        onClick={handleContinue}
        disabled={!selected || loading}
        loading={loading}
      />
    </div>
  );
}
