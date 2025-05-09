import { useState, useEffect, createContext, useContext } from 'react';
import { getFirebaseAuth } from '../../getFirebaseAuth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const { auth, onAuthStateChanged } = await getFirebaseAuth();

      const unsubscribe = onAuthStateChanged(auth, async user => {
        if (user) {
          setUserId(user.uid);
        } else {
          setUserId(null);
        }
        setLoading(false);
      });

      return unsubscribe;
    };

    initAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ userId, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
