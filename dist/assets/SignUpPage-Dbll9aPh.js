import { b as i, j as s, v as h, P as b, D as C } from './mantine-BTrqRPtO.js';
import {
  u as F,
  B as E,
  m as W,
  I as T,
  o as B,
  S as G,
  e as L,
  f as q,
  k as U,
  s as a,
  p as f,
} from './index-Wzv5Lk5m.js';
const A = () => {
  const [n, v] = i.useState(''),
    [c, x] = i.useState(''),
    [t, k] = i.useState(''),
    [r, j] = i.useState(''),
    [d, S] = i.useState(''),
    [w, N] = i.useState(!1),
    g = F(),
    P = async () => {
      if (!n || !c || !t || !r || !d) {
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
      if (r !== d) {
        a({
          title: 'Password Mismatch',
          message: 'Passwords do not match.',
          color: 'red',
          position: 'top-center',
        });
        return;
      }
      try {
        const { auth: e, createUserWithEmailAndPassword: l } = await f(),
          m = (await l(e, t, r)).user;
        console.log('✅ Firebase sign-up success:', m);
        const o = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              first_name: n,
              last_name: c,
              email: t,
              password: r,
            }),
          }),
          p = await o.json();
        if (!o.ok)
          throw new Error(p.error || 'Failed to create user in backend.');
        localStorage.setItem('userId', p.user_id),
          localStorage.setItem('firstName', n),
          localStorage.setItem('lastName', c),
          localStorage.setItem('email', t),
          localStorage.setItem('password', r),
          console.log('✅ User created in backend:', p),
          a({
            title: 'Signed up!',
            message: 'Continue personalizing your profile.',
            color: 'green',
          }),
          g('/personal-look');
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
    y = async () => {
      try {
        const { auth: e, googleProvider: l, signInWithPopup: u } = await f(),
          o = (await u(e, l)).user;
        console.log('✅ Google sign-in success:', o),
          a({
            title: 'Logged in with Google',
            message: `Welcome ${o.displayName || 'back'}!`,
            color: 'green',
          }),
          g('/personal-look');
      } catch (e) {
        console.error('❌ Google sign-in error:', e.message),
          a({
            title: 'Google sign-in error',
            message: e.message,
            color: 'red',
          });
      }
    },
    I = async () => {
      try {
        const { auth: e, facebookProvider: l, signInWithPopup: u } = await f(),
          o = (await u(e, l)).user;
        console.log('✅ Facebook sign-in success:', o),
          a({
            title: 'Logged in with Facebook',
            message: `Welcome ${o.displayName || 'back'}!`,
            color: 'green',
          }),
          g('/personal-look');
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
      s.jsx(E, {}),
      s.jsx(W, { active: 0 }),
      s.jsx('h2', { children: 'Sign-up' }),
      s.jsx('p', { children: 'Create a new account' }),
      s.jsx(h, {
        label: 'First Name',
        placeholder: 'Your first name',
        value: n,
        onChange: e => v(e.currentTarget.value),
        className: 'input-field',
        required: !0,
      }),
      s.jsx(h, {
        label: 'Last Name',
        placeholder: 'Your last name',
        value: c,
        onChange: e => x(e.currentTarget.value),
        className: 'input-field',
        required: !0,
      }),
      s.jsx(h, {
        label: 'Email',
        placeholder: 'Your email...',
        value: t,
        onChange: e => k(e.currentTarget.value),
        className: 'input-field',
        required: !0,
      }),
      s.jsx(b, {
        label: 'Password',
        placeholder: 'Enter your password...',
        visible: w,
        onVisibilityChange: () => N(!w),
        visibilityToggleIcon: ({ reveal: e }) =>
          e ? s.jsx(T, { size: 16 }) : s.jsx(B, { size: 16 }),
        value: r,
        onChange: e => j(e.currentTarget.value),
        className: 'input-field',
        required: !0,
      }),
      s.jsx(b, {
        label: 'Confirm Password',
        placeholder: 'Confirm your password',
        value: d,
        onChange: e => S(e.currentTarget.value),
        className: 'input-field',
        required: !0,
      }),
      s.jsx(G, { fullWidth: !0, onClick: P }),
      s.jsxs('div', {
        className: 'social-register-section',
        children: [
          s.jsx(C, {
            className: 'social-divider',
            label: 'Or register with',
            labelPosition: 'center',
          }),
          s.jsxs('div', {
            className: 'social-buttons',
            children: [
              s.jsx(L, { fullWidth: !0, onClick: I }),
              s.jsx(q, { fullWidth: !0, onClick: y }),
            ],
          }),
          s.jsx('div', {
            className: 'login-link',
            children: s.jsx(U, {
              to: '/login',
              children: 'Already have an account? Log in',
            }),
          }),
        ],
      }),
    ],
  });
};
export { A as default };
