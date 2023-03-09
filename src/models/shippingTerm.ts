import { useModel } from '@umijs/max';
import { useCallback, useState, useEffect } from 'react';

export default () => {
  const { initialState } = useModel('@@initialState');
  const [shippingTermList, setShippingTermList] = useState<any[]>([]);

  const initialShippingTermList = useCallback(() => {
    setShippingTermList(initialState?.initialData?.milestones);
  }, [initialState?.initialData]);

  useEffect(() => {
    if (initialState?.currentUser) {
      initialShippingTermList();
    }
  }, [initialShippingTermList, initialState?.currentUser]);

  return { shippingTermList, initialShippingTermList };
};
