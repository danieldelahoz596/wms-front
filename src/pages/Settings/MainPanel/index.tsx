import { useLocation } from '@umijs/max';
import { useEffect, useState } from 'react';
import CompanyInfo from './CompanyInfo';
import MyProfile from './MyProfile';
import OrderBots from './Orderbots';
import POTemplates from './POTemplates';
import UserAdministration from './UserAdministration';
import Vendors from './Vendors';
import Warehouses from './Warehouses';

const MainPanel: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('Warehouses');
  const { pathname } = useLocation();

  useEffect(() => {
    setActiveMenu(pathname.replace('/settings/', ''));
  }, [pathname]);

  return (
    <div className="main-panel">
      {activeMenu === 'warehouses' ? (
        <Warehouses />
      ) : activeMenu === 'vendors' ? (
        <Vendors />
      ) : activeMenu === 'myprofile' ? (
        <MyProfile />
      ) : activeMenu === 'useradministration' ? (
        <UserAdministration />
      ) : activeMenu === 'companyinfo' ? (
        <CompanyInfo />
      ) : activeMenu === 'potemplates' ? (
        <POTemplates />
      ) : activeMenu === 'orderbots' ? (
        <OrderBots />
      ) : (
        <MyProfile />
      )}
    </div>
  );
};

export default MainPanel;
