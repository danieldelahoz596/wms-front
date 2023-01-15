import Icon, { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import {
  PageContainer
} from '@ant-design/pro-components';
import { Button, Input, message, Table, Card, Row, Col, Dropdown, Menu, Modal, Select, Popconfirm } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useRef, useState } from 'react';
import { Tabs, Upload, Descriptions } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import { data, stock_data, stock_history, stock_allocation } from './components/structure';
import { getBase64, fileUploadProps, mselectChildren, sampleImages } from '@/utils/helpers/base';
import { modalType } from '@/utils/helpers/types';
import { OTable } from '@/components/Globals/OTable';
import { DownOutlined } from '@ant-design/icons';
import StockHistoryModal from '@/components/Modals/Inventory/StockHistory';
import ExportStockEditHistoryModal from '@/components/Modals/Inventory/ExportStockEditHistory';
import BulkReconciliationModal from '@/components/Modals/Inventory/BulkReconciliation';
import StockAllocationDetailsModal from '@/components/Modals/Inventory/StockAllocationDetails';

const { Search } = Input;

const { Option } = Select;
const { TabPane } = Tabs;

const StockManagement: React.FC = () => {

  const [modalOpen, setModal] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [dataSource, setDataSource] = useState(data);
  const [stockDataSource, setstockDataSource] = useState(stock_data);
  const [stockHistorySource, setstockHistorySource] = useState(stock_history);
  const [stockAllocationSource, setstockAllocationSource] = useState(stock_allocation);
  const [fileList, setFileList] = useState<UploadFile[]>(sampleImages);
  const Tcolumns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'MASTER SKU',
      dataIndex: 'master_sku',
      key: 'master_sku',
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
        <span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => setModal(modalType.StockAllocationDetails)}>{text}</span>
      ),
    },
    {
      title: 'In Transfer',
      dataIndex: 'in_transfer',
      key: 'in_transfer',
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
    }
  ];

  const handleCancel = () => setModal(modalType.Close);
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setModal(modalType.Preview);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChangeImage: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Row>
        <Col span={16}>
          <Card>
            <div style={{ width: 300, display: 'inline-block', marginRight: '10px' }}>
              <Search 
                placeholder="Enter SKU or product name..." 
                onSearch={() => console.log('Inactive')}
                enterButton 
              />
            </div>
            <Button type="dashed" style={{ marginRight: '10px' }}>Bulk Edit</Button>
            <Dropdown 
              menu={{
                items: [
                  {
                    key: '1',
                    label: <span onClick={() => setModal(modalType.StockHistory)}>Import Inventory</span>,
                  },
                  {
                    key: '2',
                    label: <span onClick={() => setModal(modalType.ManualOrder)}>Import Stock Minimums</span>,
                  },
                  {
                    key: '3',
                    label: <span onClick={() => setModal(modalType.ManualOrder)}>Import Reorder Rules</span>,
                  },
                  {
                    key: '4',
                    label: <span onClick={() => setModal(modalType.ManualOrder)}>Export Inventory</span>,
                  },
                  {
                    key: '5',
                    label: <span onClick={() => setModal(modalType.ManualOrder)}>Export Stock Details</span>,
                  },
                  {
                    key: '6',
                    label: <span onClick={() => setModal(modalType.ExportStockEditHistory)}>Export Stock Edit History</span>,
                  },
                ],
              }}
            >
              <Button type="dashed" style={{ marginRight: '10px' }}>
                Import/Export <DownOutlined />
              </Button>
            </Dropdown>
            <Button onClick={() => setModal(modalType.BulkReconciliation)} type="dashed" style={{ marginRight: '10px' }}>Bulk Reconciliation</Button>
          </Card>
          <Card>
            <OTable
              columns={Tcolumns}
              rows={dataSource}
            />
          </Card>
        </Col>
        <Col span={8}>
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
              <Col span={10}>
                
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Card title="Stock Breakdown">
                  <OTable
                    columns={Scolumns}
                    rows={stockDataSource}
                  />
                  <Button type="dashed" style={{ marginRight: '4px' }}>New Stock</Button>
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: '1',
                          label: <span onClick={() => setModal(modalType.StockHistory)}>History</span>,
                        },
                        {
                          key: '2',
                          label: <span onClick={() => setModal(modalType.ManualOrder)}>Deactivate</span>,
                        },
                        {
                          key: '3',
                          label: <span onClick={() => setModal(modalType.ManualOrder)}>Draw Rank</span>,
                        },
                        {
                          key: '4',
                          label: <span onClick={() => setModal(modalType.ManualOrder)}>Location</span>,
                        },
                        {
                          key: '5',
                          label: <span onClick={() => setModal(modalType.ManualOrder)}>Transfer</span>,
                        },
                        {
                          key: '6',
                          label: <span onClick={() => setModal(modalType.ManualOrder)}>Adjust</span>,
                        },
                        {
                          key: '7',
                          label: <span onClick={() => setModal(modalType.ManualOrder)}>Remove</span>,
                        },
                        {
                          key: '8',
                          label: <span onClick={() => setModal(modalType.ManualOrder)}>Add</span>,
                        },
                      ],
                    }}
                  >
                    <Button type="dashed" style={{ marginRight: '4px' }}>
                      Edit <DownOutlined />
                    </Button>
                  </Dropdown>
                  <Button type="dashed" style={{ marginRight: '4px' }}>Inv. Val. Hist.</Button>
                  <Button type="dashed">Show Inactive</Button>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
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
