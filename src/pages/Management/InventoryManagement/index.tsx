import { Button, Row, Col } from 'antd';
import StockManagement from './StockManagement';
import TransferManagement from './TransferManagement';
import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';

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
        {stockTab && <StockManagement />}
        {transferTab && <TransferManagement />}
      </div>
    </PageContainer>
  );
};

export default InventoryManagement;
