import type { AxiosInstance } from 'axios';
import axios from 'axios';

const axiosInstance: AxiosInstance = axios.create();
axiosInstance.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  },
);

axiosInstance.interceptors.request.use((req) => {
  return req;
});

export default axiosInstance;
