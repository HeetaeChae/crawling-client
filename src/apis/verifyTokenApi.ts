import axios from 'axios';
import { axiosTokenInstance } from 'utils/getAxiosInstance';

export const verifyTokenApi = async () => {
  try {
    const response = await axiosTokenInstance.get('');
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};
