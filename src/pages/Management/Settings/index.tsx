import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { SampleSplitter, cn } from '@/utils/components/SampleSplitter';
import { useResizable } from 'react-resizable-layout';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

import Vendors from './Vendors';
import Warehouses from './Warehouses';
import MyProfile from './MyProfile';
import CompanyInfo from './CompanyInfo';
import UserAdministration from './UserAdministration';
import POTemplates from './POTemplates';
import { history } from '@umijs/max';

const OrderManagement: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('Warehouses');

  let mainContent = null;
  if (activeMenu === 'warehouses') {
    mainContent = <Warehouses />;
  } else if (activeMenu === 'vendors') {
    mainContent = <Vendors />;
  } else if (activeMenu === 'myprofile') {
    mainContent = <MyProfile />;
  } else if (activeMenu === 'useradministration') {
    mainContent = <UserAdministration />;
  } else if (activeMenu === 'companyinfo') {
    mainContent = <CompanyInfo />;
  } else if (activeMenu === 'potemplates') {
    mainContent = <POTemplates />;
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

  useEffect(() => {
    setActiveMenu(history.location.pathname.replace('/settings/', ''));
  }, []);

  const handleMenuItemClick = ({ key }) => {
    history.push(`/settings/${key}`);
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
                  {
                    key: 'myprofile',
                    icon: <UserOutlined />,
                    label: 'My Profile',
                    onClick: handleMenuItemClick,
                  },
                  {
                    key: 'warehouses',
                    icon: <UserOutlined />,
                    label: 'Warehouses',
                    onClick: handleMenuItemClick,
                  },
                  {
                    key: 'vendors',
                    icon: <UserOutlined />,
                    label: 'Vendors',
                    onClick: handleMenuItemClick,
                  },
                  {
                    key: '6',
                    icon: <UserOutlined />,
                    label: 'Orderbots',
                    disabled: true,
                  },
                  {
                    key: '8',
                    icon: <UserOutlined />,
                    label: 'Packing Slip Templates',
                    disabled: true,
                  },
                  {
                    key: 'potemplates',
                    icon: <UserOutlined />,
                    label: 'P.O. Templates',
                    onClick: handleMenuItemClick,
                  },
                  {
                    key: 'useradministration',
                    icon: <VideoCameraOutlined />,
                    label: 'User Administration',
                    onClick: handleMenuItemClick,
                  },
                  {
                    key: 'companyinfo',
                    icon: <UserOutlined />,
                    label: 'Company Info',
                    onClick: handleMenuItemClick,
                  },
                ]}
                selectedKeys={[activeMenu]}
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
