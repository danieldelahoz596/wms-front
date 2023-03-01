import { OButton } from '@/components/Globals/OButton';
import SelectDropdown from '@/components/Globals/selectDropdown';
import { modalType } from '@/utils/helpers/types';
import { CheckCircleFilled, EditTwoTone, PlayCircleFilled } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Row, Col, Space, Input, Card, Table } from 'antd';
import { useState, useMemo } from 'react';
import TransferHistoryModal from './Modals/TransferHistory';

const { Search } = Input;

interface IMainPanel {
  tabButtons: React.ReactNode;
  selectedTransfer: any;
  setSelectedTransfer: (value: any) => void;
}

export const data = [
  {
    key: 1,
    status: 'active',
    source_warehouse: 'Alex Warehouse',
    order_number: '23232',
    fba_shipment: '',
    created_date: '12/12/2022',
    closed_date: '20/12/2022',
    notes: '',
    sales_channel: 'Internal',
    receiving_warehouse: 'FBA',
    total: '24',
    shipping: '3PL',
    tracking: '23232',
  },
  {
    key: 2,
    status: 'pending_receiving',
    source_warehouse: 'Alex Warehouse',
    order_number: '23232',
    fba_shipment: '',
    created_date: '12/12/2022',
    closed_date: '20/12/2022',
    notes: '',
    sales_channel: 'Internal',
    receiving_warehouse: 'FBA',
    total: '24',
    shipping: '3PL',
    tracking: '23232',
  },
  {
    key: 3,
    status: 'active',
    source_warehouse: 'Alex Warehouse',
    order_number: '23232',
    fba_shipment: '',
    created_date: '12/12/2022',
    closed_date: '20/12/2022',
    notes: '',
    sales_channel: 'Internal',
    receiving_warehouse: 'FBA',
    total: '24',
    shipping: '3PL',
    tracking: '23232',
  },
];

export const historyData = [
  {
    key: 1,
    edit_time: '10/27/2020 3:56 PM',
    user: 'JENNIFER.MALISE@SKUBANA',
    description: "Remaining pending item '1234000' created for 25 units",
  },
  {
    key: 2,
    edit_time: '10/27/2020 3:56 PM',
    user: 'JENNIFER.MALISE@SKUBANA',
    description: "Item '1234000' rejected for 5 units",
  },
  {
    key: 3,
    edit_time: '10/27/2020 3:56 PM',
    user: 'JENNIFER.MALISE@SKUBANA',
    description: "Stock transfer shippped, from Jeff's warehouse to Alex's Warehouse, item[pink water bottle:30]",
  },
];

const Tcolumns = [
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) =>
      status === 'active' ? (
        <CheckCircleFilled style={{ color: '#00FF00', fontSize: 15 }} />
      ) : (
        <PlayCircleFilled style={{ color: '#1292C6', fontSize: 15 }} />
      ),
    align: 'center',
  },
  {
    title: 'Source Warehouse',
    dataIndex: 'source_warehouse',
    key: 'source_warehouse',
  },
  {
    title: 'Order Number',
    dataIndex: 'order_number',
    key: 'order_number',
  },
  {
    title: 'FBA Shipment',
    dataIndex: 'fba_shipment',
    key: 'fba_shipment',
  },
  {
    title: 'Create Date',
    dataIndex: 'created_date',
    key: 'created_date',
  },
  {
    title: 'Closed Date',
    dataIndex: 'closed_date',
    key: 'closed_date',
  },
  {
    title: 'Notes',
    dataIndex: 'notes',
    key: 'notes',
    render: () => <EditTwoTone />,
    align: 'center',
  },
  {
    title: 'Sales Channel',
    dataIndex: 'sales_channel',
    key: 'sales_channel',
  },
  {
    title: 'Receiving Warehouse',
    dataIndex: 'receiving_warehouse',
    key: 'receiving_warehouse',
    align: 'center',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  },
  {
    title: 'Shipping',
    dataIndex: 'shipping',
    key: 'shipping',
  },
  {
    title: 'Tracking',
    dataIndex: 'tracking',
    key: 'tracking',
    render: (text) => <a>{text}</a>,
  },
];

const MainPanel: React.FC<IMainPanel> = ({ tabButtons, selectedTransfer, setSelectedTransfer }) => {
  const { warehouseList } = useModel('warehouse');
  const [currentModal, setCurrentModal] = useState<modalType>(modalType.Close);
  const [dataSource] = useState(data);
  const [historyDataSource] = useState(historyData);

  const warehouseOptions = useMemo(
    () =>
      warehouseList.map((warehouse) => ({
        value: warehouse.id,
        label: warehouse.name,
      })),
    [warehouseList],
  );

  const defaultSelectedWarehouses = useMemo(() => warehouseList.map((warehouse) => warehouse.id), [warehouseList]);

  const showHistory = () => {
    setCurrentModal(modalType.History);
  };

  return (
    <>
      <Row style={{ marginBottom: 10 }}>
        <Col span={6} style={{ paddingLeft: 10 }}>
          {tabButtons}
        </Col>
        <Col span={18}>
          <div style={{ textAlign: 'right', marginRight: 10 }}>
            <Space size={HORIZONTAL_SPACE_SIZE}>
              <SelectDropdown
                options={warehouseOptions}
                defaultSelectedItems={defaultSelectedWarehouses}
                type="Source Warehouse"
                style={{ width: '220px' }}
                size={'middle'}
              />
              <SelectDropdown
                options={warehouseOptions}
                defaultSelectedItems={defaultSelectedWarehouses}
                type="Dest. Warehouse"
                style={{ width: '220px' }}
                size={'middle'}
              />
              <SelectDropdown
                options={warehouseOptions}
                defaultSelectedItems={defaultSelectedWarehouses}
                type="STO Statuse"
                style={{ width: '220px' }}
                size={'middle'}
              />
            </Space>
          </div>
        </Col>
      </Row>

      <Card style={{ borderRadius: 5, marginLeft: 10, marginRight: 10 }}>
        <Space size={HORIZONTAL_SPACE_SIZE}>
          <Search
            placeholder="Enter Order#, SKU or product name..."
            onSearch={() => console.log('Search in Transfers tab on the orders module')}
            enterButton
            size="small"
            style={{ width: 300 }}
          />
          <OButton btnText="Receive" disabled={!(selectedTransfer?.status === 'pending_receiving')} />
          <OButton btnText="History" disabled={!selectedTransfer} onClick={showHistory} />
        </Space>

        <Table
          columns={Tcolumns}
          dataSource={dataSource}
          style={{ marginTop: 15 }}
          onRow={(record) => {
            return {
              onClick: () => {
                if (record.key === selectedTransfer?.key) setSelectedTransfer(null);
                else setSelectedTransfer(record);
              },
            };
          }}
          rowClassName={(record) => (record.key === selectedTransfer?.key ? `ant-table-row-selected` : '')}
        />
      </Card>

      <TransferHistoryModal
        isOpen={currentModal === modalType.History}
        title={`History for stock transfer order ${selectedTransfer?.order_number}`}
        dataSource={historyDataSource}
        onClose={() => setCurrentModal(modalType.Close)}
      />
    </>
  );
};

export default MainPanel;
