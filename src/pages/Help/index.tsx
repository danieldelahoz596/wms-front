import { SampleSplitter } from '@/utils/components/SampleSplitter';
import { PageContainer } from '@ant-design/pro-components';
import { Layout, Menu } from 'antd';
import { useResizable } from 'react-resizable-layout';

import AccountingIcon from '@/utils/icons/accounting';
import BiggestTicketsIcon from '@/utils/icons/biggestTickets';
import CustomersIcon from '@/utils/icons/customers';
import InventoryIcon from '@/utils/icons/inventory';
import OrdersIcon from '@/utils/icons/orders';
import ProductsIcon from '@/utils/icons/products';
import SalesIcon from '@/utils/icons/sales';
import ShippingIcon from '@/utils/icons/shipping';
import { BellOutlined, UserOutlined } from '@ant-design/icons';

import { Link } from '@umijs/max';
import type { MenuProps } from 'antd';
import React, { useState } from 'react';

// Dashboard
import Dashboard from './Dashboard/dashboard';
import SkuAlerts from './Dashboard/skualerts';

// Orders
import Cancelorders from './Orders/cancelorders';
import Exportorders from './Orders/exportorders';
import Orders from './Orders/orders';

// Inventory

// Purchase Order

// Shipments

// Customers
import Customersmodule from './Customers/customersmodule';
import Exportcustomerphonenumbers from './Customers/exportcustomerphonenumbers';
import Searchcustomers from './Customers/searchcustomers';

// Products
import CreateBundleKit from './Products/createbundlekit';
import CreateCoreProduct from './Products/createcoreproduct';
import CreateProductVariations from './Products/createproductvariations';
import Customproductfields from './Products/customproductfields';
import Exportcustombundlekit from './Products/exportcustombundlekit';
import Exportproducts from './Products/exportproducts';
import Exportvendorproducts from './Products/exportvendorproducts';
import Importproducts from './Products/importproducts';
import ImportSkuAdjustments from './Products/importskuadjustments';
import ImportVendorProducts from './Products/importvendorproducts';
import Manageproducts from './Products/manageproducts';
import Products from './Products/products';
import Searchproducts from './Products/searchproducts';

// Analytics
import Analyticsreports from './Analytics/General/analyticsreports';
import Exportingreports from './Analytics/General/exportingreports';
import Printingchartsfromanalytics from './Analytics/General/printingchartsfromanalytics';
import Theanalyticsmodules from './Analytics/General/theanalyticsmodules';
import Biggesttickets from './Analytics/Orders/biggesttickets';
import Historicalordersexports from './Analytics/Orders/historicalordersexports';
import Salesoverview from './Analytics/Orders/salesoverview';
import Shipments from './Analytics/Orders/shipments';
import Analyticslistingprofitability from './Analytics/Products/analyticslistingprofitability';
import Analyticsskuprofitability from './Analytics/Products/analyticsskuprofitability';
import Yoygrowth from './Analytics/Products/yoygrowth';
import Topsellersandworstsellersreports from './Analytics/Products/topsellersandworstsellersreports';
import Analyticstrendingprofitability from './Analytics/Products/analyticstrendingprofitability';
import Historicalpurchaseordersexports from './Analytics/PurchaseOrders/historicalpurchaseordersexports';
import Opportunitiesfoundbyextensivordermanager from './Analytics/Dashboard/opportunitiesfoundbyextensivordermanager';
import Analyticsinventoryreplenishmentalerts from './Analytics/Inventory/analyticsinventoryreplenishmentalerts';
import Analyticssnapshotinventoryvalue from './Analytics/Inventory/analyticssnapshotinventoryvalue';
import Analyticstrendinginventoryvalue from './Analytics/Inventory/analyticstrendinginventoryvalue';
import Analyticscriticalinventorylevels from './Analytics/Inventory/analyticscriticalinventorylevels';
import Analyticsinventoryaging from './Analytics/Inventory/analyticsinventoryaging';


