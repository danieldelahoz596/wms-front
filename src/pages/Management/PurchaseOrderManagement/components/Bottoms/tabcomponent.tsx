import { useState } from 'react';
import type { FC } from 'react';
import PODetailsBottom from '@/components/PurchaseOrder/Details';
import ItemsManagement from '@/components/PurchaseOrder/Items';
import { Radio, Card, Space } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { useModel } from '@umijs/max';

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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 5,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <h2>{selectedPO?.ponumber}</h2>
        <Radio.Group
          style={{ marginBottom: 8 }}
          size="large"
          value={selectedMode}
          onChange={handleChange}
        >
          <Space size={5}>
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
          <p>project content</p>
        )}
      </Card>
      {/* <Tabs
        defaultActiveKey="items"
        items={tabListNoTitle}
        tabBarExtraContent={<a href="#">P.O. #FORKS1114</a>}
        style={{ paddingLeft: 10, paddingRight: 10 }}
      /> */}
    </>
  );
};

export default TabComponent;
