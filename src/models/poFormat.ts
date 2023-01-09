import { useCallback, useEffect, useState } from 'react';
import httpClient from '@/utils/http-client';
import { useModel } from '@umijs/max';

export default () => {
  const [poFormatList, setPoFormatList] = useState<any[]>([]);
  const { initialState } = useModel('@@initialState');

  const initialPoFormatList = useCallback(() => {
    httpClient.get('/api/po_formats').then((response: any) => setPoFormatList(response.data));
  }, []);

  useEffect(() => {
    if (initialState?.currentUser) {
      initialPoFormatList();
    }
  }, [initialPoFormatList, initialState?.currentUser]);

  return { poFormatList, initialPoFormatList };
};
