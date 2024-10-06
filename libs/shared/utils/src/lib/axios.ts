import axios from 'axios';
// config

// ----------------------------------------------------------------------

export const axiosInstance = axios.create({
  baseURL: process.env.PUBLIC_API_ENDPOINT,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
);
