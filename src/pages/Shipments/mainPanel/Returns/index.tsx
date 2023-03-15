import { OButton } from '@/components/Globals/OButton';
import { OTable } from '@/components/Globals/OTable';
import { DownOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
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
}

const returnData = [
  {
    key: 1,
    confirmation: 'Received',
    created: new Date(2021, 2, 8),
    issued: new Date(2021, 2, 8),
    shipped: new Date(2021, 2, 8),
    received: new Date(2021, 2, 8),
    order_number: '111',
    rma_number: 'RMA-111',
  },
  {
    key: 2,
    confirmation: 'Received',
    created: new Date(2021, 1, 29),
    issued: new Date(2021, 1, 29),
    shipped: new Date(2021, 1, 29),
    received: new Date(2021, 1, 29),
    order_number: '887',
    rma_number: 'RMA-887',
  },
  {
    key: 3,
    confirmation: 'Received',
    created: new Date(2021, 1, 8),
    issued: new Date(2021, 1, 7),
    shipped: new Date(2021, 1, 8),
    received: new Date(2021, 1, 8),
    order_number: 'DL TestShippment',
    rma_number: 'RMA-DL Test',
  },
  {
    key: 4,
    confirmation: 'Received',
    created: new Date(2020, 7, 7),
    issued: new Date(2020, 7, 7),
    shipped: new Date(2020, 7, 7),
    received: new Date(2020, 8, 21),
    order_number: 'MO10',
    rma_number: 'RMA-MO10',
  },
  {
    key: 5,
    confirmation: 'Received',
    created: new Date(2020, 6, 18),
    issued: new Date(2020, 6, 18),
    shipped: new Date(2020, 6, 18),
    received: new Date(2020, 6, 18),
    order_number: 'DamToughE',
    rma_number: 'RMA-DanToughE',
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
        align: 'right',
        render: (created) => <>{moment(created).format('MM/D/YYYY')}</>,
      },
      {
        title: 'Issued',
        dataIndex: 'issued',
        key: 'issued',
        align: 'right',
        render: (issued) => <>{moment(issued).format('MM/D/YYYY')}</>,
      },
      {
        title: 'Shipped',
        dataIndex: 'shipped',
        key: 'shipped',
        align: 'right',
        render: (shipped) => <>{moment(shipped).format('MM/D/YYYY')}</>,
      },
      {
        title: 'Received',
        dataIndex: 'received',
        key: 'received',
        align: 'center',
        render: (received) => <>{moment(received).format('MM/D/YYYY')}</>,
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
          <OButton btnText="Print Labels" />
          <OButton btnText="Mark As Received" />
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
