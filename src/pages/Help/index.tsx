import { Layout, Menu } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { useResizable } from 'react-resizable-layout';
import { SampleSplitter, cn } from '@/utils/components/SampleSplitter';

import { BellOutlined, UserOutlined } from '@ant-design/icons';
import ProductsIcon from '@/utils/icons/products';
import InventoryIcon from '@/utils/icons/inventory';
import OrdersIcon from '@/utils/icons/orders';
import BiggestTicketsIcon from '@/utils/icons/biggestTickets';
import ShippingIcon from '@/utils/icons/shipping';
import SalesIcon from '@/utils/icons/sales';
import CustomersIcon from '@/utils/icons/customers';
import AccountingIcon from '@/utils/icons/accounting';

import { Link } from '@umijs/max';
import type { MenuProps } from 'antd';
import React, { useState } from 'react';

import SkuAlerts from './Dashboard/skualerts';
import Dashboard from './Dashboard/dashboard';


const { Sider, Content } = Layout;

const Help: React.FC = () => {

  const rootSubmenuKeys = ['main1', 'main2', 'main3', 'main4', 'main5'];
  const [openKeys, setOpenKeys] = useState(['main3']);
  const [selectKey, setSelectedKey] = useState('sub34');

  const {
    isDragging: isLeftDragging,
    position: LeftW,
    separatorProps: leftDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 250,
    min: 100,
  });

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const handleSelect = ({ key }) => {
    setSelectedKey(key);
  };

  let renderableContent = null;
  if (selectKey === 'dashboard_skualerts') renderableContent = <SkuAlerts />
  else if (selectKey === 'dashboard_general') renderableContent = <Dashboard />;;

  return (
    <PageContainer title={false} className={'flex flex-column overflow-hidden'}>
      <div className={'flex grow'}>
        <Sider width={LeftW} trigger={null}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['main3', selectKey]}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            onSelect={handleSelect}
            items={[
              {
                key: 'main1',
                icon: <ProductsIcon />,
                label: 'Dashboard',
                children: [
                  {
                    key: 'dashboard_general',
                    icon: <BellOutlined />,
                    label: (
                      <Link to="/help/dashboard/general">Dashboard</Link>
                    ),
                  },
                  {
                    key: 'dashboard_skualerts',
                    icon: <BellOutlined />,
                    label: (
                      <Link to="/help/dashboard/skualerts">SKU Alerts</Link>
                    ),
                  },
                ],
              },
              {
                key: 'main2',
                icon: <InventoryIcon />,
                label: 'Orders',
                children: [
                  {
                    key: 'sub21',
                    icon: <UserOutlined />,
                    label: 'Test',
                  },
                ],
              },
              {
                key: 'main3',
                icon: <OrdersIcon />,
                label: 'Inventory',
                children: [
                  {
                    key: 'sub31',
                    icon: <SalesIcon />,
                    label: 'Sales Overview',
                  },
                  {
                    key: 'sub32',
                    icon: <BiggestTicketsIcon />,
                    label: 'Biggest Tickets',
                  },
                  {
                    key: 'sub33',
                    icon: <ShippingIcon />,
                    label: 'Shipments',
                  },
                  {
                    key: 'sub34',
                    icon: <SalesIcon />,
                    label: (
                      <Link to="/Analytics/Orders/HistoricalExports">Historical Exports</Link>
                    ),
                  },
                ],
              },
              {
                key: 'main4',
                icon: <CustomersIcon />,
                label: 'Purchasing',
                children: [
                  {
                    key: 'sub41',
                    icon: <UserOutlined />,
                    label: 'Test',
                  },
                ],
              },
              {
                key: 'main5',
                icon: <AccountingIcon />,
                label: 'Shipments',
                children: [
                  {
                    key: 'sub51',
                    icon: <UserOutlined />,
                    label: 'Test',
                  },
                ],
              },
              {
                key: 'main5',
                icon: <AccountingIcon />,
                label: 'Customers',
                children: [
                  {
                    key: 'sub51',
                    icon: <UserOutlined />,
                    label: 'Test',
                  },
                ],
              },
              {
                key: 'main5',
                icon: <AccountingIcon />,
                label: 'Products',
                children: [
                  {
                    key: 'sub51',
                    icon: <UserOutlined />,
                    label: 'Test',
                  },
                ],
              },
              {
                key: 'main5',
                icon: <AccountingIcon />,
                label: 'Analytics',
                children: [
                  {
                    key: 'sub51',
                    icon: <UserOutlined />,
                    label: 'Test',
                  },
                ],
              },
              {
                key: 'main5',
                icon: <AccountingIcon />,
                label: 'Settings',
                children: [
                  {
                    key: 'sub51',
                    icon: <UserOutlined />,
                    label: 'Test',
                  },
                ],
              },
              {
                key: 'main5',
                icon: <AccountingIcon />,
                label: 'Help',
                children: [
                  {
                    key: 'sub51',
                    icon: <UserOutlined />,
                    label: 'Test',
                  },
                ],
              },
            ]}
          />
        </Sider>
        
        <SampleSplitter isDragging={isLeftDragging} {...leftDragBarProps} />

        {renderableContent}

        {/* <div className="w-full flex flex-column h-screen">
          <div className="horizon-content">
            <Layout className="site-layout">
              <Content className="site-layout-background">{renderableContent}</Content>
            </Layout>
          </div>
        </div> */}
      </div>     
    </PageContainer>
  );
};

export default Help;