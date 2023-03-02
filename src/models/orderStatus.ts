import { useCallback, useState } from 'react';
import httpClient from '@/utils/http-client';

export default () => {
  const [orderStatusList, setOrderStatusList] = useState<any[]>([]);
  const [selectedOrderStatus, setSelectedOrderStatus] = useState({
    status: {
      id: 3,
      name: 'Awaiting Shipment',
      num: 7,
    },
    filter: null,
  });

  const initialOrderStatus = useCallback(() => {
    // fetch order statuses from api
    httpClient.get('/api/orders/filters').then((response) => {
      setOrderStatusList(response.data);
    });
  }, []);

  //when change order status, we need to update the Order List
  const changeSelectedOrderStatus = useCallback((data: any) => {
    setSelectedOrderStatus(data);
  }, []);

  // useEffect(() => {
  //   initialOrderList({
  //     order_status: selectedOrderStatus?.status?.id,
  //   });
  // }, [initialOrderList, selectedOrderStatus]);

  return {
    selectedOrderStatus,
    changeSelectedOrderStatus,
    orderStatusList,
    setOrderStatusList,
    initialOrderStatus,
  };
};
