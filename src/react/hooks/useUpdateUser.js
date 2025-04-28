import { useState } from 'react';
import { showNotification } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';

export function useUpdateUser() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function updateUser(data) {
    const userId = localStorage.getItem('userId');
    if (!userId) throw new Error('Not logged in');
    setLoading(true);
    try {
      const res = await fetch('/api/users/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, ...data }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Update failed');
      navigate('/profile');
    } catch (err) {
      showNotification({
        title: 'Update failed',
        message: err.message,
        color: 'red',
        position: 'top-center',
      });
    } finally {
      setLoading(false);
    }
  }

  return { updateUser, loading };
}
