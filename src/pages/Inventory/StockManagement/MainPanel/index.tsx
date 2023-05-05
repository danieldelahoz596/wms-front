import { OButton } from '@/components/Globals/OButton';
import SelectDropdown from '@/components/Globals/selectDropdown';
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
import { Row, Col, Space, Card, Input, Dropdown, Button, Table } from 'antd';
import { useState, useMemo, useCallback, useEffect } from 'react';

// Modals
import ImportExportSummaryModal from '@/components/Modals/ImportExportSummary';
import BulkReconciliationModal from './Modals/BulkReconciliation';
import ExportInventoryModal from './Modals/ExportInventory';
import ExportStockDetailsModal from './Modals/ExportStockDetails';
import ExportStockEditHistoryModal from './Modals/ExportStockEditHistory';
import IncomingUnitsModal from './Modals/ImcomingUnits';
import ImportReorderRulesModal from './Modals/ImportReorderRules';
import InventoryLevelsImportModal from './Modals/InventoryLevelsImport';
import InventoryRulesModal from './Modals/InventoryRules';
import SelectWarehouseForInventoryImportModal from './Modals/SelectWarehouseForInventoryImport';
import StockAllocationDetailsModal from './Modals/StockAllocationDetails';
import StockHistoryModal from '../RightPanel/Modals/StockHistory';

const { Search } = Input;

interface IMainPanel {
  tabButtons: React.ReactNode;
  dataSource: any[];
  selectedShowWarehouseItems: any[];
  setSelectedShowWarehouseItems: (value: any[]) => void;
}

export const stock_allocation = [
  {
    key: 1,
    warehouse: 'Jeff Warehouse',
    stock_location: 'Location 1',
    order_number: 'Stock transfer 1',
    allocated: '20',
    picked: '0',
  },
  {
    key: 2,
    warehouse: 'Jeff Warehouse 2',
    stock_location: 'Location 2',
    order_number: 'Stock transfer 2',
    allocated: '50',
    picked: '0',
  },
  {
    key: 3,
    warehouse: 'Jeff Warehouse 3',
    stock_location: 'Location 3',
    order_number: 'Stock transfer 3',
    allocated: '80',
    picked: '0',
  },
];

export const stock_history = [
  {
    key: 1,
    edit_time: '04/09/2021 10:49 AM',
    user: 'support@skubana.com',
    edit_type: 'Adjust',
    description: 'This is test',
    notes: 'Test',
  },
  {
    key: 2,
    edit_time: '04/09/2022',
    user: 'support@test.com',
    edit_type: 'Adjust sf',
    description: 'This is test dv',
    notes: 'Test s',
  },
  {
    key: 3,
    edit_time: '04/09/2022',
    user: 'support23@test.com',
    edit_type: 'Adjust w3',
    description: 'This is test 34',
    notes: 'Test 34',
  },
];

