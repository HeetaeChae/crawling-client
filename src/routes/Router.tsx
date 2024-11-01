import Layout from 'components/layout/Layout';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicRoute />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/affiliate-marketing',
        element: <PrivateRoute />,
      },
      {
        path: '/youtube-channel',
        element: <PrivateRoute />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
