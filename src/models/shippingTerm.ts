import httpClient from '@/utils/http-client';
import { useCallback, useState } from 'react';

export default () => {
  const [shippingTermList, setShippingTermList] = useState<any[]>([]);

  const initialShippingTermList = useCallback(() => {
    httpClient.get('/api/shipping_terms').then((response: any) => setShippingTermList(response.data));
  }, []);

  return { shippingTermList, initialShippingTermList };
};
