import PODetails from '@/pages/PurchaseOrders/BottomPanel/PODetails';
import PoItemHistory from '@/pages/PurchaseOrders/BottomPanel/PoItemHistory';
import ItemsManagement from '@/pages/PurchaseOrders/BottomPanel/ItemsManagement';
import { useModel } from '@umijs/max';
import type { RadioChangeEvent } from 'antd';
import { Card, Radio, Space } from 'antd';
import { useState } from 'react';

const BottomPanel = () => {
  const [selectedMode, setSelectedMode] = useState('items');
  const { selectedPO } = useModel('po');

  const handleChange = (e: RadioChangeEvent) => {
    setSelectedMode(e.target.value);
  };

  return (
    <>
      <div className="title-row space-between">
        <h1 className="page-title">P.O. #{selectedPO.order_number}</h1>
        <Radio.Group size="small" buttonStyle="solid" value={selectedMode} onChange={handleChange}>
          <Space size={HORIZONTAL_SPACE_SIZE}>
            <Radio.Button value="items">Items</Radio.Button>
            <Radio.Button value="details">Details</Radio.Button>
            <Radio.Button value="history">History</Radio.Button>
          </Space>
        </Radio.Group>
      </div>
      <Card className="content-box">
        {selectedMode === 'items' ? <ItemsManagement /> : selectedMode === 'details' ? <PODetails /> : <PoItemHistory />}
      </Card>
    </>
  );
};

export default BottomPanel;
