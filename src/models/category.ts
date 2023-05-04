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

  const createCategory = useCallback(
    (createData) => httpClient.post('/api/categories', createData).then(({ data }) => setCategories((prev) => [...prev, data])),
    [],
  );

  const updateCategory = useCallback(
    (updateData) =>
      httpClient
        .put(`api/categories/${updateData.id}`, updateData)
        .then(({ data }) => setCategories((prev) => prev.map((item) => (item.id === updateData.id ? data : item)))),
    [],
  );

  useEffect(() => {
    if (initialState?.currentUser) {
      getCategories();
    }
  }, [getCategories, initialState?.currentUser]);

  return {
    categories,
    setCategories,
    createCategory,
    updateCategory,
  };
};
