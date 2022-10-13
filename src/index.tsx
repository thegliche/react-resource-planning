import React from 'react';
import {createRoot} from 'react-dom/client';
import App from '@/views/App';

createRoot(
  document.getElementById('app'),
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
