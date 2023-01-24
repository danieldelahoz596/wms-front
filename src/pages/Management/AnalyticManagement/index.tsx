import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import ProductsIcon from '@/utils/icons/products';
import InventoryIcon from '@/utils/icons/inventory';
import OrdersIcon from '@/utils/icons/orders';
import BiggestTicketsIcon from '@/utils/icons/biggestTickets';
import ShippingIcon from '@/utils/icons/shipping';
import SalesIcon from '@/utils/icons/sales';
import CustomersIcon from '@/utils/icons/customers';
import AccountingIcon from '@/utils/icons/accounting';

import { PageContainer } from '@ant-design/pro-components';
import HistoricalOrdersExports from './Orders/HistoricalExports';
import HistoricalPurchaseOrdersExports from './PurchaseOrders/HistoricalExports';
import React, { useState } from 'react';
import { SampleSplitter, cn } from '@/utils/components/SampleSplitter';
import { useResizable } from 'react-resizable-layout';
import { Link } from '@umijs/max';

const { Sider, Content } = Layout;

const AnalyticManagement: React.FC = () => {
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
  if (selectKey === 'sub34') renderableContent = <HistoricalOrdersExports />;
  else if (selectKey === 'sub41') renderableContent = <HistoricalPurchaseOrdersExports />;

  return (
    <PageContainer
      title={false}
      className={'flex flex-column overflow-hidden'}
      header={{ breadcrumb: {} }}
    >
      <Layout>
        <div className={'flex grow'}>
          <div
            className={cn('shrink-0 contents', isLeftDragging && 'dragging')}
            style={{ width: LeftW }}
          >
            <div className="w-full">
              <Sider width={LeftW} trigger={null}>
                <div className="logo" />
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
                          label: (
                            <Link to="/analytics/orders/historicalexports">Historical Exports</Link>
                          ),
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
                            <Link to="/analytics/purchaseorders/historicalexports">
                              Historical Exports
                            </Link>
                          ),
                        },
                      ],
                    },
                    {
                      key: 'main41',
                      icon: <CustomersIcon />,
                      label: 'Customers',
                      children: [
                        {
                          key: 'sub410',
                          icon: <UserOutlined />,
                          label: 'Test',
                        },
                      ],
                    },
                    {
                      key: 'main5',
                      icon: <AccountingIcon />,
                      label: 'Accounting',
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
            </div>
          </div>

          <SampleSplitter isDragging={isLeftDragging} {...leftDragBarProps} />

          <div className="w-full flex flex-column h-screen">
            <div className="horizon-content">
              <Layout className="site-layout">
                <Content className="site-layout-background">{renderableContent}</Content>
              </Layout>
            </div>
          </div>
        </div>
      </Layout>
    </PageContainer>
  );
};

export default AnalyticManagement;
