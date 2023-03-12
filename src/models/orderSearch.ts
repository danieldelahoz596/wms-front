import { useCallback, useState } from 'react';
import { useModel } from 'umi';
// import httpClient from '@/utils/http-client';

const orderTableRow = [
  {
    key: 1,
    order_number: '348889',
    labels: '',
    notes: '',
    order_date: '2022-12-24 11:13:56',
    order_paid: '2022-12-17 11:13:56',
    age: '< 1d 10hr',
    recipient: 'Bain Jopling',
    orderTotal: 6.11,
    items: 1,
    itemNames: 'Vacuum Battery',
    orderItems: [
      {
        key: 1,
        type: 'type1',
        masterSku: '222',
        name: 'product1',
        buyer: 'buyer1',
        brand: 'brand1',
        categories: 'category1',
        labels: 'labels',
        description: 'description1',
        unitAmount: 2.0,
        discount: 0.0,
        unitQty: 2,
        totalAmount: 4.0,
        unitWeight: '',
        unitHWL: '',
        warehouse: 'office',
        pickLocation: 'split test',
      },
    ],
  },
  {
    key: 2,
    order_number: '701-5451616-1882663',
    labels: '',
    notes: '',
    order_date: '2022-12-26 11:13:56',
    order_paid: '2022-12-17 11:13:56',
    age: '< 1hr',
    recipient: 'Corey Howrey',
    orderTotal: 23.99,
    items: 1,
    itemNames: 'Vacuum Filter',
    orderItems: [
      {
        key: 1,
        type: 'type1',
        masterSku: '222',
        name: 'product1',
        buyer: 'buyer1',
        brand: 'brand1',
        categories: 'category1',
        labels: 'labels',
        description: 'description1',
        unitAmount: 0.0,
        discount: 0.0,
        unitQty: 1,
        totalAmount: 0.0,
        unitWeight: '',
        unitHWL: '',
        warehouse: 'office',
        pickLocation: 'split test',
      },
    ],
  },
  {
    key: 3,
    order_number: '882(2)',
    labels: '',
    notes: '',
    order_date: '2022-12-17 11:13:56',
    order_paid: '2022-12-17 11:13:56',
    age: '< 1hr',
    recipient: 'Corey Howrey',
    orderTotal: 23.99,
    items: 1,
    itemNames: 'Vacuum Filter',
    orderItems: [],
  },
  {
    key: 4,
    order_number: '882(1)',
    labels: '',
    notes: '',
    order_date: '2022-12-17 11:13:56',
    order_paid: '2022-12-17 11:13:56',
    age: '3d 19..',
    recipient: 'Corey Howrey',
    orderTotal: 23.99,
    items: 1,
    itemNames: 'Vacuum Filter',
    orderItems: [],
  },
  {
    key: 5,
    order_number: '882',
    labels: '',
    notes: '',
    order_date: '2022-12-17 11:13:56',
    order_paid: '2022-12-17 11:13:56',
    age: '3d 19..',
    recipient: 'Corey Howrey',
    orderTotal: 23.99,
    items: 1,
    itemNames: 'Vacuum Filter',
    orderItems: [],
  },
  {
    key: 6,
    order_number: '881(1)',
    labels: '',
    notes: '',
    order_date: '2022-12-17 11:13:56',
    order_paid: '2022-12-17 11:13:56',
    age: '3d 2...',
    recipient: 'Corey Howrey',
    orderTotal: 23.99,
    items: 1,
    itemNames: 'Vacuum Filter',
    orderItems: [],
  },
  {
    key: 7,
    order_number: '121-555',
    labels: '',
    notes: '',
    order_date: '2021-01-14 11:13:56',
    order_paid: '2021-01-14 11:13:56',
    age: '1d 19hr...',
    recipient: 'Ale',
    orderTotal: 23.99,
    items: 1,
    itemNames: 'Vacuum Filter',
    orderItems: [],
  },
  {
    key: 8,
    order_number: '441-443',
    labels: '',
    notes: '',
    order_date: '2021-01-14 11:13:56',
    order_paid: '2021-01-14 11:13:56',
    age: '1d 19hr...',
    recipient: 'Ale',
    orderTotal: 23.99,
    items: 1,
    itemNames: 'Vacuum Filter',
    orderItems: [],
  },
  {
    key: 9,
    order_number: '843-922',
    labels: '',
    notes: '',
    order_date: '2021-01-14 11:13:56',
    order_paid: '2021-01-14 11:13:56',
    age: '21d 22hr...',
    recipient: 'Ale',
    orderTotal: 23.99,
    items: 1,
    itemNames: 'Vacuum Filter',
    orderItems: [],
  },
];

// define intial order search state
const initialSearchQueryState = {
  status: '',
  orderNumber: '',
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
  const onChangeOrderSearchQuery = useCallback(
    (name: any, value: any) => setOrderSearchQuery((prevState) => ({ ...prevState, [name]: value })),
    [],
  );

  // fetch searched order from api
  const onOrderSearch = useCallback(() => {
    setOrderList(orderTableRow);
  }, [setOrderList]);

  const clearOrderSearchQuery = useCallback(() => setOrderSearchQuery(initialSearchQueryState), []);

  return {
    orderSearchQuery,
    setOrderSearchQuery,
    onChangeOrderSearchQuery,
    onOrderSearch,
    clearOrderSearchQuery,
  };
};
