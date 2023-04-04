import { useModel } from '@umijs/max';
import { useCallback, useEffect, useState } from 'react';
import type IBrand from '@/interfaces/IBrand';
import httpClient from '@/utils/http-client';

export default () => {
  const [brands, setBrands] = useState<IBrand[]>([]);
  const { initialState } = useModel('@@initialState');

  const getBrands = useCallback(() => {
    httpClient.get('/api/brands').then((response) => setBrands(response.data));
  }, []);

  useEffect(() => {
    if (initialState?.currentUser) {
      getBrands();
    }
  }, [getBrands, initialState?.currentUser]);

  return {
    brands,
    setBrands,
  };
};
