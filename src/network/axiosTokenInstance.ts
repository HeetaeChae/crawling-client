import axios from 'axios';
import { getLocalStorageItem } from 'utils/handleLocalStorage';

const axiosTokenApi = (url: string | undefined) => {
  const token = getLocalStorageItem('token');

  const instance = axios.create({
    baseURL: url,
    headers: {
      Authorization: 'Bearer' + token,
      'Content-Type': 'application/json',
    },
  });

  return instance;
};

export const axiosTokenInstance = axiosTokenApi(
  process.env.REACT_APP_BASE_API_URL,
);
