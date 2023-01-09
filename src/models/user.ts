import httpClient from '@/utils/http-client';
import { useCallback, useState } from 'react';

export default () => {
  const [user, setUser] = useState();

  const login = useCallback(async (credentials: any) => {
    try {
      const response = await httpClient.post('/auth/login', credentials);
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  }, []);

  return { user, login };
};
