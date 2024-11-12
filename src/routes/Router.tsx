import React from 'react';
import Layout from 'components/layout/Layout';
import { ROUTE_PATHS } from 'constants/routePaths';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AliAffiliate from 'pages/AliAffiliate';
import CoupangPartners from 'pages/CoupangPartners';
import Login from 'pages/Login';
import Logout from 'pages/Logout';
import DramaReview from 'pages/DramaReview';

const router = (isVerifiedToken: boolean | null) =>
  createBrowserRouter([
    {
      path: ROUTE_PATHS.login,
      element: (
        <PublicRoute
          publicComponent={<Login />}
          isVerifiedToken={isVerifiedToken}
        />
      ),
    },
    {
      element: isVerifiedToken && <Layout />,
      children: [
        {
          path: ROUTE_PATHS.logout,
          element: (
            <PrivateRoute
              privateComponent={<Logout />}
              isVerifiedToken={isVerifiedToken}
            />
          ),
        },
        {
          path: ROUTE_PATHS.aliAffiliate,
          element: (
            <PrivateRoute
              privateComponent={<AliAffiliate />}
              isVerifiedToken={isVerifiedToken}
            />
          ),
        },
        {
          path: ROUTE_PATHS.coupangPartners,
          element: (
            <PrivateRoute
              privateComponent={<CoupangPartners />}
              isVerifiedToken={isVerifiedToken}
            />
          ),
        },
        {
          path: ROUTE_PATHS.dramaReview,
          element: (
            <PrivateRoute
              privateComponent={<DramaReview />}
              isVerifiedToken={isVerifiedToken}
            />
          ),
        },
      ],
    },
  ]);

function Router({ isVerifiedToken }: { isVerifiedToken: boolean | null }) {
  return <RouterProvider router={router(isVerifiedToken)} />;
}

export default Router;