// Settings
import Companyinfo from './Settings/companyinfo';
import Myprofile from './Settings/myprofile';
import Useradministration from './Settings/useradministration';


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
  else if (selectKey === 'orders_cancelorders') renderableContent = <Cancelorders />;
  else if (selectKey === 'orders_general') renderableContent = <Orders />;
  else if (selectKey === 'orders_exportorders') renderableContent = <Exportorders />;
  else if (selectKey === 'customers_searchcustomers') renderableContent = <Searchcustomers />
  else if (selectKey === 'customers_customersmodule') renderableContent = <Customersmodule />
  else if (selectKey === 'customers_exportcustomerphonenumbers') renderableContent = <Exportcustomerphonenumbers />
  else if (selectKey === 'products_general') renderableContent = <Products />;
  else if (selectKey === 'products_manageproducts') renderableContent = <Manageproducts />
  else if (selectKey === 'products_create_coreproduct') renderableContent = <CreateCoreProduct />
  else if (selectKey === 'products_create_bundlekit') renderableContent = <CreateBundleKit />
  else if (selectKey === 'products_create_productvariations') renderableContent = <CreateProductVariations />
  else if (selectKey === 'products_importproducts') renderableContent = <Importproducts />
  else if (selectKey === 'products_importvendorproducts') renderableContent = <ImportVendorProducts />
  else if (selectKey === 'products_importskuadjustments') renderableContent = <ImportSkuAdjustments />
  else if (selectKey === 'products_exportproducts') renderableContent = <Exportproducts />
  else if (selectKey === 'products_exportvendorproducts') renderableContent = <Exportvendorproducts />
  else if (selectKey === 'products_exportcustombundlekit') renderableContent = <Exportcustombundlekit />
  else if (selectKey === 'products_searchproducts') renderableContent = <Searchproducts />
  else if (selectKey === 'products_customproductfields') renderableContent = <Customproductfields />
  else if (selectKey === 'analytics_orders_historicalexports') renderableContent = <Historicalordersexports />
  else if (selectKey === 'analytics_orders_salesoverview') renderableContent = <Salesoverview />
  else if (selectKey === 'analytics_orders_biggesttickets') renderableContent = <Biggesttickets />
  else if (selectKey === 'analytics_orders_shipments') renderableContent = <Shipments />
  else if (selectKey === 'analytics_general_theanalyticsmodules') renderableContent = <Theanalyticsmodules />
  else if (selectKey === 'analytics_general_analyticsreports') renderableContent = <Analyticsreports />
  else if (selectKey === 'analytics_general_printingchartsfromanalytics') renderableContent = <Printingchartsfromanalytics />
  else if (selectKey === 'analytics_general_exportingreports') renderableContent = <Exportingreports />
  else if (selectKey === 'analytics_products_analyticsskuprofitability') renderableContent = <Analyticsskuprofitability />
  else if (selectKey === 'analytics_products_yoygrowth') renderableContent = <Yoygrowth />
  else if (selectKey === 'analytics_products_analyticslistingprofitability') renderableContent = <Analyticslistingprofitability />
  else if (selectKey === 'analytics_products_topsellersandworstsellersreports') renderableContent = <Topsellersandworstsellersreports />
  else if (selectKey === 'analytics_products_analyticstrendingprofitability') renderableContent = <Analyticstrendingprofitability />
  else if (selectKey === 'analytics_dashboard_opportunitiesfoundbyextensivordermanagery') renderableContent = <Opportunitiesfoundbyextensivordermanager />
  else if (selectKey === 'analytics_inventory_analyticsinventoryreplenishmentalerts') renderableContent = <Analyticsinventoryreplenishmentalerts />
  else if (selectKey === 'analytics_inventory_analyticssnapshotinventoryvalue') renderableContent = <Analyticssnapshotinventoryvalue />
  else if (selectKey === 'analytics_inventory_analyticstrendinginventoryvalue') renderableContent = <Analyticstrendinginventoryvalue />
  else if (selectKey === 'analytics_inventory_analyticscriticalinventorylevels') renderableContent = <Analyticscriticalinventorylevels />
  else if (selectKey === 'analytics_inventory_analyticsinventoryaging') renderableContent = <Analyticsinventoryaging />
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
                    key: 'products_import',
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
                    key: 'products_export',
                    icon: <AccountingIcon />,
                    label: 'How to Export',
                    children: [
                      {
                        key: 'products_exportproducts',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/products/exportproducts">Export Products</Link>
                        ),
                      },
                      {
                        key: 'products_exportvendorproducts',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/products/exportvendorproducts">Export Vendor Products</Link>
                        ),
                      },
                      {
                        key: 'products_exportcustombundlekit',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/products/exportcustombundlekit">Export Custom Bundle/Kit</Link>
                        ),
                      },
                    ]
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
                    icon: <SalesIcon />,
                    label: 'General',
                    children: [
                      {
                        key: 'analytics_general_theanalyticsmodules',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/general/theanalyticsmodules">The Analytics Module's Landing Page</Link>
                        ),
                      },
                      {
                        key: 'analytics_general_analyticsreports',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/general/analyticsreports">Analytics Reports</Link>
                        ),
                      },
                      {
                        key: 'analytics_general_printingchartsfromanalytics',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/general/printingchartsfromanalytics">Printing Charts from Analytics</Link>
                        ),
                      },
                      {
                        key: 'analytics_general_exportingreports',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/general/exportingreports">Exporting Reports</Link>
                        ),
                      },
                    ],
                  },
                  {
                    key: 'sub84',
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
                      {
                        key: 'analytics_orders_salesoverview',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/orders/salesoverview">Sales Overview</Link>
                        ),
                      },
                      {
                        key: 'analytics_orders_biggesttickets',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/orders/biggesttickets">Biggest Tickets</Link>
                        ),
                      },
                      {
                        key: 'analytics_orders_shipments',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/orders/shipments">Shipments</Link>
                        ),
                      },
                    ],
                  },
                  {
                    key: 'sub85',
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
                  {
                    key: 'sub86',
                    icon: <OrdersIcon />,
                    label: 'Products',
                    children: [
                      {
                        key: 'analytics_products_analyticsskuprofitability',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/products/analyticsskuprofitability">Analytics - SKU Profitability</Link>
                        ),
                      },
                      {
                        key: 'analytics_products_yoygrowth',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/products/yoygrowth">Y-O-Y Growth</Link>
                        ),
                      },
                      {
                        key: 'analytics_products_analyticslistingprofitability',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/products/analyticslistingprofitability">Analytics - Listing Profitability</Link>
                        ),
                      },
                      {
                        key: 'analytics_products_topsellersandworstsellersreports',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/products/topsellersandworstsellersreports">Top Sellers & Worst Sellers Reports</Link>
                        ),
                      },
                      {
                        key: 'analytics_products_analyticstrendingprofitability',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/products/analyticstrendingprofitability">Analytics - Trending Profitability</Link>
                        ),
                      },
                    ],
                  },
                  {
                    key: 'sub87',
                    icon: <OrdersIcon />,
                    label: 'Dashboard',
                    children: [
                      {
                        key: 'analytics_dashboard_opportunitiesfoundbyextensivordermanagery',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/dashboard/opportunitiesfoundbyextensivordermanager">Opportunities Found by Extensiv Order Manager</Link>
                        ),
                      },
                    ],
                  },
                  {
                    key: 'sub88',
                    icon: <OrdersIcon />,
                    label: 'Inventory',
                    children: [
                      {
                        key: 'analytics_inventory_analyticsinventoryreplenishmentalerts',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/inventory/analyticsinventoryreplenishmentalerts">Analytics - Inventory Replenishment Alerts</Link>
                        ),
                      },
                      {
                        key: 'analytics_inventory_analyticssnapshotinventoryvalue',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/inventory/analyticssnapshotinventoryvalue">Analytics - Snapshot Inventory Value</Link>
                        ),
                      },
                      {
                        key: 'analytics_inventory_analyticstrendinginventoryvalue',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/inventory/analyticstrendinginventoryvalue">Analytics - Trending Inventory Value</Link>
                        ),
                      },
                      {
                        key: 'analytics_inventory_analyticscriticalinventorylevels',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/inventory/analyticscriticalinventorylevels">Analytics - Critical Inventory Levels</Link>
                        ),
                      },
                      {
                        key: 'analytics_inventory_analyticsinventoryaging',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/inventory/analyticsinventoryaging">Analytics - Inventory Aging</Link>
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