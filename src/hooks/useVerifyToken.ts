import { verifyTokenApi } from 'apis/verifyTokenApi';
import { useEffect, useState } from 'react';
import { getLocalStorageItem } from 'utils/handleLocalStorage';

export function useVerifyToken() {
  const [isVerifiedToken, setIsVerifiedToken] = useState<boolean | null>(null);

  useEffect(() => {
    /*
    const token = getLocalStorageItem('token');

    setTimeout(() => {
      if (!token) {
        setIsVerifiedToken(false);
        return;
      }

      const checkToken = async () => {
        const isVerified = await verifyTokenApi();
        setIsVerifiedToken(isVerified);
      };

      checkToken();
    }, 1000);
    */

    setIsVerifiedToken(true);
  }, []);

  return isVerifiedToken;
}
