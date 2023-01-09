import httpClient from '@/utils/http-client';
import { useModel } from '@umijs/max';
import { useCallback, useEffect, useState } from 'react';

export default () => {
  const [productList, setProductList] = useState<any[]>([]);
  const { initialState } = useModel('@@initialState');

  const initialProductList = useCallback(() => {
    httpClient.get('/api/products').then((response) => setProductList(response.data));
  }, []);

  useEffect(() => {
    if (initialState?.currentUser) {
      initialProductList();
    }
  }, [initialProductList, initialState?.currentUser]);

  return { productList, initialProductList };
};
