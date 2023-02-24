import PODetailsBottom from '@/pages/PurchaseOrders/components/Details';
import PoItemHistoryModal from '@/pages/PurchaseOrders/components/History';
import ItemsManagement from '@/pages/PurchaseOrders/components/Items';
import { useModel } from '@umijs/max';
import type { RadioChangeEvent } from 'antd';
import { Card, Radio, Space } from 'antd';
import type { FC } from 'react';
import { useState } from 'react';

interface ITabComponent {
  POProductItems: any[];
}

const TabComponent: FC<ITabComponent> = ({ POProductItems }) => {
  const [selectedMode, setSelectedMode] = useState('items');
  const { selectedPO } = useModel('po');

  const handleChange = (e: RadioChangeEvent) => {
    setSelectedMode(e.target.value);
  };

  return (
    <>
      <div className="space-between" style={{ margin: '5px 5px 0 5px' }}>
        <h2>P.O. #{selectedPO?.ponumber}</h2>
        <Radio.Group size="small" buttonStyle="solid" value={selectedMode} onChange={handleChange}>
          <Space size={2}>
            <Radio.Button value="items">Items</Radio.Button>
            <Radio.Button value="details">Details</Radio.Button>
            <Radio.Button value="history">History</Radio.Button>
          </Space>
        </Radio.Group>
      </div>
      <Card>
        {selectedMode === 'items' ? (
          <ItemsManagement data={POProductItems} />
        ) : selectedMode === 'details' ? (
          <PODetailsBottom />
        ) : (
          <PoItemHistoryModal />
        )}
      </Card>
    </>
  );
};

export default TabComponent;
