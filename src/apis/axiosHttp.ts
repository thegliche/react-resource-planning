import env from '@/constants/env';
import axios from 'axios';
// Make an 'instance' of axios
const axiosHttp = axios.create({
  // where we make our configurations
  baseURL: env.ApiServerUrl,
  headers: {
    'Content-type': 'application/json',
  },
});

// Add configure interceptors && all the other cool stuff
axiosHttp.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.message);
  },
);

export default axiosHttp;
