import { useState } from 'react';
import { useModel } from 'umi';
// import httpClient from '@/utils/http-client';
import { demoOrderTableRows } from '@/data/orderData';

// define intial order search state
const initialSearchQueryState = {
  status: '',
  orderNumber: '',
  salesChannel: '',
  warehouse: '',
  recipient: '',
  country: '',
  buyerEmail: '',
  buyerUsername: '',
  sku: '',
  fromOrderDate: '',
  toOrderDate: '',
  fromShipDate: '',
  toShipDate: '',
};

export default () => {
  const { setOrderList } = useModel('order');
  const [orderSearchQuery, setOrderSearchQuery] = useState(initialSearchQueryState);

  //when change order search query, we need to update the Order List
  const onChangeOrderSearchQuery = (name: any, value: any) =>
    setOrderSearchQuery((prevState) => ({ ...prevState, [name]: value }));

  // fetch searched order from api
  const onOrderSearch = () => {
    setOrderList(demoOrderTableRows);
    console.log('orderSearchQuery: ', orderSearchQuery);
  };

  const clearOrderSearchQuery = () => setOrderSearchQuery(initialSearchQueryState);

  return {
    orderSearchQuery,
    onChangeOrderSearchQuery,
    onOrderSearch,
    clearOrderSearchQuery,
  };
};
