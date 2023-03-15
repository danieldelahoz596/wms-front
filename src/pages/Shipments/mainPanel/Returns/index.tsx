import { OButton } from '@/components/Globals/OButton';
import { OTable } from '@/components/Globals/OTable';
import { DownOutlined, FormOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, Space, Dropdown, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useEffect, useState, useMemo } from 'react';
import moment from 'moment';
import type { ItemType } from 'antd/es/menu/hooks/useItems';
import { modalType } from '@/utils/helpers/types';
import ExportSelectedRmasModal from '../Modals/ExportSelectedRmas';
import ReturnItemsModal from '../Modals/ReturnItems';

interface IReturnItem {
  key: any;
  confirmation: string;
  created: Date;
  issued: Date;
  shipped: Date;
  received: Date;
  order_number: string;
  rma_number: string;
  notes: React.ReactNode;
  tracking_number: number;
}

const returnData = [
  {
    key: 1,
    confirmation: 'Received',
    created: new Date(2020, 3, 5),
    issued: null,
    shipped: null,
    received: new Date(2020, 3, 25),
    order_number: 'Sandibermuda',
    rma_number: 'RMA-Sandibermuda',
    notes: <FormOutlined style={{ color: '#5F5FFF', cursor: 'pointer' }} />,
    tracking_number: 794688873185,
  },
  {
    key: 2,
    confirmation: 'Received',
    created: new Date(2020, 3, 5),
    issued: null,
    shipped: null,
    received: new Date(2021, 7, 7),
    order_number: 'Sandibermuda',
    rma_number: 'RMA-Sandibermuda',
    notes: <FormOutlined style={{ color: '#5F5FFF', cursor: 'pointer' }} />,
    tracking_number: 794688873185,
  },
  {
    key: 3,
    confirmation: 'No Confirmation',
    created: new Date(2020, 2, 12),
    issued: null,
    shipped: null,
    received: null,
    order_number: 'Sandibermuda',
    rma_number: 'RMA-Sandibermuda',
    notes: <FormOutlined style={{ color: '#5F5FFF', cursor: 'pointer' }} />,
    tracking_number: 794688873185,
  },
  {
    key: 4,
    confirmation: 'No Confirmation',
    created: new Date(2020, 2, 12),
    issued: null,
    shipped: null,
    received: null,
    order_number: 'Sandibermuda',
    rma_number: 'RMA-Sandibermuda',
    notes: <FormOutlined style={{ color: '#5F5FFF', cursor: 'pointer' }} />,
    tracking_number: 794688873185,
  },
];

const ReturnMainPanel: React.FC = () => {
  const { getProductList } = useModel('product');
  const [selectedRows, setSelectedRows] = useState([]);
  const [modalOpen, setModalOpen] = useState<modalType>(modalType.Close);
  const [editableItem, setEditableItem] = useState(null);

  const returnTColumns: ColumnsType<IReturnItem> = useMemo(
    () => [
      {
        title: 'Confirmation',
        dataIndex: 'confirmation',
        key: 'confirmation',
      },
      {
        title: 'Created',
        dataIndex: 'created',
        key: 'created',
        align: 'center',
        render: (created) => <>{created && moment(created).format('MM/DD/YYYY')}</>,
      },
      {
        title: 'Issued',
        dataIndex: 'issued',
        key: 'issued',
        align: 'center',
        render: (issued) => <>{issued && moment(issued).format('MM/DD/YYYY')}</>,
      },
      {
        title: 'Shipped',
        dataIndex: 'shipped',
        key: 'shipped',
        align: 'center',
        render: (shipped) => <>{shipped && moment(shipped).format('MM/DD/YYYY')}</>,
      },
      {
        title: 'Received',
        dataIndex: 'received',
        key: 'received',
        align: 'center',
        render: (received) => <>{received && moment(received).format('MM/DD/YYYY')}</>,
      },
      {
        title: 'Order Number',
        dataIndex: 'order_number',
        key: 'order_number',
      },
      {
        title: 'RMA Number',
        dataIndex: 'rma_number',
        key: 'rma_number',
        render: (rma_number, _item) => (
          <a
            onClick={() => {
              setEditableItem(_item);
              setModalOpen(modalType.ReturnItems);
            }}
          >
            <u>{rma_number}</u>
          </a>
        ),
      },
      {
        title: 'NOTEs',
        dataIndex: 'notes',
        key: 'notes',
        render: (notes) => <div style={{ display: 'flex', justifyContent: 'center' }}>{notes}</div>,
      },
      {
        title: 'Tracking Number',
        dataIndex: 'tracking_number',
        key: 'tracking_number',
      },
    ],
    [],
  );

  const importExportMenuItems: ItemType[] = [
    {
      key: '1',
      label: <span onClick={() => setModalOpen(modalType.ExportRmas)}> Export Rmas For Selected Orders </span>,
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
        <h1 style={{ textTransform: 'uppercase' }}>Returns</h1>
      </div>
      <Card className="content-box">
        <Space size={HORIZONTAL_SPACE_SIZE} className="button-row">
          <OButton btnText="Print Labels" disabled={selectedRows.length === 0} />
          <OButton btnText="Mark As Received" disabled={selectedRows.length === 0} />
          <Dropdown menu={{ items: importExportMenuItems }}>
            <Button size="small">
              <Space>
                Import/Export <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Space>
        <OTable
          columns={returnTColumns}
          rows={returnData}
          type="checkbox"
          pagination={false}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
        />
      </Card>

      <ExportSelectedRmasModal
        isOpen={modalOpen === modalType.ExportRmas}
        type="rma"
        onSave={() => setModalOpen(modalType.Close)}
        onClose={() => setModalOpen(modalType.Close)}
      />

      <ReturnItemsModal
        title={`Returned Items For ${editableItem?.rma_number}`}
        isOpen={modalOpen === modalType.ReturnItems}
        onSave={() => setModalOpen(modalType.Close)}
        onClose={() => setModalOpen(modalType.Close)}
      />
    </>
  );
};

export default ReturnMainPanel;
