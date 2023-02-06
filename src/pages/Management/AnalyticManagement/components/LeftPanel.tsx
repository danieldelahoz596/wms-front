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
import BoxIcon from '@/utils/icons/box';
import LeafIcon from '@/utils/icons/leaf';
import ArrowCircleUpIcon from '@/utils/icons/arrowCircleUp';
import ArrowCircleDownIcon from '@/utils/icons/arrowCircleDown';
import GraphLineUpIcon from '@/utils/icons/graphLineUp';

const rootSubmenuKeys = [
  'products',
  'inventory',
  'orders',
  'purchaseorders',
  'customers',
  'accounting',
];

const LeftPanel: React.FC = () => {
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState([location.pathname.split('/')[2]]);

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
        defaultSelectedKeys={[location.pathname]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        items={[
          {
            key: 'products',
            icon: <ProductsIcon style={{ fontSize: 16 }} />,
            label: 'Products',
            children: [
              {
                key: '/analytics/products/topsellers',
                icon: <ArrowCircleUpIcon style={{ fontSize: 16 }} />,
                label: <Link to="/analytics/products/topsellers">Top Sellers</Link>,
              },
              {
                key: '/analytics/products/worstsellers',
                icon: <ArrowCircleDownIcon style={{ fontSize: 16 }} />,
                label: <Link to="/analytics/products/worstsellers">Worst Sellers</Link>,
              },
              {
                key: '/analytics/products/yoygrowth',
                icon: <GraphLineUpIcon style={{ fontSize: 16 }} />,
                label: <Link to="/analytics/products/yoygrowth">Y-O-Y Growth</Link>,
              },
              {
                key: '/analytics/products/skuprofitability',
                icon: <BoxIcon style={{ fontSize: 16 }} />,
                label: <Link to="/analytics/products/skuprofitability">SKU Profitability</Link>,
              },
              {
                key: '/analytics/products/listingprofitability',
                icon: <LeafIcon style={{ fontSize: 16 }} />,
                label: (
                  <Link to="/analytics/products/trendingprofitability">Listing Profitability</Link>
                ),
              },
              {
                key: '/analytics/products/trendingprofitability',
                icon: <SalesIcon style={{ fontSize: 16 }} />,
                label: (
                  <Link to="/analytics/products/trendingprofitability">Trending Profitability</Link>
                ),
              },
            ],
          },
          {
            key: 'inventory',
            icon: <InventoryIcon style={{ fontSize: 16 }} />,
            label: 'Inventory',
            children: [
              {
                key: '/analytics/inventory/replenishmentalerts',
                icon: <UserOutlined style={{ fontSize: 16 }} />,
                label: (
                  <Link to="/analytics/inventory/replenishmentalerts">
                    Inventory Replenishment Alerts
                  </Link>
                ),
              },
              {
                key: '/analytics/inventory/criticalinventorylevels',
                icon: <UserOutlined style={{ fontSize: 16 }} />,
                label: (
                  <Link to="/analytics/inventory/criticalinventorylevels">
                    Inventory Replenishment Alerts
                  </Link>
                ),
              },
              {
                key: 'sub21',
                icon: <UserOutlined style={{ fontSize: 16 }} />,
                label: 'Test',
              },
            ],
          },
          {
            key: 'orders',
            icon: <OrdersIcon style={{ fontSize: 16 }} />,
            label: 'Orders',
            children: [
              {
                key: 'salesoverview',
                icon: <SalesIcon style={{ fontSize: 16 }} />,
                label: 'Sales Overview',
              },
              {
                key: 'biggesttickets',
                icon: <BiggestTicketsIcon style={{ fontSize: 16 }} />,
                label: 'Biggest Tickets',
              },
              {
                key: 'shipments',
                icon: <ShippingIcon style={{ fontSize: 16 }} />,
                label: 'Shipments',
              },
              {
                key: '/analytics/orders/historicalexports',
                icon: <SalesIcon style={{ fontSize: 16 }} />,
                label: <Link to="/analytics/orders/historicalexports">Historical Exports</Link>,
              },
            ],
          },
          {
            key: 'purchaseorders',
            icon: <OrdersIcon style={{ fontSize: 16 }} />,
            label: 'Purchase Orders',
            children: [
              {
                key: '/analytics/purchaseorders/historicalexports',
                icon: <SalesIcon style={{ fontSize: 16 }} />,
                label: (
                  <Link to="/analytics/purchaseorders/historicalexports">Historical Exports</Link>
                ),
              },
            ],
          },
          {
            key: 'customers',
            icon: <CustomersIcon style={{ fontSize: 16 }} />,
            label: 'Customers',
            children: [
              {
                key: 'sub51',
                icon: <BoxIcon style={{ fontSize: 16 }} />,
                label: 'Test',
              },
            ],
          },
          {
            key: 'accounting',
            icon: <AccountingIcon style={{ fontSize: 16 }} />,
            label: 'Accounting',
            children: [
              {
                key: '/analytics/accounting/shipmentsummary',
                icon: <ShippingIcon style={{ fontSize: 16 }} />,
                label: <Link to="/analytics/accounting/shipmentsummary">Shipment Summary</Link>,
              },
              {
                key: '/analytics/accounting/cogsbysku',
                icon: <UserOutlined style={{ fontSize: 16 }} />,
                label: <Link to="/analytics/accounting/cogsbysku">Cogs By SKU</Link>,
              },
              {
                key: '/analytics/accounting/salessummary',
                icon: <UserOutlined style={{ fontSize: 16 }} />,
                label: <Link to="/analytics/accounting/salessummary">Sales Summary</Link>,
              },
              {
                key: '/analytics/accounting/inventoryvalue',
                icon: <UserOutlined style={{ fontSize: 16 }} />,
                label: <Link to="/analytics/accounting/inventoryvalue">Inventory Value</Link>,
              },
            ],
          },
        ]}
      />
    </Sider>
  );
};

export default LeftPanel;
