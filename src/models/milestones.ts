import { useState } from 'react';
import { milestonesStaticData } from '../data';

export default () => {
  const [milestonesList, setMilestonesList] = useState<any[]>([]);

  const initialMilestonesList = () => {
    setMilestonesList(milestonesStaticData);
  };

  return { milestonesList, initialMilestonesList };
};
