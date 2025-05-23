import {
  J as v,
  n as y,
  A as w,
  r as C,
  j as e,
  K as x,
} from './react-BNfDklOQ.js';
import { B as d } from './BasketButton-r1-1MTRa.js';
import { B as j, F as I } from './index-Cd1dwsJR.js';
import { T as u } from './TrendingCard-ClgaopvH.js';
import { S } from './SearchResults-BD_-qxBO.js';
import { b as f } from './mantine-BDZ4NO2A.js';
import './vendor-DRc0kkrK.js';
async function b({ queryKey: t }) {
  const [l, { categoryId: a, subcategoryId: c }] = t,
    o = new URLSearchParams();
  a && o.set('categoryId', a), c && o.set('subcategoryId', c);
  const i = await fetch(`/api/item-filters?${o.toString()}`);
  if (!i.ok) throw new Error(i.statusText);
  return i.json();
}
function L(t, l) {
  return v({
    queryKey: ['items', { categoryId: t, subcategoryId: l }],
    queryFn: b,
    enabled: !!t,
    staleTime: 3e5,
  });
}
function H() {
  const t = y(),
    { state: l } = w(),
    [a, c] = C.useState(''),
    {
      categoryId: o,
      subcategoryId: i = void 0,
      categoryName: m = '',
      subcategoryName: h = '',
    } = l || {},
    n = i == null,
    { data: r = [], isLoading: g, isError: p } = L(o, n ? void 0 : i);
  if (g) return e.jsx('div', { className: 'items-page', children: 'Loading…' });
  if (p)
    return e.jsx('div', {
      className: 'items-page',
      children: 'Error loading items',
    });
  if (a.trim() !== '')
    return e.jsxs('div', {
      className: 'items-page',
      children: [
        e.jsxs('div', {
          className: 'header-wrapper',
          children: [
            e.jsx(j, { onClick: () => t(-1) }),
            e.jsx('div', {
              className: 'titles',
              children: e.jsx('h2', { children: n ? m : h }),
            }),
            e.jsx(d, {}),
          ],
        }),
        e.jsxs('div', {
          className: 'search-wrapper',
          children: [
            e.jsx(f, {
              className: 'search-bar',
              placeholder: 'Search…',
              value: a,
              onChange: s => c(s.currentTarget.value),
              leftSection: e.jsx(x, { size: 18 }),
              radius: 'md',
              size: 'md',
            }),
            e.jsx(d, {}),
          ],
        }),
        e.jsx(S, { query: a.trim() }),
      ],
    });
  const N = n ? m : h;
  return e.jsxs('div', {
    className: 'items-page',
    children: [
      e.jsxs('div', {
        className: 'header-wrapper',
        children: [
          e.jsx(j, { onClick: () => t(-1) }),
          e.jsx('div', {
            className: 'titles',
            children: e.jsx('h2', { children: N }),
          }),
          e.jsx(d, {}),
        ],
      }),
      e.jsxs('div', {
        className: 'search-wrapper',
        children: [
          e.jsx(f, {
            className: 'search-bar',
            placeholder: 'Search…',
            value: a,
            onChange: s => c(s.currentTarget.value),
            leftSection: !a && e.jsx(x, { size: 18 }),
            radius: 'md',
            size: 'md',
          }),
          e.jsx(d, {}),
        ],
      }),
      e.jsx(I, {}),
      e.jsxs('div', {
        className: 'items-list',
        children: [
          r.filter(s => s.category.toLowerCase() === 'natural').length > 0 &&
            e.jsxs('div', {
              className: 'items-section',
              children: [
                e.jsx('h3', {
                  className: 'section-title',
                  children: 'Natural',
                }),
                e.jsx('div', {
                  className: 'section-list',
                  children: r
                    .filter(s => s.category.toLowerCase() === 'natural')
                    .map(s => e.jsx(u, { look: s, showHeart: !1 }, s.id)),
                }),
              ],
            }),
          r.filter(s => s.category.toLowerCase() === 'classic').length > 0 &&
            e.jsxs('div', {
              className: 'items-section',
              children: [
                e.jsx('h3', {
                  className: 'section-title',
                  children: 'Classic',
                }),
                e.jsx('div', {
                  className: 'section-list',
                  children: r
                    .filter(s => s.category.toLowerCase() === 'classic')
                    .map(s => e.jsx(u, { look: s, showHeart: !1 }, s.id)),
                }),
              ],
            }),
          r.filter(s => s.category.toLowerCase() === 'bold').length > 0 &&
            e.jsxs('div', {
              className: 'items-section',
              children: [
                e.jsx('h3', { className: 'section-title', children: 'Bold' }),
                e.jsx('div', {
                  className: 'section-list',
                  children: r
                    .filter(s => s.category.toLowerCase() === 'bold')
                    .map(s => e.jsx(u, { look: s, showHeart: !1 }, s.id)),
                }),
              ],
            }),
          r.length === 0 &&
            e.jsx('div', {
              className: 'no-items',
              children: n
                ? `No items found in ${m}.`
                : `No items found in ${h}.`,
            }),
        ],
      }),
    ],
  });
}
export { H as default };
