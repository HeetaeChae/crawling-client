import { useMutation } from '@tanstack/react-query';
import { loginApi } from 'apis/loginApi';
import { ROUTE_PATHS } from 'constants/routePaths';
import { useNavigate } from 'react-router-dom';
import { LoginReq, LoginRes } from 'types/Auth';
import { setLocalStorageItem } from 'utils/handleLocalStorage';

export function useLogin() {
  const navigate = useNavigate();

  const mutation = useMutation<LoginRes, Error, LoginReq>({
    mutationFn: loginApi,
    onSuccess: () => {
      setLocalStorageItem('token', mutation.data?.token as string);
      navigate(ROUTE_PATHS.logout);
    },
  });

  return { loginMutation: mutation };
}
