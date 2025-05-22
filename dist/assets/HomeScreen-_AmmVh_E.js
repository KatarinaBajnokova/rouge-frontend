import { r as t, j as e, A as f } from './react-BNfDklOQ.js';
/* empty css                         */ import { B as p } from './BasketButton-r1-1MTRa.js';
import { T as u } from './TrendingCard-ClgaopvH.js';
import { N as x } from './Navbar-BcSH3E9D.js';
import { s as j } from './mantine-BDZ4NO2A.js';
import './vendor-DRc0kkrK.js';
import './index-Cd1dwsJR.js';
const y = '/assets/carousel1-BHSOI18w.svg',
  v = '/assets/carousel2-DIiCSkID.svg',
  N = '/assets/carousel3-uJLogPim.svg',
  w = '/assets/carousel4-33m_v6L9.svg',
  g = [y, v, N, w];
function S({ height: c = 300, interval: l = 5e3 }) {
  const [n, i] = t.useState(0);
  return (
    t.useEffect(() => {
      const a = setInterval(() => {
        i(d => (d + 1) % g.length);
      }, l);
      return () => clearInterval(a);
    }, [l]),
    e.jsx('div', {
      className: 'simple-carousel',
      style: { height: c },
      children: e.jsx('img', {
        src: g[n],
        alt: `Slide ${n + 1}`,
        className: 'slide',
      }),
    })
  );
}
const E = () =>
    e.jsx('section', {
      className: 'home-section section-carousel',
      children: e.jsxs('div', {
        className: 'carousel-container',
        children: [
          e.jsx(S, { height: 'auto' }),
          e.jsx('div', { className: 'basket-wrapper', children: e.jsx(p, {}) }),
        ],
      }),
    }),
  k = () => {
    const [c, l] = t.useState([]),
      [n, i] = t.useState(!1),
      [a, d] = t.useState(null);
    return (
      t.useEffect(() => {
        (async () => {
          i(!0), d(null);
          try {
            const r = await fetch('/api/items?category_group=trending');
            if (!r.ok) {
              const h = await r.text();
              throw new Error(`HTTP ${r.status} — ${h}`);
            }
            const m = (await r.json()).map(h => ({
              id: h.id,
              title: h.name,
              category: h.category,
              level: h.level,
              price: h.price,
              image_url: h.image_url,
            }));
            l(m);
          } catch (r) {
            console.error('fetchTrending error →', r),
              d(`Failed to fetch trending looks (${r.message})`);
          } finally {
            i(!1);
          }
        })();
      }, []),
      e.jsxs('section', {
        className: 'home-section section-two',
        children: [
          e.jsxs('div', {
            className: 'section-header',
            children: [
              e.jsx('h1', { children: "What's trending" }),
              e.jsx('p', {
                className: 'section-desc',
                children:
                  'Seasonal looks, holiday glam, and trending favorites!',
              }),
            ],
          }),
          n && e.jsx('p', { children: 'Loading cards...' }),
          a &&
            e.jsxs('p', { style: { color: 'red' }, children: ['Error: ', a] }),
          !n &&
            !a &&
            c.length > 0 &&
            e.jsx('div', {
              className: 'card-scroll-wrapper',
              children: c.map(s => e.jsx(u, { look: s, showHeart: !1 }, s.id)),
            }),
          !n &&
            !a &&
            c.length === 0 &&
            e.jsx('p', { children: 'No trending looks found.' }),
        ],
      })
    );
  },
  L = () => {
    const [c, l] = t.useState([]),
      [n, i] = t.useState(!0),
      [a, d] = t.useState(null);
    return (
      t.useEffect(() => {
        fetch('/api/items?category_group=everyday')
          .then(s => {
            if (!s.ok) throw new Error('Failed to fetch everyday looks');
            return s.json();
          })
          .then(s => {
            const r = s.map(o => ({
              id: o.id,
              title: o.name,
              category: o.category,
              level: o.level,
              price: o.price,
              image_url: o.image_url,
            }));
            l(r);
          })
          .catch(s => {
            console.error(s), d(s.message);
          })
          .finally(() => i(!1));
      }, []),
      e.jsxs('section', {
        className: 'home-section section-everyday',
        children: [
          e.jsxs('div', {
            className: 'section-header',
            children: [
              e.jsx('h1', { children: 'Everyday' }),
              e.jsx('p', { children: 'Your go-to kit for everyday glam' }),
            ],
          }),
          n && e.jsx('p', { children: 'Loading cards…' }),
          a && e.jsxs('p', { className: 'error', children: ['Error: ', a] }),
          !n &&
            !a &&
            e.jsx('div', {
              className: 'card-scroll-wrapper',
              children: c.map(s => e.jsx(u, { look: s, showHeart: !1 }, s.id)),
            }),
        ],
      })
    );
  },
  _ = () => {
    const [c, l] = t.useState([]),
      [n, i] = t.useState(!0),
      [a, d] = t.useState(null);
    return (
      t.useEffect(() => {
        fetch('/api/items?category_group=formal')
          .then(s => {
            if (!s.ok) throw new Error('Failed to fetch formal looks');
            return s.json();
          })
          .then(s => {
            const r = s.map(o => ({
              id: o.id,
              title: o.name,
              category: o.category,
              level: o.level,
              price: o.price,
              image_url: o.image_url,
            }));
            l(r);
          })
          .catch(s => {
            console.error(s), d(s.message);
          })
          .finally(() => i(!1));
      }, []),
      e.jsxs('section', {
        className: 'home-section section-formal',
        children: [
          e.jsxs('div', {
            className: 'section-header',
            children: [
              e.jsx('h1', { children: 'Formal' }),
              e.jsx('p', {
                className: 'section-desc',
                children: 'Elegant taste for any formal setting',
              }),
            ],
          }),
          n && e.jsx('p', { children: 'Loading cards…' }),
          a && e.jsxs('p', { className: 'error', children: ['Error: ', a] }),
          !n &&
            !a &&
            e.jsx('div', {
              className: 'card-scroll-wrapper',
              children: c.map(s => e.jsx(u, { look: s, showHeart: !1 }, s.id)),
            }),
        ],
      })
    );
  },
  T = () => {
    const [c, l] = t.useState([]),
      [n, i] = t.useState(!0),
      [a, d] = t.useState(null);
    return (
      t.useEffect(() => {
        fetch('/api/items?category_group=reorder')
          .then(s => {
            if (!s.ok) throw new Error('Failed to fetch reorder looks');
            return s.json();
          })
          .then(s => {
            const r = s.map(o => ({
              id: o.id,
              title: o.name,
              category: o.category,
              level: o.level,
              price: o.price,
              image_url: o.image_url,
            }));
            l(r);
          })
          .catch(s => d(s.message))
          .finally(() => i(!1));
      }, []),
      e.jsxs('section', {
        className: 'home-section section-reorder',
        children: [
          e.jsxs('div', {
            className: 'section-header',
            children: [
              e.jsx('h1', { children: 'Reorder' }),
              e.jsx('p', {
                className: 'section-desc',
                children: 'Rediscover your past looks',
              }),
            ],
          }),
          n && e.jsx('p', { children: 'Loading cards...' }),
          a && e.jsxs('p', { className: 'error', children: ['Error: ', a] }),
          !n &&
            !a &&
            e.jsx('div', {
              className: 'card-scroll-wrapper',
              children: c.map(s => e.jsx(u, { look: s, showHeart: !1 }, s.id)),
            }),
        ],
      })
    );
  },
  D = () => {
    const [c, l] = t.useState([]),
      [n, i] = t.useState(!0),
      [a, d] = t.useState(null),
      s = f();
    return (
      t.useEffect(() => {
        fetch('/api/items?category_group=trending')
          .then(r => {
            if (!r.ok) throw new Error('Failed to fetch trending');
            return r.json();
          })
          .then(r => l(r))
          .catch(r => d(r.message))
          .finally(() => i(!1));
      }, []),
      t.useEffect(() => {
        var r;
        (r = s.state) != null &&
          r.newUser &&
          j({
            title: '🎉 Welcome!',
            message: 'Your account was created successfully!',
            color: 'green',
          });
      }, [s.state]),
      e.jsxs('div', {
        className: 'home-screen',
        children: [
          e.jsx(E, {}),
          e.jsx(k, {}),
          e.jsx(L, {}),
          e.jsx(_, {}),
          e.jsx(T, {}),
          e.jsx(x, {}),
        ],
      })
    );
  };
export { D as default };
