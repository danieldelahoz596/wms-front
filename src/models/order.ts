import httpClient from '@/utils/http-client';
import { useCallback, useEffect, useState } from 'react';
import qs from 'qs';
import type IOrder from '@/interfaces/IOrder';
import Pusher from 'pusher-js';
import { useModel } from '@umijs/max';
import { uuidv4 } from '@antv/xflow-core';
import moment from 'moment';

export default () => {
  const { setSkuAlerts } = useModel('skuAlerts');
  const [orderList, setOrderList] = useState<IOrder[]>([]);
  const [editableOrder, setEditableOrder] = useState<IOrder>(null);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [shippingQueue, setShippingQueue] = useState([]);
  const [newOrder, setNewOrder] = useState({
    orderItems: [],
  });

  useEffect(() => {
    const pusher = new Pusher('315b5e632115405c2a54', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('place-order');
    channel.bind('order-event', function (data) {
      setSkuAlerts((prev) => [
        ...prev,
        {
          id: uuidv4(),
          icon: 'info',
          type: 'Create Order',
          created: moment(data.order.created_at).format('MM/DD/YYYY h:mm a'),
          message: `Created the ${data.order.order_num} order`,
        },
      ]);
    });
  }, [setSkuAlerts]);

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
          setSelectedOrders((prev) => prev.map((item) => (item.id === data.id ? data : item)));
        })
        .catch((error) => console.log(error)),
    [],
  );

  const getOrderHistories = useCallback((id) => httpClient.get(`/api/orders/${id}/histories`).then(({ data }) => data), []);

  return {
    orderList,
    editableOrder,
    selectedOrders,
    newOrder,
    shippingQueue,
    setNewOrder,
    getOrderList,
    getOrderHistories,
    setOrderList,
    setEditableOrder,
    setSelectedOrders,
    setShippingQueue,
    createOrder,
    updateOrder,
  };
};
