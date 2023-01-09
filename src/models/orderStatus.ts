import { useCallback, useState } from 'react';
import { useModel } from 'umi';
import { demoOrderTableRows } from '@/data/orderData';
import httpClient from '@/utils/http-client';

export default () => {
  const { setOrderList } = useModel('order');
  const [orderStatusList, setOrderStatusList] = useState<any[]>([]);
  const [selectedOrderStatus, setSelectedOrderStatus] = useState(null);

  const initialOrderStatus = useCallback(() => {
    // fetch order statuses from api
    httpClient.get('/api/orders/filters').then((response) => {
      setOrderStatusList(response.data);
    });
  }, []);

  //when change order status, we need to update the Order List
  const changeSelectedOrderStatus = (data: any) => {
    setSelectedOrderStatus(data);

    //load data with api in the future
    setOrderList(demoOrderTableRows);
  };

  return {
    selectedOrderStatus,
    changeSelectedOrderStatus,
    orderStatusList,
    setOrderStatusList,
    initialOrderStatus,
  };
};
