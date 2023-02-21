import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { SampleSplitter, cn } from '@/utils/components/SampleSplitter';
import { useResizable } from 'react-resizable-layout';
import { ContainerOutlined, RobotFilled, SnippetsFilled } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

import Vendors from './Vendors';
import Warehouses from './Warehouses';
import MyProfile from './MyProfile';
import CompanyInfo from './CompanyInfo';
import UserAdministration from './UserAdministration';
import POTemplates from './POTemplates';
import { history } from '@umijs/max';
import ProfileIcon from '@/utils/icons/profile';
import CustomersIcon from '@/utils/icons/customers';
import CompanyIcon from '@/utils/icons/company';
import WarehouseIcon from '@/utils/icons/warehouse';
import VendorIcon from '@/utils/icons/vendor';
import OrderBots from './Orderbots';

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
  } else if (activeMenu === 'orderbots') {
    mainContent = <OrderBots />;
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
                    icon: <ProfileIcon style={{ fontSize: 15 }} />,
                    label: 'My Profile',
                    onClick: handleMenuItemClick,
                  },
                  {
                    key: 'warehouses',
                    icon: <WarehouseIcon style={{ fontSize: 15 }} />,
                    label: 'Warehouses',
                    onClick: handleMenuItemClick,
                  },
                  {
                    key: 'vendors',
                    icon: <VendorIcon style={{ fontSize: 15 }} />,
                    label: 'Vendors',
                    onClick: handleMenuItemClick,
                  },
                  {
                    key: 'orderbots',
                    icon: <RobotFilled style={{ fontSize: 15 }} />,
                    label: 'Orderbots',
                    onClick: handleMenuItemClick,
                  },
                  {
                    key: 'packingsliptemplates',
                    icon: <SnippetsFilled style={{ fontSize: 15 }} />,
                    label: 'Packing Slip Templates',
                    disabled: true,
                  },
                  {
                    key: 'potemplates',
                    icon: <ContainerOutlined style={{ fontSize: 15 }} />,
                    label: 'P.O. Templates',
                    onClick: handleMenuItemClick,
                  },
                  {
                    key: 'useradministration',
                    icon: <CustomersIcon style={{ fontSize: 15 }} />,
                    label: 'User Administration',
                    onClick: handleMenuItemClick,
                  },
                  {
                    key: 'companyinfo',
                    icon: <CompanyIcon style={{ fontSize: 12 }} />,
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
