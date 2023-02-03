import { useState } from 'react';
import { Link, useLocation } from '@umijs/max';
import Sider from 'antd/es/layout/Sider';
import { Menu } from 'antd';
import AccountingIcon from '@/utils/icons/accounting';
import BiggestTicketsIcon from '@/utils/icons/biggestTickets';
import CustomersIcon from '@/utils/icons/customers';
import InventoryIcon from '@/utils/icons/inventory';
import OrdersIcon from '@/utils/icons/orders';
import ProductsIcon from '@/utils/icons/products';
import SalesIcon from '@/utils/icons/sales';
import ShippingIcon from '@/utils/icons/shipping';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd/es/menu';
import { useEffect } from 'react';

const rootSubmenuKeys = ['main1', 'main2', 'main3', 'main4', 'main5', 'main6'];

const LeftPanel: React.FC = () => {
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKey, setSelectedKey] = useState(null);

  useEffect(() => {
    switch (location.pathname) {
      case '/analytics/orders/historicalexports':
        setOpenKeys(['main3']);
        setSelectedKey('sub34');
        break;
      case '/analytics/purchaseorders/historicalexports':
        setOpenKeys(['main4']);
        setSelectedKey('sub41');
        break;
    }
  }, [location.pathname]);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Sider width="100%" trigger={null}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['main3', selectedKey]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onSelect={({ key }) => setSelectedKey(key)}
        selectedKeys={[selectedKey]}
        items={[
          {
            key: 'main1',
            icon: <ProductsIcon />,
            label: 'Products',
            children: [
              {
                key: 'sub11',
                icon: <UserOutlined />,
                label: 'Test',
              },
            ],
          },
          {
            key: 'main2',
            icon: <InventoryIcon />,
            label: 'Inventory',
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
            label: 'Orders',
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
                label: <Link to="/analytics/orders/historicalexports">Historical Exports</Link>,
              },
            ],
          },
          {
            key: 'main4',
            icon: <OrdersIcon />,
            label: 'Purchase Orders',
            children: [
              {
                key: 'sub41',
                icon: <SalesIcon />,
                label: (
                  <Link to="/analytics/purchaseorders/historicalexports">Historical Exports</Link>
                ),
              },
            ],
          },
          {
            key: 'main5',
            icon: <CustomersIcon />,
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
            key: 'main6',
            icon: <AccountingIcon />,
            label: 'Accounting',
            children: [
              {
                key: 'sub61',
                icon: <UserOutlined />,
                label: 'Test',
              },
            ],
          },
        ]}
      />
    </Sider>
  );
};

export default LeftPanel;
