import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import '@/sass/styles.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '@mantine/notifications/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications position='top-center' zIndex={1000} />
      <App />
    </MantineProvider>
  </React.StrictMode>
);
