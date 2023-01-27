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
import Myprofile from './Settings/myprofile';
import Companyinfo from './Settings/companyinfo';
import Useradministration from './Settings/useradministration';
import Historicalordersexports from './Analytics/Orders/historicalordersexports';
import Historicalpurchaseordersexports from './Analytics/PurchaseOrders/historicalpurchaseordersexports';
import Manageproducts from './Products/manageproducts';
import Createproducts from './Products/createproducts';
import Importproducts from './Products/importproducts';
import Exportproducts from './Products/exportproducts';


const { Sider, Content } = Layout;

const Help: React.FC = () => {

  const rootSubmenuKeys = ['main1', 'main2', 'main3', 'main4', 'main5'];
  const [openKeys, setOpenKeys] = useState(['main1']);
  const [selectKey, setSelectedKey] = useState('');

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
  else if (selectKey === 'dashboard_general') renderableContent = <Dashboard />
  else if (selectKey === 'products_manageproducts') renderableContent = <Manageproducts />
  else if (selectKey === 'products_createproducts') renderableContent = <Createproducts />
  else if (selectKey === 'products_importproducts') renderableContent = <Importproducts />
  else if (selectKey === 'products_exportproducts') renderableContent = <Exportproducts />
  else if (selectKey === 'analytics_orders_historicalexports') renderableContent = <Historicalordersexports />
  else if (selectKey === 'analytics_purchaseorders_historicalexports') renderableContent = <Historicalpurchaseordersexports />
  else if (selectKey === 'settings_myprofile') renderableContent = <Myprofile />
  else if (selectKey === 'settings_useradministration') renderableContent = <Useradministration />
  else if (selectKey === 'settings_companyinfo') renderableContent = <Companyinfo />;

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
                key: 'main6',
                icon: <AccountingIcon />,
                label: 'Customers',
                children: [
                  {
                    key: 'sub61',
                    icon: <UserOutlined />,
                    label: 'Test',
                  },
                ],
              },
              {
                key: 'main7',
                icon: <AccountingIcon />,
                label: 'Products',
                children: [
                  {
                    key: 'products_manageproducts',
                    icon: <AccountingIcon />,
                    label: (
                      <Link to="/help/products/manageproducts">How to Manage Products</Link>
                    ),
                  },
                  {
                    key: 'products_createproducts',
                    icon: <AccountingIcon />,
                    label: (
                      <Link to="/help/products/createproducts">How to Create a Product MANUALLY</Link>
                    ),
                  },
                  {
                    key: 'products_importproducts',
                    icon: <AccountingIcon />,
                    label: (
                      <Link to="/help/products/importproducts">How to Import Products</Link>
                    ),
                  },
                  {
                    key: 'products_exportproducts',
                    icon: <AccountingIcon />,
                    label: (
                      <Link to="/help/products/exportproducts">How to Export Products</Link>
                    ),
                  },
                ],
              },
              {
                key: 'main8',
                icon: <ShippingIcon />,
                label: 'Analytics',
                children: [
                  {
                    key: 'sub83',
                    icon: <OrdersIcon />,
                    label: 'Orders',
                    children: [
                      {
                        key: 'analytics_orders_historicalexports',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/orders/historicalsexports">Historical Exports</Link>
                        ),
                      },
                    ],
                  },
                  {
                    key: 'sub83',
                    icon: <OrdersIcon />,
                    label: 'Purchase Orders',
                    children: [
                      {
                        key: 'analytics_purchaseorders_historicalexports',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/purchaseorders/historicalexports">Historical Exports</Link>
                        ),
                      },
                    ],
                  },
                ],
              },
              {
                key: 'main9',
                icon: <BiggestTicketsIcon />,
                label: 'Settings',
                children: [
                  {
                    key: 'settings_myprofile',
                    icon: <SalesIcon />,
                    label: (
                      <Link to="/help/settings/myprofile">My Profile</Link>
                    ),
                  },
                  {
                    key: 'settings_useradministration',
                    icon: <SalesIcon />,
                    label: (
                      <Link to="/help/settings/useradministration">User Administration</Link>
                    ),
                  },
                  {
                    key: 'settings_companyinfo',
                    icon: <SalesIcon />,
                    label: (
                      <Link to="/help/settings/companyinfo">Company Info</Link>
                    ),
                  },
                ],
              },
              {
                key: 'main10',
                icon: <AccountingIcon />,
                label: 'Help',
                children: [
                  {
                    key: 'sub101',
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