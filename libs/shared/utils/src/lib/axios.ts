import axios from 'axios';
// config

// ----------------------------------------------------------------------

export const axiosInstance = axios.create({
  baseURL: 'https://60edd7b0eb4c0a0017bf4260.mockapi.io',
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
);
