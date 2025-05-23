import { n as j, r as c, j as e } from './react-BNfDklOQ.js';
import { u as g, k as N } from './index-Cd1dwsJR.js';
import { B as v } from './BasketButton-r1-1MTRa.js';
import { N as b } from './Navbar-BcSH3E9D.js';
import {
  L as k,
  e as a,
  G as A,
  B as i,
  T as n,
  l as P,
} from './mantine-BDZ4NO2A.js';
import './vendor-DRc0kkrK.js';
const _ = '/assets/header-shape-BscV2AY3.png';
function E() {
  const r = j(),
    [s, h] = c.useState(null),
    [f, p] = c.useState(!1),
    { userId: o, loading: u } = g(),
    m = async () => {
      const { auth: t, signOut: l } = await N();
      await l(t),
        localStorage.clear(),
        r('/login?from=profile', { replace: !0 });
    };
  return (
    c.useEffect(() => {
      (async () => {
        if (!o) {
          r('/login?from=profile', { replace: !0 });
          return;
        }
        console.log(
          `👉 Fetching user from /api/users/by-firebase-uid?uid=${o}`
        );
        try {
          const l = await fetch(
              `http://localhost:3000/api/users/by-firebase-uid?uid=${o}`
            ),
            x = await l.text(),
            d = JSON.parse(x);
          if (!l.ok) throw new Error(d.error || 'Failed to fetch profile');
          h(d);
        } catch {
          r('/login?from=profile', { replace: !0 });
        }
      })();
    }, [r, o]),
    u
      ? e.jsx('div', {
          className: 'profile-page',
          children: e.jsx(k, { size: 'xl', color: 'pink' }),
        })
      : s
        ? e.jsxs('div', {
            className: 'profile-page',
            children: [
              e.jsxs('div', {
                className: 'profile-page__header',
                children: [
                  e.jsx('img', {
                    src: _,
                    alt: '',
                    'aria-hidden': 'true',
                    className: 'profile-page__header-bg',
                  }),
                  e.jsxs(A, {
                    className: 'profile-page__header-content',
                    position: 'apart',
                    spacing: 'xl',
                    children: [
                      e.jsx(i, {
                        variant: 'subtle',
                        onClick: () => r('/profile/edit'),
                        children: 'Edit Profile',
                      }),
                      e.jsx(v, { refresh: !0 }),
                    ],
                  }),
                  e.jsx(n, {
                    order: 2,
                    className: 'profile-page__header-name',
                    children: s.first_name,
                  }),
                ],
              }),
              e.jsxs('div', {
                className: 'profile-info',
                children: [
                  e.jsx(P, {
                    src: s.profile_image || 'https://via.placeholder.com/150',
                    alt: 'Profile Picture',
                    size: 'xl',
                    radius: 'xl',
                    mb: 'md',
                  }),
                  e.jsx(n, {
                    order: 3,
                    className: 'section-header',
                    children: 'For you',
                  }),
                  e.jsx(n, {
                    order: 4,
                    style: { cursor: 'pointer', color: '#4e7bff' },
                    onClick: () => p(t => !t),
                    children: 'Personal Info',
                  }),
                  f &&
                    e.jsxs(e.Fragment, {
                      children: [
                        e.jsxs(a, { children: ['Email: ', s.email || 'N/A'] }),
                        e.jsxs(a, { children: ['Phone: ', s.phone || 'N/A'] }),
                        e.jsxs(a, {
                          children: ['Address: ', s.address_1 || 'N/A'],
                        }),
                        e.jsxs(a, {
                          children: ['Birthday: ', s.birthdate || 'N/A'],
                        }),
                        e.jsxs(a, {
                          children: ['Country: ', s.country || 'N/A'],
                        }),
                      ],
                    }),
                  e.jsx('hr', { className: 'divider' }),
                  e.jsx(i, {
                    onClick: () => r('/profile/favorites'),
                    children: 'Favorites',
                  }),
                  e.jsx('hr', { className: 'divider' }),
                  e.jsx(n, {
                    order: 4,
                    mt: 'xl',
                    className: 'section-header',
                    children: 'Settings',
                  }),
                  e.jsx(i, {
                    variant: 'subtle',
                    onClick: () => r('/contact-support'),
                    children: 'Contact Support',
                  }),
                  e.jsx('hr', { className: 'divider' }),
                  e.jsx(i, {
                    variant: 'subtle',
                    onClick: () => r('/terms-of-service'),
                    children: 'Terms of Service',
                  }),
                  e.jsx('hr', { className: 'divider' }),
                  e.jsx(i, {
                    variant: 'subtle',
                    onClick: () => r('/faq'),
                    children: 'FAQ',
                  }),
                  e.jsx('hr', { className: 'divider' }),
                  e.jsx(i, {
                    variant: 'light',
                    onClick: m,
                    className: 'logout-button',
                    children: 'Log Out',
                  }),
                ],
              }),
              e.jsx(b, {}),
            ],
          })
        : e.jsx('div', {
            className: 'profile-page',
            children: e.jsx(a, {
              color: 'red',
              children: '❌ Failed to load profile.',
            }),
          })
  );
}
export { E as default };
