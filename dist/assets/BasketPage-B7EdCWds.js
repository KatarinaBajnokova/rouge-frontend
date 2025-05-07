import {
  b as l,
  j as e,
  G as h,
  L as C,
  x as a,
  a1 as S,
  a2 as I,
  a3 as u,
  T as N,
} from './mantine-BTrqRPtO.js';
import { j as p, u as _, h as E, C as M } from './index-Wzv5Lk5m.js';
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var B = p('outline', 'minus', 'IconMinus', [
  ['path', { d: 'M5 12l14 0', key: 'svg-0' }],
]);
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var L = p('outline', 'plus', 'IconPlus', [
  ['path', { d: 'M12 5l0 14', key: 'svg-0' }],
  ['path', { d: 'M5 12l14 0', key: 'svg-1' }],
]);
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var T = p('outline', 'trash', 'IconTrash', [
  ['path', { d: 'M4 7l16 0', key: 'svg-0' }],
  ['path', { d: 'M10 11l0 6', key: 'svg-1' }],
  ['path', { d: 'M14 11l0 6', key: 'svg-2' }],
  [
    'path',
    { d: 'M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12', key: 'svg-3' },
  ],
  ['path', { d: 'M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3', key: 'svg-4' }],
]);
const q =
  "data:image/svg+xml,%3csvg%20width='289'%20height='288'%20viewBox='0%200%20289%20288'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M214.557%20236.72H73.1238C70.9534%20236.733%2068.8551%20235.942%2067.2338%20234.499C65.6125%20233.056%2064.5832%20231.064%2064.3445%20228.906L57.409%20124.829C57.3724%20123.666%2057.5744%20122.508%2058.0027%20121.426C58.431%20120.345%2059.0763%20119.362%2059.8989%20118.54C60.7215%20117.717%2061.7041%20117.072%2062.7858%20116.643C63.8674%20116.215%2065.0254%20116.013%2066.1882%20116.05H222.941C225.27%20116.05%20227.503%20116.975%20229.149%20118.621C230.796%20120.267%20231.721%20122.5%20231.721%20124.829L223.336%20228.994C223.078%20231.135%20222.04%20233.107%20220.42%20234.532C218.801%20235.956%20216.714%20236.735%20214.557%20236.72Z'%20stroke='%23959595'%20stroke-width='13'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M100.647%20144.539V96.253C100.647%2084.611%20105.272%2073.4459%20113.504%2065.2138C121.736%2056.9817%20132.901%2052.3569%20144.543%2052.3569C156.185%2052.3569%20167.35%2056.9817%20175.582%2065.2138C183.815%2073.4459%20188.439%2084.611%20188.439%2096.253V144.539'%20stroke='%23959595'%20stroke-width='13'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
