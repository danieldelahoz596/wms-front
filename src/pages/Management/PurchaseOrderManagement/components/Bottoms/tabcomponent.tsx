import PODetailsBottom from '@/components/PurchaseOrder/Details';
import ItemsManagement from '@/components/PurchaseOrder/Items';
import { Tabs } from 'antd';
import type { FC } from 'react';

interface ITabComponent {
  POProductItems: any[];
}

const TabComponent: FC<ITabComponent> = ({ POProductItems }) => {
  const tabListNoTitle = [
    {
      key: 'items',
      label: 'Items',
      children: <ItemsManagement data={POProductItems} />,
    },
    {
      key: 'details',
      label: 'Details',
      children: <PODetailsBottom />,
    },
    {
      key: 'history',
      label: 'History',
      children: <p>project content</p>,
    },
  ];

  return (
    <Tabs
      defaultActiveKey="items"
      items={tabListNoTitle}
      tabBarExtraContent={<a href="#">P.O. #FORKS1114</a>}
      style={{ paddingLeft: 10, paddingRight: 10 }}
    />
  );
};

export default TabComponent;
