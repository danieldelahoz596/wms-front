import { useState } from 'react';
import type { IOrderbots } from '@/interfaces/IOrderbots';

const orderbotData: IOrderbots[] = [
  {
    id: 1,
    rank: 1,
    name: 'Rank 1 would run first',
    status: true,
  },
  {
    id: 2,
    rank: 1,
    name: "Rudy's orderbot - set warehouse",
    status: true,
  },
  {
    id: 3,
    rank: 1,
    name: 'Hold shopify orders',
    status: true,
  },
  {
    id: 4,
    rank: 2,
    name: 'Rank 2 would run second',
    status: true,
  },
  {
    id: 5,
    rank: 2,
    name: "Rudy's orderbot - Split order",
    status: true,
  },
  {
    id: 6,
    rank: 3,
    name: 'Rank 3 would run third',
    status: true,
  },
];

export default () => {
  const [orderbotList, setOrderbotList] = useState<IOrderbots[]>(orderbotData);
  const [selectedOrderbot, setSelectedOrderbot] = useState<IOrderbots>(null);

  return { orderbotList, selectedOrderbot, setOrderbotList, setSelectedOrderbot };
};