function V() {
  const [d, r] = l.useState([]),
    [v, o] = l.useState(0),
    [f, x] = l.useState(!0),
    y = _(),
    i = 'basket',
    c = () => {
      localStorage.getItem('resetBasket') !== 'true' &&
        (x(!0),
        fetch('/api/basket')
          .then(t => t.json())
          .then(t => {
            const n = t.items || [];
            r(n),
              o(t.total_price || 0),
              localStorage.setItem(i, JSON.stringify(n));
          })
          .catch(t => console.error('Failed to fetch basket:', t))
          .finally(() => x(!1)));
    };
  l.useEffect(() => {
    if (localStorage.getItem('resetBasket') === 'true')
      localStorage.removeItem(i),
        r([]),
        o(0),
        localStorage.removeItem('resetBasket');
    else {
      const n = JSON.parse(localStorage.getItem(i) || 'null');
      n && (r(n), o(n.reduce((m, j) => m + j.price * j.quantity, 0)));
    }
    c();
    const t = n => {
      n.key === i && (n.newValue ? c() : (r([]), o(0)));
    };
    return (
      window.addEventListener('storage', t),
      () => window.removeEventListener('storage', t)
    );
  }, []);
  const b = async s => {
      await fetch(`/api/basket/${s}`, { method: 'DELETE' }), c();
    },
    g = async (s, t) => {
      t < 1 ||
        t > 10 ||
        (await fetch(`/api/basket/${s}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ quantity: t }),
        }),
        c());
    },
    k = 4.99,
    w = (v + k).toFixed(2).replace('.', ',');
  return f
    ? e.jsxs(h, {
        position: 'center',
        mt: 'lg',
        children: [e.jsx(C, {}), e.jsx(a, { children: 'Loading basket…' })],
      })
    : e.jsxs('div', {
        className: 'basket-page',
        children: [
          e.jsx(E, { text: 'Shopping Basket' }),
          d.length === 0
            ? e.jsxs('div', {
                className: 'empty-basket',
                children: [
                  e.jsx('img', { src: q, alt: 'Empty basket' }),
                  e.jsx('p', { children: 'Your basket is empty.' }),
                ],
              })
            : e.jsxs(e.Fragment, {
                children: [
                  e.jsx(a, {
                    fw: 700,
                    mt: 'md',
                    mb: 'xs',
                    children: 'Your items',
                  }),
                  e.jsx(S, {
                    spacing: 'sm',
                    children: d.map(s =>
                      e.jsxs(
                        'div',
                        {
                          className: 'basket-card',
                          children: [
                            e.jsx(I, { src: s.image_url, radius: 'md' }),
                            e.jsxs('div', {
                              className: 'basket-card__info',
                              children: [
                                e.jsxs('div', {
                                  className: 'basket-card__text',
                                  children: [
                                    e.jsx(a, { fw: 700, children: s.name }),
                                    e.jsx(a, {
                                      size: 'sm',
                                      c: 'dimmed',
                                      children: s.category,
                                    }),
                                    e.jsx(a, {
                                      size: 'xs',
                                      c: 'green',
                                      children: s.level,
                                    }),
                                  ],
                                }),
                                e.jsx(u, {
                                  className: 'trash-icon',
                                  onClick: () => b(s.id),
                                  children: e.jsx(T, { size: 18 }),
                                }),
                                e.jsxs('div', {
                                  className: 'basket-card__buttons',
                                  children: [
                                    e.jsx('div', {
                                      className: 'basket-card__price',
                                      children: e.jsxs(a, {
                                        fw: 700,
                                        children: [
                                          '€',
                                          (s.price * s.quantity)
                                            .toFixed(2)
                                            .replace('.', ','),
                                        ],
                                      }),
                                    }),
                                    e.jsx('div', {
                                      className: 'basket-card__quantity',
                                      children: e.jsxs(h, {
                                        spacing: 6,
                                        children: [
                                          e.jsx(u, {
                                            variant: 'default',
                                            radius: 'xl',
                                            onClick: () =>
                                              g(s.id, s.quantity - 1),
                                            disabled: s.quantity <= 1,
                                            children: e.jsx(B, { size: 14 }),
                                          }),
                                          e.jsx(a, {
                                            fw: 500,
                                            children: s.quantity,
                                          }),
                                          e.jsx(u, {
                                            variant: 'default',
                                            radius: 'xl',
                                            onClick: () =>
                                              g(s.id, s.quantity + 1),
                                            disabled: s.quantity >= 10,
                                            children: e.jsx(L, { size: 14 }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        s.id
                      )
                    ),
                  }),
                  e.jsxs(h, {
                    className: 'basket-footer',
                    position: 'apart',
                    align: 'flex-end',
                    children: [
                      e.jsxs('div', {
                        className: 'basket-footer__left',
                        children: [
                          e.jsx(a, {
                            size: '16px',
                            fw: 500,
                            children: 'Shipping:',
                          }),
                          e.jsxs(a, {
                            size: '20px',
                            mt: 'xs',
                            c: 'dimmed',
                            children: ['€', k.toFixed(2).replace('.', ',')],
                          }),
                          e.jsx(a, { mt: 'xs', fw: 700, children: 'Total:' }),
                          e.jsxs(N, { order: 2, mt: -6, children: ['€', w] }),
                        ],
                      }),
                      e.jsx(M, {
                        onClick: () => {
                          localStorage.removeItem(i),
                            window.dispatchEvent(
                              new StorageEvent('storage', {
                                key: i,
                                oldValue: JSON.stringify(d),
                                newValue: null,
                              })
                            ),
                            y('/checkout/personal-info');
                        },
                      }),
                    ],
                  }),
                ],
              }),
        ],
      });
}
export { V as default };
