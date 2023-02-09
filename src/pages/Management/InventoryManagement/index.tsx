import { PageContainer } from '@ant-design/pro-components';
import React, { useMemo, useState } from 'react';
import { Radio } from 'antd';
import StockManagement from './StockManagement';
import TransferManagement from './TransferManagement';

const InventoryManagement: React.FC = () => {
  const [stockTab, setStockTab] = useState<boolean>(true);
  const [transferTab, settransferTab] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState('stock');

  const handleChangeTarget = (value) => {
    setSelectedTab(value);
    if (value == 'stock') {
      setStockTab(true);
      settransferTab(false);
    } else if (value == 'transfer') {
      setStockTab(false);
      settransferTab(true);
    }
  };

  const tabButtons = useMemo(
    () => (
      <>
        <Radio.Group
          onChange={(e) => handleChangeTarget(e.target.value)}
          style={{ marginBottom: 8 }}
          value={selectedTab}
        >
          <Radio.Button value="stock">Stock</Radio.Button>
          <Radio.Button value="transfer">Transfer</Radio.Button>
        </Radio.Group>
        {/* <OButton btnText={'Stock'} className="mr-10" onClick={() => changeManagementTab('stock')} />
        <OButton btnText={'Transfers'} onClick={() => changeManagementTab('transfer')} /> */}
      </>
    ),
    [selectedTab],
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
