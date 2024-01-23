import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContextIMCProvider } from './context/contextIMC';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextIMCProvider>
      <App />
    </ContextIMCProvider>
  </React.StrictMode>
);

