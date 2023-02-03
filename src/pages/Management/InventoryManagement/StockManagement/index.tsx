import React, { useState, useMemo } from 'react';
import { Button, Input, Card, Row, Col, Dropdown, Select, Space } from 'antd';
import { data, stock_history, stock_allocation } from './components/structure';
import { modalType } from '@/utils/helpers/types';
import { OTable } from '@/components/Globals/OTable';
import { DownOutlined, VerticalAlignBottomOutlined, VerticalAlignTopOutlined } from '@ant-design/icons';
import StockHistoryModal from '@/components/Modals/Inventory/StockHistory';
import ExportStockEditHistoryModal from '@/components/Modals/Inventory/ExportStockEditHistory';
import BulkReconciliationModal from '@/components/Modals/Inventory/BulkReconciliation';
import StockAllocationDetailsModal from '@/components/Modals/Inventory/StockAllocationDetails';
import { useResizable } from 'react-resizable-layout';
import { cn, SampleSplitter } from '@/utils/components/SampleSplitter';
import { productType, productStatus } from '@/utils/helpers/types';
import CoreProductsIcon from '@/utils/icons/coreProduct';
import BundleIcon from '@/utils/icons/bundle';
import NoteIcon from '@/utils/icons/note';
import VariationIcon from '@/utils/icons/variation';
import ShieldAdmirationIcon from '@/utils/icons/shieldAdmiration';
import ShieldCheckIcon from '@/utils/icons/shieldCheck';
import ShieldDeniedIcon from '@/utils/icons/shieldDenied';
import SettingIcon from '@/utils/icons/setting';
import StockDetails from './components/RightPanel';
import { OInput } from '@/components/Globals/OInput';
import { OButton } from '@/components/Globals/OButton';
import { OSelect } from '@/components/Globals/OSelect';
import SelectDropdown from '@/components/Globals/selectDropdown';
import { useModel } from '@umijs/max';

const { Search } = Input;
interface IStockManagement {
  tabButtons: React.ReactNode;
}

