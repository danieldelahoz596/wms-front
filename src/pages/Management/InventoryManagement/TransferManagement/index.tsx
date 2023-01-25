import { Button, Input, Drawer, Card, Row, Col } from 'antd';
import React, { useState } from 'react';
import { data, historyData, recieveData } from './components/structure';
import { OTable } from '@/components/Globals/OTable';
const { Search } = Input;
interface ITransferManagement {
  changeManagementTab: (tabName: string) => void;
}

const TransferManagement: React.FC<ITransferManagement> = ({ changeManagementTab }) => {
  const [dataSource, setDataSource] = useState(data);
  const [historyDataSource, sethistoryDataSource] = useState(historyData);
  const [recieveDataSource, setrecieveDataSource] = useState(recieveData);

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
    },
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
    },
  ];

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
        <Col span={24}>
          <Row justify="space-between">
            <Col span={12} style={{ paddingLeft: 10 }}>
              <Button
                type="primary"
                style={{ marginRight: '10px' }}
                onClick={() => changeManagementTab('stock')}
              >
                STOCK
              </Button>
              <Button type="primary" onClick={() => changeManagementTab('transfer')}>
                TRANSFERS
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={16}>
          <Card style={{ marginTop: 10 }}>
            <div style={{ width: 300, display: 'inline-block', marginRight: '10px' }}>
              <Search
                placeholder="Enter Order#, SKU or product name..."
                onSearch={() => console.log('Inactive')}
                enterButton
              />
            </div>
            <Button type="primary" onClick={showReceive} style={{ marginRight: '10px' }}>
              Receive
            </Button>
            <Button type="primary" onClick={showHistory} style={{ marginRight: '10px' }}>
              History
            </Button>
            <Drawer
              title="History For Stock Transfer"
              width={800}
              placement="right"
              onClose={closeHistory}
              open={openHistory}
            >
              <OTable columns={Hcolumns} rows={historyDataSource} />
            </Drawer>
          </Card>
          <Card>
            <OTable columns={Tcolumns} rows={dataSource} />
          </Card>
        </Col>
        {openReceive && (
          <Col span={8}>
            <Card>
              <h3>Stock Transfer Order Details</h3>
            </Card>
            <Card>
              <OTable columns={Rcolumns} rows={recieveDataSource} />
            </Card>
          </Col>
        )}
      </Row>
    </>
  );
};

export default TransferManagement;
