import { OTable } from '@/components/Globals/OTable';
import { FormOutlined, MessageOutlined } from '@ant-design/icons';
import { FormattedMessage, useModel } from '@umijs/max';
import { Card } from 'antd';
import { useMemo } from 'react';
import moment from 'moment';

const TOrderColumns = [
  // {
  //   title: <FormattedMessage id="component.table.column.labels" />,
  //   dataIndex: 'labels',
  //   key: 'labels',
  // },
  {
    title: <FormattedMessage id="component.table.column.notes" />,
    dataIndex: 'notes',
    key: 'notes',
  },
  {
    title: <FormattedMessage id="component.table.column.orderNumber" />,
    dataIndex: 'order_number',
    key: 'order_number',
  },
  {
    title: <FormattedMessage id="component.table.column.orderDate" />,
    dataIndex: 'order_date',
    key: 'order_date',
  },
  {
    title: <FormattedMessage id="component.table.column.orderTotal" />,
    dataIndex: 'order_total',
    key: 'order_total',
  },
  {
    title: <FormattedMessage id="component.table.column.items" />,
    dataIndex: 'items',
    key: 'items',
  },
  {
    title: <FormattedMessage id="component.table.column.itemNames" />,
    dataIndex: 'item_names',
    key: 'item_names',
  },
  {
    title: <FormattedMessage id="component.table.column.itemSkus" />,
    dataIndex: 'item_skus',
    key: 'item_skus',
  },
  {
    title: <FormattedMessage id="component.table.column.status" />,
    dataIndex: 'status',
    key: 'status',
  },
];

const BottomPanel: React.FC = () => {
  const { selectedCustomer } = useModel('customer');

  const rows = useMemo(
    () =>
      selectedCustomer?.orders.map((order) => ({
        key: order.id,
        notes: (
          <div style={{ display: 'flex', gap: '0.2rem', justifyContent: 'space-around' }}>
            <FormOutlined style={{ color: '#5F5FFF', cursor: 'pointer' }} />
            <MessageOutlined style={{ color: '#5F5FFF', cursor: 'pointer' }} />
            <MessageOutlined style={{ color: '#5F5FFF', cursor: 'pointer', transform: 'scaleX(-1)' }} />
          </div>
        ),
        order_number: (
          <span style={{ textDecoration: 'underline', cursor: 'pointer', color: '#5F5FFF' }}>
            {order.order_number ? order.order_number : order.order_num}
          </span>
        ),
        order_date: moment(order.order_date).format('Y-M-D'),
        order_total: order.order_total,
        items: order.order_items.length,
        item_names: order.order_items.length > 0 && order.order_items.map((item) => item.product.name).join(', '),
        item_skus: order.order_items.length > 0 && order.order_items.map((item) => item.product.sku).join(', '),
        status: order.order_status.name,
      })),
    [selectedCustomer],
  );

  return (
    <>
      {selectedCustomer && (
        <Card title={<FormattedMessage id="pages.customers.bottomPanel.title" />}>
          <OTable columns={TOrderColumns} rows={rows} pagination={false} />
        </Card>
      )}
    </>
  );
};

export default BottomPanel;
