import {
  b as t,
  j as e,
  L as j,
  x as a,
  G as N,
  s as i,
  T as o,
  a4 as g,
} from './mantine-BTrqRPtO.js';
import { B as v } from './BasketButton-ragN9VfS.js';
import { N as b } from './Navbar-BWb8xyZh.js';
import { u as P } from './index-Wzv5Lk5m.js';
const _ = '/assets/header-shape-BscV2AY3.png';
function C() {
  const s = P(),
    [r, h] = t.useState(null),
    [f, p] = t.useState(!0),
    [x, m] = t.useState(!1),
    l = localStorage.getItem('userId');
  return (
    t.useEffect(() => {
      (async () => {
        if (!l) {
          s('/login');
          return;
        }
        try {
          const c = await fetch(`http://localhost:3000/api/users/${l}`),
            u = await c.text(),
            d = JSON.parse(u);
          if (!c.ok) throw new Error(d.error || 'Failed to fetch profile');
          h(d);
        } catch {
          s('/login');
        } finally {
          p(!1);
        }
      })();
    }, [s, l]),
    f
      ? e.jsx('div', {
          className: 'profile-page',
          children: e.jsx(j, { size: 'xl', color: 'pink' }),
        })
      : r
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
                  e.jsxs(N, {
                    className: 'profile-page__header-content',
                    position: 'apart',
                    spacing: 'xl',
                    children: [
                      e.jsx(i, {
                        className: 'edit-profile-btn',
                        variant: 'subtle',
                        onClick: () => s('/profile/edit'),
                        children: 'Edit Profile',
                      }),
                      e.jsx(v, { refresh: !0 }),
                    ],
                  }),
                  e.jsx(o, {
                    order: 2,
                    className: 'profile-page__header-name',
                    children: r.first_name,
                  }),
                ],
              }),
              e.jsxs('div', {
                className: 'profile-info',
                children: [
                  e.jsx(g, {
                    src: r.profile_image || 'https://via.placeholder.com/150',
                    alt: 'Profile Picture',
                    size: 'xl',
                    radius: 'xl',
                    mb: 'md',
                  }),
                  e.jsx(o, {
                    order: 3,
                    className: 'section-header',
                    children: 'For you',
                  }),
                  e.jsx(o, {
                    order: 4,
                    style: { cursor: 'pointer', color: '#4e7bff' },
                    onClick: () => m(n => !n),
                    children: 'Personal Info',
                  }),
                  x &&
                    e.jsxs(e.Fragment, {
                      children: [
                        e.jsxs(a, { children: ['Email: ', r.email || 'N/A'] }),
                        e.jsxs(a, { children: ['Phone: ', r.phone || 'N/A'] }),
                        e.jsxs(a, {
                          children: ['Address: ', r.address_1 || 'N/A'],
                        }),
                        e.jsxs(a, {
                          children: ['Birthday: ', r.birthdate || 'N/A'],
                        }),
                        e.jsxs(a, {
                          children: ['Country: ', r.country || 'N/A'],
                        }),
                      ],
                    }),
                  e.jsx('hr', { className: 'divider' }),
                  e.jsx(i, {
                    onClick: () => s('/profile/favorites'),
                    children: 'Favorites',
                  }),
                  e.jsx('hr', { className: 'divider' }),
                  e.jsx(o, {
                    order: 4,
                    mt: 'xl',
                    className: 'section-header',
                    children: 'Settings',
                  }),
                  e.jsx(i, {
                    variant: 'subtle',
                    onClick: () => s('/contact-support'),
                    children: 'Contact Support',
                  }),
                  e.jsx('hr', { className: 'divider' }),
                  e.jsx(i, {
                    variant: 'subtle',
                    onClick: () => s('/terms-of-service'),
                    children: 'Terms of Service',
                  }),
                  e.jsx('hr', { className: 'divider' }),
                  e.jsx(i, {
                    variant: 'subtle',
                    onClick: () => s('/faq'),
                    children: 'FAQ',
                  }),
                  e.jsx('hr', { className: 'divider' }),
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
export { C as default };
