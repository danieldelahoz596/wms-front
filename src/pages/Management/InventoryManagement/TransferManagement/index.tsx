import Icon, { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import {
  PageContainer
} from '@ant-design/pro-components';
import { Button, Input, message, Table, Card, Row, Col, Dropdown, Menu, Modal, Select, Popconfirm } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useRef, useState } from 'react';
import { Tabs, Upload, Drawer } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import { data, historyData, recieveData } from './components/structure';
import { getBase64, fileUploadProps, mselectChildren, sampleImages } from '@/utils/helpers/base';
import { modalType } from '@/utils/helpers/types';
import { OTable } from '@/components/Globals/OTable';
const { Search } = Input;

const { Option } = Select;
const { TabPane } = Tabs;

const TransferManagement: React.FC = () => {

  const [modalOpen, setModal] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [dataSource, setDataSource] = useState(data);
  const [historyDataSource, sethistoryDataSource] = useState(historyData);
  const [recieveDataSource, setrecieveDataSource] = useState(recieveData);
  const [fileList, setFileList] = useState<UploadFile[]>(sampleImages);
  const Tcolumns = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
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
    },
    {
      title: 'Receiving Warehouse',
      dataIndex: 'receiving_warehouse',
      key: 'receiving_warehouse',
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
    },
  ];


  const Hcolumns = [
    {
      title: 'Edit Time',
      dataIndex: 'edit_time',
      key: 'edit_time',
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    }
  ];

  const Rcolumns = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Master SKU',
      dataIndex: 'master_sku',
      key: 'master_sku',
    },
    {
      title: 'Notes',
      dataIndex: 'notes',
      key: 'notes',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'noquantitytes',
    },
    {
      title: 'Recieved Location',
      dataIndex: 'recieved_location',
      key: 'recieved_location',
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

  const [openHistory, setopenHistory] = useState(false);
  const [openReceive, setopenReceive] = useState(false);

  const showHistory = () => {
    setopenHistory(true);
  };

  const closeHistory = () => {
    setopenHistory(false);
  };

  const showReceive = () => {
    setopenReceive(true);
  };

  return (
    <>
      <Row>
        <Col span={16}>
          <Card>
            <div style={{ width: 300, display: 'inline-block', marginRight: '10px' }}>
              <Search 
                placeholder="Enter Order#, SKU or product name..." 
                onSearch={() => console.log('Inactive')}
                enterButton 
              />
            </div>
            <Button type="dashed" onClick={showReceive} style={{ marginRight: '10px' }}>Receive</Button>
            <Button type="dashed" onClick={showHistory} style={{ marginRight: '10px' }}>History</Button>
            <Drawer title="History For Stock Transfer" width={800} placement="right" onClose={closeHistory} open={openHistory}>
              <OTable
                columns={Hcolumns}
                rows={historyDataSource}
              />
            </Drawer>
          </Card>
          <Card>
            <OTable
              columns={Tcolumns}
              rows={dataSource}
            />
          </Card>
        </Col>
        {openReceive &&
          <Col span={8}>
            <Card>
              <h3>Stock Transfer Order Details</h3>
            </Card>
            <Card>
              <OTable
                  columns={Rcolumns}
                  rows={recieveDataSource}
              />
            </Card>
          </Col>
        }
      </Row>
    </>
  );
};

export default TransferManagement;
