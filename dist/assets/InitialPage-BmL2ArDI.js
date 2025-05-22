import { n as s, j as t } from './react-BNfDklOQ.js';
import { G as i, B as e } from './mantine-BDZ4NO2A.js';
import './vendor-DRc0kkrK.js';
const l = () => {
  const a = s();
  return t.jsxs('main', {
    className: 'initial-page',
    children: [
      t.jsx('h1', { children: 'Rouge' }),
      t.jsxs(i, {
        position: 'center',
        spacing: 'xl',
        className: 'button-group',
        children: [
          t.jsx(e, {
            type: 'button',
            variant: 'filled',
            className: 'design-system-btn',
            onClick: () => a('/design-system'),
            'aria-label': 'Go to design system page',
            children: 'Design System',
          }),
          t.jsx(e, {
            type: 'button',
            variant: 'filled',
            className: 'prototype-btn',
            onClick: () => a('/animation'),
            'aria-label': 'Go to prototype animation page',
            children: 'Prototype',
          }),
        ],
      }),
    ],
  });
};
export { l as default };
