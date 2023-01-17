import {
  Button,
  Input,
  Card,
  Row,
  Col,
  Dropdown,
  Descriptions,
  Table,
  Menu,
  Modal,
  Select,
  Popconfirm,
  Tabs,
  Upload,
} from 'antd';
import React, { useState } from 'react';
import { data, stock_data, stock_history, stock_allocation } from './components/structure';
import { modalType } from '@/utils/helpers/types';
import { OTable } from '@/components/Globals/OTable';
import { DownOutlined } from '@ant-design/icons';
import StockHistoryModal from '@/components/Modals/Inventory/StockHistory';
import ExportStockEditHistoryModal from '@/components/Modals/Inventory/ExportStockEditHistory';
import BulkReconciliationModal from '@/components/Modals/Inventory/BulkReconciliation';
import StockAllocationDetailsModal from '@/components/Modals/Inventory/StockAllocationDetails';
import { useResizable } from 'react-resizable-layout';
import { cn, SampleSplitter } from '@/utils/components/SampleSplitter';
import { productType } from '@/utils/helpers/types';
import CoreProductsIcon from '@/utils/icons/coreProduct';
import BundleIcon from '@/utils/icons/bundle';
import ListIcon from '@/utils/icons/list';
import VariationIcon from '@/utils/icons/variation';

const { Search } = Input;

