import { useModel } from '@umijs/max';
import { useCallback, useEffect, useState } from 'react';
import httpClient from '@/utils/http-client';
import type ITag from '@/interfaces/ITag';

export default () => {
  const [tags, setTags] = useState<ITag[]>([]);
  const { initialState } = useModel('@@initialState');

  const getTags = useCallback(() => {
    httpClient.get('/api/tags').then((response) => setTags(response.data));
  }, []);

  const createTag = useCallback(
    (createData) => httpClient.post('/api/tags', createData).then((response) => setTags((prev) => [...prev, response.data])),
    [],
  );

  const updateTag = useCallback(
    (updateData) =>
      httpClient
        .put(`/api/tags/${updateData.id}`, updateData)
        .then(({ data }) => setTags((prev) => prev.map((item) => (item.id === updateData.id ? data : item)))),
    [],
  );

  const updateStatusTag = useCallback(
    (id) =>
      httpClient
        .patch(`/api/tags/${id}/update-status`, { status: false })
        .then(() => setTags((prev) => prev.filter((item) => item.id !== id))),
    [],
  );

  // useEffect(() => {
  //   if (initialState?.currentUser) {
  //     getTags();
  //   }
  // }, [getTags, initialState?.currentUser]);

  return {
    tags,
    setTags,
    createTag,
    updateTag,
    updateStatusTag,
  };
};
