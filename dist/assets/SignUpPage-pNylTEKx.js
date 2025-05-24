import {
  r as i,
  n as F,
  j as s,
  p as I,
  q as E,
  L as W,
} from './react-BNfDklOQ.js';
import {
  B as T,
  j as L,
  S as q,
  e as B,
  f as G,
  k as p,
} from './index-Cd1dwsJR.js';
import { b as h, P as w, D as U, s as a } from './mantine-BDZ4NO2A.js';
import './vendor-DRc0kkrK.js';
const V = () => {
  const [u, v] = i.useState(''),
    [d, x] = i.useState(''),
    [t, j] = i.useState(''),
    [r, k] = i.useState(''),
    [g, P] = i.useState(''),
    [f, y] = i.useState(!1),
    m = F(),
    N = async () => {
      if (!u || !d || !t || !r || !g) {
        a({
          title: 'Missing Fields',
          message: 'Please fill out all fields.',
          color: 'red',
          position: 'top-center',
        });
        return;
      }
      if (!t.includes('@') || !t.includes('.')) {
        a({
          title: 'Invalid Email',
          message: 'Please enter a valid email address.',
          color: 'red',
          position: 'top-center',
        });
        return;
      }
      if (r.length < 6) {
        a({
          title: 'Weak Password',
          message: 'Password must be at least 6 characters.',
          color: 'red',
          position: 'top-center',
        });
        return;
      }
      if (r !== g) {
        a({
          title: 'Password Mismatch',
          message: 'Passwords do not match.',
          color: 'red',
          position: 'top-center',
        });
        return;
      }
      try {
        const { auth: e, createUserWithEmailAndPassword: n } = await p(),
          c = (await n(e, t, r)).user;
        console.log('✅ Firebase sign-up success:', c);
        const o = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              first_name: u,
              last_name: d,
              email: t,
              password: r,
              firebase_uid: c.uid,
            }),
          }),
          b = await o.json();
        if (!o.ok)
          throw new Error(b.error || 'Failed to create user in backend.');
        console.log('✅ User created in backend:', b),
          a({
            title: 'Signed up!',
            message: 'Continue personalizing your profile.',
            color: 'green',
          }),
          m('/personal-look', { state: { newUser: !0 } });
      } catch (e) {
        console.error('❌ Sign-up error:', e.message),
          e.message.includes('email-already-in-use')
            ? a({
                title: 'Email already exists',
                message: 'Please use a different email or login instead.',
                color: 'red',
              })
            : a({ title: 'Sign-up error', message: e.message, color: 'red' });
      }
    },
    S = async () => {
      try {
        const { auth: e, googleProvider: n, signInWithPopup: l } = await p(),
          o = (await l(e, n)).user;
        console.log('✅ Google sign-in success:', o),
          a({
            title: 'Logged in with Google',
            message: `Welcome ${o.displayName || 'back'}!`,
            color: 'green',
          }),
          m('/personal-look');
      } catch (e) {
        console.error('❌ Google sign-in error:', e.message),
          a({
            title: 'Google sign-in error',
            message: e.message,
            color: 'red',
          });
      }
    },
    C = async () => {
      try {
        const { auth: e, facebookProvider: n, signInWithPopup: l } = await p(),
          o = (await l(e, n)).user;
        console.log('✅ Facebook sign-in success:', o),
          a({
            title: 'Logged in with Facebook',
            message: `Welcome ${o.displayName || 'back'}!`,
            color: 'green',
          }),
          m('/personal-look');
      } catch (e) {
        console.error('❌ Facebook sign-in error:', e.message),
          a({
            title: 'Facebook sign-in error',
            message: e.message,
            color: 'red',
          });
      }
    };
  return s.jsxs('div', {
    className: 'signup-page',
    children: [
      s.jsx(T, {}),
      s.jsx(L, { active: 0 }),
      s.jsx('h2', { children: 'Sign-up' }),
      s.jsx('p', { children: 'Create a new account' }),
      s.jsx(h, {
        label: 'First Name',
        placeholder: 'Your first name',
        value: u,
        onChange: e => v(e.currentTarget.value),
        className: 'input-field',
        required: !0,
      }),
      s.jsx(h, {
        label: 'Last Name',
        placeholder: 'Your last name',
        value: d,
        onChange: e => x(e.currentTarget.value),
        className: 'input-field',
        required: !0,
      }),
      s.jsx(h, {
        label: 'Email',
        placeholder: 'Your email...',
        value: t,
        onChange: e => j(e.currentTarget.value),
        className: 'input-field',
        required: !0,
      }),
      s.jsx(w, {
        label: 'Password',
        placeholder: 'Enter your password...',
        visible: f,
        onVisibilityChange: () => y(!f),
        visibilityToggleIcon: ({ reveal: e }) =>
          e ? s.jsx(I, { size: 16 }) : s.jsx(E, { size: 16 }),
        value: r,
        onChange: e => k(e.currentTarget.value),
        className: 'input-field',
        required: !0,
      }),
      s.jsx(w, {
        label: 'Confirm Password',
        placeholder: 'Confirm your password',
        value: g,
        onChange: e => P(e.currentTarget.value),
        className: 'input-field',
        required: !0,
      }),
      s.jsx(q, { fullWidth: !0, onClick: N }),
      s.jsxs('div', {
        className: 'social-register-section',
        children: [
          s.jsx(U, {
            className: 'social-divider',
            label: 'Or register with',
            labelPosition: 'center',
          }),
          s.jsxs('div', {
            className: 'social-buttons',
            children: [
              s.jsx(B, { fullWidth: !0, onClick: C }),
              s.jsx(G, { fullWidth: !0, onClick: S }),
            ],
          }),
          s.jsx('div', {
            className: 'login-link',
            children: s.jsx(W, {
              to: '/login',
              children: 'Already have an account? Log in',
            }),
          }),
        ],
      }),
    ],
  });
};
export { V as default };