const StockManagement: React.FC = () => {
  const [modalOpen, setModal] = useState('');
  const [dataSource, setDataSource] = useState(data);
  const [stockDataSource, setstockDataSource] = useState(stock_data);
  const [stockHistorySource, setstockHistorySource] = useState(stock_history);
  const [stockAllocationSource, setstockAllocationSource] = useState(stock_allocation);

  const Tcolumns = [
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
      render: (text: any) => <>{text && <ListIcon />}</>,
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
          onClick={() => setModal(modalType.StockAllocationDetails)}
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
          onClick={() => setModal(modalType.StockAllocationDetails)}
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
          onClick={() => setModal(modalType.StockAllocationDetails)}
        >
          <u>{text}</u>
        </span>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  const Scolumns = [
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
    },
    {
      title: 'Min. Level',
      dataIndex: 'min_level',
      key: 'min_level',
    },
    {
      title: 'Available',
      dataIndex: 'available',
      key: 'available',
    },
  ];

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
        <div className="horizon-content">
          <Row style={{ width: '100%' }}>
            <Col span={24}>
              <Card>
                <Row gutter={10} align="middle">
                  <Col span={8}>
                    <Search
                      placeholder="Enter SKU or product name..."
                      onSearch={() => console.log('Inactive')}
                      enterButton
                      size="small"
                    />
                  </Col>
                  <Col span={16}>
                    <Row gutter={5}>
                      <Col>
                        <Dropdown
                          menu={{
                            items: [
                              {
                                key: '1',
                                label: (
                                  <span onClick={() => setModal(modalType.StockHistory)}>
                                    History
                                  </span>
                                ),
                              },
                              {
                                key: '2',
                                label: (
                                  <span onClick={() => setModal(modalType.ManualOrder)}>
                                    Deactivate
                                  </span>
                                ),
                              },
                              {
                                key: '3',
                                label: (
                                  <span onClick={() => setModal(modalType.ManualOrder)}>
                                    Draw Rank
                                  </span>
                                ),
                              },
                              {
                                key: '4',
                                label: (
                                  <span onClick={() => setModal(modalType.ManualOrder)}>
                                    Location
                                  </span>
                                ),
                              },
                              {
                                key: '5',
                                label: (
                                  <span onClick={() => setModal(modalType.ManualOrder)}>
                                    Transfer
                                  </span>
                                ),
                              },
                              {
                                key: '6',
                                label: (
                                  <span onClick={() => setModal(modalType.ManualOrder)}>
                                    Adjust
                                  </span>
                                ),
                              },
                              {
                                key: '7',
                                label: (
                                  <span onClick={() => setModal(modalType.ManualOrder)}>
                                    Remove
                                  </span>
                                ),
                              },
                              {
                                key: '8',
                                label: (
                                  <span onClick={() => setModal(modalType.ManualOrder)}>Add</span>
                                ),
                              },
                            ],
                          }}
                        >
                          <Button type="dashed">
                            Bulk Edit <DownOutlined />
                          </Button>
                        </Dropdown>
                      </Col>
                      <Col>
                        <Dropdown
                          menu={{
                            items: [
                              {
                                key: '1',
                                label: (
                                  <span onClick={() => setModal(modalType.StockHistory)}>
                                    Import Inventory
                                  </span>
                                ),
                              },
                              {
                                key: '2',
                                label: (
                                  <span onClick={() => setModal(modalType.ManualOrder)}>
                                    Import Stock Minimums
                                  </span>
                                ),
                              },
                              {
                                key: '3',
                                label: (
                                  <span onClick={() => setModal(modalType.ManualOrder)}>
                                    Import Reorder Rules
                                  </span>
                                ),
                              },
                              {
                                key: '4',
                                label: (
                                  <span onClick={() => setModal(modalType.ManualOrder)}>
                                    Export Inventory
                                  </span>
                                ),
                              },
                              {
                                key: '5',
                                label: (
                                  <span onClick={() => setModal(modalType.ManualOrder)}>
                                    Export Stock Details
                                  </span>
                                ),
                              },
                              {
                                key: '6',
                                label: (
                                  <span onClick={() => setModal(modalType.ExportStockEditHistory)}>
                                    Export Stock Edit History
                                  </span>
                                ),
                              },
                            ],
                          }}
                        >
                          <Button type="dashed">
                            Import/Export <DownOutlined />
                          </Button>
                        </Dropdown>
                      </Col>
                      <Col>
                        <Button
                          onClick={() => setModal(modalType.BulkReconciliation)}
                          type="dashed"
                        >
                          Bulk Reconciliation
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
              <Card>
                <OTable columns={Tcolumns} rows={dataSource} />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <SampleSplitter isDragging={isRightDragging} {...rightDragBarProps} />
      <div
        className={cn('shrink-0 contents', isRightDragging && 'dragging')}
        style={{ width: RightW }}
      >
        <div className="w-full">
          <Row style={{ width: '100%' }}>
            <Col span={24}>
              <div style={{ fontSize: '20px', marginLeft: '10px' }}>Stock Details</div>
            </Col>
            <Col span={24}>
              <Card>
                <h3>In-House Warehouse (1000)</h3>
              </Card>
              <Card>
                <Row>
                  <Col span={12}>
                    <h4>Warehouse Totals</h4>
                    <ul>
                      <li>On Hand: 600</li>
                      <li>Locked: 100</li>
                      <li>Allocated: 0</li>
                      <li>Min. Level: 0</li>
                      <li>Differential: 1000</li>
                    </ul>
                    <Descriptions>
                      <Descriptions.Item label="Est. Reorder Date">06/11/2022</Descriptions.Item>
                    </Descriptions>
                    <Descriptions>
                      <Descriptions.Item label="Est. Runout Date">06/11/2022</Descriptions.Item>
                    </Descriptions>
                    <Descriptions>
                      <Descriptions.Item label="Incoming Units">0</Descriptions.Item>
                    </Descriptions>
                  </Col>
                  <Col span={10}></Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Card title="Stock Breakdown">
                      <OTable columns={Scolumns} rows={stockDataSource} />
                      <Row gutter={[20, 10]} justify="space-between">
                        <Button type="dashed" style={{ marginRight: '4px' }}>
                          New Stock
                        </Button>
                        <Dropdown
                          menu={{
                            items: [
                              {
                                key: '1',
                                label: (
                                  <span onClick={() => setModal(modalType.StockHistory)}>
                                    History
                                  </span>
                                ),
                              },
                              {
                                key: '2',
                                label: (
                                  <span onClick={() => setModal(modalType.ManualOrder)}>
                                    Deactivate
                                  </span>
                                ),
                              },
                              {
                                key: '3',
                                label: (
                                  <span onClick={() => setModal(modalType.ManualOrder)}>
                                    Draw Rank
                                  </span>
                                ),
                              },
                              {
                                key: '4',
                                label: (
                                  <span onClick={() => setModal(modalType.ManualOrder)}>
                                    Location
                                  </span>
                                ),
                              },
                              {
                                key: '5',
                                label: (
                                  <span onClick={() => setModal(modalType.ManualOrder)}>
                                    Transfer
                                  </span>
                                ),
                              },
                              {
                                key: '6',
                                label: (
                                  <span onClick={() => setModal(modalType.ManualOrder)}>
                                    Adjust
                                  </span>
                                ),
                              },
                              {
                                key: '7',
                                label: (
                                  <span onClick={() => setModal(modalType.ManualOrder)}>
                                    Remove
                                  </span>
                                ),
                              },
                              {
                                key: '8',
                                label: (
                                  <span onClick={() => setModal(modalType.ManualOrder)}>Add</span>
                                ),
                              },
                            ],
                          }}
                        >
                          <Button type="dashed" style={{ marginRight: '4px' }}>
                            Edit <DownOutlined />
                          </Button>
                        </Dropdown>
                        <Button type="dashed" style={{ marginRight: '4px' }}>
                          Inv. Val. Hist.
                        </Button>
                        <Button type="dashed">Show Inactive</Button>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <StockHistoryModal
        isOpen={modalOpen === modalType.StockHistory}
        onClose={() => setModal(modalType.Close)}
        dataSource={stockHistorySource}
      />
      <ExportStockEditHistoryModal
        isOpen={modalOpen === modalType.ExportStockEditHistory}
        onSave={() => {}}
        onAddOrderExportSettings={() => setModal(modalType.AddOrderExportSettings)}
        onClose={() => setModal(modalType.Close)}
      />
      <BulkReconciliationModal
        isOpen={modalOpen === modalType.BulkReconciliation}
        onSave={() => {}}
        onClose={() => setModal(modalType.Close)}
      />
      <StockAllocationDetailsModal
        isOpen={modalOpen === modalType.StockAllocationDetails}
        onClose={() => setModal(modalType.Close)}
        dataSource={stockAllocationSource}
      />
    </>
  );
};

export default StockManagement;
