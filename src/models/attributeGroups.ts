import type IAttributeGroup from '@/interfaces/IAttributeGroup';
import httpClient from '@/utils/http-client';
import { useCallback, useState } from 'react';

export default () => {
  const [attributeGroups, setAttributeGroups] = useState<IAttributeGroup[]>([]);

  const getAttributeGroups = useCallback(() => {
    return httpClient.get('/api/attribute-groups').then((response) => {
      setAttributeGroups(response.data);
    });
  }, []);

  const createAttributeGroup = useCallback((name: string) => {
    return httpClient.post('/api/attribute-groups', { name }).then((response) => {
      setAttributeGroups((prev) => [...prev, response.data]);
    });
  }, []);

  const updateAttributeGroup = useCallback((id: number, name: string) => {
    return httpClient.put(`/api/attribute-groups/${id}`, { name }).then((response) => {
      setAttributeGroups((prev) => prev.map((item) => (item.id === id ? response.data : item)));
    });
  }, []);

  return {
    attributeGroups,
    setAttributeGroups,
    getAttributeGroups,
    createAttributeGroup,
    updateAttributeGroup,
  };
};
