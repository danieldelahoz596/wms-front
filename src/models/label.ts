import { useModel } from '@umijs/max';
import { useCallback, useEffect, useState } from 'react';

export default () => {
  const [labels, setLabels] = useState([]);
  const { initialState } = useModel('@@initialState');

  const getLabels = useCallback(() => {
    if (initialState?.initialData) setLabels(initialState?.initialData?.labels);
  }, [initialState?.initialData]);

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
