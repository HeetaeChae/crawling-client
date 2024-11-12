import React from 'react';
import { Navigate, redirect } from 'react-router-dom';
import { useVerifyToken } from 'hooks/useVerifyToken';
import { ROUTE_PATHS } from 'constants/routePaths';
import Loading from 'components/ui/Loading';

interface PublicRouteProps {
  publicComponent: any;
  isVerifiedToken: boolean | null;
}

function PublicRoute({ publicComponent, isVerifiedToken }: PublicRouteProps) {
  // const isVerifiedToken = false;

  if (isVerifiedToken === null) {
    // loading 출력
    return <Loading />;
  }

  if (isVerifiedToken) {
    // 리다이렉션
    return <Navigate to={ROUTE_PATHS.logout} />;
  }

  // public route 출력
  return publicComponent;
}

export default PublicRoute;
