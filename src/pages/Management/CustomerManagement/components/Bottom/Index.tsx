import { OTable } from '@/components/Globals/OTable';
import { useModel } from '@umijs/max';
import { Card } from 'antd';

export default function Index() {
  const { selectedCustomer } = useModel('customer');

  const TOrdercolumns = [
    {
      title: 'Channel',
      dataIndex: 'channel',
      key: 'channel',
    },
    {
      title: 'Labels',
      dataIndex: 'labels',
      key: 'labels',
    },
    {
      title: 'Notes',
      dataIndex: 'notes',
      key: 'notes',
    },
    {
      title: 'Order Number',
      dataIndex: 'order_number',
      key: 'order_number',
    },
    {
      title: 'Order Date',
      dataIndex: 'order_date',
      key: 'order_date',
    },
    {
      title: 'Order Total',
      dataIndex: 'order_total',
      key: 'order_total',
    },
    {
      title: 'Items',
      dataIndex: 'items',
      key: 'items',
    },
    {
      title: 'Item Name',
      dataIndex: 'item_name',
      key: 'item_name',
    },
    {
      title: 'Item Skus',
      dataIndex: 'item_skus',
      key: 'item_skus',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  return (
    selectedCustomer && (
      <Card
        size="small"
        title={
          <h3
            style={{
              fontSize: '1rem',
              textTransform: 'uppercase',
              fontWeight: '700',
              color: '#A2A2A2',
            }}
          >
            Customer Orders
          </h3>
        }
      >
        <OTable columns={TOrdercolumns} rows={selectedCustomer.orders ?? []} />
      </Card>
    )
  );
}
