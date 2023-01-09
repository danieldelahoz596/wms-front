import { useCallback, useEffect, useState } from 'react';
import httpClient from '@/utils/http-client';
import { useModel } from '@umijs/max';

export default () => {
  const [incotermList, setIncotermList] = useState<any[]>([]);
  const { initialState } = useModel('@@initialState');

  const initialIncotermList = useCallback(() => {
    httpClient.get('/api/incoterm').then((response: any) => setIncotermList(response.data));
  }, []);

  useEffect(() => {
    if (initialState?.currentUser) {
      initialIncotermList();
    }
  }, [initialIncotermList, initialState?.currentUser]);

  return { incotermList, initialIncotermList };
};
