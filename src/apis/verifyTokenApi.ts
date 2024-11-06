import axios from 'axios';

export const verifyTokenApi = async (token: string) => {
  try {
    const response = await axios.post(
      '/api/verify-token',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data.valid;
  } catch (error) {
    console.log(error);
    return false;
  }
};
