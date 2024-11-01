import React from 'react';
import { redirect } from 'react-router-dom';
import { useVerifyToken } from 'hooks/useVerifyToken';

function PublicRoute() {
  const token = window.localStorage.getItem('token') || null;
  const isVerifiedToken = useVerifyToken(token);

  if (isVerifiedToken === null) {
    // loading 출력
    return <div>loading</div>;
  }

  if (isVerifiedToken) {
    // 리다이렉션
    return <div>redirect</div>;
  }

  // public route 출력
  return <div>public</div>;
}

export default PublicRoute;
