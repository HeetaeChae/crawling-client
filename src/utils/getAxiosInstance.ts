import axios from 'axios';

const axiosApi = (url: string | undefined) => {
  const instance = axios.create({
    baseURL: url,
  });

  return instance;
};

const axiosTokenApi = (url: string | undefined) => {
  const token = window.localStorage.getItem('token');

  const instance = axios.create({
    baseURL: url,
    headers: { Authorization: 'Bearer' + token },
  });

  return instance;
};

export const axiosInstance = axiosApi(process.env.REACT_APP_BASE_API_URL);
export const axiosTokenInstance = axiosTokenApi(
  process.env.REACT_APP_BASE_API_URL,
);
