import { axiosTokenInstance } from 'network/axiosTokenInstance';

export const verifyTokenApi = async () => {
  const response = await axiosTokenInstance.get('/api/auth/verify-token');
  return response.data;
};
