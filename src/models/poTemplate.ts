import { useCallback, useEffect, useState } from 'react';
import httpClient from '@/utils/http-client';
import { useModel } from '@umijs/max';

export default () => {
  const [poTemplateList, setPoTemplateList] = useState<any[]>([]);
  const { initialState } = useModel('@@initialState');

  const initialPoTemplateList = useCallback(() => {
    httpClient.get('/api/po_templates').then((response: any) => setPoTemplateList(response.data));
  }, []);

  useEffect(() => {
    if (initialState?.currentUser) {
      initialPoTemplateList();
    }
  }, [initialPoTemplateList, initialState?.currentUser]);

  return { poTemplateList, initialPoTemplateList };
};
