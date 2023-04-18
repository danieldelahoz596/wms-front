import { useCallback, useState } from 'react';
import httpClient from '@/utils/http-client';
import type IState from '@/interfaces/IState';

export default () => {
  const [stateList, setStateList] = useState<IState[]>([]);

  const getStateList = useCallback(() => {
    httpClient
      .get('/api/states')
      .then(({ data }) => {
        setStateList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return {
    stateList,
    getStateList,
  };
};
