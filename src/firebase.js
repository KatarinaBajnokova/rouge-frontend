import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCB6zO-qCX0B92sHgh1FI8_2iZ3pTERYzQ',
  authDomain: 'rouge-e249d.firebaseapp.com',
  projectId: 'rouge-e249d',
  storageBucket: 'rouge-e249d.appspot.com',
  messagingSenderId: '227400891514',
  appId: '1:227400891514:web:40db4c3e1576d060f74fc3',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, signInWithPopup };
