// Polyfills for React Native Web
if (typeof global === 'undefined') {
  (window as any).global = window;
}

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Force Vite to include this file in the bundle
export {};
