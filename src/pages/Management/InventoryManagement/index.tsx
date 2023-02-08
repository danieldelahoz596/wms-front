import { OButton } from '@/components/Globals/OButton';
import { PageContainer } from '@ant-design/pro-components';
import React, { useMemo, useState } from 'react';
import StockManagement from './StockManagement';
import TransferManagement from './TransferManagement';

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
        <OButton btnText={'Stock'} className="mr-10" onClick={() => changeManagementTab('stock')} />
        <OButton btnText={'Transfers'} onClick={() => changeManagementTab('transfer')} />
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
