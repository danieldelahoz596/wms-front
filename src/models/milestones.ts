import { useState } from 'react';
import { milestonesStaticData } from '../data';

export default () => {
  const [milestonesList, setMilestonesList] = useState<any[]>(milestonesStaticData);

  const initialMilestonesList = () => {
    // setMilestonesList(milestonesStaticData);
  };

  return { milestonesList, setMilestonesList, initialMilestonesList };
};
