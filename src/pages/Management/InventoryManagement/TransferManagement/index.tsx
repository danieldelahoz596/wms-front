import { Button, Input, Drawer, Card, Row, Col, Select, Checkbox, Table } from 'antd';
import React, { useState } from 'react';
import { data, historyData, recieveData } from './components/structure';
import { OTable } from '@/components/Globals/OTable';
import { CheckCircleFilled, EditTwoTone, LikeFilled, PlayCircleFilled } from '@ant-design/icons';
const { Search } = Input;

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
    render: (status) =>
      status === 'Complete' ? (
        <LikeFilled style={{ color: 'red', fontSize: 15 }} />
      ) : (
        <PlayCircleFilled style={{ color: '#00FF00', fontSize: 15 }} />
      ),
    align: 'center',
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
    render: () => <EditTwoTone />,
    align: 'center',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'noquantitytes',
    align: 'center',
  },
  {
    title: 'Recieved Location',
    dataIndex: 'recieved_location',
    key: 'recieved_location',
  },
];
interface ITransferManagement {
  tabButtons: React.ReactNode;
}

const TransferManagement: React.FC<ITransferManagement> = ({ tabButtons }) => {
  const [dataSource, setDataSource] = useState(data);
  const [historyDataSource, sethistoryDataSource] = useState(historyData);
  const [recieveDataSource, setrecieveDataSource] = useState(recieveData);
  const [selectedTranster, setSelectedTranster] = useState(null);

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
      <Row gutter={20} style={{ width: '100%' }}>
        <Col span={16}>
          <Row justify="space-between">
            <Col span={12} style={{ paddingLeft: 10 }}>
              {tabButtons}
            </Col>
            <Col span={12}>
              <Row style={{ marginBottom: '10px' }} gutter={10}>
                <Col>
                  <Checkbox value="external_fba">External FBA</Checkbox>
                </Col>
                <Col>
                  <Select
                    options={[{ value: 'source_warehouse', label: '37 source Warehouses' }]}
                    defaultValue="source_warehouse"
                    size="small"
                    style={{ width: '200px' }}
                  />
                </Col>
                <Col>
                  <Select
                    options={[{ value: 'dest_warehouse', label: '37 Dest. Warehouses' }]}
                    defaultValue="dest_warehouse"
                    size="small"
                    style={{ width: '100px' }}
                  />
                </Col>
                <Col>
                  <Select
                    options={[{ value: 'sto_statuses', label: '7 STO Statuses' }]}
                    defaultValue="sto_statuses"
                    size="small"
                    style={{ width: '100px' }}
                  />
                </Col>
                <Col>
                  <Select
                    options={[{ value: 'fba_statuses', label: '9 FBA Statuses' }]}
                    defaultValue="fba_statuses"
                    size="small"
                    style={{ width: '100px' }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Card style={{ marginTop: 10, borderRadius: 10, marginLeft: 10, width: '100%' }}>
            <Row gutter={10} align="middle">
              <Col>
                <div style={{ width: 300, display: 'inline-block' }}>
                  <Search
                    placeholder="Enter Order#, SKU or product name..."
                    onSearch={() => console.log('Inactive')}
                    enterButton
                    size="small"
                  />
                </div>
              </Col>
              <Col>
                <Button
                  type="primary"
                  onClick={showReceive}
                  disabled={!(selectedTranster?.status === 'pending_receiving')}
                >
                  Receive
                </Button>
              </Col>
              <Col>
                <Button
                  type="primary"
                  onClick={showHistory}
                  disabled={!(selectedTranster?.status === 'pending_receiving')}
                >
                  History
                </Button>
              </Col>
            </Row>
            <Drawer
              title="History For Stock Transfer Order "
              width={800}
              placement="right"
              onClose={closeHistory}
              open={openHistory}
            >
              <OTable columns={Hcolumns} rows={historyDataSource} />
            </Drawer>
            <Table
              columns={Tcolumns}
              dataSource={dataSource}
              style={{ marginTop: 15 }}
              onRow={(record) => {
                return {
                  onClick: () => {
                    if (record.key === selectedTranster?.key) setSelectedTranster(null);
                    else setSelectedTranster(record);
                  }, // click row
                };
              }}
              rowSelection={{
                selectedRowKeys: selectedTranster ? [selectedTranster.key] : [],
                hideSelectAll: true,
                columnWidth: 0, // Set the width to 0
                renderCell: () => '', // Render nothing inside
              }}
            />
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
