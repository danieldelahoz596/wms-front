import { useModel } from '@umijs/max';
import { useCallback, useEffect, useState } from 'react';

export default () => {
  const [categories, setCategories] = useState([]);
  const { initialState } = useModel('@@initialState');

  const getCategories = useCallback(() => {
    if (initialState?.initialData) setCategories(initialState?.initialData?.categories);
  }, [initialState?.initialData]);

  useEffect(() => {
    if (initialState?.currentUser) {
      getCategories();
    }
  }, [getCategories, initialState?.currentUser]);

  return {
    categories,
    setCategories,
  };
};
