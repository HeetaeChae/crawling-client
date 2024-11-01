import React, { ReactElement } from 'react';
import { useVerifyToken } from 'hooks/useVerifyToken';

function PrivateRoute() {
  const token = window.localStorage.getItem('token') || null;
  const isVerifiedToken = useVerifyToken(token);

  if (isVerifiedToken === null) {
    // loading 출력
    return <div>loading</div>;
  }

  if (!isVerifiedToken) {
    // public route 출력
    return <div>public</div>;
  }

  // private route 출력
  return <div>private</div>;
}

export default PrivateRoute;
