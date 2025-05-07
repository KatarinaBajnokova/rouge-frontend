import { j as t, G as s, s as e } from './mantine-BTrqRPtO.js';
import { u as i } from './index-Wzv5Lk5m.js';
const l = () => {
  const a = i();
  return t.jsxs('main', {
    className: 'initial-page',
    children: [
      t.jsx('h1', { children: 'Rouge' }),
      t.jsxs(s, {
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
