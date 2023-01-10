import { renderSearchQuery } from '@/utils/common';
import httpClient from '@/utils/http-client';
import { useCallback, useState } from 'react';

export default () => {
  const [orderList, setOrderList] = useState<any[]>([]);
  const [editableOrder, setEditableOrder] = useState(null);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    orderItems: [],
  });

  const initialOrderList = useCallback((_query) => {
    const query = renderSearchQuery(_query);
    httpClient
      .get('/api/orders/' + query)
      .then((response) => {
        setOrderList(response.data);
      })
      .catch((error) => console.log(error));
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
