import httpClient from '@/utils/http-client';
import { useCallback, useState } from 'react';
import qs from 'qs';
import type IOrder from '@/interfaces/IOrder';

export default () => {
  const [orderList, setOrderList] = useState<IOrder[]>([]);
  const [editableOrder, setEditableOrder] = useState<IOrder>(null);
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

  const createOrder = useCallback(
    (orderData) =>
      httpClient
        .post('/api/orders', orderData)
        .then(({ data }) => {
          setOrderList((prev) => [...prev, data]);
        })
        .catch((error) => console.log(error)),
    [],
  );

  const updateOrder = useCallback(
    (orderData) =>
      httpClient
        .put(`/api/orders/${orderData.id}`, orderData)
        .then(({ data }) => {
          setOrderList((prev) => prev.map((item) => (item.id === data.id ? data : item)));
        })
        .catch((error) => console.log(error)),
    [],
  );

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
    setSelectedOrders,
    setShippingQueue,
    createOrder,
    updateOrder,
  };
};
