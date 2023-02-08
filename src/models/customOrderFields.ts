import { useModel } from '@umijs/max';
import { useEffect, useState } from 'react';

export default () => {
  const [fieldTypes, setFieldTypes] = useState([]);
  const [customFields, setCustomFields] = useState([]);
  const { initialState } = useModel('@@initialState');

  useEffect(() => {
    if (initialState?.initialData) {
      setFieldTypes(initialState?.initialData.custom_order_fields);
    }
  }, [initialState?.initialData]);

  return {
    fieldTypes,
    customFields,
    setFieldTypes,
    setCustomFields,
  };
};
