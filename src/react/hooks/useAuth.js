import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/routes/session_check.php') 
      .then(res => {
        if (!res.ok) throw new Error('Unauthorized');
        return res.json();
      })
      .then(data => {
        setUserId(data.user_id);
        setLoading(false);
      })
      .catch(() => {
        setUserId(null);
        setLoading(false);
        navigate('/login'); // redirect if not logged in
      });
  }, []);

  return { userId, loading };
}
