import React from 'react';
import { useVerifyToken } from 'hooks/useVerifyToken';
import { getLocalStorageItem } from 'utils/handleLocalStorage';
import { Navigate } from 'react-router-dom';
import { ROUTE_PATHS } from 'constants/routePaths';
import Loading from 'components/ui/Loading';

interface PrivateRouteProps {
  privateComponent: any;
  isVerifiedToken: boolean | null;
}

function PrivateRoute({
  privateComponent,
  isVerifiedToken,
}: PrivateRouteProps) {
  // const isVerifiedToken = true;

  if (isVerifiedToken === null) {
    // loading 출력
    return <Loading />;
  }

  if (!isVerifiedToken) {
    // public route 출력
    return <Navigate to={ROUTE_PATHS.login} />;
  }

  // private route 출력
  return privateComponent;
}

export default PrivateRoute;
