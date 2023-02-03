import { useState } from 'react';

export default () => {
  const [fieldTypes, setFieldTypes] = useState([]);
  const [customFields, setCustomFields] = useState([]);

  return {
    fieldTypes,
    customFields,
    setFieldTypes,
    setCustomFields,
  };
};