const MainPanel: React.FC<IMainPanel> = ({
  tabButtons,
  dataSource,
  selectedShowWarehouseItems,
  setSelectedShowWarehouseItems,
}) => {
  const { warehouseList } = useModel('warehouse');
  const { stockLocationList, selectedStockItem, setSelectedStockItem, getStockDetails } = useModel('stockLocation');
  const [currentModal, setCurrentModal] = useState<modalType>(modalType.Close);
  const [stockHistorySource] = useState(stock_history);
  const [stockAllocationSource] = useState(stock_allocation);
  const { getInventoryImportExportSummary } = useModel('exportSummary');
  const [selectedWarehouseName, setSelectedWarehouseName] = useState('');
  const [selectedShowItems, setSelectedShowItems] = useState([
    'onHand',
    'locked',
    'allocated',
    'inTransite',
    'availableQuantities',
  ]);

  const handleMasterSKU = useCallback(
    (event, id) => {
      event.stopPropagation();
      setSelectedStockItem(id);
      setCurrentModal(modalType.InventoryRules);
    },
    [setSelectedStockItem],
  );

  const showedRows = useMemo(() => {
    let rows = [];
    if (selectedShowItems.includes('onHand'))
      rows = rows.concat([
        {
          title: 'On Hand',
          dataIndex: 'on_hand',
          key: 'on_hands',
        },
      ]);
    if (selectedShowItems.includes('locked'))
      rows = rows.concat([
        {
          title: 'On Hand',
          dataIndex: 'on_hand',
          key: 'on_hands',
        },
      ]);
    if (selectedShowItems.includes('allocated'))
      rows = rows.concat([
        {
          title: 'Allocated',
          dataIndex: 'allocated',
          key: 'allocated',
          render: (text: any) => (
            <span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => setCurrentModal(modalType.StockAllocationDetails)}>
              <u>{text}</u>
            </span>
          ),
        },
      ]);
    if (selectedShowItems.includes('inTransite'))
      rows = rows.concat([
        {
          title: 'In Transfer',
          dataIndex: 'in_transfer',
          key: 'in_transfer',
          render: () => (
            <span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => setCurrentModal(modalType.IncomingUnits)}>
              <u>0</u>
            </span>
          ),
        },
      ]);
    if (selectedShowItems.includes('availableQuantities'))
      rows = rows.concat([
        {
          title: 'Available',
          dataIndex: 'available',
          key: 'available',
        },
      ]);

    rows = rows.concat([
      {
        title: 'Discrepation',
        dataIndex: 'discrepation',
        key: 'discrepation',
        render: (text: any) => (
          <span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => setCurrentModal(modalType.StockAllocationDetails)}>
            <u>{text}</u>
          </span>
        ),
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        align: 'center' as const,
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
    ]);

    return rows;
  }, [selectedShowItems]);

  const TColumns = useMemo(
    () =>
      [
        {
          key: 'expand',
          title: '',
          width: 30,
        },
        {
          title: 'Type',
          dataIndex: ['product', 'type'],
          key: 'type',
          align: 'center' as const,
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
          dataIndex: ['product', 'sku'],
          key: 'master_sku',
          render: (text: any, record) => (
            <a onClick={(event) => handleMasterSKU(event, record.key)}>
              <u>{text}</u>
            </a>
          ),
        },
        {
          title: 'Name',
          dataIndex: ['product', 'name'],
          key: 'name',
        },
        {
          title: 'Brand',
          dataIndex: ['product', 'brand', 'name'],
          key: 'brand',
        },
        {
          title: 'Des',
          dataIndex: 'description',
          key: 'description',
          render: (text: any) => <>{text && <NoteIcon />}</>,
        },
      ].concat(showedRows),
    [handleMasterSKU, showedRows],
  );

  const TRows = useMemo(() => stockLocationList.map((item) => ({ ...item, key: item.id })), [stockLocationList]);

  const warehouseOptions = useMemo(
    () =>
      warehouseList.map((warehouse) => ({
        value: warehouse.id,
        label: warehouse.name,
      })),
    [warehouseList],
  );

  useEffect(() => {
    setSelectedShowWarehouseItems(warehouseList.map((warehouse) => warehouse.id));
  }, [warehouseList, setSelectedShowWarehouseItems]);

  return (
    <>
      <Row style={{ marginBottom: 10 }}>
        <Col span={6} style={{ paddingLeft: 10 }}>
          {tabButtons}
        </Col>
        <Col span={18}>
          <div style={{ textAlign: 'right', marginRight: 10 }}>
            <Space size={5}>
              <SelectDropdown
                options={warehouseOptions}
                type="warehouse"
                style={{ width: '220px' }}
                size={'middle'}
                selectedItems={selectedShowWarehouseItems}
                setSelectedItems={setSelectedShowWarehouseItems}
              />
              <SelectDropdown
                options={[
                  { value: 'onHand', label: 'On Hand' },
                  { value: 'locked', label: 'Locked' },
                  { value: 'allocated', label: 'Allocated' },
                  { value: 'inTransite', label: 'In Transit' },
                  { value: 'availableQuantities', label: 'Available quantities' },
                ]}
                type="item"
                style={{ width: '220px' }}
                size={'middle'}
                selectedItems={selectedShowItems}
                setSelectedItems={setSelectedShowItems}
              />
            </Space>
          </div>
        </Col>
      </Row>

      <Card style={{ borderRadius: 5, marginLeft: 10, marginRight: 10 }}>
        <Space size={HORIZONTAL_SPACE_SIZE}>
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
                  label: <span onClick={() => setCurrentModal(modalType.StockHistory)}>History</span>,
                  icon: <VerticalAlignTopOutlined />,
                },
                {
                  key: '2',
                  label: <span onClick={() => setCurrentModal(modalType.ManualOrder)}>Deactivate</span>,
                  icon: <VerticalAlignTopOutlined />,
                },
                {
                  key: '3',
                  label: <span onClick={() => setCurrentModal(modalType.ManualOrder)}>Draw Rank</span>,
                  icon: <VerticalAlignTopOutlined />,
                },
                {
                  key: '4',
                  label: <span onClick={() => setCurrentModal(modalType.ManualOrder)}>Location</span>,
                  icon: <VerticalAlignTopOutlined />,
                },
                {
                  key: '5',
                  label: <span onClick={() => setCurrentModal(modalType.ManualOrder)}>Transfer</span>,
                  icon: <VerticalAlignTopOutlined />,
                },
                {
                  key: '6',
                  label: <span onClick={() => setCurrentModal(modalType.ManualOrder)}>Adjust</span>,
                  icon: <VerticalAlignTopOutlined />,
                },
                {
                  key: '7',
                  label: <span onClick={() => setCurrentModal(modalType.ManualOrder)}>Remove</span>,
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
                    <span onClick={() => setCurrentModal(modalType.SelectWarehouseForInventoryImport)}>Import Inventory</span>
                  ),
                  icon: <VerticalAlignTopOutlined />,
                },
                {
                  key: '2',
                  label: (
                    <span onClick={() => setCurrentModal(modalType.SelectWarehouseForInventoryImport)}>
                      Import Stock Minimums
                    </span>
                  ),
                  icon: <VerticalAlignTopOutlined />,
                },
                {
                  key: '3',
                  label: <span onClick={() => setCurrentModal(modalType.ImportReorderRules)}>Import Reorder Rules</span>,
                  icon: <VerticalAlignTopOutlined />,
                },
                {
                  type: 'divider',
                },
                {
                  key: '4',
                  label: <span onClick={() => setCurrentModal(modalType.ExportInventory)}>Export Inventory</span>,
                  icon: <VerticalAlignBottomOutlined />,
                },
                {
                  key: '5',
                  label: <span onClick={() => setCurrentModal(modalType.ExportStockDetails)}>Export Stock Details</span>,
                  icon: <VerticalAlignBottomOutlined />,
                },
                {
                  key: '6',
                  label: <span onClick={() => setCurrentModal(modalType.ExportStockEditHistory)}>Export Stock Edit History</span>,
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

          <OButton btnText="Bulk Reconciliation" onClick={() => setCurrentModal(modalType.BulkReconciliation)} />
        </Space>

        <Table
          columns={TColumns}
          dataSource={TRows}
          style={{ marginTop: 15 }}
          onRow={(record) => {
            return {
              onClick: () => {
                if (record.id === selectedStockItem?.id) setSelectedStockItem(null);
                else {
                  const stockLocationData = stockLocationList.find((item) => item.id === record.id);
                  setSelectedStockItem(stockLocationData);
                  getStockDetails(stockLocationData.product_id);
                }
              },
            };
          }}
          rowClassName={(record) => (record.id === selectedStockItem?.id ? `ant-table-row-selected` : '')}
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

            return <></>;
          }}
        />
      </Card>

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
        stockData={dataSource.find((item) => item.key === selectedStockItem?.id)}
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

      <IncomingUnitsModal isOpen={currentModal === modalType.IncomingUnits} onClose={() => setCurrentModal(modalType.Close)} />
    </>
  );
};

export default MainPanel;
