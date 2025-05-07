import { useState } from 'react';

const STORAGE_KEY = 'signupData';

export function useSignUpData() {
  const [data, setData] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  });

  const save = newData => {
    const updated = { ...data, ...newData };
    setData(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const clear = () => {
    setData({});
    localStorage.removeItem(STORAGE_KEY);
  };

  return { data, save, clear };
}
