import { PageContainer } from '@ant-design/pro-components';
import { SampleSplitter, cn } from '@/utils/components/SampleSplitter';
import { useResizable } from 'react-resizable-layout';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
const { Sider } = Layout;

import Vendors from './Vendors';
import Warehouses from './Warehouses';
import { history } from '@umijs/max';

const OrderManagement: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('Warehouses');

  let mainContent = null;
  if (activeMenu === 'Warehouses') {
    mainContent = <Warehouses />;
  } else if (activeMenu === 'Vendors') {
    mainContent = <Vendors />;
  } else {
    mainContent = <Vendors />;
  }

  const {
    isDragging: isLeftDragging,
    position: LeftW,
    splitterProps: leftDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 220,
    min: 50,
  });

  const handleMenuItemClick = ({ key }) => {
    history.push(`/Settings/${key}`);
  };

  return (
    <PageContainer
      title={false}
      className={'flex flex-column overflow-hidden'}
      header={{ breadcrumb: {} }}
    >
      <div className={'flex grow'}>
        <div
          className={cn('shrink-0 contents', isLeftDragging && 'dragging')}
          style={{ width: LeftW }}
        >
          <div className="w-full">
            <Sider width={220} trigger={null}>
              <Menu
                defaultSelectedKeys={[activeMenu]}
                onClick={(_item) => setActiveMenu(_item.key)}
                items={[
                  // {
                  //   key: '1',
                  //   icon: <UserOutlined />,
                  //   label: 'My Profile',
                  // },
                  {
                    key: 'Warehouses',
                    icon: <UserOutlined />,
                    label: 'Warehouses',
                    onClick: handleMenuItemClick,
                  },
                  // {
                  //   key: '4',
                  //   icon: <UserOutlined />,
                  //   label: 'Shipping Providers',
                  // },
                  {
                    key: 'Vendors',
                    icon: <UserOutlined />,
                    label: 'Vendors',
                    onClick: handleMenuItemClick,
                  },
                  // {
                  //   key: '6',
                  //   icon: <UserOutlined />,
                  //   label: 'Orderbots',
                  // },
                  // {
                  //   key: '8',
                  //   icon: <UserOutlined />,
                  //   label: 'Packing Slip Templates',
                  // },
                  // {
                  //   key: '9',
                  //   icon: <UserOutlined />,
                  //   label: 'P.O. Templates',
                  // },
                  // {
                  //   key: '10',
                  //   icon: <VideoCameraOutlined />,
                  //   label: 'User Administration',
                  // },
                  // {
                  //   key: '11',
                  //   icon: <UserOutlined />,
                  //   label: 'Skubana Apps',
                  // },
                  // {
                  //   key: '12',
                  //   icon: <UserOutlined />,
                  //   label: 'Company Info',
                  // },
                  // {
                  //   key: '13',
                  //   icon: <UserOutlined />,
                  //   label: 'Billing Info',
                  // },
                ]}
              />
            </Sider>
          </div>
        </div>
        <SampleSplitter isDragging={isLeftDragging} {...leftDragBarProps} />
        {mainContent}
      </div>
    </PageContainer>
  );
};

export default OrderManagement;
