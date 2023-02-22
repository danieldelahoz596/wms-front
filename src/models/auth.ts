import httpClient from '@/utils/http-client';
import { useCallback, useState } from 'react';

export default () => {
  const [auth, setAuth] = useState();

  const login = useCallback(async (credentials: any) => {
    try {
      const response = await httpClient.post('/auth/login', credentials);
      setAuth(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  }, []);

  return { auth, login };
};
