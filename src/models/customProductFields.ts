import { useModel } from '@umijs/max';
import { useEffect, useState } from 'react';

export default () => {
  const [fieldTypes, setFieldTypes] = useState([]);
  const { initialState } = useModel('@@initialState');

  useEffect(() => {
    if (initialState?.initialData) {
      setFieldTypes(initialState?.initialData.custom_product_fields);
    }
  }, [initialState?.initialData]);

  return {
    fieldTypes,
    setFieldTypes,
  };
};
