// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './Router';
import { Provider } from 'react-redux';
import appstore from './utils/appstore';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appstore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);