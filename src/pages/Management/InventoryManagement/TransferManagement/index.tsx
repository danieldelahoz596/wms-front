import { Button, Input, Card, Row, Col, Select, Checkbox, Table } from 'antd';
import React, { useState } from 'react';
import { data, historyData } from './components/structure';
import { CheckCircleFilled, EditTwoTone, PlayCircleFilled } from '@ant-design/icons';
import TransferHistoryModal from '@/components/Modals/Inventory/TransferHistory';
import { modalType } from '@/utils/helpers/types';
import { useResizable } from 'react-resizable-layout';
import { cn, SampleSplitter } from '@/utils/components/SampleSplitter';
import TransferDetails from './components/RightPanel';
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
interface ITransferManagement {
  tabButtons: React.ReactNode;
}

const TransferManagement: React.FC<ITransferManagement> = ({ tabButtons }) => {
  const [currentModal, setCurrentModal] = useState<modalType>(modalType.Close);
  const [dataSource, setDataSource] = useState(data);
  const [historyDataSource, sethistoryDataSource] = useState(historyData);
  const [selectedTranster, setSelectedTranster] = useState(null);

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

  const showHistory = () => {
    setCurrentModal(modalType.History);
  };

  return (
    <>
      <div className="w-full flex flex-column h-screen">
        <div className="horizon-content">
          <div style={{ width: '100%' }}>
            <Row justify="space-between" style={{ width: '100%' }}>
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
                    disabled={!(selectedTranster?.status === 'pending_receiving')}
                  >
                    Receive
                  </Button>
                </Col>
                <Col>
                  <Button type="primary" onClick={showHistory}>
                    History
                  </Button>
                </Col>
              </Row>

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
          </div>
        </div>
      </div>
      <SampleSplitter isDragging={isRightDragging} {...rightDragBarProps} />
      <div
        className={cn('shrink-0 contents', isRightDragging && 'dragging')}
        style={{ width: RightW }}
      >
        <div className="w-full">
          <TransferDetails />
        </div>
      </div>

      <TransferHistoryModal
        isOpen={currentModal === modalType.History}
        onClose={() => setCurrentModal(modalType.Close)}
        dataSource={historyDataSource}
      />
    </>
  );
};

export default TransferManagement;
