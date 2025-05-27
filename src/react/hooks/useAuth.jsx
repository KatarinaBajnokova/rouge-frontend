import { useState, useEffect, createContext, useContext } from 'react';
import { getFirebaseAuth } from '../../getFirebaseAuth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    let unsubscribe;

    const init = async () => {
      const { auth, onAuthStateChanged } = await getFirebaseAuth();

      unsubscribe = onAuthStateChanged(auth, firebaseUser => {
        console.log('👀 Firebase auth state changed');

        if (firebaseUser) {
          setUserId(firebaseUser.uid);
          localStorage.setItem('firebaseUid', firebaseUser.uid);
          console.log(
            `✅ Logged in as: ${firebaseUser.email || firebaseUser.uid}`
          );
        } else {
          setUserId(null);
          localStorage.removeItem('firebaseUid');
          console.log('🚪 No user is currently logged in.');
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
