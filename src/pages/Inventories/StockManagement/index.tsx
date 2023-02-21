import { OButton } from '@/components/Globals/OButton';
import SelectDropdown from '@/components/Globals/selectDropdown';
import ImportExportSummaryModal from '@/components/ImportExportSummary';
import BulkReconciliationModal from '@/pages/Inventories/Modals/BulkReconciliation';
import ExportInventoryModal from '../Modals/ExportInventory';
import ExportStockDetailsModal from '../Modals/ExportStockDetails';
import ExportStockEditHistoryModal from '../Modals/ExportStockEditHistory';
import IncomingUnitsModal from '../Modals/ImcomingUnits';
import ImportReorderRulesModal from '../Modals/ImportReorderRules';
import InventoryLevelsImportModal from '../Modals/InventoryLevelsImport';
import InventoryRulesModal from '../Modals/InventoryRules';
import SelectWarehouseForInventoryImportModal from '../Modals/SelectWarehouseForInventoryImport';
import StockAllocationDetailsModal from '../Modals/StockAllocationDetails';
import StockHistoryModal from '../Modals/StockHistory';
import { cn, SampleSplitter } from '@/utils/components/SampleSplitter';
import { modalType, productStatus, productType } from '@/utils/helpers/types';
import BundleIcon from '@/utils/icons/bundle';
import CoreProductsIcon from '@/utils/icons/coreProduct';
import NoteIcon from '@/utils/icons/note';
import SettingIcon from '@/utils/icons/setting';
import ShieldAdmirationIcon from '@/utils/icons/shieldAdmiration';
import ShieldCheckIcon from '@/utils/icons/shieldCheck';
import ShieldDeniedIcon from '@/utils/icons/shieldDenied';
import VariationIcon from '@/utils/icons/variation';
import VectorIcon from '@/utils/icons/vector';
import {
  CaretDownOutlined,
  CaretRightOutlined,
  DownOutlined,
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined,
} from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Button, Card, Col, Dropdown, Input, Row, Space, Table } from 'antd';
import { useMemo, useState } from 'react';
import { useResizable } from 'react-resizable-layout';
import StockDetailsPanel from './components/RightPanel';
import { data, stock_allocation, stock_history } from './components/structure';

const { Search } = Input;
interface IStockManagement {
  tabButtons: React.ReactNode;
}

