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
    return httpClient.patch(`/api/attribute-groups/${id}`, { name }).then((response) => {
      setAttributeGroups((prev) => prev.map((item) => (item.id === id ? response.data : item)));
    });
  }, []);

  const createAttribute = useCallback((name: string, attribute_group_id: number) => {
    return httpClient.post('/api/attributes', { name, attribute_group_id }).then((response) => {
      setAttributeGroups((prev) =>
        prev.map((group) => (group.id === attribute_group_id ? { ...group, items: [...group.items, response.data] } : group)),
      );
    });
  }, []);

  const updateAttribute = useCallback((id: number, name: string) => {
    return httpClient.patch(`/api/attributes/${id}`, { name }).then((response) => {
      setAttributeGroups((prev) =>
        prev.map((group) =>
          group.id === response.data.attribute_group_id
            ? { ...group, items: group.items.map((item) => (item.id === id ? response.data : item)) }
            : group,
        ),
      );
    });
  }, []);

  return {
    attributeGroups,
    setAttributeGroups,
    getAttributeGroups,
    createAttributeGroup,
    updateAttributeGroup,
    createAttribute,
    updateAttribute,
  };
};
