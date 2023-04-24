import httpClient from '@/utils/http-client';
import type IMileStone from '@/interfaces/IMilestone';
import { useModel } from '@umijs/max';
import { useCallback, useEffect, useState } from 'react';

export default () => {
  const [milestonesList, setMilestonesList] = useState<IMileStone[]>([]);
  const { initialState } = useModel('@@initialState');

  const getMilestones = useCallback(() => {
    return httpClient.get('/api/milestones').then((response) => {
      setMilestonesList(response.data);
    });
  }, []);

  useEffect(() => {
    if (initialState?.currentUser) {
      getMilestones();
    }
  }, [getMilestones, initialState?.currentUser]);

  const createMilestone = useCallback((data) => {
    return httpClient.post('/api/milestones', data).then((response) => {
      setMilestonesList((prev) => [...prev, response.data]);
    });
  }, []);

  return { milestonesList, setMilestonesList, createMilestone, getMilestones };
};
