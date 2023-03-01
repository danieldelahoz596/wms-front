import { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { history, useLocation } from '@umijs/max';
const { Sider } = Layout;

import { ContainerOutlined, RobotFilled, SnippetsFilled } from '@ant-design/icons';
import CompanyIcon from '@/utils/icons/company';
import CustomersIcon from '@/utils/icons/customers';
import ProfileIcon from '@/utils/icons/profile';
import VendorIcon from '@/utils/icons/vendor';
import WarehouseIcon from '@/utils/icons/warehouse';

const SidePanel: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('Warehouses');
  const { pathname } = useLocation();

  useEffect(() => {
    setActiveMenu(pathname.replace('/settings/', ''));
  }, [pathname]);

  const handleMenuItemClick = ({ key }) => {
    history.push(`/settings/${key}`);
  };

  return (
    <Sider>
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
  );
};

export default SidePanel;
