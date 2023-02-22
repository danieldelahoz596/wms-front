import { FormattedMessage } from '@umijs/max';
import { Card, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import ProductsIcon from '@/utils/icons/products';
import WarehouseIcon from '@/utils/icons/warehouse';
import LaunchIcon from '@/utils/icons/launch';
import { GlobalOutlined } from '@ant-design/icons';

interface IShipmentItem {
  key: number;
  type: 'out' | 'in';
  created: Date;
  ship_date: Date;
  order_number: IOrderItem;
  batch_number: number;
  tracking_number: number;
  items: number;
  provider: string;
  carrier: string;
  service: string;
}

interface IOrderItem {
  type: 'warehouse' | 'channel';
  value: string;
}

const LeftPanel: React.FC = () => {
  const TColumns: ColumnsType<IShipmentItem> = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type) => (type === 'out' ? <LaunchIcon style={{ width: 15 }} /> : <ProductsIcon />),
    },
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created',
      align: 'right',
      render: (created) => <>{moment(created).format('MM/D/YYYY')}</>,
    },
    {
      title: 'Ship Date',
      dataIndex: 'ship_date',
      key: 'ship_date',
      align: 'right',
      render: (ship_date) => <>{moment(ship_date).format('MM/D/YYYY')}</>,
    },
    {
      title: 'Order Number',
      dataIndex: 'order_number',
      key: 'order_number',
      render: (order: IOrderItem) => {
        return (
          <a>
            {order.type === 'warehouse' ? <WarehouseIcon style={{ width: 15 }} /> : <GlobalOutlined style={{ width: 15 }} />}
            {'  '}
            {order.value}
          </a>
        );
      },
    },
    {
      title: 'Batch Number',
      dataIndex: 'batch_number',
      key: 'batch_number',
      align: 'center',
      render: (batch_number) => <a>{batch_number}</a>,
    },
    {
      title: 'Tracking Number',
      dataIndex: 'tracking_number',
      key: 'tracking_number',
      render: (tracking_number) => <a>{tracking_number}</a>,
    },
    {
      title: 'Items',
      dataIndex: 'items',
      key: 'items',
      align: 'center',
    },
    {
      title: 'Provider',
      dataIndex: 'provider',
      key: 'provider',
    },
    {
      title: 'Carrier',
      dataIndex: 'carrier',
      key: 'carrier',
      align: 'center',
    },
    {
      title: 'Service',
      dataIndex: 'service',
      key: 'service',
    },
  ];

  const shipments: IShipmentItem[] = [
    {
      key: 1,
      type: 'out',
      created: new Date(2020, 3, 26),
      ship_date: new Date(2020, 3, 26),
      order_number: {
        type: 'channel',
        value: 'Citest123',
      },
      batch_number: 2167,
      tracking_number: 123,
      items: 100,
      provider: 'Fedex-Test',
      carrier: 'Fedex',
      service: 'Fedex Ground',
    },
    {
      key: 2,
      type: 'in',
      created: new Date(2020, 3, 26),
      ship_date: new Date(2020, 3, 26),
      order_number: {
        type: 'warehouse',
        value: 'Citest123',
      },
      batch_number: 2167,
      tracking_number: 123,
      items: 100,
      provider: 'Fedex-Test',
      carrier: 'Fedex',
      service: 'Fedex Ground',
    },
  ];

  return (
    <Card
      size="small"
      title={
        <span
          style={{
            fontSize: '1rem',
            textTransform: 'uppercase',
            fontWeight: '700',
            color: '#A2A2A2',
          }}
        >
          <FormattedMessage id="menu.shipments" />
        </span>
      }
      style={{ width: '100%' }}
    >
      <Table columns={TColumns} dataSource={shipments} />
    </Card>
  );
};

export default LeftPanel;
