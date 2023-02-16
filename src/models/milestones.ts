import { useModel } from '@umijs/max';
import { useCallback, useEffect, useState } from 'react';

export default () => {
  const [milestonesList, setMilestonesList] = useState<any[]>([]);
  const { initialState } = useModel('@@initialState');

  const initialMilestonesList = useCallback(() => {
    setMilestonesList(initialState?.initialData?.milestones);
  }, [initialState?.initialData]);

  useEffect(() => {
    if (initialState?.currentUser) {
      initialMilestonesList();
    }
  }, [initialMilestonesList, initialState?.currentUser]);

  return { milestonesList, setMilestonesList, initialMilestonesList };
};
