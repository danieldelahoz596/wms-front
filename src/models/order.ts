import httpClient from '@/utils/http-client';
import { useCallback, useState } from 'react';
import qs from 'qs';

export default () => {
  const [orderList, setOrderList] = useState<any[]>([]);
  const [editableOrder, setEditableOrder] = useState(null);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    orderItems: [],
  });

  const initialOrderList = useCallback((_query) => {
    httpClient
      .get('/api/orders?' + qs.stringify(_query))
      .then((response) => {
        setOrderList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const updateOrderItem = (orderItem) => {
    setOrderList((prevState) => prevState.map((_item) => (_item.id === orderItem.id ? orderItem : _item)));
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
    updateOrderItem,
    setSelectedOrders,
  };
};
