import StockManagement from './StockManagement';
import TransferManagement from './TransferManagement';
import React, { useState, useMemo } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';

const InventoryManagement: React.FC = () => {
  const [stockTab, setStockTab] = useState<boolean>(true);
  const [transferTab, settransferTab] = useState<boolean>(false);

  const changeManagementTab = (tabName) => {
    if (tabName == 'stock') {
      setStockTab(true);
      settransferTab(false);
    } else if (tabName == 'transfer') {
      setStockTab(false);
      settransferTab(true);
    }
  };

  const tabButtons = useMemo(
    () => (
      <>
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
      </>
    ),
    [],
  );

  return (
    <PageContainer
      title={false}
      className={'flex flex-column overflow-hidden'}
      header={{ breadcrumb: {} }}
      style={{ marginTop: '10px' }}
    >
      <div className={'flex grow'}>
        {stockTab && <StockManagement tabButtons={tabButtons} />}
        {transferTab && <TransferManagement tabButtons={tabButtons} />}
      </div>
    </PageContainer>
  );
};

export default InventoryManagement;
