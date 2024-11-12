import { axiosInstance } from 'network/axiosInstance';
import { axiosTokenInstance } from 'network/axiosTokenInstance';

export const logoutApi = async () => {
  await axiosTokenInstance.get('/api/auth/logout');
};
