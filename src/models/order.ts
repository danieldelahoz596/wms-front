import { useCallback, useState } from 'react';
import { demoOrderTableRows } from '@/data/orderData';

export default () => {
  const [orderList, setOrderList] = useState<any[]>([]);
  const [editableOrder, setEditableOrder] = useState(null);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    orderItems: [],
  });

  const initialOrderList = useCallback(() => {
    setOrderList(demoOrderTableRows);
  }, []);

  const saveEditableOrder = () => {
    setOrderList((prevState) =>
      prevState.map((_item) => (_item.key === editableOrder.key ? editableOrder : _item)),
    );
  };

  return {
    orderList,
    editableOrder,
    selectedOrders,
    newOrder,
    setNewOrder,
    initialOrderList,
    setOrderList,
    setEditableOrder,
    saveEditableOrder,
    setSelectedOrders,
  };
};
