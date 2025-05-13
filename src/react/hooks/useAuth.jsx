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

      unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          setUserId(firebaseUser.uid);
        } else {
          setUserId(null);
        }
        setAuthLoading(false); // Only after Firebase responds
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
