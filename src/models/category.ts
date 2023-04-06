import { useModel } from '@umijs/max';
import { useCallback, useEffect, useState } from 'react';
import type ICategory from '@/interfaces/ICategory';
import httpClient from '@/utils/http-client';

export default () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const { initialState } = useModel('@@initialState');

  const getCategories = useCallback(() => {
    httpClient.get('/api/categories').then((response) => setCategories(response.data));
  }, []);

  useEffect(() => {
    if (initialState?.currentUser) {
      getCategories();
    }
  }, [getCategories, initialState?.currentUser]);

  return {
    categories,
    setCategories,
  };
};
