import { useState } from 'react';
import { showNotification } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import { getFirebaseAuth } from '../../getFirebaseAuth';

export function useUpdateUser() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function updateUser(data) {
    const backendUserId = localStorage.getItem('backendUserId');
    if (!backendUserId) throw new Error('Not logged in');
    setLoading(true);

    try {
      const { auth } = await getFirebaseAuth();
      const currentUser = auth.currentUser;

      if (!currentUser) {
        throw new Error('Not logged in');
      }

      await currentUser.reload();
      const token = await currentUser.getIdToken(true);

      const res = await fetch('/api/users/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ user_id: backendUserId, ...data }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Update failed');

      showNotification({
        title: 'Profile updated!',
        message: 'Your information has been saved successfully.',
        color: 'green',
        position: 'top-center',
      });

      navigate('/profile');
    } catch (err) {
      console.error('Failed to update user', err);
      showNotification({
        title: 'Update failed',
        message: err.message,
        color: 'red',
        position: 'top-center',
      });
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return { updateUser, loading };
}
