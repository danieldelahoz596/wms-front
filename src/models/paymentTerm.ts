import { useCallback, useEffect } from 'react';
import httpClient from '@/utils/http-client';
import { useState } from 'react';
import { useModel } from '@umijs/max';

export default () => {
  const [paymentTermList, setPaymentTermList] = useState<any[]>([]);
  const { initialState } = useModel('@@initialState');

  const initialPaymentTermList = useCallback(() => {
    httpClient.get('/api/payment_terms').then((response: any) => setPaymentTermList(response.data));
  }, []);

  useEffect(() => {
    if (initialState?.currentUser) {
      initialPaymentTermList();
    }
  }, [initialPaymentTermList, initialState?.currentUser]);

  return { paymentTermList, initialPaymentTermList };
};
