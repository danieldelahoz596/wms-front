import { useState } from 'react';
import type { IOrderbots } from '@/interfaces/IOrderbots';

const orderbotData: IOrderbots[] = [
  {
    id: 1,
    rank: 1,
    name: 'Rank 1 would run first',
    status: true,
    actions: [
      {
        action: 'setWarehouse',
        value: 1,
      },
    ],
    filters: [
      {
        filter: 'warehouse',
        operator: 'equal',
        value: 3,
      },
    ],
  },
  {
    id: 2,
    rank: 2,
    name: 'Rank 2 would run first',
    status: true,
    actions: [
      {
        action: 'setWarehouse',
        value: 1,
      },
    ],
    filters: [
      {
        filter: 'warehouse',
        operator: 'equal',
        value: 3,
      },
    ],
  },
];

export default () => {
  const [orderbotList, setOrderbotList] = useState<IOrderbots[]>(orderbotData);
  const [selectedOrderbot, setSelectedOrderbot] = useState<IOrderbots>(null);

  return { orderbotList, selectedOrderbot, setOrderbotList, setSelectedOrderbot };
};
