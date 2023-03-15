import { OButton } from '@/components/Globals/OButton';
import { OTable } from '@/components/Globals/OTable';
import LaunchIcon from '@/utils/icons/launch';
import ProductsIcon from '@/utils/icons/products';
import WarehouseIcon from '@/utils/icons/warehouse';
import { DownOutlined, GlobalOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import { FormattedMessage, useModel } from '@umijs/max';
import { Card, Space, Dropdown, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import moment from 'moment';
import type { ItemType } from 'antd/es/menu/hooks/useItems';
import ExportSelectedRmasModal from '../Modals/ExportSelectedRmas';
import { modalType } from '@/utils/helpers/types';
import VoidShipmentsModal from '../Modals/VoidShipments';

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

const TColumns: ColumnsType<IShipmentItem> = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (type) => (type === 'out' ? <LaunchIcon style={{ width: 15, stroke: 'black' }} /> : <ProductsIcon />),
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

const ShipmentMainPanel: React.FC = () => {
  const { getProductList } = useModel('product');
  const [selectedRows, setSelectedRows] = useState([]);
  const [modalOpen, setModalOpen] = useState<modalType>(modalType.Close);

  const importExportMenuItems: ItemType[] = [
    {
      key: '2',
      label: <span onClick={() => setModalOpen(modalType.ExportShipments)}> Export Shipments for Selected Orders </span>,
      icon: <VerticalAlignBottomOutlined />,
    },
    {
      key: '3',
      label: <span onClick={() => setModalOpen(modalType.ImportExportSummary)}>Export Search Results</span>,
      icon: <VerticalAlignBottomOutlined />,
    },
  ];

  useEffect(() => {
    getProductList();
    setSelectedRows([]);
  }, [getProductList]);

  return (
    <>
      <div className="title-row">
        <h1 style={{ textTransform: 'uppercase' }}>
          <FormattedMessage id="menu.shipments" />
        </h1>
      </div>
      <Card className="content-box">
        <Space size={HORIZONTAL_SPACE_SIZE} className="button-row">
          <OButton btnText="Print Labels" />
          <OButton btnText="Print Packing Slips" />
          <OButton btnText="Print Pick List(s)" />
          <OButton btnText="Print Global Pick List" />
          <OButton
            btnText="Void Shipment(s)"
            disabled={selectedRows.length === 0}
            onClick={() => setModalOpen(modalType.VoidShipments)}
          />
          <OButton btnText="Track Shipment(s)" />
          <OButton btnText="Resend Confirmation Email(s)" />
          <Dropdown menu={{ items: importExportMenuItems }}>
            <Button size="small">
              <Space>
                Import/Export <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Space>
        <OTable
          type="checkbox"
          columns={TColumns}
          rows={shipments}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
          pagination={false}
        />
      </Card>

      <ExportSelectedRmasModal
        isOpen={modalOpen === modalType.ExportShipments}
        type="shipment"
        onSave={() => setModalOpen(modalType.Close)}
        onClose={() => setModalOpen(modalType.Close)}
      />

      <VoidShipmentsModal
        isOpen={modalOpen === modalType.VoidShipments}
        onSave={() => setModalOpen(modalType.Close)}
        onClose={() => setModalOpen(modalType.Close)}
      />
    </>
  );
};

export default ShipmentMainPanel;
