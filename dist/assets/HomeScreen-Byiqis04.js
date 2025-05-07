import { b as r, j as e } from './mantine-BTrqRPtO.js';
/* empty css                         */ import { B as f } from './BasketButton-ragN9VfS.js';
import { j as p, k as j } from './index-Wzv5Lk5m.js';
import { N as x } from './Navbar-BWb8xyZh.js';
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var v = p('filled', 'heart-filled', 'IconHeartFilled', [
  [
    'path',
    {
      d: 'M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z',
      key: 'svg-0',
    },
  ],
]);
const y = '/assets/carousel1-BHSOI18w.svg',
  N = '/assets/carousel2-DIiCSkID.svg',
  _ = '/assets/carousel3-uJLogPim.svg',
  S = '/assets/carousel4-33m_v6L9.svg',
  m = [y, N, _, S];
function E({ height: a = 300, interval: c = 5e3 }) {
  const [o, i] = r.useState(0);
  return (
    r.useEffect(() => {
      const n = setInterval(() => {
        i(d => (d + 1) % m.length);
      }, c);
      return () => clearInterval(n);
    }, [c]),
    e.jsx('div', {
      className: 'simple-carousel',
      style: { height: a },
      children: e.jsx('img', {
        src: m[o],
        alt: `Slide ${o + 1}`,
        className: 'slide',
      }),
    })
  );
}
const w = () =>
    e.jsx('section', {
      className: 'home-section section-carousel',
      children: e.jsxs('div', {
        className: 'carousel-container',
        children: [
          e.jsx(E, { height: 500 }),
          e.jsx('div', { className: 'basket-wrapper', children: e.jsx(f, {}) }),
        ],
      }),
    }),
  h = ({ look: a, showHeart: c = !1 }) =>
    e.jsx(j, {
      to: `/item/${a.id}`,
      className: 'card-link',
      children: e.jsxs('div', {
        className: 'trendingCard',
        children: [
          e.jsxs('div', {
            className: 'trendingCard__imageContainer',
            children: [
              e.jsx('img', {
                src: a.image_url,
                alt: a.title,
                className: 'trendingCard__image',
              }),
              c &&
                e.jsx('div', {
                  className: 'trendingCard__heartIcon',
                  children: e.jsx(v, { size: 20, color: '#C8102E' }),
                }),
            ],
          }),
          e.jsxs('div', {
            className: 'trendingCard__content',
            children: [
              e.jsx('div', {
                className: 'trendingCard__title',
                children: a.title,
              }),
              e.jsx('div', {
                className: 'trendingCard__category',
                children: a.category,
              }),
              e.jsxs('div', {
                className: 'trendingCard__footer',
                children: [
                  e.jsxs('div', {
                    className: `trendingCard__badge badge--${a.level.toLowerCase()}`,
                    children: ['✦ ', a.level],
                  }),
                  e.jsxs('div', {
                    className: 'trendingCard__price',
                    children: ['€', a.price],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  k = () => {
    const [a, c] = r.useState([]),
      [o, i] = r.useState(!1),
      [n, d] = r.useState(null);
    return (
      r.useEffect(() => {
        (async () => {
          i(!0), d(null);
          try {
            const l = await fetch('/api/items?category_group=trending');
            if (!l.ok) {
              const g = await l.text();
              throw new Error(`HTTP ${l.status} — ${g}`);
            }
            const u = (await l.json()).map(g => ({
              id: g.id,
              title: g.name,
              category: g.category,
              level: g.level,
              price: g.price,
              image_url: g.image_url,
            }));
            c(u);
          } catch (l) {
            console.error('fetchTrending error →', l),
              d(`Failed to fetch trending looks (${l.message})`);
          } finally {
            i(!1);
          }
        })();
      }, []),
      e.jsxs('section', {
        className: 'home-section section-two',
        children: [
          e.jsx('h1', { children: "What's trending" }),
          e.jsx('p', {
            className: 'section-desc',
            children: 'Seasonal looks, holiday glam, and trending favorites!',
          }),
          o && e.jsx('p', { children: 'Loading cards...' }),
          n &&
            e.jsxs('p', { style: { color: 'red' }, children: ['Error: ', n] }),
          !o &&
            !n &&
            a.length > 0 &&
            e.jsx('div', {
              className: 'card-scroll-wrapper',
              children: a.map(s => e.jsx(h, { look: s, showHeart: !1 }, s.id)),
            }),
          !o &&
            !n &&
            a.length === 0 &&
            e.jsx('p', { children: 'No trending looks found.' }),
        ],
      })
    );
  },
  C = () => {
    const [a, c] = r.useState([]),
      [o, i] = r.useState(!0),
      [n, d] = r.useState(null);
    return (
      r.useEffect(() => {
        fetch('/api/items?category_group=everyday')
          .then(s => {
            if (!s.ok) throw new Error('Failed to fetch everyday looks');
            return s.json();
          })
          .then(s => {
            const l = s.map(t => ({
              id: t.id,
              title: t.name,
              category: t.category,
              level: t.level,
              price: t.price,
              image_url: t.image_url,
            }));
            c(l);
          })
          .catch(s => {
            console.error(s), d(s.message);
          })
          .finally(() => i(!1));
      }, []),
      e.jsxs('section', {
        className: 'home-section section-everyday',
        children: [
          e.jsx('h1', { children: 'Everyday' }),
          e.jsx('p', { children: 'Your go-to kit for everyday glam' }),
          o && e.jsx('p', { children: 'Loading cards…' }),
          n && e.jsxs('p', { className: 'error', children: ['Error: ', n] }),
          !o &&
            !n &&
            e.jsx('div', {
              className: 'card-scroll-wrapper',
              children: a.map(s => e.jsx(h, { look: s, showHeart: !1 }, s.id)),
            }),
        ],
      })
    );
  },
  L = () => {
    const [a, c] = r.useState([]),
      [o, i] = r.useState(!0),
      [n, d] = r.useState(null);
    return (
      r.useEffect(() => {
        fetch('/api/items?category_group=formal')
          .then(s => {
            if (!s.ok) throw new Error('Failed to fetch formal looks');
            return s.json();
          })
          .then(s => {
            const l = s.map(t => ({
              id: t.id,
              title: t.name,
              category: t.category,
              level: t.level,
              price: t.price,
              image_url: t.image_url,
            }));
            c(l);
          })
          .catch(s => {
            console.error(s), d(s.message);
          })
          .finally(() => i(!1));
      }, []),
      e.jsxs('section', {
        className: 'home-section section-formal',
        children: [
          e.jsx('h1', { children: 'Formal' }),
          e.jsx('p', {
            className: 'section-desc',
            children: 'Elegant taste for any formal setting',
          }),
          o && e.jsx('p', { children: 'Loading cards…' }),
          n && e.jsxs('p', { className: 'error', children: ['Error: ', n] }),
          !o &&
            !n &&
            e.jsx('div', {
              className: 'card-scroll-wrapper',
              children: a.map(s => e.jsx(h, { look: s, showHeart: !1 }, s.id)),
            }),
        ],
      })
    );
  },
  T = () => {
    const [a, c] = r.useState([]),
      [o, i] = r.useState(!0),
      [n, d] = r.useState(null);
    return (
      r.useEffect(() => {
        fetch('/api/items?category_group=reorder')
          .then(s => {
            if (!s.ok) throw new Error('Failed to fetch reorder looks');
            return s.json();
          })
          .then(s => {
            const l = s.map(t => ({
              id: t.id,
              title: t.name,
              category: t.category,
              level: t.level,
              price: t.price,
              image_url: t.image_url,
            }));
            c(l);
          })
          .catch(s => d(s.message))
          .finally(() => i(!1));
      }, []),
      e.jsxs('section', {
        className: 'home-section section-reorder',
        children: [
          e.jsx('h1', { children: 'Reorder' }),
          e.jsx('p', {
            className: 'section-desc',
            children: 'Rediscover your past looks',
          }),
          o && e.jsx('p', { children: 'Loading cards...' }),
          n && e.jsxs('p', { className: 'error', children: ['Error: ', n] }),
          !o &&
            !n &&
            e.jsx('div', {
              className: 'card-scroll-wrapper',
              children: a.map(s => e.jsx(h, { look: s, showHeart: !1 }, s.id)),
            }),
        ],
      })
    );
  },
  R = () => {
    const [a, c] = r.useState([]),
      [o, i] = r.useState(!0),
      [n, d] = r.useState(null);
    return (
      r.useEffect(() => {
        fetch('/api/items?category_group=trending')
          .then(s => {
            if (!s.ok) throw new Error('Failed to fetch trending');
            return s.json();
          })
          .then(s => c(s))
          .catch(s => d(s.message))
          .finally(() => i(!1));
      }, []),
      e.jsxs('div', {
        className: 'home-screen',
        children: [
          e.jsx(w, {}),
          e.jsx(k, {}),
          e.jsx(C, {}),
          e.jsx(L, {}),
          e.jsx(T, {}),
          e.jsx(x, {}),
        ],
      })
    );
  };
export { R as default };
