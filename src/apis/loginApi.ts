import { axiosInstance } from 'network/axiosInstance';

export const loginApi = async ({ password }: { password: string }) => {
  const response = await axiosInstance.post('/api/auth/login', {
    password,
  });
  return response.data;
};
