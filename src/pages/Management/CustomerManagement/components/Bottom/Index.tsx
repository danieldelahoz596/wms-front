import { OTable } from '@/components/Globals/OTable';
import { FormOutlined, GlobalOutlined, MessageOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card } from 'antd';

export default function index() {
  const { selectedCustomer } = useModel('customer');

  const TOrdercolumns = [
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
      title: 'Item Names',
      dataIndex: 'item_names',
      key: 'item_names',
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

  const rows = [
    {
      notes: (
        <div style={{ display: 'flex', gap: '0.2rem', justifyContent: 'space-around' }}>
          <FormOutlined style={{ color: '#5F5FFF', cursor: 'pointer' }} />
          <MessageOutlined style={{ color: '#5F5FFF', cursor: 'pointer' }} />
          <MessageOutlined
            style={{ color: '#5F5FFF', cursor: 'pointer', transform: 'scaleX(-1)' }}
          />
        </div>
      ),
      order_number: (
        <span style={{ textDecoration: 'underline', cursor: 'pointer', color: '#5F5FFF' }}>
          markashippmenttest
        </span>
      ),
      order_date: '12/8/2020',
      order_total: '$0.00',
      items: 1,
      item_names: 'item name',
      item_skus: '123456',
      status: 'Shipped',
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
              fontWeight: '700',
              color: '#A2A2A2',
            }}
          >
            Customer Orders
          </h3>
        }
      >
        <OTable columns={TOrdercolumns} rows={rows} />
      </Card>
    )
  );
}