const StockManagement: React.FC<IStockManagement> = ({ tabButtons }) => {
  
  const { initialState } = useModel('@@initialState');

  const { warehouseList } = useModel('warehouse');
  const [currentModal, setCurrentModal] = useState<modalType>(modalType.Close);
  const [dataSource, setDataSource] = useState(data);
  const [stockHistorySource, setstockHistorySource] = useState(stock_history);
  const [stockAllocationSource, setStockAllocationSource] = useState(stock_allocation);

  const [ warehouse, setWarehouse] = useState(null);
  const [ status, setStatus] = useState('all');

  const handleChangeWarehouse = (_name: string, value: any) => {
    setWarehouse(value);
  }
  const handleChangeStatus = (_name: string, value: any) => {
    setStatus(value);
  }

  const Tcolumns = useMemo(
    () => [
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        align: 'center',
        render: (text: any) => (
          <>
            {text === productType.CoreProduct ? (
              <CoreProductsIcon />
            ) : text === productType.BundleOrKit ? (
              <BundleIcon />
            ) : text === productType.Variations ? (
              <VariationIcon />
            ) : (
              <span style={{ position: 'relative' }}>
                <CoreProductsIcon />
                <div style={{ position: 'absolute', top: '-3px', left: '10px', color: 'blue' }}>
                  <DownOutlined />
                </div>
              </span>
            )}
          </>
        ),
      },
      {
        title: 'MASTER SKU',
        dataIndex: 'master_sku',
        key: 'master_sku',
        render: (text: any) => (
          <a>
            <u>{text}</u>
          </a>
        ),
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Brand',
        dataIndex: 'brand',
        key: 'brand',
      },
      {
        title: 'Des',
        dataIndex: 'description',
        key: 'description',
        render: (text: any) => <>{text && <NoteIcon />}</>,
      },
      {
        title: 'On Hand',
        dataIndex: 'on_hands',
        key: 'on_hands',
      },
      {
        title: 'Locked',
        dataIndex: 'locked',
        key: 'locked',
      },
      {
        title: 'Allocated',
        dataIndex: 'allocated',
        key: 'allocated',
        render: (text: any) => (
          <span
            style={{ cursor: 'pointer', color: 'blue' }}
            onClick={() => setCurrentModal(modalType.StockAllocationDetails)}
          >
            <u>{text}</u>
          </span>
        ),
      },
      {
        title: 'In Transfer',
        dataIndex: 'in_transfer',
        key: 'in_transfer',
        render: (text: any) => (
          <span
            style={{ cursor: 'pointer', color: 'blue' }}
            onClick={() => setCurrentModal(modalType.StockAllocationDetails)}
          >
            <u>{text}</u>
          </span>
        ),
      },
      {
        title: 'Available',
        dataIndex: 'available',
        key: 'available',
      },
      {
        title: 'Discrepation',
        dataIndex: 'discrepation',
        key: 'discrepation',
        render: (text: any) => (
          <span
            style={{ cursor: 'pointer', color: 'blue' }}
            onClick={() => setCurrentModal(modalType.StockAllocationDetails)}
          >
            <u>{text}</u>
          </span>
        ),
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        align: 'center',
        render: (text: any) => (
          <>
            {text === productStatus.yellow ? (
              <ShieldAdmirationIcon />
            ) : text === productStatus.green ? (
              <ShieldCheckIcon />
            ) : text === productStatus.red ? (
              <ShieldDeniedIcon />
            ) : (
              <SettingIcon />
            )}
          </>
        ),
      },
    ],
    [],
  );

  const {
    isDragging: isRightDragging,
    position: RightW,
    separatorProps: rightDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 450,
    min: 300,
    reverse: true,
  });

  return (
    <>
      <div className="w-full flex flex-column h-screen">
        <Row style={{ marginBottom: 10 }}>
          <Col span={8} style={{ paddingLeft: 10 }}>
            {tabButtons}
          </Col>
          <Col span={16}>
            <Space size={5} align="center">
              <SelectDropdown
                options={warehouseList.map((warehouse) => ({
                  value: warehouse.id,
                  label: warehouse.name,
                }))}
                size="small"
                style={{ width: '250px' }}
              />
              <OInput
                type="select"
                name="warehouse"
                onChange={handleChangeWarehouse}
                value={warehouse}
                options={initialState?.initialData?.warehouses.map((_item) => ({
                  value: _item.id,
                  text: _item.name,
                }))}
                style={{ width: '200px' }}
              />

              <OInput
                type="select"
                name="status"
                showPlaceholder={false}
                options={[
                  { value: 'all', text: '5 Statuses' },
                  { value: 'onHand', text: 'On Hand' },
                  { value: 'locked', text: 'Locked' },
                  { value: 'allocated', text: 'Allocated' },
                  { value: 'inTransite', text: 'In Transit' },
                  { value: 'avaiableQuantities', text: 'Available quantities' },
                ]}
                value={status}
                onChange={handleChangeStatus}
                style={{ width: '200px' }}
              />
            </Space>
          </Col>
        </Row>

        <Card style={{ borderRadius: 5, marginLeft: 10, marginRight: 10}}>
          <Space size={5}>
            <Search
              placeholder="Enter SKU or product name..."
              onSearch={() => console.log('Inactive')}
              enterButton
              size="small"
              style={{ width: 200 }}
            />

            <Dropdown
              menu={{
                items: [
                  {
                    key: '1',
                    label: (<span onClick={() => setCurrentModal(modalType.StockHistory)}>History</span>),
                    icon: <VerticalAlignTopOutlined />,
                  },
                  {
                    key: '2',
                    label: (<span onClick={() => setCurrentModal(modalType.ManualOrder)}>Deactivate</span>),
                    icon: <VerticalAlignTopOutlined />,
                  },
                  {
                    key: '3',
                    label: (<span onClick={() => setCurrentModal(modalType.ManualOrder)}>Draw Rank</span>),
                    icon: <VerticalAlignTopOutlined />,
                  },
                  {
                    key: '4',
                    label: (<span onClick={() => setCurrentModal(modalType.ManualOrder)}>Location</span>),
                    icon: <VerticalAlignTopOutlined />,
                  },
                  {
                    key: '5',
                    label: (<span onClick={() => setCurrentModal(modalType.ManualOrder)}>Transfer</span>),
                    icon: <VerticalAlignTopOutlined />,
                  },
                  {
                    key: '6',
                    label: (<span onClick={() => setCurrentModal(modalType.ManualOrder)}>Adjust</span>),
                    icon: <VerticalAlignTopOutlined />,
                  },
                  {
                    key: '7',
                    label: (<span onClick={() => setCurrentModal(modalType.ManualOrder)}>Remove</span>),
                    icon: <VerticalAlignTopOutlined />,
                  },
                  {
                    key: '8',
                    label: (<span onClick={() => setCurrentModal(modalType.ManualOrder)}>Add</span>),
                    icon: <VerticalAlignTopOutlined />,
                  },
                ],
              }}
            >
              <Button type="primary" size='small'>
                <Space>
                  Bulk Edit <DownOutlined />
                </Space>
              </Button>
            </Dropdown>

            <Dropdown
              menu={{
                items: [
                  {
                    key: '1',
                    label: (<span onClick={() => setCurrentModal(modalType.StockHistory)}>Import Inventory</span>),
                    icon: <VerticalAlignTopOutlined />,
                  },
                  {
                    key: '2',
                    label: (<span onClick={() => setCurrentModal(modalType.ManualOrder)}>Import Stock Minimums</span>),
                    icon: <VerticalAlignTopOutlined />,
                  },
                  {
                    key: '3',
                    label: (<span onClick={() => setCurrentModal(modalType.ManualOrder)}>Import Reorder Rules</span>),
                    icon: <VerticalAlignTopOutlined />,
                  },
                  {
                    key: '4',
                    label: (<span onClick={() => setCurrentModal(modalType.ManualOrder)}>Export Inventory</span>),
                    icon: <VerticalAlignBottomOutlined />,
                  },
                  {
                    key: '5',
                    label: (<span onClick={() => setCurrentModal(modalType.ManualOrder)}>Export Stock Details</span>),
                    icon: <VerticalAlignBottomOutlined />,
                  },
                  {
                    key: '6',
                    label: (<span onClick={() => setCurrentModal(modalType.ExportStockEditHistory)}>Export Stock Edit History</span>),
                    icon: <VerticalAlignBottomOutlined />,
                  },
                ],
              }}
            >
              <Button type="primary" size='small'>
                <Space>
                  Import/Export <DownOutlined />
                </Space>
              </Button>
            </Dropdown>

            <OButton 
              btnText="Bulk Reconciliation"
              onClick={() => setCurrentModal(modalType.BulkReconciliation)} />
          </Space>

          <OTable 
            columns={Tcolumns} 
            rows={dataSource}
            style={{ marginTop: 15 }} />
        </Card>
      </div>

      <SampleSplitter isDragging={isRightDragging} {...rightDragBarProps} />
      
      <div
        className={cn('shrink-0 contents', isRightDragging && 'dragging')}
        style={{ width: RightW }}
      >
        <div className="w-full">
          <StockDetails />
        </div>
      </div>

      <StockHistoryModal
        isOpen={currentModal === modalType.StockHistory}
        onClose={() => setCurrentModal(modalType.Close)}
        dataSource={stockHistorySource}
      />
      <ExportStockEditHistoryModal
        isOpen={currentModal === modalType.ExportStockEditHistory}
        onSave={() => {}}
        onAddOrderExportSettings={() => setCurrentModal(modalType.AddOrderExportSettings)}
        onClose={() => setCurrentModal(modalType.Close)}
      />
      <BulkReconciliationModal
        isOpen={currentModal === modalType.BulkReconciliation}
        onSave={() => {}}
        onClose={() => setCurrentModal(modalType.Close)}
      />
      <StockAllocationDetailsModal
        isOpen={currentModal === modalType.StockAllocationDetails}
        onClose={() => setCurrentModal(modalType.Close)}
        dataSource={stockAllocationSource}
      />
    </>
  );
};

export default StockManagement;
