import { Button, Layout, Card, Row, Col } from 'antd';
import StockManagement from './StockManagement';
import TransferManagement from './TransferManagement';
import React, { useState } from 'react';

const { Content } = Layout;

const InventoryManagement: React.FC = () => {
  const [stockTab, setStockTab] = useState(true);
  const [transferTab, settransferTab] = useState(false);

  const changeManagementTab = (tabName) => {
    if(tabName == 'stock'){
      setStockTab(true);
      settransferTab(false);
    } else if(tabName == 'transfer'){
      setStockTab(false);
      settransferTab(true);
    }
  };

  return (
    <Layout className="site-layout">
      <Content className="site-layout-background">
          <Row>
            <Col span={24}>
              <Button type="dashed" style={{ marginRight: '10px' }} onClick={() => changeManagementTab('stock')}>STOCK</Button>
              <Button type="dashed" onClick={() => changeManagementTab('transfer')}>TRANSFERS</Button>
            </Col>
          </Row>
          <div style={{ marginTop: '30px' }}>
            {stockTab && <StockManagement />}
            {transferTab && <TransferManagement />}
          </div>
      </Content>
    </Layout>
  );
};

export default InventoryManagement;
