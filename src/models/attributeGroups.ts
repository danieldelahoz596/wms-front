import httpClient from '@/utils/http-client';
import { useCallback, useState } from 'react';

export default () => {
  const [attributeGroups, setAttributeGroups] = useState([]);

  const getAttributeGroups = useCallback(() => {
    return httpClient.get('/api/attribute_group_data').then((response) => {
      setAttributeGroups(response.data);
    });
  }, []);

  return {
    attributeGroups,
    setAttributeGroups,
    getAttributeGroups,
  };
};
