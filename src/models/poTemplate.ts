import { useCallback, useEffect, useState } from 'react';
import { useModel } from '@umijs/max';

export default () => {
  const [poTemplateList, setPoTemplateList] = useState<any[]>([]);
  const { initialState } = useModel('@@initialState');

  const initialPoTemplateList = useCallback(() => {
    setPoTemplateList(initialState?.initialData?.poTemplates);
  }, [initialState?.initialData]);

  useEffect(() => {
    if (initialState?.currentUser) {
      initialPoTemplateList();
    }
  }, [initialPoTemplateList, initialState?.currentUser]);

  return { poTemplateList, initialPoTemplateList };
};
