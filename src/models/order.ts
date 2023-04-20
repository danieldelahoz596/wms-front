import httpClient from '@/utils/http-client';
import { useCallback, useState } from 'react';
import qs from 'qs';
import type IOrder from '@/interfaces/IOrder';

export default () => {
  const [orderList, setOrderList] = useState<IOrder[]>([]);
  const [editableOrder, setEditableOrder] = useState(null);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [shippingQueue, setShippingQueue] = useState([]);
  const [newOrder, setNewOrder] = useState({
    orderItems: [],
  });

  const getOrderList = useCallback((_query) => {
    httpClient
      .get('/api/orders?' + qs.stringify(_query))
      .then((response) => {
        setOrderList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const updateOrderItem = useCallback((orderItem) => {
    setOrderList((prevState) => prevState.map((_item) => (_item.id === orderItem.id ? orderItem : _item)));
  }, []);

  const createOrder = useCallback((data) => {
    httpClient
      .post('/api/orders', data)
      .then((response) => {
        setOrderList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return {
    orderList,
    editableOrder,
    selectedOrders,
    newOrder,
    shippingQueue,
    setNewOrder,
    getOrderList,
    setOrderList,
    setEditableOrder,
    updateOrderItem,
    setSelectedOrders,
    setShippingQueue,
    createOrder,
  };
};
