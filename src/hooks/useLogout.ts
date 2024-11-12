import { useMutation } from '@tanstack/react-query';
import { logoutApi } from 'apis/logoutApi';
import { ROUTE_PATHS } from 'constants/routePaths';
import { useNavigate } from 'react-router-dom';
import { removeLocalStorageItem } from 'utils/handleLocalStorage';

export function useLogout() {
  const navigate = useNavigate();

  const mutation = useMutation<void, Error, undefined>({
    mutationFn: logoutApi,
    onSuccess: () => {
      removeLocalStorageItem('token');
      navigate(ROUTE_PATHS.login);
    },
  });

  return { logoutMutation: mutation };
}
