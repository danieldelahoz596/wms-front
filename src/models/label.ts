import { useModel } from '@umijs/max';
import { useCallback, useEffect, useState } from 'react';
import type ILabel from '@/interfaces/ILabel';
import httpClient from '@/utils/http-client';

export default () => {
  const [labels, setLabels] = useState<ILabel[]>([]);
  const { initialState } = useModel('@@initialState');

  const getLabels = useCallback(() => {
    httpClient.get('/api/labels').then((response) => setLabels(response.data));
  }, []);

  const createLabel = useCallback(
    (newLabelData) => httpClient.post('/api/labels', newLabelData).then(({ data }) => setLabels((prev) => [...prev, data])),
    [],
  );

  const updateLabel = useCallback(
    (id, updateLabelData) =>
      httpClient
        .patch(`/api/labels/${id}`, updateLabelData)
        .then(({ data }) => setLabels((prev) => prev.map((label) => (label.id === id ? data : label)))),
    [],
  );

  const updateLabelStatus = useCallback(
    (id) =>
      httpClient
        .patch(`/api/labels/${id}/update-status`, { status: false })
        .then(() => setLabels((prev) => prev.filter((item) => item.id !== id))),
    [],
  );

  useEffect(() => {
    if (initialState?.currentUser) {
      getLabels();
    }
  }, [getLabels, initialState?.currentUser]);

  return {
    labels,
    getLabels,
    setLabels,
    createLabel,
    updateLabel,
    updateLabelStatus,
  };
};
