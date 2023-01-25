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
      <div className={'flex grow'}>
        {stockTab && <StockManagement changeManagementTab={changeManagementTab} />}
        {transferTab && <TransferManagement changeManagementTab={changeManagementTab} />}
      </div>
    </PageContainer>
  );
};

export default InventoryManagement;
