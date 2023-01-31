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

// Products
import Products from './Products/products';
import Manageproducts from './Products/manageproducts';
import CreateCoreProduct from './Products/createcoreproduct';
import CreateBundleKit from './Products/createbundlekit';
import CreateProductVariations from './Products/createproductvariations';
import Importproducts from './Products/importproducts';
import ImportVendorProducts from './Products/importvendorproducts';
import ImportSkuAdjustments from './Products/importskuadjustments';



import Exportproducts from './Products/exportproducts';
import Searchproducts from './Products/searchproducts';
import Customproductfields from './Products/customproductfields';

// Customers
import Searchcustomers from './Customers/searchcustomers';
import Customersmodule from './Customers/customersmodule';
import Exportcustomerphonenumbers from './Customers/exportcustomerphonenumbers';
import Cancelorders from './Orders/cancelorders';
import Orders from './Orders/orders';



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
  else if (selectKey === 'products_general') renderableContent = <Products />;
  else if (selectKey === 'products_manageproducts') renderableContent = <Manageproducts />
  else if (selectKey === 'products_create_coreproduct') renderableContent = <CreateCoreProduct />
  else if (selectKey === 'products_create_bundlekit') renderableContent = <CreateBundleKit />
  else if (selectKey === 'products_create_productvariations') renderableContent = <CreateProductVariations />
  else if (selectKey === 'products_importproducts') renderableContent = <Importproducts />
  else if (selectKey === 'products_importvendorproducts') renderableContent = <ImportVendorProducts />
  else if (selectKey === 'products_importskuadjustments') renderableContent = <ImportSkuAdjustments />
  else if (selectKey === 'products_exportproducts') renderableContent = <Exportproducts />
  else if (selectKey === 'products_searchproducts') renderableContent = <Searchproducts />
  else if (selectKey === 'products_customproductfields') renderableContent = <Customproductfields />
  else if (selectKey === 'customers_searchcustomers') renderableContent = <Searchcustomers />
  else if (selectKey === 'customers_customersmodule') renderableContent = <Customersmodule />
  else if (selectKey === 'customers_exportcustomerphonenumbers') renderableContent = <Exportcustomerphonenumbers />
  else if (selectKey === 'analytics_orders_historicalexports') renderableContent = <Historicalordersexports />
  else if (selectKey === 'analytics_purchaseorders_historicalexports') renderableContent = <Historicalpurchaseordersexports />
  else if (selectKey === 'settings_myprofile') renderableContent = <Myprofile />
  else if (selectKey === 'settings_useradministration') renderableContent = <Useradministration />
  else if (selectKey === 'settings_companyinfo') renderableContent = <Companyinfo />;
  else if (selectKey === 'orders_cancelorders') renderableContent = <Cancelorders />;
  else if (selectKey === 'orders_general') renderableContent = <Orders />;

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
                    key: 'orders_general',
                    icon: <AccountingIcon />,
                    label: (
                      <Link to="/help/orders/general">Orders</Link>
                    ),
                  },
                  {
                    key: 'orders_manage',
                    icon: <AccountingIcon />,
                    label: 'How to Manage Orders',                      
                    children: [
                      {
                        key: 'orders_cancelorders',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/orders/cancelorders">Cancel Order</Link>
                        ),
                      },
                      {
                        key: 'orders_mergeorders',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/orders/mergeorders">Merge Orders</Link>
                        ),
                      },
                      {
                        key: 'orders_splitorders',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/orders/splitorders">Split Orders</Link>
                        ),
                      },
                      {
                        key: 'orders_restoreorders',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/orders/restoreorders">Restore Orders</Link>
                        ),
                      },
                      {
                        key: 'orders_markorders',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/orders/markorders">Mark Orders as Shipped</Link>
                        ),
                      },
                    ]
                  },
                  {
                    key: 'orders_edit',
                    icon: <AccountingIcon />,
                    label: 'How to Edit Orders',                      
                    children: [
                      {
                        key: '',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="">Add an item to an existing order</Link>
                        ),
                      },
                    ]
                  },
                  {
                    key: 'orders_exportorders',
                    icon: <AccountingIcon />,
                    label: (
                      <Link to="/help/orders/exportorders">How to Export Orders</Link>
                    )
                  },
                  {
                    key: 'orders_resolve',
                    icon: <AccountingIcon />,
                    label: 'How to Resolve Orders',                      
                    children: [
                      {
                        key: 'orders_resolve_missingproductinfo',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="">Missing Order Info</Link>
                        ),
                      },
                      {
                        key: 'orders_resolve_missingproductinfo',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/orders/resolvemissingproductinfo">Missing Product Info</Link>
                        ),
                      },
                      {
                        key: 'orders_resolve_outofstock',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/orders/resolveoutofstock">Missing Fulfillment Source</Link>
                        ),
                      },
                      {
                        key: 'orders_resolve_missingstocklocation',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/orders/resolvemissingstocklocation">Missing Stock Location</Link>
                        ),
                      },
                      {
                        key: 'orders_resolve_outofstock',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/orders/resolveoutofstock">Out of Stock</Link>
                        ),
                      },
                    ]
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
                    key: 'customers_searchcustomers',
                    icon: <AccountingIcon />,
                    label: (
                      <Link to="/help/customers/search">How to Search Customers</Link>
                    ),
                  },
                  {
                    key: 'customers_customersmodule',
                    icon: <AccountingIcon />,
                    label: (
                      <Link to="/help/customers/customersmodule">Customers Module</Link>
                    ),
                  },
                  {
                    key: 'customers_exportcustomerphonenumbers',
                    icon: <AccountingIcon />,
                    label: (
                      <Link to="/help/customers/exportcustomerphonenumbers">Exporting Customer Phone Numbers from the Orders Module</Link>
                    ),
                  },
                ],
              },
              {
                key: 'main7',
                icon: <AccountingIcon />,
                label: 'Products',
                children: [
                  {
                    key: 'products_general',
                    icon: <AccountingIcon />,
                    label: (
                      <Link to="/help/products/general">Products</Link>
                    ),
                  },
                  {
                    key: 'products_manageproducts',
                    icon: <AccountingIcon />,
                    label: (
                      <Link to="/help/products/manageproducts">How to Manage Products</Link>
                    ),
                  },
                  {
                    key: 'products_create',
                    icon: <AccountingIcon />,
                    label: 'How to Create Through the UI',                      
                    children: [
                      {
                        key: 'products_create_coreproduct',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/products/createcoreproduct">Create Core Products</Link>
                        ),
                      },
                      {
                        key: 'products_create_bundlekit',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/products/createbundlekit">Create Bundles/Kits</Link>
                        ),
                      },
                      {
                        key: 'products_create_productvariations',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/products/createproductvariations">Create Product Variations</Link>
                        ),
                      },
                    ]
                  },
                  {
                    key: '',
                    icon: <AccountingIcon />,
                    label: 'How to Import',
                    children: [
                      {
                        key: 'products_importproducts',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/products/importproducts">Import Products</Link>
                        ),
                      },
                      {
                        key: 'products_importvendorproducts',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/products/importvendorproducts">Import Vendor Products</Link>
                        ),
                      },
                      {
                        key: 'products_importskuadjustments',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/products/importskuadjustments">Import SKU Adjustments</Link>
                        ),
                      },
                    ]
                  },
                  {
                    key: 'products_exportproducts',
                    icon: <AccountingIcon />,
                    label: (
                      <Link to="/help/products/exportproducts">How to Export Products</Link>
                    ),
                  },
                  {
                    key: 'products_searchproducts',
                    icon: <AccountingIcon />,
                    label: (
                      <Link to="/help/products/searchproducts">How to Search Products</Link>
                    ),
                  },
                  {
                    key: 'products_customproductfields',
                    icon: <AccountingIcon />,
                    label: (
                      <Link to="/help/products/customproductfields">How to Create Custom Product Fields</Link>
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
        
        <div className='help-content'>
          {renderableContent}
        </div>
        

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