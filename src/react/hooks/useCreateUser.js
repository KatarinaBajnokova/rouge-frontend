import { useState } from 'react';
import { showNotification } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import { useSignUpData } from './useSignUpData';
import { useAuth } from './useAuth';

export function useCreateUser() {
  const navigate = useNavigate();
  const { data, clear } = useSignUpData();
  const { userId } = useAuth();
  const [loading, setLoading] = useState(false);

  async function createUser(overrides = {}, onSuccess) {
    setLoading(true);
    try {
      if (!userId) {
        throw new Error('User ID not available. Please log in again.');
      }

      const payload = {
        ...data,
        ...overrides,
        firebase_uid: userId,
      };

      const res = await fetch('/api/users/by-firebase-uid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Signup failed');

      clear();
      if (onSuccess) {
        onSuccess();
      } else {
        showNotification({
          title: '🎉 Welcome aboard!',
          message: 'Your account has been created.',
          color: 'green',
        });
        navigate('/homescreen');
      }
    } catch (err) {
      showNotification({
        title: 'Signup error',
        message: err.message,
        color: 'red',
        position: 'top-center',
      });
    } finally {
      setLoading(false);
    }
  }

  return { createUser, loading };
}
