import { b as n, j as e } from './mantine-BTrqRPtO.js';
import { u as c, S as d, W as u } from './index-Wzv5Lk5m.js';
const p = () => {
  const s = n.useRef(null),
    [o, i] = n.useState(!1),
    t = c(),
    a = () => {
      i(!0);
    },
    r = () => {
      s.current && s.current.pause(), t('/homescreen');
    };
  return (
    n.useEffect(() => {
      s.current &&
        s.current.play().catch(() => {
          (s.current.muted = !0), s.current.play();
        });
    }, []),
    e.jsxs('div', {
      className: 'animation-page',
      children: [
        e.jsxs('video', {
          className: `animation-video ${o ? 'video-moved' : ''}`,
          ref: s,
          onEnded: a,
          controls: !1,
          muted: !0,
          playsInline: !0,
          children: [
            e.jsx('source', { src: '/video/animation.mp4', type: 'video/mp4' }),
            'Your browser does not support the video tag.',
          ],
        }),
        o &&
          e.jsxs('div', {
            className: 'bottom-card',
            children: [
              e.jsx('h2', { children: 'Welcome' }),
              e.jsxs('div', {
                className: 'bottom-text',
                children: [
                  e.jsx('p', { children: 'Ready to continue?' }),
                  e.jsx('p', { children: 'You can sign in, log in, or skip.' }),
                ],
              }),
              e.jsxs('div', {
                className: 'button-group',
                children: [
                  e.jsx(d, { onClick: () => t('/signup') }),
                  e.jsx(u, { onClick: () => t('/login') }),
                ],
              }),
              e.jsx('button', {
                className: 'skip-button',
                onClick: r,
                children: 'Skip',
              }),
            ],
          }),
      ],
    })
  );
};
export { p as default };