const StockManagement: React.FC<IStockManagement> = ({ tabButtons }) => {
  const { initialState } = useModel('@@initialState');
  const [currentModal, setCurrentModal] = useState<modalType>(modalType.Close);
  const [dataSource] = useState(data);
  const [stockHistorySource] = useState(stock_history);
  const [stockAllocationSource] = useState(stock_allocation);
  const [selectedStockId, setSelectedStockId] = useState(null);
  const { getInventoryImportExportSummary } = useModel('exportSummary');
  const [selectedWarehouseName, setSelectedWarehouseName] = useState('');

  const handleMasterSKU = (event, id) => {
    event.stopPropagation();
    setSelectedStockId(id);
    setCurrentModal(modalType.InventoryRules);
  };

  const TColumns = useMemo(
    () => [
      {
        key: 'expand',
        title: '',
        width: 30,
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        align: 'center',
        render: (text: any) => (
          <>
            {text === productType.CoreProduct ? (
              <CoreProductsIcon style={{ fontSize: 24 }} />
            ) : text === productType.BundleOrKit ? (
              <BundleIcon style={{ fontSize: 24 }} />
            ) : text === productType.Variations ? (
              <VariationIcon style={{ fontSize: 24 }} />
            ) : (
              <span style={{ position: 'relative' }}>
                <CoreProductsIcon style={{ fontSize: 24 }} />
                <div style={{ position: 'absolute', top: 3, left: 12 }}>
                  <VectorIcon style={{ fontSize: 14 }} />
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
        render: (text: any, record) => (
          <a onClick={(event) => handleMasterSKU(event, record.key)}>
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
            onClick={() => setCurrentModal(modalType.IncomingUnits)}
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
          <Col span={6} style={{ paddingLeft: 10 }}>
            {tabButtons}
          </Col>
          <Col span={18}>
            <div style={{ textAlign: 'right', marginRight: 10 }}>
              <Space size={5}>
                <SelectDropdown
                  options={initialState?.initialData?.warehouses.map((warehouse) => ({
                    value: warehouse.id,
                    label: warehouse.name,
                  }))}
                  defaultSelectedItems={initialState?.initialData?.warehouses.map(
                    (warehouse) => warehouse.id,
                  )}
                  type="warehouse"
                  style={{ width: '220px' }}
                  size={'middle'}
                />
                <SelectDropdown
                  options={[
                    { value: 'onHand', label: 'On Hand' },
                    { value: 'locked', label: 'Locked' },
                    { value: 'allocated', label: 'Allocated' },
                    { value: 'inTransite', label: 'In Transit' },
                    { value: 'availableQuantities', label: 'Available quantities' },
                  ]}
                  defaultSelectedItems={[
                    'onHand',
                    'locked',
                    'allocated',
                    'inTransite',
                    'availableQuantities',
                  ]}
                  type="item"
                  style={{ width: '220px' }}
                  size={'middle'}
                />
              </Space>
            </div>
          </Col>
        </Row>

        <Card style={{ borderRadius: 5, marginLeft: 10, marginRight: 10 }}>
          <Space size={4}>
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
                    label: (
                      <span onClick={() => setCurrentModal(modalType.StockHistory)}>History</span>
                    ),
                    icon: <VerticalAlignTopOutlined />,
                  },
                  {
                    key: '2',
                    label: (
                      <span onClick={() => setCurrentModal(modalType.ManualOrder)}>Deactivate</span>
                    ),
                    icon: <VerticalAlignTopOutlined />,
                  },
                  {
                    key: '3',
                    label: (
                      <span onClick={() => setCurrentModal(modalType.ManualOrder)}>Draw Rank</span>
                    ),
                    icon: <VerticalAlignTopOutlined />,
                  },
                  {
                    key: '4',
                    label: (
                      <span onClick={() => setCurrentModal(modalType.ManualOrder)}>Location</span>
                    ),
                    icon: <VerticalAlignTopOutlined />,
                  },
                  {
                    key: '5',
                    label: (
                      <span onClick={() => setCurrentModal(modalType.ManualOrder)}>Transfer</span>
                    ),
                    icon: <VerticalAlignTopOutlined />,
                  },
                  {
                    key: '6',
                    label: (
                      <span onClick={() => setCurrentModal(modalType.ManualOrder)}>Adjust</span>
                    ),
                    icon: <VerticalAlignTopOutlined />,
                  },
                  {
                    key: '7',
                    label: (
                      <span onClick={() => setCurrentModal(modalType.ManualOrder)}>Remove</span>
                    ),
                    icon: <VerticalAlignTopOutlined />,
                  },
                  {
                    key: '8',
                    label: <span onClick={() => setCurrentModal(modalType.ManualOrder)}>Add</span>,
                    icon: <VerticalAlignTopOutlined />,
                  },
                ],
              }}
            >
              <Button size="small">
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
                    label: (
                      <span
                        onClick={() => setCurrentModal(modalType.SelectWarehouseForInventoryImport)}
                      >
                        Import Inventory
                      </span>
                    ),
                    icon: <VerticalAlignTopOutlined />,
                  },
                  {
                    key: '2',
                    label: (
                      <span
                        onClick={() => setCurrentModal(modalType.SelectWarehouseForInventoryImport)}
                      >
                        Import Stock Minimums
                      </span>
                    ),
                    icon: <VerticalAlignTopOutlined />,
                  },
                  {
                    key: '3',
                    label: (
                      <span onClick={() => setCurrentModal(modalType.ImportReorderRules)}>
                        Import Reorder Rules
                      </span>
                    ),
                    icon: <VerticalAlignTopOutlined />,
                  },
                  {
                    type: 'divider',
                  },
                  {
                    key: '4',
                    label: (
                      <span onClick={() => setCurrentModal(modalType.ExportInventory)}>
                        Export Inventory
                      </span>
                    ),
                    icon: <VerticalAlignBottomOutlined />,
                  },
                  {
                    key: '5',
                    label: (
                      <span onClick={() => setCurrentModal(modalType.ExportStockDetails)}>
                        Export Stock Details
                      </span>
                    ),
                    icon: <VerticalAlignBottomOutlined />,
                  },
                  {
                    key: '6',
                    label: (
                      <span onClick={() => setCurrentModal(modalType.ExportStockEditHistory)}>
                        Export Stock Edit History
                      </span>
                    ),
                    icon: <VerticalAlignBottomOutlined />,
                  },
                ],
              }}
            >
              <Button size="small">
                <Space>
                  Import/Export <DownOutlined />
                </Space>
              </Button>
            </Dropdown>

            <OButton
              btnText="Bulk Reconciliation"
              onClick={() => setCurrentModal(modalType.BulkReconciliation)}
            />
          </Space>

          <Table
            columns={TColumns}
            dataSource={dataSource}
            style={{ marginTop: 15 }}
            onRow={(record) => {
              return {
                onClick: () => {
                  if (record.key === selectedStockId) setSelectedStockId(null);
                  else setSelectedStockId(record.key);
                },
              };
            }}
            rowClassName={(record) =>
              record.key === selectedStockId ? `ant-table-row-selected` : ''
            }
            expandIcon={(props) => {
              if (props.expandable) {
                if (props.expanded) {
                  return (
                    <a
                      style={{ color: 'black' }}
                      onClick={(e) => {
                        props.onExpand(props.record, e);
                      }}
                    >
                      <CaretDownOutlined />
                    </a>
                  );
                } else {
                  return (
                    <a
                      style={{ color: 'black' }}
                      onClick={(e) => {
                        props.onExpand(props.record, e);
                      }}
                    >
                      <CaretRightOutlined />
                    </a>
                  );
                }
              }
            }}
          />
        </Card>
      </div>

      <SampleSplitter isDragging={isRightDragging} {...rightDragBarProps} />

      <div
        className={cn('shrink-0 contents right-panel', isRightDragging && 'dragging')}
        style={{ width: RightW }}
      >
        <div className="w-full">
          {selectedStockId && (
            <StockDetailsPanel
              vendorData={dataSource.find((item) => item.key === selectedStockId)}
            />
          )}
        </div>
      </div>

      <StockHistoryModal
        isOpen={currentModal === modalType.StockHistory}
        title="In house warehouse stock edit history for 1234 AT location232"
        dataSource={stockHistorySource}
        onClose={() => setCurrentModal(modalType.Close)}
      />

      <ExportStockEditHistoryModal
        isOpen={currentModal === modalType.ExportStockEditHistory}
        onSave={() => {}}
        onClose={() => setCurrentModal(modalType.Close)}
        onAddOrderExportSettings={() => setCurrentModal(modalType.AddOrderExportSettings)}
      />

      <ExportStockDetailsModal
        isOpen={currentModal === modalType.ExportStockDetails}
        onSave={() => setCurrentModal(modalType.Close)}
        onClose={() => setCurrentModal(modalType.Close)}
      />

      <ExportInventoryModal
        isOpen={currentModal === modalType.ExportInventory}
        onSave={() => setCurrentModal(modalType.Close)}
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

      <ImportReorderRulesModal
        isOpen={currentModal === modalType.ImportReorderRules}
        onSave={() => setCurrentModal(modalType.Close)}
        onClose={() => setCurrentModal(modalType.Close)}
      />

      <InventoryRulesModal
        isOpen={currentModal === modalType.InventoryRules}
        onSave={() => setCurrentModal(modalType.Close)}
        onClose={() => setCurrentModal(modalType.Close)}
        stockData={dataSource.find((item) => item.key === selectedStockId)}
      />

      <SelectWarehouseForInventoryImportModal
        isOpen={currentModal === modalType.SelectWarehouseForInventoryImport}
        onSave={(name: string) => {
          setSelectedWarehouseName(name);
          setCurrentModal(modalType.Import);
        }}
        onClose={() => setCurrentModal(modalType.Close)}
      />

      <InventoryLevelsImportModal
        isOpen={currentModal === modalType.Import}
        onSave={() => setCurrentModal(modalType.ImportExportSummary)}
        onClose={() => setCurrentModal(modalType.Close)}
        warehouseName={selectedWarehouseName}
      />

      <ImportExportSummaryModal
        title="In-House Inventory Import"
        info="In-House Warehouse Manual Inventory Import Summary"
        getImportExportSummary={getInventoryImportExportSummary}
        isOpen={currentModal === modalType.ImportExportSummary}
        onSave={() => setCurrentModal(modalType.Close)}
        onClose={() => setCurrentModal(modalType.Close)}
      />

      <IncomingUnitsModal
        isOpen={currentModal === modalType.IncomingUnits}
        onClose={() => setCurrentModal(modalType.Close)}
      />
    </>
  );
};

export default StockManagement;
