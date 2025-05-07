import { useState } from 'react';
import { showNotification } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import { useSignUpData } from './useSignUpData';

export function useCreateUser() {
  const navigate = useNavigate();
  const { data, clear } = useSignUpData();
  const [loading, setLoading] = useState(false);

  async function createUser(overrides = {}) {
    setLoading(true);
    try {
      const payload = { ...data, ...overrides };
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Signup failed');

      clear();
      showNotification({
        title: '🎉 Welcome aboard!',
        message: 'Your account has been created.',
        color: 'green',
      });
      navigate('/homescreen');
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
