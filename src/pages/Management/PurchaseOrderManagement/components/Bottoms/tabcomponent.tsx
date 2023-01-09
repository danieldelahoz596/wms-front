import { Card } from 'antd';
import type { FC } from 'react';
import { useState } from 'react';
import HistoryManagement from '@/components/PurchaseOrder/History';
import PODetailsBottom from '@/components/PurchaseOrder/Details';

const tabListNoTitle = [
  {
    key: 'items',
    tab: 'Items',
  },
  {
    key: 'details',
    tab: 'Details',
  },
  {
    key: 'history',
    tab: 'History',
  },
];

interface ITabComponent{
  POProductItems: any[]
}

const TabComponent: FC<ITabComponent> = ({ POProductItems }) => {
  const [activeKey, setActiveKey] = useState<string>('items');
  const onTabChange = (key: string) => {
    setActiveKey(key);
  };

  const contentListNoTitle: Record<string, React.ReactNode> = {
    items: <HistoryManagement data={POProductItems} />,
    details: <PODetailsBottom />,
    history: <p>project content</p>,
  };

  return (
    <>
      <Card
        size="small"
        style={{ width: '100%' }}
        tabList={tabListNoTitle}
        activeTabKey={activeKey}
        tabBarExtraContent={<a href="#">P.O. #FORKS1114</a>}
        onTabChange={(key: any) => {
          onTabChange(key);
        }}
        tabProps={{ size: 'small' }}
      >
        {contentListNoTitle[activeKey]}
      </Card>
    </>
  );
};

export default TabComponent;
