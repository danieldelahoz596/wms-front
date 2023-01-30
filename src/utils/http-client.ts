import axios from 'axios';

const httpClient = axios.create({
  baseURL: BACKEND_URL || 'http://127.0.0.1:8000',
});

httpClient.interceptors.request.use((config: any) => {
  const authData = JSON.parse(localStorage.getItem('authdata'));

  config.headers.Authorization = `Bearer ${authData?.access_token || ''}`;
  if (!config.headers['Content-Type'])
    config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  return config;
});

httpClient.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);
export default httpClient;
