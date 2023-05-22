import { Table } from 'antd';
import { useMemo } from 'react';
import { useModel } from '@umijs/max';
import moment from 'moment';

const TColumns = [
  {
    title: 'Order Num',
    dataIndex: 'order_num',
    key: 'order_num',
  },
  {
    title: 'Order Date',
    dataIndex: 'order_date',
    key: 'order_num',
  },
  {
    title: 'Quantity',
    dataIndex: 'qty',
    key: 'qty',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];

const RecentOrders = () => {
  const { editableProduct } = useModel('product');

  const TRows = useMemo(() => {
    if (editableProduct)
      return editableProduct.orders.map((item) => ({
        order_num: item.order.order_number ? item.order.order_number : item.order.order_num,
        order_date: moment(item.order.order_date).format('YYYY-MM-DD'),
        qty: item.qty,
        status: item.order.order_status.name,
      }));
    return [];
  }, [editableProduct]);

  return <Table columns={TColumns} dataSource={TRows} pagination={{ hideOnSinglePage: true }} />;
};

export default RecentOrders;
