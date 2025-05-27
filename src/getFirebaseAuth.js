import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCB6zO-qCX0B92sHgh1FI8_2iZ3pTERYzQ',
  authDomain: 'rouge-e249d.firebaseapp.com',
  projectId: 'rouge-e249d',
  storageBucket: 'rouge-e249d.appspot.com',
  messagingSenderId: '227400891514',
  appId: '1:227400891514:web:40db4c3e1576d060f74fc3',
};

let authInstance = null;

export const getFirebaseAuth = () => {

  if (!getApps().length) {
    const app = initializeApp(firebaseConfig);
    authInstance = getAuth(app);
  }
  return {
    auth: authInstance,
    onAuthStateChanged,
    signOut,
    googleProvider: new GoogleAuthProvider(),
    facebookProvider: new FacebookAuthProvider(),
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  };
};
