import { useModel } from '@umijs/max';
import { useCallback, useEffect, useState } from 'react';

export default () => {
  const [brands, setBrands] = useState([]);
  const { initialState } = useModel('@@initialState');

  const getBrands = useCallback(() => {
    setBrands(initialState?.initialData?.brands);
  }, [initialState?.initialData]);

  useEffect(() => {
    if (initialState?.currentUser) {
      getBrands();
    }
  }, [getBrands, initialState?.currentUser]);

  return {
    brands,
    setBrands,
  };
};
