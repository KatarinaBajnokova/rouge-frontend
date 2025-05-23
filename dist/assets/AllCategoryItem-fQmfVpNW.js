import { j as r, M as i } from './react-BNfDklOQ.js';
import { D as a } from './mantine-BDZ4NO2A.js';
function m({ iconUrl: t, label: e, onClick: o }) {
  const n = s => {
    (s.currentTarget.onerror = null), (s.currentTarget.src = defaultIcon);
  };
  return r.jsxs('div', {
    className: 'all-category-item',
    onClick: o,
    children: [
      r.jsxs('div', {
        className: 'item-content',
        children: [
          r.jsx('img', {
            src: t,
            alt: `${e} icon`,
            onError: n,
            loading: 'lazy',
          }),
          r.jsx('p', { children: e }),
          r.jsx(i, { size: 24, stroke: 2 }),
        ],
      }),
      r.jsx(a, {}),
    ],
  });
}
export { m as A };
