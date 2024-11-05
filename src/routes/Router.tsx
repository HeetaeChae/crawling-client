import Layout from 'components/layout/Layout';
import { ROUTE_PATHS } from 'constants/routePaths';
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
        path: ROUTE_PATHS.aliAffiliate,
        element: <PrivateRoute />,
      },
      {
        path: ROUTE_PATHS.coupangPartners,
        element: <PrivateRoute />,
      },
      {
        path: ROUTE_PATHS.dramaReview,
        element: <PrivateRoute />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
