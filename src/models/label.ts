import { useModel } from '@umijs/max';
import { useCallback, useEffect, useState } from 'react';
import type ILabel from '@/interfaces/ILabel';
import httpClient from '@/utils/http-client';

export default () => {
  const [labels, setLabels] = useState<ILabel[]>([]);
  const { initialState } = useModel('@@initialState');

  const getLabels = useCallback(() => {
    httpClient.get('/api/labels').then((response) => setLabels(response.data));
  }, []);

  useEffect(() => {
    if (initialState?.currentUser) {
      getLabels();
    }
  }, [getLabels, initialState?.currentUser]);

  return {
    labels,
    setLabels,
  };
};
