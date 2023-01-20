import { Button, Layout, Card, Row, Col, Select } from 'antd';
import StockManagement from './StockManagement';
import TransferManagement from './TransferManagement';
import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { cn, SampleSplitter } from '@/utils/components/SampleSplitter';
import { useResizable } from 'react-resizable-layout';

const { Content } = Layout;

const InventoryManagement: React.FC = () => {
  const [stockTab, setStockTab] = useState(true);
  const [transferTab, settransferTab] = useState(false);

  const changeManagementTab = (tabName) => {
    if (tabName == 'stock') {
      setStockTab(true);
      settransferTab(false);
    } else if (tabName == 'transfer') {
      setStockTab(false);
      settransferTab(true);
    }
  };

  const {
    isDragging: isLeftDragging,
    position: LeftW,
    separatorProps: leftDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 250,
    min: 100,
  });

  return (
    <PageContainer
      title={false}
      className={'flex flex-column overflow-hidden'}
      header={{ breadcrumb: {} }}
      style={{ marginTop: '10px' }}
    >
      <Row style={{ marginBottom: '10px', marginLeft: '10px' }}>
        <Col span={24}>
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
      <div className={'flex grow'}>
        <div
          className={cn('shrink-0 contents', isLeftDragging && 'dragging')}
          style={{ width: LeftW }}
        >
          <div className="w-full">
            <Row gutter={[, 20]} style={{ marginLeft: '10px', marginRight: '10px' }}>
              <Select
                options={[{ value: 'warehouse', label: 'Shwoing 2 Warehouses' }]}
                style={{ width: '100%' }}
                defaultValue="warehouse"
              />
              <Select
                options={[{ value: 'status', label: '5 Statuses' }]}
                style={{ width: '100%' }}
                defaultValue="status"
              />
            </Row>
          </div>
        </div>
        <SampleSplitter isDragging={isLeftDragging} {...leftDragBarProps} />
        {stockTab && <StockManagement />}
        {transferTab && <TransferManagement />}
      </div>
    </PageContainer>
  );
};

export default InventoryManagement;
