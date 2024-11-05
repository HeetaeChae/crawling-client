import React, { ReactElement } from 'react';
import { useVerifyToken } from 'hooks/useVerifyToken';
import AliAffiliate from 'pages/AliAffiliate';

function PrivateRoute() {
  /*
  const token = window.localStorage.getItem('token') || null;
  const isVerifiedToken = useVerifyToken(token);
  */
  const isVerifiedToken = true;

  if (isVerifiedToken === null) {
    // loading 출력
    return <div>loading</div>;
  }

  if (!isVerifiedToken) {
    // public route 출력
    return <div>public</div>;
  }

  // private route 출력
  return <AliAffiliate />;
}

export default PrivateRoute;
