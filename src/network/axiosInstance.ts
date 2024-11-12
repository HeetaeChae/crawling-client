import axios from 'axios';

const axiosApi = (url: string | undefined) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return instance;
};

export const axiosInstance = axiosApi(process.env.REACT_APP_BASE_API_URL);
