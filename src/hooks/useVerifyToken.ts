import { verifyToken } from 'apis/verifyToken';
import { useEffect, useState } from 'react';

export function useVerifyToken(token: string | null) {
  const [isVerifiedToken, setIsVerifiedToken] = useState<boolean | null>(null);

  useEffect(() => {
    if (!token) {
      setIsVerifiedToken(false);
      return;
    }

    const checkToken = async () => {
      const isVerified = await verifyToken(token);
      setIsVerifiedToken(isVerified);
    };
    checkToken();
  }, []);

  return isVerifiedToken;
}
