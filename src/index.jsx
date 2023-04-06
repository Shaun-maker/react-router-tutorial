import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
  },
  {
    path: '/survey',
    element: <Survey />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
