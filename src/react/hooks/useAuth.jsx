import { useState, useEffect, createContext, useContext } from 'react';
import { getFirebaseAuth } from '../../getFirebaseAuth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

useEffect(() => {
  let unsubscribe;
  let initialized = false;

  const init = async () => {
    if (initialized) return;
    initialized = true;

    const { auth, onAuthStateChanged } = await getFirebaseAuth();

    unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log('👀 Firebase auth state changed');

      if (firebaseUser) {
        setUserId(firebaseUser.uid);
        localStorage.setItem('firebaseUid', firebaseUser.uid);
        console.log(`✅ Logged in as: ${firebaseUser.email || firebaseUser.uid}`);
      } else {
        const cachedUid = localStorage.getItem('firebaseUid');
        if (cachedUid) {
          setUserId(cachedUid);
          console.log(`⚠️ No active session, using cached UID: ${cachedUid}`);
        } else {
          setUserId(null);
          console.log('🚪 No user is currently logged in.');
        }
      }

      setAuthLoading(false);
    });
  };

  init();

  return () => {
    if (unsubscribe) unsubscribe();
  };
}, []);


  return (
    <AuthContext.Provider value={{ userId, loading: authLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
